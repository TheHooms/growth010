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
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'neutral' as const,
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
              stakeholder: 'Team Member',
              impact: 'Feels good about the conversation but misses the urgency of needed changes',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Team',
              impact: 'Continues to be affected by performance issues',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Your Manager',
              impact: 'May question your ability to address performance issues directly',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Use the SBI model (Situation-Behavior-Impact) for clearer feedback',
            shortTerm: 'Follow up within a week to ensure the message was understood',
            longTerm: 'Be more direct in future conversations while maintaining empathy'
          },
          mitigation: {
            immediate: 'End the conversation by asking them to summarize what they heard',
            shortTerm: 'Set specific, measurable goals with clear deadlines',
            longTerm: 'Document the conversation and create accountability checkpoints'
          },
          reflectionPrompts: [
            'How can you be both kind and clear in your communication?',
            'What would happen if you were more direct about the consequences?',
            'How might the team member interpret mixed messages?'
          ],
          skillRecommendations: [
            {
              skill: 'Direct Communication',
              reason: 'Learning to be clear without being harsh improves message delivery',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Feedback Models',
              reason: 'Structured approaches like SBI can replace the sandwich method',
              link: '/library/effective-feedback'
            }
          ],
          realWorldExample: {
            title: 'Marketing Manager\'s Gentle Approach',
            description: 'A marketing manager used the sandwich method with an underperforming team member, emphasizing positives.',
            outcome: 'The employee was shocked when put on a performance improvement plan three months later, saying they thought they were doing well based on previous feedback.'
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
              link: '/topics/foundational-mindsets/assertiveness'
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
            longTerm: 'high' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Team Member',
              impact: 'Continues poor performance, unaware of the severity of the situation',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Team',
              impact: 'Loses respect for your leadership and questions fairness',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Your Manager',
              impact: 'Questions your ability to manage performance issues',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Schedule the conversation for later today rather than postponing indefinitely',
            shortTerm: 'Prepare talking points to make the conversation more structured',
            longTerm: 'Develop your comfort with difficult conversations through practice'
          },
          mitigation: {
            immediate: 'Set a specific date within 48 hours for the conversation',
            shortTerm: 'Address the delay with your team member and apologize for not acting sooner',
            longTerm: 'Implement regular check-ins to catch issues earlier'
          },
          reflectionPrompts: [
            'What fears or concerns are driving your desire to delay this conversation?',
            'How might your avoidance be perceived by other team members?',
            'What would you advise another manager in this situation?'
          ],
          skillRecommendations: [
            {
              skill: 'Difficult Conversations',
              reason: 'Building comfort with challenging discussions is essential for leadership',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Courage in Leadership',
              reason: 'Learn to act despite discomfort for the good of the team',
              link: '/library/leadership-courage'
            }
          ],
          realWorldExample: {
            title: 'Retail Manager\'s Avoidance',
            description: 'A retail manager avoided addressing a cashier\'s frequent tardiness for two months, hoping it would resolve itself.',
            outcome: 'Other employees began arriving late, citing unfairness. The manager eventually had to address multiple performance issues instead of one, and team morale plummeted.'
          }
        }
      },
      {
        id: 'collaborative-solution',
        text: 'Frame it as a team challenge and work together to identify obstacles and create an improvement plan.',
        feedback: 'This collaborative approach maintains the relationship while addressing performance, though it may take longer to see results.',
        consequences: {
          immediate: 'The team member feels supported rather than criticized and opens up about challenges.',
          shortTerm: 'You gain insights into systemic issues affecting performance and build stronger trust.',
          longTerm: 'The team member becomes more proactive about seeking help and the team culture improves overall.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'decision-making', impact: 6 }
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
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Team Member',
              impact: 'Feels valued and supported, more likely to be open about challenges',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Team',
              impact: 'Sees collaborative problem-solving modeled, feels safer to raise issues',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Your Manager',
              impact: 'Appreciates your team-building approach but may want faster results',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Be clear that while you\'re collaborating, performance must improve',
            shortTerm: 'Set specific milestones to ensure progress is being made',
            longTerm: 'Be prepared to escalate if collaborative approach doesn\'t yield results'
          },
          mitigation: {
            immediate: 'Document the conversation and agreed-upon action items',
            shortTerm: 'Schedule weekly check-ins to monitor progress',
            longTerm: 'Have a backup plan if performance doesn\'t improve within 30 days'
          },
          reflectionPrompts: [
            'How can you balance collaboration with accountability?',
            'What systemic issues might be contributing to this performance problem?',
            'How will you know if this approach is working?'
          ],
          skillRecommendations: [
            {
              skill: 'Collaborative Problem Solving',
              reason: 'Learn techniques for involving others in finding solutions',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Systems Thinking',
              reason: 'Understanding how individual performance connects to larger systems',
              link: '/library/systems-thinking'
            }
          ],
          realWorldExample: {
            title: 'Software Team Lead\'s Partnership',
            description: 'A team lead worked with a struggling developer to identify that unclear requirements were causing quality issues.',
            outcome: 'Together they created a requirements checklist that improved the entire team\'s output. The developer became a champion for quality processes.'
          }
        }
      },
      {
        id: 'escalate-to-hr',
        text: 'Document the issues and involve HR to ensure proper process and protect yourself legally.',
        feedback: 'While this protects you procedurally, it may damage trust and miss opportunities for genuine improvement through direct leadership.',
        consequences: {
          immediate: 'The team member feels blindsided and the relationship becomes formal and distant.',
          shortTerm: 'HR processes may improve documentation but could create an adversarial dynamic.',
          longTerm: 'You may be seen as someone who doesn\'t handle difficult conversations directly, affecting team trust.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 3 },
          { area: 'emotional-intelligence', impact: 2 },
          { area: 'decision-making', impact: 4 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'negative' as const,
            shortTerm: 'neutral' as const,
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
              impact: 'Feels betrayed and may become defensive or disengaged',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Team',
              impact: 'May lose trust in your ability to handle issues directly',
              severity: 'negative' as const
            },
            {
              stakeholder: 'HR',
              impact: 'Appreciates proper documentation but may question why you didn\'t try direct conversation first',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Have a direct conversation first, then involve HR if needed',
            shortTerm: 'Use HR as a resource for guidance rather than taking over the situation',
            longTerm: 'Develop your skills in handling difficult conversations independently'
          },
          mitigation: {
            immediate: 'Explain to the team member that you want to ensure fairness and proper support',
            shortTerm: 'Work with HR to create a development plan rather than just documentation',
            longTerm: 'Rebuild trust by being more direct in future situations'
          },
          reflectionPrompts: [
            'What made you feel that HR involvement was necessary at this stage?',
            'How might this approach affect your relationship with other team members?',
            'What skills could you develop to handle this situation more directly?'
          ],
          skillRecommendations: [
            {
              skill: 'Conflict Resolution',
              reason: 'Learn to address performance issues before they require HR intervention',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Progressive Discipline',
              reason: 'Understand when and how to escalate performance issues appropriately',
              link: '/library/performance-management'
            }
          ],
          realWorldExample: {
            title: 'Corporate Manager\'s Escalation',
            description: 'A manager immediately involved HR for a performance issue without attempting direct conversation first.',
            outcome: 'The employee felt ambushed and the team lost confidence in the manager\'s leadership. HR recommended the manager try direct conversation first in future situations.'
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