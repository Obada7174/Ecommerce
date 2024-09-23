import {
  DashHeader,
  Input,
  DashButton,
  DashContainer,
} from "../../../Components/export";
import { useStateContext } from "../../../Contexts/ContextProvider";
import { useDashboardContext } from "../../../Contexts/DashboardContext";

import { ADD, USER } from "../../../Api/Api";
import { Axios } from "../../../Api/Axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddCategory() {
  const { currentColor } = useDashboardContext();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const { setLoading } = useStateContext();
  const [err, setErr] = useState("");
  const nav = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await Axios.post(`${USER + "/" + ADD}`, form);
      setLoading(false);
      nav("/dashboard/users");
    } catch (e) {
      setLoading(false);
      if (e.response.status === 422) {
        setErr("Email is already been taken");
      } else {
        setErr("Internal Server Error");
      }
    }
  }
  return (
    <DashContainer>
      <DashHeader category="Page" title="Add User" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          form={form}
          setForm={setForm}
          value={form.name}
          name="name"
          type="text"
          placeholder="Name"
          currentColor={currentColor}
          isFirst={true}
        />
        <Input
          form={form}
          setForm={setForm}
          value={form.email}
          name="email"
          type="email"
          placeholder="Email"
          currentColor={currentColor}
        />
        <Input
          form={form}
          setForm={setForm}
          value={form.password}
          name="password"
          type="password"
          placeholder="Password"
          currentColor={currentColor}
        />

        <select
          value={form.role}
          onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}
          placeholder="User Role"
          className={`w-full h-[35px] rounded-md outline-none border-2 border-b-4 dark:border-[#303030] bg-slate-100 dark:border-b-[#9a9a9a] pl-2 pr-2 dark:bg-[#2d2d2d] dark:text-white transition-all duration-300 ease-in-out placeholder-[#9a9a9a] dark:hover:bg-[#313131] dark:focus:bg-[#1e1f20] focus:border-border focus:drop-shadow-lg invalid:focus:border-b-red-600 valid:focus:border-b-[var(--current-color)]`}
          style={{ "--current-color": currentColor || "primary" }}
          required
        >
          <option value="" disabled hidden>
            Select Role
          </option>

          <option value="1995">Admin</option>
          <option value="2001">User</option>
          <option value="1996">Writer</option>
          <option value="1999">Products Manager</option>
        </select>

        {err !== "" && <p className="text-sm text-red-600">{err}</p>}

        <DashButton
          type="submit"
          size="md"
          className="font-bold w-full"
          text="Add New User"
          borderRadius="10px"
        />
      </form>
    </DashContainer>
  );
}
