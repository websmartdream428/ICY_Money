import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 1px solid rgba(175, 175, 175, 0.1);
  border-bottom: 1px solid rgba(175, 175, 175, 0.1);
  padding: 50px 0 70px;
  display: flex;
  justify-content: space-between;
  h1 {
    color: white;
    line-height: 80%;
    font-size: 36px;
    font-weight: 900;
    margin: 0;
    text-transform: uppercase;
  }
`;

export const FooterMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
`;

export const FooterMenuGroup = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin: 0;
    margin-bottom: 20px;
  }
  p,
  a {
    margin: 5px 0;
    cursor: pointer;
    color: white;
    text-decoration: none;
    display: block;
    font-weight: 300;
    transition: all 0.2s;
    :hover {
      color: #888;
    }
  }
`;

export const FooterCopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  color: white;
  p {
    margin: 0;
  }
  span {
    display: inline-flex;
    align-items: center;
    padding-left: 15px;
    position: relative;
    ::before {
      left: 0;
      content: " ";
      position: absolute;
      background-color: rgb(0, 213, 150);
      width: 8px;
      height: 8px;
      border-radius: 10px;
    }
  }
`;
