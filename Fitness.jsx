import React, { useState } from "react";
export default function Workouts(){
  const workouts = [
    {id:1, title:'Full Body Strength', duration:40},
    {id:2, title:'Morning Yoga', duration:20},
    {id:3, title:'HIIT Blast', duration:25},
  ];
  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold">Workouts</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        {workouts.map(w => (
          <div key={w.id} className="bg-white p-4 rounded-lg border">
            <div className="font-semibold">{w.title}</div>
            <div className="text-sm text-gray-500">{w.duration} min</div>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-2 rounded bg-blue-600 text-white">Start</button>
              <button className="px-3 py-2 rounded bg-gray-50">Preview</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
