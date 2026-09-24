export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-page-header">
        <h2>Dashboard</h2>
        <p>Welcome back to your admin panel.</p>
      </div>

      <div className="dashboard-stats-grid">
        <div className="dashboard-card">
          <span>Total Users</span>
          <h3>120</h3>
        </div>

        <div className="dashboard-card">
          <span>Total Listings</span>
          <h3>45</h3>
        </div>

        <div className="dashboard-card">
          <span>Pending Approvals</span>
          <h3>8</h3>
        </div>

        <div className="dashboard-card">
          <span>Total Revenue</span>
          <h3>₹12,000</h3>
        </div>
      </div>
    </div>
  );
}
