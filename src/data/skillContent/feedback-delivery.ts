export const feedbackDeliveryContent = {
  skillId: 'feedback-delivery',
  skillName: 'Feedback Delivery',
  theme: 'Communication & Feedback',
  
  definition: {
    title: 'Skill Definition & Importance',
    description: 'Feedback Delivery is the ability to share observations, praise, or critique in a timely, respectful, and actionable way that promotes learning, alignment, and trust.',
    coreMessage: 'Feedback is a gift. It is something the giver offers to help the receiver grow—not to punish, control, or release frustration.',
    whyItMatters: 'Effective feedback fuels growth, shapes performance, builds culture, and strengthens relationships. Poor or avoided feedback leads to confusion, stagnation, and tension.',
    trustFoundation: 'Feedback only works when there\'s psychological safety. Without trust, even constructive feedback may feel threatening.',
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
      description: 'Avoids giving feedback or shares only positive praise vaguely.'
    },
    {
      level: 2,
      name: 'Emerging',
      description: 'Attempts to give feedback but struggles with timing, delivery, or tone.'
    },
    {
      level: 3,
      name: 'Practicing',
      description: 'Gives feedback that is timely, clear, and focused on behavior.'
    },
    {
      level: 4,
      name: 'Fluent',
      description: 'Adapts feedback to different personalities, roles, and situations.'
    },
    {
      level: 5,
      name: 'Shaping',
      description: 'Coaches others to give feedback effectively and models best practices consistently.'
    }
  ],

  microScenarios: [
    {
      id: 1,
      title: 'Meeting Dynamics',
      scenario: 'A peer dominates meetings, sidelining quieter voices.',
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
      scenario: 'A teammate submitted work with errors.',
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
    }
  ],

  roleLevelVariants: [
    {
      role: 'Individual Contributor',
      focus: 'Gives and receives peer feedback regularly, with tact and intent.'
    },
    {
      role: 'Manager',
      focus: 'Provides structured, developmental feedback during projects and reviews.'
    },
    {
      role: 'Cross-Functional Lead',
      focus: 'Shares feedback across functions where authority is shared.'
    },
    {
      role: 'Executive',
      focus: 'Models high-quality feedback to reinforce culture and strategy.'
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
    story: 'Maya, an engineer, notices her peer constantly missing deadlines, slowing the team. Instead of venting or complaining to the manager, she says, "Hey, do you have a minute? I noticed the last few handoffs came in late, and it\'s been hard to keep things on track. Can I share a few thoughts?" The peer thanks her for being direct. They discuss causes and agree on a new check-in schedule. Maya kept it brief, focused on impact, and didn\'t assume intent.'
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
      'Give one micro-feedback comment after your next team meeting.',
      'Consider embedding a video simulation with defensive vs. open reactions.'
    ]
  },

  selfReflectionPrompts: [
    'When did I last avoid feedback I knew I should give?',
    'What fears hold me back?',
    'How do I receive feedback—graciously or defensively?',
    'What feedback delivery style has worked best for me in the past?'
  ],

  suggestedActions: [
    'Ask: "Can I offer an observation?" before diving in.',
    'Share feedback within 24 hours of an event.',
    'Praise publicly. Critique privately.',
    'Keep a weekly log of feedback moments.',
    'Use neutral, factual language ("I noticed...," "The impact was...").'
  ],

  relatedSkills: [
    'Difficult Conversations',
    'Professional Assertiveness',
    'Emotional Regulation',
    'Strategic Communication',
    'Active Listening'
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
    selfAssessment: 'Identify your maturity level.',
    peerFeedbackForm: 'How helpful was my last feedback to you?',
    managerCheck: 'Rate my feedback delivery skills 1-10.'
  }
};