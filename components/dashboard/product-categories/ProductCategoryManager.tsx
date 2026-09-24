"use client";

import { useEffect } from "react";
import { Plus, Trash2, Pencil, X, Save } from "lucide-react";
import { useProductCategoryStore } from "@/stores/useProductCategoryStore";
import "@/styles/dashboard/products/dashboard-products.css";

export default function ProductCategoryManager() {
    const categories = useProductCategoryStore((state) => state.categories);
    const loading = useProductCategoryStore((state) => state.loading);
    const submitting = useProductCategoryStore((state) => state.submitting);
    const selectedCategory = useProductCategoryStore(
        (state) => state.selectedCategory,
    );
    const formName = useProductCategoryStore((state) => state.formName);

    const fetchCategories = useProductCategoryStore(
        (state) => state.fetchCategories,
    );
    const setFormName = useProductCategoryStore((state) => state.setFormName);
    const setSelectedCategory = useProductCategoryStore(
        (state) => state.setSelectedCategory,
    );
    const resetForm = useProductCategoryStore((state) => state.resetForm);
    const createCategory = useProductCategoryStore(
        (state) => state.createCategory,
    );
    const updateCategory = useProductCategoryStore(
        (state) => state.updateCategory,
    );
    const deleteCategory = useProductCategoryStore(
        (state) => state.deleteCategory,
    );

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    const handleSubmit = async () => {
        if (selectedCategory) {
            await updateCategory(selectedCategory.id);
        } else {
            await createCategory();
        }
    };

    return (
        <div className="users-page">
            <div className="users-page-header">
                <div>
                    <h2>Product Categories</h2>
                    <p>Create and manage product master categories.</p>
                </div>
            </div>

            <div className="users-card users-section">
                <div className="users-filter-header">
                    <div>
                        <h4>
                            {selectedCategory ? "Update Category" : "Add Category"}
                        </h4>
                        <p>Example: Equipment Rental, Construction Materials</p>
                    </div>

                    {selectedCategory && (
                        <button
                            type="button"
                            className="users-reset-btn"
                            onClick={resetForm}
                        >
                            <X size={15} />
                            Cancel Edit
                        </button>
                    )}
                </div>

                <div className="users-filters-grid">
                    <input
                        className="users-select"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Enter category name"
                    />

                    <button
                        type="button"
                        className="users-reset-btn"
                        onClick={handleSubmit}
                        disabled={submitting}
                    >
                        {selectedCategory ? <Save size={16} /> : <Plus size={16} />}
                        {submitting
                            ? "Saving..."
                            : selectedCategory
                                ? "Update Category"
                                : "Add Category"}
                    </button>
                </div>
            </div>

            <div className="users-card users-section">
                <div className="users-table-responsive">
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Category</th>
                                <th>Slug</th>
                                <th>Sub Categories</th>
                                <th>Created</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="users-empty">
                                        Loading categories...
                                    </td>
                                </tr>
                            ) : categories.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="users-empty">
                                        No categories found
                                    </td>
                                </tr>
                            ) : (
                                categories.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>

                                        <td>
                                            <div className="users-client-name">
                                                {item.name}
                                            </div>
                                        </td>

                                        <td>{item.slug}</td>

                                        <td>{item.subCategories?.length || 0}</td>

                                        <td>
                                            {new Date(
                                                item.createdAt,
                                            ).toLocaleDateString("en-IN")}
                                        </td>

                                        <td>
                                            <div className="product-actions">
                                                <button
                                                    type="button"
                                                    className="users-view-btn"
                                                    onClick={() =>
                                                        setSelectedCategory(item)
                                                    }
                                                    title="Edit Category"
                                                >
                                                    <Pencil size={15} />
                                                </button>

                                                <button
                                                    type="button"
                                                    className="users-view-btn danger"
                                                    onClick={() =>
                                                        deleteCategory(item.id)
                                                    }
                                                    title="Delete Category"
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
        </div>
    );
}