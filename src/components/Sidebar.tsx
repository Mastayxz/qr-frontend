const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5 hidden md:block">
      <h2 className="text-2xl font-bold">QR Generator</h2>
      <nav className="mt-4">
        <ul>
          <li className="py-2 px-3 hover:bg-blue-500 rounded">Home</li>
          <li className="py-2 px-3 hover:bg-blue-500 rounded">History</li>
          <li className="py-2 px-3 hover:bg-blue-500 rounded">Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
