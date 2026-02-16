import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
