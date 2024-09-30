import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { sideBarLinks } from "../db";
import appLogo from "../assets/Frame 1000003286.svg";
import arrowUp from "../assets/Vector.svg";
import arrowDown from "../assets/Vector (1).svg";
import { NavLink } from "react-router-dom";
import menu from "../assets/menu.svg"

const OffCanvass = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <main>
        <img src={menu} alt="nav-menu" onClick={handleShow} className=" nav-menu" />
        <Offcanvas show={show} onHide={handleClose} {...props} className="w-75">
          <Offcanvas.Body>
            <section className="d-flex flex-column gap-5 admin-dashboard-section">
              <div className="d-flex gap-5 align-items-center">
                <div className="d-flex gap-2 admin-dashboard-section-1-div-1">
                  <div>
                    <img src={appLogo} alt="app-logo" className="img-fluid" />
                  </div>
                  <div>
                    <h2 className="mb-0">HR Manager</h2>
                    <p className="">hrmanager@yahoo.com</p>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <img src={arrowUp} alt="arrow-up-logo" />
                    </div>
                    <div>
                      <img
                        src={arrowDown}
                        alt="arrow-down-logo"
                        className="pb-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="admin-dashboard-section-1-div-2">
                <h2>MAIN MENU</h2>
                <div>
                  {sideBarLinks.map((sideBarLinks) => {
                    const { id, path, Icon, name } = sideBarLinks;
                    return (
                      <NavLink key={id} to={path} end onClick={handleClose}>
                      {({ isActive, isPending }) => (
                        <span
                          className={`d-flex mb-3 align-items-center gap-2 isPending ? "pending" : ${
                            isActive ? "active" : ""
                          }`}
                        >
                          <img src={Icon} alt={name} />
                          <h6 className="pt-1 nav-link-header">{name}</h6>
                        </span>
                      )}
                    </NavLink>
                    );
                  })}
                </div>
              </div>
            </section>
          </Offcanvas.Body>
        </Offcanvas>
      </main>
    </>
  );
};

export default OffCanvass;
