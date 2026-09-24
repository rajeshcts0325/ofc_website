import { create } from "zustand";

export interface PublicProduct {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  category?: {
    id?: string;
    name?: string;
    slug?: string;
  } | null;
  subCategory?: {
    id?: string;
    name?: string;
    slug?: string;
  } | null;
  price?: number | null;
  unit?: string | null;
  stock?: number | null;
  brand?: string | null;
  productModel?: string | null;
  imageUrl?: string | null;
  status?: string;
  user?: {
    id?: string;
    email?: string;
    role?: string;
  } | null;
  company?: {
    name?: string;
    category?: string;
  } | null;
  city?: {
    name?: string;
    slug?: string;
  } | null;
  state?: {
    name?: string;
    slug?: string;
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

interface PublicProductsStore {
  products: PublicProduct[];
  productDetails: PublicProduct | null;
  pagination: Pagination | null;
  loading: boolean;
  detailsLoading: boolean;
  error: string | null;
  page: number;
  limit: number;

  fetchPublicProducts: (limit?: number) => Promise<void>;
  fetchPublicProductDetails: (slug: string) => Promise<void>;
  setPage: (page: number) => void;
}

export const usePublicProductsStore = create<PublicProductsStore>(
  (set, get) => ({
    products: [],
    productDetails: null,
    pagination: null,
    loading: false,
    detailsLoading: false,
    error: null,
    page: 1,
    limit: 8,

    fetchPublicProducts: async (customLimit) => {
      try {
        set({ loading: true, error: null });

        const { page, limit } = get();
        const finalLimit = customLimit || limit;
        const res = await fetch(
          `/api/v1/products?page=${page}&limit=${finalLimit}`,
          {
            cache: "no-store",
          },
        );

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
          error:
            error instanceof Error ? error.message : "Something went wrong",
        });
      } finally {
        set({ loading: false });
      }
    },

    fetchPublicProductDetails: async (slug) => {
      try {
        set({
          detailsLoading: true,
          error: null,
          productDetails: null,
        });

        const res = await fetch(`/api/v1/products/public/${slug}`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch product details");
        }

        set({
          productDetails: data.data || null,
        });
      } catch (error) {
        set({
          error:
            error instanceof Error ? error.message : "Something went wrong",
        });
      } finally {
        set({ detailsLoading: false });
      }
    },

    setPage: (page) => {
      set({ page });
      setTimeout(() => get().fetchPublicProducts(), 0);
    },
  }),
);
