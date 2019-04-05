import React, { useState } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

import * as Styled from './FormStyles';

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const _submitHandler = async e => {
    e.preventDefault();
    if (!username || !password) {
      return setError(true);
    }

    try {
      const token = await axios.post("http://localhost:3300/api/login", {
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
        {!!error && <Styled.ErrorMessage>Error logging in</Styled.ErrorMessage>}
        <Styled.Button type="submit">Log In</Styled.Button>
        <Styled.SignUp>
          Don't have an account?&nbsp;<Link to="/signup">Sign Up</Link>
        </Styled.SignUp>
      </Styled.LoginBox>
    </Styled.Container>
  );
}

export default withRouter(Login);
