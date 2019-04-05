import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
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
`;

function Header(props) {
  const _clickHandler = () => {
    localStorage.removeItem("auth_token");
    props.history.push("/login");
  };

  return (
    <Wrapper>
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
