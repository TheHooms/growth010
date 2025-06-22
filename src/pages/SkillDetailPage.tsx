import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  Play, 
  FileText, 
  Target,
  CheckCircle,
  ArrowRight,
  Users
} from 'lucide-react';
import { getSkillById, getRelatedSkills, skillCategories } from '../data/skills';
import SkillCard from '../components/SkillCard';

const SkillDetailPage: React.FC = () => {
  const { skillId } = useParams<{ skillId: string }>();
  
  const skill = skillId ? getSkillById(skillId) : null;
  const relatedSkills = skillId ? getRelatedSkills(skillId) : [];
  const category = skill ? skillCategories.find(cat => cat.id === skill.category) : null;

  if (!skill) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Skill not found</h2>
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

  const getLevelColor = (level: string) => {
    return level === 'foundational' 
      ? 'bg-green-100 text-green-800 border-green-200' 
      : 'bg-purple-100 text-purple-800 border-purple-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to={category ? `/library/skills/category/${category.id}` : '/library/skills'}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to {category ? category.name : 'Skills Directory'}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{skill.name}</h1>
                  {category && (
                    <p className="text-blue-600 font-medium mb-4">{category.name}</p>
                  )}
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">{skill.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center text-gray-600">
                  <Clock size={16} className="mr-2" />
                  <span className="text-sm">{skill.estimatedTime}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <BookOpen size={16} className="mr-2" />
                  <span className="text-sm">{skill.relatedScenarios.length} scenarios</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Target size={16} className="mr-2" />
                  <span className="text-sm">{skill.level} level</span>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            {skill.prerequisites && skill.prerequisites.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-semibold text-amber-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Prerequisites
                </h3>
                <p className="text-amber-700 text-sm mb-3">
                  We recommend mastering these skills first:
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.prerequisites.map((prereq) => (
                    <span 
                      key={prereq}
                      className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full border border-amber-300"
                    >
                      {prereq.charAt(0).toUpperCase() + prereq.slice(1).replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Techniques */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Techniques</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skill.keyTechniques.map((technique, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-bold text-xs">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{technique}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Applications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Applications</h3>
              <div className="space-y-3">
                {skill.practicalApplications.map((application, index) => (
                  <div key={index} className="flex items-start">
                    <Target className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Learning Resources</h3>
              
              <div className="space-y-6">
                {/* Articles */}
                {skill.resources.articles && skill.resources.articles.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Articles
                    </h4>
                    <div className="space-y-3">
                      {skill.resources.articles.map((article, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h5 className="font-medium text-gray-900">{article.title}</h5>
                            <p className="text-sm text-gray-600">{article.readingTime}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Videos */}
                {skill.resources.videos && skill.resources.videos.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <Play className="w-4 h-4 mr-2" />
                      Videos
                    </h4>
                    <div className="space-y-3">
                      {skill.resources.videos.map((video, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h5 className="font-medium text-gray-900">{video.title}</h5>
                            <p className="text-sm text-gray-600">{video.duration}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Exercises */}
                {skill.resources.exercises && skill.resources.exercises.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Practice Exercises
                    </h4>
                    <div className="space-y-3">
                      {skill.resources.exercises.map((exercise, index) => (
                        <div key={index} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h5 className="font-medium text-blue-900 mb-2">{exercise.title}</h5>
                          <p className="text-blue-800 text-sm mb-2">{exercise.description}</p>
                          <p className="text-blue-600 text-xs">Time required: {exercise.timeRequired}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/scenarios"
                  className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Practice in Scenarios
                </Link>
                <button className="block w-full bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Add to Learning Plan
                </button>
                <button className="block w-full bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Share Skill
                </button>
              </div>
            </div>

            {/* Related Scenarios */}
            {skill.relatedScenarios.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Related Scenarios
                </h3>
                <div className="space-y-2">
                  {skill.relatedScenarios.map((scenarioId) => (
                    <div key={scenarioId} className="text-sm">
                      <Link
                        to={`/scenarios/${scenarioId}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {scenarioId.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Skills */}
            {relatedSkills.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Related Skills</h3>
                <div className="space-y-4">
                  {relatedSkills.map((relatedSkill) => (
                    <Link
                      key={relatedSkill.id}
                      to={`/library/skills/${relatedSkill.id}`}
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 text-sm">{relatedSkill.name}</h4>
                      <p className="text-gray-600 text-xs mt-1">{relatedSkill.estimatedTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetailPage;