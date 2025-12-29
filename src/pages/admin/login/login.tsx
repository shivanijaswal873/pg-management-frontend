import { useContext, useState } from "react";
import { AuthContext } from "@/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginApi } from "@/api/authService";
import loginImage from "@/assets/images/login-image.jpg";
import "./Login.css";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    console.log("Attempting login with:", { email, password });
    try {
      const res = await loginApi({ email, password });
      login(res.data.token,  res.data.admin );
      navigate("/admin/dashboard");
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center bg-primary">
          <div className="text-center text-white px-4">
            <img
              src={loginImage}
              className="img-fluid rounded-4 mb-4 login-image"
              alt="login"
            />
            <h4 className="fw-bold">Simplify Your Rental Management</h4>
            <p className="text-white-50 small">
              Manage properties, connect with tenants, and grow your rental
              business all in one place.
            </p>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center bg-light">
          <div className="card border-0 shadow-sm p-4 login-card">
            <div className="text-center mb-3">
              <div className="rounded-circle bg-warning-subtle d-inline-flex 
                  align-items-center justify-content-center logo">
                🏢
              </div>
              <h5 className="fw-semibold mt-2">RentSaas</h5>
            </div>
            <h6 className="fw-bold text-center">Welcome Back</h6>
            <p className="text-muted text-center small">
              Login to manage your properties
            </p>
            {error && (
              <p className="text-danger small text-center">{error}</p>
            )}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label small fw-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control rounded-3"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <label className="form-label small fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-3"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-between small mb-3">
                <div>
                  <input type="checkbox" className="me-1" /> Remember me
                </div>
                <a href="#" className="text-decoration-none">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100 fw-semibold rounded-3"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <p className="text-center small mt-3">
              Don’t have an account? <a href="#">Sign up</a>
            </p>
            <p className="text-center text-muted small mb-0">
              Perfect for Brokers, Builders & Property Owners
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
