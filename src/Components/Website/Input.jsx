import { useEffect, useRef } from "react";

export default function Input(props) {
  function handleChange(e) {
    props.setForm({ ...props.form, [e.target.name]: e.target.value });
  }

  const focus = useRef(null);
  useEffect(() => {
    if (props.isFirst) focus.current.focus();
  }, []);
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      className={`w-full h-[35px] rounded-md outline-none border-2 border-b-4 dark:border-[#303030] bg-slate-100 dark:border-b-[#9a9a9a] pl-2 pr-2 dark:bg-[#2d2d2d] dark:text-white transition-all duration-300 ease-in-out placeholder-[#9a9a9a] dark:hover:bg-[#313131] dark:focus:bg-[#1e1f20]  focus:border-border focus:drop-shadow-lg invalid:focus:border-b-red-600 valid:focus:border-b-[var(--current-color)] ${props.className}`}
      style={{
        "--current-color": props.currentColor || "#fcb700",
        ...props.style,
      }}
      value={props.value}
      onChange={props.handleChange || handleChange}
      minLength={
        props.type === "password" ? "6" : props.type === "text" ? "3" : ""
      }
      required
      ref={focus}
      disabled={props.disabled}
    />
  );
}
