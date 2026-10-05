"use client";

import { RotateCcw, Search } from "lucide-react";

export default function PaymentFilters({
  search,
  status,
  statusOptions,
  onSearchChange,
  onSearch,
  onStatusChange,
  onReset
}) {
  return (
    <section className="admin-payment-section admin-payment-filter-section">
      <div className="admin-payment-filter-header">
        <div>
          <h4>Filter Payments</h4>
          <p>Search and filter user payment transactions.</p>
        </div>

        <button
          type="button"
          className="admin-payment-reset-btn"
          onClick={onReset}
        >
          <RotateCcw size={15} />
          Reset
        </button>
      </div>

      <div className="admin-payment-filter-row">
        <div className="admin-payment-search-box">
          <span className="admin-payment-search-icon">
            <Search size={18} />
          </span>

          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch();
              }
            }}
            placeholder="Search by name, email, payment ID..."
          />

          <button
            type="button"
            onClick={onSearch}
            className="admin-payment-search-button"
          >
            Search
          </button>
        </div>

        <div className="admin-payment-status-filter">
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option === "ALL" ? "All Status" : option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}