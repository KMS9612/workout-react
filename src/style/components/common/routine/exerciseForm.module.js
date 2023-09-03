import styled from "@emotion/styled";
import { Box, TextField, Typography } from "@mui/material";

export const ExerciseWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 20px;
  opacity: ${(props) => (props.isfocus === "true" ? "100%" : "50%")};
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
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  font-family: Roboto;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  background-color: #ff8375;
  padding-left: 20px;
  color: #fff;
`;
