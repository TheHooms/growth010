import { Scenario } from '../types';

export const enhancedScenarios: Scenario[] = [
  {
    id: 'difficult-feedback',
    title: 'Delivering Difficult Feedback',
    description: 'Navigate a challenging conversation with a team member who isn\'t meeting expectations.',
    situation: 'You manage a team member who consistently misses deadlines and produces work that requires significant revision. Their performance is affecting the team\'s results, but they seem unaware of the issue. You need to address this problem in your upcoming one-on-one meeting.',
    roleContext: {
      yourRole: 'Senior Product Manager',
      teamSize: '8-person cross-functional team',
      timeline: 'This has been ongoing for 3 months',
      stakes: 'Team morale is declining, and you have a major product launch in 6 weeks',
      pressure: 'Your manager is asking questions about team velocity',
      stakeholders: 'Engineering team, Design team, QA, and Product Leadership',
      history: 'This team member was a strong performer in their previous role'
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
              stakeholder: 'Team Member',
              impact: 'Feels attacked and becomes defensive, may lose confidence',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Team',
              impact: 'May worry about receiving similar harsh feedback',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Your Manager',
              impact: 'Sees you as decisive but may question your people skills',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Start with empathy: "I know you care about doing good work, and I want to help you succeed."',
            shortTerm: 'Follow up with support and resources rather than just monitoring',
            longTerm: 'Build a development plan together to address root causes'
          },
          mitigation: {
            immediate: 'Acknowledge their strengths first and express confidence in their ability to improve',
            shortTerm: 'Schedule regular check-ins and provide specific, actionable guidance',
            longTerm: 'Invest in their professional development and celebrate improvements'
          },
          reflectionPrompts: [
            'How might your delivery style affect the team member\'s willingness to be vulnerable about challenges?',
            'What underlying issues might be causing the performance problems?',
            'How can you balance accountability with psychological safety?'
          ],
          skillRecommendations: [
            {
              skill: 'Emotional Intelligence',
              reason: 'Better reading of emotional cues would help you adjust your approach',
              link: '/topics/foundational-mindsets/emotional-intelligence'
            },
            {
              skill: 'Coaching Skills',
              reason: 'Learning to guide rather than direct can improve outcomes',
              link: '/library/coaching-fundamentals'
            }
          ],
          realWorldExample: {
            title: 'Tech Startup Performance Issue',
            description: 'A startup CTO used direct feedback with a struggling engineer, focusing only on missed deadlines without exploring causes.',
            outcome: 'The engineer quit within two weeks, citing feeling unsupported. The team lost valuable domain knowledge and morale dropped significantly.'
          }
        }
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
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Team Member',
              impact: 'Feels supported and empowered to improve, maintains dignity',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Team',
              impact: 'Sees you as a supportive leader who invests in people',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Your Manager',
              impact: 'Recognizes your leadership development skills',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            shortTerm: 'If progress is slow, you might need to be more direct about expectations',
            longTerm: 'Consider formal coaching training to enhance these skills further'
          },
          reflectionPrompts: [
            'What questions helped the team member discover insights on their own?',
            'How did maintaining curiosity rather than judgment change the conversation?',
            'What did you learn about the root causes of their performance issues?'
          ],
          skillRecommendations: [
            {
              skill: 'Active Listening',
              reason: 'Essential for effective coaching conversations',
              link: '/topics/foundational-mindsets/active-listening'
            },
            {
              skill: 'Powerful Questioning',
              reason: 'Learn to ask questions that promote self-discovery',
              link: '/library/coaching-questions'
            }
          ],
          realWorldExample: {
            title: 'Fortune 500 Manager Success',
            description: 'A manager at a large corporation used coaching questions to help a struggling analyst identify that unclear priorities were causing missed deadlines.',
            outcome: 'The analyst became one of the top performers within six months and later credited the manager with transforming their career approach.'
          }
        }
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'communication'],
    difficulty: 'foundational',
    xpReward: 50
  }
];

export const getEnhancedScenarioById = (id: string) => {
  return enhancedScenarios.find(scenario => scenario.id === id);
};