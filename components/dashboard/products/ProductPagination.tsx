"use client";

import { JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAdminProductsStore } from "@/stores/useAdminProductsStore";

export default function ProductPagination(): JSX.Element | null {
    const pagination = useAdminProductsStore((state) => state.pagination);
    const setFilter = useAdminProductsStore((state) => state.setFilter);

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
                    disabled={!pagination.hasPrev}
                    onClick={() => setFilter("page", pagination.page - 1)}
                >
                    <ChevronLeft size={16} />
                    Previous
                </button>

                <button
                    type="button"
                    className="users-page-btn active"
                    disabled={!pagination.hasNext}
                    onClick={() => setFilter("page", pagination.page + 1)}
                >
                    Next
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
}