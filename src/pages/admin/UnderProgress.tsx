import { Link } from "react-router-dom";

export default function UnderProgress() {
  return (
    <div className=" d-flex align-items-center justify-content-center bg-light">
      <div className="text-center p-4">
        <h1 className="display-5 fw-bold">🚧 Under Progress</h1>
        <p className="text-muted mt-3">
          This page is currently under development.  
          Please check back later.
        </p>
        <Link to="/admin/dashboard" className="btn btn-warning mt-3">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
