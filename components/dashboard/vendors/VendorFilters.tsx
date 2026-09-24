"use client";
import { JSX } from "react";
import { useEffect, useState } from "react";
import { Search, RotateCcw } from "lucide-react";
import { useDebounce } from "use-debounce";

import { useVendorReviewStore } from "@/stores/useVendorReviewStore";

export default function VendorFilters(): JSX.Element {
    const filters = useVendorReviewStore((state) => state.filters);
    const setFilter = useVendorReviewStore((state) => state.setFilter);

    const [searchText, setSearchText] = useState<string>(
        filters.search || ""
    );

    const [debouncedSearch] = useDebounce(searchText, 500);

    useEffect(() => {
        setFilter("search", debouncedSearch);
    }, [debouncedSearch, setFilter]);

    const resetFilters = (): void => {
        setSearchText("");

        setFilter("search", "");
        setFilter("role", "");
        setFilter("limit", 10);
    };

    return (
        <div className="vendors-card vendors-section">
            <div className="vendors-filter-header">
                <div>
                    <h4>Filter Vendors</h4>
                    <p>Search and review pending suppliers and agencies</p>
                </div>

                <button
                    type="button"
                    className="vendors-reset-btn"
                    onClick={resetFilters}
                >
                    <RotateCcw size={15} />
                    Reset
                </button>
            </div>

            <div className="vendors-filters-grid">
                <div className="vendors-search-field">
                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Search name, company, phone, GST..."
                        value={searchText}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setSearchText(e.target.value)
                        }
                    />
                </div>

                <select
                    className="vendors-select"
                    value={filters.role}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setFilter(
                            "role",
                            e.target.value as "" | "SUPPLIER" | "AGENCY"
                        )
                    }
                >
                    <option value="">All Roles</option>
                    <option value="SUPPLIER">Supplier</option>
                    <option value="AGENCY">Agency</option>
                </select>

                <select
                    className="vendors-select"
                    value={filters.status}
                    disabled
                >
                    <option value="KYC_UNDER_REVIEW">
                        Under Review
                    </option>
                </select>

                <select
                    className="vendors-select"
                    value={filters.limit}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setFilter("limit", Number(e.target.value))
                    }
                >
                    <option value={10}>10 / page</option>
                    <option value={20}>20 / page</option>
                    <option value={50}>50 / page</option>
                </select>
            </div>
        </div>
    );
}