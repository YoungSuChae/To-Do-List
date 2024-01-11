import React, { useState } from "react";
import Header from "../components/header";
import "./mainPageStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiTrash, BiCheck } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from 'axios'; 

const MainPage = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // gettting values from inputs fields
  const [values, setValues] = useState({
    taskTitle:'',
    taskDescription:'',
    taskDate:'',
    priority:''
  })

  const [tasks, setTasks] = useState([]);

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Pressed submiute button');
  
    try {
      const response = await axios.post('http://localhost:8080/main', {
        // userID: 2,
        taskTitle: values.taskTitle,
        taskDate: values.taskDate,
        taskDescription: values.taskDescription,
        priority: values.priority
      });
      
      console.log('Server Response:', response.data);
      //error handling
      if (response.data === 'Error') {
        console.log('Error occurred while creating task');
      } else if (response.data === 'Unable to create task per request') {
        console.log('Unable to create task per request');
      } else {
        handleClose();
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }

    const newTask = {
      taskTitle: values.taskTitle,
      taskDescription: values.taskDescription,
      taskDate: values.taskDate,
      priority: values.priority
    };

    setTasks([...tasks, newTask]);
    setValues({
      taskTitle:'',
      taskDescription:'',
      taskDate:'',
      priority:''
    }); // Clear the input fields after adding a task
    handleClose();

  };

  // priority color coordination
  const priorityManager = (priorityValue) => {
    let colour = ''; // Declare colour variable

    if (priorityValue === '1') {
      colour = "#f08080"; // light blue 
    } else if (priorityValue === '2') {
      colour = "#ff7f50"; // slightly orange
    } else if (priorityValue === '3') {
      colour = "#fafad2"; // light yellow
    } else if (priorityValue === '4') {
      colour = "#9ab973"; // olive green
    } else if (priorityValue === '5') {
      colour = "#add8e6"; // light blue
    }

    return colour; // Return the computed colour
  };

  //will need to have a date function that can differentiate between
  //todays date and future dates 


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
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{ backgroundColor: priorityManager(task.priority) }}
            >
              {task.taskTitle}: {task.taskDescription}, {task.taskDate}
            </li>
          ))}
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
                name="taskTitle"
                value={values.taskTitle}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="task-desc"
            >
              <Form.Label>Task Description</Form.Label>
              <Form.Control 
                as="textarea" 
                placeholder="Do your homework" 
                rows={3}
                value={values.taskDescription}
                name="taskDescription"
                onChange={handleInput}
              />
            </Form.Group>
              <Form.Group className="mb-3" controlId="task-date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="taskDate"
                    value={values.taskDate}
                    onChange={handleInput}
                    />
              </Form.Group>
              <Form.Group className="mb-3" controlId="task-priority">
                <Form.Label>Priority<p> 1 - 5 (1 being highest)</p></Form.Label>
                <Form.Control
                    type="number"
                    name="priority"
                    value={values.priority}
                    onChange={handleInput}
                    />
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
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
