export type DashboardsLinks = {
  path: string;
  text: string;
  icon?: string;
};

export const dashboardsLinks: DashboardsLinks[] = [
  { path: "/dashboard", text: "Home" },
  { path: "/dashboard/invoices", text: "Invoices" },
  { path: "/customers", text: "Customers" },
];
