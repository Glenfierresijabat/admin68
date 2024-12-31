import Input from "../Elements/LabeledInput/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";

const Header = () => {
  const date = new Date().toDateString().slice(4);
  const { theme } = useContext(ThemeContext); 

  const { name } = useContext(AuthContext);

  return (
    <header 
      className={`border-b-2 py-4 px-6 flex items-center justify-between ${theme.name}`}
    >
      <div className="flex">
        <div className="font-bold text-lg">{name}</div>
        <div className="ms-6 text-gray-03">{date}</div>
      </div>
      <div className="flex">
        <div className="self-center">
          <NotificationsIcon className="text-primary scale-110" />
        </div>
        <div className="ms-10 hidden sm:block">
          <Input variant="bg-white w-80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
