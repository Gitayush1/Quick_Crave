import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Logo from '../images/Logo.png'
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("login");

  const {loggedInUser} = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items)
  //console.log(cartItems)

  return (
    <div className="flex justify-between shadow-md">
      <div className="logo">
        <img
          className="h-24 w-auto"
          src={Logo}
          alt="Not rendered"
        ></img>
      </div>
      <div className="h-24">
        <ul className="flex m-7 cursor-pointer ">
          <li className="p-2 text-md rounded-md px-3 py-2 font-medium hover:bg-gray-600 hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 text-md rounded-md px-3 py-2 font-medium hover:bg-gray-600 hover:text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 text-md rounded-md px-3 py-2 font-medium hover:bg-gray-600 hover:text-white">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2 text-md rounded-md px-3 py-2 font-medium hover:bg-gray-600 hover:text-white">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="p-2 text-md rounded-md px-3 py-2 font-medium hover:bg-gray-600 hover:text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="flex p-2 text-md hover:cursor-pointer rounded-md px-3 py-2 font-medium hover:bg-gray-600 hover:text-white"
            onClick={() => {
              loginbtn === "login"
                ? setLoginbtn("logout")
                : setLoginbtn("login");
            }}
          >
            {loginbtn}
          </button>
          <li className="p-2 text-md">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
