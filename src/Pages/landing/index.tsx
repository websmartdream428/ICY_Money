import React from "react";
import IntroPart from "./IntroPart";
import { Footer } from "layout";
import { LandingWrapper } from "./landing.styled";

const LandingPage = () => {
  return (
    <LandingWrapper>
      <IntroPart />
      {/* <StablePart /> */}
      <Footer />
    </LandingWrapper>
  );
};

export default LandingPage;
