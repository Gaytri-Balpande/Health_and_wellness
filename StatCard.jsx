export default function StatCard({ title, value, delta }) {
  return (
    <div className="p-4 bg-white rounded-lg border">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className="text-2xl font-semibold">{value}</div>
        <div className={`text-sm ${delta >= 0 ? 'text-green-600' : 'text-red-500'}`}>
          {delta >= 0 ? `+${delta}%` : `${delta}%`}
        </div>
      </div>
    </div>
  );
}
