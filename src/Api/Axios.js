import axios from "axios";
import { baseURL } from "./Api";
import Cookie from "cookie-universal";
const cookie = Cookie();
export const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${cookie.get("BearerToken")}`,
  },
});
