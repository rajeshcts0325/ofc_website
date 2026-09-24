"use client";

import { JSX, useEffect } from "react";

import { useAdminUsersStore } from "@/stores/useAdminUsersStore";

import UserStats from "@/components/dashboard/users/UserStats";
import UserFilters from "@/components/dashboard/users/UserFilters";
import UserTable from "@/components/dashboard/users/UserTable";
import UserPagination from "@/components/dashboard/users/UserPagination";

import "@/styles/dashboard/users/dashboard-users.css";

export default function AdminUsersPage(): JSX.Element {
    const filters = useAdminUsersStore((state) => state.filters);
    const fetchUsers = useAdminUsersStore((state) => state.fetchUsers);

    useEffect(() => {
        fetchUsers();
    }, [filters, fetchUsers]);

    return (
        <div className="dashboard-page users-page">
            <UserStats />
            <UserFilters />
            <UserTable />
            <UserPagination />
        </div>
    );
}