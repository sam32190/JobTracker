import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Check if the user is authenticated by verifying the presence of a token
  const isAuthenticated = !!localStorage.getItem("token");

  // If authenticated, allow access to the protected routes, otherwise redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
