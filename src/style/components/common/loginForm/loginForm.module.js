import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`;
export const DefaultLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormHeader = styled.h2`
  margin-bottom: 50px;
  color: #ff8375;
`;
