"use client";

import { CheckCircle, Circle, XCircle } from "lucide-react";
import type { UserTimelineStep } from "@/stores/useAdminUsersStore";
import { JSX } from "react";

interface UserTimelineProps {
  timeline: UserTimelineStep[];
}

export default function UserTimeline({
  timeline,
}: UserTimelineProps): JSX.Element {
  return (
    <div className="users-timeline">
      {timeline.map((step, index) => {
        const isRejected = step.status === "REJECTED";

        return (
          <div
            key={step.key}
            className={`users-timeline-item ${
              step.completed ? "completed" : "disabled"
            } ${isRejected ? "rejected" : ""}`}
          >
            <div className="users-timeline-left">
              <div className="users-timeline-icon">
                {isRejected ? (
                  <XCircle size={18} />
                ) : step.completed ? (
                  <CheckCircle size={18} />
                ) : (
                  <Circle size={18} />
                )}
              </div>

              {index !== timeline.length - 1 && (
                <div className="users-timeline-line" />
              )}
            </div>

            <div className="users-timeline-content">
              <h5>{step.label}</h5>

              {step.reason && (
                <p className="users-rejection-reason">{step.reason}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}