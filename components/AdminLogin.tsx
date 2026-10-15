import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  Info,
  RotateCcw
} from 'lucide-react';
import { useAdminAuth, DEFAULT_ADMIN_PASSWORD } from '../context/AdminAuthContext';

interface AdminLoginProps {
  onClose: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onClose }) => {
  const { login, isLockedOut, lockoutRemainingSeconds, isDefaultPassword, resetToDefaultPassword } = useAdminAuth();
  
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLockedOut) return;

    setErrorMsg(null);
    setIsLoading(true);

    try {
      const res = await login(password, remember);
      if (!res.success) {
        setErrorMsg(res.error || 'Senha incorreta.');
      }
    } catch (err: any) {
      setErrorMsg('Ocorreu um erro ao verificar a senha.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseDefaultPassword = () => {
    setPassword(DEFAULT_ADMIN_PASSWORD);
    setErrorMsg(null);
  };

  const handleConfirmReset = async () => {
    await resetToDefaultPassword();
    setIsResetConfirmOpen(false);
    setResetSuccess(true);
    setPassword(DEFAULT_ADMIN_PASSWORD);
    setErrorMsg(null);
    setTimeout(() => setResetSuccess(false), 5000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl shadow-blue-950/40 overflow-hidden relative"
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="p-6 sm:p-8 border-b border-slate-800/80 bg-slate-900/60 relative">
          <button
            onClick={onClose}
            className="absolute top-6 left-6 inline-flex items-center text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors p-2 -ml-2 rounded-xl hover:bg-slate-800"
          >
            <ArrowLeft size={16} className="mr-1" />
            Voltar
          </button>

          <div className="flex flex-col items-center text-center pt-6">
            <div className="relative mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 text-white border border-blue-400/30">
                <Lock size={28} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-slate-900 shadow">
                <ShieldCheck size={14} className="stroke-[3]" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-white tracking-tight">
              Acesso Administrativo
            </h2>
            <p className="text-xs text-slate-400 mt-1.5 max-w-xs">
              Autentique-se para gerenciar, adicionar e remover projetos do portfólio
            </p>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Reset confirmation notification */}
          {resetSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2"
            >
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>Senha redefinida com sucesso para o padrão inicial: <strong>admin123</strong></span>
            </motion.div>
          )}

          {/* Lockout Warning */}
          {isLockedOut && (
            <div className="p-4 rounded-2xl bg-red-950/80 border border-red-500/40 text-red-200 text-xs space-y-1">
              <div className="flex items-center gap-2 font-bold text-red-300">
                <AlertCircle size={16} />
                Acesso temporariamente bloqueado
              </div>
              <p>
                Muitas tentativas sem sucesso. Aguarde <strong>{lockoutRemainingSeconds} segundos</strong> para tentar novamente.
              </p>
            </div>
          )}

          {/* Error Message */}
          <AnimatePresence>
            {errorMsg && !isLockedOut && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5"
              >
                <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span>{errorMsg}</span>
                  {isDefaultPassword && (
                    <button
                      type="button"
                      onClick={handleUseDefaultPassword}
                      className="block mt-1 font-bold text-blue-400 hover:text-blue-300 underline"
                    >
                      Preencher senha padrão inicial (admin123)
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Senha de Acesso</span>
                <span className="text-[11px] font-normal text-slate-500">Área protegida</span>
              </label>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <KeyRound size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  disabled={isLockedOut || isLoading}
                  placeholder="Digite sua senha..."
                  autoFocus
                  required
                  className="w-full pl-10 pr-12 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLockedOut}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition-colors"
                  title={showPassword ? 'Ocultar senha' : 'Exibir senha'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center space-x-2 text-slate-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500/30 w-4 h-4 cursor-pointer"
                />
                <span>Lembrar neste navegador</span>
              </label>

              <button
                type="button"
                onClick={() => setIsResetConfirmOpen(true)}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Esqueci a senha
              </button>
            </div>

            <button
              type="submit"
              disabled={isLockedOut || isLoading || !password}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <ShieldCheck size={18} />
                  <span>Entrar no Dashboard</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Helper for Default Password */}
          <div className="p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 text-xs text-slate-400 space-y-1.5">
            <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
              <Info size={14} />
              <span>Dica de Primeiro Acesso</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Senha padrão inicial: <code className="px-1.5 py-0.5 rounded bg-slate-800 text-blue-300 font-mono font-bold">admin123</code>.
              Você poderá alterá-la para uma senha pessoal no menu superior após o login.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Emergency Password Reset Modal */}
      <AnimatePresence>
        {isResetConfirmOpen && (
          <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <RotateCcw size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Redefinir Senha de Acesso?</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Isso irá restaurar a senha administrativa para a credencial padrão inicial: <strong className="text-white">admin123</strong>.
                </p>
              </div>
              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsResetConfirmOpen(false)}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleConfirmReset}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-colors shadow-lg shadow-amber-600/20"
                >
                  Confirmar Redefinição
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminLogin;
