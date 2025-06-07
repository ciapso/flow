// src/app/design/utils/elkLayout.ts
import ELK from 'elkjs/lib/elk.bundled.js';

const elk = new ELK();

export interface LayoutNode {
  id: string;
  width: number;
  height: number;
  children?: LayoutNode[];
}

export const performElkLayout = async (
  nodes: any[],
  edges: any[]
): Promise<{ nodes: any[] }> => {
  const elkGraph = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': 'RIGHT',
    },
    children: nodes.map((node) => ({
      id: node.id,
      width: 150,
      height: 50,
    })),
    edges: edges.map((edge) => ({
      id: edge.id,
      sources: [edge.source],
      targets: [edge.target],
    })),
  };

  const layout = await elk.layout(elkGraph);
  // Map layout positions back to nodes
  const updatedNodes = nodes.map((node) => {
    const layoutNode = layout.children?.find((n) => n.id === node.id);
    if (layoutNode && layoutNode.x !== undefined && layoutNode.y !== undefined) {
      return { ...node, position: { x: layoutNode.x, y: layoutNode.y } };
    }
    return node;
  });
  return { nodes: updatedNodes };
};
