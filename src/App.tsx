import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/admin/login/login";
import Dashboard from "./pages/admin/dashboard/dashboard";
// import ProtectedRoute from "./auth/ProtectedRoute";
import AuthProvider from "./auth/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* LOGIN */}
          <Route path="/login" element={<Login />} />

          {/* DASHBOARD */}
          <Route
            path="/admin/dashboard"
            element={
              // <ProtectedRoute>
                <Dashboard />
              // </ProtectedRoute>
            }
          />

          {/* OPTIONAL DEFAULT REDIRECT */}
          <Route path="*" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
