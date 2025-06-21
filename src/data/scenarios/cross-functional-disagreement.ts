import { Scenario } from '../../types';

export const crossFunctionalDisagreementScenario: Scenario = {
  id: 'cross-functional-disagreement',
  title: 'Cross-Functional Feature Disagreement',
  description: 'Navigate a technical disagreement with a UX designer about feature implementation that\'s blocking development progress.',
  situation: 'You\'re a frontend developer working on a new user dashboard feature. The UX designer, Maya, has created a design that requires complex animations and micro-interactions that you believe will significantly impact page performance and loading times. When you raised these concerns, Maya insisted that the user experience is paramount and that "technical limitations shouldn\'t compromise good design." The feature is due for review with the product manager in two days, and you need to find a path forward that works for both the user experience and technical performance.',
  roleContext: {
    yourRole: 'Frontend Developer',
    teamSize: 'Cross-functional product team of 6 people',
    timeline: 'Feature review scheduled in 2 days, sprint ends in 1 week',
    stakes: 'User dashboard is a key feature for Q4 product goals',
    pressure: 'Product manager expects demo-ready feature, performance metrics are being monitored',
    stakeholders: 'UX Designer (Maya), Product Manager, Backend Developer, QA Engineer',
    history: 'You and Maya have worked well together on previous features'
  },
  choices: [
    {
      id: 'implement-as-designed',
      text: 'Implement the design exactly as specified and address performance issues later if they arise.',
      feedback: 'This approach maintains team harmony and respects the design process, but may create technical debt and performance problems that are harder to fix later.',
      consequences: {
        immediate: 'Maya feels supported and the design vision is preserved for the upcoming review.',
        shortTerm: 'Performance issues may emerge during testing, requiring significant rework under time pressure.',
        longTerm: 'Technical debt accumulates, and you may be seen as someone who doesn\'t advocate for technical best practices.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 3 },
        { area: 'emotional-intelligence', impact: 6 },
        { area: 'decision-making', impact: 4 }
      ]
    },
    {
      id: 'refuse-implementation',
      text: 'Firmly decline to implement the design as specified, insisting on a simpler version for performance reasons.',
      feedback: 'While this protects technical quality, it may damage your relationship with Maya and could be seen as inflexible or not collaborative.',
      consequences: {
        immediate: 'Maya feels frustrated and may view you as difficult to work with or not understanding user needs.',
        shortTerm: 'The design-development relationship becomes strained, affecting future collaboration.',
        longTerm: 'You may be seen as someone who blocks creative solutions, potentially limiting your involvement in design decisions.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 3 },
        { area: 'decision-making', impact: 5 }
      ]
    },
    {
      id: 'collaborative-solution',
      text: 'Propose working together to find alternative approaches that achieve the design goals while maintaining performance.',
      feedback: 'This collaborative approach respects both design and technical concerns while building stronger cross-functional relationships and often leads to innovative solutions.',
      consequences: {
        immediate: 'Maya feels heard and you both engage in creative problem-solving for the feature.',
        shortTerm: 'You develop a solution that balances user experience and performance, strengthening your working relationship.',
        longTerm: 'You build a reputation as a collaborative problem-solver who can bridge technical and design concerns effectively.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 8 }
      ]
    },
    {
      id: 'escalate-to-pm',
      text: 'Bring the disagreement to the product manager to make the final decision on priorities.',
      feedback: 'While this ensures a decision gets made, it may signal inability to resolve cross-functional conflicts independently and could damage your relationship with Maya.',
      consequences: {
        immediate: 'The product manager makes a decision, but both you and Maya may feel like the collaboration failed.',
        shortTerm: 'Future design-development discussions may be more formal and less collaborative.',
        longTerm: 'You may be seen as someone who escalates rather than solves cross-functional challenges independently.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 4 },
        { area: 'decision-making', impact: 5 }
      ]
    },
    {
      id: 'prototype-alternatives',
      text: 'Suggest creating quick prototypes of different approaches to test performance and user experience trade-offs.',
      feedback: 'This data-driven approach provides objective evidence for decision-making while demonstrating technical initiative and respect for user experience research.',
      consequences: {
        immediate: 'Maya appreciates the user-centered approach, and you both engage in evidence-based problem-solving.',
        shortTerm: 'You develop solutions based on actual data rather than assumptions, leading to better outcomes.',
        longTerm: 'You build a reputation as someone who uses data and prototyping to solve complex cross-functional challenges.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 9 }
      ]
    },
    {
      id: 'compromise-solution',
      text: 'Propose implementing the core interactions now and adding the complex animations in a future iteration.',
      feedback: 'This phased approach allows for immediate progress while preserving the design vision for future enhancement, though it requires careful planning to ensure follow-through.',
      consequences: {
        immediate: 'Both you and Maya feel heard, and the feature can move forward for the upcoming review.',
        shortTerm: 'The core functionality is delivered on time, with a clear plan for design enhancements.',
        longTerm: 'You build a reputation for finding practical solutions that balance multiple concerns and timelines.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 7 }
      ]
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'foundational',
  xpReward: 50
};