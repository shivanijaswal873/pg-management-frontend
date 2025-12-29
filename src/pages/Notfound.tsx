import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center p-4">
        <h1 className="display-5 fw-bold">Not Found</h1>
        <p className="text-muted mt-3">Page Not Found</p>
        <Link to="/admin/dashboard" className="btn btn-primary mt-3">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
