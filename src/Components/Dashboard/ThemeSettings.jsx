import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { Tooltip } from "@mui/material";
import { themeColors } from "../../data/dummy";
import { useDashboardContext } from "../../Contexts/DashboardContext";
// import Calendar from "./../Pages/Calendar";
export default function ThemeSettings() {
  const { setColor, setMode, currentColor, currentMode, setThemeSettings } =
    useDashboardContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4 ">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              checked={currentMode === "Light"}
              onChange={setMode}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              checked={currentMode === "Dark"}
              onChange={setMode}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4 ">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <Tooltip
                key={index}
                title={item.name}
                placement="bottom"
                className="z-auto"
                arrow
              >
                <div className="relative mt-2 flex gap-5 cursor-pointer items-center ">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
