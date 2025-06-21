import { Scenario } from '../../types';

export const careerGrowth1on1Scenario: Scenario = {
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
};