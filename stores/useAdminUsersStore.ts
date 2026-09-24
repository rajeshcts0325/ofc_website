import { create } from "zustand";
import toast from "react-hot-toast";

export type UserRole = "ADMIN" | "SUPPLIER" | "AGENCY";

export type UserStatus = "ACTIVE" | "SUSPENDED" | "INACTIVE";

export type OnboardingStatus =
  | "EMAIL_VERIFICATION_PENDING"
  | "BUSINESS_PROFILE_PENDING"
  | "KYC_PENDING"
  | "KYC_UNDER_REVIEW"
  | "KYC_REJECTED"
  | "SUBSCRIPTION_PENDING"
  | "ACTIVE";

export type SubscriptionStatus =
  | "PENDING"
  | "ACTIVE"
  | "EXPIRED"
  | "FAILED";

export interface AdminUserProfile {
  id: string;
  fullName: string;
  phone: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AdminUserLocation {
  id: string;
  name: string;
  slug: string;
  stateId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AdminUserCompany {
  id: string;
  name: string;
  businessType?: string;
  gstNumber?: string | null;
  panNumber?: string | null;
  registrationNumber?: string | null;
  category?: string | null;
  experience?: number | null;
  description?: string | null;
  website?: string | null;
  businessEmail?: string | null;
  businessPhone?: string | null;
  address?: string | null;
  onboardingCompleted?: boolean;
  state?: AdminUserLocation | null;
  city?: AdminUserLocation | null;
  kycApplication?: AdminUserKycApplication | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface AdminUserKycApplication {
  id: string;
  status: string;
  submittedAt?: string | null;
  verifiedAt?: string | null;
  rejectedAt?: string | null;
  rejectionReason?: string | null;
  correctionRequired: boolean;
  submittedVersion: number;
}

export interface AdminUserSubscription {
  id: string;
  amount: number;
  billingCycle: string;
  status: SubscriptionStatus;
  razorpaySubscriptionId?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  cancelledAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
  plan?: {
    id: string;
    name: string;
    slug: string;
    price: number;
    billingCycle: string;
  } | null;
}

export interface AdminUser {
  id: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  onboardingStatus: OnboardingStatus;
  createdAt: string;
  updatedAt?: string;
  profile?: AdminUserProfile | null;
  company?: AdminUserCompany | null;
  subscriptions?: AdminUserSubscription[];
}

export interface UserTimelineStep {
  key: string;
  label: string;
  completed: boolean;
  status?: string;
  reason?: string;
}

export interface AdminUsersPagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface AdminUsersFilters {
  page: number;
  limit: number;
  search: string;
  role: "" | UserRole;
  status: "" | UserStatus;
  onboardingStatus: "" | OnboardingStatus;
}

interface AdminUsersStore {
  users: AdminUser[];
  selectedUser: AdminUser | null;
  timeline: UserTimelineStep[];

  pagination: AdminUsersPagination | null;

  loading: boolean;
  detailsLoading: boolean;
  error: string;

  drawerOpen: boolean;

  filters: AdminUsersFilters;

  setFilter: <K extends keyof AdminUsersFilters>(
    key: K,
    value: AdminUsersFilters[K],
  ) => void;

  resetFilters: () => void;

  fetchUsers: () => Promise<void>;
  fetchUserDetails: (userId: string) => Promise<void>;

  openUserDrawer: (userId: string) => Promise<void>;
  closeUserDrawer: () => void;
}

export const useAdminUsersStore = create<AdminUsersStore>((set, get) => ({
  users: [],
  selectedUser: null,
  timeline: [],

  pagination: null,

  loading: false,
  detailsLoading: false,
  error: "",

  drawerOpen: false,

  filters: {
    page: 1,
    limit: 10,
    search: "",
    role: "",
    status: "",
    onboardingStatus: "",
  },

  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
        page: key === "page" ? Number(value) : 1,
      },
    })),

  resetFilters: () =>
    set({
      filters: {
        page: 1,
        limit: 10,
        search: "",
        role: "",
        status: "",
        onboardingStatus: "",
      },
    }),

  fetchUsers: async () => {
    const { filters } = get();

    try {
      set({ loading: true, error: "" });

      const query = new URLSearchParams();

      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          query.append(key, String(value));
        }
      });

      const res = await fetch(`/api/v1/admin/users?${query.toString()}`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to fetch users");
      }

      set({
        users: result.data || [],
        pagination: result.pagination || null,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch users";

      set({ error: message });
      toast.error(message);
    } finally {
      set({ loading: false });
    }
  },

  fetchUserDetails: async (userId) => {
    try {
      set({
        detailsLoading: true,
        error: "",
      });

      const res = await fetch(`/api/v1/admin/users/${userId}`, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to fetch user details");
      }

      set({
        selectedUser: result.data || null,
        timeline: result.timeline || [],
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch user details";

      set({ error: message });
      toast.error(message);
    } finally {
      set({ detailsLoading: false });
    }
  },

  openUserDrawer: async (userId) => {
    set({
      drawerOpen: true,
      selectedUser: null,
      timeline: [],
    });

    await get().fetchUserDetails(userId);
  },

  closeUserDrawer: () =>
    set({
      drawerOpen: false,
      selectedUser: null,
      timeline: [],
    }),
}));