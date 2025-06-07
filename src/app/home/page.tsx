// src/app/home/page.tsx
import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Visual Workflow Builder</h1>
      <p className="mb-4">Select a project from the explorer or create a new workflow.</p>
      <Link href="/design">
        <a className="text-blue-500 underline">Go to Workflow Designer</a>
      </Link>
    </div>
  );
};

export default HomePage;
