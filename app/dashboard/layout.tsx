import "@/styles/dashboard/dashboard-header.css";
import "@/styles/dashboard.css";
import "@/styles/dashboard/dashboard-sidebar.css";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import "react-loading-skeleton/dist/skeleton.css";


export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
