"use client";

import { JSX } from "react";
import { Eye, Pencil, Trash2, Package } from "lucide-react";
import Skeleton from "react-loading-skeleton";

import { useAdminProductsStore } from "@/stores/useAdminProductsStore";
import ProductStatusBadge from "./ProductStatusBadge";

export default function ProductTable(): JSX.Element {
    const products = useAdminProductsStore((state) => state.products);
    const loading = useAdminProductsStore((state) => state.loading);
    const error = useAdminProductsStore((state) => state.error);
    const openEditDrawer = useAdminProductsStore((state) => state.openEditDrawer);
    const deleteProduct = useAdminProductsStore((state) => state.deleteProduct);

    if (error) {
        return <div className="users-card users-section users-error">{error}</div>;
    }

    return (
        <div className="users-card users-section">
            <div className="users-table-responsive">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            Array.from({ length: 8 }).map((_, index) => (
                                <tr key={index}>
                                    <td><Skeleton width={20} /></td>
                                    <td>
                                        <Skeleton width={180} />
                                        <Skeleton width={120} style={{ marginTop: 6 }} />
                                    </td>
                                    <td><Skeleton width={130} /></td>
                                    <td><Skeleton width={80} /></td>
                                    <td><Skeleton width={60} /></td>
                                    <td><Skeleton width={90} height={26} borderRadius={999} /></td>
                                    <td><Skeleton width={100} /></td>
                                    <td><Skeleton width={90} height={36} /></td>
                                </tr>
                            ))
                        ) : products.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="users-empty">
                                    No products found
                                </td>
                            </tr>
                        ) : (
                            products.map((product, index) => (
                                <tr key={product.id}>
                                    <td>{index + 1}</td>

                                    <td>
                                        <div className="users-title-line">
                                            {product.imageUrl ? (
                                                <img
                                                    src={product.imageUrl}
                                                    alt={product.title}
                                                    className="product-table-img"
                                                />
                                            ) : (
                                                <span className="product-table-placeholder">
                                                    <Package size={16} />
                                                </span>
                                            )}

                                            <div>
                                                <span>{product.title}</span>
                                                <div className="users-muted">
                                                    {product.brand || "No brand"}{" "}
                                                    {product.productModel
                                                        ? `• ${product.productModel}`
                                                        : ""}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className="users-client-name">
                                            {product.category?.name || "No category"}
                                        </div>
                                        <span className="users-muted">
                                            {product.subCategory?.name || "No sub category"}

                                        </span>
                                    </td>

                                    <td>
                                        {product.price ? `₹${product.price}` : "N/A"}
                                        {product.unit ? (
                                            <span className="users-muted"> / {product.unit}</span>
                                        ) : null}
                                    </td>

                                    <td>{product.stock ?? "N/A"}</td>

                                    <td>
                                        <ProductStatusBadge status={product.status} />
                                    </td>

                                    <td>
                                        {new Date(product.createdAt).toLocaleDateString("en-IN")}
                                    </td>

                                    <td>
                                        <div className="product-actions">
                                            <button
                                                type="button"
                                                className="users-view-btn"
                                                onClick={() => openEditDrawer(product)}
                                                title="View/Edit Product"
                                            >
                                                <Eye size={15} />
                                            </button>

                                            <button
                                                type="button"
                                                className="users-view-btn"
                                                onClick={() => openEditDrawer(product)}
                                                title="Edit Product"
                                            >
                                                <Pencil size={15} />
                                            </button>

                                            <button
                                                type="button"
                                                className="users-view-btn danger"
                                                onClick={() => deleteProduct(product.id)}
                                                title="Delete Product"
                                            >
                                                <Trash2 size={15} />
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
    );
}