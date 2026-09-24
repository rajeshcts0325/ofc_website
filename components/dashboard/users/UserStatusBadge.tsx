import type {
    UserStatus,
    UserRole,
    OnboardingStatus,
    SubscriptionStatus,
} from "@/stores/useAdminUsersStore";
import { JSX } from "react";

type BadgeValue =
    | UserStatus
    | UserRole
    | OnboardingStatus
    | SubscriptionStatus
    | "NO_SUBSCRIPTION";

interface UserStatusBadgeProps {
    status: BadgeValue;
}

const styles: Record<BadgeValue, { background: string; color: string }> = {
    
    // Account Status
    ACTIVE: { background: "#22c55e", color: "#fff" },
    SUSPENDED: { background: "#ef4444", color: "#fff" },
    INACTIVE: { background: "#e5e7eb", color: "#374151" },

    // User Role
    ADMIN: { background: "#06443f", color: "#fff" },
    SUPPLIER: { background: "#d5d51f", color: "#000" },
    AGENCY: { background: "#38bdf8", color: "#fff" },

    // Onboarding Status
    EMAIL_VERIFICATION_PENDING: {
        background: "#fef3c7",
        color: "#92400e",
    },

    BUSINESS_PROFILE_PENDING: {
        background: "#fef3c7",
        color: "#92400e",
    },

    KYC_PENDING: {
        background: "#fef3c7",
        color: "#92400e",
    },

    KYC_UNDER_REVIEW: {
        background: "#fef3c7",
        color: "#92400e",
    },

    KYC_REJECTED: {
        background: "#ef4444",
        color: "#fff",
    },

    SUBSCRIPTION_PENDING: {
        background: "#dbeafe",
        color: "#1e40af",
    },

    // Subscription Status
    PENDING: {
        background: "#fef3c7",
        color: "#92400e",
    },

    EXPIRED: {
        background: "#ef4444",
        color: "#fff",
    },

    FAILED: {
        background: "#ef4444",
        color: "#fff",
    },

    NO_SUBSCRIPTION: {
        background: "#e5e7eb",
        color: "#000",
    },
};

export default function UserStatusBadge({
    status,
}: UserStatusBadgeProps): JSX.Element {
    return (
        <span
            style={{
                ...styles[status],
                padding: "4px 10px",
                borderRadius: "30px",
                fontWeight: 500,
                fontSize: "10px",
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {status.replaceAll("_", " ")}
        </span>
    );
}