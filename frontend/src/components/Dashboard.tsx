import { useLogout } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate=useNavigate();
  const {mutate,status} = useLogout();
  const isLoading = status === "pending";

  const handleLogout = async () => {
       mutate();
      navigate("/signin");

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
      <button 
        onClick={handleLogout} 
        className="mt-4 px-5 py-2 bg-red-500 text-white rounded-md">
        {isLoading ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
};

export default Dashboard;
