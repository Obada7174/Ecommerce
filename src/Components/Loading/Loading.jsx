import "./Loading.css";
const Loading = () => {
  return (
    <div
      className={`flex justify-center items-center bg-gray-200 bg-opacity-80 h-screen  w-full fixed z-[1001] `}
    >
      <div id="wifi-loader" className="">
        <svg viewBox="0 0 86 86" className="circle-outer">
          <circle r="40" cy="43" cx="43" className="back" />
          <circle r="40" cy="43" cx="43" className="front" />
          <circle r="40" cy="43" cx="43" className="new" />
        </svg>
        <svg viewBox="0 0 60 60" className="circle-middle">
          <circle r="27" cy="30" cx="30" className="back" />
          <circle r="27" cy="30" cx="30" className="front" />
        </svg>

        <div data-text="Loading..." className="text ml-3" />
      </div>
    </div>
  );
};
export default Loading;
