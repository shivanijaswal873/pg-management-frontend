import "bootstrap-icons/font/bootstrap-icons.css";
import "./layout.css";
import { useContext } from "react";
import { AuthContext } from "@/auth/AuthContext";

export default function Header({ onToggle }: any) {
    const { user } = useContext(AuthContext);
  return (
    <header className="d-flex align-items-center gap-3 px-4 py-2 bg-white border-bottom">
      <button
        className="btn p-0 fs-4 text-secondary"
        onClick={onToggle}
      >
        <i className="bi bi-list"></i>
      </button>
      <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill border bg-light shadow-sm w-50">
        <i className="bi bi-search text-muted"></i>
        <input
          className="form-control border-0 bg-transparent p-0"
          placeholder="Search properties, leads, or messages..."
        />
      </div>
      <div className="ms-auto d-flex align-items-center gap-3">
        <div className="position-relative fs-5 text-secondary">
          <i className="bi bi-bell"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
            3
          </span>
        </div>
        <div className="rounded-circle bg-primary text-white fw-semibold d-flex align-items-center justify-content-center header-avatar">
         {user?.name
            ?.split(" ")
            .map(word => word.charAt(0))
            .slice(0, 2)
            .join("")
            .toUpperCase()}
        </div>
      </div>
    </header>
  );
}
