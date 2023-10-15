import { BottomNavigation, BottomNavigationAction, Button, InputAdornment, TextField, Typography } from "@mui/material";
import * as S from "../../../style/components/common/timer/timerBox.module";
import { useRecoilValue } from "recoil";
import { RoutineTimer } from "../../../store/timer";
import { useEffect, useState } from "react";

export default function TimerBox() {
  const routineTimer = useRecoilValue(RoutineTimer);
  const [isStart, setIsStart] = useState(false);
  const [isExercise, setIsExercise] = useState(false);
  const [restTime, setRestTime] = useState(null);
  const [restTimeSave, setRestTimeSave] = useState(null);
  const [currentSets, setCurrentSets] = useState(null);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let sets = Number(routineTimer && routineTimer.routine_exercise[0].exercise_sets);
    setExerciseIndex(0);
    setCurrentSets(sets);
    setIsStart(false);
  }, [routineTimer]);

  const onClickStartTimer = () => {
    if (restTime <= 0 || !routineTimer || routineTimer.routine_exercise.length === 0) return;
    setIsStart(true);
    setIsExercise(true);
    setRestTimeSave(restTime);
  };

  const onClickLessSets = () => {
    if (currentSets === 1) {
      if (exerciseIndex >= routineTimer.routine_exercise.length - 1) {
        // 여기에 모든 운동 종료 시 처리할 로직 작성

        return;
      }
      // 한 운동의 Sets가 끝낫을때의 로직이 들어가는 곳
      setExerciseIndex((prev) => prev + 1);
      setCurrentSets(Number(routineTimer.routine_exercise[exerciseIndex].exercise_sets));
      return;
    }
    setIsExercise(false);
    startRestTime(); // 쉬는시간 타이머 돌리기
    // set 수 최신화
    setCurrentSets((sets) => sets - 1);
  };

  const startRestTime = () => {
    const timer = setInterval(() => {
      setRestTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          setIsExercise(true);
          return restTimeSave;
        }
        return time - 1;
      });
    }, 1000);

    setIntervalId(timer); // 타이머가 종료되었을때 인터벌을 State에 저장
  };

  // 타이머 종료후 State에 timer가 저장되고 변경점이 적용되며 clearInterval실행
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

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
            <div>{routineTimer && routineTimer.routine_exercise.length !== 0 ? routineTimer.routine_exercise[exerciseIndex].exercise_name : "운동을 추가해 주세요"}</div>
          </S.WorkBox>
        </S.RecentWorkArea>
        {isStart ? (
          <S.TimerArea>
            {isExercise ? (
              <div>
                <div>현재 진행중인 운동: {routineTimer.routine_exercise[exerciseIndex].exercise_name}</div>
                <div>한세트당 횟수: {routineTimer.routine_exercise[exerciseIndex].exercise_reps}</div>
                <div>남은 세트수: {currentSets}</div>
                <Button variant="contained" onClick={() => onClickLessSets()}>
                  버튼 클릭하면 세트 넘기기
                </Button>
              </div>
            ) : (
              <div>
                <div style={{ textAlign: "center" }}>운동중일때는 남은 세트수와 세트수 줄이는 버튼 보여주기</div>
                <h2 style={{ fontSize: "60px" }}>{restTime}</h2>
              </div>
            )}
          </S.TimerArea>
        ) : (
          <S.TimerStart spacing={2}>
            <Typography variant={"h4"}>세트간 휴식시간을 초단위로 입력해주세요.</Typography>
            <TextField
              label="쉬는시간을 입력해주세요"
              autoComplete="off"
              InputProps={{
                endAdornment: <InputAdornment position="end">Sec</InputAdornment>,
              }}
              sx={{ width: "80%" }}
              onChange={(e) => {
                setRestTime(e.target.value);
              }}
            />
            <Button sx={{ width: "80%" }} variant="contained" onClick={onClickStartTimer}>
              {routineTimer && routineTimer.routine_title} 시작!
            </Button>
          </S.TimerStart>
        )}
        <BottomNavigation showLabels sx={{ border: "1px solid #ccc", height: "10%" }}>
          <BottomNavigationAction sx={{ fontWeight: 700 }} label="Stop" />
          <BottomNavigationAction sx={{ fontWeight: 700, color: "#ff8375" }} label="Start" />
          <BottomNavigationAction sx={{ fontWeight: 700 }} label="Restart" />
        </BottomNavigation>
      </S.TimerWrapper>
    </S.Wrapper>
  );
}
