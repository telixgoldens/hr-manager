import React, { useContext, useRef, useState } from "react";
import Bell from "../assets/Bell.svg";
import lady from "../assets/lady.svg";
import arowDown from "../assets/arrowDown.svg";
import searchIcon from "../assets/searchIcon.svg";
import messageIcon from "../assets/messageIcon.svg";
import "../styles/Navbar.css";
import AuthDropDown from "../components/AuthDropDown";
import OffCanvass from "../components/OffCanvass";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);
  const {user,setUser} = useContext(AuthContext)
  const navigate = useNavigate()
  function handleReveal() {
    isTrue ? setIsTrue(false) : setIsTrue(true);
  }
  const logout = () => {
    // setUser(null);
    localStorage.removeItem("hr-token");
    navigate("/auth/signin")

  };

  return (
    <>
      <nav className="d-flex justify-content-between position-relative">
        <div className="d-md-none">
          {["start"].map((placement, idx) => (
            <OffCanvass key={idx} placement={placement} name={placement} />
          ))}
        </div>
        <form className="nav-form position-relative">
          <input type="search" name="" placeholder="Search" id="" />
          <img
            className="position-absolute top-50 end-0 translate-middle-y pe-2"
            src={searchIcon}
            alt="search-image"
          />
        </form>
        <div className="d-flex nav-div gap-4 align-items-center ">
          <div>
            <img
              src={Bell}
              alt="notification-image"
              className=" d-none d-lg-block"
            />
          </div>
          <div>
            <img
              src={messageIcon}
              alt="message-image"
              className=" d-none d-lg-block"
            />
          </div>
          <div className="d-flex gap-2 align-items-center">
            <div >
              <img
                src={lady}
                alt="ladyProfilePic"
                className=" d-none d-md-block"
              />
            </div>
            <h4 className="d-none d-lg-block"> {user && user?.firstName} </h4>
            <img
              onClick={handleReveal}
              role="button"
              src={arowDown}
              alt="arrowDown-image"
              className="mb-1 d-none d-md-block"
            />
          </div>
        </div>
      </nav>
      <div className="position-absolute end-0 me-5 pe-1 ">
        {isTrue &&  <p role="button" onClick={logout}>logout</p>}
       
      </div>
    </>
  );
};

export default Navbar;
