import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tooltip, Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import avatar from "../../data/avatar.jpg";
import { useDashboardContext } from "../../Contexts/DashboardContext";
import { Axios } from "../../Api/Axios";
import { logout, USER } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";

const NavButton = (props) => (
  <Tooltip title={props.title} placement="bottom" arrow>
    <button
      type="button"
      onClick={props.customFunc}
      style={{ color: props.color }}
      className="relative p-3 text-xl rounded-full hover:bg-light-gray"
    >
      <span
        style={{ backgroundColor: props.dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 top-2 right-2"
      />
      {props.icon}
    </button>
  </Tooltip>
);

export default function Navbar() {
  const [name, setName] = useState();
  const [anchorEl, setAnchorEl] = useState(null);

  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screen,
    setScreen,
    currentColor,
  } = useDashboardContext();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`${"/" + USER}`)
      .then((data) => setName(data.data.name))
      .catch(() => navigate("/login", { replace: true }));
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreen]);

  useEffect(() => {
    if (screen <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screen, setActiveMenu]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  async function handleLogout() {
    try {
      const cookie = Cookie();
      await Axios.get(`${"/" + logout}`);
      cookie.remove("BearerToken");
      window.location.pathname = "/login";
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => {
          setActiveMenu((prev) => !prev);
        }}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => {
            handleClick("Cart");
          }}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => {
            handleClick("Chat");
          }}
          color={currentColor}
          icon={<BsChatLeft />}
          dotColor="#03C9D7"
        />
        <NavButton
          title="Notification"
          customFunc={() => {
            handleClick("notification");
          }}
          color={currentColor}
          icon={<RiNotification3Line />}
          dotColor="#03C9D7"
        />
        <div>
          <Tooltip title="Profile" placement="bottom" arrow>
            <div
              className="p-1 flex items-center hover:bg-light-gray gap-2 cursor-pointer rounded-lg"
              onClick={handleMenuClick}
            >
              <Avatar
                src={avatar}
                alt="avatar"
                sx={{ width: 32, height: 32 }}
              />
              <p>
                <span className="text-14 text-gray-400">Hi,</span>
                <span className="text-14 text-gray-400 font-bold ml-1">
                  {name}
                </span>
              </p>
              <MdKeyboardArrowDown className="text-14 text-gray-400" />
            </div>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                maxHeight: 200,
                width: "15ch",
                bgcolor: currentColor,
                color: "white",
                marginTop: "20px",
                translate: "-20px",
              },
            }}
          >
            {/* <MenuItem onClick={}>Profile Settings</MenuItem> */}
            <MenuItem sx={{ fontWeight: "500" }} onClick={handleLogout}>
              Logout
            </MenuItem>
          </Menu>
        </div>
        {/* {isClicked.Cart && <Cart />}
        {isClicked.Chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />} */}
      </div>
    </div>
  );
}
