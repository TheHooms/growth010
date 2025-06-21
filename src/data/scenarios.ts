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
    description: 'Navigate a situation where you strongly disagree with your manager\'s performance evaluation.',
    situation: 'You\'re a Marketing Specialist who has consistently exceeded campaign performance targets, launched three successful product campaigns, and received positive feedback from cross-functional partners. However, your manager has given you a "meets expectations" rating, citing concerns about your "strategic thinking" and "proactive communication." You believe this rating doesn\'t reflect your actual contributions and may impact your promotion timeline and compensation. Your manager seems to have different expectations than what was communicated to you throughout the year, and you\'re unsure how to address this professionally without damaging your relationship.',
    roleContext: {
      yourRole: 'Marketing Specialist',
      teamSize: '8-person marketing team',
      timeline: 'Performance review cycle just completed, ratings are being finalized this week',
      stakes: 'Promotion eligibility and annual compensation increase depend on this rating',
      pressure: 'You feel your contributions have been undervalued and worry about career progression',
      stakeholders: 'Direct manager (Marketing Manager), HR Business Partner, cross-functional partners who provided positive feedback',
      history: 'This is your second year in the role, and last year\'s review was positive with clear growth trajectory'
    },
    choices: [
      {
        id: 'request-formal-review',
        text: 'Request a formal meeting to discuss the rating with specific examples of your achievements.',
        feedback: 'This professional approach demonstrates confidence in your work while seeking clarity. It opens dialogue for understanding expectations and provides opportunity to present your case systematically.',
        consequences: {
          immediate: 'Your manager agrees to discuss but may feel defensive about their evaluation.',
          shortTerm: 'You present your case clearly, which may lead to rating adjustment or better understanding of expectations.',
          longTerm: 'Establishes you as someone who advocates for themselves professionally, though relationship dynamics may shift.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'self-awareness', impact: 6 },
          { area: 'communication', impact: 7 }
        ]
      },
      {
        id: 'seek-feedback-clarification',
        text: 'Ask for specific examples of where you fell short and create a development plan together.',
        feedback: 'This growth-oriented approach shows maturity and willingness to improve. However, it may inadvertently validate the lower rating without addressing whether it was fair.',
        consequences: {
          immediate: 'Your manager appreciates your receptiveness to feedback and development focus.',
          shortTerm: 'You gain clarity on expectations but may not address the fairness of the current rating.',
          longTerm: 'Strong development relationship with your manager, but you may miss opportunity to correct an unfair evaluation.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'self-awareness', impact: 8 },
          { area: 'communication', impact: 6 }
        ]
      },
      {
        id: 'gather-supporting-evidence',
        text: 'Collect feedback from cross-functional partners and document your achievements before discussing.',
        feedback: 'This strategic approach builds a strong case with objective evidence. It demonstrates thoroughness and professionalism while preparing you for a more effective conversation.',
        consequences: {
          immediate: 'You feel more confident with documented evidence, but the delay may make the conversation feel more formal.',
          shortTerm: 'Your evidence-based approach is harder to dismiss and may lead to rating reconsideration.',
          longTerm: 'Reputation as someone who is thorough and data-driven, with stronger case for future evaluations.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'self-awareness', impact: 7 },
          { area: 'communication', impact: 8 }
        ]
      },
      {
        id: 'accept-and-focus-forward',
        text: 'Accept the rating and focus on exceeding expectations in the areas mentioned for next year.',
        feedback: 'This approach avoids conflict and shows commitment to growth, but may allow an unfair evaluation to stand and impact your career progression.',
        consequences: {
          immediate: 'No immediate conflict, and your manager sees you as accepting feedback well.',
          shortTerm: 'You focus energy on improvement areas, but compensation and promotion timeline are affected.',
          longTerm: 'May establish pattern of not advocating for yourself, potentially impacting long-term career growth.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 2 },
          { area: 'self-awareness', impact: 5 },
          { area: 'communication', impact: 4 }
        ]
      },
      {
        id: 'involve-hr-consultation',
        text: 'Schedule a confidential consultation with HR to understand your options and the review process.',
        feedback: 'This approach helps you understand the formal process and your rights while getting objective guidance. It provides a safety net without immediately escalating.',
        consequences: {
          immediate: 'HR provides guidance on process and options, helping you make an informed decision.',
          shortTerm: 'You understand the formal review process and feel more prepared for next steps.',
          longTerm: 'HR relationship established for future guidance, though manager relationship may be affected if they learn of consultation.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'self-awareness', impact: 7 },
          { area: 'communication', impact: 5 }
        ]
      },
      {
        id: 'propose-360-feedback',
        text: 'Suggest implementing 360-degree feedback to get a more comprehensive view of your performance.',
        feedback: 'This innovative approach addresses potential bias and creates a more objective evaluation process. It shows confidence in your work while improving the system for everyone.',
        consequences: {
          immediate: 'Your manager may see this as questioning their judgment or may appreciate the systematic approach.',
          shortTerm: 'If implemented, provides more comprehensive feedback that may support your case.',
          longTerm: 'Establishes you as someone who thinks systemically and may improve evaluation processes for the team.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'self-awareness', impact: 6 },
          { area: 'communication', impact: 8 }
        ]
      }
    ],
    growthAreas: ['assertiveness', 'self-awareness', 'communication'],
    difficulty: 'applied',
    xpReward: 75
  },
  {
    id: 'resource-allocation-conflict',
    title: 'Resource Allocation Conflict',
    description: 'Address a situation where your manager consistently allocates the best projects and resources to other team members.',
    situation: 'You\'re a UX Designer on a 6-person design team. Over the past six months, you\'ve noticed that your manager consistently assigns the most visible, high-impact projects to the same 2-3 team members, while you and others receive routine maintenance work or less strategic projects. When you\'ve expressed interest in more challenging work, your manager says you\'re "not quite ready" but doesn\'t provide specific criteria for readiness. Meanwhile, you see peers with similar experience levels getting opportunities to work on product launches, executive presentations, and cross-functional initiatives. You\'re concerned this pattern is limiting your growth, visibility, and career advancement within the company.',
    roleContext: {
      yourRole: 'UX Designer',
      teamSize: '6-person design team',
      timeline: 'This pattern has been ongoing for 6 months',
      stakes: 'Career growth, skill development, and internal visibility are at risk',
      pressure: 'You feel your potential is being underutilized while peers advance',
      stakeholders: 'Design Manager, other UX designers, Product Managers who work with the design team',
      history: 'You joined the team 18 months ago with strong portfolio and have received positive feedback on completed work'
    },
    choices: [
      {
        id: 'direct-conversation-about-opportunities',
        text: 'Have a direct conversation with your manager about wanting more challenging projects and ask for specific criteria.',
        feedback: 'This straightforward approach addresses the issue head-on and seeks clarity on advancement criteria. It demonstrates initiative while giving your manager opportunity to explain their decisions.',
        consequences: {
          immediate: 'Your manager may provide clarity on their reasoning or become defensive about their allocation decisions.',
          shortTerm: 'You either get clearer path to better projects or confirmation that advancement criteria are unclear.',
          longTerm: 'Establishes you as someone who advocates for growth opportunities, though manager relationship may become more formal.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'self-awareness', impact: 6 },
          { area: 'communication', impact: 7 }
        ]
      },
      {
        id: 'propose-skill-development-plan',
        text: 'Create a detailed skill development plan and propose specific projects that would help you grow.',
        feedback: 'This proactive approach shows initiative and strategic thinking about your development. It makes it easier for your manager to say yes by providing a clear framework.',
        consequences: {
          immediate: 'Your manager sees your commitment to growth and has concrete proposals to consider.',
          shortTerm: 'You may get assigned to some of the projects you proposed or similar opportunities.',
          longTerm: 'Reputation as someone who takes ownership of their development and thinks strategically about growth.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'self-awareness', impact: 8 },
          { area: 'communication', impact: 8 }
        ]
      },
      {
        id: 'seek-cross-functional-opportunities',
        text: 'Proactively reach out to Product Managers and other stakeholders to volunteer for projects.',
        feedback: 'This approach bypasses the immediate bottleneck while building broader relationships. However, it may create tension if your manager feels circumvented.',
        consequences: {
          immediate: 'You start building relationships outside your immediate team and may find new opportunities.',
          shortTerm: 'Cross-functional partners may request you for projects, giving you more visibility.',
          longTerm: 'Broader network and reputation, but potential tension with manager who may feel their authority undermined.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'self-awareness', impact: 7 },
          { area: 'communication', impact: 8 }
        ]
      },
      {
        id: 'document-and-escalate',
        text: 'Document the pattern of project allocation and discuss with HR or your manager\'s manager.',
        feedback: 'This formal approach addresses potential bias or unfairness in resource allocation. However, it may significantly damage your relationship with your direct manager.',
        consequences: {
          immediate: 'HR or senior leadership becomes aware of the allocation pattern and may investigate.',
          shortTerm: 'Formal review of project allocation may lead to more equitable distribution.',
          longTerm: 'Potential resolution of systemic issue, but likely permanent damage to relationship with current manager.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 9 },
          { area: 'self-awareness', impact: 5 },
          { area: 'communication', impact: 4 }
        ]
      },
      {
        id: 'peer-collaboration-approach',
        text: 'Collaborate with peers who get better projects to understand what they\'re doing differently.',
        feedback: 'This approach focuses on learning and relationship building while gathering intelligence about success factors. It\'s less confrontational but may not address systemic issues.',
        consequences: {
          immediate: 'You build stronger relationships with successful peers and gain insights into their approach.',
          shortTerm: 'You may learn strategies that help you get better project assignments.',
          longTerm: 'Stronger peer relationships and better understanding of success factors, though underlying allocation issues may persist.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
          { area: 'self-awareness', impact: 8 },
          { area: 'communication', impact: 7 }
        ]
      },
      {
        id: 'excellence-in-current-work',
        text: 'Focus on delivering exceptional work in your current projects to demonstrate readiness for bigger opportunities.',
        feedback: 'This approach focuses on proving yourself through performance, which is often effective but may be slow and doesn\'t address potential bias in allocation.',
        consequences: {
          immediate: 'You channel frustration into exceptional work quality, which gets noticed.',
          shortTerm: 'Strong performance may lead to gradually better project assignments.',
          longTerm: 'Reputation for excellence, though advancement may be slower than peers and allocation bias may persist.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'self-awareness', impact: 6 },
          { area: 'communication', impact: 5 }
        ]
      }
    ],
    growthAreas: ['assertiveness', 'self-awareness', 'communication'],
    difficulty: 'applied',
    xpReward: 75
  },
  {
    id: 'career-guidance-1on1s',
    title: 'Seeking Career Growth in Project-Focused 1:1s',
    description: 'Redirect 1:1 meetings toward career development when your manager focuses exclusively on project updates.',
    situation: 'You\'re a Financial Analyst who has been in your role for 18 months. Your monthly 1:1 meetings with your manager, the Finance Director, consistently follow the same pattern: reviewing current project status, discussing upcoming deadlines, and addressing immediate operational issues. While these conversations are productive for day-to-day work, you\'re feeling stuck in your career development. You want to discuss your long-term goals, potential promotion paths, skill development opportunities, and feedback on your professional growth. However, every time you try to bring up these topics, your manager redirects the conversation back to project deliverables, saying things like "Let\'s focus on getting this quarter\'s analysis completed first" or "We can talk about development once we\'re through this busy period." You\'re starting to feel like your career is stagnating, and you\'ve noticed peers in other departments having more strategic career conversations with their managers.',
    roleContext: {
      yourRole: 'Financial Analyst',
      teamSize: '12-person finance team',
      timeline: 'This pattern has been consistent for the past 8 months',
      stakes: 'Career progression and skill development opportunities',
      pressure: 'Feeling behind peers in career development and unclear about advancement path',
      stakeholders: 'Finance Director (your manager), other Financial Analysts, Finance VP',
      history: 'Strong performer with positive feedback on technical work, but limited career guidance'
    },
    choices: [
      {
        id: 'send-agenda-with-career-focus',
        text: 'Send an agenda ahead of time specifically requesting career development discussion.',
        feedback: 'This proactive approach sets clear expectations and makes it harder for your manager to avoid the topic. It shows professionalism and planning while addressing the issue systematically.',
        consequences: {
          immediate: 'Your manager sees your career focus and may prepare for the conversation or feel pressured.',
          shortTerm: 'You\'re more likely to have the career conversation, though your manager may still try to balance it with project updates.',
          longTerm: 'Establishes a pattern of career-focused 1:1s and positions you as someone serious about professional growth.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'self-awareness', impact: 8 },
          { area: 'communication', impact: 8 }
        ]
      },
      {
        id: 'address-pattern-directly',
        text: 'Directly address the pattern and ask for dedicated time to discuss your growth.',
        feedback: 'This honest approach tackles the issue head-on and clearly communicates your needs. It requires courage but can lead to immediate change in meeting dynamics.',
        consequences: {
          immediate: 'Your manager may be surprised by your directness but understands your career development needs.',
          shortTerm: 'Meeting structure likely changes to include career discussions, though manager may need time to adjust.',
          longTerm: 'Stronger advocate relationship with your manager and clearer communication about your professional needs.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 9 },
          { area: 'self-awareness', impact: 7 },
          { area: 'communication', impact: 8 }
        ]
      },
      {
        id: 'schedule-separate-career-meeting',
        text: 'Schedule a separate meeting specifically for career development conversations.',
        feedback: 'This approach respects your manager\'s project focus while ensuring your career needs are addressed. It creates dedicated space for development discussions.',
        consequences: {
          immediate: 'Your manager may appreciate the separation of concerns and be more receptive to career discussions.',
          shortTerm: 'You get focused career development time, though it requires managing two different meeting types.',
          longTerm: 'Clear structure for both operational and developmental conversations, with stronger focus on your growth.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'self-awareness', impact: 8 },
          { area: 'communication', impact: 7 }
        ]
      },
      {
        id: 'email-updates-use-time-for-development',
        text: 'Complete all project updates via email and use 1:1 time for development topics.',
        feedback: 'This efficient approach maximizes the value of face-to-face time while still providing necessary project updates. However, it requires your manager to adapt to a new communication style.',
        consequences: {
          immediate: 'Your manager may resist the change or appreciate the efficiency, depending on their communication preferences.',
          shortTerm: 'More time available for career discussions, though manager may feel less connected to project details.',
          longTerm: 'More strategic use of 1:1 time, but success depends on manager\'s comfort with email-based project updates.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'self-awareness', impact: 6 },
          { area: 'communication', impact: 6 }
        ]
      },
      {
        id: 'seek-hr-guidance',
        text: 'Ask HR for guidance on how to have career development conversations with your manager.',
        feedback: 'This approach provides professional guidance and may offer strategies you haven\'t considered. However, it involves a third party and may signal to HR that your manager isn\'t providing adequate development support.',
        consequences: {
          immediate: 'HR provides strategies and may offer to facilitate or provide additional development resources.',
          shortTerm: 'You feel more prepared for career conversations and may have additional support options.',
          longTerm: 'Access to broader development resources, though manager may eventually learn of HR involvement.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
          { area: 'self-awareness', impact: 7 },
          { area: 'communication', impact: 6 }
        ]
      },
      {
        id: 'propose-specific-opportunities',
        text: 'Bring up specific development opportunities you\'ve researched and ask for support.',
        feedback: 'This concrete approach makes it easy for your manager to provide support by presenting specific, actionable requests. It demonstrates initiative and strategic thinking about your development.',
        consequences: {
          immediate: 'Your manager has concrete opportunities to consider and can provide specific feedback or support.',
          shortTerm: 'You\'re likely to get support for at least some of the opportunities you\'ve identified.',
          longTerm: 'Reputation as someone who takes ownership of their development and makes it easy for managers to help.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'self-awareness', impact: 9 },
          { area: 'communication', impact: 8 }
        ]
      }
    ],
    growthAreas: ['assertiveness', 'self-awareness', 'communication'],
    difficulty: 'applied',
    xpReward: 75
  }
];

export const getScenarioById = (id: string): Scenario | undefined => {
  return scenarios.find(scenario => scenario.id === id);
};