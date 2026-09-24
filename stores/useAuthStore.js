import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
  user: null,
  accessStatus: null,
  isAuthenticated: false,
  loading: true,
  initialized: false,
  error: "",

  checkAuth: async () => {
    try {
      set({ loading: true, error: "" });

      const res = await fetch("/api/v1/auth/me", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok) {
        set({
          user: null,
          accessStatus: null,
          isAuthenticated: false,
          loading: false,
          initialized: true,
        });
        return;
      }

      set({
        user: data.user,
        accessStatus: data.accessStatus,
        isAuthenticated: true,
        loading: false,
        initialized: true,
      });
    } catch (error) {
      set({
        user: null,
        accessStatus: null,
        isAuthenticated: false,
        loading: false,
        initialized: true,
        error: error.message,
      });
    }
  },

  logout: async () => {
    await fetch("/api/v1/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    set({
      user: null,
      accessStatus: null,
      isAuthenticated: false,
      loading: false,
      initialized: true,
    });
  },

  isAdmin: () => get().user?.role === "ADMIN",
  isSupplier: () => get().user?.role === "SUPPLIER",
  isAgency: () => get().user?.role === "AGENCY",
}));
