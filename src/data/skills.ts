export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  level: 'foundational' | 'applied';
  estimatedTime: string;
  prerequisites?: string[];
  relatedScenarios: string[];
  keyTechniques: string[];
  practicalApplications: string[];
  resources: {
    articles?: { title: string; url: string; readingTime: string }[];
    videos?: { title: string; url: string; duration: string }[];
    exercises?: { title: string; description: string; timeRequired: string }[];
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  skillCount: number;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'communication-feedback',
    name: 'Communication & Feedback',
    description: 'Essential skills for clear, effective workplace communication',
    color: 'blue',
    icon: 'MessageCircle',
    skillCount: 17
  },
  {
    id: 'leadership-influence',
    name: 'Leadership & Influence',
    description: 'Advanced skills for leading and influencing without formal authority',
    color: 'purple',
    icon: 'Users',
    skillCount: 12
  },
  {
    id: 'relationship-management',
    name: 'Relationship Management',
    description: 'Building and maintaining strong professional relationships',
    color: 'green',
    icon: 'Heart',
    skillCount: 10
  },
  {
    id: 'strategic-analytical',
    name: 'Strategic & Analytical',
    description: 'Data-driven decision making and strategic thinking',
    color: 'indigo',
    icon: 'Brain',
    skillCount: 12
  },
  {
    id: 'personal-development',
    name: 'Personal Development',
    description: 'Self-awareness and continuous growth mindsets',
    color: 'orange',
    icon: 'TrendingUp',
    skillCount: 8
  },
  {
    id: 'project-process',
    name: 'Project & Process Management',
    description: 'Effective project execution and process improvement',
    color: 'teal',
    icon: 'Settings',
    skillCount: 6
  }
];

export const skills: Skill[] = [
  // Communication & Feedback Skills
  {
    id: 'technical-communication',
    name: 'Technical Communication',
    category: 'communication-feedback',
    description: 'Effectively communicate complex technical concepts to diverse audiences',
    level: 'foundational',
    estimatedTime: '2-3 weeks',
    relatedScenarios: ['cross-functional-disagreement'],
    keyTechniques: [
      'Simplifying complex concepts',
      'Using analogies and metaphors',
      'Visual communication methods',
      'Audience-appropriate language'
    ],
    practicalApplications: [
      'Explaining technical constraints to business stakeholders',
      'Writing clear documentation',
      'Presenting technical solutions to executives',
      'Training non-technical team members'
    ],
    resources: {
      articles: [
        { title: 'The Art of Technical Storytelling', url: '/articles/technical-storytelling', readingTime: '8 mins' },
        { title: 'Bridging the Technical-Business Gap', url: '/articles/tech-business-bridge', readingTime: '6 mins' }
      ],
      videos: [
        { title: 'Technical Communication Masterclass', url: '/videos/tech-comm', duration: '15:30' }
      ],
      exercises: [
        { title: 'Explain It Simply Challenge', description: 'Practice explaining complex concepts in under 2 minutes', timeRequired: '30 mins' }
      ]
    }
  },
  {
    id: 'difficult-conversations',
    name: 'Difficult Conversations',
    category: 'communication-feedback',
    description: 'Navigate challenging discussions while maintaining relationships',
    level: 'applied',
    estimatedTime: '3-4 weeks',
    prerequisites: ['assertiveness', 'emotional-intelligence'],
    relatedScenarios: ['difficult-feedback', 'performance-review-disagreement'],
    keyTechniques: [
      'Preparation and framing',
      'Active listening under pressure',
      'De-escalation strategies',
      'Finding common ground'
    ],
    practicalApplications: [
      'Performance feedback conversations',
      'Conflict resolution meetings',
      'Salary negotiations',
      'Project disagreements'
    ],
    resources: {
      articles: [
        { title: 'The DISC Method for Difficult Conversations', url: '/articles/disc-method', readingTime: '10 mins' },
        { title: 'Maintaining Relationships During Conflict', url: '/articles/conflict-relationships', readingTime: '7 mins' }
      ],
      videos: [
        { title: 'Difficult Conversations Framework', url: '/videos/difficult-conv', duration: '12:45' }
      ],
      exercises: [
        { title: 'Conversation Simulation Practice', description: 'Role-play challenging scenarios with feedback', timeRequired: '45 mins' }
      ]
    }
  },
  {
    id: 'assertiveness',
    name: 'Professional Assertiveness',
    category: 'communication-feedback',
    description: 'Express your needs and boundaries clearly while respecting others',
    level: 'foundational',
    estimatedTime: '2-3 weeks',
    relatedScenarios: ['difficult-feedback', 'taking-credit', 'resource-allocation-conflict'],
    keyTechniques: [
      'I-statements and clear requests',
      'Boundary setting techniques',
      'Confident body language',
      'Saying no professionally'
    ],
    practicalApplications: [
      'Requesting resources or support',
      'Declining unreasonable requests',
      'Advocating for your ideas',
      'Setting work-life boundaries'
    ],
    resources: {
      articles: [
        { title: 'The Assertiveness Spectrum', url: '/articles/assertiveness-spectrum', readingTime: '6 mins' },
        { title: 'Cultural Considerations in Assertiveness', url: '/articles/cultural-assertiveness', readingTime: '8 mins' }
      ],
      videos: [
        { title: 'Assertiveness vs Aggression', url: '/videos/assertiveness', duration: '9:20' }
      ],
      exercises: [
        { title: 'Daily Assertiveness Practice', description: 'Practice one assertive communication daily', timeRequired: '15 mins/day' }
      ]
    }
  },

  // Leadership & Influence Skills
  {
    id: 'influence-without-authority',
    name: 'Influence Without Authority',
    category: 'leadership-influence',
    description: 'Lead and motivate others without formal power or hierarchy',
    level: 'applied',
    estimatedTime: '4-6 weeks',
    prerequisites: ['assertiveness', 'emotional-intelligence'],
    relatedScenarios: ['cross-functional-disagreement', 'project-timeline-conflict'],
    keyTechniques: [
      'Building credibility and trust',
      'Finding mutual benefits',
      'Storytelling for influence',
      'Coalition building'
    ],
    practicalApplications: [
      'Leading cross-functional projects',
      'Gaining stakeholder buy-in',
      'Driving organizational change',
      'Influencing senior leadership'
    ],
    resources: {
      articles: [
        { title: 'The Six Principles of Influence', url: '/articles/influence-principles', readingTime: '12 mins' },
        { title: 'Building Your Influence Network', url: '/articles/influence-network', readingTime: '9 mins' }
      ],
      videos: [
        { title: 'Influence Strategies Masterclass', url: '/videos/influence-strategies', duration: '18:30' }
      ],
      exercises: [
        { title: 'Influence Mapping Exercise', description: 'Map your influence network and identify growth opportunities', timeRequired: '60 mins' }
      ]
    }
  },
  {
    id: 'collaborative-leadership',
    name: 'Collaborative Leadership',
    category: 'leadership-influence',
    description: 'Lead through collaboration and shared decision-making',
    level: 'applied',
    estimatedTime: '3-4 weeks',
    prerequisites: ['influence-without-authority'],
    relatedScenarios: ['project-timeline-conflict', 'cross-functional-disagreement'],
    keyTechniques: [
      'Facilitation skills',
      'Consensus building',
      'Shared accountability',
      'Inclusive decision-making'
    ],
    practicalApplications: [
      'Leading diverse teams',
      'Managing matrix organizations',
      'Facilitating group decisions',
      'Building team alignment'
    ],
    resources: {
      articles: [
        { title: 'The Collaborative Leader\'s Toolkit', url: '/articles/collaborative-toolkit', readingTime: '10 mins' }
      ],
      videos: [
        { title: 'Facilitation Fundamentals', url: '/videos/facilitation', duration: '14:15' }
      ],
      exercises: [
        { title: 'Team Decision Facilitation', description: 'Practice facilitating a team decision process', timeRequired: '90 mins' }
      ]
    }
  },

  // Relationship Management Skills
  {
    id: 'cross-functional-collaboration',
    name: 'Cross-functional Collaboration',
    category: 'relationship-management',
    description: 'Work effectively across departments and disciplines',
    level: 'foundational',
    estimatedTime: '2-3 weeks',
    relatedScenarios: ['cross-functional-disagreement', 'project-timeline-conflict'],
    keyTechniques: [
      'Understanding different perspectives',
      'Building bridges between teams',
      'Managing competing priorities',
      'Creating shared goals'
    ],
    practicalApplications: [
      'Product development teams',
      'Marketing-sales alignment',
      'IT-business partnerships',
      'Cross-departmental projects'
    ],
    resources: {
      articles: [
        { title: 'Breaking Down Silos', url: '/articles/breaking-silos', readingTime: '8 mins' },
        { title: 'The Cross-functional Playbook', url: '/articles/cross-functional-playbook', readingTime: '11 mins' }
      ],
      videos: [
        { title: 'Cross-functional Success Stories', url: '/videos/cross-functional', duration: '13:20' }
      ],
      exercises: [
        { title: 'Stakeholder Mapping', description: 'Map stakeholders and their motivations across functions', timeRequired: '45 mins' }
      ]
    }
  },
  {
    id: 'manager-relationships',
    name: 'Manager Relationship Building',
    category: 'relationship-management',
    description: 'Build strong, productive relationships with your manager',
    level: 'foundational',
    estimatedTime: '2-3 weeks',
    relatedScenarios: ['career-growth-1on1', 'performance-review-disagreement'],
    keyTechniques: [
      'Understanding manager\'s priorities',
      'Proactive communication',
      'Managing up effectively',
      'Building trust and credibility'
    ],
    practicalApplications: [
      'Regular one-on-one meetings',
      'Project status updates',
      'Career development discussions',
      'Conflict resolution'
    ],
    resources: {
      articles: [
        { title: 'The Art of Managing Up', url: '/articles/managing-up', readingTime: '9 mins' },
        { title: 'Building Manager Trust', url: '/articles/manager-trust', readingTime: '7 mins' }
      ],
      videos: [
        { title: 'Effective 1:1 Meetings', url: '/videos/one-on-ones', duration: '11:45' }
      ],
      exercises: [
        { title: 'Manager Communication Audit', description: 'Assess and improve your manager communication', timeRequired: '30 mins' }
      ]
    }
  },

  // Strategic & Analytical Skills
  {
    id: 'strategic-decision-making',
    name: 'Strategic Decision Making',
    category: 'strategic-analytical',
    description: 'Make high-stakes decisions with incomplete information',
    level: 'applied',
    estimatedTime: '5-6 weeks',
    prerequisites: ['critical-thinking', 'data-driven-decision-making'],
    relatedScenarios: ['project-timeline-conflict', 'resource-allocation-conflict'],
    keyTechniques: [
      'Decision frameworks and models',
      'Risk assessment and mitigation',
      'Scenario planning',
      'Stakeholder impact analysis'
    ],
    practicalApplications: [
      'Product strategy decisions',
      'Resource allocation choices',
      'Market entry decisions',
      'Technology investments'
    ],
    resources: {
      articles: [
        { title: 'Strategic Decision Frameworks', url: '/articles/decision-frameworks', readingTime: '12 mins' },
        { title: 'Decision Making Under Uncertainty', url: '/articles/uncertain-decisions', readingTime: '10 mins' }
      ],
      videos: [
        { title: 'Strategic Thinking Masterclass', url: '/videos/strategic-thinking', duration: '22:15' }
      ],
      exercises: [
        { title: 'Decision Tree Analysis', description: 'Practice using decision trees for complex choices', timeRequired: '75 mins' }
      ]
    }
  },
  {
    id: 'data-driven-decision-making',
    name: 'Data-Driven Decision Making',
    category: 'strategic-analytical',
    description: 'Use data and analytics to inform strategic choices',
    level: 'foundational',
    estimatedTime: '3-4 weeks',
    relatedScenarios: ['research-data-conflict', 'project-timeline-conflict'],
    keyTechniques: [
      'Data collection and validation',
      'Statistical analysis basics',
      'Visualization and storytelling',
      'Bias recognition and mitigation'
    ],
    practicalApplications: [
      'A/B testing decisions',
      'Performance metric analysis',
      'Market research interpretation',
      'ROI calculations'
    ],
    resources: {
      articles: [
        { title: 'Data Storytelling Essentials', url: '/articles/data-storytelling', readingTime: '8 mins' },
        { title: 'Avoiding Data Bias', url: '/articles/data-bias', readingTime: '6 mins' }
      ],
      videos: [
        { title: 'Data Analysis for Non-Analysts', url: '/videos/data-analysis', duration: '16:30' }
      ],
      exercises: [
        { title: 'Data Interpretation Challenge', description: 'Practice interpreting and presenting data insights', timeRequired: '60 mins' }
      ]
    }
  },

  // Personal Development Skills
  {
    id: 'self-awareness',
    name: 'Self-Awareness Development',
    category: 'personal-development',
    description: 'Understand your strengths, weaknesses, and impact on others',
    level: 'foundational',
    estimatedTime: '2-3 weeks',
    relatedScenarios: ['difficult-feedback', 'performance-review-disagreement'],
    keyTechniques: [
      'Regular self-reflection',
      'Feedback collection and analysis',
      'Personality and strengths assessments',
      'Mindfulness practices'
    ],
    practicalApplications: [
      'Performance reviews',
      'Career planning',
      'Team dynamics improvement',
      'Leadership development'
    ],
    resources: {
      articles: [
        { title: 'The Self-Awareness Journey', url: '/articles/self-awareness-journey', readingTime: '7 mins' },
        { title: 'Blind Spots and How to Find Them', url: '/articles/blind-spots', readingTime: '9 mins' }
      ],
      videos: [
        { title: 'Building Self-Awareness', url: '/videos/self-awareness', duration: '12:00' }
      ],
      exercises: [
        { title: '360-Degree Feedback Collection', description: 'Gather feedback from multiple sources', timeRequired: '2 hours' }
      ]
    }
  },
  {
    id: 'emotional-intelligence',
    name: 'Emotional Intelligence',
    category: 'personal-development',
    description: 'Recognize and manage emotions in yourself and others',
    level: 'foundational',
    estimatedTime: '3-4 weeks',
    relatedScenarios: ['difficult-feedback', 'cross-functional-disagreement'],
    keyTechniques: [
      'Emotion recognition and labeling',
      'Empathy development',
      'Emotional regulation strategies',
      'Social awareness skills'
    ],
    practicalApplications: [
      'Team conflict resolution',
      'Customer interactions',
      'Stress management',
      'Leadership presence'
    ],
    resources: {
      articles: [
        { title: 'The Four Domains of EQ', url: '/articles/eq-domains', readingTime: '10 mins' },
        { title: 'Emotional Regulation at Work', url: '/articles/emotional-regulation', readingTime: '8 mins' }
      ],
      videos: [
        { title: 'Emotional Intelligence in Action', url: '/videos/eq-action', duration: '14:45' }
      ],
      exercises: [
        { title: 'Emotion Tracking Journal', description: 'Track emotions and triggers for one week', timeRequired: '15 mins/day' }
      ]
    }
  },

  // Project & Process Management Skills
  {
    id: 'agile-practices',
    name: 'Agile Development Practices',
    category: 'project-process',
    description: 'Apply agile methodologies for iterative project delivery',
    level: 'foundational',
    estimatedTime: '2-3 weeks',
    relatedScenarios: ['project-timeline-conflict'],
    keyTechniques: [
      'Sprint planning and execution',
      'Iterative development',
      'Continuous feedback loops',
      'Adaptive planning'
    ],
    practicalApplications: [
      'Software development projects',
      'Product development cycles',
      'Marketing campaigns',
      'Process improvement initiatives'
    ],
    resources: {
      articles: [
        { title: 'Agile Beyond Software', url: '/articles/agile-beyond-software', readingTime: '9 mins' },
        { title: 'Agile Mindset Fundamentals', url: '/articles/agile-mindset', readingTime: '7 mins' }
      ],
      videos: [
        { title: 'Agile Practices Overview', url: '/videos/agile-overview', duration: '13:30' }
      ],
      exercises: [
        { title: 'Sprint Planning Simulation', description: 'Practice planning and executing a sprint', timeRequired: '90 mins' }
      ]
    }
  },
  {
    id: 'process-improvement',
    name: 'Process Improvement',
    category: 'project-process',
    description: 'Identify and implement systematic improvements to workflows',
    level: 'applied',
    estimatedTime: '3-4 weeks',
    relatedScenarios: ['resource-allocation-conflict'],
    keyTechniques: [
      'Process mapping and analysis',
      'Root cause analysis',
      'Lean methodology',
      'Change management'
    ],
    practicalApplications: [
      'Workflow optimization',
      'Quality improvement',
      'Cost reduction initiatives',
      'Efficiency enhancement'
    ],
    resources: {
      articles: [
        { title: 'Process Improvement Methodologies', url: '/articles/process-methodologies', readingTime: '11 mins' },
        { title: 'Leading Process Change', url: '/articles/process-change', readingTime: '8 mins' }
      ],
      videos: [
        { title: 'Process Mapping Workshop', url: '/videos/process-mapping', duration: '17:20' }
      ],
      exercises: [
        { title: 'Process Analysis Project', description: 'Analyze and improve a real workflow', timeRequired: '3 hours' }
      ]
    }
  }
];

export const getSkillsByCategory = (categoryId: string): Skill[] => {
  return skills.filter(skill => skill.category === categoryId);
};

export const getSkillById = (skillId: string): Skill | undefined => {
  return skills.find(skill => skill.id === skillId);
};

export const getRelatedSkills = (skillId: string): Skill[] => {
  const skill = getSkillById(skillId);
  if (!skill) return [];
  
  return skills.filter(s => 
    s.category === skill.category && 
    s.id !== skillId
  ).slice(0, 3);
};

export const getSkillsByLevel = (level: 'foundational' | 'applied'): Skill[] => {
  return skills.filter(skill => skill.level === level);
};

export const searchSkills = (query: string): Skill[] => {
  const lowercaseQuery = query.toLowerCase();
  return skills.filter(skill => 
    skill.name.toLowerCase().includes(lowercaseQuery) ||
    skill.description.toLowerCase().includes(lowercaseQuery) ||
    skill.keyTechniques.some(technique => technique.toLowerCase().includes(lowercaseQuery))
  );
};