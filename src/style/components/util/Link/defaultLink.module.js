import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const DefaultLink = styled(Link)`
  text-decoration: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-bottom: ${(props) => props.pBottom};
  display: flex;
  justify-content: center;
  align-items: center;
`;
