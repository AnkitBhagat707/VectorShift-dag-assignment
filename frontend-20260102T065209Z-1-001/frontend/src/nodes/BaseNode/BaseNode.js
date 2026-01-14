import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  hiddenInputs = [],
}) => {
  return (
    <div className="vs-node">

      {/* Node Title */}
      <div className="vs-node-title">
        {title}
      </div>

      {/* Left Handles (Inputs) */}
      {inputs.map((input, index) => {
        const isHidden = hiddenInputs.includes(input);

        return (
          <Handle
            key={input}
            id={input}
            type="target"
            position={Position.Left}
            className="vs-handle vs-handle-input"
            style={{
              top: 70 + index * 22,
              opacity: isHidden ? 0 : 1,
              pointerEvents: isHidden ? "none" : "auto",
            }}
          />
        );
      })}

      {/* Node Body */}
      <div className="vs-node-body">
        {children}
      </div>

      {/* Right Handles (Outputs) */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          id={output}
          type="source"
          position={Position.Right}
          className="vs-handle vs-handle-output"
          style={{
            top: 70 + index * 22,
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
