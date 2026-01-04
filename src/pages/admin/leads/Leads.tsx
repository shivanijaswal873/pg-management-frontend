import { useEffect, useState } from "react";
import { getLeads, type Lead } from "../../../api/leadsService";

export default function Leads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const res = await getLeads();
    setLeads(res);
    setLoading(false);
  };

  const filtered = leads.filter((l) => {
    const s = search.toLowerCase();
    return (
      (l.name.toLowerCase().includes(s) ||
        l.email.toLowerCase().includes(s) ||
        l.phone.includes(search)) &&
      (status === "All" || l.status === status)
    );
  });

  const total = leads.length;
  const newCount = leads.filter((l) => l.status === "New").length;
  const contacted = leads.filter((l) => l.status === "Contacted").length;
  const followUp = leads.filter((l) => l.status === "Follow-up").length;

  return (
    <div className="container-fluid py-4">

      <h4 className="fw-bold mb-1">Leads & Inquiries</h4>
      <p className="text-muted mb-4">
        Manage all property inquiries and leads
      </p>

      <div className="row g-3 mb-4">

        {[
          { label: "Total Leads", value: total },
          { label: "New", value: newCount },
          { label: "In Progress", value: followUp },
          { label: "Converted", value: contacted },
        ].map((card, i) => (
          <div className="col-md-3 col-6" key={i}>
            <div
              className="rounded shadow-sm bg-white p-4"
              style={{ borderRadius: "16px" }}
            >
              <div className="text-muted">{card.label}</div>
              <h4 className="fw-bold mt-2">{card.value}</h4>
            </div>
          </div>
        ))}

      </div>

      <div
        className="d-flex align-items-center justify-content-between bg-white shadow-sm px-3 py-2 rounded mb-3"
        style={{ borderRadius: "16px" }}
      >
        <input
          className="form-control border-0"
          style={{ boxShadow: "none" }}
          placeholder="Search leads by name, phone, or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-select w-auto ms-2 border-0"
          style={{ boxShadow: "none" }}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Follow-up">Follow-up</option>
        </select>
      </div>

      <div className="table-responsive bg-white rounded shadow-sm">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Lead Name</th>
              <th>Contact</th>
              <th>Property</th>
              <th>Status</th>
              <th>Date</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>

          <tbody>

            {loading && (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  Loading…
                </td>
              </tr>
            )}

            {!loading &&
              filtered.map((lead) => (
                <tr key={lead.id}>
                  <td className="fw-semibold">{lead.name}</td>

                  <td>
                    <div className="fw-semibold">{lead.phone}</div>
                    <div className="text-muted small">{lead.email}</div>
                  </td>

                  <td>{lead.property}</td>

                  <td>
                    <span
                      className={`badge px-3 py-2 rounded-pill ${
                        lead.status === "New"
                          ? "bg-success-subtle text-success"
                          : lead.status === "Contacted"
                          ? "bg-primary-subtle text-primary"
                          : "bg-warning-subtle text-warning"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>

                  <td>
                    {new Date(lead.date).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>

                  <td className="text-end">
                    <button className="btn btn-outline-primary btn-sm">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}

            {!loading && filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-muted py-4">
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
