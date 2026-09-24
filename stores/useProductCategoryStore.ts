import { create } from "zustand";
import toast from "react-hot-toast";

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  subCategories?: ProductSubCategory[];
}

export interface ProductSubCategory {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
}

interface ProductCategoryStore {
  categories: ProductCategory[];
  loading: boolean;
  submitting: boolean;
  error: string | null;

  selectedCategory: ProductCategory | null;
  formName: string;

  fetchCategories: (force?: boolean) => Promise<void>;
  setFormName: (name: string) => void;
  setSelectedCategory: (category: ProductCategory | null) => void;

  createCategory: () => Promise<boolean>;
  updateCategory: (id: string) => Promise<boolean>;
  deleteCategory: (id: string) => Promise<void>;
  resetForm: () => void;
}

export const useProductCategoryStore = create<ProductCategoryStore>(
  (set, get) => ({
    categories: [],
    loading: false,
    submitting: false,
    error: null,

    selectedCategory: null,
    formName: "",

    fetchCategories: async (force = false) => {
      const { categories } = get();

      if (!force && categories.length > 0) return;

      try {
        set({ loading: true, error: null });

        const res = await fetch("/api/v1/product-categories", {
          credentials: "include",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch categories");
        }

        set({ categories: data.data || [] });
      } catch (error) {
        set({
          error:
            error instanceof Error ? error.message : "Something went wrong",
        });
      } finally {
        set({ loading: false });
      }
    },

    setFormName: (name) => set({ formName: name }),

    setSelectedCategory: (category) =>
      set({
        selectedCategory: category,
        formName: category?.name || "",
      }),

    resetForm: () =>
      set({
        selectedCategory: null,
        formName: "",
      }),

    createCategory: async () => {
      try {
        const { formName } = get();

        if (!formName.trim()) {
          toast.error("Category name is required");
          return false;
        }

        set({ submitting: true });

        const res = await fetch("/api/v1/product-categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ name: formName }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to create category");
        }

        toast.success("Category created successfully");
        get().resetForm();
        await get().fetchCategories(true);

        return true;
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Something went wrong",
        );
        return false;
      } finally {
        set({ submitting: false });
      }
    },

    updateCategory: async (id) => {
      try {
        const { formName } = get();

        if (!formName.trim()) {
          toast.error("Category name is required");
          return false;
        }

        set({ submitting: true });

        const res = await fetch(`/api/v1/product-categories/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ name: formName }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to update category");
        }

        toast.success("Category updated successfully");
        get().resetForm();
        await get().fetchCategories(true);

        return true;
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Something went wrong",
        );
        return false;
      } finally {
        set({ submitting: false });
      }
    },

    deleteCategory: async (id) => {
      if (!confirm("Are you sure you want to delete this category?")) return;

      const res = await fetch(`/api/v1/product-categories/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to delete category");
        return;
      }

      toast.success("Category deleted successfully");
      await get().fetchCategories(true);
    },
  }),
);
