import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show loader while Firebase checks auth
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Checking authentication...
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // Show protected content
  return children;
};

export default PrivateRoute;
