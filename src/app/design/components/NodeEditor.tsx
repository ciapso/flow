"use client";

import React, { useState, useEffect } from 'react';
import { Node } from '../../common/state/workflowSlice';
import { useDispatch } from 'react-redux';
import { updateNode } from '../../common/state/workflowSlice';

interface NodeEditorProps {
  node: Node;
}

const NodeEditor: React.FC<NodeEditorProps> = ({ node }) => {
  const [nodeData, setNodeData] = useState(node.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setNodeData(node.data);
  }, [node]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNodeData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    dispatch(updateNode({ ...node, data: nodeData }));
  };

  return (
    <div className="p-4 border rounded shadow">
      <h3 className="font-semibold mb-2">Edit Node</h3>
      <div className="mb-2">
        <label className="block text-sm mb-1">Label:</label>
        <input
          type="text"
          name="label"
          value={nodeData.label || ''}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <button onClick={handleSave} className="bg-blue-500 text-white px-3 py-1 rounded">
        Save
      </button>
    </div>
  );
};

export default NodeEditor;
