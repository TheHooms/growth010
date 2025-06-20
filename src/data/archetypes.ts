import { Archetype } from '../types';

export const archetypes: Archetype[] = [
  {
    id: 'visionary',
    name: 'The Visionary',
    description: 'You see the big picture and inspire others with your ideas. You\'re naturally forward-thinking and can articulate compelling futures that motivate teams.',
    strengths: [
      'Strategic thinking',
      'Creative problem-solving',
      'Inspiring others',
      'Seeing future possibilities'
    ],
    challenges: [
      'May overlook practical details',
      'Can be perceived as unrealistic',
      'Might struggle with day-to-day execution',
      'Sometimes resistant to others\' input'
    ],
    growthAreas: ['decision-making', 'self-awareness', 'assertiveness']
  },
  {
    id: 'executor',
    name: 'The Executor',
    description: 'You excel at getting things done and following through on commitments. You\'re reliable, organized, and focused on results.',
    strengths: [
      'Strong follow-through',
      'Organized and methodical',
      'Practical problem-solving',
      'Reliable performance'
    ],
    challenges: [
      'May miss opportunities for innovation',
      'Can focus too much on process over people',
      'Might struggle with ambiguity',
      'Sometimes resistant to change'
    ],
    growthAreas: ['decision-making', 'self-awareness', 'emotional-intelligence']
  },
  {
    id: 'connector',
    name: 'The Connector',
    description: 'You build bridges between people and ideas. You\'re empathetic, communicative, and skilled at facilitating collaboration.',
    strengths: [
      'Strong interpersonal skills',
      'Empathy and emotional intelligence',
      'Building consensus',
      'Creating psychological safety'
    ],
    challenges: [
      'May avoid necessary conflict',
      'Can struggle with making tough decisions alone',
      'Might prioritize relationships over results',
      'Sometimes too dependent on others\' input'
    ],
    growthAreas: ['assertiveness', 'decision-making', 'self-awareness']
  },
  {
    id: 'analyst',
    name: 'The Analyst',
    description: 'You excel at critical thinking and data-driven decisions. You\'re thorough, logical, and skilled at uncovering insights others miss.',
    strengths: [
      'Critical thinking',
      'Data analysis',
      'Logical reasoning',
      'Attention to detail'
    ],
    challenges: [
      'May overthink decisions',
      'Can struggle with quick, intuitive choices',
      'Might appear detached or critical',
      'Sometimes misses emotional context'
    ],
    growthAreas: ['decision-making', 'emotional-intelligence', 'assertiveness']
  }
];

export const getArchetypeById = (id: string): Archetype | undefined => {
  return archetypes.find(archetype => archetype.id === id);
};