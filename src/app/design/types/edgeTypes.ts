// src/app/design/types/edgeTypes.ts
export type EdgeType =
  | 'execution'
  | 'conditional'
  | 'state'
  | 'event'
  | 'loop'
  | 'parallel';

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  type: EdgeType;
  data?: any;
}
