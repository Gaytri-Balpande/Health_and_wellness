import React, { useState } from "react";
export default function Consultations(){
  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold">Consultations</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold">Book Doctor</h4>
          <p className="text-sm text-gray-500 mt-1">Telemedicine + in-person scheduling.</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold">Book Nutritionist / Trainer</h4>
        </div>
      </div>
    </main>
  );
}
