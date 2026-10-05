"use client";

import { X } from "lucide-react";

function formatDate(value) {
  if (!value) return "N/A";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "N/A";
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

  if (value === "SUCCESS" || value === "ACTIVE") {
    return "admin-payment-drawer-status admin-payment-drawer-status-success";
  }

  if (value === "PENDING" || value === "CREATED") {
    return "admin-payment-drawer-status admin-payment-drawer-status-warning";
  }

  if (value === "FAILED" || value === "REFUNDED" || value === "REJECTED") {
    return "admin-payment-drawer-status admin-payment-drawer-status-danger";
  }

  return "admin-payment-drawer-status admin-payment-drawer-status-neutral";
}

export default function PaymentDetailsDrawer({ payment, open, onClose }) {
  if (!open || !payment) return null;

  const user = payment.user;
  const company = payment.company;
  const transaction = payment.payment;
  const subscription = payment.subscription;

  return (
    <div className="admin-payment-drawer-overlay" onClick={onClose}>
      <aside
        className="admin-payment-drawer"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="admin-payment-drawer-header">
          <div>
            <h3>Payment Details</h3>
            <p>{user?.name || user?.email || "Payment Transaction"}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="admin-payment-drawer-close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="admin-payment-drawer-body">
          <section>
            <h4>Payment Information</h4>

            <Info label="Payment ID" value={transaction?.id} />

            <Info
              label="Razorpay Payment ID"
              value={transaction?.razorpayPaymentId}
            />

            <Info
              label="Razorpay Order ID"
              value={transaction?.razorpayOrderId}
            />

            <Info
              label="Amount"
              value={formatAmount(
                transaction?.amount,
                transaction?.currency
              )}
            />

            <Info label="Currency" value={transaction?.currency} />

            <StatusInfo
              label="Payment Status"
              status={transaction?.status}
            />

            <Info label="Payment Method" value={transaction?.method} />

            <Info
              label="Created At"
              value={formatDate(transaction?.createdAt)}
            />

            <Info
              label="Paid At"
              value={formatDate(transaction?.paidAt)}
            />
          </section>

          <section>
            <h4>User Information</h4>

            <Info label="Name" value={user?.name} />
            <Info label="Email" value={user?.email} />
            {/* <Info label="User ID" value={user?.id} /> */}
          </section>

          <section>
            <h4>Company Information</h4>

            <Info label="Company Name" value={company?.name} />
            <Info label="Business Type" value={company?.businessType} />
            <Info label="GST Number" value={company?.gstNumber} />
            <Info label="PAN Number" value={company?.panNumber} />

            <Info
              label="Registration Number"
              value={company?.registrationNumber}
            />

            <Info label="Business Email" value={company?.businessEmail} />
            <Info label="Business Phone" value={company?.businessPhone} />
            <Info label="Address" value={company?.address} />
          </section>

          <section>
            <h4>Subscription Information</h4>

            <Info
              label="Plan"
              value={subscription?.plan?.name || subscription?.planName}
            />

            <Info
              label="Billing Cycle"
              value={subscription?.billingCycle}
            />

            {/* <Info
              label="Subscription ID"
              value={subscription?.id}
            /> */}

            <StatusInfo
              label="Status"
              status={subscription?.status}
            />

            <Info
              label="Start Date"
              value={formatDate(subscription?.startDate)}
            />

            <Info
              label="End Date"
              value={formatDate(subscription?.endDate)}
            />

            <Info
              label="Created At"
              value={formatDate(subscription?.createdAt)}
            />
          </section>
        </div>
      </aside>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="admin-payment-info-row">
      <span>{label}</span>
      <strong>{value || "N/A"}</strong>
    </div>
  );
}

function StatusInfo({ label, status }) {
  return (
    <div className="admin-payment-info-row">
      <span>{label}</span>
      <strong>
        <span className={getStatusClass(status)}>
          {status || "N/A"}
        </span>
      </strong>
    </div>
  );
}