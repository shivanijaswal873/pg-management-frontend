import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/auth/AuthContext";

export default function PublicRoute({ children }: { children: JSX.Element }) {
  const { token } = useContext(AuthContext);
  if (token) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return children;
}
