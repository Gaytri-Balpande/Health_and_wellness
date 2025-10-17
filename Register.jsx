import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
          <input type="password" placeholder="Confirm Password" className="w-full border p-2 rounded" />
          <button className="w-full bg-green-600 text-white p-2 rounded">Register</button>
        </form>
        <div className="mt-4 text-center">
          <p>Already have an account? <Link to="/login" className="text-green-600">Login</Link></p>
        </div>
      </div>
    </div>
  );
}
