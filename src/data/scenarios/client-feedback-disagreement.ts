import { Scenario } from '../../types';

export const clientFeedbackDisagreementScenario: Scenario = {
  id: 'client-feedback-disagreement',
  title: 'Client Feedback Implementation Disagreement',
  description: 'Navigate a conflict with an account manager about implementing client feedback that you believe will compromise the creative integrity of a design project.',
  situation: 'You\'re a graphic designer working on a rebranding project for a major client. After presenting the initial concepts, the client provided feedback requesting significant changes that you believe will weaken the design\'s impact and effectiveness. The account manager, Lisa, is pushing for immediate implementation of all client requests, saying "the client is always right, and we need to keep them happy for future business." However, you feel strongly that some of the requested changes will result in a generic, ineffective design that won\'t achieve the client\'s stated goals. The revised presentation is due in three days, and you need to find a path forward.',
  roleContext: {
    yourRole: 'Senior Graphic Designer',
    teamSize: 'Creative team of 5 people plus account management',
    timeline: 'Revised presentation due in 3 days, final deliverables in 2 weeks',
    stakes: 'Major rebranding project worth $150K, potential for ongoing relationship',
    pressure: 'Account manager concerned about client satisfaction and future business',
    stakeholders: 'Account Manager (Lisa), Client, Creative Director, Design Team',
    history: 'You and Lisa have worked successfully on previous client projects'
  },
  choices: [
    {
      id: 'implement-all-feedback',
      text: 'Implement all client feedback as requested to maintain the relationship and avoid conflict.',
      feedback: 'While this maintains client satisfaction in the short term, it may result in an ineffective design that doesn\'t achieve the client\'s business goals and could damage your professional reputation.',
      consequences: {
        immediate: 'Lisa feels supported and the client relationship remains smooth.',
        shortTerm: 'The design may not perform well in market testing or real-world application.',
        longTerm: 'Your portfolio includes work that doesn\'t represent your best capabilities, and the client may blame you for poor results.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 2 },
        { area: 'emotional-intelligence', impact: 6 },
        { area: 'decision-making', impact: 3 }
      ]
    },
    {
      id: 'refuse-changes',
      text: 'Firmly refuse to implement the changes, insisting that your original design is the best solution.',
      feedback: 'While this protects creative integrity, it may damage client relationships and could be seen as inflexible or not understanding business needs.',
      consequences: {
        immediate: 'Lisa feels frustrated and the client may view the agency as difficult to work with.',
        shortTerm: 'The client relationship becomes strained, potentially affecting project completion and payment.',
        longTerm: 'You may be seen as difficult to work with, limiting your involvement in client-facing projects.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 3 },
        { area: 'decision-making', impact: 4 }
      ]
    },
    {
      id: 'collaborative-solution',
      text: 'Work with Lisa to understand the client\'s underlying concerns and propose alternative solutions that address their needs while maintaining design integrity.',
      feedback: 'This collaborative approach respects both creative standards and client relationships, often leading to innovative solutions that satisfy all stakeholders.',
      consequences: {
        immediate: 'Lisa feels supported and you both engage in creative problem-solving for the client.',
        shortTerm: 'You develop solutions that address client concerns while maintaining design effectiveness.',
        longTerm: 'You build a reputation as a collaborative professional who can balance creative and business needs effectively.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 8 }
      ]
    },
    {
      id: 'present-alternatives',
      text: 'Create multiple design variations that address the client\'s concerns while preserving different levels of creative integrity.',
      feedback: 'This approach provides the client with choices while demonstrating the impact of different design decisions, often leading to more informed client decisions.',
      consequences: {
        immediate: 'Lisa appreciates having options to present, and the client feels they have control over the decision.',
        shortTerm: 'The client can see the trade-offs between different approaches and make more informed choices.',
        longTerm: 'You build a reputation for thorough, client-focused design work while maintaining creative standards.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 8 }
      ]
    },
    {
      id: 'educate-client',
      text: 'Propose a client meeting to educate them about design strategy and the reasoning behind your original recommendations.',
      feedback: 'This approach builds client understanding and trust while positioning you as a strategic partner, though it requires strong communication skills and client openness.',
      consequences: {
        immediate: 'Lisa may be concerned about challenging the client, but appreciates your strategic thinking.',
        shortTerm: 'The client gains better understanding of design decisions and may become more collaborative.',
        longTerm: 'You establish yourself as a strategic design consultant rather than just an implementer.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 6 },
        { area: 'decision-making', impact: 7 }
      ]
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};