import React from "react";
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

          <form className="form1" />
          <input className="input" type="text" placeholder="Username" />
          <input className="input" type="email" placeholder="Email" />
          {/* ^ do you think we rly need an email section? */}

          <input className="input" type="password" placeholder="Password" />
          <input
            className="input"
            type="password"
            placeholder="Password Confirm"
          />
          <Button className="submit" style={{ marginLeft: "200px" }}>
            Sign In
          </Button>
        </div>
      </div>
    </React.StrictMode>
  );
}
export default Registration;
