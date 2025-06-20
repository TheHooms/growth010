import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, GrowthArea } from '../types';

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  updateArchetype: (archetype: string) => void;
  addCompletedScenario: (scenarioId: string) => void;
  updateGrowthArea: (areaId: string, score: number) => void;
  isOnboarded: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const updateArchetype = (archetype: string) => {
    if (user) {
      setUser({ ...user, archetype });
    }
  };

  const addCompletedScenario = (scenarioId: string) => {
    if (user) {
      if (!user.completedScenarios.includes(scenarioId)) {
        setUser({
          ...user,
          completedScenarios: [...user.completedScenarios, scenarioId]
        });
      }
    }
  };

  const updateGrowthArea = (areaId: string, score: number) => {
    if (user) {
      const existingAreaIndex = user.growthAreas.findIndex(area => area.id === areaId);
      
      if (existingAreaIndex !== -1) {
        const updatedAreas = [...user.growthAreas];
        const oldScore = updatedAreas[existingAreaIndex].score;
        updatedAreas[existingAreaIndex] = {
          ...updatedAreas[existingAreaIndex],
          score,
          improvement: score - oldScore,
          lastUpdated: new Date()
        };
        
        setUser({
          ...user,
          growthAreas: updatedAreas
        });
      } else {
        setUser({
          ...user,
          growthAreas: [
            ...user.growthAreas,
            {
              id: areaId,
              name: areaId.charAt(0).toUpperCase() + areaId.slice(1).replace('-', ' '),
              score,
              lastUpdated: new Date()
            }
          ]
        });
      }
    }
  };

  const isOnboarded = user !== null && user.archetype !== undefined;

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser, 
      updateArchetype, 
      addCompletedScenario, 
      updateGrowthArea,
      isOnboarded
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};