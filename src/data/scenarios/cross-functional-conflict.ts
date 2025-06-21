import { Scenario } from '../../types';

export const crossFunctionalConflictScenario: Scenario = {
  id: 'cross-functional-conflict',
  title: 'Cross-Functional Team Conflict',
  description: 'Resolve a heated disagreement between engineering and marketing teams that\'s blocking a critical project.',
  situation: 'The engineering team insists on a 3-month timeline for a new feature, while marketing has already promised it to key clients in 6 weeks. Both teams are digging in their heels, and the project is at a standstill.',
  roleContext: {
    yourRole: 'Product Director',
    stakeholders: 'Engineering Manager, Marketing Director, 3 key enterprise clients',
    timeline: 'Client demos scheduled in 6 weeks, contract renewals depend on this feature',
    stakes: '$2M in potential revenue at risk',
    history: 'This is the third time this year these teams have clashed over timelines'
  },
  choices: [
    {
      id: 'side-with-engineering',
      text: 'Support the engineering timeline and work with marketing to reset client expectations.',
      feedback: 'This shows respect for technical expertise and realistic planning, but may damage client relationships and marketing credibility.',
      consequences: {
        immediate: 'Engineering feels supported, marketing feels undermined.',
        shortTerm: 'Difficult client conversations, potential contract delays, but higher quality delivery.',
        longTerm: 'Better engineering-product relationship, but marketing may lose trust in your support.'
      },
      impactAreas: [
        { area: 'decision-making', impact: 7 },
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 4 }
      ]
    },
    {
      id: 'compromise-solution',
      text: 'Facilitate a compromise by identifying which features can be delivered in 6 weeks vs. 3 months.',
      feedback: 'This collaborative approach addresses both teams\' concerns and may preserve client relationships while maintaining technical quality.',
      consequences: {
        immediate: 'Both teams feel heard and work together on prioritization.',
        shortTerm: 'Partial feature delivery meets client needs, full delivery follows later.',
        longTerm: 'Stronger cross-functional collaboration and a model for future conflicts.'
      },
      impactAreas: [
        { area: 'decision-making', impact: 8 },
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 }
      ]
    },
    {
      id: 'escalate-decision',
      text: 'Escalate to executive leadership to make the final call on priorities.',
      feedback: 'While this removes the burden of a difficult decision, it may signal inability to handle cross-functional leadership challenges.',
      consequences: {
        immediate: 'Immediate pressure relief, but teams may see you as unable to lead.',
        shortTerm: 'Executive decision may not consider all nuances, leading to suboptimal outcomes.',
        longTerm: 'Reduced credibility as a leader who can handle complex situations independently.'
      },
      impactAreas: [
        { area: 'decision-making', impact: 3 },
        { area: 'assertiveness', impact: 2 },
        { area: 'emotional-intelligence', impact: 4 }
      ]
    },
    {
      id: 'root-cause-analysis',
      text: 'Pause the timeline debate and facilitate a session to understand why these conflicts keep happening.',
      feedback: 'This addresses systemic issues rather than just the immediate problem, though it requires time and may not solve the current crisis.',
      consequences: {
        immediate: 'Teams may be frustrated by the delay, but appreciate the focus on long-term solutions.',
        shortTerm: 'You identify process gaps and communication issues that have been causing repeated conflicts.',
        longTerm: 'Stronger cross-functional processes prevent future conflicts, but current client situation still needs resolution.'
      },
      impactAreas: [
        { area: 'decision-making', impact: 6 },
        { area: 'assertiveness', impact: 5 },
        { area: 'emotional-intelligence', impact: 7 }
      ]
    },
    {
      id: 'external-resources',
      text: 'Explore bringing in contractors or external resources to meet the aggressive timeline.',
      feedback: 'This creative solution attempts to satisfy both teams\' constraints, though it adds cost and complexity.',
      consequences: {
        immediate: 'Both teams are open to exploring this option, reducing immediate tension.',
        shortTerm: 'If budget is approved, you can potentially meet the timeline; if not, you\'re back to the original conflict.',
        longTerm: 'Success demonstrates resourcefulness; failure may be seen as avoiding tough decisions.'
      },
      impactAreas: [
        { area: 'decision-making', impact: 7 },
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 6 }
      ]
    },
    {
      id: 'client-negotiation',
      text: 'Directly engage with clients to understand their flexibility and explore alternative solutions.',
      feedback: 'This customer-centric approach may reveal options not considered, but requires strong client relationships and negotiation skills.',
      consequences: {
        immediate: 'Clients appreciate direct communication and may reveal flexibility in requirements.',
        shortTerm: 'You may discover alternative solutions or phased approaches that work for everyone.',
        longTerm: 'Stronger client relationships and reputation as someone who finds creative solutions.'
      },
      impactAreas: [
        { area: 'decision-making', impact: 8 },
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 7 }
      ]
    }
  ],
  growthAreas: ['decision-making', 'assertiveness', 'emotional-intelligence'],
  difficulty: 'applied',
  xpReward: 75
};