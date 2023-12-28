import React, { useState } from "react";
import Header from "../components/header";
import "./mainPageStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiTrash, BiCheck } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const MainPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.StrictMode>
      <Header title="Plan Your Day" />
      <div
        style={{
          textAlign: "left",
          clear: "left",
          marginBottom: "25px",
          marginTop: "10px",
          paddingLeft: "10px",
        }}
      >
        <h1>Today's Tasks</h1>
      </div>
      <div className="d-flex flex-column">
        <ul className="tasks">
          <li>
            Task 1: Description, Name, Date, Priority
            <div className="icone-wrapper">
              <BiCheck className="check"></BiCheck>
              <BiTrash className="trash"></BiTrash>
            </div>
          </li>
          <li style={{ backgroundColor: "lightcoral" }}>
            Task 2: Description, Name, Date, Priority
            <div className="icone-wrapper">
              <BiCheck className="check"></BiCheck>
              <BiTrash className="trash"></BiTrash>
            </div>
          </li>
        </ul>
        <button className="add-task" onClick={handleShow}>
          Add Task
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="task-title">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Learn Javascript"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="task-desc"
            >
              <Form.Label>Task Description</Form.Label>
              <Form.Control as="textarea" placeholder="Do your homework" rows={3} />
            </Form.Group>
              <Form.Group 
                className="mb-3"
                controlId="owner"
                >
                  <Form.Label>Owner</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="owner"
                    rows={1}
                    />
              </Form.Group>
              <Form.Group className="mb-3" controlId="task-date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    />
              </Form.Group>
              <Form.Group className="mb-3" controlId="task-priority">
                <Form.Label>Priority<p> 1 - 5 (1 being highest)</p></Form.Label>
                <Form.Control
                    type="number"
                    />
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="task-window"></div>
      <div
        div
        style={{
          textAlign: "left",
          clear: "left",
          marginBottom: "25px",
          marginTop: "10px",
          paddingLeft: "10px",
        }}
      >
        <h1>This Weeks Tasks</h1>
      </div>
      <div className="d-flex flex-column">
        <ul className="tasks">
          <li>
            Task 1: Description, Name, Date, Priority
            <div className="icone-wrapper">
              <BiCheck className="check"></BiCheck>
              <BiTrash className="trash"></BiTrash>
            </div>
          </li>
          <li style={{ backgroundColor: "lightcoral" }}>
            Task 2: Description, Name, Date, Priority
            <div className="icone-wrapper">
              <BiCheck className="check"></BiCheck>
              <BiTrash className="trash"></BiTrash>
            </div>
          </li>
        </ul>
      </div>
    </React.StrictMode>
  );
};

export default MainPage;
