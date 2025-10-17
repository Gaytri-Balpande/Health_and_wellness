import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Dashboard from "./pages/Dashboard";
import HealthTracking from "./pages/HealthTracking";
import DietMeal from "./pages/DietMeal";
import Fitness from "./pages/Fitness";
import MentalHealth from "./pages/MentalHealth";
import Community from "./pages/Community";
import Consultation from "./pages/Consultation";
import AdminPanel from "./pages/AdminPanel";
import Store from "./pages/Store";
import Gamification from "./pages/Gamification";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/health" element={<HealthTracking />} />
              <Route path="/diet" element={<DietMeal />} />
              <Route path="/fitness" element={<Fitness />} />
              <Route path="/mental" element={<MentalHealth />} />
              <Route path="/community" element={<Community />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/store" element={<Store />} />
              <Route path="/gamification" element={<Gamification />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
