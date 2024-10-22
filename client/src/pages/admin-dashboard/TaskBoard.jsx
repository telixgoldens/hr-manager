import React from "react";
import { taskboard } from "../../taskboard";
import { Link, useMatch, useParams } from "react-router-dom";
import { useState } from "react";
import { adminTables } from "../../db";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import "../../styles/Taskboard.css";
import plus from "../../assets/plus.svg";
import ShortModal from "./modals/ShortModal";

const TaskBoard = () => {
  const match = useMatch("/admin-dashboard/taskboard");
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <>
      <main className="taskboard-admin">
        <div className="pt-4 ">
          <div className="">
            <h1 className="taskboard-h1">Taskboard</h1>
            <div className="d-flex justify-content-between taskboard ">
              <h3 className="taskboard-h3">Dashboard/Taskboard</h3>
              <Link to="/admin-dashboard/taskboard/new-task">
                <button className="task-btn">
                  <img src={plus} className="me-1" />
                  New Task
                </button>
              </Link>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-between task-summary">
            {taskboard.map((taskboard) => {
              const { id, name, number, Image } = taskboard;
              return (
                <div
                  key={id}
                  className=" gap-5 d-flex container justify-content-between task-summary-div-1 "
                >
                  <div className=" summary-task-1">
                    <h4 className="summary-task-name">{name}</h4>
                    <h1 className="summary-task-number">{number}</h1>
                  </div>
                  <div className="">
                    <img src={Image} alt="" className="summary-task-img" />
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
                    <td className="table-input pt-3">
                      {" "}
                      <p
                        onClick={() => {
                          setSelectedTask(adminTables);
                          setModalShow(true);
                        }}
                        className=" pointer"
                      >
                        {Task}
                      </p>
                    </td>
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
          <ShortModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            task={selectedTask}
          />
        </div>
      </main>
    </>
  );
};

export default TaskBoard;
