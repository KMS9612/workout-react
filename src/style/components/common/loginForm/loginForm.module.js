import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { keyframes } from "@emotion/react";

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Left_login = styled.div`
  width: 60%;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 50%;
  }
`;

export const moveGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const moveWave = keyframes`
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 200%;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ff8375, #e53935, #ff9966, #ffe074);
  background-size: 400% 400%;
  animation: ${moveGradient} 15s ease infinite;
`;

export const LoadingText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
`;

export const LoadingWave = styled.div`
  width: 100%;
  height: 15px;
  background-size: auto 100%;
  background-repeat: no-repeat;
  animation: ${moveWave} 2s linear infinite;
`;

export const Right_login = styled.div`
  width: 40%;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const LoginFormHeader = styled.h2`
  font-size: 32px;
  margin-bottom: 50px;
  font-weight: 700;
  color: #ff8375;
`;

export const InputStack = styled(Stack)`
  width: 100%;
  height: 200px;
`;

export const BtnStack = styled(Stack)`
  width: 100%;
`;

export const LoginBtn = styled(LoadingButton)``;

export const SignUpBtn = styled(Button)``;
