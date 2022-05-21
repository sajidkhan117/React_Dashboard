import React from "react";
import "./Header.css";
import Profile from './assets/ProfileIMG.png';
import Logo from './assets/LogoIMG.png';
import { FaBars, FaSearch, FaAngleDown } from "react-icons/fa";

function Header(props) {
  return (
    <div className="header" id="header">
      <div className="logo_container">
        <img src={Logo} alt="logoIcon" />
      </div>
      <div className="faBars_container">
        <FaBars className="faBars" />
      </div>
      <div className="faSearch_container">
        <FaSearch className="bsSearch" />
        <input type="text" name="search" id="search" placeholder="Search" className="search_input" />
      </div>
      <div className="userProfile_container">
        <div className="profile_img">
          <img src={Profile} alt="profileImg" />
        </div>
        <div className="user_name">
          Bature Badamasi
        </div>
        <div className="userDropdown_icon">
          <FaAngleDown  />
        </div>
      </div>
    </div>
  );
}

export default Header;
