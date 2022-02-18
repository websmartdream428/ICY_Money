import { Container } from "components";
import React from "react";
import {
  FooterContactEmail,
  FooterCopyRight,
  FooterLinkGroup,
  FooterPolicyLinks,
  FooterTitle,
  FooterVideo,
  FooterWrapper,
} from "./footer.styled";

import {
  FaYoutube,
  FaTelegram,
  FaTwitter,
  FaDiscord,
  FaMeetup,
  FaMedium,
  FaInstagram,
} from "react-icons/fa";

// import {
//   FooterCopyRight,
//   FooterMenuGroup,
//   FooterMenuWrapper,
//   FooterWrapper,
// } from "./footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterVideo autoPlay playsInline muted loop>
        <source
          src="https://www.youtube.com/embed/eTD0WWFIDAg?autohide=1&autoplay=0&controls=0&enablejsapi=1&iv_load_policy=3&loop=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&wmode=opaque&origin=https%3A%2F%2Fwww.ethdenver.com&widgetid=1"
          type="video/mp4"
        />
      </FooterVideo>
      <Container>
        <FooterTitle>Connect</FooterTitle>
        <FooterLinkGroup>
          <FaTelegram />
          <FaYoutube />
          <FaTwitter />
          <FaDiscord className="icon-discord" />
          <FaMeetup />
          <FaMedium />
          <FaInstagram />
        </FooterLinkGroup>
        <FooterContactEmail>hello@icy.com</FooterContactEmail>
        <FooterPolicyLinks>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Media Inquiry
          </a>{" "}
          /{" "}
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
        </FooterPolicyLinks>
        <FooterCopyRight>
          &copy; {new Date().getFullYear()} ETHDenver
        </FooterCopyRight>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

/* <FooterWrapper>
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
      </FooterCopyRight> */
