import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { links } from "../../data/dummy";
import { MdOutlineCancel } from "react-icons/md";
import { Tooltip } from "@mui/material";
import { useDashboardContext } from "../../Contexts/DashboardContext";
import { useStateContext } from "../../Contexts/ContextProvider";

export default function Sidebar() {
  const { activeMenu, setActiveMenu, screen, currentColor } =
    useDashboardContext();
  const { currentUser } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screen <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 `;
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div
      className="ml-3 h-screen md:overflow-hidden 
      overflow-auto md:hover:overflow-auto pb-10"
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center ">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center mt-4 flex text-xl tracking-tight font-extrabold dark:text-white text-slate-900 ml-3 gap-3"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <Tooltip title="Menu" placement="bottom" arrow>
              <button
                type="button"
                onClick={() => {
                  setActiveMenu(false);
                }}
                className="text-xl rounded-full p-3 hover:bg-light-gray block md:hidden mt-4 "
              >
                <MdOutlineCancel style={{ color: currentColor }} />
              </button>
            </Tooltip>
          </div>
          <div className="mt-10">
            <div>
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map(
                    (link) =>
                      link.roleShow.includes(currentUser.role) && (
                        <NavLink
                          to={`/dashboard/${link.url || link.name}`}
                          key={link.name}
                          onClick={handleCloseSidebar}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                          style={({ isActive }) => ({
                            backgroundColor: isActive ? currentColor : "",
                          })}
                        >
                          {link.icon}
                          <span className="capitalize">{link.name}</span>
                        </NavLink>
                      ),
                  )}
                </div>
              ))}
            </div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? activeLink : normalLink) + "text-center m-3 mt-10 "
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
            >
              GO to Website
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}
