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
    description: 'Address a situation where a teammate is taking credit for your contributions in front of stakeholders.',
    situation: 'You\'re a Senior Software Engineer working on a high-visibility feature redesign. During yesterday\'s stakeholder demo, your teammate Jordan presented the new architecture you designed and implemented, referring to it as "my solution" and "the approach I developed." This is the third time in two months Jordan has taken credit for your work in front of leadership. Your manager wasn\'t in the meeting, but the VP of Engineering and Product Director were both present and seemed impressed with "Jordan\'s" technical innovation.',
    roleContext: {
      yourRole: 'Senior Software Engineer',
      teamSize: '8-person engineering team',
      timeline: 'This pattern has occurred 3 times over 2 months',
      stakes: 'High-visibility feature with executive attention, impacts promotion discussions',
      pressure: 'Annual performance reviews are coming up in 6 weeks',
      stakeholders: 'VP of Engineering, Product Director, Engineering Manager, team members',
      history: 'You and Jordan joined the team around the same time and have similar seniority levels'
    },
    choices: [
      {
        id: 'immediate-correction',
        text: 'Speak up immediately in the next team meeting to clarify your contributions and set the record straight.',
        feedback: 'Taking immediate action shows assertiveness and prevents the pattern from continuing, but doing it publicly might create team tension and could be perceived as confrontational by leadership.',
        consequences: {
          immediate: 'Jordan feels called out publicly and becomes defensive, creating visible team tension.',
          shortTerm: 'Leadership notices the conflict and may question both your professionalism and Jordan\'s integrity.',
          longTerm: 'While your contributions become clear, the public confrontation may damage team dynamics and your reputation for collaboration.'
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
              impact: 'Feels publicly embarrassed and may become defensive or retaliatory',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Engineering Team',
              impact: 'Witnesses uncomfortable confrontation, may feel tension and choose sides',
              severity: 'negative' as const
            },
            {
              stakeholder: 'VP of Engineering',
              impact: 'Questions team dynamics and both engineers\' professionalism',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Engineering Manager',
              impact: 'Concerned about team conflict and may need to mediate',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Address Jordan privately first before making any public corrections',
            shortTerm: 'Document your contributions and share them with your manager in a one-on-one',
            longTerm: 'Focus on building a pattern of visible ownership rather than reactive corrections'
          },
          mitigation: {
            immediate: 'If you do speak up, frame it collaboratively: "Jordan and I worked together on this, and I\'d like to share the technical details I contributed"',
            shortTerm: 'Follow up with Jordan privately to discuss collaboration and credit-sharing going forward',
            longTerm: 'Establish clearer communication about individual contributions before future presentations'
          },
          reflectionPrompts: [
            'How might public confrontation affect your long-term working relationship with Jordan?',
            'What would be the most professional way to ensure your contributions are recognized?',
            'How can you address this pattern while maintaining team cohesion?'
          ],
          skillRecommendations: [
            {
              skill: 'Professional Communication',
              reason: 'Learn to address credit issues without creating public confrontation',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Conflict De-escalation',
              reason: 'Understand how to handle workplace disputes constructively',
              link: '/library/conflict-resolution'
            }
          ],
          realWorldExample: {
            title: 'Data Scientist\'s Public Correction',
            description: 'A data scientist called out a colleague in a team meeting for taking credit for their machine learning model.',
            outcome: 'While the contributions were clarified, the public confrontation created lasting team tension. Leadership viewed both engineers as difficult to work with, affecting both their career prospects.'
          }
        }
      },
      {
        id: 'private-conversation',
        text: 'Have a direct, private conversation with Jordan about the pattern and establish clear boundaries.',
        feedback: 'This approach addresses the issue directly while maintaining professionalism and team harmony. It gives Jordan a chance to correct the behavior and shows maturity in handling workplace conflicts.',
        consequences: {
          immediate: 'Jordan either acknowledges the issue and commits to change, or becomes defensive about their behavior.',
          shortTerm: 'If Jordan responds positively, future collaborations improve and credit is shared appropriately.',
          longTerm: 'You build a reputation for handling conflicts professionally and either resolve the issue or have clear documentation for escalation.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'decision-making', impact: 7 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'neutral' as const,
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
              stakeholder: 'Jordan (Teammate)',
              impact: 'Has opportunity to understand impact and correct behavior without public embarrassment',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Engineering Team',
              impact: 'Benefits from improved collaboration without witnessing conflict',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Engineering Manager',
              impact: 'Appreciates your mature approach to conflict resolution',
              severity: 'positive' as const
            },
            {
              stakeholder: 'VP of Engineering',
              impact: 'Unaware of the issue but benefits from improved team dynamics',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'If Jordan is defensive, suggest involving your manager as a mediator',
            shortTerm: 'Document the conversation and monitor whether behavior changes',
            longTerm: 'If pattern continues, escalate to management with clear examples'
          },
          mitigation: {
            immediate: 'Prepare specific examples and focus on impact rather than intent',
            shortTerm: 'Follow up in writing to confirm agreements about future collaboration',
            longTerm: 'Establish regular check-ins about project contributions and recognition'
          },
          reflectionPrompts: [
            'How can you approach this conversation to maximize the chance of a positive outcome?',
            'What specific examples will help Jordan understand the impact of their behavior?',
            'How will you know if this conversation was successful?'
          ],
          skillRecommendations: [
            {
              skill: 'Difficult Conversations',
              reason: 'Master the art of addressing sensitive topics with colleagues',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Boundary Setting',
              reason: 'Learn to establish and maintain professional boundaries effectively',
              link: '/library/professional-boundaries'
            }
          ],
          realWorldExample: {
            title: 'Product Manager\'s Direct Approach',
            description: 'A product manager had a private conversation with a colleague who was taking credit for their market research and strategy work.',
            outcome: 'The colleague was initially defensive but ultimately acknowledged the issue. They established a system for clearly attributing contributions in future presentations, and their working relationship actually improved.'
          }
        }
      },
      {
        id: 'proactive-visibility',
        text: 'Focus on making your contributions more visible through documentation, demos, and proactive communication.',
        feedback: 'This approach builds long-term visibility and ownership without direct confrontation. It\'s professional and constructive, though it may take longer to address the immediate credit issue.',
        consequences: {
          immediate: 'Jordan continues taking credit in the short term, but you begin establishing clearer ownership patterns.',
          shortTerm: 'Your contributions become more visible to leadership through your own efforts and documentation.',
          longTerm: 'You build a strong reputation for technical leadership and clear communication, making future credit issues less likely.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'decision-making', impact: 8 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'neutral' as const,
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
              stakeholder: 'Jordan (Teammate)',
              impact: 'Continues current behavior initially but may adjust as your visibility increases',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Engineering Team',
              impact: 'Benefits from better documentation and clearer project communication',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Engineering Manager',
              impact: 'Gains better visibility into your contributions and technical leadership',
              severity: 'positive' as const
            },
            {
              stakeholder: 'VP of Engineering',
              impact: 'Develops clearer understanding of your technical capabilities and impact',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'Combine this approach with a private conversation with Jordan',
            shortTerm: 'If Jordan continues taking credit despite your increased visibility, escalate the issue',
            longTerm: 'Consider whether this passive approach is sufficient for your career goals'
          },
          mitigation: {
            immediate: 'Start documenting contributions immediately and share with your manager',
            shortTerm: 'Volunteer to present your own work in future stakeholder meetings',
            longTerm: 'Build relationships directly with leadership to ensure your work is recognized'
          },
          reflectionPrompts: [
            'How can you increase visibility of your work without appearing self-promotional?',
            'What documentation and communication practices will best showcase your contributions?',
            'Is this approach sufficient to address the immediate impact on your career progression?'
          ],
          skillRecommendations: [
            {
              skill: 'Self-Advocacy',
              reason: 'Learn to promote your work and achievements professionally',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Technical Communication',
              reason: 'Master the art of documenting and presenting technical work effectively',
              link: '/library/technical-communication'
            }
          ],
          realWorldExample: {
            title: 'Software Architect\'s Documentation Strategy',
            description: 'A software architect started documenting all design decisions and presenting monthly architecture reviews after a colleague took credit for their system design.',
            outcome: 'Within six months, leadership clearly understood their technical contributions. The colleague stopped taking credit as the architect\'s ownership became undeniable through consistent documentation and presentation.'
          }
        }
      },
      {
        id: 'manager-escalation',
        text: 'Discuss the situation with your manager and ask for guidance on how to handle the credit attribution issue.',
        feedback: 'Involving your manager provides official support and guidance, but may be seen as escalating too quickly without attempting direct resolution first.',
        consequences: {
          immediate: 'Your manager becomes aware of the issue and may investigate or mediate.',
          shortTerm: 'The situation gets official attention, but Jordan may feel blindsided if they haven\'t been approached directly.',
          longTerm: 'You have management support, but may be perceived as someone who escalates conflicts rather than resolving them independently.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 5 },
          { area: 'decision-making', impact: 6 }
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
              impact: 'May feel blindsided by management involvement without direct conversation first',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Engineering Team',
              impact: 'May view you as someone who escalates issues rather than resolving them directly',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Engineering Manager',
              impact: 'Appreciates being informed but may prefer you try direct resolution first',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'VP of Engineering',
              impact: 'Unaware unless manager escalates further, but benefits from resolution',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Ask your manager for advice on how to approach Jordan directly first',
            shortTerm: 'Use manager as a resource for coaching rather than immediate intervention',
            longTerm: 'Develop skills to handle similar situations independently in the future'
          },
          mitigation: {
            immediate: 'Frame the conversation as seeking guidance rather than asking for intervention',
            shortTerm: 'Suggest trying direct conversation with Jordan first, with manager as backup',
            longTerm: 'Document the guidance received and apply it to future workplace conflicts'
          },
          reflectionPrompts: [
            'What would you want to try on your own before involving management?',
            'How can you use your manager as a resource while still developing your own conflict resolution skills?',
            'What would make this escalation feel appropriate and professional?'
          ],
          skillRecommendations: [
            {
              skill: 'Manager Relationships',
              reason: 'Learn when and how to involve your manager in workplace issues effectively',
              link: '/library/manager-relationships'
            },
            {
              skill: 'Conflict Resolution',
              reason: 'Develop skills to handle peer conflicts independently when possible',
              link: '/topics/foundational-mindsets/assertiveness'
            }
          ],
          realWorldExample: {
            title: 'UX Designer\'s Management Consultation',
            description: 'A UX designer consulted their manager about a colleague taking credit for design concepts, asking for advice on how to address it.',
            outcome: 'The manager provided coaching on having direct conversations and offered to mediate if needed. The designer successfully resolved the issue directly and gained valuable conflict resolution skills.'
          }
        }
      },
      {
        id: 'ignore-and-document',
        text: 'Continue focusing on your work while quietly documenting instances for potential future reference.',
        feedback: 'This avoids immediate conflict but allows the pattern to continue, potentially impacting your career progression and team dynamics. It may be seen as passive and could enable the behavior.',
        consequences: {
          immediate: 'Jordan continues taking credit without any pushback or awareness of the impact.',
          shortTerm: 'Your contributions remain underrecognized by leadership, potentially affecting performance reviews.',
          longTerm: 'The pattern becomes established, Jordan\'s reputation grows at your expense, and you may miss promotion opportunities.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 2 },
          { area: 'emotional-intelligence', impact: 4 },
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
              impact: 'Continues behavior without understanding its impact, potentially damaging their own reputation long-term',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Engineering Team',
              impact: 'May lose respect for your willingness to advocate for yourself',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Engineering Manager',
              impact: 'Remains unaware of the issue and may make decisions based on incomplete information',
              severity: 'negative' as const
            },
            {
              stakeholder: 'VP of Engineering',
              impact: 'Develops incorrect understanding of team contributions and capabilities',
              severity: 'negative' as const
            }
          ],
          alternatives: {
            immediate: 'Set a timeline for how long you\'ll document before taking action',
            shortTerm: 'Use documentation as preparation for a direct conversation or escalation',
            longTerm: 'Recognize that passive approaches may not be sufficient for career advancement'
          },
          mitigation: {
            immediate: 'At minimum, ensure your manager is aware of your actual contributions',
            shortTerm: 'Consider whether this approach aligns with your career goals and values',
            longTerm: 'Develop assertiveness skills to handle similar situations more proactively'
          },
          reflectionPrompts: [
            'What are you hoping will happen if you don\'t address this directly?',
            'How might this passive approach affect your career progression and team standing?',
            'What would need to change for you to feel comfortable taking more direct action?'
          ],
          skillRecommendations: [
            {
              skill: 'Assertiveness Training',
              reason: 'Build confidence to address workplace issues that affect your career',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Career Self-Advocacy',
              reason: 'Learn to promote your work and protect your professional interests',
              link: '/library/career-advocacy'
            }
          ],
          realWorldExample: {
            title: 'Research Scientist\'s Passive Approach',
            description: 'A research scientist documented instances of a colleague taking credit for their research contributions but never addressed it directly.',
            outcome: 'After two years, the colleague was promoted to lead researcher while the original scientist was passed over. The documentation was never used, and the pattern had become so established that leadership viewed the colleague as the primary contributor.'
          }
        }
      },
      {
        id: 'collaborative-presentation',
        text: 'Suggest that you and Jordan co-present future work to ensure both contributions are clearly represented.',
        feedback: 'This approach addresses the issue constructively while maintaining the working relationship. It creates a framework for shared credit and may prevent future issues.',
        consequences: {
          immediate: 'Jordan may agree to collaborate or resist sharing the spotlight, revealing their intentions.',
          shortTerm: 'If successful, future presentations clearly show both contributions and leadership sees your technical skills.',
          longTerm: 'You establish a pattern of visible collaboration and shared ownership, while building your presentation skills and leadership visibility.'
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
            immediate: 'medium' as const,
            shortTerm: 'high' as const,
            longTerm: 'high' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Jordan (Teammate)',
              impact: 'Opportunity to collaborate genuinely while maintaining face, may reveal true intentions',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Engineering Team',
              impact: 'Benefits from seeing collaborative model and clearer project ownership',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Engineering Manager',
              impact: 'Sees both engineers\' contributions clearly and appreciates collaborative approach',
              severity: 'positive' as const
            },
            {
              stakeholder: 'VP of Engineering',
              impact: 'Gains accurate understanding of team capabilities and sees strong collaboration',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If Jordan resists, it provides clear evidence of their intentions for escalation',
            shortTerm: 'Use this as a test case - if it works, expand to other collaborative projects',
            longTerm: 'If Jordan continues taking credit despite agreements, you have clear grounds for escalation'
          },
          mitigation: {
            immediate: 'Prepare talking points about the benefits of collaborative presentation',
            shortTerm: 'Document agreements about who presents which sections',
            longTerm: 'Build your own presentation skills so you\'re comfortable in leadership settings'
          },
          reflectionPrompts: [
            'How can you frame this suggestion to make it appealing to Jordan?',
            'What would Jordan\'s response tell you about their intentions and character?',
            'How might this collaborative approach benefit your own career development?'
          ],
          skillRecommendations: [
            {
              skill: 'Collaborative Leadership',
              reason: 'Learn to create win-win solutions that advance everyone\'s interests',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Presentation Skills',
              reason: 'Build confidence in presenting your technical work to leadership',
              link: '/library/technical-presentations'
            }
          ],
          realWorldExample: {
            title: 'DevOps Engineer\'s Partnership Proposal',
            description: 'A DevOps engineer suggested co-presenting infrastructure improvements with a colleague who had been taking credit for their automation work.',
            outcome: 'The colleague initially resisted but eventually agreed. The co-presentations were successful, and both engineers gained visibility. The colleague stopped taking sole credit and they developed a strong working partnership.'
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
    description: 'Navigate a heated disagreement with a designer about user experience decisions that\'s blocking your development work.',
    situation: 'You\'re a Frontend Developer working on a critical user onboarding flow. The UX Designer, Sam, insists on a complex multi-step animation sequence that you believe will hurt performance and accessibility. You\'ve raised technical concerns twice, but Sam dismisses them as "implementation details" and says the design is non-negotiable for user engagement. The Product Manager is pressuring both of you to finalize the approach by Friday so development can proceed. Your attempts to suggest alternatives have been met with "that\'s not how users think" and "just make it work." The tension is affecting your daily standups and other team members are starting to notice.',
    roleContext: {
      yourRole: 'Frontend Developer',
      teamSize: '12-person product team (4 engineers, 2 designers, 2 PMs, 4 others)',
      timeline: 'Feature must be completed in 3 weeks, design decision needed by Friday',
      stakes: 'Critical user onboarding flow affecting conversion rates and user retention',
      pressure: 'Product Manager escalating urgency, other team members witnessing tension',
      stakeholders: 'UX Designer Sam, Product Manager, Engineering Lead, other developers',
      history: 'You and Sam have worked together for 6 months with generally good collaboration'
    },
    choices: [
      {
        id: 'technical-deep-dive',
        text: 'Prepare a detailed technical presentation showing performance data and accessibility concerns to make your case.',
        feedback: 'This data-driven approach demonstrates professionalism and technical expertise, but may come across as trying to override design decisions with technical arguments, potentially escalating the conflict.',
        consequences: {
          immediate: 'Sam feels like you\'re trying to undermine their design expertise with technical jargon.',
          shortTerm: 'The presentation may convince the Product Manager, but could damage your working relationship with Sam.',
          longTerm: 'You establish yourself as technically thorough but may be seen as difficult to collaborate with by designers.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 4 },
          { area: 'decision-making', impact: 6 }
        ],
        enhancedConsequences: {
          severity: {
            immediate: 'negative' as const,
            shortTerm: 'neutral' as const,
            longTerm: 'neutral' as const
          },
          confidence: {
            immediate: 'high' as const,
            shortTerm: 'medium' as const,
            longTerm: 'medium' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Sam (UX Designer)',
              impact: 'Feels their design expertise is being challenged and may become more defensive',
              severity: 'negative' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Appreciates data-driven approach but concerned about team dynamics',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Engineering Lead',
              impact: 'Supports technical rigor but may worry about cross-functional relationships',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'Sees you advocating for technical best practices but may worry about design conflicts',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Include Sam in preparing the presentation to make it collaborative',
            shortTerm: 'Focus on user impact rather than just technical metrics',
            longTerm: 'Build stronger relationships with design team through regular technical-design collaboration'
          },
          mitigation: {
            immediate: 'Frame the presentation as exploring options together rather than proving Sam wrong',
            shortTerm: 'Acknowledge the design goals and show how technical constraints can be addressed creatively',
            longTerm: 'Establish regular design-engineering collaboration sessions to prevent future conflicts'
          },
          reflectionPrompts: [
            'How can you present technical concerns without undermining Sam\'s design expertise?',
            'What would make this feel collaborative rather than adversarial?',
            'How might Sam\'s perspective on user engagement be valid alongside your technical concerns?'
          ],
          skillRecommendations: [
            {
              skill: 'Cross-Functional Communication',
              reason: 'Learn to translate technical concerns into design and business language',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Collaborative Problem Solving',
              reason: 'Master techniques for finding solutions that address multiple stakeholder concerns',
              link: '/library/collaborative-solutions'
            }
          ],
          realWorldExample: {
            title: 'Mobile Developer\'s Performance Presentation',
            description: 'A mobile developer created a detailed performance analysis to challenge a designer\'s complex animation requirements.',
            outcome: 'While the technical arguments were sound, the designer felt attacked and their collaboration suffered for months. The PM had to mediate future design-engineering discussions.'
          }
        }
      },
      {
        id: 'collaborative-prototyping',
        text: 'Suggest building a quick prototype together to test both the user experience and technical feasibility.',
        feedback: 'This collaborative approach addresses both design and technical concerns while maintaining the working relationship. It provides concrete evidence for decision-making and demonstrates problem-solving partnership.',
        consequences: {
          immediate: 'Sam appreciates the collaborative approach and agrees to explore options together.',
          shortTerm: 'You both learn from the prototyping process and find a solution that addresses user experience and technical constraints.',
          longTerm: 'You establish a strong pattern of design-engineering collaboration and become known as someone who finds creative solutions.'
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
              stakeholder: 'Sam (UX Designer)',
              impact: 'Feels respected and included in problem-solving, maintains design ownership while addressing concerns',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Sees effective collaboration and gets concrete data for decision-making',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Engineering Lead',
              impact: 'Appreciates collaborative approach and technical problem-solving',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'Learns from collaborative model and sees effective cross-functional partnership',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If Sam resists prototyping, suggest involving the Product Manager in the discussion',
            shortTerm: 'Use prototyping results to inform broader design-engineering collaboration practices',
            longTerm: 'Establish regular prototyping sessions for complex features'
          },
          mitigation: {
            immediate: 'Set clear expectations about what the prototype will test and how decisions will be made',
            shortTerm: 'Document learnings from the prototyping process for future reference',
            longTerm: 'Build prototyping into the standard design-engineering workflow'
          },
          reflectionPrompts: [
            'How can you frame prototyping as validating Sam\'s design vision rather than challenging it?',
            'What would make this prototyping session feel collaborative and productive?',
            'How might this approach strengthen your working relationship with the design team?'
          ],
          skillRecommendations: [
            {
              skill: 'Rapid Prototyping',
              reason: 'Learn techniques for quickly testing design and technical concepts together',
              link: '/library/rapid-prototyping'
            },
            {
              skill: 'Design-Engineering Collaboration',
              reason: 'Master the art of bridging design vision with technical implementation',
              link: '/topics/foundational-mindsets/emotional-intelligence'
            }
          ],
          realWorldExample: {
            title: 'React Developer\'s Prototype Partnership',
            description: 'A React developer suggested prototyping a complex interaction with their designer to test both user experience and performance.',
            outcome: 'The prototyping session revealed insights neither had considered alone. They found a solution that achieved the design goals with better performance, and their collaboration became a model for the team.'
          }
        }
      },
      {
        id: 'pm-mediation',
        text: 'Ask the Product Manager to facilitate a discussion about balancing user experience goals with technical constraints.',
        feedback: 'Involving the PM provides neutral mediation and business context, but may signal inability to resolve cross-functional conflicts independently and could slow down the decision-making process.',
        consequences: {
          immediate: 'The PM schedules a meeting to discuss the trade-offs, but Sam may feel like you\'re escalating unnecessarily.',
          shortTerm: 'The PM helps find a compromise, but the underlying collaboration issues between you and Sam remain unaddressed.',
          longTerm: 'You may be seen as someone who needs management intervention for cross-functional disagreements.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 5 },
          { area: 'decision-making', impact: 5 }
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
              stakeholder: 'Sam (UX Designer)',
              impact: 'May feel like you escalated instead of working together, but appreciates PM involvement',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Appreciates being involved but may prefer you resolve cross-functional issues independently',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Engineering Lead',
              impact: 'Neutral about PM involvement but may note your approach to conflict resolution',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'Sees you seeking appropriate help but may question your collaboration skills',
              severity: 'neutral' as const
            }
          ],
          alternatives: {
            immediate: 'Try one more direct conversation with Sam before involving the PM',
            shortTerm: 'Use PM mediation as a learning opportunity for future cross-functional collaboration',
            longTerm: 'Develop skills to handle similar disagreements independently'
          },
          mitigation: {
            immediate: 'Frame PM involvement as seeking business context rather than mediation',
            shortTerm: 'Work with Sam to establish better collaboration practices going forward',
            longTerm: 'Build stronger relationships with design team to prevent future escalations'
          },
          reflectionPrompts: [
            'What could you try with Sam directly before involving the PM?',
            'How can you use this situation to improve your cross-functional collaboration skills?',
            'What would make PM involvement feel appropriate rather than like an escalation?'
          ],
          skillRecommendations: [
            {
              skill: 'Cross-Functional Conflict Resolution',
              reason: 'Learn to navigate disagreements between different disciplines effectively',
              link: '/topics/foundational-mindsets/assertiveness'
            },
            {
              skill: 'Stakeholder Management',
              reason: 'Understand when and how to involve different stakeholders in decision-making',
              link: '/library/stakeholder-management'
            }
          ],
          realWorldExample: {
            title: 'Backend Developer\'s PM Escalation',
            description: 'A backend developer asked their PM to mediate a disagreement with a designer about API response times affecting user experience.',
            outcome: 'The PM helped find a solution, but the developer was later passed over for a cross-functional lead role due to concerns about their ability to collaborate independently with other disciplines.'
          }
        }
      },
      {
        id: 'compromise-proposal',
        text: 'Propose a phased approach: implement a simpler version now and enhance it later based on performance data.',
        feedback: 'This solution-oriented approach addresses both immediate timeline pressure and long-term goals. It shows strategic thinking and willingness to find middle ground while maintaining technical standards.',
        consequences: {
          immediate: 'Sam considers the proposal but may worry about the enhanced version never being implemented.',
          shortTerm: 'If accepted, you deliver on time with a solution that can evolve, building trust with both Sam and the PM.',
          longTerm: 'You establish a reputation for finding practical solutions to complex problems and become a go-to person for cross-functional challenges.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
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
            immediate: 'medium' as const,
            shortTerm: 'high' as const,
            longTerm: 'high' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Sam (UX Designer)',
              impact: 'Appreciates that their design vision is preserved while addressing immediate concerns',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Loves the strategic approach that addresses timeline while planning for enhancement',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Engineering Lead',
              impact: 'Appreciates the technical pragmatism and strategic thinking',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'Learns from the strategic approach and sees effective problem-solving',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If Sam resists, offer to commit to specific timeline for the enhanced version',
            shortTerm: 'Use performance data from the simple version to inform the enhancement',
            longTerm: 'Apply this phased approach to other complex design-engineering challenges'
          },
          mitigation: {
            immediate: 'Create clear success metrics for the simple version and enhancement criteria',
            shortTerm: 'Document the enhancement plan and get commitment from PM for future development time',
            longTerm: 'Build this phased approach into standard design-engineering workflow'
          },
          reflectionPrompts: [
            'How can you make the phased approach feel like a win for Sam\'s design goals?',
            'What commitments would make Sam comfortable with starting simpler?',
            'How might this approach become a model for future design-engineering collaboration?'
          ],
          skillRecommendations: [
            {
              skill: 'Strategic Problem Solving',
              reason: 'Learn to find solutions that address multiple stakeholder concerns over time',
              link: '/topics/foundational-mindsets/decision-making'
            },
            {
              skill: 'Iterative Development',
              reason: 'Master the art of delivering value incrementally while building toward larger goals',
              link: '/library/iterative-development'
            }
          ],
          realWorldExample: {
            title: 'Full-Stack Developer\'s Phased Solution',
            description: 'A full-stack developer proposed implementing a complex data visualization in phases when the designer wanted everything at once but performance was a concern.',
            outcome: 'The phased approach was successful. The simple version launched on time and performed well, and the enhanced version was implemented two months later. Both the designer and PM praised the strategic thinking.'
          }
        }
      },
      {
        id: 'user-research-proposal',
        text: 'Suggest conducting quick user testing to validate both the design approach and technical concerns.',
        feedback: 'This user-centered approach provides objective data for decision-making and shows respect for both design methodology and technical concerns. It may take additional time but leads to better outcomes.',
        consequences: {
          immediate: 'Sam appreciates the user-centered approach, though may worry about timeline impact.',
          shortTerm: 'User research provides clear direction and both you and Sam feel validated by data-driven decisions.',
          longTerm: 'You become known for advocating user-centered decision-making and evidence-based development practices.'
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
            immediate: 'medium' as const,
            shortTerm: 'high' as const,
            longTerm: 'high' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Sam (UX Designer)',
              impact: 'Feels respected as you\'re advocating for their core methodology of user-centered design',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Appreciates user-focused approach but may be concerned about timeline impact',
              severity: 'neutral' as const
            },
            {
              stakeholder: 'Engineering Lead',
              impact: 'Supports evidence-based decision making and user-focused development',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'Learns the value of user research in technical decision-making',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If timeline is too tight, suggest quick guerrilla testing or existing user data analysis',
            shortTerm: 'Use research results to inform not just this feature but broader design-engineering practices',
            longTerm: 'Advocate for building user research into the standard development process'
          },
          mitigation: {
            immediate: 'Propose a rapid testing approach that fits within the timeline constraints',
            shortTerm: 'Ensure research questions address both user experience and technical performance concerns',
            longTerm: 'Build relationships with user research team to streamline future collaboration'
          },
          reflectionPrompts: [
            'How can you frame user research as supporting both design vision and technical excellence?',
            'What rapid research methods could provide valuable insights within timeline constraints?',
            'How might this approach change how your team makes design and technical decisions?'
          ],
          skillRecommendations: [
            {
              skill: 'User-Centered Development',
              reason: 'Learn to incorporate user research into technical decision-making processes',
              link: '/library/user-centered-development'
            },
            {
              skill: 'Research Collaboration',
              reason: 'Master working with designers and researchers to validate technical approaches',
              link: '/topics/foundational-mindsets/emotional-intelligence'
            }
          ],
          realWorldExample: {
            title: 'Frontend Developer\'s Research Advocacy',
            description: 'A frontend developer suggested user testing when disagreeing with a designer about navigation complexity and performance trade-offs.',
            outcome: 'The research revealed that users valued speed over complex animations. Both the developer and designer learned valuable insights, and they established user testing as standard practice for major feature decisions.'
          }
        }
      },
      {
        id: 'technical-alternative',
        text: 'Research and propose alternative technical implementations that could achieve Sam\'s design goals more efficiently.',
        feedback: 'This proactive approach shows technical creativity and respect for design goals. It demonstrates problem-solving skills and willingness to find solutions rather than just pointing out problems.',
        consequences: {
          immediate: 'Sam is intrigued by your effort to find technical solutions that support their design vision.',
          shortTerm: 'You either find a viable alternative that satisfies both concerns, or gain Sam\'s appreciation for the technical complexity involved.',
          longTerm: 'You build a reputation as a creative problem-solver who bridges design and engineering effectively.'
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
            immediate: 'medium' as const,
            shortTerm: 'high' as const,
            longTerm: 'high' as const
          },
          stakeholderImpacts: [
            {
              stakeholder: 'Sam (UX Designer)',
              impact: 'Appreciates your effort to support their design vision and learns about technical possibilities',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Product Manager',
              impact: 'Impressed by proactive problem-solving and technical creativity',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Engineering Lead',
              impact: 'Values the technical research and creative approach to constraints',
              severity: 'positive' as const
            },
            {
              stakeholder: 'Development Team',
              impact: 'Learns new technical approaches and sees effective design-engineering collaboration',
              severity: 'positive' as const
            }
          ],
          alternatives: {
            immediate: 'If no good alternatives exist, the research itself demonstrates the technical constraints clearly',
            shortTerm: 'Use the research process to educate Sam about technical possibilities and limitations',
            longTerm: 'Build a library of technical alternatives for common design patterns'
          },
          mitigation: {
            immediate: 'Set realistic expectations about research timeline and potential outcomes',
            shortTerm: 'Document findings for future reference and team learning',
            longTerm: 'Establish regular design-engineering collaboration to explore technical possibilities early'
          },
          reflectionPrompts: [
            'How can you approach this research as supporting Sam\'s goals rather than proving them wrong?',
            'What would you learn about technical possibilities even if you don\'t find a perfect solution?',
            'How might this research process strengthen your collaboration with the design team?'
          ],
          skillRecommendations: [
            {
              skill: 'Technical Research',
              reason: 'Learn to efficiently explore technical alternatives for design challenges',
              link: '/library/technical-research'
            },
            {
              skill: 'Creative Problem Solving',
              reason: 'Master finding innovative solutions that satisfy multiple constraints',
              link: '/topics/foundational-mindsets/decision-making'
            }
          ],
          realWorldExample: {
            title: 'JavaScript Developer\'s Animation Research',
            description: 'A JavaScript developer researched alternative animation libraries when a designer wanted complex transitions that would hurt performance.',
            outcome: 'The research uncovered a new library that achieved the design goals with better performance. The designer was impressed by the technical creativity, and they established a pattern of exploring technical alternatives together.'
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