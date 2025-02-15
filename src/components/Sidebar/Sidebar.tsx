import React, { useState } from 'react';
import { Grid, Layers, Layers3, FileText, Settings, LifeBuoy } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen bg-gray-50 border-r border-gray-200 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16 overflow-hidden'}`}>
      {/* Toggle Button */}
      <button 
        className="p-2 m-2 text-gray-600 hover:text-gray-900 rounded-full border border-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '◀' : '▶'}
      </button>

      {/* Navigation Section */}
      <nav className="flex flex-col mt-4 px-2 space-y-4">
        {/* Model Library */}
        <button className="flex items-center space-x-3 py-2 px-3 text-white bg-gray-900 rounded-lg">
          <Grid size={20} />
          {isOpen && <span className="text-sm font-medium">Model Library</span>}
        </button>

        {/* Extraction Builder */}
        {isOpen && <p className="text-xs font-semibold text-gray-400 mt-3">Extraction Builder</p>}
        {[
          { icon: <Layers size={20} />, label: 'Label Data' },
          { icon: <Layers3 size={20} />, label: 'Model' },
          { icon: <FileText size={20} />, label: 'Test' }
        ].map(({ icon, label }) => (
          <button key={label} className="flex items-center space-x-3 py-2 px-3 text-gray-700 hover:bg-gray-200 rounded-lg">
            {icon}
            {isOpen && <span className="text-sm font-medium">{label}</span>}
          </button>
        ))}

        {/* Help Section */}
        {isOpen && <p className="text-xs font-semibold text-gray-400 mt-3">Help</p>}
        {[
          { icon: <Settings size={20} />, label: 'Setting' },
          { icon: <LifeBuoy size={20} />, label: 'Support' }
        ].map(({ icon, label }) => (
          <button key={label} className="flex items-center space-x-3 py-2 px-3 text-gray-700 hover:bg-gray-200 rounded-lg">
            {icon}
            {isOpen && <span className="text-sm font-medium">{label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

