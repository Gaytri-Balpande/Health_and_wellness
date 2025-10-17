import React, { useState } from "react";
export default function Community(){
  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold">Community</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border col-span-2">
          <h3 className="font-semibold">Forum</h3>
          <div className="mt-3 text-sm text-gray-500">Users share tips, recipes and progress.</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h3 className="font-semibold">Challenges</h3>
          <div className="mt-3 text-sm text-gray-500">Join step or yoga challenges.</div>
        </div>
      </div>
    </main>
  );
}
