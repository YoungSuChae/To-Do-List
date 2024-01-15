import React, { useState } from "react";
import styled from "styled-components";
import "./RegistrationStyle.css";

const Button = styled.button`
  background-color: #00cc99;
  width: 300px;
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

function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      // handle successful registration here
    } catch (error) {
      console.error("Error occurred:", error);
      // handle error here
    }
  };

  return (
    <React.StrictMode>
      <div>
        <div className="header">
          <div>Registration</div>
        </div>
        <div className="mainbox">
          <div className="title" align="center">
            Create an Account
            <div className="underline"></div>
          </div>

          <form className="form1" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              className="input"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              className="input"
              type="password"
              placeholder="Password Confirm"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <Button
              className="submit"
              style={{ marginLeft: "200px" }}
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Registration;
