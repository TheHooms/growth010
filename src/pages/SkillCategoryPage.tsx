import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { skillCategories, getSkillsByCategory } from '../data/skills';
import SkillCard from '../components/SkillCard';

const SkillCategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const category = skillCategories.find(cat => cat.id === categoryId);
  const skills = categoryId ? getSkillsByCategory(categoryId) : [];

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Category not found</h2>
            <Link
              to="/library/skills"
              className="text-blue-600 hover:text-blue-800"
            >
              Return to Skills Directory
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const foundationalSkills = skills.filter(skill => skill.level === 'foundational');
  const bridgeSkills = skills.filter(skill => skill.level === 'bridge');
  const advancedSkills = skills.filter(skill => skill.level === 'advanced');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/library/skills"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Skills Directory
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          <p className="text-xl text-gray-600 mt-2">{category.description}</p>
        </div>

        {/* Foundational Skills */}
        {foundationalSkills.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 font-bold text-sm">F</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Foundational Skills ({foundationalSkills.length})
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Core skills that form the foundation for this category. Start here if you're new to these concepts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foundationalSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {/* Applied Skills */}
        {/* Bridge Skills */}
        {bridgeSkills.length > 0 && (
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold text-sm">B</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Bridge Skills ({bridgeSkills.length})
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Intermediate skills that connect foundational concepts to advanced applications. These build on foundational skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bridgeSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {/* Advanced Skills */}
        {advancedSkills.length > 0 && (
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold text-sm">A</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Advanced Skills ({advancedSkills.length})
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Complex skills for leadership and expertise. These build on bridge skills and require significant practice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {skills.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-600">No skills found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillCategoryPage;