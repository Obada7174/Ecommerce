import { Link } from "react-router-dom";
import { navigationLinks } from "../../../data/dummy";
const Navigation = () => {
  return (
    <div className="border border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex justify-between items-center gap-10 font-[600]">
          {navigationLinks.map((item) => (
            <li
              key={item.title}
              className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[0%] after:h-[3px] after:bg-primary after:duration-300 after:ease-in-out hover:after:w-full py-5"
            >
              <Link to={item.url} className="uppercase">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="space-x-6">
          <Link
            to="/login"
            className="bg-primary py-3 px-6 hover:scale-105 rounded-md"
          >
            login <i className="fa-solid fa-right-to-bracket"></i>
          </Link>
          <Link
            to="/register"
            className="bg-primary py-3 px-6 hover:scale-105 rounded-md"
          >
            sign up <i className="fa-solid fa-user-plus"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
