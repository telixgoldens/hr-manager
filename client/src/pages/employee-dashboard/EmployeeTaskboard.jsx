import React from "react";
import Table from "react-bootstrap/Table";
import { employeeTaskboard } from "../../employeeTables";
import "../../styles/AdminSummary.css";
import { adminTables } from "../../db";

const EmployeeTaskboard = () => {
  return (
    <>
      <main className="admin-summary mt-3">
        <div className="pt-4 admin-summary-1">
          <div className="">
            <h1 className="h1">Taskboard</h1>
          </div>
          <div className="d-flex gap-3 justify-content-between admin-summary-employee">
            {employeeTaskboard.map((employee) => {
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
            <h2 className="admin-summary-taskboard">Taskboard</h2>
          </div>
          <Table responsive="lg">
            <thead className="">
              <tr className="task-head">
                <th className=" bg-light hash container">#</th>
                <th className="bg-light">Task</th>
                <th className="bg-light">Team</th>
                <th className="bg-light">Duration</th>
                <th className="bg-light">Action</th>
              </tr>
            </thead>
            <tbody>
              {adminTables.map((adminTables) => {
                const { id, Task, Team, Action, Start, End } = adminTables;
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
                    <td className="table-input pt-3">{Task}</td>
                    <td>
                      <img src={Team} alt="" />
                    </td>
                    <td className="pt-1">
                      <p id="start">{Start}</p>
                      <p id="end">{End}</p>
                    </td>
                    <td className="">
                      {" "}
                      <p
                        className={`action-status mt-2 ${Action.replace(
                          /\s+/,
                          "-"
                        ).toLowerCase()}`}
                      >
                        {Action}
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

export default EmployeeTaskboard;
