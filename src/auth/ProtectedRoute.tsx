import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/auth/AuthContext";

export default function ProtectedRoute() {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
