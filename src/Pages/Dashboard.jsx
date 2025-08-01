import Revenue from "../Components/Revenue";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8">
        {/* Placeholder for routing or dashboard content */}
        <h2 className="text-2xl font-semibold text-gray-800">Welcome to Freelancer CRM</h2>
        <div className="p-8 space-y-8">
          <Revenue />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
