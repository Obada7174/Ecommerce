import axios from "axios";
import { useEffect } from "react";
import { baseURL, GOOGLE_CALL_BACK } from "../../Api/Api";
import { Navigate, useLocation } from "react-router-dom";
import Cookie from "cookie-universal";

export default function GoogleCallback() {
  const location = useLocation();
  const cookie = Cookie();
  useEffect(() => {
    async function GoogleCall() {
      try {
        const res = await axios.get(
          `${baseURL + "/" + GOOGLE_CALL_BACK + location.search}`,
        );
        const token = res.data.access_token;
        cookie.set("BearerToken", token);
        window.location.pathname = "/";
      } catch (error) {
        console.log(error);
      }
    }
    GoogleCall();
  }, []);
  return <Navigate replace={true} />;
}
