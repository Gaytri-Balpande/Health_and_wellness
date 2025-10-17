import React, { useState } from "react";
export default function AdminPanel(){
  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold">Admin Panel</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border">User Management</div>
        <div className="bg-white p-4 rounded-lg border">Content Management</div>
        <div className="bg-white p-4 rounded-lg border">Reports & Analytics</div>
        <div className="bg-white p-4 rounded-lg border">Orders & Products</div>
      </div>
    </main>
  );
}
