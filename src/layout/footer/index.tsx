import { Container } from "components";
import React from "react";
import {
  FooterCopyRight,
  FooterMenuGroup,
  FooterMenuWrapper,
  FooterWrapper,
} from "./footer.styled";

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <h1>
          Icy
          <br />
          Money
        </h1>
        <FooterMenuWrapper>
          <FooterMenuGroup>
            <h2>Platform</h2>
            <p>Explore</p>
            <p>All Coins</p>
            <p>About</p>
            <p>TrustSwap</p>
          </FooterMenuGroup>
          <FooterMenuGroup>
            <h2>Lookups</h2>
            <p>Create Lock</p>
            <p>My Lockups</p>
            <p>Help Locking</p>
            <p>FAQ</p>
          </FooterMenuGroup>
          <FooterMenuGroup>
            <h2>Company</h2>
            <p>Term and Conditions</p>
            <p>Privacy Policy</p>
            <p>Disclaimers</p>
            <p>GitBook</p>
          </FooterMenuGroup>
          <FooterMenuGroup>
            <h2>Connect</h2>
            <p>Telegram</p>
            <p>Twitter</p>
            <p>Youtube</p>
            <p>Discord</p>
          </FooterMenuGroup>
        </FooterMenuWrapper>
      </FooterWrapper>
      <FooterCopyRight>
        <p>© {new Date().getFullYear()} TrustSwap Inc. All Rights Reserved.</p>
        <span>Ethereum Mainnet</span>
      </FooterCopyRight>
    </Container>
  );
};

export default Footer;
