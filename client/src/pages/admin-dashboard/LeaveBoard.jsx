import React from "react";
import { leaveBoard } from "../../taskboard";
import { leavelist } from "../../taskboard";
import Table from "react-bootstrap/Table";


const LeaveBoard = () => {
  return (
    <>
      <main className="leaveboard-main">
        <div className="pt-4 ">
          <div className="">
            <h1 className="taskboard-h1">Taskboard</h1>
            <div className="d-flex justify-content-between taskboard ">
              <h3 className="taskboard-h3">Dashboard/Leaveboard</h3>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-between task-summary">
            {leavelist.map((taskboard) => {
              const { id, name, number } = taskboard;
              return (
                <div
                  key={id}
                  className="task-summary-div-1 "
                >
                  <div className=" summary-task-1">
                    <h4 className="summary-task-name">{name}</h4>
                    <h1 className="summary-task-number">{number}</h1>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
        <div className="admin-summary-2">
            
          <Table responsive = "lg">
            <thead className="">
              <tr className="task-head">
                <th className="">Name</th>
                <th></th>
                <th>Leave Type</th>
                <th>Duration</th>
                <th>Days</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {leaveBoard.map((leaveBoard) => {
                const { id, Image, name, leavetype, Start, End, Days, Status, dot } = leaveBoard;
                return (
                  <tr key={id} className="">
                    <td>
                      <img src={Image} alt="leave-img" />
                    </td>
                    <td className="table-input pt-3">{name}</td>
                    <td className="">{leavetype}</td>
                    <td className="pt-1">
                     <p id="start">{Start}</p> 
                     <p id="end">{End}</p>
                    </td>
                    <td className="">{Days}</td>
                    <td className="">{Status}</td>
                    <td className="">{dot}</td>
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

export default LeaveBoard;
