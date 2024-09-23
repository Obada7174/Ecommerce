import { Outlet } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Tooltip } from "@mui/material";
import { Navbar, Sidebar, ThemeSettings } from "../../Components/export";
import { useDashboardContext } from "../../Contexts/DashboardContext";

export default function Dashboard() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useDashboardContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4 z-[1000]">
          <Tooltip title="Settings" placement="top" arrow>
            <button
              type="button"
              className="text-3xl rounded-full  p-2 text-white hover:drop-shadow-xl "
              style={{ backgroundColor: currentColor }}
              onClick={() => setThemeSettings(true)}
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar bg-white dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen ${
            activeMenu ? "md:ml-72 w-[calc(100%-18rem)]" : "w-full flex-1"
          }`}
        >
          <div className="navbar fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
            <Navbar />
          </div>
          <div className="pt-16  md:pt-0  ">
            {themeSettings && <ThemeSettings />}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
