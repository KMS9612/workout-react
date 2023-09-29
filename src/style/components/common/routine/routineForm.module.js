import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const RoutineWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #ff8376;
  border-radius: 5px;
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
