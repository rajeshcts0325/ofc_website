"use client";

import { JSX, useEffect, useState } from "react";
import { Search, RotateCcw } from "lucide-react";
import { useDebounce } from "use-debounce";
import { useProductCategoryStore } from "@/stores/useProductCategoryStore";
import {
    ProductStatus,
    useAdminProductsStore,
} from "@/stores/useAdminProductsStore";

export default function ProductFilters(): JSX.Element {
    const filters = useAdminProductsStore((state) => state.filters);
    const setFilter = useAdminProductsStore((state) => state.setFilter);
    const resetFilters = useAdminProductsStore((state) => state.resetFilters);
    const categories = useProductCategoryStore((state) => state.categories);
    const fetchCategories = useProductCategoryStore((state) => state.fetchCategories);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    const [searchText, setSearchText] = useState<string>(filters.search || "");
    const [debouncedSearch] = useDebounce(searchText, 500);

    useEffect(() => {
        setFilter("search", debouncedSearch);
    }, [debouncedSearch, setFilter]);

    const handleReset = (): void => {
        setSearchText("");
        resetFilters();
    };

    return (
        <div className="users-card users-section">
            <div className="users-filter-header">
                <div>
                    <h4>Filter Products</h4>
                    <p>Search and filter product catalog items</p>
                </div>

                <button type="button" className="users-reset-btn" onClick={handleReset}>
                    <RotateCcw size={15} />
                    Reset
                </button>
            </div>

            <div className="users-filters-grid">
                <div className="users-search-field">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search title, category, brand..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>

                <select
                    className="users-select"
                    value={filters.status}
                    onChange={(e) =>
                        setFilter("status", e.target.value as "" | ProductStatus)
                    }
                >
                    <option value="">All Status</option>
                    <option value="ACTIVE">Active</option>
                    <option value="DRAFT">Draft</option>
                    <option value="INACTIVE">Inactive</option>
                    <option value="REJECTED">Rejected</option>
                </select>

                <select
                    className="users-select"
                    value={filters.categoryId}
                    onChange={(e) => setFilter("categoryId", e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <select
                    className="users-select"
                    value={filters.limit}
                    onChange={(e) => setFilter("limit", Number(e.target.value))}
                >
                    <option value={10}>10 / page</option>
                    <option value={20}>20 / page</option>
                    <option value={50}>50 / page</option>
                </select>
            </div>
        </div>
    );
}