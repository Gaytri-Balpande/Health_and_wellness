import React from "react";
export default function ProgressRing({label, percent}){
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
      <svg viewBox="0 0 36 36" className="w-16 h-16">
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="3"/>
        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray={`${percent} ${100-percent}`} strokeLinecap="round" transform="rotate(-90 18 18)"/>
      </svg>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-lg font-semibold">{percent}%</div>
      </div>
    </div>
  );
}