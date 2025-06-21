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
    description: 'Address a colleague who is taking credit for your contributions in team meetings and presentations.',
    situation: 'You\'ve been working closely with Jordan on a major client proposal for the past month. You developed the core strategy and did most of the research, while Jordan handled the presentation design and client relationship. In yesterday\'s team meeting, Jordan presented the proposal to leadership and consistently used "I" language when describing the strategy and research, making it sound like they did all the work. Several colleagues approached you afterward asking if you were involved at all. You have a one-on-one with Jordan scheduled for this afternoon to discuss next steps on the project.',
    roleContext: {
      yourRole: 'Senior Business Analyst',
      teamSize: '8-person strategy team',
      timeline: 'This happened yesterday, one-on-one scheduled for today',
      stakes: 'Major client proposal worth $500K, leadership visibility on the project',
      pressure: 'Other team members are questioning your contribution level',
      stakeholders: 'Jordan (colleague), team leadership, strategy team members, client',
      history: 'You and Jordan have collaborated successfully on 2 previous projects over the past 6 months'
    },
    choices: [
      {
        id: 'direct-confrontation',
        text: 'Address it directly: "I noticed you used \'I\' language when presenting our strategy work yesterday. I want to make sure my contributions are recognized."',
        feedback: 'This direct approach ensures your concerns are clearly communicated and sets boundaries for future collaboration. However, it may create tension if Jordan becomes defensive, potentially affecting your working relationship.',
        consequences: {
          immediate: 'Jordan becomes defensive and the conversation becomes tense.',
          shortTerm: 'Your working relationship becomes strained, affecting collaboration on current projects.',
          longTerm: 'You establish clear boundaries, but Jordan may avoid working with you or speak negatively about you to others.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 9 },
          { area: 'emotional-intelligence', impact: 4 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'negative' as const,
            shortTerm: 'negative' as const,
            longTerm: 'neutral' as const
          },
          confidence: {
            immediate: 'high' as const,
            shortTerm: 'medium' as const,
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Jordan (Colleague)',
              impact: 'Feels attacked and becomes defensive, may damage the working relationship',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Strategy Team',
              impact: 'May perceive tension between you and Jordan, affecting team dynamics',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Team Leadership',
              impact: 'Unaware of the conflict but may notice decreased collaboration quality',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Start with curiosity: "I\'d love to talk about how we present our collaborative work to leadership"',
            shortTerm: 'Focus on future collaboration rather than past grievances',
            longTerm: 'Establish clear agreements about credit and recognition upfront in future projects'
          },
          mitigation: {
            immediate: 'Acknowledge Jordan\'s presentation skills and client relationship strengths first',
            shortTerm: 'Suggest creating a collaboration charter for future projects',
            longTerm: 'Document contributions more clearly in shared project materials'
          },
          reflectionPrompts: [
            'How might Jordan have perceived their role in the project differently than you did?',
            'What could you have done earlier in the project to ensure clear credit allocation?',
            'How can you address this while maintaining a productive working relationship?'
          ],
          skillRecommendations: [
            {
              skill: 'Difficult Conversations',
              reason: 'Learn to address sensitive topics while maintaining professional relationships',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Collaborative Agreements',
              reason: 'Establish clear expectations for credit and recognition in team projects',
              link: '/library/collaboration-frameworks'
            }
          ],
          realWorldExample: {
            title: 'Marketing Team Credit Dispute',
            description: 'A marketing analyst directly confronted a colleague who took credit for their campaign research in a leadership presentation.',
            outcome: 'The colleague became defensive and their relationship deteriorated. Future collaborations were awkward, and both had to work through HR to establish better working agreements.'
          }
        }
      },
      {
        id: 'clarify-contributions',
        text: 'Ask for clarification: "I want to make sure we\'re aligned on our roles. Can you walk me through how you see our contributions to this project?"',
        feedback: 'This approach opens dialogue and gives Jordan a chance to acknowledge your contributions without direct confrontation. It\'s collaborative and may reveal different perspectives on the work division.',
        consequences: {
          immediate: 'Jordan has an opportunity to recognize your contributions and clarify the situation.',
          shortTerm: 'You gain insight into their perspective and can address any misunderstandings collaboratively.',
          longTerm: 'You build a foundation for better communication and clearer role definition in future projects.'
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
              stakeholder: 'Jordan (Colleague)',
              impact: 'Feels respected and has opportunity to clarify without losing face',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Strategy Team',
              impact: 'Benefits from improved collaboration model between team members',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Team Leadership',
              impact: 'Sees effective conflict resolution and professional collaboration',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If Jordan doesn\'t acknowledge your contributions, be more direct about specific examples',
            shortTerm: 'Document the conversation outcomes and agreements for future reference',
            longTerm: 'Use this as a template for role clarification in other collaborative relationships'
          },
          mitigation: {
            immediate: 'Prepare specific examples of your contributions to reference if needed',
            shortTerm: 'Follow up with a summary email outlining agreed-upon roles and recognition',
            longTerm: 'Proactively establish contribution agreements at the start of future projects'
          },
          reflectionPrompts: [
            'What did you learn about Jordan\'s perspective on the project collaboration?',
            'How can you use this conversation style to prevent similar issues in the future?',
            'What assumptions did you make about credit and recognition that weren\'t explicitly discussed?'
          ],
          skillRecommendations: [
            {
              skill: 'Active Listening',
              reason: 'Essential for understanding different perspectives in collaborative conflicts',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Collaborative Communication',
              reason: 'Learn to address issues while strengthening working relationships',
              link: '/library/collaborative-communication'
            }
          ],
          realWorldExample: {
            title: 'Consulting Team Role Clarification',
            description: 'A consultant used clarifying questions when a colleague took credit for their analysis in a client presentation.',
            outcome: 'The colleague realized the oversight and publicly acknowledged the contributions in the next client meeting. Their working relationship actually strengthened through the honest conversation.'
          }
        }
      },
      {
        id: 'document-contributions',
        text: 'Focus on documentation: "For our next presentation, should we create a slide showing our individual contributions to help leadership understand our team\'s capabilities?"',
        feedback: 'This forward-looking approach addresses the issue indirectly while creating systems to prevent future problems. It\'s diplomatic but may not fully address the current situation.',
        consequences: {
          immediate: 'Jordan agrees to better documentation, but your current contributions remain unrecognized.',
          shortTerm: 'Future projects have clearer attribution, but colleagues may still question your role in this project.',
          longTerm: 'You establish better processes but may be seen as someone who doesn\'t advocate strongly for themselves.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 6 }
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
              stakeholder: 'Jordan (Colleague)',
              impact: 'Appreciates the diplomatic approach and agrees to better processes',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Strategy Team',
              impact: 'May still have unclear understanding of your contributions to current project',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Team Leadership',
              impact: 'Benefits from improved project documentation but may miss your current contributions',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Also address the current project: "And for this project, should we clarify our roles for leadership?"',
            shortTerm: 'Find opportunities to naturally mention your contributions in team settings',
            longTerm: 'Be more proactive about self-advocacy while maintaining diplomatic approach'
          },
          mitigation: {
            immediate: 'Suggest updating the current project documentation to reflect contributions',
            shortTerm: 'Volunteer to present portions of future work that showcase your expertise',
            longTerm: 'Build a reputation for your specific skills through consistent visibility'
          },
          reflectionPrompts: [
            'How can you balance diplomacy with ensuring your contributions are recognized?',
            'What opportunities exist to naturally showcase your work without seeming self-promotional?',
            'How might your indirect approach be perceived by colleagues and leadership?'
          ],
          skillRecommendations: [
            {
              skill: 'Self-Advocacy',
              reason: 'Learn to promote your contributions while maintaining professional relationships',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Strategic Visibility',
              reason: 'Understand how to gain recognition for your work in team environments',
              link: '/library/strategic-visibility'
            }
          ],
          realWorldExample: {
            title: 'Product Team Documentation Success',
            description: 'A product manager suggested contribution tracking after a colleague took credit for their feature research.',
            outcome: 'The team adopted better documentation practices, but the PM had to work harder to get recognition for past contributions. Leadership eventually recognized their pattern of strong research work.'
          }
        }
      },
      {
        id: 'seek-ally-support',
        text: 'Build support: "I want to make sure our team understands both of our contributions. Would you be open to me presenting the research methodology in our next team meeting?"',
        feedback: 'This approach seeks to gain visibility for your work while giving Jordan a face-saving way to share credit. It\'s strategic and collaborative, though it requires Jordan\'s cooperation.',
        consequences: {
          immediate: 'Jordan may agree, giving you a platform to showcase your contributions.',
          shortTerm: 'You gain visibility for your work and establish your expertise with the team.',
          longTerm: 'You build a reputation for your specific skills while maintaining a working relationship with Jordan.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 7 }
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
              stakeholder: 'Jordan (Colleague)',
              impact: 'Can maintain face while sharing the spotlight, likely to cooperate',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Strategy Team',
              impact: 'Gains better understanding of both team members\' expertise and contributions',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Team Leadership',
              impact: 'Sees collaborative approach and gets clearer picture of team capabilities',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If Jordan resists, ask what format would work better for sharing both perspectives',
            shortTerm: 'Suggest alternating presentation responsibilities on different project aspects',
            longTerm: 'Establish regular knowledge-sharing sessions where team members present their expertise'
          },
          mitigation: {
            immediate: 'Prepare a compelling case for why your presentation would benefit the team',
            shortTerm: 'Ensure your presentation clearly demonstrates your expertise without diminishing Jordan',
            longTerm: 'Continue to seek visibility opportunities while supporting colleagues\' success'
          },
          reflectionPrompts: [
            'How can you create win-win scenarios where both you and your colleagues can shine?',
            'What unique expertise do you bring that the team would benefit from understanding better?',
            'How might this approach change the dynamic of future collaborations?'
          ],
          skillRecommendations: [
            {
              skill: 'Strategic Influence',
              reason: 'Learn to gain visibility and recognition through collaborative approaches',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Presentation Skills',
              reason: 'Develop ability to showcase your expertise effectively in team settings',
              link: '/library/presentation-skills'
            }
          ],
          realWorldExample: {
            title: 'Research Team Knowledge Sharing',
            description: 'A data scientist asked to present their methodology after a colleague took credit for their analysis approach.',
            outcome: 'The presentation was well-received, establishing the data scientist as the go-to expert for that type of analysis. The colleague became more collaborative in future projects.'
          }
        }
      },
      {
        id: 'ignore-and-document',
        text: 'Let it go for now but document your contributions more clearly in future projects to prevent this from happening again.',
        feedback: 'This avoids immediate conflict but doesn\'t address the current situation. While it may preserve the relationship short-term, it could signal that you\'re okay with not receiving credit.',
        consequences: {
          immediate: 'No immediate conflict, but your contributions remain unrecognized.',
          shortTerm: 'Jordan may continue this behavior, and colleagues may underestimate your capabilities.',
          longTerm: 'You may be passed over for opportunities because your contributions aren\'t visible to leadership.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 2 },
          { area: 'emotional-intelligence', impact: 4 }
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
              stakeholder: 'Jordan (Colleague)',
              impact: 'May interpret silence as acceptance and continue taking credit',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Strategy Team',
              impact: 'Continues to have unclear understanding of your actual contributions',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Team Leadership',
              impact: 'May undervalue your capabilities and pass you over for opportunities',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Address it diplomatically now rather than letting it fester',
            shortTerm: 'Find natural opportunities to clarify your role in the project',
            longTerm: 'Develop a systematic approach to ensuring your contributions are visible'
          },
          mitigation: {
            immediate: 'At minimum, send a follow-up email summarizing your contributions to the project',
            shortTerm: 'Volunteer for visible roles in upcoming projects',
            longTerm: 'Build relationships with leadership to ensure they understand your capabilities'
          },
          reflectionPrompts: [
            'What message does your silence send about your willingness to advocate for yourself?',
            'How might this pattern affect your career progression and opportunities?',
            'What would you advise a friend or colleague in this same situation?'
          ],
          skillRecommendations: [
            {
              skill: 'Self-Advocacy',
              reason: 'Essential for career progression and ensuring your contributions are recognized',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Professional Courage',
              reason: 'Learn to address uncomfortable situations that affect your professional standing',
              link: '/library/professional-courage'
            }
          ],
          realWorldExample: {
            title: 'Finance Team Missed Opportunities',
            description: 'A financial analyst repeatedly let colleagues take credit for their work, hoping to avoid conflict.',
            outcome: 'Over time, leadership viewed the analyst as a support player rather than a strategic contributor. They were passed over for a promotion that went to a colleague who had taken credit for several of their analyses.'
          }
        }
      },
      {
        id: 'escalate-to-manager',
        text: 'Discuss the situation with your manager to get guidance on how to handle credit and recognition issues.',
        feedback: 'This approach seeks guidance and creates awareness with leadership, but may be seen as escalating a peer conflict rather than handling it directly first.',
        consequences: {
          immediate: 'Your manager becomes aware of the situation and may provide guidance.',
          shortTerm: 'You get support for addressing the issue, but Jordan may feel blindsided if they learn about it.',
          longTerm: 'You establish a pattern of seeking management help for peer conflicts, which may affect how you\'re viewed as a collaborator.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 3 },
          { area: 'emotional-intelligence', impact: 5 }
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
              stakeholder: 'Jordan (Colleague)',
              impact: 'May feel betrayed if they learn about the escalation without direct conversation first',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Strategy Team',
              impact: 'May view you as someone who escalates peer issues rather than resolving them directly',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Team Leadership',
              impact: 'Appreciates awareness but may prefer you handle peer conflicts directly first',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Try a direct conversation with Jordan first, then escalate if needed',
            shortTerm: 'Use your manager as a coach for how to handle the conversation, not to intervene',
            longTerm: 'Develop skills for handling peer conflicts independently'
          },
          mitigation: {
            immediate: 'Frame it as seeking advice rather than asking for intervention',
            shortTerm: 'Let Jordan know you\'re seeking guidance on collaboration best practices',
            longTerm: 'Build reputation for resolving conflicts constructively and independently'
          },
          reflectionPrompts: [
            'What skills could you develop to handle this type of situation independently?',
            'How might your colleagues perceive your approach to conflict resolution?',
            'What would demonstrate stronger professional maturity in this situation?'
          ],
          skillRecommendations: [
            {
              skill: 'Peer Conflict Resolution',
              reason: 'Learn to address conflicts with colleagues before involving management',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Professional Relationships',
              reason: 'Understand how to maintain productive relationships while addressing issues',
              link: '/library/professional-relationships'
            }
          ],
          realWorldExample: {
            title: 'Operations Team Escalation Backfire',
            description: 'An operations specialist went to their manager about a colleague taking credit, without trying direct conversation first.',
            outcome: 'The manager advised them to handle it directly first. When the colleague learned about the escalation, trust was damaged and future collaborations became difficult.'
          }
        }
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'self-advocacy'],
    difficulty: 'foundational',
    xpReward: 50
  },
  {
    id: 'cross-functional-feature-disagreement',
    title: 'Cross-Functional Feature Disagreement',
    description: 'Navigate a technical disagreement with a UX designer about feature implementation that\'s blocking development progress.',
    situation: 'You\'re a Frontend Developer working on a critical user onboarding flow. The UX Designer, Sam, has created designs with complex animations and micro-interactions that they believe are essential for user engagement. However, you\'re concerned these will significantly impact page load times and accessibility, especially for users with slower devices or disabilities. The designs would require 3-4 additional days of development and testing, but your sprint deadline is in 5 days. Sam is passionate about the user experience vision and feels that simplifying the animations would compromise the product quality. You need to find a path forward that works for both the technical constraints and user experience goals.',
    roleContext: {
      yourRole: 'Frontend Developer',
      teamSize: '6-person product team (2 developers, 1 designer, 1 PM, 2 QA)',
      timeline: 'Sprint deadline in 5 days, feature needs to ship next week',
      stakes: 'Critical user onboarding flow affecting conversion rates',
      pressure: 'Product Manager is asking for daily updates, stakeholders expect on-time delivery',
      stakeholders: 'Sam (UX Designer), Product Manager, QA team, end users',
      history: 'You and Sam have worked together for 8 months with generally good collaboration'
    },
    choices: [
      {
        id: 'technical-veto',
        text: 'Explain the technical constraints and recommend simpler alternatives: "These animations will hurt performance and accessibility. Let me show you some lighter alternatives that achieve similar goals."',
        feedback: 'This approach prioritizes technical best practices and user accessibility, which are important considerations. However, dismissing the design vision without collaborative exploration may damage your working relationship with Sam and miss opportunities for creative solutions.',
        consequences: {
          immediate: 'Sam feels their design expertise is being dismissed and becomes defensive about the user experience vision.',
          shortTerm: 'You implement simpler animations, meeting the deadline but potentially compromising user engagement metrics.',
          longTerm: 'Sam may be less likely to collaborate closely with you on future projects, and the team may see you as inflexible on design requirements.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 3 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'negative' as const,
            shortTerm: 'neutral' as const,
            longTerm: 'negative' as const
          },
          confidence: {
            immediate: 'high' as const,
            shortTerm: 'high' as const,
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Sam (UX Designer)',
              impact: 'Feels their expertise is undervalued and design vision is being compromised',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Appreciates meeting the deadline but may be concerned about team collaboration',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'End Users',
              impact: 'Benefit from better performance and accessibility, but may have less engaging experience',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'Start by acknowledging the design vision: "I love the user experience you\'re creating. Let\'s explore how to achieve this within our technical constraints."',
            shortTerm: 'Propose a phased approach where core animations ship now and enhanced ones come later',
            longTerm: 'Establish regular design-development collaboration sessions to catch these issues earlier'
          },
          mitigation: {
            immediate: 'Show specific examples of how your alternatives still support the user experience goals',
            shortTerm: 'Offer to implement one signature animation that balances impact with performance',
            longTerm: 'Create shared guidelines for balancing design ambition with technical constraints'
          },
          reflectionPrompts: [
            'How can you advocate for technical best practices while respecting design expertise?',
            'What opportunities exist to find creative solutions that satisfy both perspectives?',
            'How might your approach affect future cross-functional collaboration?'
          ],
          skillRecommendations: [
            {
              skill: 'Cross-Functional Communication',
              reason: 'Learn to bridge technical and design perspectives effectively',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Collaborative Problem Solving',
              reason: 'Develop skills for finding solutions that satisfy multiple constraints',
              link: '/library/collaborative-problem-solving'
            }
          ],
          realWorldExample: {
            title: 'E-commerce Team Animation Conflict',
            description: 'A developer vetoed complex checkout animations due to performance concerns, implementing basic transitions instead.',
            outcome: 'The feature shipped on time with good performance, but user engagement metrics were lower than expected. The designer felt their expertise wasn\'t valued and became less collaborative on future projects.'
          }
        }
      },
      {
        id: 'compromise-solution',
        text: 'Propose a middle ground: "What if we implement the core animations now and add the more complex interactions in a follow-up sprint? This way we can ship on time and still achieve your vision."',
        feedback: 'This collaborative approach acknowledges both the design vision and technical constraints while finding a practical path forward. It demonstrates problem-solving skills and maintains the working relationship, though it requires careful prioritization of which features to include.',
        consequences: {
          immediate: 'Sam appreciates that you\'re working to preserve their vision while addressing technical concerns.',
          shortTerm: 'You ship a version that balances user experience with performance, meeting the deadline with a plan for enhancement.',
          longTerm: 'You build a reputation as a collaborative problem-solver who can bridge design and development concerns effectively.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
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
            longTerm: 'high' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Sam (UX Designer)',
              impact: 'Feels heard and sees a path to achieving their vision, even if phased',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Appreciates the collaborative solution and clear plan for meeting deadlines',
              severity: 'positive' as const
            },
            {
              stakeholder: 'End Users',
              impact: 'Get improved experience on schedule with promise of further enhancements',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If timeline is too tight, suggest A/B testing simpler vs. complex animations',
            shortTerm: 'Propose user research to validate which animations have the most impact',
            longTerm: 'Establish a design system that balances ambition with technical feasibility'
          },
          mitigation: {
            immediate: 'Clearly define which animations are included in phase 1 vs. phase 2',
            shortTerm: 'Set specific success metrics to evaluate the effectiveness of the phased approach',
            longTerm: 'Document lessons learned to improve future design-development collaboration'
          },
          reflectionPrompts: [
            'How did finding middle ground strengthen your working relationship with Sam?',
            'What did you learn about balancing competing priorities in cross-functional work?',
            'How can you apply this collaborative approach to other technical disagreements?'
          ],
          skillRecommendations: [
            {
              skill: 'Negotiation Skills',
              reason: 'Essential for finding win-win solutions in cross-functional disagreements',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Project Planning',
              reason: 'Learn to break complex features into manageable phases',
              link: '/library/project-planning'
            }
          ],
          realWorldExample: {
            title: 'SaaS Product Animation Compromise',
            description: 'A frontend developer and designer agreed to phase complex dashboard animations, shipping core functionality first.',
            outcome: 'The initial release met deadlines and user feedback guided which advanced animations to prioritize. The collaborative approach became a model for other feature development.'
          }
        }
      },
      {
        id: 'data-driven-approach',
        text: 'Suggest testing both approaches: "Let\'s implement a simple version now to meet our deadline, then A/B test it against your full vision to see which performs better with real users."',
        feedback: 'This evidence-based approach removes personal opinions from the decision and focuses on user outcomes. It\'s professional and collaborative, though it requires additional development time and may delay getting the full vision implemented.',
        consequences: {
          immediate: 'Sam agrees to the testing approach, appreciating the focus on user data rather than assumptions.',
          shortTerm: 'You ship on time with a plan for optimization, and gather valuable user behavior data.',
          longTerm: 'You establish a culture of data-driven design decisions and build trust through evidence-based collaboration.'
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
              stakeholder: 'Sam (UX Designer)',
              impact: 'Appreciates the scientific approach and opportunity to validate design decisions',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Values the data-driven approach and clear plan for optimization',
              severity: 'positive' as const
            },
            {
              stakeholder: 'End Users',
              impact: 'Benefit from evidence-based design decisions that prioritize their actual needs',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If A/B testing isn\'t feasible, suggest user interviews or usability testing',
            shortTerm: 'Propose analytics tracking to measure engagement with current animations',
            longTerm: 'Establish regular user research cycles to inform design decisions'
          },
          mitigation: {
            immediate: 'Ensure you have proper analytics setup to measure meaningful metrics',
            shortTerm: 'Define clear success criteria and timeline for the testing period',
            longTerm: 'Create a framework for making design decisions based on user data'
          },
          reflectionPrompts: [
            'How did focusing on user data change the dynamic of the disagreement?',
            'What did you learn about using evidence to resolve subjective design decisions?',
            'How can you apply this data-driven approach to other cross-functional challenges?'
          ],
          skillRecommendations: [
            {
              skill: 'Data-Driven Decision Making',
              reason: 'Essential for resolving subjective disagreements with objective evidence',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'User Research Methods',
              reason: 'Learn to gather and interpret user feedback for design decisions',
              link: '/library/user-research'
            }
          ],
          realWorldExample: {
            title: 'Mobile App Onboarding Test',
            description: 'A developer and designer A/B tested simple vs. animated onboarding flows to resolve a performance vs. engagement debate.',
            outcome: 'Data showed that moderate animations increased completion rates without significantly impacting performance. The team used this approach for future feature decisions.'
          }
        }
      },
      {
        id: 'seek-pm-guidance',
        text: 'Involve the Product Manager: "Sam and I have different perspectives on the animation complexity. Can you help us prioritize what\'s most important for this release?"',
        feedback: 'This approach brings in the Product Manager to help make the decision based on business priorities. While it can provide clarity, it may be seen as escalating a technical disagreement rather than resolving it collaboratively.',
        consequences: {
          immediate: 'The PM provides guidance on priorities, but you and Sam may feel like you couldn\'t resolve the issue independently.',
          shortTerm: 'You get a clear decision and direction, but the underlying collaboration challenge remains unaddressed.',
          longTerm: 'You may develop a pattern of escalating design-development disagreements rather than building direct problem-solving skills.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 5 },
          { area: 'decision-making', impact: 3 }
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
              stakeholder: 'Sam (UX Designer)',
              impact: 'May feel that the technical concerns weren\'t addressed collaboratively',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Appreciates being involved but may prefer team members resolve technical issues independently',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'May see this as a pattern of not resolving cross-functional issues directly',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Try collaborative problem-solving first, then involve PM if needed',
            shortTerm: 'Use PM input as guidance while maintaining ownership of the technical solution',
            longTerm: 'Develop skills for resolving design-development conflicts independently'
          },
          mitigation: {
            immediate: 'Frame it as seeking business priority guidance rather than conflict resolution',
            shortTerm: 'Work with Sam to present unified options to the PM rather than competing perspectives',
            longTerm: 'Build stronger direct collaboration skills to reduce need for escalation'
          },
          reflectionPrompts: [
            'What skills could you develop to resolve this type of disagreement independently?',
            'How might frequent escalation affect your reputation as a collaborative team member?',
            'What would demonstrate stronger professional maturity in cross-functional conflicts?'
          ],
          skillRecommendations: [
            {
              skill: 'Conflict Resolution',
              reason: 'Learn to address disagreements directly before involving management',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Cross-Functional Leadership',
              reason: 'Develop ability to guide collaborative solutions across disciplines',
              link: '/library/cross-functional-leadership'
            }
          ],
          realWorldExample: {
            title: 'Fintech Team Escalation Pattern',
            description: 'A developer frequently involved the PM in design-development disagreements rather than working directly with designers.',
            outcome: 'The PM eventually asked the developer to try resolving issues directly first. The pattern affected the developer\'s reputation as someone who could handle cross-functional collaboration independently.'
          }
        }
      },
      {
        id: 'technical-deep-dive',
        text: 'Offer to collaborate on the technical implementation: "Let me show you exactly what these animations would require technically, and we can work together to find the best approach."',
        feedback: 'This educational approach helps Sam understand the technical implications while involving them in finding solutions. It builds mutual understanding and collaboration skills, though it requires time investment in explanation and joint problem-solving.',
        consequences: {
          immediate: 'Sam gains insight into the technical complexity and becomes more engaged in finding feasible solutions.',
          shortTerm: 'You work together to identify which animations provide the most user value for the technical cost.',
          longTerm: 'You build a stronger working relationship based on mutual understanding and shared problem-solving.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
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
            immediate: 'high' as const,
            shortTerm: 'high' as const,
            longTerm: 'high' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Sam (UX Designer)',
              impact: 'Gains technical understanding and feels respected as a collaborative partner',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Sees strong cross-functional collaboration and informed decision-making',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'Benefits from improved design-development collaboration model',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If time is limited, focus on the most impactful animations first',
            shortTerm: 'Create documentation of technical constraints for future design reference',
            longTerm: 'Establish regular design-development collaboration sessions'
          },
          mitigation: {
            immediate: 'Set clear time boundaries for the technical deep-dive session',
            shortTerm: 'Document the decisions made for future similar situations',
            longTerm: 'Create shared resources that help designers understand technical implications'
          },
          reflectionPrompts: [
            'How did involving Sam in the technical details change their perspective?',
            'What did you learn about the value of educating rather than just advocating?',
            'How can you apply this collaborative approach to other cross-functional challenges?'
          ],
          skillRecommendations: [
            {
              skill: 'Technical Communication',
              reason: 'Essential for explaining complex technical concepts to non-technical colleagues',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Collaborative Design',
              reason: 'Learn to work with designers to create technically feasible solutions',
              link: '/library/collaborative-design'
            }
          ],
          realWorldExample: {
            title: 'Healthcare App Collaboration Success',
            description: 'A developer walked a designer through performance implications of complex animations, leading to innovative lightweight solutions.',
            outcome: 'The designer learned to consider technical constraints early in the design process. Their collaboration became a model for the team, and they created several award-winning features together.'
          }
        }
      },
      {
        id: 'deadline-extension',
        text: 'Propose extending the timeline: "These animations are important for user experience. Can we negotiate a 2-3 day extension to implement them properly while maintaining performance?"',
        feedback: 'This approach prioritizes the design vision and user experience while acknowledging the technical complexity. However, it may not be feasible given business constraints and could set a precedent for extending deadlines when facing technical challenges.',
        consequences: {
          immediate: 'Sam appreciates your support for the design vision, but the timeline extension may not be approved.',
          shortTerm: 'If approved, you deliver a high-quality feature that meets both design and technical standards, but potentially delay other work.',
          longTerm: 'You may be seen as someone who struggles with time estimation or who prioritizes perfection over delivery, affecting future project planning.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 4 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'neutral' as const,
            shortTerm: 'neutral' as const,
            longTerm: 'negative' as const
          },
          confidence: {
            immediate: 'medium' as const,
            shortTerm: 'low' as const,
            longTerm: 'low' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Sam (UX Designer)',
              impact: 'Appreciates the support for design quality but may worry about project viability',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Concerned about timeline reliability and impact on other planned work',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Business Stakeholders',
              impact: 'May lose confidence in the team\'s ability to deliver on commitments',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Propose a phased delivery instead of extending the entire timeline',
            shortTerm: 'Suggest reducing scope in other areas to accommodate the animation work',
            longTerm: 'Improve estimation processes to account for design complexity upfront'
          },
          mitigation: {
            immediate: 'Present a clear plan for how the extra time would be used effectively',
            shortTerm: 'Offer to work extra hours to minimize the timeline impact',
            longTerm: 'Develop better processes for identifying technical complexity during planning'
          },
          reflectionPrompts: [
            'How can you balance quality aspirations with business delivery commitments?',
            'What could have been done earlier in the process to avoid this timeline conflict?',
            'How might requesting extensions affect your reputation for reliable delivery?'
          ],
          skillRecommendations: [
            {
              skill: 'Project Estimation',
              reason: 'Learn to better estimate technical complexity during planning phases',
              link: '/library/project-estimation'
            },
            {
              skill: 'Scope Management',
              reason: 'Develop skills for balancing quality with delivery constraints',
              link: '/library/scope-management'
            }
          ],
          realWorldExample: {
            title: 'E-learning Platform Timeline Challenge',
            description: 'A developer requested timeline extensions for complex interactive features, citing user experience importance.',
            outcome: 'Extensions were rarely approved, and the developer gained a reputation for poor estimation. They learned to propose phased delivery approaches instead.'
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
    description: 'Navigate a disagreement with a colleague about how to interpret and present user research findings to stakeholders.',
    situation: 'You\'re a UX Researcher who just completed a comprehensive study on user behavior for a new feature. Your colleague Maya, a Product Marketing Manager, has reviewed the data and wants to present it to leadership with a focus on the positive metrics that support launching the feature quickly. However, you\'ve identified some concerning usability issues and user pain points that suggest the feature needs significant refinement before launch. Maya argues that the positive data points are strong enough to move forward and that highlighting the negatives will unnecessarily delay an important business initiative. You have a joint presentation to the executive team scheduled for tomorrow morning.',
    roleContext: {
      yourRole: 'UX Researcher',
      teamSize: '12-person product organization',
      timeline: 'Executive presentation tomorrow morning, feature launch planned for next month',
      stakes: 'Major feature launch with significant revenue expectations',
      pressure: 'Leadership is eager to see progress on this strategic initiative',
      stakeholders: 'Maya (Product Marketing Manager), Executive team, Product team, End users',
      history: 'You and Maya have collaborated on 3 previous projects with mixed success'
    },
    choices: [
      {
        id: 'insist-full-picture',
        text: 'Insist on presenting the complete findings: "We need to show leadership both the opportunities and the risks. It\'s our responsibility to give them all the data to make an informed decision."',
        feedback: 'This approach prioritizes research integrity and ensures leadership has complete information for decision-making. However, it may create tension with Maya and could be perceived as blocking business progress if not presented constructively.',
        consequences: {
          immediate: 'Maya becomes frustrated and argues that you\'re being overly cautious and potentially damaging the business opportunity.',
          shortTerm: 'Leadership appreciates the thorough analysis but may delay the launch, affecting revenue targets and team morale.',
          longTerm: 'You build a reputation for research integrity, but Maya and other business stakeholders may be hesitant to collaborate with you on future projects.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 9 },
          { area: 'emotional-intelligence', impact: 4 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'negative' as const,
            shortTerm: 'neutral' as const,
            longTerm: 'neutral' as const
          },
          confidence: {
            immediate: 'high' as const,
            shortTerm: 'high' as const,
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Maya (Product Marketing Manager)',
              impact: 'Feels that business objectives are being undermined by over-cautious research approach',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Executive Team',
              impact: 'Appreciates comprehensive data but may be frustrated by potential delays',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'End Users',
              impact: 'Benefit from thorough consideration of their needs and pain points',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'Frame the concerns as opportunities for improvement rather than blockers',
            shortTerm: 'Propose a phased launch that addresses critical issues first',
            longTerm: 'Establish clearer criteria for balancing research findings with business timelines'
          },
          mitigation: {
            immediate: 'Acknowledge Maya\'s business perspective and suggest collaborative framing',
            shortTerm: 'Offer solutions and recommendations alongside the identified problems',
            longTerm: 'Build stronger relationships with business stakeholders to improve collaboration'
          },
          reflectionPrompts: [
            'How can you maintain research integrity while being a collaborative business partner?',
            'What would help Maya see the value in presenting a complete picture?',
            'How might you frame concerning findings as opportunities rather than obstacles?'
          ],
          skillRecommendations: [
            {
              skill: 'Stakeholder Communication',
              reason: 'Learn to present research findings in ways that support business decision-making',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Business Acumen',
              reason: 'Understand how to balance research rigor with business needs',
              link: '/library/business-acumen'
            }
          ],
          realWorldExample: {
            title: 'SaaS Platform Research Conflict',
            description: 'A UX researcher insisted on presenting negative usability findings despite marketing pressure to focus on positive metrics.',
            outcome: 'The launch was delayed by two months, but the final product had much higher user satisfaction. However, the researcher\'s relationship with the marketing team remained strained for months.'
          }
        }
      },
      {
        id: 'balanced-narrative',
        text: 'Propose a balanced narrative: "Let\'s present the strong positive indicators that support moving forward, while also outlining the specific improvements that will maximize our success."',
        feedback: 'This approach acknowledges both perspectives and frames the research findings constructively. It maintains research integrity while supporting business objectives, though it requires careful messaging to avoid diluting important concerns.',
        consequences: {
          immediate: 'Maya appreciates the collaborative approach and you work together to craft a compelling but honest presentation.',
          shortTerm: 'Leadership gets a realistic view of the opportunity with clear next steps, leading to a more informed launch strategy.',
          longTerm: 'You build a reputation as a researcher who can balance rigor with business partnership, strengthening future collaborations.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
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
            longTerm: 'high' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Maya (Product Marketing Manager)',
              impact: 'Feels heard and sees a path to present positive business case while addressing concerns',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Executive Team',
              impact: 'Gets realistic assessment with clear action plan for success',
              severity: 'positive' as const
            },
            {
              stakeholder: 'End Users',
              impact: 'Benefit from research-informed improvements while getting new features sooner',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If Maya resists, suggest A/B testing to validate different approaches',
            shortTerm: 'Propose user feedback loops during the launch to monitor concerns',
            longTerm: 'Establish regular research-marketing collaboration frameworks'
          },
          mitigation: {
            immediate: 'Ensure critical usability issues are clearly highlighted as priorities',
            shortTerm: 'Create specific metrics to track the concerns during launch',
            longTerm: 'Document lessons learned for future research-business collaborations'
          },
          reflectionPrompts: [
            'How did reframing concerns as opportunities change the collaboration dynamic?',
            'What did you learn about presenting research findings to support business goals?',
            'How can you apply this balanced approach to other stakeholder relationships?'
          ],
          skillRecommendations: [
            {
              skill: 'Strategic Communication',
              reason: 'Essential for presenting research in ways that drive action',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Cross-Functional Collaboration',
              reason: 'Learn to work effectively with business stakeholders',
              link: '/library/cross-functional-collaboration'
            }
          ],
          realWorldExample: {
            title: 'E-commerce Research Success',
            description: 'A researcher and marketer collaborated to present checkout research findings as optimization opportunities rather than problems.',
            outcome: 'Leadership approved a phased launch with built-in improvements. The feature exceeded performance targets and the research-marketing partnership became a model for other teams.'
          }
        }
      },
      {
        id: 'defer-to-maya',
        text: 'Support Maya\'s approach: "You know the business context better than I do. Let\'s focus on the positive metrics and I can share the detailed findings with the product team separately."',
        feedback: 'This approach prioritizes the working relationship and acknowledges Maya\'s business expertise. However, it may compromise research integrity and could lead to poor product decisions if critical issues aren\'t addressed.',
        consequences: {
          immediate: 'Maya is pleased with your collaboration and you present a unified front to leadership.',
          shortTerm: 'Leadership approves the launch timeline, but the unaddressed usability issues may surface after launch.',
          longTerm: 'You may be seen as accommodating but could lose credibility as an independent research voice if problems emerge.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 3 },
          { area: 'emotional-intelligence', impact: 6 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'positive' as const,
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
              stakeholder: 'Maya (Product Marketing Manager)',
              impact: 'Appreciates the support and sees you as a collaborative partner',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Executive Team',
              impact: 'Makes decisions based on incomplete information, potentially leading to poor outcomes',
              severity: 'negative' as const
            },
            {
              stakeholder: 'End Users',
              impact: 'May experience the unaddressed usability issues after launch',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Suggest a compromise where key concerns are mentioned as "areas to monitor"',
            shortTerm: 'Ensure the product team has access to the complete findings',
            longTerm: 'Establish clearer guidelines for when research concerns must be escalated'
          },
          mitigation: {
            immediate: 'Document your concerns and share them with relevant stakeholders',
            shortTerm: 'Propose post-launch research to validate the decisions',
            longTerm: 'Build processes to ensure research integrity while supporting business goals'
          },
          reflectionPrompts: [
            'What are the long-term consequences of not advocating for important research findings?',
            'How can you be collaborative while maintaining your professional responsibility?',
            'What would you do differently if similar usability issues emerged post-launch?'
          ],
          skillRecommendations: [
            {
              skill: 'Professional Courage',
              reason: 'Learn when and how to advocate for important research findings',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Research Ethics',
              reason: 'Understand your responsibility to represent user needs accurately',
              link: '/library/research-ethics'
            }
          ],
          realWorldExample: {
            title: 'Mobile App Launch Compromise',
            description: 'A researcher deferred to marketing pressure and downplayed navigation issues in a user study.',
            outcome: 'The app launched on schedule but received poor user reviews for confusing navigation. The researcher lost credibility when the issues they had identified became public complaints.'
          }
        }
      },
      {
        id: 'separate-presentations',
        text: 'Suggest separate presentations: "What if you present the business case and market opportunity, and I present the user research findings? This way leadership gets both perspectives clearly."',
        feedback: 'This approach allows both perspectives to be heard without forcing a compromise. However, it may appear disjointed to leadership and could highlight the disagreement rather than resolving it collaboratively.',
        consequences: {
          immediate: 'Maya agrees to the separate presentations, but leadership may notice the lack of alignment between teams.',
          shortTerm: 'Leadership gets complete information but may be confused by seemingly conflicting perspectives.',
          longTerm: 'You maintain research integrity, but the lack of cross-functional collaboration may be seen as a team dysfunction.'
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
            immediate: 'medium' as const,
            shortTerm: 'medium' as const,
            longTerm: 'low' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Maya (Product Marketing Manager)',
              impact: 'Accepts the solution but may see it as avoiding collaborative problem-solving',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Executive Team',
              impact: 'Gets complete information but may question team alignment and collaboration',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Team',
              impact: 'May see this as a sign of poor cross-functional collaboration',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Propose a joint presentation with clearly defined sections for each perspective',
            shortTerm: 'Work together to create a unified narrative that incorporates both viewpoints',
            longTerm: 'Establish better processes for aligning research and marketing perspectives'
          },
          mitigation: {
            immediate: 'Coordinate with Maya to ensure the presentations complement rather than contradict each other',
            shortTerm: 'Debrief with leadership to explain the different but complementary perspectives',
            longTerm: 'Invest in building stronger collaborative relationships with business stakeholders'
          },
          reflectionPrompts: [
            'How might separate presentations be perceived by leadership?',
            'What does this approach say about your ability to collaborate across functions?',
            'How could you have worked with Maya to create a unified perspective?'
          ],
          skillRecommendations: [
            {
              skill: 'Conflict Resolution',
              reason: 'Learn to resolve disagreements rather than working around them',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Cross-Functional Leadership',
              reason: 'Develop skills for creating alignment across different perspectives',
              link: '/library/cross-functional-leadership'
            }
          ],
          realWorldExample: {
            title: 'Fintech Product Presentation Split',
            description: 'Research and marketing teams gave separate presentations about a new feature due to disagreement on findings.',
            outcome: 'Leadership was confused by the apparent lack of alignment and asked the teams to come back with a unified recommendation. The teams had to rebuild their collaboration from scratch.'
          }
        }
      },
      {
        id: 'propose-pilot-approach',
        text: 'Suggest a pilot strategy: "What if we propose launching with a limited user group first? This lets us move forward while validating our research findings with real usage data."',
        feedback: 'This approach finds middle ground by allowing business progress while addressing research concerns through real-world validation. It demonstrates strategic thinking and risk management, though it may require additional resources and timeline adjustments.',
        consequences: {
          immediate: 'Maya sees the value in reducing risk while still moving forward, and you collaborate on a compelling pilot proposal.',
          shortTerm: 'Leadership approves the pilot approach, allowing for data-driven iteration before full launch.',
          longTerm: 'You establish a reputation for finding creative solutions that balance research rigor with business needs.'
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
              stakeholder: 'Maya (Product Marketing Manager)',
              impact: 'Appreciates the strategic approach that allows business progress with reduced risk',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Executive Team',
              impact: 'Values the risk management approach and data-driven decision making',
              severity: 'positive' as const
            },
            {
              stakeholder: 'End Users',
              impact: 'Benefit from more refined product based on pilot feedback',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If pilot isn\'t feasible, suggest A/B testing different versions of the feature',
            shortTerm: 'Propose specific metrics and success criteria for the pilot',
            longTerm: 'Establish pilot testing as standard practice for major feature launches'
          },
          mitigation: {
            immediate: 'Define clear pilot parameters and success metrics upfront',
            shortTerm: 'Ensure rapid feedback collection and analysis during the pilot',
            longTerm: 'Document learnings to improve future research-business collaboration'
          },
          reflectionPrompts: [
            'How did proposing a pilot change the dynamic from conflict to collaboration?',
            'What did you learn about finding solutions that address multiple stakeholder concerns?',
            'How can you apply this strategic thinking to other research-business tensions?'
          ],
          skillRecommendations: [
            {
              skill: 'Strategic Thinking',
              reason: 'Essential for finding solutions that balance multiple business constraints',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Risk Management',
              reason: 'Learn to propose approaches that mitigate risks while enabling progress',
              link: '/library/risk-management'
            }
          ],
          realWorldExample: {
            title: 'Social Media Platform Pilot Success',
            description: 'A researcher and marketer collaborated on a pilot launch after disagreeing about user engagement research findings.',
            outcome: 'The pilot revealed that user concerns were valid but manageable with specific design changes. The full launch was highly successful and the pilot approach became standard practice.'
          }
        }
      },
      {
        id: 'escalate-to-leadership',
        text: 'Escalate the decision: "This is an important strategic decision. Should we ask leadership how they want to balance the business opportunity against the user experience concerns?"',
        feedback: 'This approach puts the decision in leadership\'s hands and ensures they\'re aware of the trade-offs. However, it may be seen as an inability to resolve cross-functional disagreements and could create unnecessary escalation.',
        consequences: {
          immediate: 'Maya may feel that you\'re undermining the collaboration by escalating the disagreement.',
          shortTerm: 'Leadership makes the decision but may question why the team couldn\'t align on the approach.',
          longTerm: 'You may develop a reputation for escalating conflicts rather than resolving them collaboratively.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 3 },
          { area: 'decision-making', impact: 5 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'negative' as const,
            shortTerm: 'neutral' as const,
            longTerm: 'negative' as const
          },
          confidence: {
            immediate: 'medium' as const,
            shortTerm: 'medium' as const,
            longTerm: 'low' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Maya (Product Marketing Manager)',
              impact: 'Feels that the collaboration failed and may be less likely to work closely in the future',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Executive Team',
              impact: 'Questions the team\'s ability to collaborate and make decisions independently',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Team',
              impact: 'May see this as a pattern of poor cross-functional collaboration',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Try collaborative problem-solving approaches before escalating',
            shortTerm: 'Use leadership input as guidance while maintaining ownership of the solution',
            longTerm: 'Develop stronger skills for resolving cross-functional disagreements'
          },
          mitigation: {
            immediate: 'Frame it as seeking strategic guidance rather than conflict resolution',
            shortTerm: 'Work with Maya to present unified options rather than competing perspectives',
            longTerm: 'Invest in building stronger collaborative relationships'
          },
          reflectionPrompts: [
            'What collaborative approaches could you try before escalating to leadership?',
            'How might frequent escalation affect your reputation as a team player?',
            'What skills could you develop to resolve these types of disagreements independently?'
          ],
          skillRecommendations: [
            {
              skill: 'Conflict Resolution',
              reason: 'Essential for resolving disagreements without escalation',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Collaborative Problem Solving',
              reason: 'Learn to find solutions that satisfy multiple stakeholder perspectives',
              link: '/library/collaborative-problem-solving'
            }
          ],
          realWorldExample: {
            title: 'Healthcare App Research Escalation',
            description: 'A researcher escalated a disagreement with marketing about user safety findings rather than working toward a collaborative solution.',
            outcome: 'Leadership resolved the immediate issue but asked both team members to work on their collaboration skills. The researcher was seen as someone who couldn\'t handle cross-functional relationships.'
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
    description: 'Navigate a conflict with a colleague about how to respond to challenging client feedback that could impact project scope and timeline.',
    situation: 'You\'re a Graphic Designer working on a major rebranding project for a key client. Your colleague Alex, an Account Manager, just received feedback from the client requesting significant changes to the visual direction you\'ve spent three weeks developing. The client wants a "more corporate and traditional" look, which goes against the modern, innovative brand strategy that was approved in the initial brief. Alex is pushing to implement all the client\'s requests immediately to maintain the relationship, but you believe these changes will result in a generic, outdated brand that won\'t serve the client\'s long-term goals. The client presentation is scheduled for Friday (in 3 days), and Alex wants to show revised concepts that incorporate all their feedback.',
    roleContext: {
      yourRole: 'Senior Graphic Designer',
      teamSize: '8-person creative agency team',
      timeline: 'Client presentation in 3 days, final deliverables due in 2 weeks',
      stakes: '$150K rebranding project, potential for ongoing retainer work',
      pressure: 'Client relationship is critical for agency growth, but brand integrity is also important',
      stakeholders: 'Alex (Account Manager), Client stakeholders, Creative Director, Agency leadership',
      history: 'You and Alex have worked together for 18 months with generally good collaboration'
    },
    choices: [
      {
        id: 'defend-creative-vision',
        text: 'Stand firm on the creative direction: "These changes will undermine the brand strategy we all agreed on. We need to educate the client on why the original direction serves their goals better."',
        feedback: 'This approach prioritizes design integrity and long-term brand success, which is important for professional credibility. However, it may strain the client relationship and put Alex in a difficult position with account management.',
        consequences: {
          immediate: 'Alex becomes stressed about the client relationship and feels you\'re not supporting the business side of the project.',
          shortTerm: 'The client may be frustrated by pushback on their feedback, potentially affecting the project timeline and relationship.',
          longTerm: 'You maintain design integrity but may be seen as difficult to work with by account management and clients.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 9 },
          { area: 'emotional-intelligence', impact: 3 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'negative' as const,
            shortTerm: 'negative' as const,
            longTerm: 'neutral' as const
          },
          confidence: {
            immediate: 'high' as const,
            shortTerm: 'medium' as const,
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Alex (Account Manager)',
              impact: 'Feels unsupported and worried about maintaining the critical client relationship',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Client Stakeholders',
              impact: 'May feel their feedback is being dismissed and question the agency\'s responsiveness',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Creative Director',
              impact: 'May appreciate design integrity but be concerned about client satisfaction',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Propose presenting both directions to show the strategic rationale',
            shortTerm: 'Suggest a collaborative workshop with the client to explore their concerns',
            longTerm: 'Establish clearer processes for handling creative feedback with clients'
          },
          mitigation: {
            immediate: 'Acknowledge Alex\'s client relationship concerns and propose a joint approach',
            shortTerm: 'Prepare compelling rationale for the original direction with business benefits',
            longTerm: 'Build stronger relationships with account management to improve collaboration'
          },
          reflectionPrompts: [
            'How can you advocate for design quality while supporting business relationships?',
            'What would help Alex feel more confident about defending the creative direction?',
            'How might you frame design decisions in terms of client business goals?'
          ],
          skillRecommendations: [
            {
              skill: 'Client Communication',
              reason: 'Learn to present creative rationale in business terms that clients understand',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Cross-Functional Collaboration',
              reason: 'Understand how to work with account management to serve client needs',
              link: '/library/cross-functional-collaboration'
            }
          ],
          realWorldExample: {
            title: 'Tech Startup Rebrand Conflict',
            description: 'A designer refused to implement client feedback that would make their logo more "corporate," insisting on the modern direction.',
            outcome: 'The client felt unheard and switched agencies. The designer maintained their creative integrity but the agency lost a significant account and the designer\'s relationship with account management suffered.'
          }
        }
      },
      {
        id: 'compromise-approach',
        text: 'Propose a strategic compromise: "Let\'s create concepts that address their concerns while preserving the core brand strategy. We can show them how to be more sophisticated rather than traditional."',
        feedback: 'This approach seeks to balance client satisfaction with design integrity by finding creative solutions that address underlying concerns. It demonstrates problem-solving skills and collaboration, though it requires additional creative work.',
        consequences: {
          immediate: 'Alex appreciates your willingness to work with the client feedback while you maintain some creative control.',
          shortTerm: 'You develop concepts that satisfy the client\'s concerns while preserving strategic brand elements.',
          longTerm: 'You build a reputation as a designer who can balance creative vision with client needs, strengthening agency relationships.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
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
            longTerm: 'high' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Alex (Account Manager)',
              impact: 'Feels supported and confident about presenting solutions to the client',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Client Stakeholders',
              impact: 'Sees their feedback being thoughtfully addressed with professional expertise',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Creative Director',
              impact: 'Appreciates the balance of creative integrity with client service',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If compromise isn\'t possible, suggest presenting multiple options with clear rationale',
            shortTerm: 'Propose user testing to validate which direction performs better',
            longTerm: 'Establish better upfront alignment on brand direction and feedback processes'
          },
          mitigation: {
            immediate: 'Ensure the compromise doesn\'t dilute the brand strategy beyond recognition',
            shortTerm: 'Document the strategic rationale for the compromise decisions',
            longTerm: 'Use this as a case study for handling similar client feedback situations'
          },
          reflectionPrompts: [
            'How did finding middle ground strengthen your collaboration with Alex?',
            'What did you learn about addressing client concerns while maintaining design quality?',
            'How can you apply this approach to other creative-business tensions?'
          ],
          skillRecommendations: [
            {
              skill: 'Creative Problem Solving',
              reason: 'Essential for finding solutions that satisfy multiple stakeholder needs',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Strategic Design Thinking',
              reason: 'Learn to balance creative vision with business constraints',
              link: '/library/strategic-design'
            }
          ],
          realWorldExample: {
            title: 'Restaurant Chain Rebrand Success',
            description: 'A designer worked with account management to address client concerns about being "too modern" by creating sophisticated traditional elements.',
            outcome: 'The final brand was both contemporary and approachable, exceeding client expectations. The collaborative approach led to additional projects and strengthened the agency-client relationship.'
          }
        }
      },
      {
        id: 'implement-all-feedback',
        text: 'Agree to implement the client\'s requests: "You\'re right about maintaining the relationship. Let me revise the concepts to match what they\'re asking for."',
        feedback: 'This approach prioritizes the client relationship and supports Alex\'s account management goals. However, it may compromise the design quality and strategic brand direction, potentially affecting long-term brand success.',
        consequences: {
          immediate: 'Alex is relieved and appreciates your support for the client relationship.',
          shortTerm: 'The client is satisfied with the responsiveness, but the brand direction becomes generic and less strategic.',
          longTerm: 'You maintain good working relationships but may compromise your creative reputation and the client\'s brand effectiveness.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 3 },
          { area: 'emotional-intelligence', impact: 7 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'positive' as const,
            shortTerm: 'neutral' as const,
            longTerm: 'negative' as const
          },
          confidence: {
            immediate: 'high' as const,
            shortTerm: 'medium' as const,
            longTerm: 'low' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Alex (Account Manager)',
              impact: 'Appreciates the support and feels confident about client relationship management',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Client Stakeholders',
              impact: 'Happy with responsiveness but may end up with less effective brand strategy',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Creative Director',
              impact: 'May be concerned about compromising design quality and strategic thinking',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Suggest implementing feedback while documenting concerns for future reference',
            shortTerm: 'Propose measuring brand performance to validate the direction',
            longTerm: 'Establish better processes for setting creative boundaries with clients'
          },
          mitigation: {
            immediate: 'Document the strategic rationale that was compromised for future learning',
            shortTerm: 'Suggest post-launch evaluation to measure brand effectiveness',
            longTerm: 'Build stronger upfront alignment processes to prevent similar situations'
          },
          reflectionPrompts: [
            'What are the long-term consequences of always accommodating client feedback?',
            'How can you balance client service with professional design expertise?',
            'What would you do differently if the brand performs poorly after launch?'
          ],
          skillRecommendations: [
            {
              skill: 'Professional Boundaries',
              reason: 'Learn when and how to advocate for design expertise',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Client Education',
              reason: 'Develop skills for helping clients understand design strategy',
              link: '/library/client-education'
            }
          ],
          realWorldExample: {
            title: 'Nonprofit Rebrand Compromise',
            description: 'A designer implemented all client feedback to maintain the relationship, despite concerns about brand effectiveness.',
            outcome: 'The client was initially happy, but the generic brand failed to differentiate them in their market. They eventually had to rebrand again, and the designer regretted not advocating for strategic design decisions.'
          }
        }
      },
      {
        id: 'research-based-response',
        text: 'Propose research to guide the decision: "Let\'s test both directions with their target audience. This way we can show the client which approach actually resonates with their customers."',
        feedback: 'This approach uses data to resolve the subjective disagreement and demonstrates strategic thinking. It removes personal opinions from the decision and focuses on user outcomes, though it may require additional time and resources.',
        consequences: {
          immediate: 'Alex sees the value in having data to support the recommendation, and you work together to propose user testing.',
          shortTerm: 'The client appreciates the strategic approach and agrees to user research to inform the final direction.',
          longTerm: 'You establish a reputation for data-driven design decisions and build stronger client trust through evidence-based recommendations.'
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
              stakeholder: 'Alex (Account Manager)',
              impact: 'Appreciates having data to support client conversations and reduce subjective debates',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Client Stakeholders',
              impact: 'Values the strategic approach and feels confident in data-driven decisions',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Creative Director',
              impact: 'Sees strategic thinking and professional approach to creative decisions',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If research isn\'t feasible, suggest competitive analysis or expert review',
            shortTerm: 'Propose A/B testing different brand elements to optimize performance',
            longTerm: 'Establish user research as standard practice for major brand decisions'
          },
          mitigation: {
            immediate: 'Ensure research methodology is appropriate for the timeline and budget',
            shortTerm: 'Define clear success metrics and decision criteria upfront',
            longTerm: 'Build research capabilities into the agency\'s standard creative process'
          },
          reflectionPrompts: [
            'How did proposing research change the dynamic from opinion-based to evidence-based?',
            'What did you learn about using data to resolve creative disagreements?',
            'How can you apply this approach to other client feedback situations?'
          ],
          skillRecommendations: [
            {
              skill: 'Design Research Methods',
              reason: 'Essential for making evidence-based creative decisions',
              link: '/library/design-research'
            },
            {
              skill: 'Data-Driven Design',
              reason: 'Learn to use research to validate and improve creative work',
              link: '/library/data-driven-design'
            }
          ],
          realWorldExample: {
            title: 'Financial Services Brand Testing',
            description: 'A designer and account manager used user testing to resolve disagreement about traditional vs. modern brand direction.',
            outcome: 'Research showed that a hybrid approach performed best with the target audience. The client was impressed with the strategic process and the agency won additional projects based on their research-driven approach.'
          }
        }
      },
      {
        id: 'involve-creative-director',
        text: 'Escalate to the Creative Director: "This is a significant strategic decision that affects the brand direction. Should we get [Creative Director\'s name] involved to help guide the approach?"',
        feedback: 'This approach brings in senior creative leadership to help resolve the disagreement and provide strategic guidance. However, it may be seen as an inability to resolve cross-functional conflicts independently.',
        consequences: {
          immediate: 'Alex may feel that you\'re escalating rather than working collaboratively to find a solution.',
          shortTerm: 'The Creative Director provides guidance, but may question why the team couldn\'t align on the approach.',
          longTerm: 'You may develop a reputation for escalating creative decisions rather than resolving them through collaboration.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 4 },
          { area: 'decision-making', impact: 5 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'neutral' as const,
            shortTerm: 'neutral' as const,
            longTerm: 'negative' as const
          },
          confidence: {
            immediate: 'medium' as const,
            shortTerm: 'medium' as const,
            longTerm: 'low' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Alex (Account Manager)',
              impact: 'May feel that collaborative problem-solving was abandoned in favor of escalation',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Client Stakeholders',
              impact: 'Unaware of internal process but may experience delays in response',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Creative Director',
              impact: 'Provides guidance but may question team\'s collaborative problem-solving skills',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Try collaborative approaches with Alex before involving senior leadership',
            shortTerm: 'Use Creative Director as a resource for guidance rather than decision-making',
            longTerm: 'Develop stronger skills for resolving creative-business tensions independently'
          },
          mitigation: {
            immediate: 'Frame it as seeking strategic guidance rather than conflict resolution',
            shortTerm: 'Work with Alex to present unified options rather than competing perspectives',
            longTerm: 'Build stronger collaborative relationships to reduce need for escalation'
          },
          reflectionPrompts: [
            'What collaborative approaches could you try before escalating to leadership?',
            'How might frequent escalation affect your reputation as a team player?',
            'What skills could you develop to resolve these types of disagreements independently?'
          ],
          skillRecommendations: [
            {
              skill: 'Conflict Resolution',
              reason: 'Essential for resolving disagreements without escalation',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Cross-Functional Problem Solving',
              reason: 'Learn to find solutions that satisfy both creative and business needs',
              link: '/library/cross-functional-problem-solving'
            }
          ],
          realWorldExample: {
            title: 'Retail Brand Creative Escalation',
            description: 'A designer escalated a client feedback disagreement to the Creative Director rather than working with account management.',
            outcome: 'The Creative Director resolved the immediate issue but asked both team members to work on their collaboration skills. The designer was seen as someone who couldn\'t handle cross-functional relationships.'
          }
        }
      },
      {
        id: 'phased-implementation',
        text: 'Suggest a phased approach: "What if we implement some of their feedback now to show responsiveness, then propose additional refinements based on market response?"',
        feedback: 'This approach demonstrates strategic thinking by allowing immediate client satisfaction while preserving opportunities for design optimization. It shows flexibility and long-term planning, though it requires careful management of client expectations.',
        consequences: {
          immediate: 'Alex appreciates the strategic approach that addresses client concerns while maintaining design opportunities.',
          shortTerm: 'The client sees responsiveness and gets a plan for continued brand development.',
          longTerm: 'You build a reputation for strategic thinking and client partnership while preserving design quality over time.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
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
              stakeholder: 'Alex (Account Manager)',
              impact: 'Sees strategic client relationship management with opportunities for ongoing engagement',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Client Stakeholders',
              impact: 'Feels heard and gets immediate response with plan for continued development',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Creative Director',
              impact: 'Appreciates strategic approach that balances client service with design quality',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If phasing isn\'t possible, suggest A/B testing different approaches',
            shortTerm: 'Propose specific metrics to evaluate the success of each phase',
            longTerm: 'Establish phased implementation as standard practice for major brand projects'
          },
          mitigation: {
            immediate: 'Clearly define what changes are included in each phase',
            shortTerm: 'Set specific success criteria and timeline for phase evaluation',
            longTerm: 'Document lessons learned to improve future client feedback processes'
          },
          reflectionPrompts: [
            'How did thinking in phases change the approach from either/or to both/and?',
            'What did you learn about managing client expectations while preserving design quality?',
            'How can you apply this strategic thinking to other creative-business challenges?'
          ],
          skillRecommendations: [
            {
              skill: 'Strategic Planning',
              reason: 'Essential for balancing immediate needs with long-term goals',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Client Relationship Management',
              reason: 'Learn to manage expectations while delivering strategic value',
              link: '/library/client-relationship-management'
            }
          ],
          realWorldExample: {
            title: 'Healthcare Brand Phased Launch',
            description: 'A designer and account manager used phased implementation to address client concerns while preserving strategic brand direction.',
            outcome: 'The initial phase satisfied client concerns, and market response data supported the original strategic direction. The client appreciated the thoughtful approach and extended the agency relationship.'
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