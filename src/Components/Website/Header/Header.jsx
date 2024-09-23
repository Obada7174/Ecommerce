import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Cart from "./HeaderCart";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../Contexts/ContextProvider";

const Header = () => {
  const { currentUser } = useStateContext();
  return (
    <header className="bg-white fixed top-0 right-0 left-0 w-full z-[1000] shadow-md ">
      <div className="container flex justify-between items-center mx-auto py-[19px]">
        <Logo />
        {currentUser.role !== "2001" && currentUser.role && (
          <Link to="/dashboard" className="bg-black p-4">
            Dashboard
          </Link>
        )}
        <SearchForm />
        <Cart />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
