import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";

export const BoxWrapper = styled(Stack)`
  width: 350px;
  height: 250px;
  border: 1px solid #000;
  padding: 15px;
  border-radius: 5px;
`;

export const BoxTitle = styled.h2`
  color: #ff8375;
`;

export const BoxContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
