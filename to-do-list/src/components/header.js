import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 10px;
  text-align: center;
  font-family: Lato, sans-serif;
  background: #1abc9c;
  color: white;
  font-size: 30px;
`;


const HeaderComponent = ({ title }) => {
  return (
    <StyledHeader>
      <h1>{ title }</h1>
    </StyledHeader>
  );
};

export default HeaderComponent;