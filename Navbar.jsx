export default function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-600">Health & Wellness</h1>
      <div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Logout
        </button>
      </div>
    </nav>
  );
}
