import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Users, 
  AlertTriangle, 
  BookOpen, 
  Play,
  FileText,
  Headphones,
  Monitor,
  Tool,
  ChevronDown,
  ChevronUp,
  Target,
  Award,
  Clock,
  MessageCircle
} from 'lucide-react';
import Card from './Card';

interface SkillContentProps {
  content: any;
}

const SkillContentRenderer: React.FC<SkillContentProps> = ({ content }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['definition']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getResourceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'article': return <FileText className="w-4 h-4" />;
      case 'podcast': return <Headphones className="w-4 h-4" />;
      case 'video': return <Play className="w-4 h-4" />;
      case 'simulation': return <Monitor className="w-4 h-4" />;
      case 'tool': return <Tool className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const SectionHeader = ({ id, title, icon }: { id: string; title: string; icon: React.ReactNode }) => (
    <button
      onClick={() => toggleSection(id)}
      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg"
    >
      <div className="flex items-center">
        {icon}
        <h3 className="text-lg font-semibold text-gray-900 ml-2">{title}</h3>
      </div>
      {expandedSections.has(id) ? <ChevronUp /> : <ChevronDown />}
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Theme Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-center mb-2">
          <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
          <span className="text-blue-800 font-medium">{content.theme}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{content.skillName}</h1>
        <p className="text-lg text-gray-700">{content.definition.description}</p>
      </div>

      {/* Definition & Importance */}
      <Card>
        <SectionHeader 
          id="definition" 
          title="Skill Definition & Importance" 
          icon={<Target className="w-5 h-5 text-blue-600" />} 
        />
        {expandedSections.has('definition') && (
          <div className="p-4 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Core Message</h4>
              <p className="text-blue-800">{content.definition.coreMessage}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Why It Matters</h4>
              <p className="text-gray-700 mb-3">{content.definition.whyItMatters}</p>
              <p className="text-gray-700 mb-3">{content.definition.trustFoundation}</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">Risk of Poor Feedback</h4>
              <ul className="space-y-1">
                {content.definition.riskOfPoorFeedback.map((risk: string, index: number) => (
                  <li key={index} className="flex items-start text-red-800">
                    <span className="text-red-500 mr-2">•</span>
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Card>

      {/* Skill Maturity Levels */}
      <Card>
        <SectionHeader 
          id="maturity" 
          title="Skill Maturity Levels" 
          icon={<Award className="w-5 h-5 text-green-600" />} 
        />
        {expandedSections.has('maturity') && (
          <div className="p-4">
            <div className="space-y-3">
              {content.maturityLevels.map((level: any, index: number) => (
                <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">{level.level}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{level.name}</h4>
                    <p className="text-gray-700 text-sm">{level.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Micro-Scenarios */}
      <Card>
        <SectionHeader 
          id="scenarios" 
          title="Micro-Scenarios with Decision Challenges" 
          icon={<Users className="w-5 h-5 text-purple-600" />} 
        />
        {expandedSections.has('scenarios') && (
          <div className="p-4 space-y-6">
            {content.microScenarios.map((scenario: any) => (
              <div key={scenario.id} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Scenario {scenario.id}: {scenario.title}</h4>
                <p className="text-gray-700 mb-4">{scenario.scenario}</p>
                <div className="space-y-2">
                  {scenario.options.map((option: any) => (
                    <div 
                      key={option.id} 
                      className={`flex items-center p-3 rounded-lg border ${
                        option.isRecommended 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="mr-3">
                        {option.isRecommended ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                      <span className={`font-medium mr-2 ${
                        option.isRecommended ? 'text-green-800' : 'text-gray-700'
                      }`}>
                        {option.id.toUpperCase()}:
                      </span>
                      <span className={option.isRecommended ? 'text-green-800' : 'text-gray-700'}>
                        {option.text}
                      </span>
                      {option.icon && (
                        <span className="ml-2 text-green-600">{option.icon}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Role & Level Variants */}
      <Card>
        <SectionHeader 
          id="roles" 
          title="Role & Level Variants" 
          icon={<Users className="w-5 h-5 text-indigo-600" />} 
        />
        {expandedSections.has('roles') && (
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.roleLevelVariants.map((variant: any, index: number) => (
                <div key={index} className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">{variant.role}</h4>
                  <p className="text-indigo-800 text-sm">{variant.focus}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Common Pitfalls */}
      <Card>
        <SectionHeader 
          id="pitfalls" 
          title="Common Pitfalls & Misconceptions" 
          icon={<AlertTriangle className="w-5 h-5 text-yellow-600" />} 
        />
        {expandedSections.has('pitfalls') && (
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Good Feedback
                </h4>
                <ul className="space-y-2">
                  {content.commonPitfalls.goodFeedback.map((item: string, index: number) => (
                    <li key={index} className="flex items-center text-green-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                  <XCircle className="w-4 h-4 mr-2" />
                  Bad Feedback
                </h4>
                <ul className="space-y-2">
                  {content.commonPitfalls.badFeedback.map((item: string, index: number) => (
                    <li key={index} className="flex items-center text-red-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Always Ask:</h4>
              <p className="text-blue-800 italic">{content.commonPitfalls.alwaysAsk}</p>
            </div>
          </div>
        )}
      </Card>

      {/* Case Study */}
      <Card>
        <SectionHeader 
          id="casestudy" 
          title="Mini Case Study / Story" 
          icon={<BookOpen className="w-5 h-5 text-teal-600" />} 
        />
        {expandedSections.has('casestudy') && (
          <div className="p-4">
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-900 mb-3">Story:</h4>
              <p className="text-teal-800 leading-relaxed">{content.caseStudy.story}</p>
            </div>
          </div>
        )}
      </Card>

      {/* Practice Opportunities */}
      <Card>
        <SectionHeader 
          id="practice" 
          title="Practice Opportunities" 
          icon={<Target className="w-5 h-5 text-orange-600" />} 
        />
        {expandedSections.has('practice') && (
          <div className="p-4 space-y-6">
            <div>
              <h4 className="font-semib text-gray-900 mb-3">Solo Practice:</h4>
              <ul className="space-y-2">
                {content.practiceOpportunities.soloPractice.map((item: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-orange-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semib text-gray-900 mb-3">Role Play:</h4>
              <ul className="space-y-2">
                {content.practiceOpportunities.rolePlay.map((item: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-orange-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semib text-gray-900 mb-3">Live Application:</h4>
              <ul className="space-y-2">
                {content.practiceOpportunities.liveApplication.map((item: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-orange-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Card>

      {/* Self-Reflection Prompts */}
      <Card>
        <SectionHeader 
          id="reflection" 
          title="Self-Reflection Prompts" 
          icon={<Clock className="w-5 h-5 text-purple-600" />} 
        />
        {expandedSections.has('reflection') && (
          <div className="p-4">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <ul className="space-y-3">
                {content.selfReflectionPrompts.map((prompt: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs font-bold text-purple-600">{index + 1}</span>
                    </div>
                    <p className="text-purple-800">{prompt}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Card>

      {/* Suggested Actions */}
      <Card>
        <SectionHeader 
          id="actions" 
          title="Suggested Actions & Micro-Habits" 
          icon={<Target className="w-5 h-5 text-green-600" />} 
        />
        {expandedSections.has('actions') && (
          <div className="p-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <ul className="space-y-2">
                {content.suggestedActions.map((action: string, index: number) => (
                  <li key={index} className="flex items-start text-green-800">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Card>

      {/* Related Skills */}
      <Card>
        <SectionHeader 
          id="related" 
          title="Related Skills & Skill Tree" 
          icon={<BookOpen className="w-5 h-5 text-blue-600" />} 
        />
        {expandedSections.has('related') && (
          <div className="p-4">
            <div className="flex flex-wrap gap-2">
              {content.relatedSkills.map((skill: string, index: number) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Learning Resources */}
      <Card>
        <SectionHeader 
          id="resources" 
          title="Recommended Learning Resources" 
          icon={<BookOpen className="w-5 h-5 text-indigo-600" />} 
        />
        {expandedSections.has('resources') && (
          <div className="p-4">
            <div className="space-y-3">
              {content.learningResources.map((resource: any, index: number) => (
                <div key={index} className="flex items-center p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    {resource.icon ? (
                      <span className="text-lg">{resource.icon}</span>
                    ) : (
                      getResourceIcon(resource.type)
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-indigo-600">{resource.type}</span>
                    <h4 className="font-medium text-indigo-900">{resource.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Skill Tracker */}
      <Card>
        <SectionHeader 
          id="tracker" 
          title="Skill Tracker / Assessment Link" 
          icon={<Target className="w-5 h-5 text-blue-600" />} 
        />
        {expandedSections.has('tracker') && (
          <div className="p-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <ul className="space-y-2">
                {Object.entries(content.skillTracker).map(([key, value], index) => (
                  <li key={index} className="flex items-start text-blue-800">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="font-medium">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                    <span className="ml-2">{value as string}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default SkillContentRenderer;