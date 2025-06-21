import { Scenario } from '../../types';

export const performanceReviewDisagreementScenario: Scenario = {
  id: 'performance-review-disagreement',
  title: 'Performance Review Disagreement',
  description: 'Navigate a situation where you strongly disagree with your manager\'s assessment of your performance.',
  situation: 'Your annual performance review rated you as "meets expectations" despite what you believe was an exceptional year. You led a successful product launch, mentored two junior colleagues, and exceeded your sales targets by 15%. Your manager cited "communication issues" and "need for more strategic thinking" as areas holding you back from a higher rating. You feel this assessment is unfair and doesn\'t reflect your actual contributions.',
  roleContext: {
    yourRole: 'Senior Marketing Specialist',
    teamSize: '8-person marketing team',
    timeline: 'Performance review cycle just completed, promotion decisions happening in 2 weeks',
    stakes: 'Promotion to Marketing Manager role and 20% salary increase at stake',
    pressure: 'You know two peers received "exceeds expectations" ratings for what you consider lesser contributions',
    stakeholders: 'Direct manager, HR Business Partner, Marketing Director, junior team members you mentored',
    history: 'This is your third year in the role, previous reviews were "exceeds expectations"'
  },
  choices: [
    {
      id: 'formal-review-request',
      text: 'Request a formal review of your performance assessment through HR processes.',
      feedback: 'This approach ensures proper documentation and process, but may strain your relationship with your manager and could be seen as confrontational.',
      consequences: {
        immediate: 'Your manager feels challenged and the relationship becomes more formal and distant.',
        shortTerm: 'HR review may or may not change the rating, but the process creates tension in daily interactions.',
        longTerm: 'You may get a fair assessment, but your manager might be less likely to advocate for you in future opportunities.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 8 },
        { area: 'emotional-intelligence', impact: 3 },
        { area: 'decision-making', impact: 6 }
      ]
    },
    {
      id: 'direct-conversation',
      text: 'Schedule a private meeting with your manager to discuss the assessment and seek specific feedback.',
      feedback: 'This direct approach shows maturity and openness to feedback while advocating for yourself. It maintains the relationship while addressing your concerns.',
      consequences: {
        immediate: 'Your manager appreciates the professional approach and is willing to have an open dialogue.',
        shortTerm: 'You gain clarity on expectations and may be able to address the specific concerns raised.',
        longTerm: 'Stronger working relationship and clearer path to improvement, though the current rating may not change.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 7 },
        { area: 'emotional-intelligence', impact: 8 },
        { area: 'decision-making', impact: 7 }
      ]
    },
    {
      id: 'gather-evidence',
      text: 'Compile detailed documentation of your achievements and request a follow-up discussion.',
      feedback: 'This methodical approach provides concrete evidence for your case and shows professionalism, though it may come across as defensive.',
      consequences: {
        immediate: 'Your manager sees your preparation and takes your concerns more seriously.',
        shortTerm: 'The documentation helps clarify your contributions, potentially leading to a revised assessment.',
        longTerm: 'You establish a pattern of documenting achievements, which helps in future reviews.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 5 },
        { area: 'decision-making', impact: 8 }
      ]
    },
    {
      id: 'seek-peer-feedback',
      text: 'Ask colleagues and mentees for feedback to better understand the "communication issues" mentioned.',
      feedback: 'This shows self-awareness and genuine interest in improvement, though it may not directly address the rating dispute.',
      consequences: {
        immediate: 'Colleagues appreciate being asked and provide valuable insights into your working style.',
        shortTerm: 'You gain a better understanding of how others perceive you and can address any real issues.',
        longTerm: 'Improved self-awareness and stronger relationships, positioning you better for future reviews.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 4 },
        { area: 'emotional-intelligence', impact: 9 },
        { area: 'decision-making', impact: 5 }
      ]
    },
    {
      id: 'accept-and-improve',
      text: 'Accept the rating gracefully and ask for a specific development plan to address the concerns.',
      feedback: 'This mature response focuses on growth rather than dispute, though it may not address potential unfairness in the current assessment.',
      consequences: {
        immediate: 'Your manager is impressed by your professionalism and willingness to grow.',
        shortTerm: 'You get clear guidance on improvement areas and strong manager support for development.',
        longTerm: 'Strong relationship with your manager and clear path to promotion, though you may miss this cycle.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 3 },
        { area: 'emotional-intelligence', impact: 7 },
        { area: 'decision-making', impact: 6 }
      ]
    },
    {
      id: 'propose-360-feedback',
      text: 'Suggest implementing a 360-degree feedback process to get a more comprehensive view of your performance.',
      feedback: 'This innovative approach shows leadership thinking and could benefit the entire team, while addressing your specific situation.',
      consequences: {
        immediate: 'Your manager is intrigued by the suggestion and sees your strategic thinking.',
        shortTerm: 'Implementation takes time, but you demonstrate leadership in improving team processes.',
        longTerm: 'You become known as someone who drives positive change, though immediate rating concerns remain unresolved.'
      },
      impactAreas: [
        { area: 'assertiveness', impact: 6 },
        { area: 'emotional-intelligence', impact: 6 },
        { area: 'decision-making', impact: 9 }
      ]
    }
  ],
  growthAreas: ['assertiveness', 'emotional-intelligence', 'decision-making'],
  difficulty: 'applied',
  xpReward: 75
};