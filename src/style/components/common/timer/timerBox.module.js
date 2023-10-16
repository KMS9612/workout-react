import { Box, Stack } from "@mui/material";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #ff8376;
  border-radius: 5px;
  overflow: hidden;
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
  height: 91vh;
`;

export const RecentWorkArea = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 20%;
  }
`;

export const WorkBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #ccc;
  padding-left: 15px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const TimerStart = styled(Stack)`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  @media screen and (max-width: 1000px) {
    height: 70%;
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
  @media screen and (max-width: 1000px) {
    height: 70%;
  }
`;
