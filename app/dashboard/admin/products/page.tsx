"use client";

import { JSX, useEffect } from "react";
import { Plus } from "lucide-react";

import { useAdminProductsStore } from "@/stores/useAdminProductsStore";
import ProductStats from "@/components/dashboard/products/ProductStats";
import ProductFilters from "@/components/dashboard/products/ProductFilters";
import ProductTable from "@/components/dashboard/products/ProductTable";
import ProductPagination from "@/components/dashboard/products/ProductPagination";
import ProductDrawer from "@/components/dashboard/products/ProductDrawer";
import "@/styles/dashboard/products/dashboard-products.css";

export default function AdminProductsPage(): JSX.Element {
    const fetchProducts = useAdminProductsStore((state) => state.fetchProducts);
    const openCreateDrawer = useAdminProductsStore((state) => state.openCreateDrawer);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div className="users-page">
            <div className="users-page-header">
                <div>
                    <h2>Products</h2>
                    <p>Manage product listings, images, status and public catalog items.</p>
                </div>

                <button type="button" className="users-reset-btn" onClick={openCreateDrawer}>
                    <Plus size={16} />
                    Add Product
                </button>
            </div>

            <ProductStats />
            <ProductFilters />
            <ProductTable />
            <ProductPagination />
            <ProductDrawer />
        </div>
    );
}