import { Scenario } from '../../types';

export const researchDataConflictScenario: Scenario = {
  id: 'research-data-conflict',
  title: 'Research Data Interpretation Conflict',
  description: 'Navigate a disagreement with a product marketing manager about how to present user research findings that could impact product strategy.',
  situation: 'You\'re a UX researcher who just completed a comprehensive user study on a new feature. The data shows that while users can complete tasks successfully, they express frustration with the complexity and would prefer a simpler approach. However, the product marketing manager, James, wants to highlight only the positive completion rates in the upcoming stakeholder presentation, arguing that "we need to show momentum to secure budget for the next quarter." He\'s concerned that presenting the user frustration data will make the feature look like a failure. The presentation to senior leadership is tomorrow, and you need to decide how to handle this conflict between research integrity and business pressure.',
  roleContext: {
    yourRole: 'UX Researcher',
    teamSize: 'Product team of 8 people including PM, designers, developers',
    timeline: 'Stakeholder presentation scheduled for tomorrow morning',
    stakes: 'Q4 budget allocation and feature roadmap decisions',
    pressure: 'Marketing team needs positive metrics to justify continued investment',
    stakeholders: 'Product Marketing Manager (James), Product Manager, Senior Leadership, Design Team',
    history: 'You and James have collaborated well on previous research presentations'
  },
  choices: [
    {
      id: 'present-full-data',
      text: 'Insist on presenting the complete research findings, including both positive metrics and user frustration data.',
      feedback: 'This approach maintains research integrity and provides stakeholders with complete information for decision-making, though it may create tension with marketing goals.',
      consequences: {
        immediate: 'James feels frustrated that you\'re not supporting the business case, creating immediate tension.',
        shortTerm: 'Leadership gets complete information but may question the feature\'s viability, potentially affecting budget.',
        longTerm: 'You build a reputation for research integrity, but may be seen as not understanding business needs.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 4 },
        { area: 'decision-making', impact: 7 }
      ]
    },
    {
      id: 'compromise-presentation',
      text: 'Work with James to find a balanced way to present both the positive metrics and improvement opportunities.',
      feedback: 'This collaborative approach respects both research integrity and business needs, potentially leading to better stakeholder understanding and decision-making.',
      consequences: {
        immediate: 'James feels heard and you both work together to craft a compelling narrative that includes all data.',
        shortTerm: 'Leadership gets complete information presented in a business-friendly way, supporting informed decisions.',
        longTerm: 'You build a reputation for being both rigorous and business-savvy, strengthening cross-functional relationships.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 8 }
      ]
    },
    {
      id: 'defer-to-marketing',
      text: 'Agree to present only the positive metrics as James suggests, focusing on business momentum.',
      feedback: 'While this maintains team harmony and supports immediate business goals, it compromises research integrity and may lead to poor long-term product decisions.',
      consequences: {
        immediate: 'James feels supported and the presentation aligns with marketing objectives.',
        shortTerm: 'Leadership may approve continued investment based on incomplete information.',
        longTerm: 'User frustration issues remain unaddressed, potentially leading to bigger problems and loss of research credibility.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 3 },
        { area: 'emotional-intelligence', impact: 5 },
        { area: 'decision-making', impact: 4 }
      ]
    },
    {
      id: 'escalate-to-pm',
      text: 'Bring the disagreement to the product manager to decide on the presentation approach.',
      feedback: 'While this ensures a decision gets made, it may signal inability to resolve cross-functional conflicts and could damage your relationship with James.',
      consequences: {
        immediate: 'The product manager makes a decision, but both you and James may feel the collaboration failed.',
        shortTerm: 'Future research-marketing discussions may be more formal and less collaborative.',
        longTerm: 'You may be seen as someone who escalates rather than solves cross-functional challenges independently.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 4 },
        { area: 'decision-making', impact: 5 }
      ]
    },
    {
      id: 'reframe-findings',
      text: 'Propose reframing the user frustration data as "optimization opportunities" with clear improvement recommendations.',
      feedback: 'This approach maintains research integrity while presenting findings in a business-positive way, potentially satisfying both research standards and marketing needs.',
      consequences: {
        immediate: 'James appreciates the business-friendly framing while you maintain research completeness.',
        shortTerm: 'Leadership gets complete information presented as opportunities rather than problems.',
        longTerm: 'You build a reputation for translating research insights into actionable business recommendations.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 8 }
      ]
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};