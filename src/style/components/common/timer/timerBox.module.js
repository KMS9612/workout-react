import { Stack } from "@mui/material";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: ${(props) => (props.iswidget ? "absolute" : "block")};
  width: ${(props) => (props.iswidget ? "40%" : "100%")};
  height: ${(props) => (props.iswidget ? "500px" : "100%")};
  border: 1px solid #ff8376;
  border-radius: 5px;
  overflow: ${(props) => (props.iswidget ? "auto" : "hidden")};
  left: ${(props) => props.left + "px"};
  top: ${(props) => props.top + "px"};
  cursor: ${(props) => (props.iswidget ? "move" : "default")};
`;

export const BoxTitle = styled.h2`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #ff8375;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.6);
  padding-left: 16px;
`;

export const TimerWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.iswidget ? "90%" : "91vh")};
`;

export const RecentWorkArea = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: 20%;
  }
`;

export const WorkBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ccc;
  padding-left: 15px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const TimerStart = styled(Stack, {
  shouldForwardProp: (prop) => !["iswidget"].includes(prop),
})`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  @media screen and (max-width: 1200px) {
    height: 60%;
  }
`;

export const TimerArea = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  @media screen and (max-width: 1200px) {
    height: 60%;
  }
`;

export const TimerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubText = styled.div`
  font-size: 18px;
  font-weight: 600;
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
  animation: ${moveGradient} 5s ease infinite;
`;
export const LoadingText = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: white;
`;

export const LoadingWave = styled.div`
  width: 100%;
  height: 15px;
  background-size: auto 100%;
  background-repeat: no-repeat;
  animation: ${moveWave} 1s linear infinite;
`;
