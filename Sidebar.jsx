import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen sticky top-0">
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">Menu</h2>
      </div>
      <ul className="p-4 space-y-2">
        <li><Link to="/" className="block p-2 rounded hover:bg-green-50">🏠 Dashboard</Link></li>
        <li><Link to="/health" className="block p-2 rounded hover:bg-green-50">🩺 Health Tracking</Link></li>
        <li><Link to="/diet" className="block p-2 rounded hover:bg-green-50">🥗 Diet & Meals</Link></li>
        <li><Link to="/fitness" className="block p-2 rounded hover:bg-green-50">💪 Workouts</Link></li>
        <li><Link to="/mental" className="block p-2 rounded hover:bg-green-50">🧠 Mental Health</Link></li>
        <li><Link to="/community" className="block p-2 rounded hover:bg-green-50">👥 Community</Link></li>
        <li><Link to="/consultation" className="block p-2 rounded hover:bg-green-50">📅 Consultations</Link></li>
        <li><Link to="/admin" className="block p-2 rounded hover:bg-green-50">⚙️ Admin Panel</Link></li>
        <li><Link to="/store" className="block p-2 rounded hover:bg-green-50">🛒 Store</Link></li>
        <li><Link to="/gamification" className="block p-2 rounded hover:bg-green-50">🏆 Gamification</Link></li>
      </ul>
    </aside>
  );
}
