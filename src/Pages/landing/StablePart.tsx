import { Container } from "components";
import Button from "components/Button";
import React from "react";
import {
  ExchangeSymbol,
  StableButtonGroup,
  StableCardWrapper,
  StableForm,
  StableFormLabel,
  StableInput,
  StableSwapBtn,
  StableTitleWrapper,
  StableWrapper,
} from "./landing.styled";

import { FaExchangeAlt } from "react-icons/fa";

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
          <StableCardWrapper>
            <StableButtonGroup>
              <Button label="Swap" />
              <Button label="Buy/Sell" />
            </StableButtonGroup>
            <StableForm>
              <StableFormLabel>
                <p>You Send</p>
                <p>Balace: 40ETH</p>
              </StableFormLabel>
              <StableInput>
                <input type="text" />
                <span>ETH</span>
              </StableInput>
            </StableForm>
            <ExchangeSymbol>
              <FaExchangeAlt />
            </ExchangeSymbol>
            <StableForm>
              <StableFormLabel>
                <p>You Get</p>
              </StableFormLabel>
              <StableInput>
                <input type="text" />
                <span>BTC</span>
              </StableInput>
            </StableForm>
            <StableSwapBtn>
              <Button label="Swap Now" />
            </StableSwapBtn>
          </StableCardWrapper>
        </StableTitleWrapper>
      </Container>
    </StableWrapper>
  );
};

export default StablePart;
