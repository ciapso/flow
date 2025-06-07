// src/app/design/types/nodeTypes.ts
export type NodeType =
  | 'action'
  | 'decision'
  | 'state'
  | 'interrupt'
  | 'loop'
  | 'parallel';

export interface WorkflowNode {
  id: string;
  type: NodeType;
  label?: string;
  position: { x: number; y: number };
  data: Record<string, any>;
}
