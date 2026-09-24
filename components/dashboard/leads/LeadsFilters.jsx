"use client";

import { useEffect, useState } from "react";
import { Search, RotateCcw } from "lucide-react";
import { useDebounce } from "use-debounce";
import { useLeadStore } from "@/stores/useLeadStore";

export default function LeadsFilters() {
  const { filters, setFilter } = useLeadStore();

  const [searchText, setSearchText] = useState(filters.search || "");
  const [debouncedSearch] = useDebounce(searchText, 500);

  useEffect(() => {
    setFilter("search", debouncedSearch);
  }, [debouncedSearch]);

  const resetFilters = () => {
    setSearchText("");
    setFilter("search", "");
    setFilter("status", "");
    setFilter("formType", "");
    setFilter("priority", "");
    setFilter("limit", 10);
  };

  return (
    <div className="leads-card leads-section">
      <div className="leads-filter-header">
        <div>
          <h4>Filter Leads</h4>
          <p>Search and filter customer inquiries</p>
        </div>

        <button className="leads-reset-btn" onClick={resetFilters}>
          <RotateCcw size={15} />
          Reset
        </button>
      </div>

      <div className="leads-filters-grid">
        <div className="leads-search-field">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search name, phone, email..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <select
          className="leads-select"
          value={filters.status}
          onChange={(e) => setFilter("status", e.target.value)}
        >
          <option value="">All Status</option>
          <option value="NEW">New</option>
          <option value="CONTACTED">Contacted</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="CLOSED">Closed</option>
          <option value="REJECTED">Rejected</option>
        </select>

        <select
          className="leads-select"
          value={filters.formType}
          onChange={(e) => setFilter("formType", e.target.value)}
        >
          <option value="">All Types</option>
          <option value="ENQUIRY">Enquiry</option>
          <option value="MATERIAL_INQUIRY">Material</option>
          <option value="EQUIPMENT_RENTAL">Equipment</option>
          <option value="INSURANCE">Insurance</option>
          <option value="FINANCE">Finance</option>
        </select>

        <select
          className="leads-select"
          value={filters.limit}
          onChange={(e) => setFilter("limit", e.target.value)}
        >
          <option value="10">10 / page</option>
          <option value="20">20 / page</option>
          <option value="50">50 / page</option>
        </select>
      </div>
    </div>
  );
}
