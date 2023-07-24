import styled from "@emotion/styled";

export const NavWrapper = styled.div`
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0px 0px 0px;
  border: 1px solid var(--wo-primary);
  background: linear-gradient(to right, var(--wo-primary), var(--wo-second));
  border-radius: 15px;
  margin-left: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 95%;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
`;
