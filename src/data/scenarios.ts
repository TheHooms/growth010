import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: 'team-credit-conflict',
    title: 'Taking Credit for Team Work',
    description: 'Navigate a situation where a teammate is taking credit for your contributions in front of leadership.',
    situation: 'You\'ve been working closely with Jordan on a high-visibility project for the past month. You developed the core algorithm and Jordan handled the implementation. During today\'s executive presentation, Jordan presented the entire solution as "my innovative approach" and "the system I built," without mentioning your contributions. The executives were impressed and praised Jordan\'s "brilliant work." After the meeting, your manager approached Jordan to discuss a potential promotion based on this "outstanding individual contribution."',
    roleContext: {
      yourRole: 'Senior Software Engineer',
      teamSize: '8-person product development team',
      timeline: 'This happened during today\'s quarterly executive review',
      stakes: 'Promotion opportunities and recognition for career advancement',
      pressure: 'Other team members witnessed the presentation and are watching how you handle this',
      stakeholders: 'Jordan (teammate), your manager, executives, other team members',
      history: 'You and Jordan have collaborated well in the past, and this behavior is new'
    },
    choices: [
      {
        id: 'immediate-confrontation',
        text: 'Immediately address Jordan privately after the meeting to express your concerns about the misrepresentation.',
        feedback: 'This direct approach shows assertiveness and addresses the issue quickly, but timing and emotional state could affect how the conversation goes. Your immediate reaction might come across as accusatory.',
        consequences: {
          immediate: 'Jordan becomes defensive and claims they didn\'t mean to exclude you, but the damage to executive perception is already done.',
          shortTerm: 'The relationship with Jordan becomes tense, and they may be more guarded in future collaborations.',
          longTerm: 'You establish boundaries but may be seen as someone who creates conflict, potentially affecting team dynamics and future project assignments.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 4 },
          { area: 'decision-making', impact: 5 }
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
              stakeholder: 'Jordan (Teammate)',
              impact: 'Feels attacked and becomes defensive, may damage working relationship and future collaboration',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Team Members',
              impact: 'May see you as confrontational or may respect you for standing up for yourself',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Manager',
              impact: 'Unaware of the conflict, still has incorrect impression of individual contributions',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Wait until emotions settle and plan a more strategic conversation',
            shortTerm: 'Focus on documenting your contributions for future reference',
            longTerm: 'Build a pattern of making your contributions visible proactively'
          },
          mitigation: {
            immediate: 'Approach with curiosity rather than accusation: "I noticed our collaboration wasn\'t mentioned..."',
            shortTerm: 'Suggest joint follow-up with leadership to clarify the collaborative nature',
            longTerm: 'Establish clear communication protocols for future joint presentations'
          },
          reflectionPrompts: [
            'How might your emotional state affect how Jordan receives your feedback?',
            'What would be the most constructive way to address this while preserving the working relationship?',
            'How can you ensure your contributions are visible without creating team conflict?'
          ],
          skillRecommendations: [
            {
              skill: 'Difficult Conversations',
              reason: 'Learning to address sensitive topics with teammates while maintaining relationships',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Emotional Regulation',
              reason: 'Managing your emotional response when feeling overlooked or undervalued',
              link: '/topics/foundational-mindsets/emotional-intelligence'
            }
          ],
          realWorldExample: {
            title: 'Software Team Collaboration Conflict',
            description: 'A developer immediately confronted a teammate who took credit for their code architecture in a demo to stakeholders.',
            outcome: 'The teammate became defensive and their relationship deteriorated. The developer was later excluded from high-visibility projects because they were seen as "difficult to work with."'
          }
        }
      },
      {
        id: 'strategic-documentation',
        text: 'Document your contributions and schedule a separate meeting with your manager to clarify your role in the project.',
        feedback: 'This measured approach protects your interests while avoiding immediate conflict. It demonstrates professionalism and gives you time to present your case thoughtfully.',
        consequences: {
          immediate: 'You maintain composure and avoid confrontation, but Jordan\'s narrative remains unchallenged for now.',
          shortTerm: 'Your manager gains clarity on your contributions, but Jordan may feel blindsided when they learn you went to management.',
          longTerm: 'You protect your career interests and establish a record of your work, though it may create tension with Jordan and questions about team communication.'
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
            longTerm: 'neutral' as const
          },
          confidence: {
            immediate: 'high' as const,
            shortTerm: 'high' as const,
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Jordan (Teammate)',
              impact: 'May feel betrayed when they discover you went to management without talking to them first',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Manager',
              impact: 'Appreciates the clarification and documentation, gains accurate understanding of contributions',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Team Members',
              impact: 'May see you as professional and strategic, or may worry about team trust and communication',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Combine documentation with a direct conversation with Jordan first',
            shortTerm: 'Suggest a joint meeting with your manager to discuss the project collaboration',
            longTerm: 'Establish team norms for how collaborative work is presented and credited'
          },
          mitigation: {
            immediate: 'Let Jordan know you plan to clarify contributions with your manager',
            shortTerm: 'Frame the manager conversation as clarifying collaboration rather than correcting Jordan',
            longTerm: 'Work with Jordan to establish better communication for future joint presentations'
          },
          reflectionPrompts: [
            'How can you protect your interests while maintaining team trust?',
            'What systems could prevent this situation from happening again?',
            'How might going to your manager first affect your relationship with Jordan and team dynamics?'
          ],
          skillRecommendations: [
            {
              skill: 'Professional Documentation',
              reason: 'Learning to track and communicate your contributions effectively',
              link: '/topics/foundational-mindsets/self-awareness'
            },
            {
              skill: 'Stakeholder Communication',
              reason: 'Understanding how to navigate multiple relationships when addressing workplace issues',
              link: '/topics/foundational-mindsets/decision-making'
            }
          ],
          realWorldExample: {
            title: 'Product Manager\'s Strategic Approach',
            description: 'A PM documented their contributions to a successful feature launch after a teammate took full credit in a leadership presentation.',
            outcome: 'The manager appreciated the clarification and the PM received proper recognition, but the teammate felt undermined and their collaboration became strained.'
          }
        }
      },
      {
        id: 'collaborative-correction',
        text: 'Approach Jordan to suggest a joint follow-up presentation that properly highlights the collaborative nature of the work.',
        feedback: 'This collaborative approach addresses the issue while maintaining the relationship and demonstrating team leadership. It shows maturity and focus on shared success.',
        consequences: {
          immediate: 'Jordan may be receptive to the collaborative approach or may resist if they prefer the individual recognition.',
          shortTerm: 'If successful, both of you get proper credit and demonstrate strong teamwork to leadership.',
          longTerm: 'You build a reputation as someone who handles conflicts constructively and values team collaboration over individual recognition.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 9 },
          { area: 'decision-making', impact: 7 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'positive' as const,
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
              stakeholder: 'Jordan (Teammate)',
              impact: 'Appreciates the collaborative approach and opportunity to correct the situation together',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Manager',
              impact: 'Sees strong teamwork and collaboration, gains accurate understanding of contributions',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Team Members',
              impact: 'Witnesses positive conflict resolution and collaborative leadership',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            shortTerm: 'If Jordan resists, you may need to be more direct about the importance of accurate representation',
            longTerm: 'Consider establishing team presentation guidelines to prevent future issues'
          },
          mitigation: {
            immediate: 'Frame it as an opportunity to showcase teamwork rather than correcting a mistake',
            shortTerm: 'Prepare talking points that highlight both contributions naturally',
            longTerm: 'Use this as a model for how to handle similar situations in the future'
          },
          reflectionPrompts: [
            'How can you frame this conversation to feel collaborative rather than corrective?',
            'What would make Jordan want to participate in a joint follow-up?',
            'How might this approach strengthen your working relationship and team dynamics?'
          ],
          skillRecommendations: [
            {
              skill: 'Collaborative Problem Solving',
              reason: 'Learning to address conflicts in ways that strengthen rather than damage relationships',
              link: '/topics/foundational-mindsets/emotional-intelligence'
            },
            {
              skill: 'Influence Without Authority',
              reason: 'Developing skills to guide outcomes when you can\'t simply direct others',
              link: '/topics/foundational-mindsets/assertiveness'
            }
          ],
          realWorldExample: {
            title: 'Design Team\'s Joint Presentation',
            description: 'Two designers suggested a joint follow-up after one was inadvertently excluded from credit in a client presentation.',
            outcome: 'The joint presentation was well-received, both designers got proper recognition, and they became known as a strong collaborative partnership for future projects.'
          }
        }
      },
      {
        id: 'let-it-slide',
        text: 'Let it go this time and focus on making your contributions more visible in future projects.',
        feedback: 'This approach avoids conflict and focuses on future prevention, but may signal that you\'re willing to accept being overlooked, potentially setting a precedent.',
        consequences: {
          immediate: 'No immediate conflict, but Jordan\'s incorrect narrative stands and executives have the wrong impression.',
          shortTerm: 'Jordan may continue this behavior, and you may miss out on recognition and advancement opportunities.',
          longTerm: 'You may be consistently overlooked for contributions, affecting your career progression and team standing.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 2 },
          { area: 'emotional-intelligence', impact: 5 },
          { area: 'decision-making', impact: 3 }
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
              stakeholder: 'Jordan (Teammate)',
              impact: 'May interpret your silence as acceptance, potentially continuing this behavior',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Manager',
              impact: 'Maintains incorrect understanding of individual contributions and capabilities',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Team Members',
              impact: 'May lose respect for your willingness to advocate for yourself',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'At minimum, document the situation for future reference',
            shortTerm: 'Find subtle ways to make your contributions visible without direct confrontation',
            longTerm: 'Develop a proactive strategy for ensuring your work is properly attributed'
          },
          mitigation: {
            immediate: 'Start documenting your contributions more systematically',
            shortTerm: 'Increase your visibility in team meetings and project updates',
            longTerm: 'Build relationships with leadership to ensure your work is recognized'
          },
          reflectionPrompts: [
            'What message does your silence send to Jordan and other team members?',
            'How might this pattern affect your career advancement and team relationships?',
            'What are you afraid might happen if you address this situation directly?'
          ],
          skillRecommendations: [
            {
              skill: 'Self-Advocacy',
              reason: 'Learning to stand up for yourself professionally without creating unnecessary conflict',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Visibility Strategies',
              reason: 'Developing proactive approaches to ensure your contributions are recognized',
              link: '/topics/foundational-mindsets/self-awareness'
            }
          ],
          realWorldExample: {
            title: 'Marketing Team Member\'s Silence',
            description: 'A marketing specialist chose not to address a colleague taking credit for their campaign strategy in a leadership presentation.',
            outcome: 'The colleague was promoted based on the "innovative strategy," while the specialist was passed over for advancement. The pattern continued with future projects.'
          }
        }
      },
      {
        id: 'public-clarification',
        text: 'Send a follow-up email to the meeting attendees highlighting the collaborative nature of the project and your specific contributions.',
        feedback: 'This approach ensures the record is corrected publicly but may be seen as passive-aggressive or undermining Jordan. It addresses the immediate issue but could damage relationships.',
        consequences: {
          immediate: 'The executives and your manager see your contributions, but Jordan feels publicly undermined.',
          shortTerm: 'You get proper recognition, but Jordan may retaliate or become defensive in future collaborations.',
          longTerm: 'You establish a pattern of self-advocacy but may be seen as someone who doesn\'t handle conflicts directly, potentially affecting team trust.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
          { area: 'emotional-intelligence', impact: 3 },
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
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Jordan (Teammate)',
              impact: 'Feels publicly embarrassed and undermined, likely to damage working relationship significantly',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Manager',
              impact: 'Gets accurate information but may question why this wasn\'t handled directly between teammates',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Team Members',
              impact: 'May see this as passive-aggressive and worry about team communication and trust',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Talk to Jordan first before sending any public communication',
            shortTerm: 'Suggest Jordan send the clarification email themselves',
            longTerm: 'Focus on preventing similar situations through better upfront communication'
          },
          mitigation: {
            immediate: 'Frame the email as additional context rather than a correction',
            shortTerm: 'Have a direct conversation with Jordan about the email before or after sending',
            longTerm: 'Work on building more direct communication skills for future conflicts'
          },
          reflectionPrompts: [
            'How might a public correction affect your relationship with Jordan and team dynamics?',
            'What would be the most professional way to ensure accurate information reaches leadership?',
            'How can you balance self-advocacy with maintaining team relationships?'
          ],
          skillRecommendations: [
            {
              skill: 'Direct Communication',
              reason: 'Learning to address issues directly rather than through indirect methods',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Professional Email Communication',
              reason: 'Understanding how to communicate sensitive information professionally',
              link: '/topics/foundational-mindsets/emotional-intelligence'
            }
          ],
          realWorldExample: {
            title: 'Engineering Team Email Clarification',
            description: 'A software engineer sent a follow-up email to leadership clarifying their contributions after a teammate took credit in a presentation.',
            outcome: 'While the engineer got proper recognition, the teammate felt publicly humiliated and their relationship became hostile, affecting future project collaborations.'
          }
        }
      },
      {
        id: 'seek-team-support',
        text: 'Talk to other team members who witnessed the presentation to get their perspective and potential support.',
        feedback: 'This approach builds coalition and validates your perspective, but could be seen as creating drama or politics within the team. It may help you understand how others perceived the situation.',
        consequences: {
          immediate: 'You gain perspective and potentially allies, but may be seen as gossiping or creating team divisions.',
          shortTerm: 'Team members may support you or may distance themselves from what they see as workplace politics.',
          longTerm: 'You either build a support network or create a reputation for involving others in conflicts, affecting team dynamics and your professional relationships.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 5 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'neutral' as const,
            shortTerm: 'negative' as const,
            longTerm: 'negative' as const
          },
          confidence: {
            immediate: 'medium' as const,
            shortTerm: 'medium' as const,
            longTerm: 'low' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Jordan (Teammate)',
              impact: 'May feel ganged up on if they learn about team discussions, further damaging the relationship',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Team Members',
              impact: 'May feel uncomfortable being pulled into a conflict between teammates',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Manager',
              impact: 'May become aware of team drama and question the team\'s ability to handle conflicts professionally',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Seek advice from a trusted mentor outside the team',
            shortTerm: 'Focus on direct communication with Jordan rather than building coalitions',
            longTerm: 'Develop skills to handle conflicts independently without involving others'
          },
          mitigation: {
            immediate: 'If you do talk to teammates, focus on seeking advice rather than building support',
            shortTerm: 'Keep any conversations confidential and professional',
            longTerm: 'Use this experience to develop better direct conflict resolution skills'
          },
          reflectionPrompts: [
            'What are you hoping to achieve by involving other team members?',
            'How might this approach affect team dynamics and your professional relationships?',
            'What would be the most direct and professional way to address this situation?'
          ],
          skillRecommendations: [
            {
              skill: 'Conflict Resolution',
              reason: 'Learning to handle interpersonal conflicts directly without involving others',
              link: '/topics/foundational-mindsets/emotional-intelligence'
            },
            {
              skill: 'Professional Boundaries',
              reason: 'Understanding when and how to involve others in workplace conflicts',
              link: '/topics/foundational-mindsets/decision-making'
            }
          ],
          realWorldExample: {
            title: 'Product Team Coalition Building',
            description: 'A product manager talked to several teammates about a colleague taking credit, hoping to build support for addressing the issue.',
            outcome: 'The team became divided, with some supporting each side. The manager eventually had to intervene to address the team dysfunction, and both individuals were counseled about professional communication.'
          }
        }
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
    difficulty: 'foundational',
    xpReward: 50
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
  }
];

export const getScenarioById = (id: string): Scenario | undefined => {
  return scenarios.find(scenario => scenario.id === id);
};