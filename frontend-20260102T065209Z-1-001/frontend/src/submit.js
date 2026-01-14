import { useStore } from "./store";
import { showAlert } from "./showAlert";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    if (!nodes.length) {
      showAlert("⚠️ Pipeline is empty");
      return;
    }

    try {
      const response = await fetch(
        "https://vectorshift-dag-assignment.onrender.com/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes: nodes.map((node) => ({ id: node.id })),
            edges: edges.map((edge) => ({
              source: edge.source,
              target: edge.target,
            })),
          }),
        }
      );

      const data = await response.json();

      showAlert(
        `✅ Pipeline Validated\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDAG: ${
          data.is_dag ? "Yes" : "No"
        }`
      );
    } catch (err) {
      console.error(err);
      showAlert("❌ Backend connection failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 10 }}>
      <button className="vs-submit-btn" onClick={handleSubmit}>
        Run Pipeline
      </button>
    </div>
  );
};
