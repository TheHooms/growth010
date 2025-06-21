import { Scenario } from '../../types';

export const resourceAllocationConflictScenario: Scenario = {
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
};