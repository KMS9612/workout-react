import styled from "@emotion/styled";

export const NavWrapper = styled.div`
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0px 0px 0px;
  border: 1px solid ${(props) => props.theme.color.primary};
  background-color: [linear-gradient(
      ${(props) => props.theme.color.primary},
      ${(props) => props.theme.color.second}
    )];
  border-radius: 15px;
  margin-left: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 95%;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
`;
