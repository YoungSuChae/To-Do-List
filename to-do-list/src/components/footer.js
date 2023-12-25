import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

const StyledFooter = styled.footer`
    text-align: center;
    font-family: Lato, sans-serif;
    font-size: 2.5em;
    background: #1abc9c;
    color: white;
    padding-bottom: 20px;
`;


const FooterComponent = ({ title }) => {
  return (
    <StyledFooter>
        <h2>{ title }</h2>
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
    </StyledFooter>
  );
};

export default FooterComponent;