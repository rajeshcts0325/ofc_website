"use client";
import { JSX } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import type { Vendor } from "@/stores/useVendorReviewStore";

interface VendorRejectModalProps {
    vendor: Vendor | null;
    open: boolean;
    loading: boolean;
    onClose: () => void;
    onConfirm: (reason: string) => void;
}

export default function VendorRejectModal({
    vendor,
    open,
    loading,
    onClose,
    onConfirm,
}: VendorRejectModalProps): JSX.Element | null {
    const [reason, setReason] = useState("");

    if (!open || !vendor) return null;

    const handleSubmit = () => {
        if (reason.trim().length < 10) {
            toast.error("Please enter at least 10 characters reason");
            return;
        }

        onConfirm(reason.trim());
    };

    return (
        <div className="vendors-modal-overlay">
            <div className="vendors-modal">
                <h3>Reject Vendor</h3>

                <p>
                    Add rejection reason for{" "}
                    <strong>{vendor.company?.name}</strong>.
                </p>

                <textarea
                    className="vendors-reject-textarea"
                    placeholder="Example: GST details are invalid. Please update correct business information."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                />

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
                        className="vendors-modal-reject"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Rejecting..." : "Reject"}
                    </button>
                </div>
            </div>
        </div>
    );
}