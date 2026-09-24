import { create } from "zustand";
import toast from "react-hot-toast";

export type ProductStatus = "DRAFT" | "ACTIVE" | "INACTIVE" | "REJECTED";

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
}

export interface ProductSubCategory {
  id: string;
  name: string;
  slug: string;
  categoryId?: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description?: string | null;

  categoryId?: string | null;
  subCategoryId?: string | null;

  category?: ProductCategory | null;
  subCategory?: ProductSubCategory | null;

  price?: number | null;
  unit?: string | null;
  stock?: number | null;
  brand?: string | null;
  productModel?: string | null;
  imageUrl?: string | null;
  imagePublicId?: string | null;
  status: ProductStatus;
  createdAt: string;

  company?: {
    name?: string;
    category?: string;
  } | null;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

interface ProductFilters {
  page: number;
  limit: number;
  search: string;
  status: "" | ProductStatus;
  categoryId: string;
  subCategoryId: string;
}

interface ProductForm {
  title: string;
  description: string;
  categoryId: string;
  subCategoryId: string;
  price: string;
  unit: string;
  stock: string;
  brand: string;
  productModel: string;
  status: ProductStatus;
}

interface AdminProductsStore {
  products: Product[];
  selectedProduct: Product | null;
  pagination: Pagination | null;
  loading: boolean;
  submitting: boolean;
  error: string | null;
  drawerOpen: boolean;
  drawerMode: "create" | "edit";

  filters: ProductFilters;
  form: ProductForm;
  imageFile: File | null;
  imagePreview: string | null;

  fetchProducts: () => Promise<void>;
  openCreateDrawer: () => void;
  openEditDrawer: (product: Product) => void;
  closeDrawer: () => void;

  setFilter: <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K],
  ) => void;

  resetFilters: () => void;

  setFormField: <K extends keyof ProductForm>(
    key: K,
    value: ProductForm[K],
  ) => void;

  setImageFile: (file: File | null) => void;
  submitProduct: () => Promise<boolean>;
  deleteProduct: (id: string) => Promise<void>;
}

const initialForm: ProductForm = {
  title: "",
  description: "",
  categoryId: "",
  subCategoryId: "",
  price: "",
  unit: "",
  stock: "",
  brand: "",
  productModel: "",
  status: "ACTIVE",
};

export const useAdminProductsStore = create<AdminProductsStore>((set, get) => ({
  products: [],
  selectedProduct: null,
  pagination: null,
  loading: false,
  submitting: false,
  error: null,
  drawerOpen: false,
  drawerMode: "create",

  filters: {
    page: 1,
    limit: 10,
    search: "",
    status: "",
    categoryId: "",
    subCategoryId: "",
  },

  form: initialForm,
  imageFile: null,
  imagePreview: null,

  fetchProducts: async () => {
    try {
      set({ loading: true, error: null });

      const { filters } = get();
      const params = new URLSearchParams();

      params.set("page", String(filters.page));
      params.set("limit", String(filters.limit));

      if (filters.search) params.set("search", filters.search);
      if (filters.status) params.set("status", filters.status);
      if (filters.categoryId) params.set("categoryId", filters.categoryId);
      if (filters.subCategoryId) {
        params.set("subCategoryId", filters.subCategoryId);
      }

      const res = await fetch(`/api/v1/products?${params.toString()}`, {
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch products");
      }

      set({
        products: data.data || [],
        pagination: data.pagination || null,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Something went wrong",
      });
    } finally {
      set({ loading: false });
    }
  },

  openCreateDrawer: () => {
    set({
      drawerOpen: true,
      drawerMode: "create",
      selectedProduct: null,
      form: initialForm,
      imageFile: null,
      imagePreview: null,
    });
  },

  openEditDrawer: (product) => {
    set({
      drawerOpen: true,
      drawerMode: "edit",
      selectedProduct: product,
      form: {
        title: product.title || "",
        description: product.description || "",
        categoryId: product.categoryId || product.category?.id || "",
        subCategoryId: product.subCategoryId || product.subCategory?.id || "",
        price: product.price ? String(product.price) : "",
        unit: product.unit || "",
        stock: product.stock ? String(product.stock) : "",
        brand: product.brand || "",
        productModel: product.productModel || "",
        status: product.status || "ACTIVE",
      },
      imageFile: null,
      imagePreview: product.imageUrl || null,
    });
  },

  closeDrawer: () => {
    set({
      drawerOpen: false,
      selectedProduct: null,
      imageFile: null,
      imagePreview: null,
    });
  },

  setFilter: (key, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
        page: key === "page" ? Number(value) : 1,
      },
    }));

    setTimeout(() => get().fetchProducts(), 0);
  },

  resetFilters: () => {
    set({
      filters: {
        page: 1,
        limit: 10,
        search: "",
        status: "",
        categoryId: "",
        subCategoryId: "",
      },
    });

    setTimeout(() => get().fetchProducts(), 0);
  },

  setFormField: (key, value) => {
    set((state) => ({
      form: {
        ...state.form,
        [key]: value,
        ...(key === "categoryId"
          ? {
              subCategoryId: "",
            }
          : {}),
      },
    }));
  },

  setImageFile: (file) => {
    set({
      imageFile: file,
      imagePreview: file ? URL.createObjectURL(file) : null,
    });
  },

  submitProduct: async () => {
    try {
      set({ submitting: true });

      const { drawerMode, selectedProduct, form, imageFile } = get();

      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const url =
        drawerMode === "edit" && selectedProduct
          ? `/api/v1/products/${selectedProduct.id}`
          : "/api/v1/products";

      const method = drawerMode === "edit" ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        body: formData,
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to save product");
      }

      get().closeDrawer();
      await get().fetchProducts();

      toast.success(
        drawerMode === "create"
          ? "Product created successfully"
          : "Product updated successfully",
      );

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

  deleteProduct: async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    const res = await fetch(`/api/v1/products/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message || "Failed to delete product");
      return;
    }

    toast.success("Product deleted successfully");
    await get().fetchProducts();
  },
}));
