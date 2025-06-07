"use client";
import React from 'react';
import { useRouter } from 'next/router';

const ProjectExplorer: React.FC = () => {
  const router = useRouter();

  // Sample project data – in a real implementation, data would come from an API or Redux.
  const projects = [
    {
      id: 'project1',
      name: 'Project 1',
      workflows: [
        { id: 'wf1', name: 'Workflow 1' },
        { id: 'wf2', name: 'Workflow 2' },
      ],
    },
    {
      id: 'project2',
      name: 'Project 2',
      workflows: [{ id: 'wf3', name: 'Workflow 3' }],
    },
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id} className="mb-2">
            <span className="font-bold">{project.name}</span>
            <ul className="ml-4">
              {project.workflows.map(workflow => (
                <li
                  key={workflow.id}
                  className="cursor-pointer text-blue-500 hover:underline"
                  onClick={() => router.push(`/design?workflow=${workflow.id}`)}
                >
                  {workflow.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectExplorer;
