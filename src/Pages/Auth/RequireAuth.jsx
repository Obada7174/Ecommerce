import Cookie from "cookie-universal";
import { Navigate, Outlet } from "react-router-dom";
import Forbidden from "./403/Forbidden";
import { useDashboardContext } from "../../Contexts/DashboardContext";
import { useStateContext } from "../../Contexts/ContextProvider";

export default function RequireAuth({ allowedRole }) {
  const { currentColor } = useDashboardContext();
  const { currentUser } = useStateContext();

  const cookie = Cookie();
  const token = cookie.get("BearerToken");

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  } else if (currentUser === null) {
    return null;
  } else if (allowedRole.includes(currentUser.role)) {
    return <Outlet />;
  } else {
    return <Forbidden color={currentColor} />;
  }
}
