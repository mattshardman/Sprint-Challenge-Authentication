import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background: rgba(255,255,255,0.95);
  box-shadow: ${({scrolled}) => scrolled && '0 3px 15px rgba(0,0,0,0.1)'};
`;

const Container = styled.div`
  width: 600px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const LogOutButton = styled.button`
    height: 40px;
    width: 100px;
    border: deepskyblue 1px solid;
    color: deepskyblue;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
`;

function Header(props) {
  const [scrolled, setScrolled] = useState(false);
  const _clickHandler = () => {
    localStorage.removeItem("auth_token");
    props.history.push("/login");
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if(!window.scrollY) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    });
  });

  console.log(scrolled)

  return (
    <Wrapper scrolled={scrolled}>
      <Container>
        <img
          src="https://image.flaticon.com/icons/svg/688/688269.svg"
          alt="logo"
          height="100%"
        />
        <LogOutButton onClick={_clickHandler}>Log out</LogOutButton>
      </Container>
    </Wrapper>
  );
}

export default withRouter(Header);
