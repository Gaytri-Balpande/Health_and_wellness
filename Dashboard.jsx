import StatCard from "../components/StatCard";
import ProgressRing from "../components/ProgressRing";

export default function Dashboard() {
  return (
    <main className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Active Days" value={24} delta={5} />
        <StatCard title="Avg Calories" value={`1,850 kcal`} delta={-3} />
        <StatCard title="Weekly Steps" value={`42,120`} delta={12} />
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Progress</h2>
          <p className="text-sm text-gray-500 mt-2">Track weight, workouts and nutrition over time.</p>
          <div className="mt-4">
            {/* Placeholder graph */}
            <div className="h-44 bg-gradient-to-r from-white to-gray-50 rounded" />
          </div>
        </div>

        <div className="space-y-4">
          <ProgressRing label="Hydration" percent={70} />
          <ProgressRing label="Sleep" percent={82} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <h3 className="font-semibold">Today's Plan</h3>
          <ul className="mt-2 text-sm text-gray-600 space-y-2">
            <li>Morning: 20 min Yoga</li>
            <li>Lunch: 500 kcal, high-protein</li>
            <li>Evening: 30 min Walk</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h3 className="font-semibold">Quick Actions</h3>
          <div className="mt-3 flex gap-2 flex-wrap">
            <button className="px-3 py-2 rounded bg-gray-50">Log Meal</button>
            <button className="px-3 py-2 rounded bg-gray-50">Start Workout</button>
            <button className="px-3 py-2 rounded bg-gray-50">Book Consult</button>
          </div>
        </div>
      </div>
    </main>
  );
}
