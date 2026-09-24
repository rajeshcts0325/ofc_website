"use client";

import { JSX } from "react";

export default function ProductStatusBadge({ status }: { status: string }): JSX.Element {
    return (
        <span className={`users-status-badge status-${status.toLowerCase()}`}>
            {status.replaceAll("_", " ")}
        </span>
    );
}