import "bootstrap-icons/font/bootstrap-icons.css";
import "./layout.css";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "@/auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header({ onToggle }: any) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      logout();
      navigate("/login");
    }
  };

  const initials = user?.name
    ?.split(" ")
    .map(word => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className="d-flex align-items-center gap-3 px-4 py-2 bg-white border-bottom">
      {/* Menu Toggle */}
      <button className="btn p-0 fs-4 text-secondary" onClick={onToggle}>
        <i className="bi bi-list"></i>
      </button>

      {/* Search */}
      <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill border bg-light shadow-sm w-50">
        <i className="bi bi-search text-muted"></i>
        <input
          className="form-control border-0 bg-transparent p-0"
          placeholder="Search properties, leads, or messages..."
        />
      </div>

      {/* Right Section */}
      <div className="ms-auto d-flex align-items-center gap-3">
        {/* Notification */}
        <div className="position-relative fs-5 text-secondary">
          <i className="bi bi-bell"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
            3
          </span>
        </div>

        {/* Avatar + Dropdown */}
        <div className="position-relative" ref={dropdownRef}>
          <div
            className="rounded-circle bg-primary text-white fw-semibold d-flex align-items-center justify-content-center header-avatar cursor-pointer"
            onClick={() => setOpen(prev => !prev)}
          >
            {initials}
          </div>

          {open && (
            <div className="dropdown-menu show shadow mt-2 end-0 position-absolute">
              <div className="px-3 py-2 border-bottom">
                <strong>{user?.name}</strong>
                <div className="small text-muted">{user?.email}</div>
              </div>

              <button
                className="dropdown-item text-danger d-flex align-items-center gap-2"
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right"></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
