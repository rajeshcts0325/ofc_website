"use client";
import { JSX } from "react";
import type { Vendor } from "@/stores/useVendorReviewStore";

interface VendorApproveModalProps {
    vendor: Vendor | null;
    open: boolean;
    loading: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function VendorApproveModal({
    vendor,
    open,
    loading,
    onClose,
    onConfirm,
}: VendorApproveModalProps): JSX.Element | null {
    if (!open || !vendor) return null;

    return (
        <div className="vendors-modal-overlay">
            <div className="vendors-modal">
                <h3>Approve Vendor</h3>

                <p>
                    Are you sure you want to approve{" "}
                    <strong>{vendor.company?.name}</strong>?
                </p>

                <div className="vendors-modal-actions">
                    <button
                        type="button"
                        className="vendors-modal-cancel"
                        onClick={onClose}
                        disabled={loading}
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        className="vendors-modal-approve"
                        onClick={onConfirm}
                        disabled={loading}
                    >
                        {loading ? "Approving..." : "Approve"}
                    </button>
                </div>
            </div>
        </div>
    );
}