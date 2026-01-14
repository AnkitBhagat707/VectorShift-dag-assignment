import { useState } from "react";
import BaseNode from "./BaseNode/BaseNode";

export const InputNode = ({ id }) => {
  const [name, setName] = useState("input1");

  return (
    <BaseNode title="Input" outputs={[name]}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};
