import React from "react";
import Cards from "../../components/Admin/Dashboard/Cards";
import UsersTable from './../../components/Admin/Dashboard/UsersTable';

function AdminDashboard() {
  return (
    <div className="space-y-8">
      <Cards />
      <UsersTable />
    </div>
  );
}

export default AdminDashboard;
