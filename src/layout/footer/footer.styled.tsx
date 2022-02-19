import styled from "styled-components";

// export const FooterWrapper = styled.div`
//   border-top: 1px solid rgba(175, 175, 175, 0.1);
//   border-bottom: 1px solid rgba(175, 175, 175, 0.1);
//   padding: 50px 0 70px;
//   display: flex;
//   justify-content: space-between;
//   h1 {
//     color: white;
//     line-height: 80%;
//     font-size: clamp(30px, 6vw, 36px);
//     font-weight: 900;
//     margin: 0;
//     text-transform: uppercase;
//     margin-bottom: 20px;
//     margin-right: 20px;
//   }
//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// export const FooterMenuWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-gap: 50px;
//   @media screen and (max-width: 600px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// export const FooterMenuGroup = styled.div`
//   h2 {
//     font-size: 18px;
//     font-weight: 600;
//     color: white;
//     margin: 0;
//     margin-bottom: 20px;
//   }
//   p,
//   a {
//     margin: 5px 0;
//     cursor: pointer;
//     color: white;
//     text-decoration: none;
//     display: block;
//     font-weight: 300;
//     transition: all 0.2s;
//     :hover {
//       color: #888;
//     }
//   }
// `;

// export const FooterCopyRight = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 24px 0;
//   color: white;
//   @media screen and (max-width: 425px) {
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//   }
//   p {
//     margin: 0;
//   }
//   span {
//     display: flex;
//     align-items: center;
//     padding-left: 15px;
//     position: relative;
//     ::before {
//       left: 0;
//       content: " ";
//       position: absolute;
//       background-color: rgb(0, 213, 150);
//       width: 8px;
//       height: 8px;
//       border-radius: 10px;
//     }
//   }
// `;

export const FooterWrapper = styled.div`
  position: relative;
  background-color: #fc5090;
  padding: 70px 0;
`;

export const FooterTitle = styled.div`
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  font-size: calc((2.8 - 1) * 1.2vw + 1rem);
  font-weight: 900;
  color: white;
`;

export const FooterLinkGroup = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 36px;
  align-items: start;
  .icon-discord {
    font-size: 80px;
  }
  svg {
    margin: 0 25px;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    font-size: 50px !important;
    align-items: center;
    svg {
      margin: 10px;
      cursor: pointer;
    }
  }
`;

export const FooterContactEmail = styled.div`
  color: white;
  font-size: 20px;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 700;
`;

export const FooterPolicyLinks = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 25px;
  color: white;
  a {
    text-decoration: underline;
    color: white;
  }
`;

export const FooterCopyRight = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: white;
  text-align: center;
`;

export const FooterVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
