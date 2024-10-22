import React from "react";
import Modal from "react-bootstrap/Modal";

const ShortModal = (props) => {
  const taskboard = props.task;
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Task Details
          </Modal.Title>
        </Modal.Header>
        {taskboard && (
          <Modal.Body>
            <div className="d-lg-flex justify-content-between ">
              <div className="d-flex row align-items-center ps-0  m-0 settings-width">
                <div className="d-flex p-0 gap-2 align-items-center">
                  <p className="text-secondary">Task Name:</p>
                  <p className="title">{taskboard.Task}</p>
                </div>
                <div className="d-flex p-0 gap-2">
                  <p className="text-secondary">Start Date:</p>
                  <p className="title">{taskboard.Start}</p>
                </div>

                <div className="d-flex p-0   gap-2">
                  <p className="text-secondary">Description:</p>
                  <p className="title">Nill</p>
                </div>
              </div>
              <div className="settings-width">
                <div className="d-flex gap-2">
                  <p className="text-secondary mt-sm-3">Team:</p>
                  <img src={taskboard.Team} alt="/" className="mb-lg-3" />
                </div>
                <div className="d-flex gap-2">
                  <p className="text-secondary">End Date:</p>
                  <p className="title">{taskboard.End}</p>
                </div>
                <div className="d-flex gap-2">
                  <p className="text-secondary">Status:</p>
                  <p className="action-status">{taskboard.Action}</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        )}
      </Modal>
    </>
  );
};

export default ShortModal;