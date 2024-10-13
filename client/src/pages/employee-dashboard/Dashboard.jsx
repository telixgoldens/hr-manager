import React, { useEffect } from "react";
import appLogo from "../../assets/Frame 1000003286.svg";
import arrowUp from "../../assets/Vector.svg";
import arrowDown from "../../assets/Vector (1).svg";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "../../styles/Admindashboard.css";
import Navbar from "../../layouts/Navbar";
import { employeeBarLinks } from "../../employeeTables";
import "../../styles/Allemployees.css"

const Dashboard = () => {
  const location = useLocation();
  useEffect(()=> {
    window.scrollTo(0,0);
  }, [location]);
  return (
    <>
      <main className="container-fluid">
        <section className="admin-dashboard-main">
          <section className="d-flex flex-column gap-5 admin-dashboard-section-1">
            <div className="d-flex gap-5 align-items-center">
              <div className="d-flex gap-2 admin-dashboard-section-1-div-1">
                <div >
                  <img src={appLogo} alt="app-logo" className="img-fluid " />
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
                {employeeBarLinks.map((sideBarLinks) => {
                  const { id, path, Icon, name } = sideBarLinks;
                  return (
                    <NavLink key={id} to={path} end>
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
          <section className="admin-dashboard-section-2">
            <Navbar />
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
