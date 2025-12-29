import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";

export default function Layout({ children }: any) {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`app-container ${collapsed ? "collapsed" : ""}`}>
      <Sidebar collapsed={collapsed} />
      <div className="main-wrapper">
        <Header onToggle={() => setCollapsed(!collapsed)} />
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
}
