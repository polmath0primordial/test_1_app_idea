"use client";

import { useCallback, useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  type Node,
  type Edge,
  type NodeProps,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useRouter } from "next/navigation";
import type { RoadmapNode, NodeEdge, UserNodeProgress } from "@/lib/types";

interface TopicNodeData {
  label: string;
  status: "completed" | "in_progress" | "not_started" | "locked";
  estimatedHours: number | null;
  nodeId: string;
  [key: string]: unknown;
}

function TopicNode({ data }: NodeProps<Node<TopicNodeData>>) {
  const router = useRouter();

  const statusStyles = {
    completed: "border-green-500 bg-green-50 text-green-800",
    in_progress: "border-blue-500 bg-blue-50 text-blue-800",
    not_started: "border-gray-300 bg-white text-gray-800",
    locked: "border-gray-200 bg-gray-50 text-gray-400",
  };

  const statusIcon = {
    completed: "✅",
    in_progress: "🔵",
    not_started: "⚪",
    locked: "🔒",
  };

  return (
    <div
      onClick={() => router.push(`/node/${data.nodeId}`)}
      className={`cursor-pointer rounded-lg border-2 px-5 py-3 shadow-sm transition-all hover:shadow-md ${statusStyles[data.status]}`}
    >
      <Handle type="target" position={Position.Top} className="!bg-gray-400" />
      <div className="flex items-center gap-2">
        <span>{statusIcon[data.status]}</span>
        <span className="text-sm font-semibold">{data.label}</span>
      </div>
      {data.estimatedHours && (
        <div className="mt-1 text-xs opacity-60">~{data.estimatedHours}h</div>
      )}
      <Handle type="source" position={Position.Bottom} className="!bg-gray-400" />
    </div>
  );
}

const nodeTypes = { topic: TopicNode };

interface RoadmapGraphProps {
  nodes: RoadmapNode[];
  edges: NodeEdge[];
  progress: UserNodeProgress[];
}

export default function RoadmapGraph({
  nodes: roadmapNodes,
  edges: roadmapEdges,
  progress,
}: RoadmapGraphProps) {
  const getStatus = useCallback(
    (nodeId: string): TopicNodeData["status"] => {
      const p = progress.find((pr) => pr.node_id === nodeId);
      if (p) return p.status as TopicNodeData["status"];

      // Check if all prerequisites are completed
      const prereqEdges = roadmapEdges.filter((e) => e.target_node_id === nodeId);
      if (prereqEdges.length === 0) return "not_started";

      const allPrereqsDone = prereqEdges.every((e) => {
        const prereqProgress = progress.find(
          (pr) => pr.node_id === e.source_node_id
        );
        return prereqProgress?.status === "completed";
      });

      return allPrereqsDone ? "not_started" : "locked";
    },
    [progress, roadmapEdges]
  );

  const flowNodes: Node<TopicNodeData>[] = useMemo(
    () =>
      roadmapNodes.map((n) => ({
        id: n.id,
        type: "topic",
        position: { x: n.position_x, y: n.position_y },
        data: {
          label: n.title,
          status: getStatus(n.id),
          estimatedHours: n.estimated_hours,
          nodeId: n.id,
        },
      })),
    [roadmapNodes, getStatus]
  );

  const flowEdges: Edge[] = useMemo(
    () =>
      roadmapEdges.map((e) => ({
        id: e.id,
        source: e.source_node_id,
        target: e.target_node_id,
        animated: false,
        style: { stroke: "#d1d5db", strokeWidth: 2 },
      })),
    [roadmapEdges]
  );

  return (
    <div className="h-[600px] w-full rounded-xl border border-border bg-card">
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        minZoom={0.5}
        maxZoom={1.5}
      >
        <Background color="#e5e7eb" gap={20} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
