import "./404.css";
const Forbidden = ({ color = "#f6d200" }) => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-gradient flex-col"
      style={{
        "--primary-color": color,
        backgroundImage: `linear-gradient(
          45deg,
          white 25%,
          #20232A 25%,
          #20232A 50%,
          white 50%,
          white 75%,
          #20232A 75%,
          #20232A 100%
        )`,
      }}
    >
      <h1 className="uppercase text-[384px] leading-[0.7] m-0 relative text-gray-900 font-bold">
        <span
          className="relative bg-text-pattern bg-clip-text text-transparent"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              ${color},
              ${color} 10px,
              #181617 10px,
              #181617 20px
            )`,
          }}
        >
          404
        </span>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[20deg] bg-warning text-black font-bold text-[35px] uppercase p-8 rounded-lg shadow-lg"
          style={{ "--primary-color": color }}
        >
          Page not Found
        </div>
      </h1>
    </div>
  );
};

export default Forbidden;
