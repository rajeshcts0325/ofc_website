"use client";

import { JSX } from "react";
import { X } from "lucide-react";
import Skeleton from "react-loading-skeleton";

import { useAdminUsersStore } from "@/stores/useAdminUsersStore";
import UserStatusBadge from "./UserStatusBadge";
import UserTimeline from "./UserTimeline";

export default function UserDetailsDrawer(): JSX.Element | null {
    const drawerOpen = useAdminUsersStore((state) => state.drawerOpen);
    const closeUserDrawer = useAdminUsersStore((state) => state.closeUserDrawer);
    const selectedUser = useAdminUsersStore((state) => state.selectedUser);
    const timeline = useAdminUsersStore((state) => state.timeline);
    const detailsLoading = useAdminUsersStore((state) => state.detailsLoading);

    if (!drawerOpen) return null;

    const activeSub = selectedUser?.subscriptions?.find(
        (sub) => sub.status === "ACTIVE",
    );

    const latestSub = selectedUser?.subscriptions?.[0];

    const subscription = activeSub || latestSub;

    return (
        <div className="users-drawer-overlay" onClick={closeUserDrawer}>
            <aside
                className="users-drawer"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="users-drawer-header">
                    <div>
                        <h3>
                            {detailsLoading ? (
                                <Skeleton width={190} />
                            ) : (
                                selectedUser?.profile?.fullName || "User Details"
                            )}
                        </h3>

                        <p>
                            {detailsLoading ? (
                                <Skeleton width={90} />
                            ) : (
                                selectedUser?.role || "N/A"
                            )}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="users-drawer-close"
                        onClick={closeUserDrawer}
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="users-drawer-body">
                    {detailsLoading ? (
                        <DrawerSkeleton />
                    ) : (
                        <>
                            <section>
                                <h4>Basic Details</h4>

                                <Info
                                    label="Full Name"
                                    value={selectedUser?.profile?.fullName}
                                />

                                <Info
                                    label="Email"
                                    value={selectedUser?.email}
                                />

                                <Info
                                    label="Phone"
                                    value={selectedUser?.profile?.phone}
                                />

                                <div className="users-info-row">
                                    <span>Role</span>
                                    <strong>
                                        {selectedUser?.role ? (
                                            <UserStatusBadge
                                                status={selectedUser.role}
                                            />
                                        ) : (
                                            "N/A"
                                        )}
                                    </strong>
                                </div>

                                <div className="users-info-row">
                                    <span>Account Status</span>
                                    <strong>
                                        {selectedUser?.status ? (
                                            <UserStatusBadge
                                                status={selectedUser.status}
                                            />
                                        ) : (
                                            "N/A"
                                        )}
                                    </strong>
                                </div>

                                <div className="users-info-row">
                                    <span>Onboarding Status</span>
                                    <strong>
                                        {selectedUser?.onboardingStatus ? (
                                            <UserStatusBadge
                                                status={
                                                    selectedUser.onboardingStatus
                                                }
                                            />
                                        ) : (
                                            "N/A"
                                        )}
                                    </strong>
                                </div>
                            </section>

                            <section>
                                <h4>Company Details</h4>

                                <Info
                                    label="Company Name"
                                    value={selectedUser?.company?.name}
                                />

                                <Info
                                    label="Business Type"
                                    value={
                                        selectedUser?.company?.businessType
                                    }
                                />

                                <Info
                                    label="Category"
                                    value={selectedUser?.company?.category}
                                />

                                <Info
                                    label="GST Number"
                                    value={selectedUser?.company?.gstNumber}
                                />

                                <Info
                                    label="PAN Number"
                                    value={selectedUser?.company?.panNumber}
                                />

                                <Info
                                    label="Registration Number"
                                    value={
                                        selectedUser?.company
                                            ?.registrationNumber
                                    }
                                />

                                <Info
                                    label="Experience"
                                    value={
                                        selectedUser?.company?.experience !==
                                            null &&
                                            selectedUser?.company?.experience !==
                                            undefined
                                            ? `${selectedUser.company.experience} Years`
                                            : "N/A"
                                    }
                                />

                                <Info
                                    label="Business Email"
                                    value={
                                        selectedUser?.company?.businessEmail
                                    }
                                />

                                <Info
                                    label="Business Phone"
                                    value={
                                        selectedUser?.company?.businessPhone
                                    }
                                />

                                <Info
                                    label="Website"
                                    value={selectedUser?.company?.website}
                                />

                                <Info
                                    label="Address"
                                    value={selectedUser?.company?.address}
                                />

                                <Info
                                    label="City"
                                    value={selectedUser?.company?.city?.name}
                                />

                                <Info
                                    label="State"
                                    value={selectedUser?.company?.state?.name}
                                />

                                <div className="users-info-row">
                                    <span>Profile Completed</span>
                                    <strong>
                                        {selectedUser?.company
                                            ?.onboardingCompleted
                                            ? "Yes"
                                            : "No"}
                                    </strong>
                                </div>
                            </section>

                            <section>
                                <h4>Subscription</h4>

                                <Info
                                    label="Plan"
                                    value={subscription?.plan?.name}
                                />

                                <Info
                                    label="Amount"
                                    value={
                                        subscription?.amount !== undefined
                                            ? `₹${subscription.amount}`
                                            : "N/A"
                                    }
                                />

                                <Info
                                    label="Billing Cycle"
                                    value={subscription?.billingCycle}
                                />

                                <Info
                                    label="Razorpay Subscription ID"
                                    value={
                                        subscription?.razorpaySubscriptionId
                                    }
                                />

                                <Info
                                    label="Start Date"
                                    value={subscription?.startDate}
                                />

                                <Info
                                    label="End Date"
                                    value={subscription?.endDate}
                                />

                                <div className="users-info-row">
                                    <span>Status</span>
                                    <strong>
                                        <UserStatusBadge
                                            status={
                                                subscription?.status ||
                                                "NO_SUBSCRIPTION"
                                            }
                                        />
                                    </strong>
                                </div>
                            </section>

                            <section>
                                <h4>Verification Timeline</h4>
                                <UserTimeline timeline={timeline} />
                            </section>
                        </>
                    )}
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
        <div className="users-info-row">
            <span>{label}</span>
            <strong>{value || "N/A"}</strong>
        </div>
    );
}

function DrawerSkeleton(): JSX.Element {
    return (
        <>
            {Array.from({ length: 4 }).map((_, index) => (
                <section key={index}>
                    <Skeleton width={150} height={18} />
                    <Skeleton height={16} style={{ marginTop: 16 }} />
                    <Skeleton height={16} style={{ marginTop: 14 }} />
                    <Skeleton height={16} style={{ marginTop: 14 }} />
                </section>
            ))}
        </>
    );
}