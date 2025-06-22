export const feedbackDeliveryContent = {
  skillId: 'feedback-delivery',
  skillName: 'Feedback Delivery',
  theme: 'Communication & Feedback',
  
  definition: {
    title: 'Skill Definition & Importance',
    description: 'Feedback Delivery is the ability to share observations, praise, or critique in a timely, respectful, and actionable way that promotes learning, alignment, and trust.',
    coreMessage: 'Feedback is a gift. It is something thoughtfully offered intended to help the receiver grow—not to punish, control, or release frustration. Effective feedback is specific, balanced, and constructive.',
    whyItMatters: 'Effective feedback fuels growth, shapes performance, builds culture, and strengthens relationships. Poor or avoided feedback leads to confusion, stagnation, and tension.',
    trustFoundation: 'Feedback only works when there\'s psychological safety. Without trust, even well-meaning, constructive feedback may feel threatening.',
    riskOfPoorFeedback: [
      'Avoidance of important conversations',
      'Repeated mistakes and poor performance',
      'Low morale, unresolved tension',
      'Mistrust and broken collaboration'
    ]
  },

  maturityLevels: [
    {
      level: 1,
      name: 'Novice',
      description: 'Avoids giving feedback or shares only positive praise vaguely. Uncomfortable with constructive feedback in professional contexts.'
    },
    {
      level: 2,
      name: 'Emerging',
      description: 'Attempts to give feedback but struggles with timing, delivery, or tone. Feedback may be too harsh, too vague, or poorly timed.'
    },
    {
      level: 3,
      name: 'Practicing',
      description: 'Gives feedback that is timely, clear, and focused on behavior. Balances positive and constructive feedback appropriately.'
    },
    {
      level: 4,
      name: 'Fluent',
      description: 'Adapts feedback to different personalities, roles, and situations. Delivers feedback with confidence and skill in various contexts.'
    },
    {
      level: 5,
      name: 'Shaping',
      description: 'Coaches others to give feedback effectively and models best practices consistently. Builds systems and culture that normalize constructive feedback.'
    }
  ],

  microScenarios: [
    {
      id: 1,
      title: 'Meeting Dynamics',
      scenario: 'A peer dominates meetings, sidelining quieter voices. You need to consider the options and determine which one aligns with effective feedback principles.',
      options: [
        {
          id: 'a',
          text: 'Criticize them in the group meeting.',
          isRecommended: false
        },
        {
          id: 'b',
          text: 'Say nothing and let it slide.',
          isRecommended: false
        },
        {
          id: 'c',
          text: 'Invite them for a 1:1 and share your observations.',
          isRecommended: true,
          icon: '✓'
        }
      ]
    },
    {
      id: 2,
      title: 'Work Quality Issues',
      scenario: 'A teammate submitted work with errors. This impacts your ability to move forward with your part of the project.',
      options: [
        {
          id: 'a',
          text: 'Fix it silently and build resentment.',
          isRecommended: false
        },
        {
          id: 'b',
          text: 'Complain to their manager.',
          isRecommended: false
        },
        {
          id: 'c',
          text: 'Ask if they\'re open to feedback, and share with care.',
          isRecommended: true,
          icon: '✓'
        }
      ]
    },
    {
      id: 3,
      title: 'Giving Feedback to Manager',
      scenario: 'Your manager consistently provides vague direction, causing confusion. This is affecting coordination.',
      options: [
        {
          id: 'a',
          text: 'Avoid saying anything to preserve the relationship.',
          isRecommended: false
        },
        {
          id: 'b',
          text: 'Complain to their boss about the lack of clarity.',
          isRecommended: false
        },
        {
          id: 'c',
          text: 'Request a 1:1 and share the specific impact with examples.',
          isRecommended: true,
          icon: '✓'
        }
      ]
    }
  ],

  roleLevelVariants: [
    {
      role: 'Individual',
      focus: 'Shares and receives peer feedback regularly, with tact and intent.'
    },
    {
      role: 'Manager',
      focus: 'Provides structured, developmental feedback during projects and reviews.'
    },
    {
      role: 'Partner',
      focus: 'Shares feedback across functions where authority is shared.'
    },
    {
      role: 'Director & Executive',
      focus: 'Models high-quality feedback to reinforce culture and strategy.'
    }
  ],

  commonPitfalls: {
    description: 'This section outlines the most frequent feedback delivery mistakes and how to avoid them. Each comparison includes what good feedback looks like versus common errors, and why it matters.',
    selectiveFeedback: {
      title: 'Being Selective About Feedback',
      description: 'Not every observation warrants feedback. Being intentional about when and what feedback to share is crucial for maintaining team dynamics and relationships.',
      principles: [
        'Focus on impact: Prioritize feedback that addresses behaviors with significant impact on team performance, project outcomes, or professional relationships.',
        'Consider team dynamics: Too much peer-to-peer feedback, especially on minor issues, can create a hypercritical environment where team members feel constantly scrutinized.',
        'Build trust first: Feedback is most effective when delivered within established, trusting relationships. Without this foundation, even well-intentioned feedback may be perceived as criticism.',
        'Respect autonomy: Not every difference in working style requires correction. Recognize when a behavior is simply different rather than problematic.',
        'Ask yourself: "Is this feedback necessary for growth or am I just nitpicking?" "Will this feedback improve outcomes or just satisfy my preference?"'
      ]
    },
    directCommunication: {
      title: 'Direct Communication Principles',
      description: 'When you do decide feedback is warranted, follow these principles:',
      principles: [
        'Be clear and concise: Provide direct answers to questions without unnecessary elaboration.',
        'Focus on solutions: Frame feedback in terms of specific, actionable improvements rather than dwelling on problems.',
        'Balance directness with empathy: Straightforward communication can coexist with kindness and consideration for others\' feelings.'
      ]
    },
    choosingWords: {
      title: 'Choosing Your Words Wisely',
      description: 'Using thoughtful, emotionally safe language when offering feedback helps reduce defensiveness and encourages collaboration. Instead of using the word "feedback" directly, consider using phrases like:',
      phrases: [
        '"Would now be a good time for me to share a few thoughts that might support our work?"',
        '"I\'ve been reflecting on something that could help our collaboration—can we chat for a minute?"',
        '"I\'d appreciate your take on an observation I\'ve had—would you be open to that?"',
        '"There\'s something I noticed that I believe could be useful—can I run it by you?"',
        '"Is this a good time for a quick exchange that might help us sync better?"',
        '"Would it be okay if I shared something that might improve how we\'re working together?"',
        '"I have a small insight that could help—would this be a good time to talk through it?"'
      ]
    },
    framingAndTiming: {
      title: 'Why Framing and Timing Matter',
      description: 'Words like "feedback" can unintentionally trigger stress or defensiveness. Framing it as an "observation" helps reduce those emotional barriers. Also, not every moment is the right one—timing affects receptiveness. Ask yourself:',
      questions: [
        'Is this person emotionally available?',
        'Is this the right physical environment?',
        'Do we have enough time to unpack this? Being intentional about when and how you share feedback ensures it lands well—and strengthens rather than strains the relationship.'
      ]
    },
    escalationGuidance: {
      title: 'When and How to Escalate',
      description: 'Sometimes direct feedback doesn\'t lead to necessary changes. Knowing when and how to escalate appropriately is an important skill that complements effective feedback delivery.',
      principles: [
        'Frame escalation as help-seeking: When escalating to a manager, frame it as seeking help rather than complaining about a colleague.',
        'Try direct feedback first: Always attempt to address issues directly with the person before involving others.',
        'Consider impact: Only escalate issues that have significant impact on work quality, team dynamics, or business outcomes.',
        'Maintain professionalism: Focus on behaviors and impact, not personal judgments or character assessments.'
      ],
      escalationProcess: {
        title: '5-Step Escalation Process',
        steps: [
          'Attempt direct feedback at least once (ideally twice) using the techniques in this guide.',
          'Document the specific behaviors, their impact, and your attempts to address them directly.',
          'Request time with your manager, framing it as "seeking guidance on a work situation."',
          'Present the facts objectively, focusing on work impact rather than personal frustration.',
          'Ask for specific help: "Could you help me understand how to approach this?" or "What would you suggest as next steps?"'
        ]
      },
      whenToEscalate: {
        title: 'When Escalation Is Appropriate',
        examples: [
          'Repeated pattern of behavior that continues despite direct feedback',
          'Significant impact on team deliverables or client relationships',
          'Ethical concerns or policy violations',
          'Situations where power dynamics make direct feedback difficult',
          'When you\'ve tried direct feedback but the person is unreceptive or defensive'
        ]
      },
      whenNotToEscalate: {
        title: 'When Not to Escalate',
        examples: [
          'First-time occurrences that haven\'t been addressed directly',
          'Minor stylistic differences or personal preferences',
          'When you\'re emotionally charged (wait until you can be objective)',
          'Issues that don\'t significantly impact work outcomes',
          'When your goal is to "prove someone wrong" rather than improve the situation'
        ]
      },
      impactOfPrematureEscalation: {
        title: 'Impact of Premature Escalation',
        consequences: [
          'Damages trust and working relationships',
          'Creates reputation as someone who avoids direct conversations',
          'Overburdens managers with issues that could be resolved peer-to-peer',
          'Reduces psychological safety in the team',
          'May be perceived as political maneuvering rather than problem-solving'
        ]
      }
    },
    clarityNote: 'Sometimes, the feedback provider may not have full clarity on all the details and could misjudge the situation. In these moments, it\'s important to acknowledge that your feedback is based on your perception—which may not reflect the complete context. Invite clarification by saying, for example, "Let me know if I\'m missing anything on your side.\" This shows humility and encourages open dialogue, making it more likely the feedback will lead to mutual understanding rather than resistance.',
    comparisonTable: [
      {
        good: 'Timely',
        poor: 'Delayed or bottlenecked',
        why: 'Feedback should be delivered close to the moment it occurs. Waiting too long weakens context, builds tension, or allows problems to repeat. Timeliness keeps learning fresh and impact clear.'
      },
      {
        good: 'Private (for critique)',
        poor: 'Public criticism',
        why: 'Sharing constructive feedback in public often feels like punishment. Critique should be private to preserve dignity and psychological safety.'
      },
      {
        good: 'Public (for praise)',
        poor: 'Hidden or private praise',
        why: 'Public recognition boosts morale and sets an example. Keeping praise private misses a chance to reinforce positive behavior and motivate others.'
      },
      {
        good: 'Actionable',
        poor: 'Vague or abstract',
        why: 'Clear feedback includes specific behaviors and outcomes, enabling the recipient to act on it. Abstract or general comments don\'t guide improvement.'
      },
      {
        good: 'Behavior-focused',
        poor: 'Personal or character-based',
        why: 'Effective feedback targets observable behaviors—not traits or identities. This avoids defensiveness and makes it easier to change.'
      },
      {
        good: 'Respectful',
        poor: 'Emotionally reactive',
        why: 'Feedback delivered with calm and care builds trust, even when critical. Emotional outbursts erode credibility and damage relationships.'
      },
      {
        good: 'With permission',
        poor: 'Forced or unsolicited',
        why: 'Asking "Is it okay if I share something I\'ve noticed?" gives the recipient agency and prepares them to listen. It signals respect and reduces defensiveness.'
      },
      {
        good: 'Open to clarification',
        poor: 'Rigid or assumptive',
        why: 'Feedback is based on perception and may miss context. Inviting clarity (e.g., "Let me know if I\'m missing anything") shows humility and encourages dialogue.'
      }
    ]
  },

  caseStudy: {
    title: 'Mini Case Study / Story',
    story: 'Sarah, an engineer, notices her peer constantly missing deadlines, slowing the team. Instead of venting or complaining to the manager, she says, "Hey, do you have a minute? I noticed the last few handoffs came in late, and it\'s been hard to keep things on track. Can I share a few thoughts?" The peer thanks her for being direct. They discuss causes and agree on a new check-in schedule. Sarah kept it brief, focused on impact, and didn\'t assume intent.'
  },

  practiceOpportunities: {
    soloPractice: [
      'Write one piece of feedback using the SBI model (Situation, Behavior, Impact).',
      'Record yourself delivering it. Review tone, clarity, and neutrality.'
    ],
    rolePlay: [
      'Practice a feedback moment with a peer. Then switch roles.',
      'Debrief: What worked? What felt awkward?'
    ],
    liveApplication: [
      'Offer one micro-feedback comment after your next team meeting.',
      'Consider embedding a video simulation with defensive vs. open reactions.'
    ]
  },

  selfReflectionPrompts: [
    'When did I last avoid feedback I knew I should give?',
    'What fears hold me back?',
    'How do I receive feedback—graciously or defensively?',
    'What feedback delivery style has worked best for me in the past?',
    'How can I make feedback feel more collaborative?'
  ],

  leaderTips: [
    'Normalize giving and receiving feedback regularly in your team.',
    'Model vulnerability by asking for specific feedback yourself.',
    'Recognize and reward those who give helpful feedback to others.',
    'Create structured opportunities for feedback exchange.',
    'Help team members understand that feedback is about growth, not criticism.'
  ],

  feedbackPhrases: [
    '"I noticed that..." (observation without judgment)',
    '"When I saw/heard..." (specific situation)',
    '"The impact was..." (focus on effects, not intent)',
    '"What are your thoughts?" (invite dialogue)',
    '"How can we work on this together?" (collaborative approach)',
    '"What happened there?" (curious inquiry instead of accusation)'
  ],

  practicePrompts: [
    'Write out exactly how you would phrase feedback for the SBI model (Situation, Behavior, Impact). Learn more about the SBI model.',
    'What are some phrases of feedback you would give if you had to coach that person?',
    'Write out a piece of feedback you need to give but didn\'t. What\'s holding you back?'
  ],

  coachableMoments: [
    'When someone asks for your opinion on their work',
    'After observing a team member create confusion or frustration',
    'During regular 1:1 meetings with direct reports',
    'After noticing specific behaviors',
    'When someone makes a mistake they may not realize',
    'When celebrating wins and successful outcomes'
  ],

  learningResources: [
    {
      type: 'Article',
      title: 'Radical Candor™ by Kim Scott',
      icon: '📖'
    },
    {
      type: 'Podcast',
      title: 'HBR: The Art of Giving & Receiving Feedback',
      icon: '🎧'
    },
    {
      type: 'Video',
      title: 'Radical Candor: YouTube Keynote',
      icon: '📺'
    },
    {
      type: 'Simulation',
      title: 'Interactive feedback scenario walkthrough',
      icon: '🎮'
    },
    {
      type: 'Tool',
      title: 'Feedback delivery journal & checklist',
      icon: '🛠️'
    }
  ],

  skillTracker: {
    selfAssessment: 'Self-assessment quiz: Identify your maturity level.',
    peerFeedback: 'Peer feedback form: "How helpful was my last feedback to you?"',
    managerReview: 'Manager assessment of feedback quality in team interactions.'
  },

  suggestedActions: [
    'Ask "Can I offer an observation?" before diving in.',
    'Share feedback within 24 hours of an event.',
    'Praise publicly. Critique privately.',
    'Keep a weekly log of feedback moments.',
    'Use neutral, factual language ("I noticed...", "The impact was...").'
  ],

  relatedSkills: [
    'Difficult Conversations',
    'Professional Assertiveness',
    'Emotional Regulation',
    'Strategic Communication',
    'Active Listening'
  ]
};