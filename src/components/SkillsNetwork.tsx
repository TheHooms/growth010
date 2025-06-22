import React, { useEffect, useRef, useState } from 'react';
import { Search, Filter, ZoomIn, ZoomOut, RotateCcw, Info } from 'lucide-react';

interface NetworkNode {
  id: string;
  name: string;
  category: string;
  level: 'Foundational' | 'Bridge' | 'Advanced';
  prerequisites: string[];
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

interface NetworkLink {
  source: string | NetworkNode;
  target: string | NetworkNode;
}

interface SkillsNetworkProps {
  width?: number;
  height?: number;
}

const SkillsNetwork: React.FC<SkillsNetworkProps> = ({ 
  width = 1200, 
  height = 800 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  // Load skills data from the complete skill graph
  const [skillsData, setSkillsData] = useState<NetworkNode[]>([]);
  const [linksData, setLinksData] = useState<NetworkLink[]>([]);

  useEffect(() => {
    // Load the complete skill graph data
    fetch('/src/data/complete_skill_graph.json')
      .then(response => response.json())
      .then(data => {
        const nodes: NetworkNode[] = data.map((skill: any) => ({
          id: skill.skill.toLowerCase().replace(/[^a-z0-9]/g, '-'),
          name: skill.skill,
          category: skill.category,
          level: skill.level,
          prerequisites: skill.prerequisites || []
        }));

        const links: NetworkLink[] = [];
        nodes.forEach(node => {
          node.prerequisites.forEach(prereq => {
            const prereqId = prereq.toLowerCase().replace(/[^a-z0-9]/g, '-');
            const sourceNode = nodes.find(n => n.id === prereqId);
            if (sourceNode) {
              links.push({
                source: sourceNode.id,
                target: node.id
              });
            }
          });
        });

        setSkillsData(nodes);
        setLinksData(links);
      })
      .catch(error => {
        console.error('Error loading skills data:', error);
        // Fallback to mock data
        const mockNodes: NetworkNode[] = [
          { id: 'communication', name: 'Communication Framing', category: 'Communication & Feedback', level: 'Foundational', prerequisites: [] },
          { id: 'empathy', name: 'Empathy in Action', category: 'Relational & Social Intelligence', level: 'Foundational', prerequisites: [] },
          { id: 'feedback', name: 'Feedback Delivery', category: 'Communication & Feedback', level: 'Bridge', prerequisites: ['communication'] },
          { id: 'difficult-conversations', name: 'Difficult Conversations', category: 'Communication & Feedback', level: 'Advanced', prerequisites: ['feedback', 'empathy'] }
        ];
        
        const mockLinks: NetworkLink[] = [
          { source: 'communication', target: 'feedback' },
          { source: 'feedback', target: 'difficult-conversations' },
          { source: 'empathy', target: 'difficult-conversations' }
        ];

        setSkillsData(mockNodes);
        setLinksData(mockLinks);
      });
  }, []);

  const categories = Array.from(new Set(skillsData.map(node => node.category)));
  const levels = ['Foundational', 'Bridge', 'Advanced'];

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'Communication & Feedback': '#3B82F6',
      'Relational & Social Intelligence': '#10B981',
      'Influence & Leadership': '#8B5CF6',
      'Analytical Thinking & Strategy': '#6366F1',
      'Execution & Process Agility': '#06B6D4',
      'Self-Mastery & Personal Development': '#F59E0B',
      'Innovation & Creative Thinking': '#EF4444',
      'Digital Dexterity & Tech Fluency': '#84CC16',
      'Cultural Fluency & Inclusion': '#EC4899',
      'Organizational Navigation & Career Capital': '#64748B'
    };
    return colors[category] || '#6B7280';
  };

  const getLevelSize = (level: string): number => {
    const sizes = {
      'Foundational': 8,
      'Bridge': 10,
      'Advanced': 12
    };
    return sizes[level as keyof typeof sizes] || 8;
  };

  const filteredNodes = skillsData.filter(node => {
    const matchesSearch = !searchQuery || 
      node.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
      node.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || 
      node.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const filteredLinks = linksData.filter(link => {
    const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
    const targetId = typeof link.target === 'string' ? link.target : link.target.id;
    
    return filteredNodes.some(n => n.id === sourceId) && 
           filteredNodes.some(n => n.id === targetId);
  });

  // Simple force simulation using React state
  useEffect(() => {
    if (filteredNodes.length === 0) return;

    const simulation = () => {
      const nodes = filteredNodes.map(node => ({
        ...node,
        x: node.x || Math.random() * width,
        y: node.y || Math.random() * height,
        vx: 0,
        vy: 0
      }));

      // Simple force simulation
      for (let i = 0; i < 100; i++) {
        // Repulsion force
        for (let j = 0; j < nodes.length; j++) {
          for (let k = j + 1; k < nodes.length; k++) {
            const dx = nodes[k].x! - nodes[j].x!;
            const dy = nodes[k].y! - nodes[j].y!;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            const force = 1000 / (distance * distance);
            
            nodes[j].vx! -= (dx / distance) * force;
            nodes[j].vy! -= (dy / distance) * force;
            nodes[k].vx! += (dx / distance) * force;
            nodes[k].vy! += (dy / distance) * force;
          }
        }

        // Link force
        filteredLinks.forEach(link => {
          const source = nodes.find(n => n.id === (typeof link.source === 'string' ? link.source : link.source.id));
          const target = nodes.find(n => n.id === (typeof link.target === 'string' ? link.target : link.target.id));
          
          if (source && target) {
            const dx = target.x! - source.x!;
            const dy = target.y! - source.y!;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            const targetDistance = 100;
            const force = (distance - targetDistance) * 0.1;
            
            source.vx! += (dx / distance) * force;
            source.vy! += (dy / distance) * force;
            target.vx! -= (dx / distance) * force;
            target.vy! -= (dy / distance) * force;
          }
        });

        // Center force
        const centerX = width / 2;
        const centerY = height / 2;
        nodes.forEach(node => {
          node.vx! += (centerX - node.x!) * 0.01;
          node.vy! += (centerY - node.y!) * 0.01;
        });

        // Update positions
        nodes.forEach(node => {
          node.vx! *= 0.9; // Damping
          node.vy! *= 0.9;
          node.x! += node.vx!;
          node.y! += node.vy!;
          
          // Boundary constraints
          node.x! = Math.max(20, Math.min(width - 20, node.x!));
          node.y! = Math.max(20, Math.min(height - 20, node.y!));
        });
      }

      setSkillsData(prevData => 
        prevData.map(node => {
          const updated = nodes.find(n => n.id === node.id);
          return updated ? { ...node, x: updated.x, y: updated.y } : node;
        })
      );
    };

    const timer = setTimeout(simulation, 100);
    return () => clearTimeout(timer);
  }, [filteredNodes.length, width, height]);

  const handleNodeClick = (node: NetworkNode) => {
    setSelectedNode(selectedNode?.id === node.id ? null : node);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.2, 0.3));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelectedNode(null);
  };

  return (
    <div className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Controls */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          {/* Level Filter */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Levels</option>
            {levels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>

          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <span className="text-sm text-gray-600 min-w-12 text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={handleReset}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              title="Reset View"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Foundational</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Bridge</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span>Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <Info size={14} className="text-gray-400" />
            <span className="text-gray-600">Click nodes to explore • Arrows show prerequisites</span>
          </div>
        </div>
      </div>

      {/* Network Visualization */}
      <div className="relative" style={{ height: height }}>
        <svg
          ref={svgRef}
          width={width}
          height={height}
          className="w-full h-full"
          style={{ transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)` }}
        >
          {/* Links */}
          <g className="links">
            {filteredLinks.map((link, index) => {
              const sourceNode = filteredNodes.find(n => n.id === (typeof link.source === 'string' ? link.source : link.source.id));
              const targetNode = filteredNodes.find(n => n.id === (typeof link.target === 'string' ? link.target : link.target.id));
              
              if (!sourceNode || !targetNode || !sourceNode.x || !sourceNode.y || !targetNode.x || !targetNode.y) {
                return null;
              }

              const isHighlighted = selectedNode && (
                selectedNode.id === sourceNode.id || 
                selectedNode.id === targetNode.id ||
                selectedNode.prerequisites.includes(sourceNode.name) ||
                sourceNode.prerequisites.includes(selectedNode.name)
              );

              return (
                <g key={index}>
                  <line
                    x1={sourceNode.x}
                    y1={sourceNode.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke={isHighlighted ? '#3B82F6' : '#E5E7EB'}
                    strokeWidth={isHighlighted ? 2 : 1}
                    opacity={isHighlighted ? 0.8 : 0.6}
                    markerEnd="url(#arrowhead)"
                  />
                </g>
              );
            })}
          </g>

          {/* Arrow marker */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#9CA3AF"
              />
            </marker>
          </defs>

          {/* Nodes */}
          <g className="nodes">
            {filteredNodes.map(node => {
              if (!node.x || !node.y) return null;

              const isSelected = selectedNode?.id === node.id;
              const isConnected = selectedNode && (
                selectedNode.prerequisites.includes(node.name) ||
                node.prerequisites.includes(selectedNode.name)
              );
              const isHighlighted = isSelected || isConnected;

              const levelColors = {
                'Foundational': '#10B981',
                'Bridge': '#3B82F6', 
                'Advanced': '#8B5CF6'
              };

              return (
                <g key={node.id}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={getLevelSize(node.level) + (isHighlighted ? 3 : 0)}
                    fill={levelColors[node.level as keyof typeof levelColors]}
                    stroke={isSelected ? '#1F2937' : 'white'}
                    strokeWidth={isSelected ? 3 : 2}
                    opacity={isHighlighted || !selectedNode ? 1 : 0.3}
                    className="cursor-pointer hover:opacity-80 transition-all duration-200"
                    onClick={() => handleNodeClick(node)}
                  />
                  
                  {(isHighlighted || !selectedNode) && (
                    <text
                      x={node.x}
                      y={node.y + getLevelSize(node.level) + 15}
                      textAnchor="middle"
                      className="text-xs font-medium fill-gray-700 pointer-events-none"
                      style={{ fontSize: '10px' }}
                    >
                      {node.name.length > 20 ? node.name.substring(0, 20) + '...' : node.name}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>

        {/* Selected Node Info Panel */}
        {selectedNode && (
          <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-80">
            <h3 className="font-semibold text-gray-900 mb-2">{selectedNode.name}</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium text-gray-700">Category:</span>
                <span className="ml-2 text-gray-600">{selectedNode.category}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Level:</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                  selectedNode.level === 'Foundational' ? 'bg-green-100 text-green-800' :
                  selectedNode.level === 'Bridge' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {selectedNode.level}
                </span>
              </div>
              {selectedNode.prerequisites.length > 0 && (
                <div>
                  <span className="font-medium text-gray-700">Prerequisites:</span>
                  <div className="mt-1 space-y-1">
                    {selectedNode.prerequisites.map((prereq, index) => (
                      <div key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {prereq}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="mt-3 text-xs text-blue-600 hover:text-blue-800"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsNetwork;