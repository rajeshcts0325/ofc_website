"use client";

import { Eye, Receipt } from "lucide-react";

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
}

function formatAmount(value, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2
  }).format(Number(value || 0));
}

function getStatusClass(status) {
  const value = String(status || "").toUpperCase();

  if (value === "SUCCESS") return "success";
  if (value === "PENDING" || value === "CREATED") return "warning";
  if (value === "FAILED" || value === "REFUNDED" || value === "REJECTED") {
    return "danger";
  }

  return "neutral";
}

export default function PaymentTable({
  payments,
  loading,
  onViewDetails,
  onViewReceipt
}) {
  const paymentList = Array.isArray(payments) ? payments : [];

  return (
    <section className="admin-payment-section admin-payment-table-section">
      <div className="admin-payment-table-heading">
        <div>
          <h2>Payment Transactions</h2>
          <p>View payment and subscription transactions.</p>
        </div>
        <span className="admin-payment-record-count">
          {paymentList.length} Records
        </span>
      </div>

      <div className="admin-payment-table-scroll">
        <table className="admin-payment-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>User</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="admin-payment-table-message">
                  <div className="admin-payment-loader">
                    Loading payments...
                  </div>
                </td>
              </tr>
            ) : paymentList.length === 0 ? (
              <tr>
                <td colSpan="6" className="admin-payment-table-message">
                  <div className="admin-payment-empty-state">
                    <div className="admin-payment-empty-icon">₹</div>
                    <strong>No payment records found</strong>
                    <span>
                      Payment transactions will appear here once available.
                    </span>
                  </div>
                </td>
              </tr>
            ) : (
              paymentList.map((item, index) => {
                const transaction = item?.payment;
                const subscription = item?.subscription;

                return (
                  <tr
                    key={
                      item?.id ||
                      transaction?.id ||
                      index
                    }
                  >
                    <td>
                      <span className="admin-payment-date">
                        {formatDate(
                          transaction?.paidAt ||
                          transaction?.createdAt
                        )}
                      </span>
                    </td>

                    <td>
                      <div className="admin-payment-user">
                        <strong>{item?.user?.name || "-"}</strong>
                        <span>{item?.user?.email || "-"}</span>
                      </div>
                    </td>

                    <td>
                      <div className="admin-payment-plan">
                        <strong>
                          {subscription?.plan?.name || "-"}
                        </strong>
                        <span>
                          {subscription?.billingCycle || "-"}
                        </span>
                      </div>
                    </td>

                    <td>
                      <strong className="admin-payment-amount">
                        {formatAmount(
                          transaction?.amount,
                          transaction?.currency
                        )}
                      </strong>
                    </td>

                    <td>
                      <span
                        className={`admin-payment-status ${getStatusClass(
                          transaction?.status
                        )}`}
                      >
                        {transaction?.status || "-"}
                      </span>
                    </td>

                    <td>
                      <div className="vendors-action-group">
                        <button
                          type="button"
                          className="vendors-view-btn"
                          onClick={() => onViewDetails(item)}
                          title="View Details"
                        >
                          <Eye size={13} />
                        </button>

                        <button
                          type="button"
                          className="vendors-view-btn"
                          disabled={transaction?.status !== "SUCCESS"}
                          onClick={() => onViewReceipt(item.id)}
                          title="View Receipt"
                        >
                          <Receipt size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}