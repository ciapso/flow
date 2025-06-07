// src/app/common/state/workflowSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Node {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: any;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  type: string;
  data?: any;
}

export interface WorkflowState {
  nodes: Node[];
  edges: Edge[];
}

const initialState: WorkflowState = {
  nodes: [],
  edges: [],
};

export const workflowSlice = createSlice({
  name: 'workflow',
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<Node>) => {
      state.nodes.push(action.payload);
    },
    updateNode: (state, action: PayloadAction<Node>) => {
      const index = state.nodes.findIndex((n) => n.id === action.payload.id);
      if (index !== -1) {
        state.nodes[index] = action.payload;
      }
    },
    removeNode: (state, action: PayloadAction<string>) => {
      state.nodes = state.nodes.filter((n) => n.id !== action.payload);
      state.edges = state.edges.filter((e) => e.source !== action.payload && e.target !== action.payload);
    },
    addEdge: (state, action: PayloadAction<Edge>) => {
      state.edges.push(action.payload);
    },
    updateEdge: (state, action: PayloadAction<Edge>) => {
      const index = state.edges.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.edges[index] = action.payload;
      }
    },
    removeEdge: (state, action: PayloadAction<string>) => {
      state.edges = state.edges.filter((e) => e.id !== action.payload);
    },
    setWorkflow: (state, action: PayloadAction<WorkflowState>) => {
      state.nodes = action.payload.nodes;
      state.edges = action.payload.edges;
    },
  },
});

export const {
  addNode,
  updateNode,
  removeNode,
  addEdge,
  updateEdge,
  removeEdge,
  setWorkflow,
} = workflowSlice.actions;

export default workflowSlice.reducer;
