"use client";

import { useEffect } from "react";
import { Plus, Trash2, Pencil, X, Save } from "lucide-react";
import { useProductCategoryStore } from "@/stores/useProductCategoryStore";
import { useProductSubCategoryStore } from "@/stores/useProductSubCategoryStore";
import "@/styles/dashboard/products/dashboard-products.css";

export default function ProductSubCategoryManager() {
    const categories = useProductCategoryStore((state) => state.categories);
    const fetchCategories = useProductCategoryStore(
        (state) => state.fetchCategories,
    );

    const subCategories = useProductSubCategoryStore(
        (state) => state.subCategories,
    );
    const loading = useProductSubCategoryStore((state) => state.loading);
    const submitting = useProductSubCategoryStore((state) => state.submitting);
    const selectedSubCategory = useProductSubCategoryStore(
        (state) => state.selectedSubCategory,
    );
    const formName = useProductSubCategoryStore((state) => state.formName);
    const formCategoryId = useProductSubCategoryStore(
        (state) => state.formCategoryId,
    );

    const fetchSubCategories = useProductSubCategoryStore(
        (state) => state.fetchSubCategories,
    );
    const setFormName = useProductSubCategoryStore((state) => state.setFormName);
    const setFormCategoryId = useProductSubCategoryStore(
        (state) => state.setFormCategoryId,
    );
    const setSelectedSubCategory = useProductSubCategoryStore(
        (state) => state.setSelectedSubCategory,
    );
    const resetForm = useProductSubCategoryStore((state) => state.resetForm);
    const createSubCategory = useProductSubCategoryStore(
        (state) => state.createSubCategory,
    );
    const updateSubCategory = useProductSubCategoryStore(
        (state) => state.updateSubCategory,
    );
    const deleteSubCategory = useProductSubCategoryStore(
        (state) => state.deleteSubCategory,
    );

    useEffect(() => {
        fetchCategories();
        fetchSubCategories();
    }, [fetchCategories, fetchSubCategories]);

    const handleSubmit = async () => {
        if (selectedSubCategory) {
            await updateSubCategory(selectedSubCategory.id);
        } else {
            await createSubCategory();
        }
    };

    return (
        <div className="users-page">
            <div className="users-page-header">
                <div>
                    <h2>Product Sub Categories</h2>
                    <p>Create and manage sub categories under product categories.</p>
                </div>
            </div>

            <div className="users-card users-section">
                <div className="users-filter-header">
                    <div>
                        <h4>
                            {selectedSubCategory
                                ? "Update Sub Category"
                                : "Add Sub Category"}
                        </h4>
                        <p>Example: Equipment Rental → Excavator</p>
                    </div>

                    {selectedSubCategory && (
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
                    <select
                        className="users-select"
                        value={formCategoryId}
                        onChange={(e) => setFormCategoryId(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>

                    <input
                        className="users-select"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Enter sub category name"
                    />

                    <button
                        type="button"
                        className="users-reset-btn"
                        onClick={handleSubmit}
                        disabled={submitting}
                    >
                        {selectedSubCategory ? <Save size={16} /> : <Plus size={16} />}
                        {submitting
                            ? "Saving..."
                            : selectedSubCategory
                                ? "Update Sub Category"
                                : "Add Sub Category"}
                    </button>
                </div>
            </div>

            <div className="users-card users-section">
                <div className="users-table-responsive">
                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Sub Category</th>
                                <th>Parent Category</th>
                                <th>Slug</th>
                                <th>Created</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="users-empty">
                                        Loading sub categories...
                                    </td>
                                </tr>
                            ) : subCategories.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="users-empty">
                                        No sub categories found
                                    </td>
                                </tr>
                            ) : (
                                subCategories.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>

                                        <td>
                                            <div className="users-client-name">
                                                {item.name}
                                            </div>
                                        </td>

                                        <td>{item.category?.name || "N/A"}</td>

                                        <td>{item.slug}</td>

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
                                                        setSelectedSubCategory(item)
                                                    }
                                                    title="Edit Sub Category"
                                                >
                                                    <Pencil size={15} />
                                                </button>

                                                <button
                                                    type="button"
                                                    className="users-view-btn danger"
                                                    onClick={() =>
                                                        deleteSubCategory(item.id)
                                                    }
                                                    title="Delete Sub Category"
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