"use client";

import { useEffect, useState } from "react";
import PaymentSummary from "./PaymentSummary";
import PaymentFilters from "./PaymentFilters";
import PaymentTable from "./PaymentTable";
import PaymentPagination from "./PaymentPagination";
import AdminPaymentReceipt from "./AdminPaymentReceipt";
import PaymentDetailsDrawer from "./PaymentDetailsDrawer";
import "./admin-payment.css";

const STATUS_OPTIONS = [
  "ALL",
  "SUCCESS",
  "PENDING",
  "CREATED",
  "FAILED",
  "REFUNDED"
];

function findPayments(data) {
  if (Array.isArray(data)) return data;
  if (!data || typeof data !== "object") return [];

  const possibleKeys = [
    "payments",
    "paymentLogs",
    "transactions",
    "records",
    "items",
    "results"
  ];

  for (const key of possibleKeys) {
    if (Array.isArray(data[key])) return data[key];
  }

  if (data.data) {
    const nested = findPayments(data.data);
    if (nested.length) return nested;
  }

  return [];
}

function findSummary(data) {
  if (!data || typeof data !== "object") return {};

  if (data.summary && typeof data.summary === "object") {
    return data.summary;
  }

  if (data.data?.summary && typeof data.data.summary === "object") {
    return data.data.summary;
  }

  return {};
}

function findPagination(data) {
  if (!data || typeof data !== "object") return {};

  if (data.pagination && typeof data.pagination === "object") {
    return data.pagination;
  }

  if (
    data.data?.pagination &&
    typeof data.data.pagination === "object"
  ) {
    return data.data.pagination;
  }

  return {};
}

export default function AdminPaymentLog() {
  const [payments, setPayments] = useState([]);
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedPaymentId, setSelectedPaymentId] = useState(null);

  const limit = 10;

  const fetchPayments = async (
    currentPage = page,
    currentSearch = search,
    currentStatus = status
  ) => {
    try {
      setLoading(true);
      setError("");

      const params = new URLSearchParams({
        page: String(currentPage),
        limit: String(limit)
      });

      if (currentSearch.trim()) {
        params.set("search", currentSearch.trim());
      }

      if (currentStatus !== "ALL") {
        params.set("status", currentStatus);
      }

      const response = await fetch(
        `/api/v1/admin/payments?${params.toString()}`,
        {
          method: "GET",
          credentials: "include",
          cache: "no-store"
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Failed to fetch payments"
        );
      }

      setPayments(findPayments(data));
      setSummary(findSummary(data));
      setPagination(findPagination(data));
    } catch (err) {
      setError(err.message || "Something went wrong");
      setPayments([]);
      setSummary({});
      setPagination({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, [page, status]);

  const handleSearch = () => {
    if (page !== 1) {
      setPage(1);
      return;
    }

    fetchPayments(1, search, status);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setPage(1);
  };

  const handleReset = () => {
    setSearch("");
    setStatus("ALL");
    setPage(1);
    fetchPayments(1, "", "ALL");
  };

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
  };

  const handleCloseDetails = () => {
    setSelectedPayment(null);
  };

  const handleViewReceipt = (paymentId) => {
    if (!paymentId) return;
    setSelectedPaymentId(paymentId);
  };

  const handleCloseReceipt = () => {
    setSelectedPaymentId(null);
  };

  return (
    <div className="admin-payment-wrapper">
      {/* <div className="admin-payment-header">
        <div>
          <h1>Payment Management</h1>
          <p>Manage and monitor all user payments and subscriptions.</p>
        </div>
      </div> */}

      <PaymentSummary summary={summary} />

      <PaymentFilters
        search={search}
        status={status}
        statusOptions={STATUS_OPTIONS}
        onSearchChange={setSearch}
        onSearch={handleSearch}
        onStatusChange={handleStatusChange}
        onReset={handleReset}
      />

      {error && (
        <div className="admin-payment-section admin-payment-error">
          {error}
        </div>
      )}

      <PaymentTable
        payments={payments}
        loading={loading}
        onViewDetails={handleViewDetails}
        onViewReceipt={handleViewReceipt}
      />

      <PaymentPagination
        page={page}
        pagination={pagination}
        onPageChange={setPage}
      />

      <PaymentDetailsDrawer
        payment={selectedPayment}
        open={Boolean(selectedPayment)}
        onClose={handleCloseDetails}
      />

      {selectedPaymentId && (
        <AdminPaymentReceipt
          paymentId={selectedPaymentId}
          onClose={handleCloseReceipt}
        />
      )}
    </div>
  );
}