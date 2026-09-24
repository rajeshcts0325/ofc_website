"use client";

import { useVendorReviewStore } from "@/stores/useVendorReviewStore";
import { JSX } from "react";

export default function VendorStats(): JSX.Element {
    const vendors = useVendorReviewStore((state) => state.vendors);

    const total = vendors.length;

    const suppliers = vendors.filter(
        (vendor) => vendor.role === "SUPPLIER"
    ).length;

    const agencies = vendors.filter(
        (vendor) => vendor.role === "AGENCY"
    ).length;

    const pending = vendors.filter(
        (vendor) => vendor.onboardingStatus === "KYC_UNDER_REVIEW"
    ).length;

    return (
        <div className="dashboard-stats-grid">
            <div className="dashboard-card">
                <span>Total Pending</span>
                <h3>{total}</h3>
            </div>

            <div className="dashboard-card">
                <span>Suppliers</span>
                <h3>{suppliers}</h3>
            </div>

            <div className="dashboard-card">
                <span>Agencies</span>
                <h3>{agencies}</h3>
            </div>

            <div className="dashboard-card">
                <span>Waiting Review</span>
                <h3>{pending}</h3>
            </div>
        </div>
    );
}