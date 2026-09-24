import { create } from "zustand";
import toast from "react-hot-toast";

export interface ProductSubCategory {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
}

interface ProductSubCategoryStore {
  subCategories: ProductSubCategory[];
  loading: boolean;
  submitting: boolean;
  error: string | null;

  selectedSubCategory: ProductSubCategory | null;
  formName: string;
  formCategoryId: string;

  fetchSubCategories: (categoryId?: string, force?: boolean) => Promise<void>;
  setFormName: (name: string) => void;
  setFormCategoryId: (categoryId: string) => void;
  setSelectedSubCategory: (subCategory: ProductSubCategory | null) => void;

  createSubCategory: () => Promise<boolean>;
  updateSubCategory: (id: string) => Promise<boolean>;
  deleteSubCategory: (id: string) => Promise<void>;
  resetForm: () => void;
}

export const useProductSubCategoryStore = create<ProductSubCategoryStore>(
  (set, get) => ({
    subCategories: [],
    loading: false,
    submitting: false,
    error: null,

    selectedSubCategory: null,
    formName: "",
    formCategoryId: "",

    fetchSubCategories: async (categoryId = "", force = false) => {
      const { subCategories } = get();

      if (!force && subCategories.length > 0 && !categoryId) return;

      try {
        set({ loading: true, error: null });

        const url = categoryId
          ? `/api/v1/product-sub-categories?categoryId=${categoryId}`
          : "/api/v1/product-sub-categories";

        const res = await fetch(url, {
          credentials: "include",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch sub categories");
        }

        set({ subCategories: data.data || [] });
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

    setFormCategoryId: (categoryId) => set({ formCategoryId: categoryId }),

    setSelectedSubCategory: (subCategory) =>
      set({
        selectedSubCategory: subCategory,
        formName: subCategory?.name || "",
        formCategoryId: subCategory?.categoryId || "",
      }),

    resetForm: () =>
      set({
        selectedSubCategory: null,
        formName: "",
        formCategoryId: "",
      }),

    createSubCategory: async () => {
      try {
        const { formName, formCategoryId } = get();

        if (!formCategoryId) {
          toast.error("Please select category");
          return false;
        }

        if (!formName.trim()) {
          toast.error("Sub category name is required");
          return false;
        }

        set({ submitting: true });

        const res = await fetch("/api/v1/product-sub-categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            categoryId: formCategoryId,
            name: formName,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to create sub category");
        }

        toast.success("Sub category created successfully");
        get().resetForm();
        await get().fetchSubCategories("", true);

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

    updateSubCategory: async (id) => {
      try {
        const { formName, formCategoryId } = get();

        if (!formCategoryId) {
          toast.error("Please select category");
          return false;
        }

        if (!formName.trim()) {
          toast.error("Sub category name is required");
          return false;
        }

        set({ submitting: true });

        const res = await fetch(`/api/v1/product-sub-categories/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            categoryId: formCategoryId,
            name: formName,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to update sub category");
        }

        toast.success("Sub category updated successfully");
        get().resetForm();
        await get().fetchSubCategories("", true);

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

    deleteSubCategory: async (id) => {
      if (!confirm("Are you sure you want to delete this sub category?"))
        return;

      const res = await fetch(`/api/v1/product-sub-categories/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to delete sub category");
        return;
      }

      toast.success("Sub category deleted successfully");
      await get().fetchSubCategories("", true);
    },
  }),
);
