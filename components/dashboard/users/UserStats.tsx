"use client";

import { useAdminUsersStore } from "@/stores/useAdminUsersStore";
import { JSX } from "react";

export default function UserStats(): JSX.Element {
    const users = useAdminUsersStore((state) => state.users);
    const pagination = useAdminUsersStore((state) => state.pagination);

    const total = pagination?.total || users.length;
    const suppliers = users.filter(
        (user) => user.role === "SUPPLIER"
    ).length;
    const agencies = users.filter(
        (user) => user.role === "AGENCY"
    ).length;
    const admins = users.filter(
        (user) => user.role === "ADMIN"
    ).length;

    return (
        <div className="dashboard-stats-grid">
            <div className="dashboard-card">
                <span>Total Users</span>
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
                <span>Admins</span>
                <h3>{admins}</h3>
            </div>
        </div>
    );
}