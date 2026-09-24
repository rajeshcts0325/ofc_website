import { create } from "zustand";

export const useLeadStore = create((set, get) => ({
    leads: [],
    pagination: null,
    loading: false,
    error: "",

    filters: {
        page: 1,
        limit: 10,
        status: "",
        priority: "",
        formType: "",
        search: "",
        sortBy: "createdAt",
        sortOrder: "desc",
    },

    setFilter: (key, value) =>
        set((state) => {
            if (state.filters[key] === value) return state;

            return {
                filters: {
                    ...state.filters,
                    [key]: value,
                    page: key === "page" ? value : 1,
                },
            };
        }),

    fetchLeads: async () => {
        const { filters } = get();

        try {
            set({ loading: true, error: "" });

            const query = new URLSearchParams();

            Object.entries(filters).forEach(([key, value]) => {
                if (value) query.append(key, value);
            });

            const res = await fetch(`/api/v1/leads?${query.toString()}`, {
                method: "GET",
                credentials: "include",
                cache: "no-store",
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "Failed to fetch leads");
            }

            set({
                leads: result.data || [],
                pagination: result.pagination,
            });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
}));