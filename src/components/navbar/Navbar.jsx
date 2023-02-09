import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";
import { Link } from 'react-router-dom'
import { logout } from "../../authContext/apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const {dispatch} = useContext(AuthContext)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    logout(dispatch)
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to='/' className="link">
          <span>Home</span>
          </Link>
          <Link to='/series' className="link">
          <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to='/movies' className="link">
          <span className="navbarmainLinks">Movies</span>
          </Link>
          <Link to='/' className="link">
          <span>New and Popular</span>
          </Link>
          <Link to='/' className="link">
          <span>My List</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" onClick={handleLogout}/>
            <div className="options">
              <span>Settings</span>
              <span onClick={handleLogout} className="logoutt">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
