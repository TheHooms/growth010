import { Scenario } from '../../types';

export const projectTimelineConflictScenario: Scenario = 
  {
    id: 'project-timeline-conflict',
    title: 'Project Timeline Conflict',
    description: 'Resolve a timeline conflict between two departments under tight deadlines and high visibility.',
    situation: 'You’re a product designer embedded in a cross-functional team. Engineering estimates the new feature will take 3 months, but marketing has already committed to clients that it will be ready in 6 weeks. The design is central to the product experience, and you’re being asked to reduce scope or speed up timelines to help the team move faster. Both sides are looking to you to help find a path forward.',
    roleContext: {
      yourRole: 'Product Designer',
      stakeholders: 'Engineering Manager, Marketing Lead, Product Manager, Clients',
      timeline: 'Marketing promised delivery in 6 weeks; engineering needs 3 months',
      stakes: 'User experience quality, team delivery, client expectations',
      history: 'Previous releases have also required late design trade-offs to meet deadlines.'
    },
    choices: [
      {
        id: 'side-with-engineering',
        text: 'Support the engineering timeline and recommend sticking to quality-focused design processes.',
        feedback: 'You’re advocating for realistic delivery and user-centered design, but may be seen as inflexible by marketing or leadership.',
        consequences: {
          immediate: 'Engineering appreciates the support; marketing pushes back.',
          shortTerm: 'Some client frustration; design quality is maintained.',
          longTerm: 'Your reputation for design integrity grows, though others may view you as resistant to trade-offs.'
        },
        impactAreas: [
          { area: 'decision-making', impact: 6 },
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 5 }
        ]
      },
      {
        id: 'compromise-solution',
        text: 'Propose a scaled-back version of the design for 6 weeks with a roadmap to enhance later.',
        feedback: 'This shows design flexibility and collaboration. The risk is that follow-up improvements may not happen if priorities shift.',
        consequences: {
          immediate: 'Teams feel progress is possible.',
          shortTerm: 'Clients get a usable first version.',
          longTerm: 'You’re seen as pragmatic and adaptive, but some design debt may accumulate.'
        },
        impactAreas: [
          { area: 'decision-making', impact: 7 },
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 7 }
        ]
      },
      {
        id: 'escalate-to-manager',
        text: 'Raise the conflict with your design manager and ask for support navigating trade-offs.',
        feedback: 'This brings in needed support but may signal you’re not ready to lead through ambiguity on your own.',
        consequences: {
          immediate: 'You get guidance and relief from pressure.',
          shortTerm: 'The manager aligns with product leadership.',
          longTerm: 'Could be perceived as lacking ownership if overused.'
        },
        impactAreas: [
          { area: 'decision-making', impact: 3 },
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 4 }
        ]
      },
      {
        id: 'empathy-framing-facilitation',
        text: 'Invite engineering and marketing to a shared session where you map user needs, constraints, and options together.',
        feedback: 'This reflects leadership through facilitation. You use empathy and shared understanding to guide others toward aligned decisions.',
        consequences: {
          immediate: 'Tension lowers as perspectives are heard.',
          shortTerm: 'Consensus emerges around a phased plan.',
          longTerm: 'You build a reputation as a collaborative, user-centered partner.'
        },
        impactAreas: [
          { area: 'decision-making', impact: 8 },
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 9 }
        ]
      },
      {
        id: 'client-check-in',
        text: 'Ask the PM to connect you with client-facing teams to better understand what matters most to users for the first launch.',
        feedback: 'This approach shows curiosity and user empathy. It may help prioritize what’s essential while building trust across functions.',
        consequences: {
          immediate: 'You gain user insight and marketing feels included.',
          shortTerm: 'Design scope adjusts with real input.',
          longTerm: 'You gain credibility as someone who puts users first within real-world constraints.'
        },
        impactAreas: [
          { area: 'decision-making', impact: 7 },
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 8 }
        ]
      }
    ],
    growthAreas: ['decision-making', 'assertiveness', 'emotional-intelligence'],
    difficulty: 'applied',
    xpReward: 75
  },        { area: 'emotional-intelligence', impact: 6 },
        { area: 'decision-making', impact: 4 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'neutral' as const,
          shortTerm: 'negative' as const,
          longTerm: 'negative' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'medium' as const,
          longTerm: 'low' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Marcus (Project Coordinator)',
            impact: 'Feels supported and can deliver on the accelerated timeline commitment',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Leadership Team',
            impact: 'Gets preliminary data but may make decisions based on incomplete analysis',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Analytics Team',
            impact: 'May lose confidence in analytical standards and quality advocacy',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'Provide a preliminary analysis with clear confidence intervals and data gaps',
          shortTerm: 'Propose a phased delivery with initial insights now and complete analysis later',
          longTerm: 'Establish better processes for handling urgent analytical requests'
        },
        mitigation: {
          immediate: 'Include prominent disclaimers about data limitations and confidence levels',
          shortTerm: 'Schedule follow-up presentations when complete data becomes available',
          longTerm: 'Work with leadership to establish realistic timelines for quality analysis'
        },
        reflectionPrompts: [
          'What are the long-term implications of compromising analytical standards?',
          'How might incomplete analysis affect strategic decision-making quality?',
          'What would you advise another analyst in this same situation?'
        ],
        skillRecommendations: [
          {
            skill: 'Analytical Integrity',
            reason: 'Learn to maintain data quality standards while meeting business needs',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Stakeholder Communication',
            reason: 'Understand how to communicate data limitations and confidence levels effectively',
            link: '/library/data-communication'
          }
        ],
        realWorldExample: {
          title: 'Marketing Campaign Analysis Rush',
          description: 'A data analyst delivered incomplete campaign performance analysis for an urgent leadership meeting, clearly noting data limitations.',
          outcome: 'Leadership made budget decisions based on the preliminary data. When complete analysis showed different trends, significant budget adjustments were needed, and the analyst\'s credibility was questioned.'
        }
      }
    },
    {
      id: 'refuse-timeline',
      text: 'Firmly refuse to compromise the analysis timeline, insisting that quality data requires the full two weeks.',
      feedback: 'While this protects analytical integrity, it may be seen as inflexible and not understanding urgent business needs.',
      consequences: {
        immediate: 'Marcus feels frustrated and may view you as not understanding business priorities.',
        shortTerm: 'Leadership may be disappointed by the lack of data for their board meeting.',
        longTerm: 'You may be seen as difficult to work with under pressure, potentially limiting your involvement in urgent projects.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 3 },
        { area: 'decision-making', impact: 5 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'negative' as const,
          shortTerm: 'negative' as const,
          longTerm: 'negative' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'medium' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Marcus (Project Coordinator)',
            impact: 'Feels unsupported and may struggle to meet leadership commitments',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Leadership Team',
            impact: 'May feel the analytics team is not responsive to urgent business needs',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Analytics Team',
            impact: 'May appreciate quality advocacy but see approach as too inflexible',
            severity: 'neutral' as const
          }
        ],
        alternatives: {
          immediate: 'Propose alternative solutions that provide some insights within the timeline',
          shortTerm: 'Collaborate with Marcus to find creative approaches that balance quality and urgency',
          longTerm: 'Establish better upfront communication about analytical requirements and timelines'
        },
        mitigation: {
          immediate: 'Explain the business risks of incomplete analysis, not just analytical concerns',
          shortTerm: 'Work with Marcus to present alternative approaches to leadership',
          longTerm: 'Build stronger relationships by showing flexibility and creative problem-solving'
        },
        reflectionPrompts: [
          'How can you advocate for analytical quality while maintaining collaborative relationships?',
          'What alternative solutions might provide value within the accelerated timeline?',
          'How might your approach affect future urgent analytical requests?'
        ],
        skillRecommendations: [
          {
            skill: 'Collaborative Problem Solving',
            reason: 'Learn to find solutions that address multiple stakeholder concerns',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Business Partnership',
            reason: 'Understand how to balance analytical standards with business urgency',
            link: '/library/business-partnership'
          }
        ],
        realWorldExample: {
          title: 'Financial Analysis Deadline Conflict',
          description: 'A financial analyst refused to accelerate a quarterly analysis for an urgent investor meeting, insisting on the full timeline without proposing alternatives.',
          outcome: 'Leadership felt unsupported during a critical business moment. The analyst was excluded from future urgent projects, and their influence on strategic decisions diminished significantly.'
        }
      }
    },
    {
      id: 'collaborative-solution',
      text: 'Work with Marcus to identify what specific insights leadership needs most urgently and propose a phased delivery approach.',
      feedback: 'This collaborative approach respects both analytical standards and business urgency, often leading to solutions that satisfy all stakeholders.',
      consequences: {
        immediate: 'Marcus feels supported and you both engage in creative problem-solving for leadership needs.',
        shortTerm: 'Leadership gets the most critical insights on time while maintaining analytical quality.',
        longTerm: 'You build a reputation as a collaborative professional who can balance analytical rigor with business needs.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 8 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'positive' as const,
          shortTerm: 'positive' as const,
          longTerm: 'positive' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'high' as const,
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Marcus (Project Coordinator)',
            impact: 'Feels supported and appreciates the collaborative approach to urgent business needs',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Leadership Team',
            impact: 'Gets critical insights on time while understanding the analytical process and limitations',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Analytics Team',
            impact: 'Sees effective advocacy for analytical quality combined with business responsiveness',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          shortTerm: 'If collaboration doesn\'t yield solutions quickly, escalate to the analytics manager for guidance',
          longTerm: 'Establish regular communication processes for handling urgent analytical requests'
        },
        mitigation: {
          immediate: 'Set clear timeline and quality expectations for the phased delivery approach',
          shortTerm: 'Document the agreed-upon approach and follow-up schedule',
          longTerm: 'Use this collaboration as a model for future urgent project partnerships'
        },
        reflectionPrompts: [
          'How can you frame analytical requirements in terms of business decision quality?',
          'What can you learn from Marcus\'s project perspective that might inform your analytical approach?',
          'How might this collaborative approach influence future urgent analytical requests?'
        ],
        skillRecommendations: [
          {
            skill: 'Business-Analytics Collaboration',
            reason: 'Learn to bridge analytical and business perspectives effectively',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Strategic Data Communication',
            reason: 'Understand how to present analytical insights in business-urgent contexts',
            link: '/library/strategic-analytics'
          }
        ],
        realWorldExample: {
          title: 'Product Launch Analytics Success',
          description: 'A data analyst and project manager collaborated to identify the most critical metrics for an urgent product launch decision, delivering phased insights.',
          outcome: 'Leadership got key insights for their launch decision on time, and the complete analysis later validated their choice. The collaborative approach became the standard for urgent analytical requests across the company.'
        }
      }
    },
    {
      id: 'escalate-decision',
      text: 'Bring the timeline conflict to your analytics manager to make the final decision on quality vs. speed trade-offs.',
      feedback: 'While this ensures a decision gets made, it may signal inability to resolve project conflicts independently and could damage your relationship with Marcus.',
      consequences: {
        immediate: 'The analytics manager makes a decision, but both you and Marcus may feel the collaboration failed.',
        shortTerm: 'Future project discussions may be more formal and less collaborative.',
        longTerm: 'You may be seen as someone who escalates rather than solves project challenges independently.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 4 },
        { area: 'decision-making', impact: 5 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'neutral' as const,
          shortTerm: 'negative' as const,
          longTerm: 'negative' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'medium' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Marcus (Project Coordinator)',
            impact: 'May feel that the collaborative process was abandoned and direct communication failed',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Analytics Manager',
            impact: 'Has to resolve conflicts that could be handled at the team level, may question team collaboration',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Analytics Team',
            impact: 'May see this as avoiding direct problem-solving and project collaboration',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'Try collaborative problem-solving first, then escalate if needed',
          shortTerm: 'Use the analytics manager as a facilitator rather than decision-maker',
          longTerm: 'Develop skills in project conflict resolution'
        },
        mitigation: {
          immediate: 'Frame the escalation as seeking guidance rather than asking for a decision',
          shortTerm: 'Work with Marcus to present unified options to the analytics manager',
          longTerm: 'Focus on building direct collaboration skills for future project challenges'
        },
        reflectionPrompts: [
          'What makes you feel that escalation is necessary at this stage?',
          'How might this approach affect your future working relationship with Marcus?',
          'What collaboration skills could you develop to handle this situation more directly?'
        ],
        skillRecommendations: [
          {
            skill: 'Project Conflict Resolution',
            reason: 'Learn to resolve analytical-project disagreements before they require management intervention',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Cross-functional Collaboration',
            reason: 'Understand how to work effectively with project coordinators and business stakeholders',
            link: '/library/cross-functional-collaboration'
          }
        ],
        realWorldExample: {
          title: 'Sales Analytics Escalation',
          description: 'A data analyst immediately escalated a timeline disagreement to their manager without attempting collaborative resolution with the project coordinator.',
          outcome: 'The manager resolved the immediate issue but asked both team members to work on their collaboration skills. Future urgent projects required manager approval, reducing team autonomy and responsiveness.'
        }
      }
    },
    {
      id: 'propose-alternatives',
      text: 'Suggest alternative approaches like preliminary insights from existing data or external benchmarks to provide immediate value.',
      feedback: 'This creative approach demonstrates analytical thinking while being responsive to business needs, often leading to innovative solutions.',
      consequences: {
        immediate: 'Marcus appreciates the creative problem-solving and leadership gets some insights for their meeting.',
        shortTerm: 'You demonstrate analytical creativity while maintaining quality standards.',
        longTerm: 'You build a reputation as a resourceful analyst who can find solutions under pressure.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 8 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'positive' as const,
          shortTerm: 'positive' as const,
          longTerm: 'positive' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'high' as const,
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Marcus (Project Coordinator)',
            impact: 'Appreciates the creative approach and gets solutions for the urgent timeline',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Leadership Team',
            impact: 'Gets valuable insights for their board meeting while understanding analytical limitations',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Analytics Team',
            impact: 'Sees innovative analytical thinking and creative problem-solving under pressure',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'If external data isn\'t available, focus on the most reliable internal data sources',
          shortTerm: 'Use the alternative insights to inform the complete analysis approach',
          longTerm: 'Develop a toolkit of rapid analytical approaches for urgent business needs'
        },
        mitigation: {
          immediate: 'Clearly communicate the limitations and confidence levels of alternative approaches',
          shortTerm: 'Follow up with complete analysis to validate or refine the preliminary insights',
          longTerm: 'Use this experience to build better rapid response capabilities for the analytics team'
        },
        reflectionPrompts: [
          'How can you leverage existing data and external sources to provide immediate business value?',
          'What analytical shortcuts can provide reliable insights without compromising quality?',
          'How might this creative approach influence how you handle future urgent requests?'
        ],
        skillRecommendations: [
          {
            skill: 'Rapid Analytics',
            reason: 'Learn to provide quick insights while maintaining analytical rigor',
            link: '/library/rapid-analytics'
          },
          {
            skill: 'Creative Problem Solving',
            reason: 'Understand how to find innovative solutions that satisfy multiple constraints',
            link: '/topics/foundational-mindsets/decision-making'
          }
        ],
        realWorldExample: {
          title: 'Competitive Analysis Quick Turnaround',
          description: 'A market analyst used industry benchmarks and existing customer data to provide immediate competitive insights for an urgent strategy meeting.',
          outcome: 'Leadership got valuable context for their strategic discussion, and the complete analysis later confirmed the preliminary insights. The analyst became the go-to person for urgent analytical needs and was promoted to senior analyst.'
        }
      }
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};