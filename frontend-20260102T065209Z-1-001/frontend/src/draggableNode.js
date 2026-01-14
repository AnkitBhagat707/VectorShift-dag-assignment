export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType: type })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      style={{
        cursor: "grab",
        padding: "10px",
        background: "#1C2536",
        color: "#fff",
        borderRadius: "6px",
        textAlign: "center",
      }}
    >
      {label}
    </div>
  );
};
