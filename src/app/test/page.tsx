// src/app/test/page.tsx
import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Workflow Testing</h1>
      <p>
        This page will allow simulation of workflow execution and display logs for debugging purposes.
      </p>
      {/* Future integration: Simulation runner, live log viewer */}
    </div>
  );
};

export default TestPage;
