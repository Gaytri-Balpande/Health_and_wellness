import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
          <button className="w-full bg-green-600 text-white p-2 rounded">Login</button>
        </form>
        <div className="mt-4 text-center">
          <p>Don't have an account? <Link to="/register" className="text-green-600">Register</Link></p>
        </div>
        <div className="mt-4 flex flex-col space-y-2">
          <button className="border p-2 rounded hover:bg-gray-50">🔐 Login with Google</button>
          <button className="border p-2 rounded hover:bg-gray-50">🍎 Login with Apple</button>
        </div>
      </div>
    </div>
  );
}
