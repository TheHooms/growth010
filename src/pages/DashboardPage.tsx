import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BarChart2, BookOpen, Target } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { getArchetypeById } from '../data/archetypes';
import { scenarios } from '../data/scenarios';
import { microAssessments } from '../data/assessments';
import Button from '../components/Button';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import ScenarioCard from '../components/ScenarioCard';
import MicroAssessmentCard from '../components/MicroAssessmentCard';
import HighlightedTopic from '../components/HighlightedTopic';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  
  if (!user) {
    navigate('/assessment');
    return null;
  }
  
  const archetype = getArchetypeById(user.archetype || '');
  const recommendedScenarios = scenarios.slice(0, 2);
  const randomAssessment = microAssessments[Math.floor(Math.random() * microAssessments.length)];
  const sortedGrowthAreas = [...user.growthAreas].sort((a, b) => b.score - a.score).slice(0, 3);
  
  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to your Growth Dashboard</h1>
          <p className="text-gray-600">Track your progress and find opportunities to develop</p>
        </div>
        
        {archetype && (
          <Card className="mb-8 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Your Archetype: {archetype.name}</h2>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{archetype.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-medium text-gray-800 mb-2">Focus Areas for Growth:</h3>
                  <div className="flex flex-wrap gap-4">
                    {archetype.growthAreas.map((area) => (
                      <HighlightedTopic
                        key={area}
                        id={area}
                        title={area.charAt(0).toUpperCase() + area.slice(1).replace('-', ' ')}
                        description={`Learn more about ${area.replace('-', ' ')}`}
                        ariaLabel={`Click to learn more about ${area.replace('-', ' ')}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-3">Your Progress</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scenarios Completed</span>
                      <span className="font-medium">{user.completedScenarios.length}/10</span>
                    </div>
                    <ProgressBar
                      value={user.completedScenarios.length}
                      max={10}
                      color="blue"
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Growth Areas Identified</span>
                      <span className="font-medium">{user.growthAreas.length}/8</span>
                    </div>
                    <ProgressBar
                      value={user.growthAreas.length}
                      max={8}
                      color="green"
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Overall Progress</span>
                      <span className="font-medium">
                        {Math.round(((user.completedScenarios.length / 10) + (user.growthAreas.length / 8)) / 2 * 100)}%
                      </span>
                    </div>
                    <ProgressBar
                      value={Math.round(((user.completedScenarios.length / 10) + (user.growthAreas.length / 8)) / 2 * 100)}
                      max={100}
                      color="blue"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <BarChart2 className="w-5 h-5 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-800">Your Growth Areas</h2>
                </div>
                <Button
                  variant="text"
                  size="sm"
                  onClick={() => navigate('/progress')}
                  className="flex items-center"
                >
                  View All
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
              
              {user.growthAreas.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sortedGrowthAreas.map((area) => (
                    <Card key={area.id} className="bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                      <h3 className="font-medium text-gray-800 mb-2">{area.name}</h3>
                      <ProgressBar
                        value={area.score}
                        max={10}
                        label={`Score: ${area.score}/10`}
                        color={area.score >= 7 ? 'green' : 'blue'}
                      />
                      {area.improvement && area.improvement > 0 && (
                        <p className="text-green-600 text-sm mt-2 font-medium">
                          +{area.improvement} improvement
                        </p>
                      )}
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border border-gray-200 bg-gray-50 text-center py-6">
                  <p className="text-gray-600 mb-4">
                    Complete scenarios to identify and track your growth areas
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => navigate('/scenarios')}
                  >
                    Explore Scenarios
                  </Button>
                </Card>
              )}
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Recommended Scenarios</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendedScenarios.map((scenario) => (
                  <ScenarioCard
                    key={scenario.id}
                    scenario={scenario}
                    completed={user.completedScenarios.includes(scenario.id)}
                  />
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  onClick={() => navigate('/scenarios')}
                  className="flex items-center mx-auto"
                >
                  View All Scenarios
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">Mindset Pulse</h2>
              </div>
              
              <MicroAssessmentCard 
                assessment={randomAssessment}
              />
            </div>
            
            <Card className="border border-blue-200 bg-blue-50">
              <h3 className="font-medium text-gray-800 mb-3">Quick Growth Tip</h3>
              <p className="text-gray-700 mb-4">
                {archetype ? `As a ${archetype.name}, try dedicating 15 minutes each day to practice active listening without interrupting.` : 'Take time for self-reflection at the end of each workday.'}
              </p>
              <p className="text-sm text-gray-600">
                New tips appear each day to help you build better habits.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;