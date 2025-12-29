import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import "./layout.css";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 992) {
        setIsMobile(true);
        setCollapsed(false);
      } else {
        setIsMobile(false);
        setCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`app-container 
        ${collapsed ? "collapsed" : ""} 
        ${isMobile && collapsed ? "sidebar-open" : ""}
      `}
    >
      <Sidebar collapsed={collapsed} isMobile={isMobile} />

      {isMobile && collapsed && (
        <div
          className="sidebar-backdrop"
          onClick={() => setCollapsed(false)}
        />
      )}

      <div className="main-wrapper">
        <Header onToggle={() => setCollapsed(!collapsed)} />
        <div className="content-area">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}
