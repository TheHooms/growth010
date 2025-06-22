import React, { useState, useEffect } from 'react';
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
  Users,
  Brain,
  ChevronRight,
  Zap,
  Star
} from 'lucide-react';
import { getSkillById, getRelatedSkills, skillCategories } from '../data/skills';
import { feedbackDeliveryContent } from '../data/skillContent/feedback-delivery';
import SkillContentRenderer from '../components/SkillContentRenderer';
import Card from '../components/Card';
import Button from '../components/Button';

const SkillDetailPage: React.FC = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const [showFullContent, setShowFullContent] = useState(false);
  
  const skill = skillId ? getSkillById(skillId) : null;
  const relatedSkills = skillId ? getRelatedSkills(skillId) : [];
  const category = skill ? skillCategories.find(cat => cat.id === skill.category) : null;

  // Check if we have detailed content for this skill
  const hasDetailedContent = skillId === 'feedback-delivery';
  const skillContent = hasDetailedContent ? feedbackDeliveryContent : null;

  useEffect(() => {
    // Reset content view when skill changes
    setShowFullContent(false);
  }, [skillId]);

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

  const getLevelBadge = (level: string) => {
    const levelClasses = {
      'foundational': 'bg-green-100 text-green-800 border border-green-200',
      'bridge': 'bg-blue-100 text-blue-800 border border-blue-200',
      'advanced': 'bg-purple-100 text-purple-800 border border-purple-200'
    };
    
    return (
      <span className={`text-sm font-medium px-3 py-1 rounded-full ${levelClasses[level as keyof typeof levelClasses]}`}>
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </span>
    );
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

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="px-8 py-10 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center mb-3">
                  {category && (
                    <span className="text-blue-100 text-sm bg-white/10 px-3 py-1 rounded-full">
                      {category.name}
                    </span>
                  )}
                  {getLevelBadge(skill.level)}
                </div>
                <h1 className="text-3xl font-bold mb-3">{skill.name}</h1>
                <p className="text-blue-100 max-w-2xl mb-4">{skill.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{skill.estimatedTime}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen size={16} className="mr-2" />
                    <span>{skill.relatedScenarios.length} scenarios</span>
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="mr-2" />
                    <span>High-impact skill</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0">
                <Link
                  to="/scenarios"
                  className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  <Zap size={18} className="mr-2" />
                  Practice Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Skill Engine Insights */}
            {skillId === 'feedback-delivery' && (
              <Card className="border border-blue-200 bg-blue-50">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">AI Skill Engine Insights</h3>
                    <p className="text-blue-800 mb-4">
                      Feedback Delivery is a high-impact skill that forms the foundation for effective workplace relationships. 
                      Based on your profile, this skill would significantly enhance your influence and team effectiveness.
                    </p>
                    <Link
                      to="/skill-engine"
                      className="text-blue-700 hover:text-blue-900 text-sm font-medium flex items-center"
                    >
                      View Full Skill Analysis
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            )}

            {/* Prerequisites */}
            {skill.prerequisites && skill.prerequisites.length > 0 && (
              <Card className="border border-amber-200 bg-amber-50">
                <div className="flex items-start">
                  <div className="p-3 bg-amber-100 rounded-lg mr-4">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-3">Foundation Skills</h3>
                    <p className="text-amber-800 text-sm mb-3">
                      We recommend mastering these skills first:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.prerequisites.map((prereq) => (
                        <span 
                          key={prereq}
                          className="bg-white text-amber-800 text-sm px-3 py-1 rounded-full border border-amber-200"
                        >
                          {prereq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Detailed Content or Standard Content */}
            {hasDetailedContent && skillContent ? (
              <>
                {showFullContent ? (
                  <SkillContentRenderer content={skillContent} />
                ) : (
                  <Card className="text-center py-12 border border-gray-200 bg-gradient-to-b from-white to-gray-50">
                    <BookOpen className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Comprehensive Skill Guide Available
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                      This skill has a detailed learning guide with examples, practice scenarios, 
                      and expert recommendations to help you master it effectively.
                    </p>
                    <button
                      onClick={() => setShowFullContent(true)}
                      className="mx-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      View Complete Skill Guide
                    </button>
                  </Card>
                )}
              </>
            ) : (
              <>
                {/* Key Techniques */}
                <Card className="border border-gray-200 bg-white">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Key Techniques</h3>
                      <p className="text-gray-600 text-sm">Master these approaches for effective skill application</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skill.keyTechniques.map((technique, index) => (
                      <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-blue-700 font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{technique}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Practical Applications */}
                <Card className="border border-gray-200 bg-white">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-green-100 rounded-lg mr-4">
                      <Zap className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Practical Applications</h3>
                      <p className="text-gray-600 text-sm">Real-world situations where this skill creates impact</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skill.practicalApplications.map((application, index) => (
                      <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <Target className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{application}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Learning Resources */}
                <Card className="border border-gray-200 bg-white">
                  <div className="flex items-start mb-6">
                    <div className="p-3 bg-purple-100 rounded-lg mr-4">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Learning Resources</h3>
                      <p className="text-gray-600 text-sm">Curated materials to help you develop this skill</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Articles */}
                    {skill.resources.articles && skill.resources.articles.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-blue-500" />
                          Articles
                        </h4>
                        <div className="space-y-3">
                          {skill.resources.articles.map((article, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                              <div>
                                <h5 className="font-medium text-gray-900">{article.title}</h5>
                                <p className="text-sm text-gray-600">{article.readingTime}</p>
                              </div>
                              <div className="bg-white p-2 rounded-full shadow-sm">
                                <ArrowRight className="w-4 h-4 text-blue-500" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Videos */}
                    {skill.resources.videos && skill.resources.videos.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                          <Play className="w-4 h-4 mr-2 text-red-500" />
                          Videos
                        </h4>
                        <div className="space-y-3">
                          {skill.resources.videos.map((video, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-red-200 transition-colors">
                              <div>
                                <h5 className="font-medium text-gray-900">{video.title}</h5>
                                <p className="text-sm text-gray-600">{video.duration}</p>
                              </div>
                              <div className="bg-white p-2 rounded-full shadow-sm">
                                <Play className="w-4 h-4 text-red-500" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Exercises */}
                    {skill.resources.exercises && skill.resources.exercises.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                          <Target className="w-4 h-4 mr-2 text-green-500" />
                          Practice Exercises
                        </h4>
                        <div className="space-y-3">
                          {skill.resources.exercises.map((exercise, index) => (
                            <div key={index} className="p-4 bg-green-50 border border-green-100 rounded-lg hover:border-green-200 transition-colors">
                              <h5 className="font-medium text-gray-900 mb-2">{exercise.title}</h5>
                              <p className="text-gray-700 text-sm mb-2">{exercise.description}</p>
                              <div className="flex items-center text-green-600 text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {exercise.timeRequired}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border border-gray-200 bg-white">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/scenarios"
                  className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Zap size={18} className="mr-2" />
                  Practice in Scenarios
                </Link>
                <button className="flex items-center justify-center w-full bg-white text-gray-700 py-3 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <BookOpen size={18} className="mr-2" />
                  Add to Learning Plan
                </button>
                <button className="flex items-center justify-center w-full bg-white text-gray-700 py-3 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <Users size={18} className="mr-2" />
                  Share Skill
                </button>
              </div>
            </Card>

            {/* Skill Progress */}
            <Card className="border border-gray-200 bg-white">
              <h3 className="font-semibold text-gray-900 mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Skill Level</span>
                    <span className="font-medium text-blue-600">Developing</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Practice Sessions</span>
                    <span className="font-medium">2/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    to="/scenarios"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    Continue Learning
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </Card>

            {/* Related Scenarios */}
            {skill.relatedScenarios.length > 0 && (
              <Card className="border border-gray-200 bg-white">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                    <Users className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Related Scenarios</h3>
                </div>
                <div className="space-y-3">
                  {skill.relatedScenarios.map((scenarioId) => (
                    <Link
                      key={scenarioId}
                      to={`/scenarios/${scenarioId}`}
                      className="block p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {scenarioId.split('-').map(word => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                          ).join(' ')}
                        </h4>
                        <ChevronRight size={16} className="text-indigo-500" />
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            )}

            {/* Related Skills */}
            {relatedSkills.length > 0 && (
              <Card className="border border-gray-200 bg-white">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-3">
                    <BookOpen className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Related Skills</h3>
                </div>
                <div className="space-y-3">
                  {relatedSkills.map((relatedSkill) => (
                    <Link
                      key={relatedSkill.id}
                      to={`/library/skills/${relatedSkill.id}`}
                      className="block p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{relatedSkill.name}</h4>
                          <p className="text-gray-600 text-xs mt-1">{relatedSkill.estimatedTime}</p>
                        </div>
                        <ChevronRight size={16} className="text-green-500" />
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            )}

            {/* AI Skill Engine Recommendation */}
            <Card className="border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mr-3">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">AI Skill Engine</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                Get personalized learning recommendations and pathways for mastering this skill.
              </p>
              <Link
                to="/skill-engine"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View Personalized Pathway
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetailPage;