import { Input } from "../../Components/export";
import { Link, useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { baseURL, login } from "./../../Api/Api";
import { useStateContext } from "../../Contexts/ContextProvider";
import Cookie from "cookie-universal";
export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const cookie = Cookie();
  const { setLoading } = useStateContext();
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL + "/" + login}`, form);
      const token = res.data.token;
      cookie.set("BearerToken", token);
      window.location.pathname = "/";

      setLoading(false);
    } catch (e) {
      setLoading(false);
      if (e.response.status === 401) {
        setErr("Wrong Email or Password");
      } else {
        setErr("Internal Server Error");
      }
    }
  }
  return (
    <div className="container mx-auto w-96 bg-white shadow-2xl p-6 rounded-lg space-y-4">
      <h1 className="font-bold text-center text-2xl">Welcome Back</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          form={form}
          setForm={setForm}
          value={form.email}
          name="email"
          type="email"
          placeholder="Email"
          isFirst={true}
        />
        <Input
          form={form}
          setForm={setForm}
          value={form.password}
          name="password"
          type="password"
          placeholder="Password"
        />

        <p className="text-parg capitalize text-end text-sm cursor-pointer hover:opacity-85">
          forget password?
        </p>
        {err !== "" && <p className="text-sm text-red-600">{err}</p>}
        <button
          type="submit"
          className="w-full text-center text-white bg-primary font-semibold py-2 rounded-lg shadow-xl hover:opacity-90 hover:drop-shadow-sm"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-parg ">
        Already have an account?
        <Link
          to="/register"
          className="hover:underline hover:drop-shadow-sm text-primary ml-1.5"
        >
          Sign Up
        </Link>
      </p>
      <Link
        to="http://127.0.0.1:8000/login-google"
        type="button"
        className="flex justify-center gap-2 items-center w-full text-center text-white bg-dark font-semibold py-3 rounded-lg shadow-xl hover:opacity-90 hover:drop-shadow-md"
      >
        <FaGoogle className=" mb-0.5" />
        Login with Google
      </Link>
      <button
        type="button"
        className="border-2 border-border flex justify-center gap-2 items-center w-full text-center text-dark bg-white font-semibold py-3 rounded-lg shadow-xl hover:opacity-90 hover:drop-shadow-md"
      >
        <FaApple className="text-2xl mb-0.5" />
        Login with Apple
      </button>
    </div>
  );
}
