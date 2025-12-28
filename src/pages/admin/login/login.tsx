import "./Login.css";
import loginImage from "../../../assets/images/login-image.jpg"

export default function Login() {
  return (
    <div className="container-fluid min-vh-100 login-wrapper">
      <div className="row min-vh-100">
        <div className="col-lg-6 d-none d-lg-flex login-left align-items-center justify-content-center">
          <div className="left-content text-center">
            <div className="image-card">
              <img src={loginImage} alt="Building" />
            </div>
            <h4 className="mt-4 fw-bold text-white">
              Simplify Your Rental Management
            </h4>
            <p className="text-white-50 mt-2">
              Manage properties, connect with tenants, and grow your rental
              business all in one place.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center login-right">
          <div className="login-card">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
              <div className="logo">🏢</div>
              <span className="brand">RentSaas</span>
            </div>
            <h5 className="fw-semibold">Welcome Back</h5>
            <p className="text-muted mb-4">
              Login to manage your properties
            </p>
            <form>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control custom-input"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control custom-input"
                  placeholder="••••••••"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Remember me</label>
                </div>
                <a href="#" className="small link-primary">
                  Forgot Password?
                </a>
              </div>
              <button className="btn login-btn w-100">
                Login
              </button>
            </form>
            <p className="text-center mt-3 small">
              Don’t have an account? <a href="#">Sign up</a>
            </p>
          </div>
          <p className="footer-text">
            Perfect for Brokers, Builders & Property Owners
          </p>
        </div>
      </div>
    </div>
  );
}
