import { useState } from "react";
import BaseNode from "./BaseNode/BaseNode";

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.outputName || id.replace("customOutput-", "output")
  );

  return (
    <BaseNode title="Output" inputs={[`${id}-value`]} outputs={[]}>
      <label>
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
