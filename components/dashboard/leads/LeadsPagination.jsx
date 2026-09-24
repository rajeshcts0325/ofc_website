"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLeadStore } from "@/stores/useLeadStore";

export default function LeadsPagination() {
  const { pagination, setFilter } = useLeadStore();

  if (!pagination) return null;

  return (
    <div className="leads-card leads-pagination">
      <p>
        Showing page <strong>{pagination.page}</strong> of{" "}
        <strong>{pagination.totalPages || 1}</strong>
      </p>

      <div className="leads-pagination-actions">
        <button
          className="leads-page-btn"
          disabled={!pagination.hasPrevPage}
          onClick={() => setFilter("page", pagination.page - 1)}
        >
          <ChevronLeft size={16} />
          Previous
        </button>

        <button
          className="leads-page-btn active"
          disabled={!pagination.hasNextPage}
          onClick={() => setFilter("page", pagination.page + 1)}
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}