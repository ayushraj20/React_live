import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { APP_LOGO } from "../contants";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={APP_LOGO} />
  </a>
);

const Header = () => {
  const { user } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/about"}>About</Link>
          </li>

          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>

          <li>
            <Link to={"/instamart"}>Instamart</Link>
          </li>

          <li>
            <Link to={"/cart"}>Cart-{cartItems.length}</Link>
          </li>
          <li style={{ color: "red" }}>{user.name}</li>
          <li>{isOnline ? "🟢" : "🔴"}</li>
          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
