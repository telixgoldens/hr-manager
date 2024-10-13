import React from "react";
import Table from "react-bootstrap/Table";
import { employeelist, LeaveHistory } from "../../employeeTables";
import "../../styles/AdminSummary.css";
import plus from "../../assets/plus.svg";

const EmployeeLeaveboard = () => {
    const handleShow = () => setShow(true);
  return (
    <>
      <main className="admin-summary mt-3">
        <div className="pt-4 admin-summary-1 ">
          <div className="d-flex justify-content-between ">
            <h1 className="h1 ">Dashboard</h1>
            <h4 className="btn leave-btn" onClick={handleShow}>
              <img src={plus} alt="plus" id="plus" /> Request Leave
            </h4>
          </div>
          <div className="d-flex gap-3 justify-content-between admin-summary-employee">
            {employeelist.map((employee) => {
              const { id, name, number, integer } = employee;
              return (
                <div
                  key={id}
                  className="text-center admin-summary-task "
                >
                  <div className=" admin-summary-task-1">
                    <h4>{name}</h4>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <h1>{number}</h1>
                    <h3>{integer}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="admin-summary-2">
          <div className="container">
            <h2 className="admin-summary-taskboard">Leave History</h2>
          </div>
          <Table responsive="lg">
            <thead className="">
              <tr className="task-head">
                <th className="bg-light">Leave Type</th>
                <th className="bg-light">Start Date</th>
                <th className="bg-light">End Date</th>
                <th className="bg-light">Status</th>
              </tr>
            </thead>
            <tbody>
              {LeaveHistory.map((adminTables) => {
                const { id, leavetype, startdate, enddate, status } =
                  adminTables;
                return (
                  <tr key={id} className="">
                    
                    <td className="table-input pt-3">{leavetype}</td>
                    <td>{startdate}</td>
                    <td className="pt-1">{enddate}</td>
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

export default EmployeeLeaveboard;
