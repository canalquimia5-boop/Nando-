import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  onSnapshot, 
  writeBatch 
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ProjectItem } from '../i18n/translations';
import { useLanguage } from '../i18n/LanguageContext';

export interface ProjectsContextType {
  projects: ProjectItem[];
  addProject: (project: Omit<ProjectItem, 'id'>) => Promise<ProjectItem>;
  updateProject: (id: number, updated: Partial<ProjectItem>) => Promise<void>;
  removeProject: (id: number) => Promise<void>;
  resetToDefaults: () => Promise<void>;
  exportProjectsJSON: () => string;
  importProjectsJSON: (jsonStr: string) => Promise<{ success: boolean; message: string }>;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isCloudSynced: boolean;
  cloudStatus: 'connecting' | 'synced' | 'offline';
}

const STORAGE_KEY = 'nando_silva_custom_projects_v2';
const PROJECTS_COLLECTION = 'projects';

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useLanguage();
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isCloudSynced, setIsCloudSynced] = useState(false);
  const [cloudStatus, setCloudStatus] = useState<'connecting' | 'synced' | 'offline'>('connecting');

  // Initialize projects from localStorage or default translation items for immediate render
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading projects from localStorage', e);
    }
    return t.projects.items;
  });

  // Keep localStorage updated as cache
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (e) {
      console.warn('Error saving projects to localStorage', e);
    }
  }, [projects]);

  // Connect to Firebase Firestore in real time
  useEffect(() => {
    let isSubscribed = true;

    try {
      const projectsCol = collection(db, PROJECTS_COLLECTION);
      
      const unsubscribe = onSnapshot(
        projectsCol,
        async (snapshot) => {
          if (!isSubscribed) return;

          if (snapshot.empty) {
            // First time setup: Seed default projects into Firestore
            console.log('Seeding initial projects to Firestore...');
            try {
              const batch = writeBatch(db);
              const initialItems = t.projects.items;
              
              initialItems.forEach((item, index) => {
                const docRef = doc(db, PROJECTS_COLLECTION, String(item.id));
                const itemData = {
                  id: Number(item.id),
                  title: String(item.title || ''),
                  url: String(item.url || ''),
                  categoryKey: String(item.categoryKey || 'institutional'),
                  originalCategory: String(item.originalCategory || 'Institucional'),
                  image: String(item.image || ''),
                  description: String(item.description || ''),
                  createdAt: Date.now() - (index * 1000)
                };
                batch.set(docRef, itemData);
              });

              await batch.commit();
              console.log('Initial projects seeded successfully to Firestore.');
            } catch (seedErr) {
              console.warn('Could not seed initial projects to Firestore:', seedErr);
            }
            setIsCloudSynced(true);
            setCloudStatus('synced');
            return;
          }

          const firestoreProjects: ProjectItem[] = [];
          snapshot.forEach((docSnapshot) => {
            const data = docSnapshot.data();
            firestoreProjects.push({
              id: Number(data.id || docSnapshot.id),
              title: data.title || '',
              categoryKey: data.categoryKey || 'institutional',
              originalCategory: data.originalCategory || 'Institucional',
              image: data.image || '',
              description: data.description || '',
              url: data.url || ''
            });
          });

          // Sort by id descending so newly added projects appear at top
          firestoreProjects.sort((a, b) => Number(b.id) - Number(a.id));

          if (isSubscribed) {
            setProjects(firestoreProjects);
            setIsCloudSynced(true);
            setCloudStatus('synced');
          }
        },
        (error) => {
          console.warn('Firestore onSnapshot listener error (falling back to local cache):', error);
          if (isSubscribed) {
            setCloudStatus('offline');
            setIsCloudSynced(false);
          }
        }
      );

      return () => {
        isSubscribed = false;
        unsubscribe();
      };
    } catch (err) {
      console.warn('Failed to attach Firestore listener:', err);
      setCloudStatus('offline');
      setIsCloudSynced(false);
    }
  }, [t.projects.items]);

  const addProject = async (projectData: Omit<ProjectItem, 'id'>): Promise<ProjectItem> => {
    const newId = Date.now();
    const newProject: ProjectItem = {
      ...projectData,
      id: newId
    };

    // Optimistic local update
    setProjects(prev => [newProject, ...prev]);

    // Persist to Cloud Firestore
    try {
      const docRef = doc(db, PROJECTS_COLLECTION, String(newId));
      await setDoc(docRef, {
        id: newId,
        title: newProject.title,
        url: newProject.url,
        categoryKey: newProject.categoryKey,
        originalCategory: newProject.originalCategory || 'Institucional',
        image: newProject.image,
        description: newProject.description,
        createdAt: Date.now()
      });
      setIsCloudSynced(true);
      setCloudStatus('synced');
    } catch (err) {
      console.warn('Error saving new project to Firestore:', err);
    }

    return newProject;
  };

  const updateProject = async (id: number, updated: Partial<ProjectItem>): Promise<void> => {
    // Optimistic local update
    setProjects(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updated } : item))
    );

    // Persist to Cloud Firestore
    try {
      const docRef = doc(db, PROJECTS_COLLECTION, String(id));
      const payload: Record<string, any> = {};
      if (updated.title !== undefined) payload.title = updated.title;
      if (updated.url !== undefined) payload.url = updated.url;
      if (updated.categoryKey !== undefined) payload.categoryKey = updated.categoryKey;
      if (updated.originalCategory !== undefined) payload.originalCategory = updated.originalCategory;
      if (updated.image !== undefined) payload.image = updated.image;
      if (updated.description !== undefined) payload.description = updated.description;

      await setDoc(docRef, payload, { merge: true });
    } catch (err) {
      console.warn('Error updating project in Firestore:', err);
    }
  };

  const removeProject = async (id: number): Promise<void> => {
    // Optimistic local update
    setProjects(prev => prev.filter(item => item.id !== id));

    // Delete from Cloud Firestore
    try {
      const docRef = doc(db, PROJECTS_COLLECTION, String(id));
      await deleteDoc(docRef);
    } catch (err) {
      console.warn('Error deleting project from Firestore:', err);
    }
  };

  const resetToDefaults = async (): Promise<void> => {
    const defaultList = t.projects.items;
    setProjects(defaultList);

    try {
      const batch = writeBatch(db);
      // Delete existing projects in Firestore
      projects.forEach(p => {
        batch.delete(doc(db, PROJECTS_COLLECTION, String(p.id)));
      });

      // Insert defaults
      defaultList.forEach((item, index) => {
        const docRef = doc(db, PROJECTS_COLLECTION, String(item.id));
        batch.set(docRef, {
          id: Number(item.id),
          title: item.title,
          url: item.url,
          categoryKey: item.categoryKey,
          originalCategory: item.originalCategory || 'Institucional',
          image: item.image,
          description: item.description,
          createdAt: Date.now() - (index * 1000)
        });
      });

      await batch.commit();
      setIsCloudSynced(true);
      setCloudStatus('synced');
    } catch (e) {
      console.warn('Error resetting projects in Firestore:', e);
    }
  };

  const exportProjectsJSON = (): string => {
    return JSON.stringify(projects, null, 2);
  };

  const importProjectsJSON = async (jsonStr: string): Promise<{ success: boolean; message: string }> => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!Array.isArray(parsed)) {
        return { success: false, message: 'O arquivo JSON deve conter uma lista de projetos.' };
      }
      const valid = parsed.every(p => p.title && p.url);
      if (!valid) {
        return { success: false, message: 'Todos os projetos devem possuir ao menos título e URL.' };
      }

      setProjects(parsed);

      // Save imported to Firestore
      const batch = writeBatch(db);
      parsed.forEach((item, index) => {
        const itemId = item.id || Date.now() + index;
        const docRef = doc(db, PROJECTS_COLLECTION, String(itemId));
        batch.set(docRef, {
          id: Number(itemId),
          title: String(item.title),
          url: String(item.url),
          categoryKey: String(item.categoryKey || 'institutional'),
          originalCategory: String(item.originalCategory || 'Institucional'),
          image: String(item.image || ''),
          description: String(item.description || ''),
          createdAt: Date.now() + index
        });
      });
      await batch.commit();

      return { success: true, message: `${parsed.length} projetos sincronizados na nuvem com sucesso!` };
    } catch (err: any) {
      return { success: false, message: `Erro ao processar JSON: ${err?.message || 'Formato inválido'}` };
    }
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        removeProject,
        resetToDefaults,
        exportProjectsJSON,
        importProjectsJSON,
        isAdminOpen,
        setIsAdminOpen,
        isCloudSynced,
        cloudStatus
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = (): ProjectsContextType => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};
