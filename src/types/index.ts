export interface User {
  id: string;
  name: string;
  archetype?: string;
  completedScenarios: string[];
  growthAreas: GrowthArea[];
  streaks: UserStreaks;
  badges: Badge[];
  level: number;
  totalXP: number;
}

export interface UserStreaks {
  current: number;
  longest: number;
  lastActivity: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
  category: 'scenarios' | 'growth' | 'consistency' | 'mastery';
}

export interface GrowthArea {
  id: string;
  name: string;
  score: number;
  lastUpdated: Date;
  improvement?: number;
  level: 'foundational' | 'applied';
  xpEarned: number;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  situation: string;
  roleContext: {
    yourRole: string;
    teamSize?: string;
    timeline?: string;
    stakes?: string;
    pressure?: string;
    stakeholders?: string;
    history?: string;
  };
  choices: Choice[];
  growthAreas: string[];
  difficulty: 'foundational' | 'applied';
  xpReward: number;
}

export interface Choice {
  id: string;
  text: string;
  feedback: string;
  consequences: {
    immediate: string;
    shortTerm: string;
    longTerm: string;
  };
  impactAreas: {
    area: string;
    impact: number;
  }[];
}

export interface Assessment {
  id: string;
  title: string;
  questions: AssessmentQuestion[];
}

export interface AssessmentQuestion {
  id: string;
  text: string;
  options: AssessmentOption[];
}

export interface AssessmentOption {
  id: string;
  text: string;
  archetypePoints: Record<string, number>;
}

export interface Archetype {
  id: string;
  name: string;
  description: string;
  strengths: string[];
  challenges: string[];
  growthAreas: string[];
}

export interface MicroAssessment {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    value: number;
  }[];
}