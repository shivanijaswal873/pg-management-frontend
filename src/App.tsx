import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/admin/login/login";
import Dashboard from "@/pages/admin/dashboard/Dashboard";
import AuthProvider from "@/auth/AuthContext";
import Layout from "@/components/layout/Layout";
import UnderProgress from "@/pages/admin/UnderProgress";
import NotFound from "./pages/Notfound";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<UnderProgress />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
