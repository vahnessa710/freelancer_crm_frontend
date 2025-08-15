import { FaTachometerAlt, FaUsers, FaProjectDiagram, FaFileInvoiceDollar, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ onLogout, setActiveView, activeView }) => {
  const navigate = useNavigate();
  const [showClients, setShowClients] = useState(false);
  
  const handleLogout = () => {
    onLogout();
    navigate('/auth');
  }

  return (
    <aside className="h-vh w-64 bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="px-6 py-4 border-b border-gray-700">
        <h1 className="text-lg font-bold tracking-wide text-gray-300 uppercase">Main Menu</h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-3">
        <SidebarLink 
          icon={<FaTachometerAlt />} 
          label="Dashboard" 
          onClick={() => setActiveView("dashboard")}
          active={activeView === "dashboard"}
        />
        <SidebarLink 
          icon={<FaUsers />} 
          label="Clients" 
          onClick={() => setActiveView("clients")}
          active={activeView === "clients"}
        />
        <SidebarLink 
          icon={<FaProjectDiagram />} 
          label="Projects" 
          onClick={() => setActiveView("projects")}
          active={activeView === "projects"}
        />
        <SidebarLink 
          icon={<FaFileInvoiceDollar />} 
          label="Billing" 
          onClick={() => setActiveView("billing")}
          active={activeView === "billing"}
        />
      </nav>

      <div className="px-4 py-6 border-t border-gray-700">
        <SidebarLink
          icon={<FaSignOutAlt />}
          onClick={handleLogout}
          label="Logout"
          danger
        />
      </div>
    </aside>
  );
};

const SidebarLink = ({ icon, label, danger, onClick, active }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2 rounded-md w-full text-left hover:bg-gray-800 ${
      danger 
        ? 'text-red-400 hover:text-red-300' 
        : active 
          ? 'bg-gray-800 text-white'
          : 'text-gray-300 hover:text-white'
    }`}
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default Sidebar;