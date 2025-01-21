import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("login");

  return (
    <div className="header">
      <div className="logo">
        <img className="image" src={LOGO_URL} alt="Not rendered"></img>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
          <button
            className="login"
            onClick={() => {
              loginbtn === "login"
                ? setLoginbtn("logout")
                : setLoginbtn("login");
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
