import "./Header.css";
import "./Layout.css"
export default function Header({ onToggle }: any) {
  return (
 <header className="app-header">

  <button className="hamburger" onClick={onToggle}>
    <i className="bi bi-list"></i>
  </button>

  <div className="search-box">
    <i className="bi bi-search"></i>
    <input
      className="search-input"
      placeholder="Search properties, leads, or messages..."
    />
  </div>

  <div className="header-right">
    <div className="notif">
      <i className="bi bi-bell"></i>
      <span>3</span>
    </div>

    <div className="avatar">RK</div>
  </div>

</header>


  );
}

