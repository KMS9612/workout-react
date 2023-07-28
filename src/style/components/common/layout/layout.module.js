import styled from "@emotion/styled";

export const BodyWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.backGround};
`;
