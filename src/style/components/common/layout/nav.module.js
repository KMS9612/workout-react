import styled from "@emotion/styled";
import { Button, Drawer } from "@mui/material";

export const NavDrawer = styled(Drawer)`
  width: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 1px solid #fff;
  background-color: #fff;
  border-radius: 15px;
`;

export const NavWrapper = styled.div`
  width: 100%;
  text-align: center;
  opacity: ${(props) => (props.isOver ? 1 : 0)};
  transition: all 300ms;
`;

export const Header1 = styled.h1`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: all 300ms;
`;

export const HideNavButtons = styled(Button)`
  font-size: 12px;
`;
