import styled from "@emotion/styled";

export const BodyWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 30px;
  @media screen and (max-width: 800px) {
    height: 50px;
  }
`;
