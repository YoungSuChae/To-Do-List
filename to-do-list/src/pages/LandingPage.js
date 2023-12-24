import "./PageStyle.css";
import "./LoginSection.css";
import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";

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

function LandingPage() {
  return (
    <React.StrictMode>
      <div>
        <div className="header">
          <h1>Welcome to Taskers</h1>
        </div>
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
          <form className="form1" />
          <input
            className="input"
            type="text"
            align="center"
            placeholder="Username"
          />
          <input
            className="input"
            type="password"
            align="center"
            placeholder="Password"
          />
          <Button className="submit" style={{ marginLeft: "305px" }}>
            LogIn
          </Button>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="./Registration">
              <p class="forgot" style={{ marginRight: "10px" }}>
                New User?
              </p>
            </Link>
            <Link to="./forgotPassword">
              <p class="forgot"> Forgot Password?</p>
            </Link>
          </div>
        </div>
        <div className="footer">
          <h2>Follow Us on</h2>
          <div className="social_media_app">
            <SocialIcon
              url="https://twitter.com/"
              style={{ marginRight: "10px" }}
            />
            <SocialIcon
              url="https://facebook.com/"
              style={{ marginRight: "10px" }}
            />
            <SocialIcon
              url="https://instagram.com/"
              style={{ marginRight: "10px" }}
            />
            <SocialIcon
              url="https://github.com/"
              style={{ marginRight: "10px" }}
            />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default LandingPage;
