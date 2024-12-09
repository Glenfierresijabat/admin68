import { NavLink } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";
import { useState } from "react";


const Navbar = () => {

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];
  
  const [theme, setTheme] = useState(themes[0]);



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
                  ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md"
                  : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
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
          className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2`}
          onClick={() => setTheme(t)}
        ></div>
        ))}
        </div>
        <div>
          <NavLink
            to="/logout"
            className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white"
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
              <div className="text-white font-bold">Username</div>
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
