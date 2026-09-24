"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAdminUsersStore } from "@/stores/useAdminUsersStore";
import { JSX } from "react";

export default function UserPagination(): JSX.Element | null {
  const pagination = useAdminUsersStore((state) => state.pagination);
  const setFilter = useAdminUsersStore((state) => state.setFilter);

  if (!pagination) return null;

  return (
    <div className="users-card users-pagination">
      <p>
        Showing page <strong>{pagination.page}</strong> of{" "}
        <strong>{pagination.totalPages || 1}</strong>
      </p>

      <div className="users-pagination-actions">
        <button
          type="button"
          className="users-page-btn"
          disabled={!pagination.hasPrevPage}
          onClick={() => setFilter("page", pagination.page - 1)}
        >
          <ChevronLeft size={16} />
          Previous
        </button>

        <button
          type="button"
          className="users-page-btn active"
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