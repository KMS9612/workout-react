import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(-45deg, #ff8375, #e53935, #ff9966, #ffe074);
  background-size: 400% 400%;
  animation: ${moveGradient} 15s ease infinite;
`;

export const LoadingText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
`;

export const LoadingWave = styled.div`
  width: 100%;
  height: 15px;
  background-size: auto 100%;
  background-repeat: no-repeat;
  animation: ${moveWave} 2s linear infinite;
`;
