import React, { useState } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

import * as Styled from './FormStyles';

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const _submitHandler = async e => {
    e.preventDefault();
    try {
      const token = await axios.post("http://localhost:3300/api/register", {
        username,
        password
      });
      localStorage.setItem("auth_token", token.data);
      props.history.replace("/jokes");
    } catch (e) {
      setError(true);
    }
  };
  return (
    <Styled.Container>
     
      <Styled.LoginBox onSubmit={_submitHandler}>
      <img src="https://image.flaticon.com/icons/svg/688/688269.svg" alt="" height={100} />
        <Styled.Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Styled.Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Styled.Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        {!!error && <div>Could not create new user</div>}
        <Styled.Button type="submit">Sign Up</Styled.Button>
        <Styled.SignUp>
          Already have an account?&nbsp;<Link to="/login">Log In</Link>
        </Styled.SignUp>
      </Styled.LoginBox>
    </Styled.Container>
  );
}

export default withRouter(Login);
