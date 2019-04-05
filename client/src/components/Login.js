import React, { useState } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.form`
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  padding: 0 15px;
  margin: 20px 0;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  font-size: 14px;
  cursor: pointer;
  margin: 20px 0;
`;

const SignUp = styled.div`
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const _submitHandler = async e => {
    e.preventDefault();
    try {
      const token = await axios.post("http://localhost:3300/api/login", {
        username,
        password
      });
      localStorage.setItem("auth_token", token.data);
      props.history.replace("/jokes");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <LoginBox onSubmit={_submitHandler}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit">Log In</Button>
        <SignUp>
          Don't have an account?&nbsp;<Link to="/signup">Sign Up</Link>
        </SignUp>
      </LoginBox>
    </Container>
  );
}

export default withRouter(Login);
