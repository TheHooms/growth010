import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { archetypeAssessment } from '../data/assessments';
import { archetypes } from '../data/archetypes';
import { useUser } from '../context/UserContext';
import Button from '../components/Button';
import AssessmentQuestion from '../components/AssessmentQuestion';
import HighlightedTopic from '../components/HighlightedTopic';

const AssessmentPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser, updateArchetype } = useUser();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [archetypeResult, setArchetypeResult] = useState<string | null>(null);
  const [progressPercentage, setProgressPercentage] = useState(0);
  
  const questions = archetypeAssessment.questions;
  const currentQuestion = questions[currentQuestionIndex];
  
  useEffect(() => {
    // Calculate progress percentage
    setProgressPercentage(((currentQuestionIndex) / questions.length) * 100);
  }, [currentQuestionIndex, questions.length]);
  
  const handleSelectOption = (optionId: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId
    });
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const calculateResults = () => {
    const archetypeScores: Record<string, number> = {
      visionary: 0,
      executor: 0,
      connector: 0,
      analyst: 0
    };
    
    // Calculate scores for each archetype based on answers
    Object.entries(answers).forEach(([questionId, optionId]) => {
      const question = questions.find(q => q.id === questionId);
      if (question) {
        const selectedOption = question.options.find(o => o.id === optionId);
        if (selectedOption) {
          // Add points to each archetype
          Object.entries(selectedOption.archetypePoints).forEach(([archetype, points]) => {
            archetypeScores[archetype] = (archetypeScores[archetype] || 0) + points;
          });
        }
      }
    });
    
    // Find the highest scoring archetype
    let highestScore = 0;
    let dominantArchetype = '';
    
    Object.entries(archetypeScores).forEach(([archetype, score]) => {
      if (score > highestScore) {
        highestScore = score;
        dominantArchetype = archetype;
      }
    });
    
    setArchetypeResult(dominantArchetype);
    
    // Create user and set archetype
    setUser({
      id: crypto.randomUUID(),
      name: 'User', // Default name
      archetype: dominantArchetype,
      completedScenarios: [],
      growthAreas: []
    });
    
    updateArchetype(dominantArchetype);
    
    // Show results
    setShowResults(true);
  };
  
  const handleFinish = () => {
    navigate('/dashboard');
  };
  
  if (showResults && archetypeResult) {
    const resultArchetype = archetypes.find(a => a.id === archetypeResult);
    
    if (!resultArchetype) return <div>Error loading result</div>;
    
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Result</h1>
            <p className="text-gray-600">Based on your responses, your primary work archetype is:</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-3">{resultArchetype.name}</h2>
            <p className="text-gray-700 mb-6">{resultArchetype.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Key Strengths</h3>
                <ul className="space-y-1">
                  {resultArchetype.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Potential Challenges</h3>
                <ul className="space-y-1">
                  {resultArchetype.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="font-semibold text-gray-800 mb-3">Your Growth Opportunities</h3>
            <p className="text-gray-600 mb-4">
              Based on your archetype, here are the areas where you can focus your development:
            </p>
            <div className="flex flex-wrap gap-2">
              {resultArchetype.growthAreas.map((area) => (
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
          
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleFinish}
            >
              Continue to Your Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Math.round(progressPercentage)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Work Style Assessment</h1>
          <p className="text-gray-600 mt-2">Discover your natural work style and strengths</p>
        </div>
        
        <AssessmentQuestion
          question={currentQuestion}
          currentAnswer={answers[currentQuestion.id] || null}
          onSelectOption={handleSelectOption}
        />
        
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center"
          >
            <ChevronLeft size={18} className="mr-1" />
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion.id]}
            className="flex items-center"
          >
            {currentQuestionIndex < questions.length - 1 ? (
              <>
                Next
                <ChevronRight size={18} className="ml-1" />
              </>
            ) : (
              'See Results'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;