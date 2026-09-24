"use client";

import { JSX } from "react";
import { X } from "lucide-react";

import type { Vendor } from "@/stores/useVendorReviewStore";
import VendorStatusBadge from "./VendorStatusBadge";

interface VendorDetailsDrawerProps {
    vendor: Vendor | null;
    open: boolean;
    onClose: () => void;
}

export default function VendorDetailsDrawer({
    vendor,
    open,
    onClose,
}: VendorDetailsDrawerProps): JSX.Element | null {
    if (!open || !vendor) return null;

    const company = vendor.company;
    const kycApplication = company?.kycApplication;

    const activeSub = vendor.subscriptions?.find(
        (subscription) => subscription.status === "ACTIVE"
    );

    return (
        <div className="vendors-drawer-overlay" onClick={onClose}>
            <aside
                className="vendors-drawer"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="vendors-drawer-header">
                    <div>
                        <h3>{company?.name || "Company Details"}</h3>
                        <p>{vendor.role}</p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="vendors-drawer-close"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="vendors-drawer-body">

                    {/* Company Information */}
                    <section>
                        <h4>Company Information</h4>

                        <Info
                            label="Company Name"
                            value={company?.name}
                        />

                        <Info
                            label="Business Type"
                            value={company?.businessType}
                        />

                        <Info
                            label="GST Number"
                            value={company?.gstNumber}
                        />

                        <Info
                            label="PAN Number"
                            value={company?.panNumber}
                        />

                        <Info
                            label="Registration Number"
                            value={company?.registrationNumber}
                        />

                        <Info
                            label="Category"
                            value={company?.category}
                        />

                        <Info
                            label="Experience"
                            value={
                                company?.experience !== null &&
                                    company?.experience !== undefined
                                    ? `${company.experience} Years`
                                    : null
                            }
                        />

                        <Info
                            label="Description"
                            value={company?.description}
                        />

                        <Info
                            label="Website"
                            value={company?.website}
                        />
                    </section>

                    {/* Business Contact */}
                    <section>
                        <h4>Business Contact</h4>

                        <Info
                            label="Business Email"
                            value={company?.businessEmail}
                        />

                        <Info
                            label="Business Phone"
                            value={company?.businessPhone}
                        />

                        <Info
                            label="Address"
                            value={company?.address}
                        />
                    </section>

                    {/* Owner Information */}
                    <section>
                        <h4>Owner Information</h4>

                        <Info
                            label="Owner Name"
                            value={vendor.profile?.fullName}
                        />

                        <Info
                            label="Email"
                            value={vendor.email}
                        />

                        <Info
                            label="Phone"
                            value={vendor.profile?.phone}
                        />
                    </section>

                    {/* Location */}
                    <section>
                        <h4>Location</h4>

                        <Info
                            label="State"
                            value={company?.state?.name}
                        />

                        <Info
                            label="City"
                            value={company?.city?.name}
                        />
                    </section>

                    {/* Verification */}
                    <section>
                        <h4>Verification</h4>

                        <Info
                            label="Onboarding Status"
                            value={vendor.onboardingStatus}
                        />

                        <Info
                            label="KYC Status"
                            value={kycApplication?.status}
                        />

                        <Info
                            label="Submitted At"
                            value={
                                kycApplication?.submittedAt
                                    ? new Date(
                                        kycApplication.submittedAt
                                    ).toLocaleString()
                                    : null
                            }
                        />

                        <Info
                            label="Submitted Version"
                            value={kycApplication?.submittedVersion}
                        />

                        {kycApplication?.verifiedAt && (
                            <Info
                                label="Verified At"
                                value={new Date(
                                    kycApplication.verifiedAt
                                ).toLocaleString()}
                            />
                        )}

                        {kycApplication?.rejectedAt && (
                            <Info
                                label="Rejected At"
                                value={new Date(
                                    kycApplication.rejectedAt
                                ).toLocaleString()}
                            />
                        )}

                        <div className="vendors-info-row">
                            <span>Status</span>

                            <VendorStatusBadge
                                status={vendor.onboardingStatus}
                            />
                        </div>

                        {kycApplication?.rejectionReason && (
                            <div className="vendors-info-row">
                                <span>Rejection Reason</span>

                                <strong>
                                    {kycApplication.rejectionReason}
                                </strong>
                            </div>
                        )}
                    </section>

                    {/* Subscription */}
                    <section>
                        <h4>Subscription</h4>

                        <Info
                            label="Plan"
                            value={activeSub?.planName}
                        />

                        <Info
                            label="Amount"
                            value={
                                activeSub?.amount !== undefined &&
                                    activeSub?.amount !== null
                                    ? `₹${activeSub.amount}`
                                    : null
                            }
                        />

                        <Info
                            label="Payment ID"
                            value={activeSub?.paymentId}
                        />

                        <Info
                            label="Status"
                            value={activeSub?.status}
                        />

                        <Info
                            label="Start Date"
                            value={
                                activeSub?.startDate
                                    ? new Date(
                                        activeSub.startDate
                                    ).toLocaleDateString()
                                    : null
                            }
                        />

                        <Info
                            label="End Date"
                            value={
                                activeSub?.endDate
                                    ? new Date(
                                        activeSub.endDate
                                    ).toLocaleDateString()
                                    : null
                            }
                        />
                    </section>
                </div>
            </aside>
        </div>
    );
}

function Info({
    label,
    value,
}: {
    label: string;
    value?: string | number | null;
}): JSX.Element {
    return (
        <div className="vendors-info-row">
            <span>{label}</span>

            <strong>{value || "N/A"}</strong>
        </div>
    );
}