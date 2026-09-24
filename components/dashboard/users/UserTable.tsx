"use client";

import { Eye, Mail, UserRound } from "lucide-react";
import Skeleton from "react-loading-skeleton";

import { useAdminUsersStore } from "@/stores/useAdminUsersStore";
import UserStatusBadge from "./UserStatusBadge";
import UserDetailsDrawer from "./UserDetailsDrawer";
import { JSX } from "react";

export default function UserTable(): JSX.Element {
    const users = useAdminUsersStore((state) => state.users);
    const loading = useAdminUsersStore((state) => state.loading);
    const error = useAdminUsersStore((state) => state.error);
    const openUserDrawer = useAdminUsersStore((state) => state.openUserDrawer);

    if (error) {
        return <div className="users-card users-section users-error">{error}</div>;
    }

    return (
        <>
            <div className="users-card users-section">
                <div className="users-table-responsive">
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Role</th>
                                <th>Account</th>
                                <th>Company</th>
                                <th>Verification</th>
                                <th>Subscription</th>
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
                                            <Skeleton width={160} height={16} />
                                            <Skeleton
                                                width={190}
                                                height={12}
                                                style={{ marginTop: 6 }}
                                            />
                                        </td>
                                        <td>
                                            <Skeleton
                                                width={80}
                                                height={26}
                                                borderRadius={999}
                                            />
                                        </td>
                                        <td>
                                            <Skeleton
                                                width={80}
                                                height={26}
                                                borderRadius={999}
                                            />
                                        </td>
                                        <td>
                                            <Skeleton width={160} />
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
                                                width={100}
                                                height={26}
                                                borderRadius={999}
                                            />
                                        </td>
                                        <td>
                                            <Skeleton
                                                width={36}
                                                height={36}
                                                borderRadius={10}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : users.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="users-empty">
                                        No users found
                                    </td>
                                </tr>
                            ) : (
                                users.map((user, index) => {
                                    const activeSub = user.subscriptions?.find(
                                        (sub) => sub.status === "ACTIVE",
                                    );

                                    const latestSub = user.subscriptions?.[0];

                                    return (
                                        <tr key={user.id}>
                                            <td>{index + 1}</td>

                                            <td>
                                                <div className="users-title-line">
                                                    <UserRound size={15} />
                                                    <span>
                                                        {user.profile?.fullName || "N/A"}
                                                    </span>
                                                </div>

                                                <div className="users-contact-line muted">
                                                    <Mail size={14} />
                                                    {user.email}
                                                </div>
                                            </td>

                                            <td>
                                                <UserStatusBadge status={user.role} />
                                            </td>

                                            <td>
                                                <UserStatusBadge status={user.status} />
                                            </td>

                                            <td>
                                                <div className="users-client-name">
                                                    {user.company?.name || "N/A"}
                                                </div>

                                                <span className="users-muted">
                                                    {user.company?.category || "No category"}
                                                </span>
                                            </td>

                                            <td>
                                                <UserStatusBadge
                                                    status={user.onboardingStatus}
                                                />
                                            </td>

                                            <td>
                                                <UserStatusBadge
                                                    status={
                                                        activeSub?.status ||
                                                        latestSub?.status ||
                                                        "NO_SUBSCRIPTION"
                                                    }
                                                />
                                            </td>

                                            <td>
                                                <button
                                                    type="button"
                                                    className="users-view-btn"
                                                    onClick={() =>
                                                        openUserDrawer(user.id)
                                                    }
                                                    title="View Details"
                                                >
                                                    <Eye size={15} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <UserDetailsDrawer />
        </>
    );
}