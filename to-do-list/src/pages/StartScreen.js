import "./startScreenStyle.css";
import "./LoginStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import Alert from "react-bootstrap/Alert";

//stop renaming files this causes conflicts that have be resolved and its changes where the
//modules are this is going to very hard to deal with as so please add
//pages but do not rename please I beg you

const Button = styled.button`
  background-color: #00cc99;
  color: white;
  padding: 15px 20px;
  margin: 10px 10px;
  border-radius: 5px;
  border-style: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgrey;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #03dba5;
  }
`;

function StartScreen() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/?username=${values.username}&password=${values.password}`
      );
      if (response.data === "Invalid credentials or user not found") {
        //console.log("Invalid credentials or user not found");
        setShowAlert(true);
      } else {
        navigate("/main");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <React.StrictMode>
      <div>
        <Header title="Welcome to Taskers"></Header>
        <div className="container">
          <div className="gradient-border">
            <h2>Easy to use</h2>
            <div className="text">
              <p>
                Optimized for your needs as we know you are busy trying to plan
                your day. So don't worry about that and let us do that for you.
              </p>
            </div>
          </div>
          <div className="gradient-border">
            <h2>Accessible</h2>
            <div className="text">
              <p>
                We have dictation mode that can help you plan your day. We
                praise ourselve with performance and accessibility which will
                make your day easier.
              </p>
            </div>
          </div>
        </div>
        <div className="main">
          <p className="sign" align="center">
            Sign in
          </p>
          <form className="form1" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              align="center"
              placeholder="Username"
              name="username"
              onChange={handleInput}
            />
            <input
              className="input"
              type="password"
              align="center"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
            <Button
              className="submit"
              style={{ marginLeft: "305px" }}
              type="submit"
            >
              LogIn
            </Button>
            {showAlert && (
              <Alert variant="warning">
                Incorrect username or password entered
              </Alert>
            )}
          </form>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="./registration">
              <p class="registration" style={{ marginRight: "10px" }}>
                New User?
              </p>
            </Link>
            <Link to="./forgotPassword">
              <p class="forgot"> Forgot Password?</p>
            </Link>
          </div>
        </div>
        <Footer title="Follow us on"></Footer>
      </div>
    </React.StrictMode>
  );
}

export default StartScreen;
