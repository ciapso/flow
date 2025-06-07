"use client";import React, { useCallback } from 'react';
import  {
    ReactFlow,
  ReactFlowProvider,
  Controls,
  MiniMap,
  Background,
  Connection,
  NodeChange,
  EdgeChange,
} from '@xyflow/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../common/state/store';
import { addEdge as addReduxEdge, updateNode } from '../../common/state/workflowSlice';
import '@xyflow/react/dist/style.css';

const GraphCanvas: React.FC = () => {
  const dispatch = useDispatch();
  const nodes = useSelector((state: RootState) => state.workflow.nodes);
  const edges = useSelector((state: RootState) => state.workflow.edges);

  const onNodesChange = useCallback((changes: NodeChange[]) => {
    changes.forEach((change) => {
      // When node changes its position update Redux state.
      if (change.type === 'position') {
        dispatch(updateNode({ 
          id: change.id, 
          type: '', 
          position: change.position ?? { x: 0, y: 0 },
          data: {} 
        }));
      }
    });
  }, [dispatch]);

  const onConnect = useCallback((connection: Connection) => {
    dispatch(addReduxEdge({
      id: `${connection.source}-${connection.target}-${Date.now()}`,
      source: connection.source!,
      target: connection.target!,
      type: 'default',
      data: {},
    }));
  }, [dispatch]);

  return (
    <ReactFlowProvider>
      <div style={{ height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={(changes: EdgeChange[]) => { /* Optionally handle edge changes here */ }}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default GraphCanvas;
