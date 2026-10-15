import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AdminAuthContextType {
  isAuthenticated: boolean;
  isDefaultPassword: boolean;
  adminName: string;
  login: (password: string, remember?: boolean) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  changePassword: (currentPassword: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  resetToDefaultPassword: () => Promise<void>;
  isLockedOut: boolean;
  lockoutRemainingSeconds: number;
}

const STORAGE_HASH_KEY = 'nando_admin_pwd_hash_v1';
const STORAGE_IS_CUSTOM_KEY = 'nando_admin_pwd_is_custom_v1';
const STORAGE_AUTH_TOKEN_KEY = 'nando_admin_auth_token_v1';
const SESSION_AUTH_TOKEN_KEY = 'nando_admin_session_token_v1';
const STORAGE_FAILED_ATTEMPTS_KEY = 'nando_admin_failed_attempts_v1';

// Default initial password: admin123
export const DEFAULT_ADMIN_PASSWORD = 'admin123';

// SHA-256 helper using native browser Web Crypto API
async function sha256(message: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isDefaultPassword, setIsDefaultPassword] = useState<boolean>(true);
  const [storedHash, setStoredHash] = useState<string>('');
  const [isLockedOut, setIsLockedOut] = useState<boolean>(false);
  const [lockoutRemainingSeconds, setLockoutRemainingSeconds] = useState<number>(0);

  // Initialize hash & check active sessions on mount
  useEffect(() => {
    const init = async () => {
      try {
        let currentHash = localStorage.getItem(STORAGE_HASH_KEY);
        const isCustom = localStorage.getItem(STORAGE_IS_CUSTOM_KEY) === 'true';

        if (!currentHash) {
          currentHash = await sha256(DEFAULT_ADMIN_PASSWORD);
          localStorage.setItem(STORAGE_HASH_KEY, currentHash);
          localStorage.setItem(STORAGE_IS_CUSTOM_KEY, 'false');
          setIsDefaultPassword(true);
        } else {
          setIsDefaultPassword(!isCustom);
        }
        setStoredHash(currentHash);

        // Check if there is an active session
        const sessionToken = sessionStorage.getItem(SESSION_AUTH_TOKEN_KEY);
        const localToken = localStorage.getItem(STORAGE_AUTH_TOKEN_KEY);

        if (sessionToken || localToken) {
          setIsAuthenticated(true);
        }

        // Check lockouts
        const failedData = localStorage.getItem(STORAGE_FAILED_ATTEMPTS_KEY);
        if (failedData) {
          const parsed = JSON.parse(failedData);
          if (parsed.lockedUntil && parsed.lockedUntil > Date.now()) {
            setIsLockedOut(true);
            setLockoutRemainingSeconds(Math.ceil((parsed.lockedUntil - Date.now()) / 1000));
          }
        }
      } catch (err) {
        console.warn('Error during AdminAuth init:', err);
      }
    };

    init();
  }, []);

  // Lockout countdown timer
  useEffect(() => {
    if (!isLockedOut || lockoutRemainingSeconds <= 0) return;

    const timer = setInterval(() => {
      setLockoutRemainingSeconds(prev => {
        if (prev <= 1) {
          setIsLockedOut(false);
          localStorage.removeItem(STORAGE_FAILED_ATTEMPTS_KEY);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isLockedOut, lockoutRemainingSeconds]);

  const recordFailedAttempt = (): number => {
    try {
      const failedData = localStorage.getItem(STORAGE_FAILED_ATTEMPTS_KEY);
      let attempts = 1;
      if (failedData) {
        const parsed = JSON.parse(failedData);
        attempts = (parsed.attempts || 0) + 1;
      }

      if (attempts >= 5) {
        const lockUntil = Date.now() + 30 * 1000; // 30 seconds lockout
        localStorage.setItem(
          STORAGE_FAILED_ATTEMPTS_KEY,
          JSON.stringify({ attempts, lockedUntil: lockUntil })
        );
        setIsLockedOut(true);
        setLockoutRemainingSeconds(30);
      } else {
        localStorage.setItem(
          STORAGE_FAILED_ATTEMPTS_KEY,
          JSON.stringify({ attempts, lockedUntil: null })
        );
      }
      return attempts;
    } catch (e) {
      console.warn(e);
      return 1;
    }
  };

  const clearFailedAttempts = () => {
    try {
      localStorage.removeItem(STORAGE_FAILED_ATTEMPTS_KEY);
      setIsLockedOut(false);
      setLockoutRemainingSeconds(0);
    } catch (e) {
      console.warn(e);
    }
  };

  const login = async (password: string, remember: boolean = true): Promise<{ success: boolean; error?: string }> => {
    if (isLockedOut) {
      return {
        success: false,
        error: `Muitas tentativas incorretas. Aguarde ${lockoutRemainingSeconds}s para tentar novamente.`
      };
    }

    if (!password || password.trim().length === 0) {
      return { success: false, error: 'Por favor, digite a senha de acesso.' };
    }

    const inputHash = await sha256(password);
    let targetHash = storedHash;
    if (!targetHash) {
      targetHash = localStorage.getItem(STORAGE_HASH_KEY) || (await sha256(DEFAULT_ADMIN_PASSWORD));
      setStoredHash(targetHash);
    }

    if (inputHash === targetHash) {
      clearFailedAttempts();
      const token = `auth_${Date.now()}_${Math.random().toString(36).substring(2)}`;

      if (remember) {
        localStorage.setItem(STORAGE_AUTH_TOKEN_KEY, token);
      } else {
        sessionStorage.setItem(SESSION_AUTH_TOKEN_KEY, token);
      }

      setIsAuthenticated(true);
      return { success: true };
    } else {
      const attempts = recordFailedAttempt();
      const remainingAttempts = Math.max(0, 5 - attempts);
      if (remainingAttempts === 0) {
        return {
          success: false,
          error: 'Limite de 5 tentativas atingido. Acesso bloqueado por 30 segundos.'
        };
      }
      return {
        success: false,
        error: `Senha incorreta. Você possui mais ${remainingAttempts} tentativa(s).`
      };
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem(STORAGE_AUTH_TOKEN_KEY);
      sessionStorage.removeItem(SESSION_AUTH_TOKEN_KEY);
      setIsAuthenticated(false);
    } catch (e) {
      console.warn(e);
    }
  };

  const changePassword = async (
    currentPassword: string,
    newPassword: string
  ): Promise<{ success: boolean; error?: string }> => {
    if (!currentPassword) {
      return { success: false, error: 'Por favor, informe a senha atual.' };
    }
    if (!newPassword || newPassword.length < 6) {
      return { success: false, error: 'A nova senha deve ter pelo menos 6 caracteres.' };
    }
    if (currentPassword === newPassword) {
      return { success: false, error: 'A nova senha deve ser diferente da senha atual.' };
    }

    const curHash = await sha256(currentPassword);
    let targetHash = storedHash || (await sha256(DEFAULT_ADMIN_PASSWORD));

    if (curHash !== targetHash) {
      return { success: false, error: 'Senha atual incorreta.' };
    }

    const newHash = await sha256(newPassword);
    localStorage.setItem(STORAGE_HASH_KEY, newHash);
    localStorage.setItem(STORAGE_IS_CUSTOM_KEY, 'true');
    setStoredHash(newHash);
    setIsDefaultPassword(false);

    return { success: true };
  };

  const resetToDefaultPassword = async (): Promise<void> => {
    const defaultHash = await sha256(DEFAULT_ADMIN_PASSWORD);
    localStorage.setItem(STORAGE_HASH_KEY, defaultHash);
    localStorage.setItem(STORAGE_IS_CUSTOM_KEY, 'false');
    setStoredHash(defaultHash);
    setIsDefaultPassword(true);
    clearFailedAttempts();
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        isDefaultPassword,
        adminName: 'Nando Silva (Admin)',
        login,
        logout,
        changePassword,
        resetToDefaultPassword,
        isLockedOut,
        lockoutRemainingSeconds
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = (): AdminAuthContextType => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
