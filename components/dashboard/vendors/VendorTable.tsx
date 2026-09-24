"use client";
import { JSX } from "react";
import { useState } from "react";
import { CheckCircle, XCircle, Eye, Building2 } from "lucide-react";
import Skeleton from "react-loading-skeleton";

import { useVendorReviewStore } from "@/stores/useVendorReviewStore";
import type { Vendor } from "@/stores/useVendorReviewStore";

import VendorStatusBadge from "./VendorStatusBadge";
import VendorDetailsDrawer from "./VendorDetailsDrawer";
import VendorApproveModal from "./VendorApproveModal";
import VendorRejectModal from "./VendorRejectModal";

export default function VendorTable(): JSX.Element {
    const {
        vendors,
        loading,
        error,
        approveVendor,
        rejectVendor,
        actionLoading,
    } = useVendorReviewStore();

    const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [approveModalOpen, setApproveModalOpen] = useState(false);
    const [rejectModalOpen, setRejectModalOpen] = useState(false);

    if (error) {
        return (
            <div className="vendors-card vendors-section vendors-error">
                {error}
            </div>
        );
    }

    return (
        <>
            <div className="vendors-card vendors-section">
                <div className="vendors-table-responsive">
                    <table className="vendors-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Business</th>
                                <th>Registrant name </th>
                                <th>Role</th>
                                <th>City</th>
                                <th>Status</th>
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
                                            <Skeleton width={180} height={16} />
                                            <Skeleton
                                                width={110}
                                                height={12}
                                                style={{ marginTop: 6 }}
                                            />
                                        </td>
                                        <td>
                                            <Skeleton width={140} height={16} />
                                        </td>
                                        <td>
                                            <Skeleton width={80} height={24} />
                                        </td>
                                        <td>
                                            <Skeleton width={100} height={16} />
                                        </td>
                                        <td>
                                            <Skeleton
                                                width={120}
                                                height={26}
                                                borderRadius={999}
                                            />
                                        </td>
                                        <td>
                                            <Skeleton
                                                width={110}
                                                height={36}
                                                borderRadius={10}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : vendors.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="vendors-empty">
                                        No pending vendors found
                                    </td>
                                </tr>
                            ) : (
                                vendors.map((vendor, index) => (
                                    <tr key={vendor.id}>
                                        <td>{index + 1}</td>

                                        <td>
                                            <div className="vendors-title-line">
                                                <Building2 size={15} />
                                                <span>
                                                    {vendor.company?.name || "N/A"}
                                                </span>
                                            </div>

                                            <span className="vendors-muted">
                                                {vendor.company?.category || "N/A"}
                                            </span>
                                        </td>

                                        <td>
                                            <div className="vendors-client-name">
                                                {vendor.profile?.fullName || "N/A"}
                                            </div>
                                        </td>

                                        <td>
                                            <span className="vendors-type-badge">
                                                {vendor.role}
                                            </span>
                                        </td>

                                        <td>
                                            {vendor.company?.city?.name || "N/A"}
                                        </td>

                                        <td>
                                            <VendorStatusBadge
                                                status={vendor.onboardingStatus}
                                            />
                                        </td>

                                        <td>
                                            <div className="vendors-action-group">
                                                <button
                                                    type="button"
                                                    className="vendors-view-btn"
                                                    onClick={() => {
                                                        setSelectedVendor(vendor);
                                                        setDrawerOpen(true);
                                                    }}
                                                    title="View Details"
                                                >
                                                    <Eye size={13} />
                                                </button>

                                                <button
                                                    type="button"
                                                    className="vendors-approve-btn icon-only"
                                                    disabled={actionLoading}
                                                    onClick={() => {
                                                        setSelectedVendor(vendor);
                                                        setApproveModalOpen(true);
                                                    }}
                                                    title="Approve Vendor"
                                                >
                                                    <CheckCircle size={13} />
                                                </button>

                                                <button
                                                    type="button"
                                                    className="vendors-reject-btn icon-only"
                                                    disabled={actionLoading}
                                                    onClick={() => {
                                                        setSelectedVendor(vendor);
                                                        setRejectModalOpen(true);
                                                    }}
                                                    title="Reject Vendor"
                                                >
                                                    <XCircle size={13} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <VendorDetailsDrawer
                vendor={selectedVendor}
                open={drawerOpen}
                onClose={() => {
                    setDrawerOpen(false);
                    setSelectedVendor(null);
                }}
            />

            <VendorApproveModal
                vendor={selectedVendor}
                open={approveModalOpen}
                loading={actionLoading}
                onClose={() => setApproveModalOpen(false)}
                onConfirm={async () => {
                    if (!selectedVendor) return;

                    await approveVendor(selectedVendor.id);

                    setApproveModalOpen(false);
                    setSelectedVendor(null);
                }}
            />

            <VendorRejectModal
                vendor={selectedVendor}
                open={rejectModalOpen}
                loading={actionLoading}
                onClose={() => setRejectModalOpen(false)}
                onConfirm={async (reason: string) => {
                    if (!selectedVendor) return;

                    await rejectVendor(selectedVendor.id, reason);

                    setRejectModalOpen(false);
                    setSelectedVendor(null);
                }}
            />
        </>
    );
}