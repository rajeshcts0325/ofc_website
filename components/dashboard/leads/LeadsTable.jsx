"use client";

import { Eye, Phone, Mail } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import { useLeadStore } from "@/stores/useLeadStore";
import LeadStatusBadge from "./LeadStatusBadge";

export default function LeadsTable() {
  const { leads, loading, error } = useLeadStore();

  if (error) {
    return <div className="leads-card leads-section leads-error">{error}</div>;
  }

  return (
    <div className="leads-card leads-section">
      <div className="leads-table-responsive">
        <table className="leads-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Client</th>
              <th>Contact</th>
              <th>Service</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <tr key={index}>
                  <td>
                    <Skeleton width={18} />
                  </td>

                  <td>
                    <Skeleton width={160} height={16} />
                    <Skeleton
                      width={110}
                      height={12}
                      style={{ marginTop: 6 }}
                    />
                  </td>

                  <td>
                    <Skeleton width={120} height={15} />
                    <Skeleton
                      width={150}
                      height={12}
                      style={{ marginTop: 6 }}
                    />
                  </td>

                  <td>
                    <Skeleton width={90} height={26} borderRadius={999} />
                  </td>

                  <td>
                    <Skeleton width={65} height={26} borderRadius={999} />
                  </td>

                  <td>
                    <Skeleton width={70} />
                  </td>

                  <td>
                    <Skeleton width={80} />
                  </td>

                  <td>
                    <Skeleton width={36} height={36} borderRadius={12} />
                  </td>
                </tr>
              ))
            ) : leads.length === 0 ? (
              <tr>
                <td colSpan="8" className="leads-empty">
                  No leads found
                </td>
              </tr>
            ) : (
              leads.map((lead, index) => (
                <tr key={lead.id}>
                  <td>{index + 1}</td>

                  <td>
                    <div className="leads-client-name">
                      {lead.name || "N/A"}
                    </div>
                    <span className="leads-client-email">
                      {lead.subject || "No subject"}
                    </span>
                  </td>

                  <td>
                    <div className="leads-contact-line">
                      <Phone size={14} />
                      {lead.phone || "N/A"}
                    </div>
                    <div className="leads-contact-line muted">
                      <Mail size={14} />
                      {lead.email || "N/A"}
                    </div>
                  </td>

                  <td>
                    <span className="leads-type-badge">{lead.formType}</span>
                  </td>

                  <td>
                    <LeadStatusBadge status={lead.status} />
                  </td>

                  <td>
                    <span
                      className={`leads-priority leads-priority-${lead.priority?.toLowerCase()}`}
                    >
                      {lead.priority}
                    </span>
                  </td>

                  <td>
                    {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                  </td>

                  <td>
                    <button className="leads-action-btn">
                      <Eye size={15} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
