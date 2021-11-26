import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/github-icon.svg";

const HeaderWrapper = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 64;
  pointer-events: none;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} className="App-logo" alt="logo" />
      <h1>My github portfolio</h1>
    </HeaderWrapper>
  );
}
