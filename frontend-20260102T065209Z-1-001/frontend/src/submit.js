import { useStore } from "./store";
import { showAlert } from "./showAlert";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    if (nodes.length === 0) {
      showAlert("Pipeline is empty", "warning");
      return;
    }

    try {
      const response = await fetch("https://vectorshift-dag-assignment.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: nodes.map((n) => ({ id: n.id })),
          edges: edges.map((e) => ({
            source: e.source,
            target: e.target,
          })),
        }),
      });

      const data = await response.json();

      showAlert(
  `Nodes: ${data.num_nodes}, Edges: ${data.num_edges}, DAG: ${data.is_dag ? "Yes" : "No"}`,
  "success"
);

    } catch (error) {
      console.error(error);
      showAlert("Backend error", "error");
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
