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
      focus: 'Shares and receives feedback among peers. Focuses on behavior, collaboration, and mutual growth.'
    },
    {
      role: 'Manager',
      focus: 'Provides structured and performance feedback regularly. Balances direction with development.'
    },
    {
      role: 'Partner',
      focus: 'Shares feedback across functions where authority is shared. Maintains mutual respect.'
    },
    {
      role: 'Director & Executive',
      focus: 'Models high-quality feedback to reinforce culture and strategy. Builds psychological safety.'
    }
  ],

  commonPitfalls: {
    goodFeedback: [
      'Timely',
      'Private (criticism)',
      'Public (praise)',
      'Actionable',
      'Behavior-focused',
      'Respectful',
      'With permission'
    ],
    badFeedback: [
      'Bottled up or delayed',
      'Public or shaming',
      'Private or hidden praise',
      'Vague or emotional',
      'Personal attacks',
      'Blunt, harsh, or reactive',
      'Imposed or forced'
    ],
    alwaysAsk: '"Would now be a good time for some feedback?" or "Are you open to hearing something I\'ve noticed?"'
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

  skillBuildingResources: [
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
  ]
};