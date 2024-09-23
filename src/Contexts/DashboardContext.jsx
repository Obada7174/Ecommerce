import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
const StateContext = createContext();
const initialState = {
  chat: false,
  cart: false,
  useProfile: false,
  notification: false,
};
export const DashboardContext = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screen, setScreen] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(
    localStorage.getItem("colorTheme") || "#03C9D7",
  );
  const [currentMode, setCurrentMode] = useState(
    localStorage.getItem("mode") || "Light",
  );
  const [themeSettings, setThemeSettings] = useState(false);
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("mode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (e) => {
    setCurrentColor(e);
    localStorage.setItem("colorTheme", e);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screen,
        setScreen,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
      }}
    >
      <Outlet />
    </StateContext.Provider>
  );
};
export const useDashboardContext = () => useContext(StateContext);
