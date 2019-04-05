import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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
`;

function Jokes() {
  const [jokes, setJokes] = useState([]);
  const getJokes = async token => {
    const results = await axios.get("http://localhost:3300/api/jokes", {
      headers: { Authorization: token }
    });
    console.log(results)
    setJokes(results.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      getJokes(token);
    }
  }, []);
  return (
    <Container>
      <JokeWrapper>
          {jokes.map(({joke}) => <div>{joke}</div>)}
          </JokeWrapper>
    </Container>
  );
}

export default Jokes;
