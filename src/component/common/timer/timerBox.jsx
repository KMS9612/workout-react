import { BottomNavigation, BottomNavigationAction, Button, Container, InputAdornment, List, TextField } from "@mui/material";
import * as S from "../../../style/components/common/timer/timerBox.module";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { RoutineTimer } from "../../../store/timer";

export default function TimerBox() {
  const routineTimer = useRecoilValue(RoutineTimer);
  return (
    <S.Wrapper>
      <S.BoxTitle>Routine Timer</S.BoxTitle>
      <S.TimerWrapper>
        <S.RecentWorkArea>
          <S.WorkBox>
            <h2>루틴</h2>
            <div>{routineTimer ? routineTimer.routine_title : "루틴을 선택해주세요"} </div>
          </S.WorkBox>
          <S.WorkBox>
            <h2>진행중 운동</h2>
            <div>현재 실행중인 운동 보여주기</div>
          </S.WorkBox>
        </S.RecentWorkArea>

        <S.TimerArea>
          <TextField
            label="쉬는시간을 입력해주세요"
            autoComplete="off"
            InputProps={{
              endAdornment: <InputAdornment position="end">Sec</InputAdornment>,
            }}
          />
          <div style={{ textAlign: "center" }}>운동중일때는 남은 세트수와 세트수 줄이는 버튼 보여주기</div>
          <h2 style={{ fontSize: "60px" }}>00:00</h2>
          <Button variant="contained">버튼 클릭하면 세트 넘기기</Button>
        </S.TimerArea>
        <BottomNavigation showLabels sx={{ border: "1px solid #ccc", height: "10%" }}>
          <BottomNavigationAction sx={{ fontWeight: 700 }} label="Stop" />
          <BottomNavigationAction sx={{ fontWeight: 700, color: "#ff8375" }} label="Start" />
          <BottomNavigationAction sx={{ fontWeight: 700 }} label="Restart" />
        </BottomNavigation>
      </S.TimerWrapper>
    </S.Wrapper>
  );
}
