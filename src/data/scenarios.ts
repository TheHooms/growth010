import { Scenario } from '../types';

// Force cache refresh - all 9 scenarios are present
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
    description: 'Challenge an unfair performance review that doesn\'t reflect your contributions and impact.',
    situation: 'You\'ve just received your annual performance review, and you strongly disagree with the "meets expectations" rating. Over the past year, you led a successful product launch that exceeded revenue targets by 30%, mentored two junior team members, and took on additional responsibilities when a colleague left. Your manager cited "communication issues" and "missed deadlines" but provided only vague examples. You feel the review is unfair and doesn\'t reflect your actual contributions.',
    roleContext: {
      yourRole: 'Marketing Specialist',
      teamSize: '8-person marketing team',
      timeline: 'Performance review cycle just completed, promotion decisions happening next month',
      stakes: 'Promotion eligibility, salary increase, and career trajectory',
      pressure: 'Other team members received higher ratings, and you suspect bias may be involved',
      stakeholders: 'Direct manager, HR partner, senior marketing director',
      history: 'This is your second year with the company, first time receiving a lower-than-expected rating'
    },
    choices: [
      {
        id: 'direct-confrontation',
        text: 'Schedule an immediate meeting with your manager to directly challenge the review and demand specific examples.',
        feedback: 'Your assertiveness shows you value your contributions, but the confrontational approach may damage your relationship with your manager and be seen as defensive.',
        consequences: {
          immediate: 'Your manager becomes defensive and the conversation becomes adversarial.',
          shortTerm: 'The review may not change, and your working relationship becomes strained.',
          longTerm: 'You may be seen as difficult to manage, potentially affecting future opportunities and team dynamics.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 3 },
          { area: 'communication', impact: 4 }
        ]
      },
      {
        id: 'data-driven-response',
        text: 'Compile detailed documentation of your achievements and request a formal review meeting with specific evidence.',
        feedback: 'This professional approach demonstrates your value through concrete evidence and shows maturity in handling disagreements.',
        consequences: {
          immediate: 'Your manager appreciates the professional approach and agrees to review the evidence.',
          shortTerm: 'The review may be adjusted based on documented achievements, and you gain respect for your thoroughness.',
          longTerm: 'You establish yourself as someone who advocates professionally for themselves and may receive better support in future reviews.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'communication', impact: 8 }
        ]
      },
      {
        id: 'seek-hr-mediation',
        text: 'Involve HR to mediate the discussion and ensure fair treatment according to company policies.',
        feedback: 'This ensures proper process and protection, but may be seen as escalating too quickly and could strain your relationship with your manager.',
        consequences: {
          immediate: 'HR begins a formal review process, which may take several weeks.',
          shortTerm: 'The process may result in a fair outcome, but your manager may feel undermined.',
          longTerm: 'You may be seen as someone who escalates issues rather than resolving them directly, affecting team trust.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 4 },
          { area: 'communication', impact: 5 }
        ]
      },
      {
        id: 'accept-and-improve',
        text: 'Accept the review feedback and ask for specific guidance on how to improve in the mentioned areas.',
        feedback: 'This shows maturity and growth mindset, but may not address potential unfairness and could set a precedent for accepting inaccurate assessments.',
        consequences: {
          immediate: 'Your manager appreciates your receptiveness to feedback.',
          shortTerm: 'You may receive more support and development opportunities, but the unfair review stands.',
          longTerm: 'You may be seen as coachable but might miss out on deserved recognition and advancement.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 2 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'communication', impact: 5 }
        ]
      },
      {
        id: 'seek-peer-feedback',
        text: 'Gather feedback from colleagues and other stakeholders to build a case for your contributions.',
        feedback: 'This approach builds a comprehensive view of your impact and demonstrates your collaborative relationships.',
        consequences: {
          immediate: 'Colleagues provide positive feedback that supports your perspective.',
          shortTerm: 'You have additional evidence to present and may gain allies in your advocacy.',
          longTerm: 'You build stronger relationships and establish a reputation for seeking diverse perspectives.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'communication', impact: 7 }
        ]
      },
      {
        id: 'request-second-opinion',
        text: 'Ask for a second opinion from your manager\'s supervisor or another senior leader who knows your work.',
        feedback: 'This provides an additional perspective while maintaining professional channels, though it may be seen as going around your manager.',
        consequences: {
          immediate: 'Senior leadership agrees to review your case and provide input.',
          shortTerm: 'You may receive a more balanced assessment, but your manager may feel undermined.',
          longTerm: 'You gain visibility with senior leadership but may need to rebuild trust with your direct manager.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 5 },
          { area: 'communication', impact: 6 }
        ]
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'communication'],
    difficulty: 'foundational',
    xpReward: 60
  },
  {
    id: 'resource-allocation-conflict',
    title: 'Resource Allocation Conflict',
    description: 'Address unequal project assignments and advocate for fair distribution of high-visibility work.',
    situation: 'You\'ve noticed that high-visibility, career-advancing projects consistently go to the same few team members, while you and others are assigned routine maintenance work. When you raised this concern informally, your manager said "assignments are based on experience and availability." However, you\'ve observed that some colleagues with similar experience levels get better opportunities. You want to address this pattern professionally while advocating for more equitable project distribution.',
    roleContext: {
      yourRole: 'UX Designer',
      teamSize: '12-person design team',
      timeline: 'Next quarter\'s project assignments are being decided this week',
      stakes: 'Career growth, skill development, and visibility with leadership',
      pressure: 'Several team members have privately expressed similar concerns',
      stakeholders: 'Design manager, project managers, senior designers, other UX designers',
      history: 'You\'ve been with the team for 18 months and consistently delivered quality work'
    },
    choices: [
      {
        id: 'formal-proposal',
        text: 'Create a formal proposal for more equitable project assignment criteria and present it to your manager.',
        feedback: 'This systematic approach demonstrates leadership thinking and provides a constructive solution rather than just highlighting problems.',
        consequences: {
          immediate: 'Your manager appreciates the thoughtful approach and agrees to consider the proposal.',
          shortTerm: 'The team may implement more transparent assignment processes, and you gain recognition for initiative.',
          longTerm: 'You establish yourself as someone who drives positive change and may be considered for leadership opportunities.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'leadership', impact: 8 }
        ]
      },
      {
        id: 'direct-conversation',
        text: 'Have a direct conversation with your manager about your career goals and request specific high-visibility projects.',
        feedback: 'This approach focuses on your individual needs and shows initiative in career development, though it may not address the systemic issue.',
        consequences: {
          immediate: 'Your manager understands your career aspirations and commits to finding you better opportunities.',
          shortTerm: 'You may receive more challenging assignments, but the broader equity issue remains.',
          longTerm: 'Your career progresses, but other team members may still face the same challenges.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'leadership', impact: 5 }
        ]
      },
      {
        id: 'team-discussion',
        text: 'Organize a team discussion about project assignment processes and advocate for transparency as a group.',
        feedback: 'This collaborative approach builds team solidarity and addresses the issue collectively, though it may be seen as organizing against management.',
        consequences: {
          immediate: 'Team members feel empowered to voice their concerns collectively.',
          shortTerm: 'Management may implement changes to address team concerns, but may also view this as challenging authority.',
          longTerm: 'Stronger team cohesion and potentially better processes, but you may be seen as a troublemaker by leadership.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'leadership', impact: 7 }
        ]
      },
      {
        id: 'skill-development-focus',
        text: 'Focus on developing skills that would make you more qualified for high-visibility projects.',
        feedback: 'This growth-oriented approach addresses potential skill gaps, but may not solve the underlying equity issue and places the burden entirely on you.',
        consequences: {
          immediate: 'You begin investing in skill development and may gain new capabilities.',
          shortTerm: 'Your enhanced skills may lead to better project assignments.',
          longTerm: 'Career advancement through skill growth, but systemic assignment issues may persist for others.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 3 },
          { area: 'emotional-intelligence', impact: 5 },
          { area: 'leadership', impact: 4 }
        ]
      },
      {
        id: 'mentor-guidance',
        text: 'Seek guidance from a senior colleague or mentor on how to navigate this situation effectively.',
        feedback: 'This approach leverages experience and wisdom while building relationships, though it may delay direct action.',
        consequences: {
          immediate: 'You gain valuable perspective and strategic advice from experienced colleagues.',
          shortTerm: 'You approach the situation with better strategy and support from senior team members.',
          longTerm: 'Stronger mentoring relationships and more effective advocacy skills for future challenges.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'leadership', impact: 6 }
        ]
      },
      {
        id: 'document-and-escalate',
        text: 'Document the pattern of assignments and escalate to HR or senior leadership if needed.',
        feedback: 'This ensures proper documentation and may address potential bias, but could be seen as a nuclear option that damages relationships.',
        consequences: {
          immediate: 'HR begins investigating the assignment patterns and potential bias.',
          shortTerm: 'The investigation may lead to policy changes, but relationships with your manager may be strained.',
          longTerm: 'Potential systemic improvements, but you may face retaliation or be seen as a troublemaker.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 4 },
          { area: 'leadership', impact: 5 }
        ]
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'leadership'],
    difficulty: 'applied',
    xpReward: 70
  },
  {
    id: 'career-growth-1on1',
    title: 'Seeking Career Growth in Project-Focused 1:1s',
    description: 'Redirect project-focused one-on-one meetings toward career development and growth conversations.',
    situation: 'Your monthly one-on-one meetings with your manager have become purely transactional, focusing only on project status updates, deadlines, and immediate work issues. You\'ve been hoping to discuss your career development, skill growth opportunities, and long-term goals, but every time you try to bring these topics up, the conversation gets redirected back to current project deliverables. You feel like you\'re missing out on valuable mentoring and growth guidance that could help advance your career.',
    roleContext: {
      yourRole: 'Financial Analyst',
      teamSize: '6-person finance team',
      timeline: 'Monthly 1:1 meetings, next one scheduled for this week',
      stakes: 'Career development, skill growth, and long-term advancement opportunities',
      pressure: 'You\'ve been in the role for 2 years and feel ready for more responsibility',
      stakeholders: 'Direct manager (Finance Director), senior leadership, peer analysts',
      history: 'Strong performer with consistently good reviews, but limited growth conversations'
    },
    choices: [
      {
        id: 'agenda-control',
        text: 'Send a structured agenda before the meeting that explicitly includes career development topics.',
        feedback: 'This proactive approach sets clear expectations and demonstrates your commitment to professional growth while respecting your manager\'s time.',
        consequences: {
          immediate: 'Your manager appreciates the structure and comes prepared to discuss your career goals.',
          shortTerm: 'Regular career conversations become part of your 1:1 routine, leading to clearer development plans.',
          longTerm: 'Stronger manager relationship, better career guidance, and more opportunities for advancement.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'communication', impact: 8 }
        ]
      },
      {
        id: 'direct-request',
        text: 'Directly ask your manager to dedicate time in each 1:1 for career development discussions.',
        feedback: 'This straightforward approach clearly communicates your needs and shows initiative in managing your career development.',
        consequences: {
          immediate: 'Your manager understands your needs and agrees to balance project and career discussions.',
          shortTerm: 'You begin receiving more mentoring and development guidance in your regular meetings.',
          longTerm: 'Accelerated career growth through better guidance and increased visibility of your ambitions.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 8 },
          { area: 'emotional-intelligence', impact: 5 },
          { area: 'communication', impact: 7 }
        ]
      },
      {
        id: 'separate-meeting',
        text: 'Request separate quarterly career development meetings in addition to regular project-focused 1:1s.',
        feedback: 'This approach acknowledges your manager\'s project focus while ensuring dedicated time for career conversations.',
        consequences: {
          immediate: 'Your manager agrees to schedule dedicated career development sessions.',
          shortTerm: 'You receive focused career guidance without disrupting project management needs.',
          longTerm: 'Structured career development with clear goals and regular progress reviews.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 6 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'communication', impact: 7 }
        ]
      },
      {
        id: 'gradual-introduction',
        text: 'Gradually introduce career topics by connecting them to current projects and demonstrating growth through work.',
        feedback: 'This subtle approach may feel more natural but might not provide the dedicated career focus you need.',
        consequences: {
          immediate: 'Career topics get discussed in context, but may still be overshadowed by project priorities.',
          shortTerm: 'Some career development happens, but it may be inconsistent and project-dependent.',
          longTerm: 'Slower career development progress and continued frustration with lack of dedicated growth focus.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 4 },
          { area: 'emotional-intelligence', impact: 6 },
          { area: 'communication', impact: 5 }
        ]
      },
      {
        id: 'seek-alternative-mentoring',
        text: 'Find mentoring and career guidance from other senior colleagues while maintaining project-focused 1:1s.',
        feedback: 'This approach ensures you get career development while working around your manager\'s style, though it may limit advancement opportunities.',
        consequences: {
          immediate: 'You begin building relationships with other senior colleagues for career guidance.',
          shortTerm: 'You receive valuable mentoring from multiple sources and expand your network.',
          longTerm: 'Broader perspective on career development, but your direct manager may have less investment in your growth.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 5 },
          { area: 'emotional-intelligence', impact: 8 },
          { area: 'communication', impact: 6 }
        ]
      },
      {
        id: 'feedback-on-meeting-format',
        text: 'Provide feedback to your manager about the meeting format and suggest a more balanced approach.',
        feedback: 'This approach addresses the systemic issue and may improve the meeting format for everyone, though it requires careful delivery.',
        consequences: {
          immediate: 'Your manager reflects on the meeting format and may adjust the approach.',
          shortTerm: 'Improved 1:1 structure that balances project and development needs.',
          longTerm: 'Better manager-direct report relationships across the team and more effective career development.'
        },
        impactAreas: [
          { area: 'assertiveness', impact: 7 },
          { area: 'emotional-intelligence', impact: 7 },
          { area: 'communication', impact: 8 }
        ]
      }
    ],
    growthAreas: ['assertiveness', 'emotional-intelligence', 'communication'],
    difficulty: 'foundational',
    xpReward: 55
  }
];

export const getScenarioById = (id: string): Scenario | undefined => {
  return scenarios.find(scenario => scenario.id === id);
};