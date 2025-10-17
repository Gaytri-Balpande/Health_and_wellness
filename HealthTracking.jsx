import React, { useState } from "react";
export default function Trackers() {
  const [water, setWater] = useState(1.2); // liters
  const [sleep, setSleep] = useState(7.5);
  const [steps, setSteps] = useState(4200);
  return (
    <main className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Health Tracking</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-sm text-gray-500">Water Intake</div>
          <div className="mt-2 text-2xl font-semibold">{water} L</div>
          <div className="mt-3 flex gap-2">
            <button onClick={() => setWater(prev => Math.round((prev + 0.25) * 100) / 100)} className="px-3 py-1 rounded bg-blue-50">+250ml</button>
            <button onClick={() => setWater(prev => Math.max(0, Math.round((prev - 0.25) * 100) / 100))} className="px-3 py-1 rounded bg-gray-50">-250ml</button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="text-sm text-gray-500">Sleep (hrs)</div>
          <div className="mt-2 text-2xl font-semibold">{sleep}</div>
          <input type="range" min="0" max="12" step="0.5" value={sleep} onChange={e => setSleep(e.target.value)} className="w-full mt-3" />
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="text-sm text-gray-500">Steps</div>
          <div className="mt-2 text-2xl font-semibold">{steps}</div>
          <div className="mt-3 flex gap-2">
            <button onClick={() => setSteps(prev => prev + 500)} className="px-3 py-1 rounded bg-blue-50">+500</button>
            <button onClick={() => setSteps(prev => Math.max(0, prev - 500))} className="px-3 py-1 rounded bg-gray-50">-500</button>
          </div>
        </div>
      </div>
    </main>
  );
}
