"use client";

import { JSX } from "react";

interface VendorStatusBadgeProps {
    status:
        | "BUSINESS_PROFILE_PENDING"
        | "KYC_UNDER_REVIEW"
        | "KYC_REJECTED"
        | "SUBSCRIPTION_PENDING"
        | "ACTIVE";
}

const styles: Record<
    VendorStatusBadgeProps["status"],
    {
        background: string;
        color: string;
    }
> = {
    BUSINESS_PROFILE_PENDING: {
        background: "#fef3c7",
        color: "#92400e",
    },

    KYC_UNDER_REVIEW: {
        background: "#d5d51f",
        color: "#000",
    },

    KYC_REJECTED: {
        background: "#ef4444",
        color: "#fff",
    },

    SUBSCRIPTION_PENDING: {
        background: "#22c55e",
        color: "#fff",
    },

    ACTIVE: {
        background: "#22c55e",
        color: "#fff",
    },
};

export default function VendorStatusBadge({
    status,
}: VendorStatusBadgeProps): JSX.Element {
    return (
        <span
            style={{
                ...styles[status],
                padding: "2px 10px",
                borderRadius: "30px",
                fontWeight: 500,
                fontSize: "10px",
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {status}
        </span>
    );
}