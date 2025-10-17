import React, { useState } from "react";
export default function Store() {
    return (
        <main className="p-6">
            <h2 className="text-xl font-semibold">Store</h2>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="bg-white p-4 rounded-lg border">
                        <div className="h-28 bg-gray-100 rounded mb-3"></div>
                        <div className="font-semibold">Product {i}</div>
                        <div className="text-sm text-gray-500">Supplement</div>
                        <div className="mt-3 flex gap-2">
                            <button className="px-3 py-2 rounded bg-blue-600 text-white">Buy</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
