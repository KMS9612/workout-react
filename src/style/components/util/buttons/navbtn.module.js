import styled from "@emotion/styled";

export const NavBtn = styled.div`
  width: 100%;
  height: 45px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.primary};
  background-color: #fff;
  color: ${(props) => props.theme.color.second};
  font-size: 14px;
  font-weight: 700;
  &:hover {
    background-color: ${(props) => props.theme.color.hoverPrimary};
  }
`;
