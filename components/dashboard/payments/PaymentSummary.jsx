function getValue(summary, keys, fallback = 0) {
  for (const key of keys) {
    if (
      summary?.[key] !== undefined &&
      summary?.[key] !== null
    ) {
      return summary[key];
    }
  }

  return fallback;
}

function formatAmount(value) {
  return `₹${Number(value || 0).toLocaleString("en-IN")}`;
}

export default function PaymentSummary({ summary }) {
  const cards = [
    {
      label: "Total Payments",
      value: getValue(summary, [
        "totalPayments",
        "total",
        "count"
      ]),
      className: "total"
    },
    {
      label: "Successful",
      value: getValue(summary, [
        "successfulPayments",
        "successPayments",
        "successful",
        "success"
      ]),
      className: "success"
    },
    {
      label: "Pending",
      value: getValue(summary, [
        "pendingPayments",
        "pending"
      ]),
      className: "pending"
    },
    {
      label: "Failed",
      value: getValue(summary, [
        "failedPayments",
        "failed"
      ]),
      className: "failed"
    },
    {
      label: "Total Revenue",
      value: formatAmount(
        getValue(summary, [
          "totalRevenue",
          "totalAmount",
          "revenue"
        ])
      ),
      className: "revenue"
    }
  ];

  return (
    <section className="admin-payment-section admin-payment-summary-section">
      <div className="admin-payment-summary-grid">
        {cards.map((card) => (
          <div
            className={`admin-payment-summary-card ${card.className}`}
            key={card.label}
          >
            <div className="admin-payment-summary-label">
              {card.label}
            </div>
            <div className="admin-payment-summary-value">
              {card.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}