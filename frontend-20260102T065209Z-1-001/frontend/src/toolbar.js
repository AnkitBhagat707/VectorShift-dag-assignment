import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 54,
        padding: "16px 0",
        marginTop: 12,
        fontWeight: "bold",
        fontSize: 18,
      }}
    >
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
    </div>
  );
};
