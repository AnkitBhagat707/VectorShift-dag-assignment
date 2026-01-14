import { useCallback, useRef, useState, useEffect } from "react";
import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

import { useStore } from "./store";
import { InputNode } from "./nodes/inputNode";
import { TextNode } from "./nodes/textNode";
import { OutputNode } from "./nodes/outputNode";
import { LLMNode } from "./nodes/llmNode";

const nodeTypes = {
  customInput: InputNode,
  text: TextNode,
  customOutput: OutputNode,
  llm: LLMNode,
};

export const PipelineUI = () => {
  const wrapperRef = useRef(null);
  const [rfInstance, setRfInstance] = useState(null);


  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore();

  useEffect(() => {
    if (nodes.length > 0) {
    
    }
  }, [nodes]);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      if (!rfInstance) return;

      const bounds = wrapperRef.current.getBoundingClientRect();
      const data = JSON.parse(
        event.dataTransfer.getData("application/reactflow")
      );

      const position = rfInstance.project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      });

      const id = getNodeID(data.nodeType);

      addNode({
        id,
        type: data.nodeType,
        position,
        data: {},
      });
    },
    [rfInstance, addNode, getNodeID]
  );

  return (
    <div ref={wrapperRef} style={{ height: "70vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setRfInstance}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
      />
    </div>
  );
};
