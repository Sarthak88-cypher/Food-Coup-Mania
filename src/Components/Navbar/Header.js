import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import "./header.css";

// This is Navbar Component, where we control all the buttons over the navbar and determine the page to render upon the state value change.
// As we wanted Navbar to be visible on all pages, So Navbar is independent of page state value.

const Header = (props) => {
  const [click, setClick] = useState(false);
  const { userDetails, setPage, setUserDetails } = props;
  const handleClick = () => setClick(!click);

  // sets page state variable to login component.
  const openLogInForm = () => {
    setPage(1);
  };
  // sets page state variable to login component and also change the menu icon over mobile screens.
  const openLogInFormMobile = () => {
    handleClick();
    setPage(1);
  };
  // sets page state variable to home component / offer filters component.
  const goToHomePage = () => {
    setPage(0);
  };
  // sets page state variable to yourCuisine component.
  const yourCuisineClick = () => {
    setPage(2);
  };
  // sets page state variable to home component / offer filters component & also sets userDetails to empty which further makes the sign in eligible for the user.
  const signOutClick = () => {
    if (userDetails.length > 0) {
      setUserDetails([]);
    }
    setPage(0);
  };
  return (
    <>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <img
              src="./bbqheader.svg"
              className="logo"
              alt="bbq header"
              onClick={goToHomePage}
            />
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={goToHomePage}>
              All Offers/Discounts
            </li>
            <li className="option" onClick={yourCuisineClick}>
              Your Cuisine
            </li>
            <li className="option">Blogs</li>
            <li className="option mobile-option" onClick={openLogInFormMobile}>
              Sign In
              <img src="./bbqlogo.svg" className="logonxt" alt="bbq logo" />
            </li>
            <li className="option mobile-option" onClick={signOutClick}>
              Sign Out
            </li>
          </ul>
        </div>
        <div className="btn-Wrapper">
          <button className="book-btn" onClick={openLogInForm}>
            <span className="btn-text">Sign In</span>
            <img src="./bbqlogo.svg" className="logonxt" alt="bbq logo"></img>
          </button>
          <button className="cancel-btn" onClick={signOutClick}>
            <span className="btn-canceltext">Sign Out</span>
          </button>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
