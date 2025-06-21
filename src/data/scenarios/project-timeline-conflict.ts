import { Scenario } from '../../types';

export const projectTimelineConflictScenario: Scenario = {
  id: 'project-timeline-conflict',
  title: 'Project Timeline and Quality Standards Conflict',
  description: 'Navigate a disagreement with a project coordinator about rushing a deliverable that could compromise quality standards.',
  situation: 'You\'re a data analyst working on a quarterly market research report that informs major strategic decisions. The project coordinator, Marcus, just informed you that the deadline has been moved up by one week because "leadership needs the insights for an unexpected board meeting." However, you\'re still waiting for critical data from two key sources, and rushing the analysis could lead to incomplete or inaccurate conclusions. Marcus insists that "something is better than nothing" and that you can "update it later if needed." You know that once leadership sees preliminary data, it often becomes the basis for decisions regardless of later updates.',
  roleContext: {
    yourRole: 'Senior Data Analyst',
    teamSize: 'Analytics team of 4 people plus project coordination',
    timeline: 'Original deadline in 2 weeks, now moved to 1 week',
    stakes: 'Quarterly strategic decisions and board presentation',
    pressure: 'Unexpected board meeting driving accelerated timeline',
    stakeholders: 'Project Coordinator (Marcus), Leadership Team, Board Members, Analytics Team',
    history: 'You and Marcus have worked together on multiple successful projects'
  },
  choices: [
    {
      id: 'rush-delivery',
      text: 'Agree to deliver the report with available data, clearly noting limitations and missing information.',
      feedback: 'While this meets the immediate timeline need, incomplete analysis could lead to poor strategic decisions and may damage your reputation for analytical rigor.',
      consequences: {
        immediate: 'Marcus feels supported and leadership gets something for their board meeting.',
        shortTerm: 'Leadership may make decisions based on incomplete data, potentially leading to suboptimal outcomes.',
        longTerm: 'Your reputation for analytical quality may suffer, and you may be seen as someone who compromises standards under pressure.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 3 },
        { area: 'emotional-intelligence', impact: 6 },
        { area: 'decision-making', impact: 4 }
      ]
    },
    {
      id: 'refuse-timeline',
      text: 'Firmly refuse to compromise the analysis timeline, insisting that quality data requires the full two weeks.',
      feedback: 'While this protects analytical integrity, it may be seen as inflexible and not understanding urgent business needs.',
      consequences: {
        immediate: 'Marcus feels frustrated and may view you as not understanding business priorities.',
        shortTerm: 'Leadership may be disappointed by the lack of data for their board meeting.',
        longTerm: 'You may be seen as difficult to work with under pressure, potentially limiting your involvement in urgent projects.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 3 },
        { area: 'decision-making', impact: 5 }
      ]
    },
    {
      id: 'collaborative-solution',
      text: 'Work with Marcus to identify what specific insights leadership needs most urgently and propose a phased delivery approach.',
      feedback: 'This collaborative approach respects both analytical standards and business urgency, often leading to solutions that satisfy all stakeholders.',
      consequences: {
        immediate: 'Marcus feels supported and you both engage in creative problem-solving for leadership needs.',
        shortTerm: 'Leadership gets the most critical insights on time while maintaining analytical quality.',
        longTerm: 'You build a reputation as a collaborative professional who can balance analytical rigor with business needs.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 8 }
      ]
    },
    {
      id: 'escalate-decision',
      text: 'Bring the timeline conflict to your analytics manager to make the final decision on quality vs. speed trade-offs.',
      feedback: 'While this ensures a decision gets made, it may signal inability to resolve project conflicts independently and could damage your relationship with Marcus.',
      consequences: {
        immediate: 'The analytics manager makes a decision, but both you and Marcus may feel the collaboration failed.',
        shortTerm: 'Future project discussions may be more formal and less collaborative.',
        longTerm: 'You may be seen as someone who escalates rather than solves project challenges independently.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 4 },
        { area: 'decision-making', impact: 5 }
      ]
    },
    {
      id: 'propose-alternatives',
      text: 'Suggest alternative approaches like preliminary insights from existing data or external benchmarks to provide immediate value.',
      feedback: 'This creative approach demonstrates analytical thinking while being responsive to business needs, often leading to innovative solutions.',
      consequences: {
        immediate: 'Marcus appreciates the creative problem-solving and leadership gets some insights for their meeting.',
        shortTerm: 'You demonstrate analytical creativity while maintaining quality standards.',
        longTerm: 'You build a reputation as a resourceful analyst who can find solutions under pressure.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 8 }
      ]
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};