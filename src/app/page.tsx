"use client";

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle,
  AlertTriangle,
  Circle,
  Square,
  Bell,
  User,
  ChevronDown,
  Search,
  Share,
  FileText,
  MessageSquare,
  Mail,
  Home,
  Filter,
  Calendar,
  Tag,
  Clock,
  MoreVertical,
  X,
  Check,
  AlertCircle,
  ChevronRight,
  FolderOpen,
  Database,
  Activity,
  Thermometer,
  Gauge,
  Zap,
  Settings,
  HelpCircle
} from 'lucide-react';

const NODACoPilotDashboard = () => {
  const [selectedSystem, setSelectedSystem] = useState('district-heating-malmo');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('case-dashboard');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // NODA CoPilot specific data
  const artifactData = [
    { category: 'ALL ARTIFACTS', count: 25691, percentage: 100, color: 'bg-gray-300' },
    { category: 'Thermal Control Systems', count: 8342, percentage: 32.5, color: 'bg-blue-500' },
    { category: 'Heat Distribution', count: 6458, percentage: 25.1, color: 'bg-blue-500' },
    { category: 'Energy Consumption', count: 5173, percentage: 20.1, color: 'bg-blue-500' },
    { category: 'Sensor Networks', count: 2495, percentage: 9.7, color: 'bg-blue-500' },
    { category: 'System Performance', count: 1996, percentage: 7.8, color: 'bg-blue-500' },
    { category: 'Predictive Analytics', count: 1311, percentage: 5.1, color: 'bg-blue-500' },
    { category: 'MQTT Communications', count: 399, percentage: 1.6, color: 'bg-blue-500' },
    { category: 'CoPilot Reports', count: 76, percentage: 0.3, color: 'bg-blue-500' },
  ];

  const evidenceSources = [
    {
      id: 1,
      name: 'District Heating Malmö - Thermal Analysis',
      type: 'THERMAL_SYSTEM',
      artifacts: 2893,
      description: 'Real-time thermal system data extraction for district heating optimization.',
      ingested: '2024-03-06 14:56:30 +0100',
      status: 'active',
      icon: <Thermometer className="w-3 h-3" />
    },
    {
      id: 2,
      name: 'EnergyView - CoPilot Data Stream',
      type: 'COPILOT_SYSTEM',
      artifacts: 12274,
      description: 'Machine learning model outputs and predictive maintenance data.',
      ingested: '2024-03-06 14:57:39 +0100',
      status: 'active',
      icon: <Activity className="w-3 h-3" />
    },
    {
      id: 3,
      name: 'Building Sensors MQTT - Full Extract',
      type: 'SENSOR_NETWORK',
      artifacts: 10524,
      description: 'Indoor temperature sensors and building automation system data.',
      ingested: '2024-03-06 15:02:31 +0100',
      status: 'processing',
      icon: <Gauge className="w-3 h-3" />
    }
  ];

  const conversations = [
    { 
      id: 1, 
      contact: 'CoPilot System', 
      number: '+46701234567',
      message: 'Temperature optimization completed: 15% energy savings...',
      type: 'system', 
      status: 'verified', 
      icon: 'check',
      hasPhone: true,
      hasEmail: false
    },
    { 
      id: 2, 
      contact: 'Building Manager', 
      number: '+46702345678',
      message: 'Heating system performing well today. CoPilot predictions...',
      type: 'email', 
      status: 'important', 
      icon: 'alert',
      hasPhone: true,
      hasEmail: true
    },
    { 
      id: 3, 
      contact: 'MQTT Sensor Hub', 
      number: '+23',
      message: 'Indoor: 21.2°C, Outdoor: -2.1°C, Supply: 45.8°C...',
      type: 'sensor', 
      status: 'info', 
      icon: 'circle',
      hasPhone: false,
      hasEmail: false
    },
    { 
      id: 4, 
      contact: 'Heat Pump Controller', 
      number: '+2',
      message: 'Predictive maintenance alert: Filter replacement due...',
      type: 'system', 
      status: 'warning', 
      icon: 'alert',
      hasPhone: false,
      hasEmail: true
    },
    { 
      id: 5, 
      contact: 'District Heating', 
      number: '+1',
      message: 'Supply temperature adjusted per CoPilot recommendation...',
      type: 'system', 
      status: 'success', 
      icon: 'check',
      hasPhone: false,
      hasEmail: false
    },
    { 
      id: 6, 
      contact: 'Energy Monitor', 
      number: '+46703456789',
      message: 'Daily report: 847 kWh consumed, 12% below forecast...',
      type: 'system', 
      status: 'info', 
      icon: 'circle',
      hasPhone: true,
      hasEmail: true
    },
    { 
      id: 7, 
      contact: 'CoPilot Analytics', 
      number: '+1',
      message: 'Weather forecast integrated: Cold front approaching...',
      type: 'system', 
      status: 'info', 
      icon: 'circle',
      hasPhone: false,
      hasEmail: false
    },
    { 
      id: 8, 
      contact: 'Zone 3 Controller', 
      number: '+5',
      message: 'Temperature variance detected, adjusting setpoints...',
      type: 'system', 
      status: 'processing', 
      icon: 'circle',
      hasPhone: false,
      hasEmail: true
    }
  ];

  const getStatusIcon = (iconType, status) => {
    const baseClass = "w-3 h-3";
    const colorClass = status === 'verified' || status === 'success' ? 'text-green-600' :
                      status === 'warning' || status === 'important' ? 'text-yellow-600' :
                      status === 'error' ? 'text-red-600' : 'text-blue-600';
    
    switch (iconType) {
      case 'check': return <Check className={`${baseClass} ${colorClass}`} />;
      case 'alert': return <AlertCircle className={`${baseClass} ${colorClass}`} />;
      case 'circle': return <Circle className={`${baseClass} ${colorClass} fill-current`} />;
      default: return <Circle className={`${baseClass} ${colorClass}`} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-xs">
      {/* Header */}
      <header className="bg-[#003d7a] text-white">
        <div className="flex items-center h-12 px-4">
          <div className="flex items-center">
            <span className="text-lg font-bold tracking-wide mr-2">NODA</span>
            <span className="text-sm font-normal">COPILOT REVIEW</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="bg-gray-100 border-b border-gray-300 px-4 py-2">
        <div className="flex items-center text-xs text-gray-600">
          <Home className="w-3 h-3 mr-2" />
          <span className="mr-2">Case</span>
          <ChevronRight className="w-3 h-3 mr-2" />
          <span>NODA CoPilot Energy System Analysis</span>
        </div>
      </div>

      {/* Case Header */}
      <div className="bg-white border-b border-gray-300">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-base font-medium text-gray-900">
              NODA CoPilot Energy System Analysis (NODA)
            </h1>
            <button className="bg-[#003d7a] text-white px-4 py-1.5 text-xs font-medium flex items-center hover:bg-[#002a59] transition-colors">
              <Share className="w-3 h-3 mr-2" />
              SHARE CASE
            </button>
          </div>
          
          <div className="flex space-x-6 border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('case-dashboard')}
              className={`pb-2 text-xs font-medium transition-colors ${
                activeTab === 'case-dashboard' 
                  ? 'text-[#003d7a] border-b-2 border-[#003d7a]' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Case dashboard
            </button>
            <button 
              onClick={() => setActiveTab('overview')}
              className={`pb-2 text-xs font-medium transition-colors ${
                activeTab === 'overview' 
                  ? 'text-[#003d7a] border-b-2 border-[#003d7a]' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('reports')}
              className={`pb-2 text-xs font-medium transition-colors ${
                activeTab === 'reports' 
                  ? 'text-[#003d7a] border-b-2 border-[#003d7a]' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Reports
            </button>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-gray-100 border-b border-gray-300 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-xs font-medium text-gray-700">
              <Filter className="w-3 h-3 mr-1" />
              FILTERS
            </div>
            <button className="text-xs text-[#003d7a] hover:underline flex items-center">
              Evidence sources
              <ChevronDown className="w-3 h-3 ml-1" />
            </button>
            <button className="text-xs text-[#003d7a] hover:underline flex items-center">
              Date and time
              <ChevronDown className="w-3 h-3 ml-1" />
            </button>
            <button className="text-xs text-[#003d7a] hover:underline flex items-center">
              Tags and comments
              <ChevronDown className="w-3 h-3 ml-1" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter a search term."
              className="bg-white border border-gray-300 px-3 py-1.5 text-xs w-64 focus:border-[#003d7a] focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-white border border-gray-300 px-3 py-1.5 text-xs hover:bg-gray-50">
              <Search className="w-3 h-3" />
            </button>
            <button className="text-[#003d7a] text-xs font-medium hover:underline">ADVANCED</button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-180px)]">
        {/* Left Sidebar */}
        <div className="w-96 bg-white border-r border-gray-300 overflow-y-auto">
          {/* Case Info */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-900 mb-3 text-sm">Case info</h3>
            <div className="space-y-2 mb-4">
              {evidenceSources.map((source) => (
                <div key={source.id} className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-xs text-gray-700">{source.name}</span>
                </div>
              ))}
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p className="font-medium">Short</p>
              <div className="bg-[#003d7a] text-white p-4 mb-3 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">NODA</div>
                  <div className="text-xs">CoPilot data</div>
                </div>
              </div>
              <p>to be shared with you from EnergyView CoPilot.</p>
              <div className="mt-3 space-y-1">
                <p>Created at: <span className="font-medium">2024-03-06 14:56:08 +0100</span></p>
                <p>Timezone: <span className="font-medium">(+0100) CET</span></p>
              </div>
              <button className="text-[#003d7a] text-xs mt-3 hover:underline">RESET</button>
            </div>
          </div>

          {/* Evidence Sources */}
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-3 text-sm flex items-center justify-between">
              Energy sources 
              <span className="text-xs font-normal text-gray-500">(3)</span>
            </h3>
            <div className="space-y-3">
              {evidenceSources.map((source) => (
                <div key={source.id} className="border border-gray-300 bg-gray-50">
                  <div className="p-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-white border border-gray-300 flex items-center justify-center">
                        {source.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-xs text-[#003d7a] mb-2">{source.name}</h4>
                        <div className="flex space-x-3 text-xs mb-3">
                          <button className="text-[#003d7a] hover:underline">VIEW DETAILS</button>
                          <button className="text-[#003d7a] hover:underline">EDIT</button>
                          <button className="text-[#003d7a] hover:underline">VIEW ARTIFACTS</button>
                        </div>
                        <div className="space-y-1 text-xs">
                          <p className="text-gray-700">
                            Artifacts: <span className="font-medium">{source.artifacts.toLocaleString()}</span>
                          </p>
                          <p className="text-gray-600">
                            Description: <span className="italic">{source.description}</span>
                          </p>
                          <p className="text-gray-700">
                            Ingested at: <span className="font-medium">{source.ingested}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Center Content */}
          <div className="flex-1 bg-white p-6 overflow-y-auto">
            <h3 className="font-medium text-gray-900 mb-4 text-sm">
              Artifact categories <span className="text-xs font-normal text-gray-500">(25,691)</span>
            </h3>
            
            <div className="space-y-0">
              {artifactData.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between py-2 px-3 hover:bg-gray-50 ${
                    index === 0 ? 'bg-gray-100 font-medium' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <span className="text-xs text-gray-900 w-48">{item.category}</span>
                    <div className="flex-1 max-w-lg">
                      <div className="w-full bg-gray-200 h-4 relative">
                        <div 
                          className={item.color}
                          style={{ width: `${item.percentage}%`, height: '100%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-700 w-20 text-right font-mono">
                    {item.count.toLocaleString()}
                  </span>
                </div>
              ))}
              <div className="flex items-center py-2 px-3 hover:bg-gray-50">
                <ChevronRight className="w-3 h-3 mr-1 text-[#003d7a]" />
                <span className="text-[#003d7a] text-xs hover:underline cursor-pointer">More artifacts</span>
                <span className="text-xs text-gray-700 ml-auto font-mono">2,511</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-96 bg-white border-l border-gray-300 overflow-y-auto">
            {/* Tags and Comments */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900 text-sm">Tags and comments</h3>
                <button className="text-[#003d7a] text-xs hover:underline">MANAGE TAGS</button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <Circle className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-900">Critical Issues</p>
                    <p className="text-xs text-gray-600">2 items tagged</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Circle className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-900">Optimization</p>
                    <p className="text-xs text-gray-600">1 item tagged</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-6 h-6 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-900">Public comments</p>
                    <p className="text-xs text-gray-600">1 item with comments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversations */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900 text-sm">Conversations</h3>
                <button className="text-[#003d7a] text-xs hover:underline">VIEW ALL CONVERSATIONS</button>
              </div>
              
              <div className="mb-3">
                <div className="flex text-xs text-gray-600 font-medium">
                  <span className="flex-1">Recent messages</span>
                  <span className="w-32 text-right">Number of messages</span>
                </div>
              </div>
              
              <div className="space-y-0 border-t border-gray-200">
                {conversations.map((conv) => (
                  <div key={conv.id} className="flex items-center justify-between py-2 hover:bg-gray-50 border-b border-gray-100">
                    <div className="flex items-center space-x-2 flex-1 min-w-0">
                      {getStatusIcon(conv.icon, conv.status)}
                      {conv.hasPhone && <span className="text-gray-400 text-xs">📞</span>}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-xs font-medium text-gray-900">{conv.contact}</span>
                          <span className="text-xs text-gray-500">({conv.number})</span>
                        </div>
                        <p className="text-xs text-gray-600 truncate">{conv.message}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-3">
                      {conv.hasEmail && <Mail className="w-3 h-3 text-gray-400" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-4 right-4">
        <button className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 shadow-lg">
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default NODACoPilotDashboard;