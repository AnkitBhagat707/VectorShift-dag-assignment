import { useState, useMemo } from "react";
import BaseNode from "./BaseNode/BaseNode";



const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const vars = new Set();
  let match;

  while ((match = regex.exec(text))) {
    vars.add(match[1]);
  }

  return [...vars];
};

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");

  const variables = useMemo(() => extractVariables(text), [text]);

  
  const ALL_POSSIBLE_INPUTS = ["input1", "input2", "input"];

  
  const hiddenInputs = ALL_POSSIBLE_INPUTS.filter(
    (v) => !variables.includes(v)
  );

  return (
    <BaseNode
      title="Text"
      inputs={ALL_POSSIBLE_INPUTS}   
      hiddenInputs={hiddenInputs}    
      outputs={[`${id}-output`]}
    >
      <textarea
        placeholder="Type here... {{input1}}"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          minHeight: "60px",
          resize: "both",
          padding: "6px",
          fontSize: "14px",
        }}
      />
    </BaseNode>
  );
};
