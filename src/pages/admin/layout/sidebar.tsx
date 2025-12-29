// import { NavLink } from "react-router-dom";
// import { menuItems } from "./menuConfig";
// import "./Layout.css"
// export default function Sidebar({ collapsed }: any) {
//   return (
//     <aside className="sidebar">
//       <div className="brand">
//         <i className="bi bi-building"></i>
//         {!collapsed && <span>RentSaas</span>}
//       </div>

//       <ul className="menu">
//         {menuItems.map(item => (
//           <li key={item.label}>
//             <NavLink to={item.path} className="menu-link">
//               <i className={`bi ${item.icon}`}></i>
//               {!collapsed && <span>{item.label}</span>}
//             </NavLink>
//           </li>
//         ))}
//       </ul>

//       <div className="user-card">
//         <div className="avatar-sm">RS</div>
//         {!collapsed && (
//           <div>
//             <strong>Rajesh Kumar</strong>
//             <div className="muted">Property Broker</div>
//           </div>
//         )}
//       </div>
//     </aside>
//   );
// }
import { NavLink } from "react-router-dom";
import { menuItems } from "./menuConfig";
import "./Layout.css"
export default function Sidebar({ collapsed }: any) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <i className="bi bi-building"></i>
        {!collapsed && <span>RentSaas</span>}
      </div>

      <ul className="menu">
        {menuItems.map(item => (
          <li key={item.label}>
            <NavLink to={item.path} className="menu-link">
              <i className={`bi ${item.icon}`}></i>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="user-card">
        <div className="avatar-sm">RS</div>
        {!collapsed && (
          <div>
            <strong>Rajesh Kumar</strong>
            <div className="muted">Property Broker</div>
          </div>
        )}
      </div>
    </aside>
  );
}
