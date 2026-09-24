"use client";

import { useLeadStore } from "@/stores/useLeadStore";

export default function LeadsStats() {
  const { pagination, leads } = useLeadStore();

  const total = pagination?.total || 0;
  const newLeads = leads.filter((lead) => lead.status === "NEW").length;
  const inProgress = leads.filter((lead) => lead.status === "IN_PROGRESS").length;
  const closed = leads.filter((lead) => lead.status === "CLOSED").length;

  return (
    <div className="dashboard-stats-grid">
      <div className="dashboard-card">
        <span>Total Leads</span>
        <h3>{total}</h3>
      </div>

      <div className="dashboard-card">
        <span>New Leads</span>
        <h3>{newLeads}</h3>
      </div>

      <div className="dashboard-card">
        <span>In Progress</span>
        <h3>{inProgress}</h3>
      </div>

      <div className="dashboard-card">
        <span>Closed Leads</span>
        <h3>{closed}</h3>
      </div>
    </div>
  );
}