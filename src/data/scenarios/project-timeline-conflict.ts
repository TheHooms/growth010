import { Scenario } from '../../types';

export const projectTimelineConflictScenario: Scenario = {
  id: 'project-timeline-conflict',
  title: 'Project Timeline Conflict',
  description: 'Resolve a timeline conflict between two departments under tight deadlines and high visibility.',
  situation: 'You're a product designer embedded in a cross-functional team. Engineering estimates the new feature will take 3 months, but marketing has already committed to clients that it will be ready in 6 weeks. The design is central to the product experience, and you're being asked to reduce scope or speed up timelines to help the team move faster. Both sides are looking to you to help find a path forward.',
  roleContext: {
    yourRole: 'Product Designer',
    stakeholders: 'Engineering Manager, Marketing Lead, Product Manager, Clients',
    timeline: 'Marketing promised delivery in 6 weeks; engineering needs 3 months',
    stakes: 'User experience quality, team delivery, client expectations',
    history: 'Previous releases have also required late design trade-offs to meet deadlines.'
  },
  choices: [
    {
      id: 'side-with-engineering',
      text: 'Support the engineering timeline and recommend sticking to quality-focused design processes.',
      feedback: 'You're advocating for realistic delivery and user-centered design, but may be seen as inflexible by marketing or leadership.',
      consequences: {
        immediate: 'Engineering appreciates the support; marketing pushes back.',
        shortTerm: 'Some client frustration; design quality is maintained.',
        longTerm: 'Your reputation for design integrity grows, though others may view you as resistant to trade-offs.'
      },
      impactAreas: [
        { area: 'decision-making', impact: 6 },
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 5 }
      ]
    },
    {
      id: 'compromise-solution',
      text: 'Propose a scaled-back version of the design for 6 weeks with a roadmap to enhance later.',
      feedback: 'This shows design flexibility and collaboration. The risk is that follow-up improvements may not happen if priorities shift.',
      consequences: {
        immediate: 'Teams feel progress is possible.',
        shortTerm: 'Clients get a usable first version.',
        longTerm: 'You're seen as pragmatic and adaptive, but some design debt may accumulate.'
      },
      impactAreas: [
        { area: 'decision-making', impact: 7 },
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 7 }
      ]
    },
    {
      id: 'escalate-to-manager',
      text: 'Raise the conflict with your design manager and ask for support navigating trade-offs.',
      feedback: 'This brings in needed support but may signal you're not ready to lead through ambiguity on your own.',
      consequences: {
        immediate: 'You get guidance and relief from pressure.',
        shortTerm: 'The manager aligns with product leadership.',
        longTerm: 'Could be perceived as lacking ownership if overused.'
      },
      impactAreas: [
        { area: 'decision-making', impact: 3 },
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 4 }
      ]
    },
    {
      id: 'empathy-framing-facilitation',
      text: 'Invite engineering and marketing to a shared session where you map user needs, constraints, and options together.',
      feedback: 'This reflects leadership through facilitation. You use empathy and shared understanding to guide others toward aligned decisions.',
      consequences: {
        immediate: 'Tension lowers as perspectives are heard.',
        shortTerm: 'Consensus emerges around a phased plan.',
        longTerm: 'You build a reputation as a collaborative, user-centered partner.'
      },
      impactAreas: [
        { area: 'decision-making', impact: 8 },
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 9 }
      ]
    },
    {
      id: 'client-check-in',
      text: 'Ask the PM to connect you with client-facing teams to better understand what matters most to users for the first launch.',
      feedback: 'This approach shows curiosity and user empathy. It may help prioritize what's essential while building trust across functions.',
      consequences: {
        immediate: 'You gain user insight and marketing feels included.',
        shortTerm: 'Design scope adjusts with real input.',
        longTerm: 'You gain credibility as someone who puts users first within real-world constraints.'
      },
      impactAreas: [
        { area: 'decision-making', impact: 7 },
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 8 }
      ]
    }
  ],
  growthAreas: ['decision-making', 'assertiveness', 'emotional-intelligence'],
  difficulty: 'applied',
  xpReward: 75
};