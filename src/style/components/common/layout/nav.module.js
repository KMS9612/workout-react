import styled from "@emotion/styled";

export const NavWrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 10px 0px 10px;
  border-right: 1px solid #fff;
  background-color: ${(props) => props.theme.color.navcolor};
  border-radius: 15px;
`;

export const Header1 = styled.h1`
  color: ${(props) => props.theme.color.second};
  padding-bottom: 50px;
`;

export const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
