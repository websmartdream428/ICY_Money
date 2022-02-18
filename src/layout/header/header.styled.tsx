import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 30px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: black;
    line-height: 80%;
    font-size: clamp(30px, 6vw, 36px);
    font-weight: 900;
    margin: 0;
    text-transform: uppercase;
  }
`;
