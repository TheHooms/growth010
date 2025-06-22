import React, { useState } from 'react';
import { CheckCircle, XCircle, Users, AlertTriangle, BookOpen, Play, FileText, Headphones, Monitor, PenTool as Tool, ChevronDown, ChevronUp, Target, Award, Clock, MessageCircle } from 'lucide-react';
import Card from './Card';

interface SkillContentProps {
  content: any;
}

const SkillContentRenderer: React.FC<SkillContentProps> = ({ content }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['definition']));

  // Early return if content is not available
  if (!content) {
    return <div className="p-4 text-center text-gray-500">Content not available</div>;
  }

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
          <span className="text-blue-800 font-medium">{content.theme || 'Skill Development'}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{content.skillName || 'Skill'}</h1>
        <p className="text-lg text-gray-700">
          {content.definition?.description || 'Skill description not available'}
        </p>
      </div>

      {/* Definition & Importance */}
      {content.definition && (
        <Card>
          <SectionHeader 
            id="definition" 
            title="Skill Definition & Importance" 
            icon={<Target className="w-5 h-5 text-blue-600" />} 
          />
          {expandedSections.has('definition') && (
            <div className="p-4 space-y-4">
              {content.definition.coreMessage && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Core Message</h4>
                  <p className="text-blue-800">{content.definition.coreMessage}</p>
                </div>
              )}
              
              <div>
                {content.definition.whyItMatters && (
                  <>
                    <h4 className="font-semibold text-gray-900 mb-2">Why It Matters</h4>
                    <p className="text-gray-700 mb-3">{content.definition.whyItMatters}</p>
                  </>
                )}
                {content.definition.trustFoundation && (
                  <p className="text-gray-700 mb-3">{content.definition.trustFoundation}</p>
                )}
              </div>

              {content.definition.riskOfPoorFeedback && Array.isArray(content.definition.riskOfPoorFeedback) && (
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
              )}
            </div>
          )}
        </Card>
      )}

      {/* Skill Maturity Levels */}
      {content.maturityLevels && Array.isArray(content.maturityLevels) && (
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
                      <span className="text-blue-600 font-bold text-sm">{level.level || index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{level.name || 'Level'}</h4>
                      <p className="text-gray-700 text-sm">{level.description || 'Description not available'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Micro-Scenarios */}
      {content.microScenarios && Array.isArray(content.microScenarios) && (
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
                  {scenario.options && Array.isArray(scenario.options) && (
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
                            {option.id ? option.id.toUpperCase() : ''}:
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
                  )}
                </div>
              ))}
            </div>
          )}
        </Card>
      )}

      {/* Role & Level Variants */}
      {content.roleLevelVariants && Array.isArray(content.roleLevelVariants) && (
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
                    <h4 className="font-semibold text-indigo-900 mb-2">{variant.role || 'Role'}</h4>
                    <p className="text-indigo-800 text-sm">{variant.focus || 'Focus area not specified'}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Common Pitfalls */}
      {content.commonPitfalls && (
        <Card>
          <SectionHeader 
            id="pitfalls" 
            title="Common Pitfalls & Misconceptions" 
            icon={<AlertTriangle className="w-5 h-5 text-yellow-600" />} 
          />
          {expandedSections.has('pitfalls') && (
            <div className="p-4">
              {content.commonPitfalls.description && (
                <p className="text-gray-700 mb-4">{content.commonPitfalls.description}</p>
              )}

              {content.commonPitfalls.choosingWords && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{content.commonPitfalls.choosingWords.title}</h4>
                  <p className="text-gray-700 mb-3">{content.commonPitfalls.choosingWords.description}</p>
                  
                  {content.commonPitfalls.choosingWords.phrases && Array.isArray(content.commonPitfalls.choosingWords.phrases) && (
                    <ul className="space-y-2 bg-blue-50 border border-blue-200 rounded-lg p-4">
                      {content.commonPitfalls.choosingWords.phrases.map((phrase: string, index: number) => (
                        <li key={index} className="flex items-start text-blue-800">
                          <span className="text-blue-500 mr-2">•</span>
                          {phrase}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {content.commonPitfalls.framingAndTiming && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{content.commonPitfalls.framingAndTiming.title}</h4>
                  <p className="text-gray-700 mb-3">{content.commonPitfalls.framingAndTiming.description}</p>
                  
                  {content.commonPitfalls.framingAndTiming.questions && Array.isArray(content.commonPitfalls.framingAndTiming.questions) && (
                    <ul className="space-y-2 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      {content.commonPitfalls.framingAndTiming.questions.map((question: string, index: number) => (
                        <li key={index} className="flex items-start text-yellow-800">
                          <span className="text-yellow-500 mr-2">•</span>
                          {question}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {content.commonPitfalls.clarityNote && (
                <div className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">{content.commonPitfalls.clarityNote}</p>
                </div>
              )}

              {content.commonPitfalls.comparisonTable && Array.isArray(content.commonPitfalls.comparisonTable) && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Good Feedback</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Poor Feedback</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Why It Matters</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {content.commonPitfalls.comparisonTable.map((row: any, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-700">{row.good}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-red-700">{row.poor}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{row.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </Card>
      )}

      {/* Case Study */}
      {content.caseStudy && content.caseStudy.story && (
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
      )}

      {/* Practice Opportunities */}
      {content.practiceOpportunities && (
        <Card>
          <SectionHeader 
            id="practice" 
            title="Practice Opportunities" 
            icon={<Target className="w-5 h-5 text-orange-600" />} 
          />
          {expandedSections.has('practice') && (
            <div className="p-4 space-y-6">
              {content.practiceOpportunities.soloPractice && Array.isArray(content.practiceOpportunities.soloPractice) && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Solo Practice:</h4>
                  <ul className="space-y-2">
                    {content.practiceOpportunities.soloPractice.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-orange-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {content.practiceOpportunities.rolePlay && Array.isArray(content.practiceOpportunities.rolePlay) && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Role Play:</h4>
                  <ul className="space-y-2">
                    {content.practiceOpportunities.rolePlay.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-orange-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {content.practiceOpportunities.liveApplication && Array.isArray(content.practiceOpportunities.liveApplication) && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Live Application:</h4>
                  <ul className="space-y-2">
                    {content.practiceOpportunities.liveApplication.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-orange-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </Card>
      )}

      {/* Self-Reflection Prompts */}
      {content.selfReflectionPrompts && Array.isArray(content.selfReflectionPrompts) && (
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
      )}

      {/* Leader Tips */}
      {content.leaderTips && Array.isArray(content.leaderTips) && (
        <Card>
          <SectionHeader 
            id="leadertips" 
            title="Leader Tips" 
            icon={<Users className="w-5 h-5 text-blue-600" />} 
          />
          {expandedSections.has('leadertips') && (
            <div className="p-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <ul className="space-y-2">
                  {content.leaderTips.map((tip: string, index: number) => (
                    <li key={index} className="flex items-start text-blue-800">
                      <span className="text-blue-500 mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Feedback Phrases */}
      {content.feedbackPhrases && Array.isArray(content.feedbackPhrases) && (
        <Card>
          <SectionHeader 
            id="phrases" 
            title="In-the-Moment Phrases" 
            icon={<MessageCircle className="w-5 h-5 text-green-600" />} 
          />
          {expandedSections.has('phrases') && (
            <div className="p-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <ul className="space-y-2">
                  {content.feedbackPhrases.map((phrase: string, index: number) => (
                    <li key={index} className="flex items-start text-green-800">
                      <span className="text-green-500 mr-2">•</span>
                      {phrase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Practice Prompts */}
      {content.practicePrompts && Array.isArray(content.practicePrompts) && (
        <Card>
          <SectionHeader 
            id="prompts" 
            title="Practice Prompts" 
            icon={<Target className="w-5 h-5 text-orange-600" />} 
          />
          {expandedSections.has('prompts') && (
            <div className="p-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <ul className="space-y-3">
                  {content.practicePrompts.map((prompt: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-orange-600">{index + 1}</span>
                      </div>
                      <p className="text-orange-800">{prompt}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Coachable Moments */}
      {content.coachableMoments && Array.isArray(content.coachableMoments) && (
        <Card>
          <SectionHeader 
            id="moments" 
            title="Coachable Moments" 
            icon={<Clock className="w-5 h-5 text-indigo-600" />} 
          />
          {expandedSections.has('moments') && (
            <div className="p-4">
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <ul className="space-y-2">
                  {content.coachableMoments.map((moment: string, index: number) => (
                    <li key={index} className="flex items-start text-indigo-800">
                      <span className="text-indigo-500 mr-2">•</span>
                      {moment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Suggested Actions */}
      {content.suggestedActions && Array.isArray(content.suggestedActions) && (
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
      )}

      {/* Related Skills */}
      {content.relatedSkills && Array.isArray(content.relatedSkills) && (
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
      )}

      {/* Learning Resources */}
      {content.learningResources && Array.isArray(content.learningResources) && (
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
                        getResourceIcon(resource.type || 'article')
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-indigo-600">{resource.type || 'Resource'}</span>
                      <h4 className="font-medium text-indigo-900">{resource.title || 'Resource Title'}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      )}

      {/* Skill Tracker */}
      {content.skillTracker && (
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
      )}
    </div>
  );
};

export default SkillContentRenderer;