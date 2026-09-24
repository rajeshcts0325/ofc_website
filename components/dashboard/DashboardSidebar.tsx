"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  Users,
  ListChecks,
  Settings,
  ClipboardList,
  ChevronRight,
  ShieldCheck,
  ChevronDown,
  Package
} from "lucide-react";

type Role = "ADMIN" | "SUPPLIER" | "AGENCY";

type DashboardSidebarProps = {
  sidebarOpen: boolean;
};

type AccessStatus = {
  dashboardAccess: boolean;
  verificationStatus:
  | "PROFILE_PENDING"
  | "PENDING_APPROVAL"
  | "VERIFIED"
  | "REJECTED";
};

type AuthUser = {
  role: Role;
};

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["ADMIN", "SUPPLIER", "AGENCY"],
  },

  {
    label: "Leads",
    href: "/dashboard/my-leads",
    icon: ClipboardList,
    roles: ["ADMIN"],
  },
  {
    label: "Users",
    href: "/dashboard/admin/users",
    icon: Users,
    roles: ["ADMIN"],
  },
  {
    label: "Listings",
    href: "/dashboard/listings",
    icon: ListChecks,
    roles: ["SUPPLIER", "AGENCY"],
    requireVerified: true,
  },
  {
    label: "KYC Details",
    href: "/dashboard/admin/vendors",
    icon: ShieldCheck,
    roles: ["ADMIN"],
  },
  {
    label: "Products",
    href: "#",
    icon: Package,
    roles: ["ADMIN"],
    subMenus: [
      {
        label: "Categories",
        href: "/dashboard/admin/product-categories",
        roles: ["ADMIN"],
      },
      {
        label: "Sub Categories",
        href: "/dashboard/admin/product-sub-categories",
        roles: ["ADMIN"],
      },
      {
        label: "All Products",
        href: "/dashboard/admin/products",
        roles: ["ADMIN"],
      },
    ],
  },
  {
    label: "KYC Verification",
    href: "#",
    icon: ShieldCheck,
    roles: ["SUPPLIER", "AGENCY"],
    subMenus: [
      {
        label: "Business Profile",
        href: "/dashboard/kyc/complete-profile",
        roles: ["SUPPLIER", "AGENCY"],
      },
      {
        label: "Complete Payment",
        href: "/dashboard/kyc/complete-payment",
        roles: ["SUPPLIER", "AGENCY"],
      },
      {
        label: "Admin Approval",
        href: "/dashboard/kyc/admin-approval",
        roles: ["SUPPLIER", "AGENCY"],
      },
    ],
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    roles: ["ADMIN", "SUPPLIER", "AGENCY"],
  },
];

export default function DashboardSidebar({
  sidebarOpen,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  const [user, setUser] = useState<AuthUser | null>(null);
  const [accessStatus, setAccessStatus] = useState<AccessStatus | null>(null);

  const [openMenu, setOpenMenu] = useState<string | null>(
    pathname.startsWith("/dashboard/kyc") ? "KYC Verification" : null,
  );

  useEffect(() => {
    const fetchMe = async () => {
      const res = await fetch("/api/v1/auth/me", {
        credentials: "include",
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setUser(data.user);
        setAccessStatus(data.accessStatus);
      }
    };

    fetchMe();
  }, []);

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  if (!user || !accessStatus) {
    return (
      <aside className={`admin-sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="admin-sidebar-logo">
          <div className="sidebar-skeleton-logo" />
        </div>

        <div className="admin-sidebar-menu-title">Main Menu</div>

        <nav className="admin-sidebar-nav">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="sidebar-skeleton-link" key={index}>
              <span className="sidebar-skeleton-icon" />
              <span className="sidebar-skeleton-text" />
            </div>
          ))}
        </nav>
      </aside>
    );
  }

  const visibleMenuItems = menuItems.filter((item) => {
    if (!item.roles.includes(user.role)) return false;

    if (item.requireVerified && !accessStatus.dashboardAccess) {
      return false;
    }

    return true;
  });

  return (
    <aside className={`admin-sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="admin-sidebar-logo">
        <Link href="/">
          <Image
            src="/icons/logo.png"
            alt="Logo"
            width={170}
            height={48}
            priority
          />
        </Link>
      </div>

      <div className="admin-sidebar-menu-title">Main Menu</div>

      <nav className="admin-sidebar-nav">
        {visibleMenuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : item.href !== "#" && pathname.startsWith(item.href);

          const isOpen = openMenu === item.label;

          return (
            <div key={item.label}>
              {item.subMenus ? (
                <button
                  type="button"
                  onClick={() => toggleMenu(item.label)}
                  className={`admin-sidebar-link ${isActive ? "active" : ""}`}
                  style={{
                    width: "100%",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span className="admin-sidebar-link-left">
                    <span className="admin-sidebar-icon">
                      <Icon size={18} />
                    </span>

                    <span>{item.label}</span>
                  </span>

                  {isOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`admin-sidebar-link ${isActive ? "active" : ""}`}
                >
                  <span className="admin-sidebar-link-left">
                    <span className="admin-sidebar-icon">
                      <Icon size={18} />
                    </span>

                    <span>{item.label}</span>
                  </span>

                  <ChevronRight className="admin-sidebar-arrow" size={16} />
                </Link>
              )}

              {item.subMenus && isOpen && (
                <div className="admin-sidebar-submenu">
                  {item.subMenus
                    .filter((sub) => sub.roles.includes(user.role))
                    .map((sub) => {
                      const isSubActive = pathname === sub.href;

                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`admin-sidebar-sublink ${isSubActive ? "active" : ""
                            }`}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="admin-sidebar-bottom">
        <hr className="admin-sidebar-divider" />
        <p>Version 1.0.0v</p>
      </div>
    </aside>
  );
}