import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div<{ type: string }>`
  background: ${({ type }) =>
    type === "white"
      ? "#fff"
      : "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"};
  /* transition: all 0.3s; */
  :hover {
    background: linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%);
  }
  border-radius: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #003b66 !important;
  padding: 9px 0;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const Button = (props: any) => {
  return (
    <ButtonWrapper type={props.type} onClick={props.onClick}>
      {props.label}
    </ButtonWrapper>
  );
};

export default Button;
