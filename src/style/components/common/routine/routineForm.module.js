import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const RoutineWrapper = styled(Box, {
  shouldForwardProp: (prop) => !["iswidget"].includes(prop),
  // Boolean타입 Emotion Props가 Dom 요소까지 전달되서 에러메세지가 출력됬음, 해당 문제에 대한 해결책
})`
  width: ${(props) => (props.iswidget ? "300px" : "100%")};
  position: ${(props) => (props.iswidget ? "absolute" : "block")};
  height: ${(props) => (props.iswidget ? "" : "275px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #ff8376;
  border-radius: 5px;
  cursor: ${(props) => (props.iswidget ? "move" : "default")};
`;

export const RoutineTitle = styled(Typography)`
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
