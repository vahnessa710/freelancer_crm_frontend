import { useState } from "react";
import Revenue from "../Components/Revenue";
import Sidebar from "../Components/Sidebar";
import Project from "../Components/Project";
import Profile from "../Components/Profile";
import Client from "../Components/Client";

function Dashboard({ onLogout }) {
  const [activeView, setActiveView] = useState("dashboard");

  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <Profile />
            <Revenue />
            <Project />
          </div>
        );
      case "clients":
        return <Client />;
      case "projects":
        return <Project />;
      case "profile":
        return <Profile />;
      default:
        return <Revenue />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        onLogout={onLogout} 
        setActiveView={setActiveView} 
        activeView={activeView}
      />
      
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-semibold text-gray-900">
              {activeView === "dashboard" && "Welcome to Freelancer CRM"}
              {activeView === "clients" && "Clients"}
              {activeView === "projects" && "Projects"}
              {activeView === "profile" && "Profile"}
            </h1>
          </div>
        </header>
        
        <main className="flex-1">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {renderActiveView()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;