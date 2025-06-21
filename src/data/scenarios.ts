import { Scenario } from '../types';

export const scenarios: Scenario[] = [
  {
    id: 'difficult-feedback',
    title: 'Delivering Difficult Feedback',
    description: 'Navigate a challenging conversation with a team member who isn\'t meeting project expectations.',
    situation: 'You\'re leading a cross-functional project team of 6 people working on a critical product launch. One of your team members, Alex, has been consistently missing deliverable deadlines and their work quality has been below the team\'s standards. This is affecting the entire project timeline and team morale. Other team members have started to notice and are having to pick up the slack. You need to address this with Alex in your next one-on-one check-in.',
    roleContext: {
      yourRole: 'Project Team Lead',
      teamSize: '6-person cross-functional project team',
      timeline: 'This pattern has been ongoing for 3 weeks',
      stakes: 'Critical product launch in 5 weeks, with executive visibility',
      pressure: 'Other team members are starting to express frustration privately',
      stakeholders: 'Project team members, Product Manager, Engineering Lead, Design Lead',
      history: 'Alex was specifically chosen for this project due to their expertise in this domain'
    },
    choices: [
      {
        id: 'direct-feedback',
        text: 'Be direct and focus on the performance issues, clearly stating expectations and consequences.',
        feedback: 'Your straightforward approach ensures clarity about the project requirements, but without balancing it with empathy, the feedback might be received defensively, potentially damaging team dynamics.',
        consequences: {
          immediate: 'Alex becomes defensive and shuts down during the conversation.',
          shortTerm: 'They may improve temporarily but feel isolated from the team and start disengaging.',
          longTerm: 'You might lose a valuable team member\'s expertise, and other team members may view you as too harsh, affecting team psychological safety.'
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
              stakeholder: 'Alex (Team Member)',
              impact: 'Feels attacked and becomes defensive, may lose confidence and withdraw from team collaboration',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Project Team',
              impact: 'May worry about receiving similar harsh feedback, reducing psychological safety',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Sees you as decisive but may question your team leadership skills',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Start with empathy: "I know you\'re committed to this project\'s success, and I want to help you contribute your best work."',
            shortTerm: 'Follow up with support and resources rather than just monitoring performance',
            longTerm: 'Build a development plan together to address root causes of the performance issues'
          },
          mitigation: {
            immediate: 'Acknowledge their domain expertise first and express confidence in their ability to improve',
            shortTerm: 'Schedule regular check-ins and provide specific, actionable guidance on project deliverables',
            longTerm: 'Invest in their professional development and celebrate improvements publicly to the team'
          },
          reflectionPrompts: [
            'How might your delivery style affect Alex\'s willingness to be vulnerable about challenges they\'re facing?',
            'What underlying issues might be causing the performance problems (workload, unclear requirements, personal challenges)?',
            'How can you balance accountability with maintaining team psychological safety?'
          ],
          skillRecommendations: [
            {
              skill: 'Emotional Intelligence',
              reason: 'Better reading of emotional cues would help you adjust your approach for team dynamics',
              link: '/topics/foundational-mindsets/emotional-intelligence'
            },
            {
              skill: 'Peer Leadership Skills',
              reason: 'Learning to influence and guide peers without formal authority',
              link: '/library/peer-leadership'
            }
          ],
          realWorldExample: {
            title: 'Software Project Team Conflict',
            description: 'A technical lead used direct feedback with a struggling team member, focusing only on missed deadlines without exploring causes.',
            outcome: 'The team member became withdrawn and stopped participating in team discussions. The project suffered from loss of their domain expertise, and team collaboration deteriorated.'
          }
        }
      },
      {
        id: 'sandwich-method',
        text: 'Use the "feedback sandwich" approach, starting with positives, addressing the issues, then ending with encouragement.',
        feedback: 'While this approach feels comfortable and maintains team harmony, research shows it often dilutes the core message. Alex might only remember the positive parts and miss the urgency of needed changes.',
        consequences: {
          immediate: 'The conversation feels pleasant, but the core message about project impact gets lost.',
          shortTerm: 'Performance issues continue because the urgency wasn\'t communicated effectively, affecting team deliverables.',
          longTerm: 'You\'ll need to have this conversation again, and Alex may feel blindsided by eventual project consequences or team frustration.'
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
              stakeholder: 'Alex (Team Member)',
              impact: 'Feels good about the conversation but misses the urgency of needed changes for project success',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Project Team',
              impact: 'Continues to be affected by performance issues and may lose confidence in your leadership',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'May question your ability to address project risks directly',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Use the SBI model (Situation-Behavior-Impact) for clearer feedback about project impact',
            shortTerm: 'Follow up within a week to ensure the message was understood and project timeline is on track',
            longTerm: 'Be more direct in future project conversations while maintaining team relationships'
          },
          mitigation: {
            immediate: 'End the conversation by asking Alex to summarize what they heard about project expectations',
            shortTerm: 'Set specific, measurable project goals with clear deadlines and team dependencies',
            longTerm: 'Document the conversation and create accountability checkpoints with the team'
          },
          reflectionPrompts: [
            'How can you be both supportive and clear about project requirements?',
            'What would happen if you were more direct about the impact on team deliverables?',
            'How might Alex interpret mixed messages about their project performance?'
          ],
          skillRecommendations: [
            {
              skill: 'Direct Communication',
              reason: 'Learning to be clear without being harsh improves project communication',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Project Feedback Models',
              reason: 'Structured approaches like SBI can replace the sandwich method for project contexts',
              link: '/library/effective-feedback'
            }
          ],
          realWorldExample: {
            title: 'Marketing Project Lead\'s Gentle Approach',
            description: 'A project lead used the sandwich method with an underperforming team member, emphasizing positives about their contributions.',
            outcome: 'The team member was shocked when removed from the project two weeks later, saying they thought they were doing well based on previous feedback. The project timeline suffered significantly.'
          }
        }
      },
      {
        id: 'coaching-approach',
        text: 'Take a coaching approach, asking questions to help them recognize the issues and develop their own solutions.',
        feedback: 'This approach builds lasting growth by developing self-awareness and ownership, while maintaining strong team relationships. It requires more time and skill to execute effectively but often yields the best long-term results.',
        consequences: {
          immediate: 'Alex feels heard and becomes engaged in problem-solving for the project.',
          shortTerm: 'They take ownership of improvement plans and show genuine commitment to team success.',
          longTerm: 'You develop a stronger, more self-aware team member who can handle similar project challenges independently and becomes a better collaborator.'
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
              stakeholder: 'Alex (Team Member)',
              impact: 'Feels supported and empowered to improve, maintains dignity and team standing',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Project Team',
              impact: 'Sees you as a supportive leader who invests in team members and maintains team cohesion',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Recognizes your team leadership and development skills',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            shortTerm: 'If progress is slow, you might need to be more direct about project timeline constraints',
            longTerm: 'Consider formal coaching training to enhance these peer leadership skills further'
          },
          reflectionPrompts: [
            'What questions helped Alex discover insights about their project performance on their own?',
            'How did maintaining curiosity rather than judgment change the team dynamic?',
            'What did you learn about the root causes of their performance issues that might affect other team members?'
          ],
          skillRecommendations: [
            {
              skill: 'Active Listening',
              reason: 'Essential for effective coaching conversations with team peers',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Powerful Questioning',
              reason: 'Learn to ask questions that promote self-discovery in project contexts',
              link: '/library/coaching-questions'
            }
          ],
          realWorldExample: {
            title: 'Agile Team Lead Success',
            description: 'A scrum master used coaching questions to help a struggling developer identify that unclear user stories were causing quality issues.',
            outcome: 'The developer became one of the team\'s strongest contributors within a month and later helped improve the team\'s story refinement process.'
          }
        }
      },
      {
        id: 'delay-feedback',
        text: 'Postpone the conversation until you have more data or until project pressures aren\'t as high.',
        feedback: 'Delaying necessary feedback allows project problems to persist and may signal to other team members that underperformance is acceptable, potentially affecting overall team standards.',
        consequences: {
          immediate: 'You avoid an uncomfortable conversation, but the project issues continue.',
          shortTerm: 'Project deliverables suffer, and other team members notice the lack of accountability.',
          longTerm: 'You lose credibility as a team leader, and performance standards across the project team may decline.'
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
              stakeholder: 'Alex (Team Member)',
              impact: 'Continues poor performance, unaware of the severity of impact on project and team',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Project Team',
              impact: 'Loses respect for your leadership and questions fairness of project expectations',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Questions your ability to manage project performance and team dynamics',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Schedule the conversation for later today rather than postponing indefinitely',
            shortTerm: 'Prepare talking points about project impact to make the conversation more structured',
            longTerm: 'Develop your comfort with difficult team conversations through practice'
          },
          mitigation: {
            immediate: 'Set a specific date within 48 hours for the conversation',
            shortTerm: 'Address the delay with Alex and apologize for not acting sooner on project concerns',
            longTerm: 'Implement regular team check-ins to catch project issues earlier'
          },
          reflectionPrompts: [
            'What fears or concerns are driving your desire to delay this project conversation?',
            'How might your avoidance be perceived by other team members who are picking up the slack?',
            'What would you advise another team lead in this project situation?'
          ],
          skillRecommendations: [
            {
              skill: 'Difficult Conversations',
              reason: 'Building comfort with challenging discussions is essential for team leadership',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Project Leadership Courage',
              reason: 'Learn to act despite discomfort for the good of the project and team',
              link: '/library/leadership-courage'
            }
          ],
          realWorldExample: {
            title: 'Design Team Lead\'s Avoidance',
            description: 'A design team lead avoided addressing a team member\'s frequent missed deadlines for three weeks, hoping it would resolve itself.',
            outcome: 'Other team members began missing deadlines, citing unfairness. The project launch was delayed by two weeks, and team morale plummeted significantly.'
          }
        }
      },
      {
        id: 'collaborative-solution',
        text: 'Frame it as a team challenge and work together to identify obstacles and create an improvement plan.',
        feedback: 'This collaborative approach maintains team relationships while addressing project performance. It leverages the team dynamic and shared project ownership, though it may take longer to see individual results.',
        consequences: {
          immediate: 'Alex feels supported rather than criticized and opens up about project challenges.',
          shortTerm: 'You gain insights into systemic project issues affecting performance and build stronger team trust.',
          longTerm: 'Alex becomes more proactive about seeking help, and the overall team collaboration and project culture improves.'
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
              stakeholder: 'Alex (Team Member)',
              impact: 'Feels valued and supported, more likely to be open about project challenges',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Project Team',
              impact: 'Sees collaborative problem-solving modeled, feels safer to raise project issues',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Appreciates your team-building approach but may want faster project results',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Be clear that while you\'re collaborating, project performance must improve',
            shortTerm: 'Set specific project milestones to ensure progress is being made',
            longTerm: 'Be prepared to escalate if collaborative approach doesn\'t yield project results'
          },
          mitigation: {
            immediate: 'Document the conversation and agreed-upon action items for project deliverables',
            shortTerm: 'Schedule weekly check-ins to monitor progress on project goals',
            longTerm: 'Have a backup plan if performance doesn\'t improve within 2 weeks given project timeline'
          },
          reflectionPrompts: [
            'How can you balance collaboration with project accountability?',
            'What systemic project issues might be contributing to this performance problem?',
            'How will you know if this approach is working within the project timeline?'
          ],
          skillRecommendations: [
            {
              skill: 'Collaborative Problem Solving',
              reason: 'Learn techniques for involving team members in finding project solutions',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Team Systems Thinking',
              reason: 'Understanding how individual performance connects to team project success',
              link: '/library/systems-thinking'
            }
          ],
          realWorldExample: {
            title: 'Product Team Lead\'s Partnership',
            description: 'A team lead worked with a struggling team member to identify that unclear project requirements were causing quality issues.',
            outcome: 'Together they created a requirements checklist that improved the entire team\'s output. The team member became a champion for quality processes and project success.'
          }
        }
      },
      {
        id: 'escalate-to-manager',
        text: 'Document the issues and involve your manager or the Product Manager to ensure proper process and project protection.',
        feedback: 'While this protects the project procedurally, it may damage team trust and miss opportunities for genuine improvement through direct team leadership.',
        consequences: {
          immediate: 'Alex feels blindsided and the team relationship becomes formal and distant.',
          shortTerm: 'Management processes may improve documentation but could create an adversarial team dynamic.',
          longTerm: 'You may be seen as someone who doesn\'t handle difficult team conversations directly, affecting team trust and your leadership credibility.'
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
              stakeholder: 'Alex (Team Member)',
              impact: 'Feels betrayed and may become defensive or disengaged from the team',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Project Team',
              impact: 'May lose trust in your ability to handle team issues directly',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Appreciates proper escalation but may question why you didn\'t try direct conversation first',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Have a direct team conversation first, then involve management if needed',
            shortTerm: 'Use management as a resource for guidance rather than taking over the team situation',
            longTerm: 'Develop your skills in handling difficult team conversations independently'
          },
          mitigation: {
            immediate: 'Explain to Alex that you want to ensure fairness and proper project support',
            shortTerm: 'Work with management to create a development plan rather than just documentation',
            longTerm: 'Rebuild team trust by being more direct in future team situations'
          },
          reflectionPrompts: [
            'What made you feel that management involvement was necessary at this stage?',
            'How might this approach affect your relationship with other team members?',
            'What team leadership skills could you develop to handle this situation more directly?'
          ],
          skillRecommendations: [
            {
              skill: 'Team Conflict Resolution',
              reason: 'Learn to address team performance issues before they require management intervention',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Peer Leadership',
              reason: 'Understand how to lead and influence team members without formal authority',
              link: '/library/peer-leadership'
            }
          ],
          realWorldExample: {
            title: 'Engineering Team Lead\'s Escalation',
            description: 'A team lead immediately involved their manager for a performance issue without attempting direct team conversation first.',
            outcome: 'The team member felt ambushed and other team members lost confidence in the lead\'s ability to handle team issues. The manager recommended the lead try direct conversation first in future situations.'
          }
        }
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'communication'],
    difficulty: 'foundational',
    xpReward: 50
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
      },
      {
        id: 'data-driven-pilot',
        text: 'Run small pilots of each option to gather data before making the full investment decision.',
        feedback: 'This methodical approach reduces risk and provides evidence for decision-making, though it may delay benefits and require more management overhead.',
        consequences: {
          immediate: 'Team appreciates the thoughtful approach, but some may be frustrated by the delay.',
          shortTerm: 'You gather valuable data and can make a more informed decision, but competitors may move faster.',
          longTerm: 'Higher confidence in the final choice and better team buy-in, though you may miss time-sensitive opportunities.'
        },
        impactAreas: [
          { area: 'analytical-thinking', impact: 9 },
          { area: 'people-focus', impact: 6 },
          { area: 'risk-taking', impact: 5 }
        ]
      },
      {
        id: 'seek-additional-budget',
        text: 'Present a business case to leadership for additional budget to pursue multiple initiatives.',
        feedback: 'This shows initiative and strategic thinking, but success depends on your influence with leadership and the company\'s financial position.',
        consequences: {
          immediate: 'Leadership either appreciates your strategic thinking or questions why you can\'t work within constraints.',
          shortTerm: 'If successful, you can pursue multiple priorities; if not, you\'re back to the original decision with less time.',
          longTerm: 'Success enhances your reputation as a strategic leader; failure may limit future budget requests and autonomy.'
        },
        impactAreas: [
          { area: 'analytical-thinking', impact: 7 },
          { area: 'people-focus', impact: 4 },
          { area: 'risk-taking', impact: 7 }
        ]
      }
    ],
    growthAreas: ['decision-making', 'strategic-thinking', 'resource-management'],
    difficulty: 'applied',
    xpReward: 75
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
  },
  {
    id: 'performance-review-disagreement',
    title: 'Performance Review Disagreement',
    description: 'Challenge an unfair performance assessment while maintaining a professional relationship with your manager.',
    situation: 'Your annual performance review rated you as "meets expectations" despite exceeding all your goals and receiving positive client feedback. Your manager cited "communication style" as an area for improvement but provided no specific examples. You believe this assessment doesn\'t reflect your actual performance and may impact your career progression.',
    roleContext: {
      yourRole: 'Marketing Specialist',
      teamSize: '8-person marketing team',
      timeline: 'Performance review cycle just completed, promotion decisions happening in 2 weeks',
      stakes: 'Potential promotion to Senior Marketing Specialist and 15% salary increase',
      pressure: 'This is your second year in role, and you were expecting a promotion',
      stakeholders: 'Direct manager, HR Business Partner, Marketing Director',
      history: 'You\'ve consistently received positive feedback throughout the year in 1:1s'
    },
    choices: [
      {
        id: 'direct-challenge',
        text: 'Directly challenge the assessment with specific examples of your achievements and request a revision.',
        feedback: 'This assertive approach ensures your accomplishments are recognized, but could strain your relationship with your manager if not handled diplomatically.',
        consequences: {
          immediate: 'Your manager becomes defensive about their assessment decision.',
          shortTerm: 'The review may be reconsidered, but your working relationship becomes tense.',
          longTerm: 'You might get the recognition you deserve, but future feedback could be more critical.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 4 },
          { area: 'decision-making', impact: 6 }
        ]
      },
      {
        id: 'seek-clarification',
        text: 'Ask for specific examples of communication issues and create a development plan to address them.',
        feedback: 'This collaborative approach shows professionalism and growth mindset, though it may not address the underlying fairness issue.',
        consequences: {
          immediate: 'Your manager appreciates your receptiveness to feedback.',
          shortTerm: 'You work on communication skills, but the unfair assessment stands.',
          longTerm: 'You develop professionally, but may miss this promotion cycle despite strong performance.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 3 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'decision-making', impact: 5 }
        ]
      },
      {
        id: 'document-and-escalate',
        text: 'Document your achievements and escalate to HR or your manager\'s supervisor for a fair review.',
        feedback: 'This formal approach protects your interests but may damage your relationship with your direct manager permanently.',
        consequences: {
          immediate: 'Your manager feels blindsided and the relationship becomes adversarial.',
          shortTerm: 'HR investigates and may adjust your review, but team dynamics suffer.',
          longTerm: 'You get fair treatment but may need to transfer teams or find a new role.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 3 },
          { area: 'decision-making', impact: 8 }
        ]
      },
      {
        id: 'gather-peer-feedback',
        text: 'Collect feedback from colleagues and clients to build a case for your performance level.',
        feedback: 'This evidence-based approach strengthens your position while maintaining professionalism, though it takes time and effort.',
        consequences: {
          immediate: 'You gather strong evidence of your performance and impact.',
          shortTerm: 'You can present a compelling case for review adjustment with third-party validation.',
          longTerm: 'Your manager respects your thorough approach, and you get fair recognition.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 7 }
        ]
      },
      {
        id: 'accept-and-plan',
        text: 'Accept the review but ask for clear expectations and support to reach the next level.',
        feedback: 'This diplomatic approach preserves relationships but may not address the fairness issue or your immediate career goals.',
        consequences: {
          immediate: 'Your manager is pleased with your attitude and receptiveness.',
          shortTerm: 'You get clear development guidance but miss this promotion opportunity.',
          longTerm: 'Strong relationship with your manager, but slower career progression than deserved.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 2 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'decision-making', impact: 4 }
        ]
      },
      {
        id: 'request-mediation',
        text: 'Request a three-way conversation with HR to discuss the assessment and find a path forward.',
        feedback: 'This balanced approach seeks resolution while maintaining professionalism, though it requires HR support and manager cooperation.',
        consequences: {
          immediate: 'HR facilitates a constructive conversation about performance expectations.',
          shortTerm: 'You reach a mutual understanding and potentially adjust the review.',
          longTerm: 'Improved communication with your manager and clearer performance standards.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'decision-making', impact: 6 }
        ]
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
    difficulty: 'applied',
    xpReward: 75
  },
  {
    id: 'resource-allocation-conflict',
    title: 'Resource Allocation Conflict',
    description: 'Address unequal project assignments that are limiting your growth opportunities and visibility.',
    situation: 'You\'ve noticed that high-visibility projects consistently go to certain team members while you\'re assigned routine maintenance work. When you raised this with your manager, they said you need to "prove yourself" first, but you feel stuck in a cycle where you can\'t prove yourself without better opportunities.',
    roleContext: {
      yourRole: 'UX Designer',
      teamSize: '6-person design team',
      timeline: 'Project assignments for next quarter being decided this week',
      stakes: 'Career growth and skill development opportunities',
      pressure: 'You\'ve been in the role for 18 months with limited advancement',
      stakeholders: 'Design Manager, Product Managers, Senior Designers',
      history: 'You\'ve completed all assigned projects successfully but haven\'t been given stretch opportunities'
    },
    choices: [
      {
        id: 'propose-specific-projects',
        text: 'Research upcoming projects and propose specific ones where you could add value and grow.',
        feedback: 'This proactive approach demonstrates initiative and strategic thinking about your development, showing you\'re serious about growth.',
        consequences: {
          immediate: 'Your manager appreciates your initiative and specific preparation.',
          shortTerm: 'You\'re more likely to get assigned to projects that match your interests and growth goals.',
          longTerm: 'You develop a reputation as someone who takes ownership of their career development.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 8 }
        ]
      },
      {
        id: 'request-mentorship',
        text: 'Ask for mentorship from senior team members and guidance on how to position yourself for better projects.',
        feedback: 'This approach builds relationships and shows humility while seeking growth, though it may take longer to see results.',
        consequences: {
          immediate: 'Senior team members are flattered and willing to help guide your development.',
          shortTerm: 'You gain insights into how project assignments work and what skills to develop.',
          longTerm: 'Strong internal advocates help you get better opportunities over time.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'decision-making', impact: 6 }
        ]
      },
      {
        id: 'document-pattern',
        text: 'Document the pattern of project assignments and present data showing the disparity to your manager.',
        feedback: 'This analytical approach provides objective evidence of the issue, though it may come across as confrontational.',
        consequences: {
          immediate: 'Your manager is surprised by the data and realizes the pattern exists.',
          shortTerm: 'Project assignments become more equitable, but some tension exists in the relationship.',
          longTerm: 'You get better opportunities but may be seen as someone who escalates issues formally.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 5 },
          { area: 'decision-making', impact: 7 }
        ]
      },
      {
        id: 'volunteer-for-extra-work',
        text: 'Volunteer for additional responsibilities and side projects to demonstrate your capabilities.',
        feedback: 'This approach shows dedication and creates opportunities to prove yourself, though it increases your workload significantly.',
        consequences: {
          immediate: 'Your manager sees your enthusiasm and gives you additional responsibilities.',
          shortTerm: 'You gain experience and visibility through extra work, but work-life balance suffers.',
          longTerm: 'You prove your capabilities and earn better project assignments, but may experience burnout.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
          { area: 'emotional-intelligence', impact: 4 },
          { area: 'decision-making', impact: 6 }
        ]
      },
      {
        id: 'seek-external-opportunities',
        text: 'Look for growth opportunities outside your immediate team, such as cross-functional projects or committees.',
        feedback: 'This creative approach expands your network and creates new paths for growth, though it may not solve the immediate team dynamic.',
        consequences: {
          immediate: 'You find new opportunities to contribute and grow outside your direct team.',
          shortTerm: 'You gain experience and visibility across the organization.',
          longTerm: 'You build a strong internal network and may find opportunities to transfer to teams that value your contributions more.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'decision-making', impact: 8 }
        ]
      },
      {
        id: 'schedule-career-conversation',
        text: 'Schedule a dedicated career development conversation to understand what specific criteria are used for project assignments.',
        feedback: 'This direct but professional approach seeks clarity on expectations while showing commitment to growth.',
        consequences: {
          immediate: 'Your manager clarifies the criteria and expectations for getting better projects.',
          shortTerm: 'You have a clear roadmap for earning more challenging assignments.',
          longTerm: 'Transparent communication leads to better project assignments as you meet the stated criteria.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'decision-making', impact: 7 }
        ]
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
    difficulty: 'applied',
    xpReward: 75
  },
  {
    id: 'career-growth-1on1',
    title: 'Seeking Career Growth in Project-Focused 1:1s',
    description: 'Redirect your 1:1 meetings from project updates to career development and growth conversations.',
    situation: 'Your weekly 1:1s with your manager have become routine project status updates. When you try to discuss career development, your manager quickly redirects to current work priorities. You feel like you\'re missing opportunities for mentorship and growth guidance that could help advance your career.',
    roleContext: {
      yourRole: 'Financial Analyst',
      teamSize: '12-person finance team',
      timeline: 'Weekly 1:1 meetings, performance review season approaching in 6 weeks',
      stakes: 'Career advancement and skill development opportunities',
      pressure: 'You want to be promoted to Senior Analyst within the next year',
      stakeholders: 'Finance Manager, Finance Director, cross-functional partners',
      history: 'You\'ve been in role for 14 months and consistently deliver quality work on time'
    },
    choices: [
      {
        id: 'agenda-ownership',
        text: 'Take ownership of the 1:1 agenda by sending topics in advance focused on your development.',
        feedback: 'This proactive approach demonstrates initiative and helps ensure your priorities get discussed, though it requires consistent effort.',
        consequences: {
          immediate: 'Your manager appreciates the structure and comes prepared to discuss your topics.',
          shortTerm: 'Your 1:1s become more valuable for your development and career planning.',
          longTerm: 'You build a stronger relationship with your manager and get better guidance on advancement.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 7 }
        ]
      },
      {
        id: 'separate-meetings',
        text: 'Request separate monthly career development meetings in addition to regular project check-ins.',
        feedback: 'This approach creates dedicated time for growth conversations while maintaining project communication, though it requires more time commitment.',
        consequences: {
          immediate: 'Your manager agrees to dedicated development time and appreciates the separation.',
          shortTerm: 'You get focused career guidance without project pressures interfering.',
          longTerm: 'Consistent development conversations lead to clearer advancement path and better opportunities.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'decision-making', impact: 8 }
        ]
      },
      {
        id: 'direct-conversation',
        text: 'Have a direct conversation about your career goals and ask for specific guidance on advancement.',
        feedback: 'This straightforward approach clarifies your ambitions and requests specific support, though it may catch your manager off-guard.',
        consequences: {
          immediate: 'Your manager understands your career aspirations and commitment to growth.',
          shortTerm: 'You get specific advice on skills to develop and opportunities to pursue.',
          longTerm: 'Your manager becomes an active advocate for your advancement and provides ongoing guidance.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 5 },
          { area: 'decision-making', impact: 7 }
        ]
      },
      {
        id: 'project-connection',
        text: 'Connect current projects to your development goals and ask how each assignment builds relevant skills.',
        feedback: 'This approach links immediate work to long-term growth, making development discussions feel more relevant to your manager.',
        consequences: {
          immediate: 'Your manager sees how you\'re thinking strategically about your development.',
          shortTerm: 'Project assignments become more intentional about building specific skills.',
          longTerm: 'You get more challenging work that aligns with your career goals and advancement timeline.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'decision-making', impact: 7 }
        ]
      },
      {
        id: 'seek-alternative-mentorship',
        text: 'Find mentorship and career guidance from other senior team members or leaders in the organization.',
        feedback: 'This approach diversifies your support network and may provide different perspectives, though it doesn\'t solve the immediate manager relationship.',
        consequences: {
          immediate: 'You build relationships with other leaders who can provide career guidance.',
          shortTerm: 'You get diverse perspectives on advancement and skill development.',
          longTerm: 'Strong internal network supports your career growth, though your direct manager relationship may remain transactional.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'decision-making', impact: 6 }
        ]
      },
      {
        id: 'propose-development-plan',
        text: 'Create a personal development plan and ask your manager to help you execute it.',
        feedback: 'This organized approach shows initiative and makes it easy for your manager to support your growth with a clear framework.',
        consequences: {
          immediate: 'Your manager is impressed by your preparation and clear thinking about development.',
          shortTerm: 'You have a structured approach to skill building with your manager\'s support.',
          longTerm: 'Systematic development leads to promotion readiness and strong manager advocacy.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 8 }
        ]
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
    difficulty: 'applied',
    xpReward: 75
  }
];

export const getScenarioById = (id: string): Scenario | undefined => {
  return scenarios.find(scenario => scenario.id === id);
};