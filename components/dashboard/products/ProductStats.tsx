"use client";

import { JSX } from "react";
import { useAdminProductsStore } from "@/stores/useAdminProductsStore";

export default function ProductStats(): JSX.Element {
    const products = useAdminProductsStore((state) => state.products);
    const pagination = useAdminProductsStore((state) => state.pagination);

    const total = pagination?.total || products.length;
    const active = products.filter((item) => item.status === "ACTIVE").length;
    const draft = products.filter((item) => item.status === "DRAFT").length;
    const inactive = products.filter((item) => item.status === "INACTIVE").length;

    return (
        <div className="dashboard-stats-grid">
            <div className="dashboard-card">
                <span>Total Products</span>
                <h3>{total}</h3>
            </div>

            <div className="dashboard-card">
                <span>Active</span>
                <h3>{active}</h3>
            </div>

            <div className="dashboard-card">
                <span>Draft</span>
                <h3>{draft}</h3>
            </div>

            <div className="dashboard-card">
                <span>Inactive</span>
                <h3>{inactive}</h3>
            </div>
        </div>
    );
}