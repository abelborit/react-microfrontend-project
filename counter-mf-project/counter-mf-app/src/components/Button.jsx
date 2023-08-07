import React from "react";
import styled from "@emotion/styled";

const ButtonStyle = styled.button`
  font-family: "Aladin", cursive;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.25rem 0.75rem;
  margin: 0 0.5rem;
`;

export const Button = ({ text, onClick }) => {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
};
