"use client";
import { JSX } from "react";
import { useEffect } from "react";

import VendorStats from "@/components/dashboard/vendors/VendorStats";
import VendorFilters from "@/components/dashboard/vendors/VendorFilters";
import VendorTable from "@/components/dashboard/vendors/VendorTable";

import { useVendorReviewStore } from "@/stores/useVendorReviewStore";

import "@/styles/dashboard/vendors/dashboard-vendors.css";

export default function AdminVendorsPage(): JSX.Element {
    const filters = useVendorReviewStore((state) => state.filters);
    const fetchVendors = useVendorReviewStore((state) => state.fetchVendors);

    useEffect(() => {
        fetchVendors();
    }, [filters, fetchVendors]);

    return (
        <div className="dashboard-page vendors-page">
            <VendorStats />
            <VendorFilters />
            <VendorTable />
        </div>
    );
}