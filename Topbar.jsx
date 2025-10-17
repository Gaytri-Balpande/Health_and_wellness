export default function Topbar({ onToggleSidebar }){
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b">
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-md hover:bg-gray-100" onClick={onToggleSidebar}><Menu size={20}/></button>
        <h1 className="text-lg font-semibold">Health + Wellness</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">Welcome back, <strong>{mockUser.name}</strong></div>
        <button className="p-2 rounded-full bg-blue-600 text-white text-sm">Upgrade</button>
      </div>
    </header>
  );
}