import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: 'difficult-feedback',
    title: 'Delivering Difficult Feedback',
    description: 'Navigate a challenging conversation with a team member who isn\'t meeting expectations.',
    situation: 'You manage a team member who consistently misses deadlines and produces work that requires significant revision. Their performance is affecting the team\'s results, but they seem unaware of the issue. You need to address this problem in your upcoming one-on-one meeting.',
    roleContext: {
      yourRole: 'Senior Product Manager',
      reporteeRole: 'Junior Product Analyst',
      teamSize: '8-person cross-functional team',
      timeline: 'This has been ongoing for 3 months',
      stakes: 'Team morale is declining, and you have a major product launch in 6 weeks'
    },
    choices: [
      {
        id: 'direct-feedback',
        text: 'Be direct and focus on the performance issues, clearly stating expectations and consequences.',
        feedback: 'Your straightforward approach ensures clarity, but without balancing it with empathy, the feedback might be received defensively, limiting real behavior change.',
        consequences: {
          immediate: 'The team member becomes defensive and shuts down during the conversation.',
          shortTerm: 'They may improve temporarily but feel demotivated and start looking for other opportunities.',
          longTerm: 'You might lose a potentially valuable team member, and others may view you as harsh.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 2 }
        ]
      },
      {
        id: 'sandwich-method',
        text: 'Use the "feedback sandwich" approach, starting with positives, addressing the issues, then ending with encouragement.',
        feedback: 'While this approach feels comfortable, research shows it often dilutes the core message. The team member might only remember the positive parts and miss the needed change.',
        consequences: {
          immediate: 'The conversation feels pleasant, but the core message gets lost.',
          shortTerm: 'Performance issues continue because the urgency wasn\'t communicated effectively.',
          longTerm: 'You\'ll need to have this conversation again, and the team member may feel blindsided by eventual consequences.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 5 }
        ]
      },
      {
        id: 'coaching-approach',
        text: 'Take a coaching approach, asking questions to help them recognize the issues and develop their own solutions.',
        feedback: 'This approach builds lasting growth by developing self-awareness and ownership, though it requires more time and skill to execute effectively.',
        consequences: {
          immediate: 'The team member feels heard and becomes engaged in problem-solving.',
          shortTerm: 'They take ownership of improvement plans and show genuine commitment to change.',
          longTerm: 'You develop a stronger, more self-aware team member who can handle similar challenges independently.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 8 }
        ]
      },
      {
        id: 'delay-feedback',
        text: 'Postpone the conversation until you have more data or until tensions aren\'t as high.',
        feedback: 'Delaying necessary feedback allows problems to persist and may signal to the team member (and others) that underperformance is acceptable.',
        consequences: {
          immediate: 'You avoid an uncomfortable conversation, but the issues continue.',
          shortTerm: 'Team performance suffers, and other team members notice the lack of accountability.',
          longTerm: 'You lose credibility as a leader, and performance standards across the team may decline.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 1 },
          { area: 'emotional-intelligence', impact: 3 }
        ]
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'communication']
  },
  {
    id: 'strategic-decision',
    title: 'Strategic Resource Allocation',
    description: 'Make a difficult decision about how to allocate limited resources across competing priorities.',
    situation: 'Your team has received budget for only one of three high-priority initiatives: 1) a technology upgrade that would improve efficiency, 2) hiring additional staff to reduce team burnout, or 3) pursuing a new market opportunity with potential high returns but significant risk.',
    roleContext: {
      yourRole: 'Director of Operations',
      teamSize: '25-person department',
      timeline: 'Decision needed within 2 weeks',
      stakes: 'Q4 performance targets and next year\'s budget allocation depend on this choice',
      pressure: 'CEO is pushing for growth, but team satisfaction scores are at an all-time low'
    },
    choices: [
      {
        id: 'tech-upgrade',
        text: 'Invest in the technology upgrade to improve efficiency.',
        feedback: 'This choice demonstrates analytical thinking and a focus on long-term efficiency. The challenge will be managing team burnout and missed market opportunities while the technology is implemented.',
        consequences: {
          immediate: 'Team appreciates the investment in better tools, but burnout continues.',
          shortTerm: 'Efficiency gains start showing after 3-4 months, but you miss the market opportunity window.',
          longTerm: 'Strong operational foundation, but competitors may have captured the new market, and some talented team members may have left due to burnout.'
        },
        impactAreas: [
          { area: 'analytical-thinking', impact: 8 },
          { area: 'people-focus', impact: 3 },
          { area: 'risk-taking', impact: 4 }
        ]
      },
      {
        id: 'hire-staff',
        text: 'Hire additional staff to address team burnout and improve current execution.',
        feedback: 'This choice prioritizes people and current operations. While it may boost morale and immediate productivity, it doesn\'t address efficiency gaps or growth opportunities.',
        consequences: {
          immediate: 'Team morale improves significantly, and workload becomes more manageable.',
          shortTerm: 'Higher productivity and better work-life balance, but operational inefficiencies remain.',
          longTerm: 'Strong team retention and culture, but you may fall behind competitors who invested in technology or new markets.'
        },
        impactAreas: [
          { area: 'analytical-thinking', impact: 5 },
          { area: 'people-focus', impact: 9 },
          { area: 'risk-taking', impact: 3 }
        ]
      },
      {
        id: 'new-market',
        text: 'Pursue the new market opportunity with high potential returns.',
        feedback: 'This choice shows strategic vision and comfort with risk. The challenge will be maintaining current operations while expanding, especially with an already stretched team.',
        consequences: {
          immediate: 'Excitement about growth potential, but immediate pressure increases on the already stretched team.',
          shortTerm: 'If successful, significant revenue growth; if not, team burnout worsens and current operations suffer.',
          longTerm: 'Either major competitive advantage and growth, or significant setback with damaged team morale and operational capabilities.'
        },
        impactAreas: [
          { area: 'analytical-thinking', impact: 6 },
          { area: 'people-focus', impact: 2 },
          { area: 'risk-taking', impact: 9 }
        ]
      },
      {
        id: 'split-resources',
        text: 'Split the resources across all three priorities to make incremental progress on each.',
        feedback: 'This approach attempts balance but risks making insufficient progress on any front. Without clear prioritization, you may delay meaningful improvement in any area.',
        consequences: {
          immediate: 'Everyone feels heard, but no one gets what they really need.',
          shortTerm: 'Minimal progress on all fronts, with continued operational challenges and missed opportunities.',
          longTerm: 'Reputation for indecisiveness, and the team may lose confidence in leadership\'s ability to make tough choices.'
        },
        impactAreas: [
          { area: 'analytical-thinking', impact: 4 },
          { area: 'people-focus', impact: 5 },
          { area: 'risk-taking', impact: 3 }
        ]
      }
    ],
    growthAreas: ['decision-making', 'strategic-thinking', 'resource-management']
  },
  {
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
      }
    ],
    growthAreas: ['decision-making', 'assertiveness', 'emotional-intelligence']
  }
];

export const getScenarioById = (id: string): Scenario | undefined => {
  return scenarios.find(scenario => scenario.id === id);
};