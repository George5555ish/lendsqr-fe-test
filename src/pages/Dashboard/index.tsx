import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar";
import TopBar from "./components/TopBar";
 
function Dashboard() {
  return (
    <div>
      <TopBar />
      <Sidebar /> 
      <Outlet />
  
    </div>
  );
}

export default Dashboard;
