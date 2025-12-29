import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginImage from "../../../assets/images/login-image.jpg";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Temporary validation (optional)
    if (!email || !password) return;

    // redirect to dashboard
      navigate("/admin/dashboard");
  };

  return (
    <div className="container-fluid min-vh-100 login-wrapper">
      <div className="row min-vh-100">

        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE */}
        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center login-right">

          <div className="login-card">

            <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
              <div className="logo">🏢</div>
              <span className="brand">RentSaas</span>
            </div>

            <h5 className="fw-semibold">Welcome Back</h5>
            <p className="text-muted mb-3">
              Login to manage your properties
            </p>

            <form onSubmit={handleLogin}>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control custom-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control custom-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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

              <button className="btn login-btn w-100" type="submit">
                Login
              </button>

            </form>

            <p className="text-center mt-3 small">
              Don’t have an account? <a href="#">Sign up</a>
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

// import { useContext, useState } from "react";
// import { AuthContext } from "../../../auth/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { loginApi } from "../../../api/authService";
// import loginImage from "../../../assets/images/login-image.jpg";
// import "./Login.css";

// export default function Login() {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await loginApi({ email, password });
//       login(res.data.token);
//       navigate("/");
//     } catch (err) {
//       setError("Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">

//       {/* LEFT BLUE SECTION */}
//       <div className="left-pane">
//         <div className="left-content">
//           <img src={loginImage} className="illustration" alt="building" />

//           <h4 className="title">Simplify Your Rental Management</h4>

//           <p className="subtitle">
//             Manage properties, connect with tenants, and grow your rental
//             business all in one place.
//           </p>
//         </div>
//       </div>

//       {/* RIGHT FORM SECTION */}
//       <div className="right-pane">
//         <div className="login-card">

//           <div className="logo">🏢</div>
//           <h5 className="brand">RentSaas</h5>

//           <h6 className="welcome">Welcome Back</h6>
//           <p className="hint">Login to manage your properties</p>

//           {/* ERROR MESSAGE */}
//           {error && (
//             <p className="text-danger small text-center">{error}</p>
//           )}

//           {/* FORM */}
//           <form onSubmit={handleLogin}>

//             <label>Email Address</label>
//             <input
//               type="email"
//               className="input"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <label>Password</label>
//             <input
//               type="password"
//               className="input"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <div className="row-line">
//               <div>
//                 <input type="checkbox" /> Remember me
//               </div>
//               <a href="#">Forgot Password?</a>
//             </div>

//             <button
//               className="login-btn"
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <p className="signup">
//             Don’t have an account? <a href="#">Sign up</a>
//           </p>

//           <p className="footer">
//             Perfect for Brokers, Builders & Property Owners
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
