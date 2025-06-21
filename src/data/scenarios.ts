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
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'neutral' as const,
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
              stakeholder: 'Sarah (Colleague)',
              impact: 'May feel betrayed if she learns about the escalation without direct conversation first',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Your Manager',
              impact: 'Appreciates being informed but may question why you didn\'t try direct resolution first',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Strategy Team',
              impact: 'May view you as someone who escalates conflicts rather than resolving them collaboratively',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Try a direct conversation with Sarah first, then escalate if needed',
            shortTerm: 'Use your manager as a coach for how to handle the situation rather than asking them to intervene',
            longTerm: 'Develop skills in direct conflict resolution to handle similar situations independently'
          },
          mitigation: {
            immediate: 'Frame the discussion with your manager as seeking advice rather than asking for intervention',
            shortTerm: 'Let Sarah know you\'ve discussed the situation with your manager to maintain transparency',
            longTerm: 'Focus on building direct communication skills for future collaborative challenges'
          },
          reflectionPrompts: [
            'What makes you feel that management involvement is necessary at this stage?',
            'How might escalating first affect your reputation as a collaborative team member?',
            'What skills could you develop to handle this situation more directly?'
          ],
          skillRecommendations: [
            {
              skill: 'Direct Communication',
              reason: 'Learn to address workplace conflicts before they require management intervention',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Peer Relationship Management',
              reason: 'Understand how to navigate professional relationships and conflicts effectively',
              link: '/library/peer-relationships'
            }
          ],
          realWorldExample: {
            title: 'Finance Team Credit Dispute',
            description: 'A financial analyst immediately escalated to their manager when a colleague took credit for their budget analysis without trying direct conversation first.',
            outcome: 'The manager resolved the immediate issue but advised the analyst to try direct communication first in the future. The colleague relationship remained strained for months.'
          }
        }
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
              stakeholder: 'Sarah (Colleague)',
              impact: 'May realize her oversight without direct confrontation, preserving the working relationship',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Senior Leadership',
              impact: 'Gains appreciation for your strategic thinking and collaborative approach to building on ideas',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Strategy Team',
              impact: 'Sees professional way to handle recognition issues and build on collaborative work',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            shortTerm: 'Still have a private conversation with Sarah about collaboration expectations',
            longTerm: 'Establish more formal processes for documenting individual contributions in team projects'
          },
          mitigation: {
            immediate: 'Frame the email as building on the presentation rather than correcting it',
            shortTerm: 'Include Sarah in the follow-up communication to maintain collaborative appearance',
            longTerm: 'Use this as a model for proactive visibility in future strategic projects'
          },
          reflectionPrompts: [
            'How can you build your reputation while maintaining positive team relationships?',
            'What additional value can you provide that showcases your strategic thinking?',
            'How might this approach influence how you handle future collaborative projects?'
          ],
          skillRecommendations: [
            {
              skill: 'Strategic Communication',
              reason: 'Learn to build visibility and influence through thoughtful professional communication',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Executive Presence',
              reason: 'Understand how to build recognition and credibility with senior leadership',
              link: '/library/executive-presence'
            }
          ],
          realWorldExample: {
            title: 'Product Strategy Follow-up Success',
            description: 'A product manager sent thoughtful follow-up insights after a colleague\'s presentation, naturally highlighting their collaborative contributions.',
            outcome: 'Leadership began recognizing both team members as strategic thinkers. The approach actually strengthened the collaborative relationship and led to more joint strategic projects.'
          }
        }
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
            longTerm: 'low' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Sarah (Colleague)',
              impact: 'May not realize the impact of her actions and could repeat this behavior',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Senior Leadership',
              impact: 'Continues to have incomplete understanding of your strategic contributions',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Strategy Team',
              impact: 'May see this as acceptable behavior for taking credit for collaborative work',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'At minimum, document your contributions for future reference',
            shortTerm: 'Find other ways to showcase your strategic thinking to leadership',
            longTerm: 'Develop assertiveness skills to handle similar situations more proactively'
          },
          mitigation: {
            immediate: 'Start building stronger direct relationships with leadership through other strategic initiatives',
            shortTerm: 'Be more proactive about documenting and communicating your contributions in future projects',
            longTerm: 'Seek feedback on how to better position your strategic work for recognition'
          },
          reflectionPrompts: [
            'What are the long-term career implications of not addressing this situation?',
            'How might your silence be interpreted by colleagues and leadership?',
            'What would you advise a friend or mentee in this same situation?'
          ],
          skillRecommendations: [
            {
              skill: 'Professional Assertiveness',
              reason: 'Learn to advocate for your contributions and career interests appropriately',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Career Strategy',
              reason: 'Understand how to build visibility and recognition for your professional contributions',
              link: '/library/career-strategy'
            }
          ],
          realWorldExample: {
            title: 'Research Team Recognition Gap',
            description: 'A research analyst consistently let colleagues take credit for their insights, thinking their work would speak for itself.',
            outcome: 'Over two years, the analyst was passed over for promotions while colleagues who took credit advanced. They eventually had to change teams to get proper recognition for their strategic capabilities.'
          }
        }
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
              stakeholder: 'Sarah (Colleague)',
              impact: 'Appreciates the supportive approach and may recognize the need to be more inclusive in future presentations',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Senior Leadership',
              impact: 'Sees both strategic thinking and collaborative leadership skills',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Strategy Team',
              impact: 'Observes professional way to handle recognition while building on team work',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If you\'re not comfortable speaking up in the moment, use the follow-up email approach instead',
            shortTerm: 'Have a private conversation with Sarah about collaboration expectations going forward',
            longTerm: 'Establish clearer upfront agreements about presentation roles in collaborative projects'
          },
          mitigation: {
            immediate: 'Frame your comments as building on "our analysis" rather than correcting Sarah',
            shortTerm: 'Follow up privately with Sarah to ensure she understood your collaborative intent',
            longTerm: 'Use this as a model for proactive collaboration and visibility in strategic work'
          },
          reflectionPrompts: [
            'How can you assert your contributions while appearing collaborative and supportive?',
            'What additional insights can you provide that showcase your strategic thinking?',
            'How might this approach influence future collaborative dynamics with Sarah?'
          ],
          skillRecommendations: [
            {
              skill: 'Collaborative Leadership',
              reason: 'Learn to build your reputation while strengthening team relationships',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Strategic Presence',
              reason: 'Understand how to demonstrate value and expertise in high-stakes meetings',
              link: '/library/strategic-presence'
            }
          ],
          realWorldExample: {
            title: 'Business Development Team Success',
            description: 'A business analyst built on a colleague\'s client presentation by adding strategic context, naturally highlighting their collaborative contributions.',
            outcome: 'The client was impressed with the team\'s depth of thinking. Both team members gained recognition, and their collaborative approach became a model for future client presentations.'
          }
        }
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
    difficulty: 'foundational',
    xpReward: 50
  },
  {
    id: 'cross-functional-disagreement',
    title: 'Cross-Functional Feature Disagreement',
    description: 'Navigate a technical disagreement with a UX designer about feature implementation that\'s blocking development progress.',
    situation: 'You\'re a frontend developer working on a new user dashboard feature. The UX designer, Maya, has created a design that requires complex animations and micro-interactions that you believe will significantly impact page performance and loading times. When you raised these concerns, Maya insisted that the user experience is paramount and that "technical limitations shouldn\'t compromise good design." The feature is due for review with the product manager in two days, and you need to find a path forward that works for both the user experience and technical performance.',
    roleContext: {
      yourRole: 'Frontend Developer',
      teamSize: 'Cross-functional product team of 6 people',
      timeline: 'Feature review scheduled in 2 days, sprint ends in 1 week',
      stakes: 'User dashboard is a key feature for Q4 product goals',
      pressure: 'Product manager expects demo-ready feature, performance metrics are being monitored',
      stakeholders: 'UX Designer (Maya), Product Manager, Backend Developer, QA Engineer',
      history: 'You and Maya have worked well together on previous features'
    },
    choices: [
      {
        id: 'implement-as-designed',
        text: 'Implement the design exactly as specified and address performance issues later if they arise.',
        feedback: 'This approach maintains team harmony and respects the design process, but may create technical debt and performance problems that are harder to fix later.',
        consequences: {
          immediate: 'Maya feels supported and the design vision is preserved for the upcoming review.',
          shortTerm: 'Performance issues may emerge during testing, requiring significant rework under time pressure.',
          longTerm: 'Technical debt accumulates, and you may be seen as someone who doesn\'t advocate for technical best practices.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 3 },
          { area: 'emotional-intelligence', impact: 6 },
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
            shortTerm: 'high' as const,
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Maya (UX Designer)',
              impact: 'Feels respected and supported, maintains confidence in the collaborative process',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Gets the expected demo but may face performance issues that delay release',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'May lose confidence in your technical advocacy and decision-making',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Propose a phased implementation where core functionality comes first, animations second',
            shortTerm: 'Set up performance monitoring to catch issues early in the development cycle',
            longTerm: 'Establish technical review processes earlier in the design phase'
          },
          mitigation: {
            immediate: 'Document the performance risks and timeline for addressing them',
            shortTerm: 'Implement performance monitoring and set clear metrics for acceptable performance',
            longTerm: 'Work with Maya to establish design-development collaboration guidelines'
          },
          reflectionPrompts: [
            'How might avoiding technical advocacy affect your professional reputation?',
            'What are the long-term implications of accumulating technical debt?',
            'How can you better communicate technical constraints during the design phase?'
          ],
          skillRecommendations: [
            {
              skill: 'Technical Communication',
              reason: 'Learn to articulate technical concerns in terms of user and business impact',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Cross-functional Collaboration',
              reason: 'Understand how to balance technical and design considerations effectively',
              link: '/library/cross-functional-collaboration'
            }
          ],
          realWorldExample: {
            title: 'E-commerce Platform Performance Issues',
            description: 'A developer implemented complex animations as designed without addressing performance concerns, thinking they could optimize later.',
            outcome: 'The feature caused significant page load delays, leading to user complaints and a rushed redesign that took three weeks to fix during a critical sales period.'
          }
        }
      },
      {
        id: 'refuse-implementation',
        text: 'Firmly decline to implement the design as specified, insisting on a simpler version for performance reasons.',
        feedback: 'While this protects technical quality, it may damage your relationship with Maya and could be seen as inflexible or not collaborative.',
        consequences: {
          immediate: 'Maya feels frustrated and may view you as difficult to work with or not understanding user needs.',
          shortTerm: 'The design-development relationship becomes strained, affecting future collaboration.',
          longTerm: 'You may be seen as someone who blocks creative solutions, potentially limiting your involvement in design decisions.'
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
              stakeholder: 'Maya (UX Designer)',
              impact: 'Feels dismissed and may lose trust in the collaborative design-development process',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'May see you as inflexible and not focused on user experience goals',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'May appreciate technical advocacy but could see approach as too confrontational',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Propose specific alternative solutions that balance performance and user experience',
            shortTerm: 'Collaborate with Maya to find creative solutions that meet both technical and design goals',
            longTerm: 'Establish better upfront communication about technical constraints in the design process'
          },
          mitigation: {
            immediate: 'Explain the user impact of performance issues, not just technical concerns',
            shortTerm: 'Work with Maya to prototype alternative approaches that preserve the design intent',
            longTerm: 'Build stronger relationships by showing flexibility and creative problem-solving'
          },
          reflectionPrompts: [
            'How can you advocate for technical quality while maintaining collaborative relationships?',
            'What alternative solutions might achieve both performance and user experience goals?',
            'How might your approach affect future design-development collaboration?'
          ],
          skillRecommendations: [
            {
              skill: 'Collaborative Problem Solving',
              reason: 'Learn to find solutions that address multiple stakeholder concerns',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Influence Without Authority',
              reason: 'Understand how to advocate for technical concerns while building relationships',
              link: '/library/influence-without-authority'
            }
          ],
          realWorldExample: {
            title: 'Mobile App Design Conflict',
            description: 'A mobile developer refused to implement a designer\'s complex navigation system, insisting on a simpler approach without proposing alternatives.',
            outcome: 'The designer felt dismissed and complained to the product manager. The developer was seen as difficult to work with, and future design decisions were made without their input.'
          }
        }
      },
      {
        id: 'collaborative-solution',
        text: 'Propose working together to find alternative approaches that achieve the design goals while maintaining performance.',
        feedback: 'This collaborative approach respects both design and technical concerns while building stronger cross-functional relationships and often leads to innovative solutions.',
        consequences: {
          immediate: 'Maya feels heard and you both engage in creative problem-solving for the feature.',
          shortTerm: 'You develop a solution that balances user experience and performance, strengthening your working relationship.',
          longTerm: 'You build a reputation as a collaborative problem-solver who can bridge technical and design concerns effectively.'
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
              stakeholder: 'Maya (UX Designer)',
              impact: 'Feels respected and engaged in finding solutions, learns about technical considerations',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Sees effective cross-functional collaboration and gets a solution that balances multiple concerns',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'Observes good technical advocacy combined with collaborative problem-solving',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            shortTerm: 'If collaboration doesn\'t yield solutions quickly, escalate to the product manager for guidance',
            longTerm: 'Establish regular design-development collaboration sessions for future projects'
          },
          mitigation: {
            immediate: 'Set clear timeline for finding solutions given the upcoming review deadline',
            shortTerm: 'Document the agreed-upon approach and performance expectations',
            longTerm: 'Use this collaboration as a model for future design-development partnerships'
          },
          reflectionPrompts: [
            'How can you frame technical constraints as opportunities for creative solutions?',
            'What can you learn from Maya\'s design perspective that might inform your technical approach?',
            'How might this collaborative approach influence future cross-functional projects?'
          ],
          skillRecommendations: [
            {
              skill: 'Design-Development Collaboration',
              reason: 'Learn to bridge technical and design perspectives effectively',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Creative Problem Solving',
              reason: 'Understand how to find innovative solutions that satisfy multiple constraints',
              link: '/library/creative-problem-solving'
            }
          ],
          realWorldExample: {
            title: 'SaaS Dashboard Optimization Success',
            description: 'A frontend developer and UX designer collaborated to create a progressive loading approach that preserved complex interactions while maintaining performance.',
            outcome: 'Their solution became a design pattern used across the product. Both gained recognition for innovative cross-functional collaboration, and their partnership became highly sought after for complex features.'
          }
        }
      },
      {
        id: 'escalate-to-pm',
        text: 'Bring the disagreement to the product manager to make the final decision on priorities.',
        feedback: 'While this ensures a decision gets made, it may signal inability to resolve cross-functional conflicts independently and could damage your relationship with Maya.',
        consequences: {
          immediate: 'The product manager makes a decision, but both you and Maya may feel like the collaboration failed.',
          shortTerm: 'Future design-development discussions may be more formal and less collaborative.',
          longTerm: 'You may be seen as someone who escalates rather than solves cross-functional challenges independently.'
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
              stakeholder: 'Maya (UX Designer)',
              impact: 'May feel that the collaborative process was abandoned and direct communication failed',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Has to resolve conflicts that could be handled at the team level, may question team collaboration',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'May see this as avoiding direct problem-solving and cross-functional collaboration',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Try collaborative problem-solving first, then escalate if needed',
            shortTerm: 'Use the product manager as a facilitator rather than decision-maker',
            longTerm: 'Develop skills in cross-functional conflict resolution'
          },
          mitigation: {
            immediate: 'Frame the escalation as seeking guidance rather than asking for a decision',
            shortTerm: 'Work with Maya to present a unified set of options to the product manager',
            longTerm: 'Focus on building direct collaboration skills for future cross-functional challenges'
          },
          reflectionPrompts: [
            'What makes you feel that escalation is necessary at this stage?',
            'How might this approach affect your future working relationship with Maya?',
            'What collaboration skills could you develop to handle this situation more directly?'
          ],
          skillRecommendations: [
            {
              skill: 'Cross-functional Conflict Resolution',
              reason: 'Learn to resolve design-development disagreements before they require management intervention',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Peer Collaboration',
              reason: 'Understand how to work effectively with colleagues from different disciplines',
              link: '/library/peer-collaboration'
            }
          ],
          realWorldExample: {
            title: 'Product Team Escalation Backfire',
            description: 'A developer immediately escalated a design disagreement to the product manager without attempting collaborative resolution.',
            outcome: 'The product manager resolved the immediate issue but asked both team members to work on their collaboration skills. Future projects were more closely supervised, reducing their autonomy.'
          }
        }
      },
      {
        id: 'prototype-alternatives',
        text: 'Suggest creating quick prototypes of different approaches to test performance and user experience trade-offs.',
        feedback: 'This data-driven approach provides objective evidence for decision-making while demonstrating technical initiative and respect for user experience research.',
        consequences: {
          immediate: 'Maya appreciates the user-centered approach, and you both engage in evidence-based problem-solving.',
          shortTerm: 'You develop solutions based on actual data rather than assumptions, leading to better outcomes.',
          longTerm: 'You build a reputation as someone who uses data and prototyping to solve complex cross-functional challenges.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 7 },
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
              stakeholder: 'Maya (UX Designer)',
              impact: 'Appreciates the user-centered, evidence-based approach to resolving the disagreement',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Values the data-driven approach and gets objective evidence for decision-making',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'Sees good technical leadership and innovative problem-solving approach',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If time is too limited for prototyping, focus on the most critical performance concerns',
            shortTerm: 'Use prototyping results to establish design-development guidelines for future projects',
            longTerm: 'Advocate for regular prototyping phases in the product development process'
          },
          mitigation: {
            immediate: 'Set clear timeline and success criteria for the prototyping exercise',
            shortTerm: 'Document findings to inform future design-development decisions',
            longTerm: 'Build prototyping into the regular design-development workflow'
          },
          reflectionPrompts: [
            'How can prototyping help bridge the gap between design vision and technical constraints?',
            'What can you learn from this data-driven approach to apply to future cross-functional challenges?',
            'How might this collaborative problem-solving approach influence team dynamics?'
          ],
          skillRecommendations: [
            {
              skill: 'Rapid Prototyping',
              reason: 'Learn to quickly test and validate design-development solutions',
              link: '/library/rapid-prototyping'
            },
            {
              skill: 'Data-Driven Decision Making',
              reason: 'Understand how to use evidence to resolve cross-functional disagreements',
              link: '/topics/foundational-mindsets/decision-making'
            }
          ],
          realWorldExample: {
            title: 'Fintech App Performance Optimization',
            description: 'A developer and designer created multiple prototypes to test different interaction approaches, measuring both user engagement and performance metrics.',
            outcome: 'They discovered a hybrid approach that achieved 95% of the design vision with minimal performance impact. Their methodology was adopted as standard practice for complex features across the company.'
          }
        }
      },
      {
        id: 'compromise-solution',
        text: 'Propose implementing the core interactions now and adding the complex animations in a future iteration.',
        feedback: 'This phased approach allows for immediate progress while preserving the design vision for future enhancement, though it requires careful planning to ensure follow-through.',
        consequences: {
          immediate: 'Both you and Maya feel heard, and the feature can move forward for the upcoming review.',
          shortTerm: 'The core functionality is delivered on time, with a clear plan for design enhancements.',
          longTerm: 'You build a reputation for finding practical solutions that balance multiple concerns and timelines.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 7 },
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
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Maya (UX Designer)',
              impact: 'Feels that her design vision is respected and will be implemented, just in phases',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Gets a deliverable feature for the review with a clear roadmap for enhancements',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'Appreciates the practical approach that balances technical and design concerns',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'Ensure the phased approach is formally documented and prioritized in the product roadmap',
            shortTerm: 'Set specific success metrics for when to implement the enhanced interactions',
            longTerm: 'Use this as a model for managing complex feature development in future projects'
          },
          mitigation: {
            immediate: 'Get explicit commitment from the product manager for the future iteration',
            shortTerm: 'Track user feedback on the core functionality to inform the enhancement phase',
            longTerm: 'Establish clear processes for phased feature development across the team'
          },
          reflectionPrompts: [
            'How can you ensure that phased approaches actually get completed rather than abandoned?',
            'What can you learn from this compromise that applies to future cross-functional challenges?',
            'How might this approach influence how the team handles complex features going forward?'
          ],
          skillRecommendations: [
            {
              skill: 'Agile Development Practices',
              reason: 'Learn to break complex features into deliverable phases effectively',
              link: '/library/agile-practices'
            },
            {
              skill: 'Stakeholder Management',
              reason: 'Understand how to manage expectations and commitments across multiple stakeholders',
              link: '/library/stakeholder-management'
            }
          ],
          realWorldExample: {
            title: 'Social Media Platform Feature Rollout',
            description: 'A development team implemented a new content creation feature in phases, starting with core functionality and adding advanced interactions based on user feedback.',
            outcome: 'The phased approach allowed for user testing and iteration. The final feature exceeded the original design vision and became one of the platform\'s most popular tools.'
          }
        }
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
    difficulty: 'foundational',
    xpReward: 50
  },
  {
    id: 'research-data-conflict',
    title: 'Research Data Interpretation Conflict',
    description: 'Navigate a disagreement with a product marketing manager about how to present user research findings that could impact product strategy.',
    situation: 'You\'re a UX researcher who just completed a comprehensive user study on a new feature. The data shows that while users can complete tasks successfully, they express frustration with the complexity and would prefer a simpler approach. However, the product marketing manager, James, wants to highlight only the positive completion rates in the upcoming stakeholder presentation, arguing that "we need to show momentum to secure budget for the next quarter." He\'s concerned that presenting the user frustration data will make the feature look like a failure. The presentation to senior leadership is tomorrow, and you need to decide how to handle this conflict between research integrity and business pressure.',
    roleContext: {
      yourRole: 'UX Researcher',
      teamSize: 'Product team of 8 people including PM, designers, developers',
      timeline: 'Stakeholder presentation scheduled for tomorrow morning',
      stakes: 'Q4 budget allocation and feature roadmap decisions',
      pressure: 'Marketing team needs positive metrics to justify continued investment',
      stakeholders: 'Product Marketing Manager (James), Product Manager, Senior Leadership, Design Team',
      history: 'You and James have collaborated well on previous research presentations'
    },
    choices: [
      {
        id: 'present-full-data',
        text: 'Insist on presenting the complete research findings, including both positive metrics and user frustration data.',
        feedback: 'This approach maintains research integrity and provides stakeholders with complete information for decision-making, though it may create tension with marketing goals.',
        consequences: {
          immediate: 'James feels frustrated that you\'re not supporting the business case, creating immediate tension.',
          shortTerm: 'Leadership gets complete information but may question the feature\'s viability, potentially affecting budget.',
          longTerm: 'You build a reputation for research integrity, but may be seen as not understanding business needs.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 4 },
          { area: 'decision-making', impact: 7 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'negative' as const,
            shortTerm: 'neutral' as const,
            longTerm: 'positive' as const
          },
          confidence: {
            immediate: 'high' as const,
            shortTerm: 'medium' as const,
            longTerm: 'high' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'James (Product Marketing Manager)',
              impact: 'Feels unsupported and may view you as not understanding business priorities',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Senior Leadership',
              impact: 'Gets complete information for decision-making but may question feature investment',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Product Team',
              impact: 'Appreciates research integrity and complete user perspective',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'Frame the user frustration as opportunities for improvement rather than failures',
            shortTerm: 'Propose solutions alongside the problems to maintain forward momentum',
            longTerm: 'Work with James to develop better frameworks for presenting complex research findings'
          },
          mitigation: {
            immediate: 'Emphasize how addressing user concerns will lead to better long-term success',
            shortTerm: 'Provide specific recommendations for improving the user experience',
            longTerm: 'Build stronger relationships by showing how research supports business goals'
          },
          reflectionPrompts: [
            'How can you present challenging research findings in a way that supports business goals?',
            'What\'s the long-term impact on user experience if frustration data is ignored?',
            'How might you better collaborate with marketing to frame research insights?'
          ],
          skillRecommendations: [
            {
              skill: 'Business Communication',
              reason: 'Learn to present research findings in business-relevant terms',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Stakeholder Influence',
              reason: 'Understand how to advocate for user needs while supporting business objectives',
              link: '/library/stakeholder-influence'
            }
          ],
          realWorldExample: {
            title: 'E-commerce Checkout Research Conflict',
            description: 'A UX researcher insisted on presenting user frustration data about a new checkout flow despite marketing pressure to focus only on conversion rates.',
            outcome: 'Leadership initially questioned the feature but ultimately invested in improvements. The enhanced checkout flow increased both conversion and satisfaction, validating the complete research approach.'
          }
        }
      },
      {
        id: 'compromise-presentation',
        text: 'Work with James to find a balanced way to present both the positive metrics and improvement opportunities.',
        feedback: 'This collaborative approach respects both research integrity and business needs, potentially leading to better stakeholder understanding and decision-making.',
        consequences: {
          immediate: 'James feels heard and you both work together to craft a compelling narrative that includes all data.',
          shortTerm: 'Leadership gets complete information presented in a business-friendly way, supporting informed decisions.',
          longTerm: 'You build a reputation for being both rigorous and business-savvy, strengthening cross-functional relationships.'
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
              stakeholder: 'James (Product Marketing Manager)',
              impact: 'Feels supported and appreciates the collaborative approach to business communication',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Senior Leadership',
              impact: 'Gets complete, well-framed information that supports strategic decision-making',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Team',
              impact: 'Sees effective cross-functional collaboration and research-informed product strategy',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            shortTerm: 'If collaboration doesn\'t work quickly, escalate to the product manager for guidance',
            longTerm: 'Establish regular research-marketing collaboration sessions for future projects'
          },
          mitigation: {
            immediate: 'Set clear boundaries about what research findings must be included',
            shortTerm: 'Document the agreed-upon presentation approach for future reference',
            longTerm: 'Use this collaboration as a model for future research-marketing partnerships'
          },
          reflectionPrompts: [
            'How can you frame research findings to support both user advocacy and business goals?',
            'What can you learn from James\'s marketing perspective that improves your research communication?',
            'How might this collaborative approach influence future research presentations?'
          ],
          skillRecommendations: [
            {
              skill: 'Cross-functional Collaboration',
              reason: 'Learn to bridge research and marketing perspectives effectively',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Strategic Communication',
              reason: 'Understand how to present research insights in business-strategic terms',
              link: '/library/strategic-communication'
            }
          ],
          realWorldExample: {
            title: 'SaaS Platform User Research Success',
            description: 'A UX researcher and marketing manager collaborated to present user feedback as "optimization opportunities" with clear ROI projections.',
            outcome: 'Leadership approved both the current feature and additional budget for user experience improvements. The collaborative approach became the standard for research presentations across the company.'
          }
        }
      },
      {
        id: 'defer-to-marketing',
        text: 'Agree to present only the positive metrics as James suggests, focusing on business momentum.',
        feedback: 'While this maintains team harmony and supports immediate business goals, it compromises research integrity and may lead to poor long-term product decisions.',
        consequences: {
          immediate: 'James feels supported and the presentation aligns with marketing objectives.',
          shortTerm: 'Leadership may approve continued investment based on incomplete information.',
          longTerm: 'User frustration issues remain unaddressed, potentially leading to bigger problems and loss of research credibility.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 3 },
          { area: 'emotional-intelligence', impact: 5 },
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
              stakeholder: 'James (Product Marketing Manager)',
              impact: 'Feels supported and gets the business-focused presentation he wanted',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Senior Leadership',
              impact: 'Makes decisions based on incomplete information, potentially leading to poor outcomes',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Team',
              impact: 'May lose trust in research integrity and user advocacy',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'At minimum, document the complete findings for future reference',
            shortTerm: 'Find other ways to communicate user concerns to the product team',
            longTerm: 'Develop better frameworks for balancing research integrity with business needs'
          },
          mitigation: {
            immediate: 'Ensure the complete research findings are documented and accessible',
            shortTerm: 'Schedule follow-up sessions to address user experience concerns',
            longTerm: 'Work to establish clearer guidelines for research presentation standards'
          },
          reflectionPrompts: [
            'What are the long-term implications of compromising research integrity?',
            'How might this decision affect your credibility as a user advocate?',
            'What would you advise another researcher in this same situation?'
          ],
          skillRecommendations: [
            {
              skill: 'Professional Assertiveness',
              reason: 'Learn to advocate for research standards while maintaining business relationships',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Research Ethics',
              reason: 'Understand how to maintain research integrity in business environments',
              link: '/library/research-ethics'
            }
          ],
          realWorldExample: {
            title: 'Mobile App Research Compromise',
            description: 'A researcher agreed to present only positive usability metrics, hiding significant user frustration with a new navigation system.',
            outcome: 'The feature launched with poor user reviews and high support tickets. The researcher lost credibility when the hidden issues became apparent, and the feature required a costly redesign.'
          }
        }
      },
      {
        id: 'escalate-to-pm',
        text: 'Bring the disagreement to the product manager to decide on the presentation approach.',
        feedback: 'While this ensures a decision gets made, it may signal inability to resolve cross-functional conflicts and could damage your relationship with James.',
        consequences: {
          immediate: 'The product manager makes a decision, but both you and James may feel the collaboration failed.',
          shortTerm: 'Future research-marketing discussions may be more formal and less collaborative.',
          longTerm: 'You may be seen as someone who escalates rather than solves cross-functional challenges independently.'
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
              stakeholder: 'James (Product Marketing Manager)',
              impact: 'May feel that the collaborative process was abandoned and direct communication failed',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Has to resolve conflicts that could be handled at the team level, may question team collaboration',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Team',
              impact: 'May see this as avoiding direct problem-solving and cross-functional collaboration',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Try collaborative problem-solving first, then escalate if needed',
            shortTerm: 'Use the product manager as a facilitator rather than decision-maker',
            longTerm: 'Develop skills in cross-functional conflict resolution'
          },
          mitigation: {
            immediate: 'Frame the escalation as seeking guidance rather than asking for a decision',
            shortTerm: 'Work with James to present unified options to the product manager',
            longTerm: 'Focus on building direct collaboration skills for future cross-functional challenges'
          },
          reflectionPrompts: [
            'What makes you feel that escalation is necessary at this stage?',
            'How might this approach affect your future working relationship with James?',
            'What collaboration skills could you develop to handle this situation more directly?'
          ],
          skillRecommendations: [
            {
              skill: 'Cross-functional Conflict Resolution',
              reason: 'Learn to resolve research-marketing disagreements before they require management intervention',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Peer Collaboration',
              reason: 'Understand how to work effectively with colleagues from different disciplines',
              link: '/library/peer-collaboration'
            }
          ],
          realWorldExample: {
            title: 'Product Team Research Escalation',
            description: 'A researcher immediately escalated a presentation disagreement to the product manager without attempting collaborative resolution.',
            outcome: 'The product manager resolved the immediate issue but asked both team members to work on their collaboration skills. Future research presentations required PM approval, reducing team autonomy.'
          }
        }
      },
      {
        id: 'reframe-findings',
        text: 'Propose reframing the user frustration data as "optimization opportunities" with clear improvement recommendations.',
        feedback: 'This approach maintains research integrity while presenting findings in a business-positive way, potentially satisfying both research standards and marketing needs.',
        consequences: {
          immediate: 'James appreciates the business-friendly framing while you maintain research completeness.',
          shortTerm: 'Leadership gets complete information presented as opportunities rather than problems.',
          longTerm: 'You build a reputation for translating research insights into actionable business recommendations.'
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
              stakeholder: 'James (Product Marketing Manager)',
              impact: 'Appreciates the business-friendly approach while getting complete research insights',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Senior Leadership',
              impact: 'Gets complete information framed as strategic opportunities for improvement',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Team',
              impact: 'Sees research insights translated into actionable product strategy',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            shortTerm: 'Include specific ROI projections for the optimization opportunities',
            longTerm: 'Develop standard frameworks for presenting research findings in business terms'
          },
          mitigation: {
            immediate: 'Ensure the reframing doesn\'t minimize the importance of user concerns',
            shortTerm: 'Follow up with specific timelines and resources needed for improvements',
            longTerm: 'Use this approach as a model for future research-business communication'
          },
          reflectionPrompts: [
            'How can you consistently frame research findings as business opportunities?',
            'What business language resonates most effectively with different stakeholders?',
            'How might this reframing approach influence how research is valued in the organization?'
          ],
          skillRecommendations: [
            {
              skill: 'Business Storytelling',
              reason: 'Learn to present research insights in compelling business narratives',
              link: '/library/business-storytelling'
            },
            {
              skill: 'Strategic Research Communication',
              reason: 'Understand how to translate user insights into business strategy',
              link: '/topics/foundational-mindsets/assertiveness'
            }
          ],
          realWorldExample: {
            title: 'Healthcare App Research Reframing',
            description: 'A UX researcher reframed user confusion about a medical app as "engagement optimization opportunities" with projected user retention improvements.',
            outcome: 'Leadership approved additional UX investment based on the clear business case. The improved app saw 40% better user retention, validating the research-driven approach and establishing the researcher as a strategic partner.'
          }
        }
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
    difficulty: 'foundational',
    xpReward: 50
  },
  {
    id: 'client-feedback-disagreement',
    title: 'Client Feedback Implementation Disagreement',
    description: 'Navigate a conflict with an account manager about implementing client feedback that you believe will compromise the creative integrity of a design project.',
    situation: 'You\'re a graphic designer working on a rebranding project for a major client. After presenting the initial concepts, the client provided feedback requesting significant changes that you believe will weaken the design\'s impact and effectiveness. The account manager, Lisa, is pushing for immediate implementation of all client requests, saying "the client is always right, and we need to keep them happy for future business." However, you feel strongly that some of the requested changes will result in a generic, ineffective design that won\'t achieve the client\'s stated goals. The revised presentation is due in three days, and you need to find a path forward.',
    roleContext: {
      yourRole: 'Senior Graphic Designer',
      teamSize: 'Creative team of 5 people plus account management',
      timeline: 'Revised presentation due in 3 days, final deliverables in 2 weeks',
      stakes: 'Major rebranding project worth $150K, potential for ongoing relationship',
      pressure: 'Account manager concerned about client satisfaction and future business',
      stakeholders: 'Account Manager (Lisa), Client, Creative Director, Design Team',
      history: 'You and Lisa have worked successfully on previous client projects'
    },
    choices: [
      {
        id: 'implement-all-feedback',
        text: 'Implement all client feedback as requested to maintain the relationship and avoid conflict.',
        feedback: 'While this maintains client satisfaction in the short term, it may result in an ineffective design that doesn\'t achieve the client\'s business goals and could damage your professional reputation.',
        consequences: {
          immediate: 'Lisa feels supported and the client relationship remains smooth.',
          shortTerm: 'The design may not perform well in market testing or real-world application.',
          longTerm: 'Your portfolio includes work that doesn\'t represent your best capabilities, and the client may blame you for poor results.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 2 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 3 }
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
              stakeholder: 'Lisa (Account Manager)',
              impact: 'Feels supported and maintains smooth client relationship management',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Client',
              impact: 'Gets what they asked for but may not achieve their business objectives',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Creative Team',
              impact: 'May lose respect for your creative advocacy and professional standards',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'At minimum, document your concerns about the design effectiveness',
            shortTerm: 'Propose A/B testing the original vs. revised concepts',
            longTerm: 'Develop better client education processes about design strategy'
          },
          mitigation: {
            immediate: 'Ensure the client understands the potential impact of their requested changes',
            shortTerm: 'Include performance metrics and success measures in the final presentation',
            longTerm: 'Build stronger relationships with clients to better influence design decisions'
          },
          reflectionPrompts: [
            'What are the long-term implications of compromising creative standards?',
            'How might this decision affect your professional reputation and portfolio?',
            'What would you advise another designer in this same situation?'
          ],
          skillRecommendations: [
            {
              skill: 'Creative Advocacy',
              reason: 'Learn to advocate for design decisions while maintaining client relationships',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Client Education',
              reason: 'Understand how to help clients make informed design decisions',
              link: '/library/client-education'
            }
          ],
          realWorldExample: {
            title: 'Restaurant Rebranding Compromise',
            description: 'A designer implemented all client feedback for a restaurant rebrand, despite concerns that the changes would make the brand forgettable.',
            outcome: 'The rebrand failed to differentiate the restaurant in a competitive market. Sales declined, and the client blamed the design team. The designer\'s reputation suffered, and the agency lost the account.'
          }
        }
      },
      {
        id: 'refuse-changes',
        text: 'Firmly refuse to implement the changes, insisting that your original design is the best solution.',
        feedback: 'While this protects creative integrity, it may damage client relationships and could be seen as inflexible or not understanding business needs.',
        consequences: {
          immediate: 'Lisa feels frustrated and the client may view the agency as difficult to work with.',
          shortTerm: 'The client relationship becomes strained, potentially affecting project completion and payment.',
          longTerm: 'You may be seen as difficult to work with, limiting your involvement in client-facing projects.'
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
            shortTerm: 'medium' as const,
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Lisa (Account Manager)',
              impact: 'Feels unsupported and may struggle to maintain client relationship',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Client',
              impact: 'May feel dismissed and question the agency\'s collaborative approach',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Creative Team',
              impact: 'May appreciate creative advocacy but see approach as too confrontational',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Propose alternative solutions that address client concerns while maintaining design integrity',
            shortTerm: 'Collaborate with Lisa to find creative solutions that satisfy both design and business goals',
            longTerm: 'Establish better upfront communication about design strategy and decision-making'
          },
          mitigation: {
            immediate: 'Explain the business rationale behind design decisions, not just creative preferences',
            shortTerm: 'Work with Lisa to present alternative approaches that meet client objectives',
            longTerm: 'Build stronger relationships by showing flexibility and collaborative problem-solving'
          },
          reflectionPrompts: [
            'How can you advocate for design quality while maintaining collaborative relationships?',
            'What alternative solutions might achieve both creative and business goals?',
            'How might your approach affect future client-designer collaboration?'
          ],
          skillRecommendations: [
            {
              skill: 'Collaborative Problem Solving',
              reason: 'Learn to find solutions that address multiple stakeholder concerns',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Client Relationship Management',
              reason: 'Understand how to advocate for design while building client trust',
              link: '/library/client-relationships'
            }
          ],
          realWorldExample: {
            title: 'Tech Startup Logo Conflict',
            description: 'A designer refused to implement client feedback on a logo design, insisting their original concept was superior without proposing alternatives.',
            outcome: 'The client felt dismissed and terminated the project. The agency lost the account and the designer was removed from client-facing work. The designer\'s reputation for collaboration suffered significantly.'
          }
        }
      },
      {
        id: 'collaborative-solution',
        text: 'Work with Lisa to understand the client\'s underlying concerns and propose alternative solutions that address their needs while maintaining design integrity.',
        feedback: 'This collaborative approach respects both creative standards and client relationships, often leading to innovative solutions that satisfy all stakeholders.',
        consequences: {
          immediate: 'Lisa feels supported and you both engage in creative problem-solving for the client.',
          shortTerm: 'You develop solutions that address client concerns while maintaining design effectiveness.',
          longTerm: 'You build a reputation as a collaborative professional who can balance creative and business needs effectively.'
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
              stakeholder: 'Lisa (Account Manager)',
              impact: 'Feels supported and appreciates the collaborative approach to client challenges',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Client',
              impact: 'Feels heard and gets solutions that address their concerns while achieving business goals',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Creative Team',
              impact: 'Sees effective advocacy for design quality combined with collaborative problem-solving',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            shortTerm: 'If collaboration doesn\'t yield solutions quickly, escalate to the creative director for guidance',
            longTerm: 'Establish regular client-creative collaboration sessions for future projects'
          },
          mitigation: {
            immediate: 'Set clear timeline for finding solutions given the upcoming presentation deadline',
            shortTerm: 'Document the agreed-upon approach and client expectations',
            longTerm: 'Use this collaboration as a model for future client-creative partnerships'
          },
          reflectionPrompts: [
            'How can you frame design decisions in terms of client business objectives?',
            'What can you learn from Lisa\'s client perspective that might inform your creative approach?',
            'How might this collaborative approach influence future client projects?'
          ],
          skillRecommendations: [
            {
              skill: 'Client-Creative Collaboration',
              reason: 'Learn to bridge creative and business perspectives effectively',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Strategic Design Communication',
              reason: 'Understand how to present creative decisions in business terms',
              link: '/library/strategic-design'
            }
          ],
          realWorldExample: {
            title: 'Healthcare Brand Redesign Success',
            description: 'A designer and account manager collaborated to understand why a healthcare client wanted "more corporate" branding, discovering concerns about credibility.',
            outcome: 'They developed a solution that maintained creative impact while addressing credibility concerns. The rebrand increased patient trust and became a case study for the agency\'s strategic design approach.'
          }
        }
      },
      {
        id: 'present-alternatives',
        text: 'Create multiple design variations that address the client\'s concerns while preserving different levels of creative integrity.',
        feedback: 'This approach provides the client with choices while demonstrating the impact of different design decisions, often leading to more informed client decisions.',
        consequences: {
          immediate: 'Lisa appreciates having options to present, and the client feels they have control over the decision.',
          shortTerm: 'The client can see the trade-offs between different approaches and make more informed choices.',
          longTerm: 'You build a reputation for thorough, client-focused design work while maintaining creative standards.'
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
              stakeholder: 'Lisa (Account Manager)',
              impact: 'Appreciates having multiple options to present and feels supported in client management',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Client',
              impact: 'Feels empowered to make informed decisions and sees the agency as thorough and professional',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Creative Team',
              impact: 'Sees strategic approach to client work that maintains creative standards',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If time is limited, focus on the most critical design elements for variation',
            shortTerm: 'Use client feedback on alternatives to refine the final design direction',
            longTerm: 'Establish this multi-option approach as standard practice for client presentations'
          },
          mitigation: {
            immediate: 'Clearly explain the strategic rationale behind each design variation',
            shortTerm: 'Guide the client toward the most effective option through strategic presentation',
            longTerm: 'Use this approach to build stronger client relationships and design advocacy skills'
          },
          reflectionPrompts: [
            'How can presenting options help clients understand the impact of design decisions?',
            'What can you learn from client reactions to different design approaches?',
            'How might this approach influence how you handle future client feedback?'
          ],
          skillRecommendations: [
            {
              skill: 'Strategic Design Presentation',
              reason: 'Learn to present design options in ways that guide client decision-making',
              link: '/library/design-presentation'
            },
            {
              skill: 'Client Design Education',
              reason: 'Understand how to help clients make informed design decisions',
              link: '/topics/foundational-mindsets/assertiveness'
            }
          ],
          realWorldExample: {
            title: 'Retail Chain Rebranding Options',
            description: 'A designer created three logo variations showing different levels of modernization, helping a traditional retail client understand the impact of design choices.',
            outcome: 'The client chose a middle option that modernized their brand while maintaining heritage elements. Sales increased 25% after the rebrand, and the agency won additional projects based on their strategic approach.'
          }
        }
      },
      {
        id: 'educate-client',
        text: 'Propose a client meeting to educate them about design strategy and the reasoning behind your original recommendations.',
        feedback: 'This approach builds client understanding and trust while positioning you as a strategic partner, though it requires strong communication skills and client openness.',
        consequences: {
          immediate: 'Lisa may be concerned about challenging the client, but appreciates your strategic thinking.',
          shortTerm: 'The client gains better understanding of design decisions and may become more collaborative.',
          longTerm: 'You establish yourself as a strategic design consultant rather than just an implementer.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 7 }
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
              stakeholder: 'Lisa (Account Manager)',
              impact: 'May initially worry about client reaction but appreciates the strategic approach',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Client',
              impact: 'Gains valuable design education and may become a more strategic partner',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Creative Team',
              impact: 'Sees professional advocacy for design strategy and client education',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'Start with a collaborative discussion rather than formal education session',
            shortTerm: 'Include case studies and examples to support design recommendations',
            longTerm: 'Establish regular strategic design consultations as part of client relationships'
          },
          mitigation: {
            immediate: 'Frame the meeting as collaborative exploration rather than client education',
            shortTerm: 'Include Lisa in the strategic discussion to maintain account management relationships',
            longTerm: 'Use successful outcomes to build credibility for future strategic design discussions'
          },
          reflectionPrompts: [
            'How can you educate clients about design strategy without appearing condescending?',
            'What examples and case studies would most effectively support your design recommendations?',
            'How might client education change the nature of your professional relationships?'
          ],
          skillRecommendations: [
            {
              skill: 'Strategic Design Consulting',
              reason: 'Learn to position yourself as a strategic partner rather than just a service provider',
              link: '/library/design-consulting'
            },
            {
              skill: 'Client Presentation Skills',
              reason: 'Understand how to effectively communicate design strategy to business stakeholders',
              link: '/topics/foundational-mindsets/assertiveness'
            }
          ],
          realWorldExample: {
            title: 'Financial Services Brand Strategy Session',
            description: 'A designer proposed a strategy session to help a financial client understand how their brand positioning affected customer trust and acquisition.',
            outcome: 'The client became highly engaged in the strategic process and approved a more ambitious rebrand. The relationship evolved into ongoing strategic consulting, and the designer was promoted to creative strategist.'
          }
        }
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
    difficulty: 'foundational',
    xpReward: 50
  },
  {
    id: 'project-timeline-conflict',
    title: 'Project Timeline and Quality Standards Conflict',
    description: 'Navigate a disagreement with a project coordinator about rushing a deliverable that could compromise quality standards.',
    situation: 'You\'re a data analyst working on a quarterly market research report that informs major strategic decisions. The project coordinator, Marcus, just informed you that the deadline has been moved up by one week because "leadership needs the insights for an unexpected board meeting." However, you\'re still waiting for critical data from two key sources, and rushing the analysis could lead to incomplete or inaccurate conclusions. Marcus insists that "something is better than nothing" and that you can "update it later if needed." You know that once leadership sees preliminary data, it often becomes the basis for decisions regardless of later updates.',
    roleContext: {
      yourRole: 'Senior Data Analyst',
      teamSize: 'Analytics team of 4 people plus project coordination',
      timeline: 'Original deadline in 2 weeks, now moved to 1 week',
      stakes: 'Quarterly strategic decisions and board presentation',
      pressure: 'Unexpected board meeting driving accelerated timeline',
      stakeholders: 'Project Coordinator (Marcus), Leadership Team, Board Members, Analytics Team',
      history: 'You and Marcus have worked together on multiple successful projects'
    },
    choices: [
      {
        id: 'rush-delivery',
        text: 'Agree to deliver the report with available data, clearly noting limitations and missing information.',
        feedback: 'While this meets the immediate timeline need, incomplete analysis could lead to poor strategic decisions and may damage your reputation for analytical rigor.',
        consequences: {
          immediate: 'Marcus feels supported and leadership gets something for their board meeting.',
          shortTerm: 'Leadership may make decisions based on incomplete data, potentially leading to suboptimal outcomes.',
          longTerm: 'Your reputation for analytical quality may suffer, and you may be seen as someone who compromises standards under pressure.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 3 },
          { area: 'emotional-intelligence', impact: 6 },
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
  }
];

export const getScenarioById = (id: string): Scenario | undefined => {
  return scenarios.find(scenario => scenario.id === id);
};