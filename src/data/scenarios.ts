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