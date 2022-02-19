import { Container } from "components";
import Button from "components/Button";
import { Header } from "layout";
import { useCallback, useEffect, useState } from "react";
import {
  IntroButtonWrapper,
  IntroCardBody,
  IntroCardGroup,
  IntroCardWrapper,
  IntroTitleWrapper,
  IntroWrapper,
  WelcomeWrapper,
} from "./landing.styled";

const cardData = [
  {
    title: "Treasury-Backed Insurance",
    desc: "If ICY's price crashes (ex: loses 99% its value), the entire treasury value will be used as an insurance fund to airdrop holders AVAX proportional to the share of the ICY circulating supply they hold.",
  },
  {
    title: "Passive Ethereum Reflections",
    desc: "ICY holders are distributed 10% of the hourly volume every hour in Ethereum ($wETH.e). Earn passive income while holding an appreciating token from treasury buybacks. Just hold ICY to earn Ethereum.",
  },
  {
    title: "Optimized Treasury Investment",
    desc: "ICY's treasury automatically performs delta neutral yield farming, UST degenbox, and hyperbonding to generate consistent profits in any Crypto market. Profits are used to buyback ICY and increase liquidity.",
  },
];

const IntroCard = (props: any) => {
  return (
    <IntroCardBody>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </IntroCardBody>
  );
};

const IntroPart = () => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const titleSection: any = document.getElementById("intro-title");
    titleSection.style.opacity = "1";
    titleSection.style.transform = "scale(1)";
  }, []);

  const handleScroll = useCallback(
    (e: any) => {
      const currentTarget = e.currentTarget;
      const activeDiv: any = document.getElementById("intro-why");
      if (y > currentTarget.scrollY) {
        if (activeDiv.getBoundingClientRect().top > window.innerHeight - 100) {
          activeDiv.style.transform = "translateY(100px)";
          activeDiv.style.opacity = "0";
        }
      } else if (y < currentTarget.scrollY) {
        if (activeDiv.getBoundingClientRect().top <= window.innerHeight - 100) {
          activeDiv.style.transform = "translateY(0)";
          activeDiv.style.opacity = "1";
        }
      }
      setY(currentTarget.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <IntroWrapper>
      <WelcomeWrapper>
        <Header />
        <Container>
          <IntroTitleWrapper id="intro-title">
            <h1>Next Generation</h1>
            <h2>Farming-as-a-Service</h2>
            <p>Making safe and optimized DeFi investments accessible to all.</p>
            <IntroButtonWrapper>
              <Button label="Docs" type="white" onClick={() => {}} />
              <Button label="Buy $ICY" type="gradient" onClick={() => {}} />
            </IntroButtonWrapper>
          </IntroTitleWrapper>
        </Container>
      </WelcomeWrapper>
      <Container>
        <div style={{ paddingTop: "50px" }}>
          <IntroCardWrapper id="intro-why">
            <h1>Why Icy Money?</h1>
            <p>
              ICY provides sustainable sources of Passive Income accessible to
              anyone.
            </p>
            <IntroCardGroup>
              {cardData.map((item: any, key: any) => (
                <IntroCard key={key} title={item.title} desc={item.desc} />
              ))}
            </IntroCardGroup>
            <h2>
              To learn more about these features, read our <span>docs</span> .
            </h2>
          </IntroCardWrapper>
        </div>
      </Container>
    </IntroWrapper>
  );
};

export default IntroPart;
