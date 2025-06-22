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
  Brain
} from 'lucide-react';
import { getSkillById, getRelatedSkills, skillCategories } from '../data/skills';
import { feedbackDeliveryContent } from '../data/skillContent/feedback-delivery';
import SkillCard from '../components/SkillCard';
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
      'foundational': 'bg-gray-100 text-gray-800',
      'bridge': 'bg-gray-100 text-gray-800',
      'advanced': 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`text-sm font-medium px-3 py-1 rounded-full ${levelClasses[level as keyof typeof levelClasses]}`}>
        {level}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card className="border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{skill.name}</h1>
                  {category && (
                    <p className="text-gray-600 font-medium mb-4">{category.name}</p>
                  )}
                </div>
                {getLevelBadge(skill.level)}
              </div>
              
              <p className="text-gray-700 mb-6">{skill.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{skill.estimatedTime}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen size={16} className="mr-2" />
                  <span>{skill.relatedScenarios.length} scenarios</span>
                </div>
                <div className="flex items-center">
                  <Target size={16} className="mr-2" />
                  <span>{skill.level} level</span>
                </div>
              </div>
            </Card>

            {/* AI Skill Engine Insights - Simplified */}
            {skillId === 'feedback-delivery' && (
              <Card className="border border-gray-200">
                <div className="flex items-start">
                  <Brain className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI Skill Engine Insights</h3>
                    <p className="text-gray-700 mb-4">
                      Feedback Delivery is a high-impact skill that forms the foundation for effective workplace relationships. 
                      Based on your profile, this skill would significantly enhance your influence and team effectiveness.
                    </p>
                    <Link
                      to="/skill-engine"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                    >
                      View Full Skill Analysis
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            )}

            {/* Prerequisites - Simplified */}
            {skill.prerequisites && skill.prerequisites.length > 0 && (
              <Card className="border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-gray-600" />
                  Prerequisites
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  We recommend mastering these skills first:
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.prerequisites.map((prereq) => (
                    <span 
                      key={prereq}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {prereq}
                    </span>
                  ))}
                </div>
              </Card>
            )}

            {/* Detailed Content or Standard Content */}
            {hasDetailedContent && skillContent ? (
              <>
                {showFullContent ? (
                  <SkillContentRenderer content={skillContent} />
                ) : (
                  <Card className="text-center py-8 border border-gray-200">
                    <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Comprehensive Skill Guide Available
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                      This skill has a detailed learning guide with examples, practice scenarios, 
                      and expert recommendations to help you master it effectively.
                    </p>
                    <Button
                      onClick={() => setShowFullContent(true)}
                      className="mx-auto"
                    >
                      View Complete Skill Guide
                    </Button>
                  </Card>
                )}
              </>
            ) : (
              <>
                {/* Key Techniques - Simplified */}
                <Card className="border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Techniques</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skill.keyTechniques.map((technique, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-gray-700 font-bold text-xs">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{technique}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Practical Applications - Simplified */}
                <Card className="border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Applications</h3>
                  <div className="space-y-3">
                    {skill.practicalApplications.map((application, index) => (
                      <div key={index} className="flex items-start">
                        <Target className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">{application}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Learning Resources - Simplified */}
                <Card className="border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Learning Resources</h3>
                  
                  <div className="space-y-6">
                    {/* Articles */}
                    {skill.resources.articles && skill.resources.articles.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-gray-500" />
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
                          <Play className="w-4 h-4 mr-2 text-gray-500" />
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
                          <Target className="w-4 h-4 mr-2 text-gray-500" />
                          Practice Exercises
                        </h4>
                        <div className="space-y-3">
                          {skill.resources.exercises.map((exercise, index) => (
                            <div key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                              <h5 className="font-medium text-gray-900 mb-2">{exercise.title}</h5>
                              <p className="text-gray-700 text-sm mb-2">{exercise.description}</p>
                              <p className="text-gray-500 text-xs">Time required: {exercise.timeRequired}</p>
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

          {/* Sidebar - Simplified */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border border-gray-200">
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
            </Card>

            {/* Related Scenarios */}
            {skill.relatedScenarios.length > 0 && (
              <Card className="border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-gray-500" />
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
              </Card>
            )}

            {/* Related Skills */}
            {relatedSkills.length > 0 && (
              <Card className="border border-gray-200">
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
              </Card>
            )}

            {/* AI Skill Engine Recommendation - Simplified */}
            <Card className="border border-gray-200">
              <div className="flex items-center mb-3">
                <Brain className="w-5 h-5 text-gray-600 mr-2" />
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