"use client";

import { JSX, useEffect, useMemo } from "react";
import { X, UploadCloud } from "lucide-react";

import { useAdminProductsStore } from "@/stores/useAdminProductsStore";
import { useProductCategoryStore } from "@/stores/useProductCategoryStore";
import { useProductSubCategoryStore } from "@/stores/useProductSubCategoryStore";
import ProductStatusBadge from "./ProductStatusBadge";

export default function ProductDrawer(): JSX.Element | null {
    const drawerOpen = useAdminProductsStore((state) => state.drawerOpen);
    const drawerMode = useAdminProductsStore((state) => state.drawerMode);
    const form = useAdminProductsStore((state) => state.form);
    const imagePreview = useAdminProductsStore((state) => state.imagePreview);
    const submitting = useAdminProductsStore((state) => state.submitting);
    const selectedProduct = useAdminProductsStore((state) => state.selectedProduct);

    const closeDrawer = useAdminProductsStore((state) => state.closeDrawer);
    const setFormField = useAdminProductsStore((state) => state.setFormField);
    const setImageFile = useAdminProductsStore((state) => state.setImageFile);
    const submitProduct = useAdminProductsStore((state) => state.submitProduct);

    const categories = useProductCategoryStore((state) => state.categories);
    const fetchCategories = useProductCategoryStore((state) => state.fetchCategories);

    const subCategories = useProductSubCategoryStore((state) => state.subCategories);
    const fetchSubCategories = useProductSubCategoryStore(
        (state) => state.fetchSubCategories,
    );

    useEffect(() => {
        if (drawerOpen) {
            fetchCategories();
            fetchSubCategories("", true);
        }
    }, [drawerOpen, fetchCategories, fetchSubCategories]);

    const filteredSubCategories = useMemo(() => {
        if (!form.categoryId) return [];

        return subCategories.filter(
            (item) => item.categoryId === form.categoryId,
        );
    }, [subCategories, form.categoryId]);

    if (!drawerOpen) return null;

    return (
        <div className="users-drawer-overlay" onClick={closeDrawer}>
            <aside className="users-drawer" onClick={(e) => e.stopPropagation()}>
                <div className="users-drawer-header">
                    <div>
                        <h3>
                            {drawerMode === "create"
                                ? "Add Product"
                                : form.title || "Product Details"}
                        </h3>

                        <p>
                            {drawerMode === "create"
                                ? "Create a new product listing"
                                : selectedProduct?.slug || "Update product information"}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="users-drawer-close"
                        onClick={closeDrawer}
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="users-drawer-body">
                    <section>
                        <h4>Product Image</h4>

                        <div className="product-upload-box">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Product preview" />
                            ) : (
                                <div>
                                    <UploadCloud size={28} />
                                    <p>Upload product image</p>
                                </div>
                            )}

                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    setImageFile(e.target.files?.[0] || null)
                                }
                            />
                        </div>
                    </section>

                    <section>
                        <h4>Basic Details</h4>

                        <FormField label="Product Title">
                            <input
                                value={form.title}
                                onChange={(e) => setFormField("title", e.target.value)}
                                placeholder="UltraTech Cement PPC"
                            />
                        </FormField>

                        <FormField label="Description">
                            <textarea
                                value={form.description}
                                onChange={(e) =>
                                    setFormField("description", e.target.value)
                                }
                                placeholder="Write product description"
                                rows={4}
                            />
                        </FormField>

                        <FormField label="Status">
                            <select
                                value={form.status}
                                onChange={(e) =>
                                    setFormField("status", e.target.value as any)
                                }
                            >
                                <option value="ACTIVE">Active</option>
                                <option value="DRAFT">Draft</option>
                                <option value="INACTIVE">Inactive</option>
                                <option value="REJECTED">Rejected</option>
                            </select>
                        </FormField>

                        {drawerMode === "edit" && (
                            <div className="users-info-row">
                                <span>Current Status</span>
                                <strong>
                                    <ProductStatusBadge status={form.status} />
                                </strong>
                            </div>
                        )}
                    </section>

                    <section>
                        <h4>Category Details</h4>

                        <FormField label="Category">
                            <select
                                value={form.categoryId}
                                onChange={(e) =>
                                    setFormField("categoryId", e.target.value)
                                }
                            >
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </FormField>

                        <FormField label="Sub Category">
                            <select
                                value={form.subCategoryId}
                                onChange={(e) =>
                                    setFormField("subCategoryId", e.target.value)
                                }
                                disabled={!form.categoryId}
                            >
                                <option value="">
                                    {form.categoryId
                                        ? "Select Sub Category"
                                        : "Select category first"}
                                </option>

                                {filteredSubCategories.map((subCategory) => (
                                    <option
                                        key={subCategory.id}
                                        value={subCategory.id}
                                    >
                                        {subCategory.name}
                                    </option>
                                ))}
                            </select>
                        </FormField>

                        <FormField label="Brand">
                            <input
                                value={form.brand}
                                onChange={(e) => setFormField("brand", e.target.value)}
                                placeholder="UltraTech"
                            />
                        </FormField>

                        <FormField label="Product Model">
                            <input
                                value={form.productModel}
                                onChange={(e) =>
                                    setFormField("productModel", e.target.value)
                                }
                                placeholder="PPC"
                            />
                        </FormField>
                    </section>

                    <section>
                        <h4>Pricing & Stock</h4>

                        <FormField label="Price">
                            <input
                                type="number"
                                value={form.price}
                                onChange={(e) => setFormField("price", e.target.value)}
                                placeholder="420"
                            />
                        </FormField>

                        <FormField label="Unit">
                            <input
                                value={form.unit}
                                onChange={(e) => setFormField("unit", e.target.value)}
                                placeholder="bag, kg, ton, day"
                            />
                        </FormField>

                        <FormField label="Stock">
                            <input
                                type="number"
                                value={form.stock}
                                onChange={(e) => setFormField("stock", e.target.value)}
                                placeholder="100"
                            />
                        </FormField>
                    </section>

                    {drawerMode === "edit" && selectedProduct && (
                        <section>
                            <h4>System Information</h4>

                            <Info label="Product ID" value={selectedProduct.id} />
                            <Info label="Slug" value={selectedProduct.slug} />
                            <Info
                                label="Category"
                                value={selectedProduct.category?.name || "N/A"}
                            />
                            <Info
                                label="Sub Category"
                                value={selectedProduct.subCategory?.name || "N/A"}
                            />
                            <Info
                                label="Created At"
                                value={new Date(
                                    selectedProduct.createdAt,
                                ).toLocaleDateString("en-IN")}
                            />
                        </section>
                    )}
                </div>

                <div className="users-drawer-footer">
                    <button
                        type="button"
                        className="users-page-btn"
                        onClick={closeDrawer}
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        className="users-page-btn active"
                        disabled={submitting}
                        onClick={submitProduct}
                    >
                        {submitting
                            ? "Saving..."
                            : drawerMode === "create"
                                ? "Create Product"
                                : "Update Product"}
                    </button>
                </div>
            </aside>
        </div>
    );
}

function FormField({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}): JSX.Element {
    return (
        <div className="product-form-row">
            <label>{label}</label>
            {children}
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