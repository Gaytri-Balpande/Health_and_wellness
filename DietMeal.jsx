import React, { useState } from "react";
export default function Nutrition(){
  const [query, setQuery] = useState('chicken salad');
  const [results, setResults] = useState([]);
  function search(){
    // placeholder: connect to nutrition API
    setResults([{name: 'Chicken Salad', kcal: 420}, {name: 'Quinoa Bowl', kcal: 520}]);
  }
  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold">Nutrition</h2>
      <div className="mt-4 flex gap-2">
        <input value={query} onChange={e=>setQuery(e.target.value)} className="flex-1 p-2 border rounded" />
        <button onClick={search} className="px-3 py-2 rounded bg-blue-600 text-white">Search</button>
      </div>
      <div className="mt-4 grid gap-3">
        {results.map(r => (
          <div key={r.name} className="p-3 bg-white border rounded flex items-center justify-between">
            <div>
              <div className="font-semibold">{r.name}</div>
              <div className="text-sm text-gray-500">{r.kcal} kcal</div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded bg-gray-50">Add</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}