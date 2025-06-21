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
    description: 'Navigate a situation where you strongly disagree with your manager\'s assessment of your performance.',
    situation: 'Your annual performance review rated you as "meets expectations" despite what you believe was an exceptional year. You led a successful product launch, mentored two junior colleagues, and exceeded your sales targets by 15%. Your manager cited "communication issues" and "need for more strategic thinking" as areas holding you back from a higher rating. You feel this assessment is unfair and doesn\'t reflect your actual contributions.',
    roleContext: {
      yourRole: 'Senior Marketing Specialist',
      teamSize: '8-person marketing team',
      timeline: 'Performance review cycle just completed, promotion decisions happening in 2 weeks',
      stakes: 'Promotion to Marketing Manager role and 20% salary increase at stake',
      pressure: 'You know two peers received "exceeds expectations" ratings for what you consider lesser contributions',
      stakeholders: 'Direct manager, HR Business Partner, Marketing Director, junior team members you mentored',
      history: 'This is your third year in the role, previous reviews were "exceeds expectations"'
    },
    choices: [
      {
        id: 'formal-review-request',
        text: 'Request a formal review of your performance assessment through HR processes.',
        feedback: 'This approach ensures proper documentation and process, but may strain your relationship with your manager and could be seen as confrontational.',
        consequences: {
          immediate: 'Your manager feels challenged and the relationship becomes more formal and distant.',
          shortTerm: 'HR review may or may not change the rating, but the process creates tension in daily interactions.',
          longTerm: 'You may get a fair assessment, but your manager might be less likely to advocate for you in future opportunities.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 3 },
          { area: 'decision-making', impact: 6 }
        ]
      },
      {
        id: 'direct-conversation',
        text: 'Schedule a private meeting with your manager to discuss the assessment and seek specific feedback.',
        feedback: 'This direct approach shows maturity and openness to feedback while advocating for yourself. It maintains the relationship while addressing your concerns.',
        consequences: {
          immediate: 'Your manager appreciates the professional approach and is willing to have an open dialogue.',
          shortTerm: 'You gain clarity on expectations and may be able to address the specific concerns raised.',
          longTerm: 'Stronger working relationship and clearer path to improvement, though the current rating may not change.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'decision-making', impact: 7 }
        ]
      },
      {
        id: 'gather-evidence',
        text: 'Compile detailed documentation of your achievements and request a follow-up discussion.',
        feedback: 'This methodical approach provides concrete evidence for your case and shows professionalism, though it may come across as defensive.',
        consequences: {
          immediate: 'Your manager sees your preparation and takes your concerns more seriously.',
          shortTerm: 'The documentation helps clarify your contributions, potentially leading to a revised assessment.',
          longTerm: 'You establish a pattern of documenting achievements, which helps in future reviews.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 5 },
          { area: 'decision-making', impact: 8 }
        ]
      },
      {
        id: 'seek-peer-feedback',
        text: 'Ask colleagues and mentees for feedback to better understand the "communication issues" mentioned.',
        feedback: 'This shows self-awareness and genuine interest in improvement, though it may not directly address the rating dispute.',
        consequences: {
          immediate: 'Colleagues appreciate being asked and provide valuable insights into your working style.',
          shortTerm: 'You gain a better understanding of how others perceive you and can address any real issues.',
          longTerm: 'Improved self-awareness and stronger relationships, positioning you better for future reviews.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 9 },
          { area: 'decision-making', impact: 5 }
        ]
      },
      {
        id: 'accept-and-improve',
        text: 'Accept the rating gracefully and ask for a specific development plan to address the concerns.',
        feedback: 'This mature response focuses on growth rather than dispute, though it may not address potential unfairness in the current assessment.',
        consequences: {
          immediate: 'Your manager is impressed by your professionalism and willingness to grow.',
          shortTerm: 'You get clear guidance on improvement areas and strong manager support for development.',
          longTerm: 'Strong relationship with your manager and clear path to promotion, though you may miss this cycle.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 3 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'decision-making', impact: 6 }
        ]
      },
      {
        id: 'propose-360-feedback',
        text: 'Suggest implementing a 360-degree feedback process to get a more comprehensive view of your performance.',
        feedback: 'This innovative approach shows leadership thinking and could benefit the entire team, while addressing your specific situation.',
        consequences: {
          immediate: 'Your manager is intrigued by the suggestion and sees your strategic thinking.',
          shortTerm: 'Implementation takes time, but you demonstrate leadership in improving team processes.',
          longTerm: 'You become known as someone who drives positive change, though immediate rating concerns remain unresolved.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 9 }
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
    description: 'Address a situation where your manager consistently assigns the most interesting projects to other team members.',
    situation: 'Over the past six months, you\'ve noticed that your manager consistently assigns high-visibility, strategic projects to two specific team members while giving you routine maintenance work and smaller initiatives. When the latest exciting project—redesigning the company\'s flagship product—was announced, it was again assigned to your colleague who joined the team after you. You feel your skills and experience are being underutilized, and you\'re concerned this pattern is limiting your career growth and learning opportunities.',
    roleContext: {
      yourRole: 'Senior UX Designer',
      teamSize: '6-person design team',
      timeline: 'This pattern has been ongoing for 6 months',
      stakes: 'Career advancement and skill development opportunities',
      pressure: 'You\'re considering looking for opportunities elsewhere if this continues',
      stakeholders: 'Design Manager, fellow designers, Product team, your career development',
      history: 'You\'ve been with the company for 2 years, have strong performance reviews, but haven\'t worked on a major project in 8 months'
    },
    choices: [
      {
        id: 'direct-manager-conversation',
        text: 'Schedule a one-on-one with your manager to directly discuss project assignments and your career goals.',
        feedback: 'This direct approach shows professionalism and advocacy for your career while maintaining the relationship. It gives your manager a chance to explain and adjust.',
        consequences: {
          immediate: 'Your manager becomes aware of your concerns and may not have realized the pattern.',
          shortTerm: 'You get clarity on assignment criteria and may see more balanced project distribution.',
          longTerm: 'Stronger communication with your manager and more intentional career development conversations.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'decision-making', impact: 6 }
        ]
      },
      {
        id: 'propose-project-rotation',
        text: 'Suggest implementing a project rotation system to ensure all team members get diverse experiences.',
        feedback: 'This systemic approach benefits the entire team while addressing your specific concern. It shows leadership thinking and collaborative problem-solving.',
        consequences: {
          immediate: 'Your manager appreciates the team-focused suggestion and sees your strategic thinking.',
          shortTerm: 'Implementation creates more equitable project distribution across the team.',
          longTerm: 'You become known as someone who improves team processes and advocates for fairness.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'decision-making', impact: 9 }
        ]
      },
      {
        id: 'volunteer-for-projects',
        text: 'Proactively volunteer for upcoming projects and clearly express your interest in challenging work.',
        feedback: 'This proactive approach shows initiative and enthusiasm, though it may not address the underlying assignment patterns.',
        consequences: {
          immediate: 'Your manager sees your enthusiasm and may consider you for future projects.',
          shortTerm: 'You get more visibility for your interests, but may still face the same assignment patterns.',
          longTerm: 'Reputation as someone eager to take on challenges, though systemic issues may persist.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
          { area: 'emotional-intelligence', impact: 4 },
          { area: 'decision-making', impact: 5 }
        ]
      },
      {
        id: 'seek-cross-functional-opportunities',
        text: 'Build relationships with other teams to find project opportunities outside your direct manager\'s assignments.',
        feedback: 'This creative approach expands your network and opportunities while working around the current limitation.',
        consequences: {
          immediate: 'Other teams appreciate your initiative and may include you in their projects.',
          shortTerm: 'You gain diverse experience and visibility across the organization.',
          longTerm: 'Broader network and reputation, though it may not solve the core team dynamic issue.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 8 }
        ]
      },
      {
        id: 'document-and-escalate',
        text: 'Document the pattern of assignments and discuss with HR or your manager\'s supervisor.',
        feedback: 'This formal approach ensures the issue is addressed at a higher level, but may damage your relationship with your direct manager.',
        consequences: {
          immediate: 'Your manager feels blindsided and the relationship becomes strained.',
          shortTerm: 'Higher-level attention may lead to changes, but daily working relationship suffers.',
          longTerm: 'Potential resolution of the issue, but possible long-term tension with your manager.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 9 },
          { area: 'emotional-intelligence', impact: 3 },
          { area: 'decision-making', impact: 7 }
        ]
      },
      {
        id: 'peer-collaboration',
        text: 'Collaborate with colleagues who get interesting projects to gain exposure and learning opportunities.',
        feedback: 'This collaborative approach builds relationships and creates learning opportunities, though it may not address the root assignment issue.',
        consequences: {
          immediate: 'Colleagues are willing to share knowledge and include you in their work.',
          shortTerm: 'You gain skills and visibility through collaboration and knowledge sharing.',
          longTerm: 'Strong peer relationships and expanded skills, but assignment patterns may continue.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'decision-making', impact: 5 }
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
    description: 'Redirect your one-on-one meetings from project updates to meaningful career development discussions.',
    situation: 'Your weekly one-on-one meetings with your manager have become routine project status updates. Every week, the conversation focuses on deliverables, deadlines, and operational issues. When you try to bring up career development, training opportunities, or your long-term goals, your manager quickly redirects back to immediate work priorities. You\'re feeling stuck in your current role and frustrated that you\'re not getting the mentorship and growth guidance you need to advance your career.',
    roleContext: {
      yourRole: 'Financial Analyst',
      teamSize: '12-person finance team',
      timeline: 'This pattern has been consistent for the past 8 months',
      stakes: 'Career advancement and professional development',
      pressure: 'You see peers in other departments getting promoted while you feel stagnant',
      stakeholders: 'Direct manager, Finance Director, your professional development',
      history: 'You\'ve been in the role for 18 months, consistently meet targets, but haven\'t had substantive career conversations'
    },
    choices: [
      {
        id: 'send-agenda-beforehand',
        text: 'Send a structured agenda before each 1:1 that includes both project updates and career development topics.',
        feedback: 'This proactive approach sets clear expectations and ensures career topics get dedicated time. It shows professionalism and planning.',
        consequences: {
          immediate: 'Your manager appreciates the structure and comes prepared for both types of discussions.',
          shortTerm: 'More balanced conversations that address both immediate work and long-term growth.',
          longTerm: 'Consistent career development discussions lead to clearer growth path and opportunities.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 8 }
        ]
      },
      {
        id: 'request-separate-meetings',
        text: 'Ask for separate monthly career development meetings in addition to weekly operational 1:1s.',
        feedback: 'This approach acknowledges both needs while creating dedicated space for growth conversations. It shows respect for operational needs while advocating for development.',
        consequences: {
          immediate: 'Your manager understands the importance of career development and agrees to the additional time.',
          shortTerm: 'Clear separation allows for focused discussions on both operational and developmental topics.',
          longTerm: 'Structured approach to career development with regular progress check-ins and goal setting.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'decision-making', impact: 7 }
        ]
      },
      {
        id: 'direct-conversation-about-pattern',
        text: 'Have a direct conversation about the meeting pattern and express your need for career guidance.',
        feedback: 'This honest approach addresses the issue directly while maintaining professionalism. It gives your manager insight into your career aspirations.',
        consequences: {
          immediate: 'Your manager realizes they\'ve been too focused on operations and commits to better balance.',
          shortTerm: 'Immediate improvement in meeting quality with more attention to your development needs.',
          longTerm: 'Stronger manager relationship and more intentional career development support.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'decision-making', impact: 6 }
        ]
      },
      {
        id: 'propose-development-plan',
        text: 'Create a personal development plan and ask your manager to help you execute it.',
        feedback: 'This initiative shows ownership of your career while engaging your manager as a partner in your growth.',
        consequences: {
          immediate: 'Your manager is impressed by your initiative and becomes more invested in your development.',
          shortTerm: 'Clear development goals provide structure for career-focused conversations.',
          longTerm: 'Accelerated career growth with manager support and clear milestones.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 9 }
        ]
      },
      {
        id: 'seek-mentorship-elsewhere',
        text: 'Find mentorship and career guidance from other senior leaders while maintaining operational 1:1s.',
        feedback: 'This approach gets your needs met while working around your manager\'s limitations, though it may not address the core relationship issue.',
        consequences: {
          immediate: 'You find valuable mentorship from other leaders who are willing to invest in your growth.',
          shortTerm: 'Expanded network and diverse perspectives on career development.',
          longTerm: 'Strong professional relationships across the organization, though manager relationship remains limited.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'decision-making', impact: 8 }
        ]
      },
      {
        id: 'escalate-to-hr',
        text: 'Discuss the lack of career development support with HR or your manager\'s supervisor.',
        feedback: 'This formal approach ensures your development needs are addressed at a higher level, but may strain your direct manager relationship.',
        consequences: {
          immediate: 'Your manager feels criticized and the relationship becomes more formal.',
          shortTerm: 'Higher-level intervention may improve development support but creates tension.',
          longTerm: 'Potential career advancement through organizational support, but possible long-term manager relationship issues.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 9 },
          { area: 'emotional-intelligence', impact: 3 },
          { area: 'decision-making', impact: 5 }
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