export interface User {
  id: string;
  name: string;
  archetype?: string;
  completedScenarios: string[];
  growthAreas: GrowthArea[];
}

export interface GrowthArea {
  id: string;
  name: string;
  score: number;
  lastUpdated: Date;
  improvement?: number;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  situation: string;
  choices: Choice[];
  growthAreas: string[];
}

export interface Choice {
  id: string;
  text: string;
  feedback: string;
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