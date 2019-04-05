import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  margin: 20px 0;
  line-height: 1.5;
`;

function Joke(props) {
  return <Card>{props.children}</Card>;
}

export default Joke;
