"use client";
import React from 'react';
import ProjectExplorer from './components/ProjectExplorer';
import GraphCanvas from './components/GraphCanvas';

const DesignPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel: Project Explorer */}
      <div className="w-64 border-r border-gray-200 p-4">
        <ProjectExplorer />
      </div>
      {/* Right Panel: Graph Canvas */}
      <div className="flex-1 p-4">
        <GraphCanvas />
      </div>
    </div>
  );
};

export default DesignPage;
