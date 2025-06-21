import { Scenario } from '../../types';

export const takingCreditScenario: Scenario = {
  id: 'taking-credit',
  title: 'Taking Credit for Team Work',
  description: 'Address a colleague who is taking credit for your collaborative work in front of leadership.',
  situation: 'During a quarterly business review meeting with senior leadership, your colleague Sarah presents the strategic analysis you both worked on together for the past month. However, she presents it as "my analysis" and "my recommendations," barely mentioning your contributions. This analysis was actually your original framework that she helped refine. After the meeting, several executives approach Sarah to congratulate her on the "excellent work," and you overhear your VP mention considering her for a promotion based on this strategic thinking. You need to decide how to handle this situation.',
  roleContext: {
    yourRole: 'Senior Business Analyst',
    teamSize: 'Cross-functional strategy team of 8 people',
    timeline: 'This project took 1 month of collaborative work',
    stakes: 'Quarterly business review with C-suite executives, promotion considerations',
    pressure: 'Your contributions are being overlooked in front of senior leadership',
    stakeholders: 'VP of Strategy, C-suite executives, strategy team members, Sarah',
    history: 'You and Sarah have collaborated successfully on previous projects'
  },
  choices: [
    {
      id: 'immediate-correction',
      text: 'Immediately speak up in the meeting to clarify your contributions to the analysis.',
      feedback: 'While this ensures your contributions are recognized, interrupting in a senior leadership meeting may come across as unprofessional and could damage relationships with both Sarah and leadership.',
      consequences: {
        immediate: 'The room becomes uncomfortable, and leadership may view you as petty or difficult to work with.',
        shortTerm: 'Sarah feels embarrassed and your working relationship becomes strained, affecting future collaborations.',
        longTerm: 'You may be seen as someone who creates drama in important meetings, potentially hurting your own advancement opportunities.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 3 },
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
            stakeholder: 'Sarah (Colleague)',
            impact: 'Feels publicly embarrassed and may become defensive or hostile toward future collaboration',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Senior Leadership',
            impact: 'May view you as unprofessional or difficult to work with in high-stakes meetings',
            severity: 'negative' as const
          },
          {
            stakeholder: 'Strategy Team',
            impact: 'Witnesses workplace conflict and may feel uncomfortable about team dynamics',
            severity: 'negative' as const
          }
        ],
        alternatives: {
          immediate: 'Wait until after the meeting to address this privately with Sarah first',
          shortTerm: 'Schedule a follow-up meeting with leadership to present additional insights from the analysis',
          longTerm: 'Establish clear collaboration agreements upfront for future strategic projects'
        },
        mitigation: {
          immediate: 'If you must speak, frame it as "Sarah and I developed this framework together" rather than correcting her',
          shortTerm: 'Have a private conversation with Sarah about collaboration expectations going forward',
          longTerm: 'Focus on building your own reputation through consistent high-quality strategic work'
        },
        reflectionPrompts: [
          'How might public correction affect your professional relationships and reputation?',
          'What would be the most strategic way to ensure your contributions are recognized?',
          'How can you prevent this situation from happening in future collaborative projects?'
        ],
        skillRecommendations: [
          {
            skill: 'Professional Communication',
            reason: 'Learn to address sensitive issues without damaging professional relationships',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Strategic Influence',
            reason: 'Understand how to build visibility and recognition in professional settings',
            link: '/library/strategic-influence'
          }
        ],
        realWorldExample: {
          title: 'Consulting Team Presentation Conflict',
          description: 'A consultant interrupted a client presentation to correct a colleague who was taking credit for their analysis.',
          outcome: 'The client meeting became awkward, the colleague relationship was damaged, and the consultant was later counseled by their manager about professional meeting behavior.'
        }
      }
    },
    {
      id: 'private-conversation',
      text: 'Approach Sarah privately after the meeting to discuss the situation and your concerns.',
      feedback: 'This approach maintains professionalism while addressing the issue directly. It gives Sarah a chance to explain and potentially correct the situation without public embarrassment.',
      consequences: {
        immediate: 'You maintain composure in the meeting, and leadership sees you as professional.',
        shortTerm: 'Sarah may apologize and help clarify your contributions in future interactions with leadership.',
        longTerm: 'You build a reputation for handling conflicts maturely while protecting your professional interests.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 7 }
      ],
      enhancedConsequences: {
        severity: {
          immediate: 'positive' as const,
          shortTerm: 'positive' as const,
          longTerm: 'positive' as const
        },
        confidence: {
          immediate: 'high' as const,
          shortTerm: 'medium' as const,
          longTerm: 'high' as const
        },
        stakeholderImpacts: [
          {
            stakeholder: 'Sarah (Colleague)',
            impact: 'Appreciates the private approach and opportunity to address the situation without public embarrassment',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Senior Leadership',
            impact: 'Continues to see you as professional and collaborative, may gain respect for your maturity',
            severity: 'positive' as const
          },
          {
            stakeholder: 'Strategy Team',
            impact: 'Observes professional behavior and conflict resolution skills',
            severity: 'positive' as const
          }
        ],
        alternatives: {
          immediate: 'Document your contributions before the conversation in case you need to escalate later',
          shortTerm: 'If Sarah doesn\'t respond well, consider involving your manager for guidance',
          longTerm: 'Establish written collaboration agreements for future strategic projects'
        },
        mitigation: {
          immediate: 'Prepare talking points about the collaborative nature of the work and your specific contributions',
          shortTerm: 'Follow up with Sarah about how to handle similar situations in the future',
          longTerm: 'Build stronger relationships with leadership through other strategic initiatives'
        },
        reflectionPrompts: [
          'How can you frame this conversation to be constructive rather than accusatory?',
          'What outcome would you consider successful from this private discussion?',
          'How might this approach strengthen your professional relationship with Sarah?'
        ],
        skillRecommendations: [
          {
            skill: 'Difficult Conversations',
            reason: 'Learn to address sensitive workplace issues while maintaining professional relationships',
            link: '/topics/foundational-mindsets/assertiveness'
          },
          {
            skill: 'Collaborative Leadership',
            reason: 'Understand how to protect your interests while building strong team partnerships',
            link: '/library/collaborative-leadership'
          }
        ],
        realWorldExample: {
          title: 'Marketing Strategy Team Resolution',
          description: 'A marketing analyst privately addressed a colleague who took credit for their campaign strategy in a leadership presentation.',
          outcome: 'The colleague apologized and made sure to highlight the analyst\'s contributions in follow-up communications. Their working relationship actually strengthened, and they became trusted strategic partners.'
        }
      }
    },
    {
      id: 'document-and-escalate',
      text: 'Document the situation and discuss it with your manager to ensure your contributions are properly recognized.',
      feedback: 'This approach ensures proper documentation and management awareness, but may be seen as going around Sarah rather than addressing the issue directly first.',
      consequences: {
        immediate: 'You feel protected by involving management, but Sarah may feel blindsided if she learns about it.',
        shortTerm: 'Your manager may help clarify your contributions, but your relationship with Sarah could be damaged.',
        longTerm: 'You may be seen as someone who escalates rather than resolves conflicts directly, which could affect future collaborative opportunities.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 5 },
        { area: 'emotional-intelligence', impact: 4 },
        { area: 'decision-making', impact: 6 }
      ]
    },
    {
      id: 'strategic-follow-up',
      text: 'Send a follow-up email to the leadership team with additional insights, naturally highlighting your collaborative role.',
      feedback: 'This approach allows you to demonstrate your strategic thinking while subtly clarifying your contributions without creating direct conflict.',
      consequences: {
        immediate: 'Leadership sees additional value from you and begins to understand your role in the analysis.',
        shortTerm: 'You build your own reputation for strategic thinking while maintaining professional relationships.',
        longTerm: 'You establish yourself as a strategic contributor in leadership\'s minds while avoiding workplace drama.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 8 }
      ]
    },
    {
      id: 'let-it-go',
      text: 'Accept the situation and focus on building your reputation through future work rather than addressing this incident.',
      feedback: 'While this avoids immediate conflict, it may set a precedent that your contributions can be overlooked and could impact your career advancement opportunities.',
      consequences: {
        immediate: 'You avoid any workplace drama, but your contributions remain unrecognized by leadership.',
        shortTerm: 'Sarah may continue this behavior, and you may miss out on recognition and advancement opportunities.',
        longTerm: 'Your strategic contributions may be consistently undervalued, potentially limiting your career growth and influence.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 2 },
        { area: 'emotional-intelligence', impact: 5 },
        { area: 'decision-making', impact: 3 }
      ]
    },
    {
      id: 'collaborative-reframe',
      text: 'Publicly build on Sarah\'s presentation by adding your perspective, naturally highlighting the collaborative nature of the work.',
      feedback: 'This approach allows you to demonstrate your contributions while appearing collaborative and supportive, though it requires quick thinking and confidence in the moment.',
      consequences: {
        immediate: 'Leadership sees your strategic thinking and begins to understand the collaborative nature of the work.',
        shortTerm: 'You build your reputation while maintaining a positive relationship with Sarah.',
        longTerm: 'You establish yourself as both a strategic thinker and a collaborative team player in leadership\'s perception.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 7 }
      ]
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};