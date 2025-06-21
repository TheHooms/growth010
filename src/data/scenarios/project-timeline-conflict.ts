import { Scenario } from '../../types';

export const projectTimelineConflictScenario: Scenario = {
  id: 'project-timeline-conflict',
  title: 'Project Timeline Conflict',
  description: 'Navigate a timeline conflict between engineering and marketing departments with competing priorities.',
  situation: 'You\'re a product designer embedded in a cross-functional team. Engineering estimates the new feature will take 3 months, but marketing has already committed to clients that it will be ready in 6 weeks. The design is central to the product experience, and you\'re being asked to reduce scope or speed up the design process. The VP of Product wants to know your recommendation by end of week, and both engineering and marketing are looking to you to either validate their timeline or propose a compromise. The feature is critical for Q4 revenue goals, and there\'s significant pressure to find a solution that works for everyone.',
  roleContext: {
    yourRole: 'Senior Product Designer',
    teamSize: 'Cross-functional team of 12 people (design, engineering, marketing, product)',
    timeline: 'Decision needed by end of week, feature launch in 6 weeks vs 3 months',
    stakes: 'Q4 revenue goals and client commitments',
    pressure: 'VP of Product expecting recommendation, conflicting department priorities',
    stakeholders: 'Engineering Team, Marketing Team, VP of Product, Clients',
    history: 'You\'ve successfully navigated similar timeline conflicts before'
  },
  choices: [
    {
      id: 'support-engineering',
      text: 'Support engineering\'s 3-month timeline and help marketing reset client expectations.',
      feedback: 'This approach prioritizes quality and technical feasibility, but requires difficult conversations with clients and may impact revenue goals.',
      consequences: {
        immediate: 'Marketing feels unsupported and faces challenging client conversations.',
        shortTerm: 'Quality design is delivered but some client relationships may be strained.',
        longTerm: 'Strong product foundation leads to better long-term client satisfaction and fewer post-launch issues.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 5 },
        { area: 'decision-making', impact: 8 }
      ]
    },
    {
      id: 'support-marketing',
      text: 'Support marketing\'s 6-week timeline and propose design shortcuts to meet the deadline.',
      feedback: 'This maintains client relationships and revenue goals but may compromise design quality and create technical debt.',
      consequences: {
        immediate: 'Marketing feels supported and client commitments are maintained.',
        shortTerm: 'Feature launches on time but may have usability issues requiring post-launch fixes.',
        longTerm: 'Potential user experience problems and technical debt that could impact product reputation.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 5 }
      ]
    },
    {
      id: 'phased-approach',
      text: 'Propose a phased release: core functionality in 6 weeks, enhanced features in 3 months.',
      feedback: 'This compromise balances immediate business needs with quality standards, requiring careful scope management and stakeholder alignment.',
      consequences: {
        immediate: 'Both teams feel heard and work together on defining the phased approach.',
        shortTerm: 'Core functionality launches on time with a clear roadmap for enhancements.',
        longTerm: 'Establishes you as a strategic problem-solver and improves cross-functional collaboration.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 9 },
        { area: 'decision-making', impact: 9 }
      ]
    },
    {
      id: 'escalate-decision',
      text: 'Present the trade-offs to the VP of Product and let them make the final decision.',
      feedback: 'While this ensures senior leadership involvement, it may be seen as avoiding responsibility and missing an opportunity to demonstrate strategic thinking.',
      consequences: {
        immediate: 'VP makes the decision but you may be seen as not taking ownership.',
        shortTerm: 'Conflict is resolved but your influence in future cross-functional decisions may be reduced.',
        longTerm: 'You may be excluded from strategic discussions and seen as someone who escalates rather than solves problems.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 3 },
        { area: 'emotional-intelligence', impact: 4 },
        { area: 'decision-making', impact: 4 }
      ]
    },
    {
      id: 'user-research',
      text: 'Propose rapid user research to validate which features are essential for the initial launch.',
      feedback: 'This data-driven approach provides objective criteria for decisions, though it adds time to an already tight timeline.',
      consequences: {
        immediate: 'Teams appreciate the user-centered approach but worry about timeline impact.',
        shortTerm: 'Research provides clear direction but may delay decision-making.',
        longTerm: 'Data-driven decisions lead to better outcomes and establish you as a strategic, user-focused leader.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 6 },
        { area: 'decision-making', impact: 8 }
      ]
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};