import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Joke from "./Joke";
import Header from "./Header";

const Container = styled.div`
    width: 100%:
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const JokeWrapper = styled.div`
  width: 600px;
  max-width: 100%;
  padding: 10px;
  padding-top: 100px;
`;

const Heading = styled.h1`
  color: orange;
`;

function Jokes(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [jokes, setJokes] = useState([]);
  const getJokes = async token => {
    try {
      const results = await axios.get("http://localhost:3300/api/jokes", {
        headers: { Authorization: token }
      });
      setJokes(results.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
        setLoggedIn(true);
      getJokes(token);
    } else {
      props.history.push("/login");
    }
  }, []);

  if (loggedIn) {
    return (
        <>
          <Header />
          <Container>
            <JokeWrapper>
              <Heading>Today's Top Jokes</Heading>
              {jokes.map(({ joke }) => (
                <Joke>{joke}</Joke>
              ))}
            </JokeWrapper>
          </Container>
        </>
      );
  }

  return null;
  
}

export default withRouter(Jokes);
