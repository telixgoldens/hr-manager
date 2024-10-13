import React from "react";
import Table from "react-bootstrap/Table";
import { Activity, employeedashboard } from "../../employeeTables";
import "../../styles/AdminSummary.css";
import plus from "../../assets/plus.svg";

const EmployeeDashboard = () => {
  const handleShow = () => setShow(true);
  return (
    <>
      <main className="admin-summary mt-3">
        <div className="pt-4 admin-summary-1">
          <div className="d-flex justify-content-between request">
            <h1 className="h1">Dashboard</h1>
            <h4 className="btn leave-btn" onClick={handleShow}>
              <img src={plus} alt="plus" id="leave-plus" /> Request Leave
            </h4>
          </div>
          <div className="d-flex gap-3 justify-content-between admin-summary-employee">
            {employeedashboard.map((employee) => {
              const { id, name, number, Image } = employee;
              return (
                <div
                  key={id}
                  className="d-flex justify-content-between admin-summary-task "
                >
                  <div className=" admin-summary-task-1">
                    <h4>{name}</h4>
                    <h1>{number}</h1>
                  </div>
                  <div className="d-flex">
                    <img src={Image} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="admin-summary-2">
          <div className="container">
            <h2 className="admin-summary-taskboard">Recent Activities</h2>
          </div>
          <Table responsive="lg">
            <thead className="">
              <tr className="task-head">
                <th className=" bg-light hash container">#</th>
                <th className="bg-light">Activity</th>
                <th className="bg-light">Description</th>
                <th className="bg-light">Date</th>
                <th className="bg-light">Status</th>
              </tr>
            </thead>
            <tbody>
              {Activity.map((adminTables) => {
                const { id, activity, description, status, date } = adminTables;
                return (
                  <tr key={id} className="">
                    <td className="check-input">
                      <input
                        type="checkbox"
                        name=""
                        id="check-box"
                        className="container"
                      />
                    </td>
                    <td className="table-input pt-3">{activity}</td>
                    <td>{description}</td>
                    <td className="pt-1">{date}</td>
                    <td className="">
                      {" "}
                      <p
                        className={`action-status mt-2 ${status
                          .replace(/\s+/, "-")
                          .toLowerCase()}`}
                      >
                        {status}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </main>
    </>
  );
};

export default EmployeeDashboard;
