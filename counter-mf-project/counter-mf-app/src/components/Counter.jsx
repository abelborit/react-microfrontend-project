import React, { useState } from "react";
import styled from "@emotion/styled";

import { Button } from "./Button";

import "./Counter.css";

const SuccessCounter = styled.span`
  color: #35b440;
`;

const ErrorCounter = styled.span`
  color: #b43535;
`;

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="Counter-container">
        <h3>
          Counter:{" "}
          {counter >= 0 ? (
            <SuccessCounter>{counter}</SuccessCounter>
          ) : (
            <ErrorCounter>{counter}</ErrorCounter>
          )}
        </h3>

        <Button text={"+1"} onClick={() => setCounter(counter + 1)} />
        <Button text={"-1"} onClick={() => setCounter(counter - 1)} />
      </div>
    </>
  );
};

export default Counter;
