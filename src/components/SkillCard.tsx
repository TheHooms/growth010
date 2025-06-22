import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Skill } from '../data/skills';

interface SkillCardProps {
  skill: Skill;
  showCategory?: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, showCategory = false }) => {
  const getLevelColor = (level: string) => {
    return level === 'foundational' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-purple-100 text-purple-800';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'communication-feedback': 'text-blue-600',
      'leadership-influence': 'text-purple-600',
      'relationship-management': 'text-green-600',
      'strategic-analytical': 'text-indigo-600',
      'personal-development': 'text-orange-600',
      'project-process': 'text-teal-600'
    };
    return colors[category] || 'text-gray-600';
  };

  return (
    <Link 
      to={`/library/skills/${skill.id}`}
      className="block bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h3>
            {showCategory && (
              <p className={`text-sm font-medium mb-2 ${getCategoryColor(skill.category)}`}>
                {skill.category.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' & ')}
              </p>
            )}
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(skill.level)}`}>
            {skill.level}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{skill.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {skill.estimatedTime}
          </div>
          <div className="flex items-center">
            <BookOpen size={14} className="mr-1" />
            {skill.relatedScenarios.length} scenarios
          </div>
        </div>
        
        <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
          Learn more
          <ArrowRight size={14} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default SkillCard;