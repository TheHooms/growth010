import { Scenario } from '../../types';

export const projectTimelineConflictScenario: Scenario = {
  id: 'project-timeline-conflict',
  title: 'Project Timeline and Quality Standards Conflict',
  description: 'Navigate a disagreement about rushing a deliverable that could compromise quality standards.',
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
      id: 'support-engineering-timeline',
      text: 'Support the engineering timeline and recommend pushing back the marketing commitments to ensure quality.',
      feedback: 'While this protects design quality and technical feasibility, it may damage client relationships and impact revenue goals.',
      consequences: {
        immediate: 'Marketing feels unsupported and clients may be disappointed by the delay.',
        shortTerm: 'Quality design is delivered but client relationships are strained and revenue targets may be missed.',
        longTerm: 'Strong product foundation but potential loss of client trust and market opportunities.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 4 },
        { area: 'decision-making', impact: 6 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'negative' as const,
          shortTerm: 'negative' as const,
          longTerm: 'neutral' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'high' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Engineering Team',
            impact: 'Feels supported and can deliver quality work without compromising technical standards',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'Feels undermined and struggles to maintain client relationships and commitments',
            severity: 'negative' as const
          },
          {
            stakeholder: 'VP of Product',
            impact: 'Appreciates quality focus but concerned about revenue impact and client relationships',
            severity: 'neutral' as const
          }
        ],
        alternatives: {
          immediate: 'Propose a phased release approach with core functionality in 6 weeks',
          shortTerm: 'Work with marketing to reset client expectations with added value propositions',
          longTerm: 'Establish better cross-functional planning processes to prevent future conflicts'
        },
        mitigation: {
          immediate: 'Help marketing communicate the quality benefits to clients',
          shortTerm: 'Provide design prototypes to help maintain client engagement during delay',
          longTerm: 'Use the extra time to create exceptional design that exceeds client expectations'
        },
        reflectionPrompts: [
          'How can you balance quality standards with business commitments?',
          'What role should design play in cross-functional timeline decisions?',
          'How might this decision affect your credibility with different stakeholders?'
        ],
        skillRecommendations: [
          {
            skill: 'Stakeholder Management',
            reason: 'Learn to balance competing priorities across different departments',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Quality Advocacy',
            reason: 'Understand how to advocate for design standards while supporting business goals',
            link: '/library/quality-advocacy'
          }
        ],
        realWorldExample: {
          title: 'SaaS Platform Feature Delay',
          description: 'A design team pushed back on an aggressive timeline for a major feature, insisting on proper user testing and iteration time.',
          outcome: 'The 2-month delay resulted in a feature that became the platform\'s most popular tool, significantly increasing user retention and justifying the timeline decision.'
        }
      }
    },
    {
      id: 'support-marketing-timeline',
      text: 'Support the marketing timeline and propose design shortcuts to meet the 6-week deadline.',
      feedback: 'This maintains client relationships and revenue goals but may compromise design quality and user experience.',
      consequences: {
        immediate: 'Marketing feels supported and client commitments are maintained.',
        shortTerm: 'Feature launches on time but may have usability issues and require post-launch fixes.',
        longTerm: 'Potential user experience problems and technical debt that could impact product reputation.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 6 },
        { area: 'decision-making', impact: 5 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'positive' as const,
          shortTerm: 'negative' as const,
          longTerm: 'negative' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'high' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Marketing Team',
            impact: 'Feels supported and can maintain client relationships and commitments',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Engineering Team',
            impact: 'Feels pressured to compromise technical quality and may struggle with implementation',
            severity: 'negative' as const
          },
          {
            stakeholder: 'VP of Product',
            impact: 'Pleased with timeline adherence but may face quality issues later',
            severity: 'neutral' as const
          }
        ],
        alternatives: {
          immediate: 'Identify which design elements are truly essential vs nice-to-have',
          shortTerm: 'Plan for rapid iteration and improvement cycles post-launch',
          longTerm: 'Use this as a learning experience to improve estimation and planning processes'
        },
        mitigation: {
          immediate: 'Document design compromises and their potential impacts',
          shortTerm: 'Plan immediate post-launch design improvements',
          longTerm: 'Advocate for better timeline planning in future projects'
        },
        reflectionPrompts: [
          'What are the long-term implications of compromising design quality?',
          'How can you minimize user experience impact when working with tight timelines?',
          'What would you do differently in the planning phase to avoid this situation?'
        ],
        skillRecommendations: [
          {
            skill: 'Rapid Prototyping',
            reason: 'Learn to quickly validate design decisions under time pressure',
            link: '/library/rapid-prototyping'
          },
          {
            skill: 'Design Prioritization',
            reason: 'Understand how to identify and focus on the most critical design elements',
            link: '/topics/foundational-mindsets/decision-making'
          }
        ],
        realWorldExample: {
          title: 'E-commerce Checkout Redesign Rush',
          description: 'A design team rushed a checkout redesign to meet a holiday shopping deadline, cutting user testing short.',
          outcome: 'The feature launched on time but had significant usability issues that reduced conversion rates. The team spent the next quarter fixing problems that could have been caught with proper testing.'
        }
      }
    },
    {
      id: 'propose-compromise-solution',
      text: 'Propose a compromise solution that delivers core functionality in 6 weeks with enhanced features in the full 3-month timeline.',
      feedback: 'This collaborative approach balances immediate business needs with long-term quality, though it requires careful scope management and clear communication.',
      consequences: {
        immediate: 'Both teams feel heard and work together on a phased approach.',
        shortTerm: 'Core functionality launches on time with a clear roadmap for enhancements.',
        longTerm: 'Strong foundation for future collaboration and balanced approach to quality vs speed trade-offs.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 9 }
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
            stakeholder: 'Engineering Team',
            impact: 'Appreciates the phased approach that allows for quality while meeting business needs',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'Gets core functionality for client commitments with clear enhancement timeline',
            severity: 'positive' as const
          },
          {
            stakeholder: 'VP of Product',
            impact: 'Sees strategic thinking and cross-functional leadership in action',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          shortTerm: 'If the compromise proves too complex, prioritize the most critical user journey',
          longTerm: 'Use this phased approach as a model for future feature development'
        },
        mitigation: {
          immediate: 'Clearly define what constitutes "core functionality" vs "enhanced features"',
          shortTerm: 'Establish clear success metrics for the initial launch',
          longTerm: 'Document lessons learned for future cross-functional project planning'
        },
        reflectionPrompts: [
          'How can you identify the minimum viable design that still delivers value?',
          'What communication strategies help align different stakeholder priorities?',
          'How might this collaborative approach influence future project planning?'
        ],
        skillRecommendations: [
          {
            skill: 'Cross-functional Leadership',
            reason: 'Learn to lead solutions that satisfy multiple stakeholder needs',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Scope Management',
            reason: 'Understand how to break complex projects into manageable phases',
            link: '/library/scope-management'
          }
        ],
        realWorldExample: {
          title: 'Mobile App Feature Phasing',
          description: 'A design team proposed launching a social feature with basic functionality first, then adding advanced features based on user feedback.',
          outcome: 'The phased approach allowed for early user validation and resulted in a more successful final feature. The collaboration model was adopted company-wide for future projects.'
        }
      }
    },
    {
      id: 'escalate-to-leadership',
      text: 'Escalate the decision to senior leadership and present the trade-offs without taking a position.',
      feedback: 'While this ensures senior leadership makes the final call, it may be seen as avoiding responsibility and could miss an opportunity to demonstrate strategic thinking.',
      consequences: {
        immediate: 'Senior leadership makes the decision but you may be seen as not taking ownership.',
        shortTerm: 'The conflict is resolved at a higher level but your role in cross-functional decisions may be diminished.',
        longTerm: 'You may be excluded from future strategic discussions and seen as someone who escalates rather than solves problems.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 3 },
        { area: 'emotional-intelligence', impact: 5 },
        { area: 'decision-making', impact: 4 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'negative' as const,
          shortTerm: 'negative' as const,
          longTerm: 'negative' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'high' as const,
          longTerm: 'medium' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Engineering Team',
            impact: 'May feel you didn\'t advocate for quality and technical considerations',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'May feel you didn\'t support business commitments and client relationships',
            severity: 'negative' as const
          },
          {
            stakeholder: 'VP of Product',
            impact: 'May question your ability to make strategic decisions and lead cross-functional initiatives',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'Present a clear recommendation along with the trade-offs analysis',
          shortTerm: 'Take ownership of implementing whatever decision is made',
          longTerm: 'Develop skills to handle similar cross-functional conflicts independently'
        },
        mitigation: {
          immediate: 'Frame the escalation as seeking guidance rather than avoiding decision-making',
          shortTerm: 'Demonstrate leadership in executing the final decision',
          longTerm: 'Seek feedback on how to better handle similar situations in the future'
        },
        reflectionPrompts: [
          'What makes you feel that escalation is necessary rather than making a recommendation?',
          'How might this approach affect your credibility as a cross-functional leader?',
          'What skills could you develop to handle this situation more directly?'
        ],
        skillRecommendations: [
          {
            skill: 'Decision-Making Under Pressure',
            reason: 'Learn to make strategic recommendations even in complex situations',
            link: '/topics/foundational-mindsets/decision-making'
          },
          {
            skill: 'Cross-functional Leadership',
            reason: 'Understand how to lead through influence rather than authority',
            link: '/library/cross-functional-leadership'
          }
        ],
        realWorldExample: {
          title: 'Product Manager Timeline Escalation',
          description: 'A product manager escalated a timeline conflict to the CEO without providing recommendations, hoping to avoid taking sides.',
          outcome: 'The CEO resolved the issue but questioned the PM\'s strategic thinking. The PM was later passed over for a senior role due to concerns about decision-making capabilities.'
        }
      }
    },
    {
      id: 'data-driven-approach',
      text: 'Propose conducting rapid user research to validate which features are truly essential for the initial launch.',
      feedback: 'This evidence-based approach provides objective data for decision-making, though it requires additional time and resources that may not be available.',
      consequences: {
        immediate: 'Teams appreciate the user-centered approach but worry about adding time to an already tight timeline.',
        shortTerm: 'Research provides clear direction but may delay the decision-making process.',
        longTerm: 'Data-driven decisions lead to better user outcomes and establish you as a strategic, user-focused leader.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 8 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'neutral' as const,
          shortTerm: 'positive' as const,
          longTerm: 'positive' as const
        },
        confidence: {
          immediate: 'medium' as const,
          shortTerm: 'high' as const,
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Engineering Team',
            impact: 'Appreciates the data-driven approach that can inform technical priorities',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Marketing Team',
            impact: 'Values user insights but concerned about timeline impact on client commitments',
            severity: 'neutral' as const
          },
          {
            stakeholder: 'VP of Product',
            impact: 'Impressed by user-centered thinking and strategic approach to decision-making',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Use existing user data and analytics to inform decisions quickly',
          shortTerm: 'Conduct rapid guerrilla testing with internal stakeholders if external research isn\'t feasible',
          longTerm: 'Establish ongoing user research processes to prevent future feature uncertainty'
        },
        mitigation: {
          immediate: 'Propose a very rapid research approach (2-3 days maximum)',
          shortTerm: 'Use research findings to create clear feature prioritization framework',
          longTerm: 'Build user research into regular product development cycles'
        },
        reflectionPrompts: [
          'How can you balance the need for user insights with business timeline pressures?',
          'What rapid research methods could provide valuable insights quickly?',
          'How might user data change the conversation between engineering and marketing?'
        ],
        skillRecommendations: [
          {
            skill: 'Rapid User Research',
            reason: 'Learn to gather meaningful user insights under tight timelines',
            link: '/library/rapid-research'
          },
          {
            skill: 'Data-Driven Design',
            reason: 'Understand how to use research to inform strategic product decisions',
            link: '/topics/foundational-mindsets/decision-making'
          }
        ],
        realWorldExample: {
          title: 'Fintech App Feature Validation',
          description: 'A design team conducted rapid user interviews to determine which security features were essential for launch vs nice-to-have.',
          outcome: 'The research revealed that users prioritized different features than the team assumed. The data-driven approach led to a successful launch and established the designer as a strategic partner.'
        }
      }
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};