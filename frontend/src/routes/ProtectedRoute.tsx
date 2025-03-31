import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { data:isAuthenticated, isLoading } = useAuthStatus();

  if (isLoading) return <p>Loading...</p>;
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
