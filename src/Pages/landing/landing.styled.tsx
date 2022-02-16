import styled from "styled-components";

import introBG from "assets/image/bg.svg";
import introBG1 from "assets/image/bg-1.png";

export const LandingWrapper = styled.div`
  background-color: #131419;
`;

export const IntroWrapper = styled.div`
  background: url(${introBG});
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100%;

  ::before {
    position: absolute;
    content: "";
    background-image: url(${introBG1});
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    opacity: 0.15;
    top: -10%;
  }
`;

export const IntroTitleWrapper = styled.div`
  padding: 180px 0 100px;
  h1,
  h2,
  p {
    margin: 0 auto;
    text-align: center;
  }
  h1 {
    font-size: 64px;
    font-weight: 700;
    z-index: 2;
    color: white !important;
  }
  h2 {
    font-size: 36px;
    font-weight: 600;
    z-index: 2;
    margin-top: -26px;
    margin-bottom: -4px;
    background-color: #f3ec78;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    text-align: center;
    margin: 7px 0 25px 0;
    font-weight: 400;
    z-index: 2;
    color: #d7d7d7 !important;
  }
`;

export const IntroButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > *:not(:first-child) {
    margin-left: 15px;
  }
`;

export const IntroCardWrapper = styled.div`
  padding-top: 180px;
  h1,
  h2,
  p {
    margin: 0;
    padding: 0;
  }
  & > h1 {
    z-index: 9;
    font-weight: 600;
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    color: white !important;
  }
  & > p {
    font-weight: 400;
    z-index: 9;
    margin-top: 8px;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #d7d7d7 !important;
  }
  & > h2 {
    text-align: center;
    margin: 0 auto;
    font-weight: 500;
    font-size: 18px;
    z-index: 9999;
    line-height: 20px;
    background-color: #f3ec78;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 90px 0 100px;
  }
`;

export const IntroCardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
`;

export const IntroCardBody = styled.div`
  padding: 32px;
  text-align: center;
  border-radius: 20px;
  box-shadow: rgb(42 73 108 / 20%) 0px 8px 40px;
  background-color: #fff;
  h2 {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    color: #131419;
  }
`;

export const StableWrapper = styled.div`
  padding: 90px 0;
  background-color: #0b0b0f !important;
`;

export const StableTitleWrapper = styled.div`
  h1,
  p {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 36px;
    text-align: center;
    line-height: 35px;
    color: white !important;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    z-index: 9999;
    line-height: 20px;
    margin-top: 10px;
    background-color: #f3ec78;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const StableCardWrapper = styled.div`
  padding: 32px;
  margin: 50px auto 0px;
  max-width: 820px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 30%) 0px 8px 32px;
  position: relative;
  box-sizing: border-box;
  max-width: 638px;
  width: 100%;
`;
