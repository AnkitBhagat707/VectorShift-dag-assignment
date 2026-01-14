import BaseNode from "./BaseNode/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
    >
      <div>This is a LLM</div>
    </BaseNode>
  );
};
