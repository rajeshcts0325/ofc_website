export default function LeadStatusBadge({ status }) {
  const styles = {
    NEW: {
      background: "#d5d51f",
      color: "#000",
    },
    CONTACTED: {
      background: "#38bdf8",
      color: "#fff",
    },
    IN_PROGRESS: {
      background: "#06443f",
      color: "#fff",
    },
    CLOSED: {
      background: "#22c55e",
      color: "#fff",
    },
    REJECTED: {
      background: "#ef4444",
      color: "#fff",
    },
  };

  return (
    <span
      style={{
        ...styles[status],
        padding: "6px 12px",
        borderRadius: "30px",
        fontWeight: "700",
        fontSize: "13px",
      }}
    >
      {status}
    </span>
  );
}