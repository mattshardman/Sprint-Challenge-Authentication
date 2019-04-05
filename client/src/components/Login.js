import React from "react";
import { Link } from 'react-router-dom';
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

function Login() {
  return (
    <Container>
      <LoginBox>
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Password" />
        <Button type="submit">Log In</Button>
        <SignUp>Don't have an account?&nbsp;<Link to="/signup">Sign Up</Link></SignUp>
      </LoginBox>
    </Container>
  );
}

export default Login;
