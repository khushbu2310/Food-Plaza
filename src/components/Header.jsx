import React, { useContext } from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnTitle, setBtnTitle] = useState("Login");

  const online = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using UseSelector()
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-200 shadow-md m-2">
      <div>
        <img className="w-44" src={LOGO_URL} />
      </div>
      <div className="content-center">
        <ul className="flex p-4 m-4 space-x-4">
          <li>Status: {online ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart: ({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() =>
                btnTitle === "Login"
                  ? setBtnTitle("Logout")
                  : setBtnTitle("Login")
              }
            >
              {btnTitle}
            </button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
