import styled from "@emotion/styled";
import { Box, TextField, Typography } from "@mui/material";

export const ExerciseWrapper = styled(Box, {
  shouldForwardProp: (prop) => !["iswidget", "isfocus"].includes(prop),
  // Boolean타입 Emotion Props가 Dom 요소까지 전달되서 에러메세지가 출력됬음, 해당 문제에 대한 해결책
})`
  width: ${(props) => (props.iswidget ? "30%" : "100%")};
  height: ${(props) => (props.iswidget ? "" : "100%")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 20px;
  opacity: ${(props) => (props.isfocus === "true" ? "100%" : "50%")};
  position: ${(props) => (props.iswidget ? "absolute" : "block")};
  cursor: ${(props) => (props.iswidget ? "move" : "default")};
`;

export const ExerciseFormBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExerciseInput = styled(TextField)`
  width: 100%;
  font-weight: 700;
`;
export const ExerciseFormText = styled(Typography)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: Roboto;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  background-color: #ff8375;
  padding-left: 20px;
  color: rgba(0, 0, 0, 0.6);
`;
