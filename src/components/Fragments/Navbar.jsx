import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";

const Navbar = () => {
  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];
  
  const { theme, setTheme} = useContext(ThemeContext);
  const { setIsLoggedIn, setName , name } = useContext(AuthContext);
  const { setMsg, setOpen, setIsLoading } = useContext(NotifContext);

  const navigate = useNavigate();

  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balances",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transactions",
    },
    {
      id: "bill",
      link: "/bill",
      icon: <Icon.Bill />,
      label: "Bills",
    },
    {
      id: "expense",
      link: "/expense",
      icon: <Icon.Expense />,
      label: "Expenses",
    },
    {
      id: "goal",
      link: "/goal",
      icon: <Icon.Goal />,
      label: "Goals",
    },
    {
      id: "setting",
      link: "/setting",
      icon: <Icon.Setting />,
      label: "Settings",
    },
  ];

  const refreshToken = localStorage.getItem("refreshToken");

  const Logout = async () => {
    setIsLoading(true);
    try {
      await axios.get("https://jwt-auth-eight-neon.vercel.app/logout", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      setOpen(true);
      setMsg({ severity : "success", desc: "Logout Success"});
    } catch (error) {
      if (error.response) {
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg });
      }
    }
  
  setIsLoggedIn(false);
  setName("");
  setIsLoading(false);

  localStorage.removeItem("refreshToken");
  navigate("/login");
  };

  return (
    <div className={`bg-defaultBlack ${theme.name}`}>
      <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          <NavLink to="/" className="flex justify-center mb-10">
            <Logo variant="text-primary text-sm sm:text-2xl" />
          </NavLink>
          {menus.map((menu) => (
            <NavLink
              key={menu.id}
              to={menu.link}
              className={({ isActive }) =>
                isActive
                  ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md zoom-in"
                  : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md zoom-in"
              }
            >
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </NavLink>
          ))}
        </div>
        <div className="md:flex md:gap-2">
          Themes
          {themes.map((t) => (
            <div
                key={t.name}
                className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2 zoom-in`}
                onClick={() => setTheme(t)}
        ></div>
        ))}
        </div>
        <div>
          <NavLink
            onClick={Logout}
            className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white zoom-in"
          >
            <div className="mx-auto sm:mx-0 text-primary ">
              <Icon.Logout />
            </div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </NavLink>
          <div className="border-b my-10 border-b-special-bg"></div>
          <NavLink to="/profile" className="flex justify-between">
            <div className="mx-auto sm:mx-0 self-center">
              <img src="images/profile.png" />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold">{name}</div>
              <div className="text-xs">View Profile</div>
            </div>
            <div className="hidden sm:block self-center">
              <Icon.KebabMenu />
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
