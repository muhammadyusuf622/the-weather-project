import React from "react";
import NavbarLayout from "./NavbarLayout";
import SidebarLayout from "./SidebarLayout";
import { Outlet } from "react-router"
import { getSeasonBackground } from "../lib";

const MainLayout = () => {

  const seasonalBackground = getSeasonBackground();

  return (
    <div
      className="flex min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${seasonalBackground})`,
      }}
    >
      <div className="flex-1 flex flex-col">
        <NavbarLayout />
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <SidebarLayout />
    </div>
  );
};

export default MainLayout;
