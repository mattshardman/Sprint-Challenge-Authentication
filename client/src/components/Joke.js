import React, { useState } from "react";
import Badge from "@material-ui/core/Badge";

import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 20px 0;
  line-height: 1.5;
  border: 1px #eaeaea solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 15px rgba(0,0,0,0.1);
`;

const Content = styled.div`
  padding: 20px 20px 0 20px;
`;

const Reaction = styled.div`
  height: 55px;
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
`;

function Joke(props) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <Card>
      <Content>{props.children}</Content>
      <Reaction>
        <IconButton
          style={{ width: 50, height: 50 }}
          onClick={() => setLike(v => v + 1)}
        >
          <Badge badgeContent={like} color="primary">
            <i style={{ color: "orange" }} className="fas fa-grin-tears" />
          </Badge>
        </IconButton>
        <IconButton
          style={{ width: 50, height: 50 }}
          onClick={() => setDislike(v => v + 1)}
        >
          <Badge badgeContent={dislike} color="primary">
            <i style={{ color: "orange" }} className="fas fa-sad-cry" />
          </Badge>
        </IconButton>
      </Reaction>
    </Card>
  );
}

export default Joke;
