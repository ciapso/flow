// src/app/design/utils/connectionRules.ts
import { WorkflowNode } from '../types/nodeTypes';
import { WorkflowEdge } from '../types/edgeTypes';

export const canConnectNodes = (
  source: WorkflowNode,
  target: WorkflowNode
): boolean => {
  // For example, disallow connecting two state nodes.
  if (source.type === 'state' && target.type === 'state') return false;
  // Add additional connection rules as needed.
  return true;
};

export const validateEdge = (edge: WorkflowEdge): boolean => {
  // Validate the edge (for example, disallow self-connections).
  return edge.source !== edge.target;
};
