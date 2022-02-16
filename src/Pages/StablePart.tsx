import { Container } from "components";
import React from "react";
import {
  StableCardWrapper,
  StableTitleWrapper,
  StableWrapper,
} from "./landing/landing.styled";

const StablePart = () => {
  return (
    <StableWrapper>
      <Container>
        <StableTitleWrapper>
          <h1>Ethereum Reflection Calculator</h1>
          <p>
            Calculate your Ethereum reflection earnings with our simple
            calculator tool
          </p>
          <StableCardWrapper></StableCardWrapper>
        </StableTitleWrapper>
      </Container>
    </StableWrapper>
  );
};

export default StablePart;
