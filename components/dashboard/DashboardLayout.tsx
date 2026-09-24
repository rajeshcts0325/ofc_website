"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import { useAuthStore } from "@/stores/useAuthStore";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const {
    initialized,
    loading,
    isAuthenticated,
    accessStatus,
    user,
    checkAuth,
  } = useAuthStore();

  useEffect(() => {
    if (!initialized) {
      checkAuth();
    }
  }, [initialized, checkAuth]);

  useEffect(() => {
    if (initialized && !loading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [initialized, loading, isAuthenticated, router]);

  // useEffect(() => {
  //   if (!initialized || loading || !isAuthenticated) return;

  //   if (user?.role === "ADMIN") return;

  //   const redirectMap: Record<string, string> = {
  //     COMPLETE_PROFILE: "/dashboard/kyc/complete-profile",
  //     PAY_MEMBERSHIP: "/dashboard/kyc/complete-payment",
  //     PENDING_APPROVAL: "/dashboard/kyc/admin-approval",
  //     REJECTED: "/dashboard/rejected",
  //   };

  //   const targetRoute = redirectMap[accessStatus?.nextStep || ""];

  //   if (targetRoute && pathname !== targetRoute) {
  //     router.replace(targetRoute);
  //   }
  // }, [
  //   initialized,
  //   loading,
  //   isAuthenticated,
  //   accessStatus,
  //   user,
  //   pathname,
  //   router,
  // ]);

  // if (!initialized || loading) {
  //   return (
  //     <div className="dashboard-auth-loading">Checking authentication...</div>
  //   );
  // }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="dashboard-wrapper">
      <DashboardSidebar sidebarOpen={sidebarOpen} />

      <div className={`dashboard-main ${!sidebarOpen ? "full" : ""}`}>
        <DashboardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  );
}
