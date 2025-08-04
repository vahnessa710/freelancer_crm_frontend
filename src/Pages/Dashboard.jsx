import Revenue from "../Components/Revenue";
import Sidebar from "../Components/Sidebar";
import Project from "../Components/Project";
import Profile from "../Components/Profile";
function Dashboard( { onLogout } ) {
  return (
    <div className="flex h-screen">
      <Sidebar onLogout={onLogout}/>
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome to Freelancer CRM
        </h2>
        <div className="flex justify-between items-stretch gap-4 pt-4">
          <Profile />
          <Revenue />
        </div>
        <div className="flex justify-between items-start pt-4">
          <Project />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
