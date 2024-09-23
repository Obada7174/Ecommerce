import { useDashboardContext } from "../../Contexts/DashboardContext";

export default function Button(props) {
  const { currentColor } = useDashboardContext();
  return (
    <button
      onClick={props.onClick}
      type={props.type || "button"}
      style={{
        backgroundColor: currentColor,
        color: "white",
        borderRadius: props.borderRadius,
      }}
      className={`text-${props.size}   p-3 hover:drop-shadow-xl hover:opacity-90 ${props.className}`}
    >
      {props.text}
    </button>
  );
}
