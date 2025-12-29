import { NavLink } from "react-router-dom";
import { menuItems } from "./menuConfig";
import { AuthContext } from "@/auth/AuthContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useContext } from "react";
type Props = {
  collapsed: boolean;
  isMobile: boolean;
};
export default function Sidebar({ collapsed, isMobile }: Props) {
  const { user } = useContext(AuthContext);
  return (
    <aside
      className={`sidebar 
        ${collapsed ? "collapsed" : ""} 
        ${isMobile ? "mobile" : ""}
      `}
    >
      <div className="brand d-flex align-items-center gap-2 mb-3 px-2">
        <i className="bi bi-building fs-5"></i>
        {!collapsed && <span>RentSaas</span>}
      </div>
      <ul className="nav flex-column gap-1">
        {menuItems.map(item => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link d-flex align-items-center gap-3 px-3 py-2 
                ${isActive ? "active" : ""}`
              }
            >
              <i className={`bi ${item.icon} fs-5`}></i>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="user-card mt-auto d-flex align-items-center gap-2">
        <div className="avatar-sm">
          {user?.name
            ?.split(" ")
            .map(word => word.charAt(0))
            .slice(0, 2)
            .join("")
            .toUpperCase()}
        </div>
        {!collapsed && (
          <div>
            <strong>{user?.name}</strong>
            <div className="text-white-50 small">Property Broker</div>
          </div>
        )}
      </div>
    </aside>
  );
}
