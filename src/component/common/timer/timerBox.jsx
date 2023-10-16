import { BottomNavigation, BottomNavigationAction, Button, InputAdornment, TextField, Tooltip, Typography } from "@mui/material";
import * as S from "../../../style/components/common/timer/timerBox.module";
import { useRecoilValue } from "recoil";
import { RoutineTimer } from "../../../store/timer";
import { useEffect, useState } from "react";

export default function TimerBox() {
  const routineTimer = useRecoilValue(RoutineTimer);
  const [isStart, setIsStart] = useState(false);
  const [isExercise, setIsExercise] = useState();
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

  // Space를 누르면 LessSets가 동작하게 하는 코드
  useEffect(() => {
    const handleSpaceKey = (e) => {
      if (e.code === "Space") {
        onClickLessSets();
      }
    };
    if (isExercise) {
      window.addEventListener("keydown", handleSpaceKey);
    } else {
      window.removeEventListener("keydown", handleSpaceKey);
    }

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("keydown", handleSpaceKey);
    };
  }, [isExercise]);

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
        alert("모든 운동을 완료했습니다!, 처음화면으로 돌아갈게요!");
        setIsStart(false);
        return;
      }
      // 한 운동의 Sets가 끝낫을때의 로직이 들어가는 곳
      setExerciseIndex((prev) => prev + 1);
      setCurrentSets(Number(routineTimer.routine_exercise[exerciseIndex].exercise_sets));
      return;
    }
    setIsExercise(false);
    startRestTime(); // 쉬는시간 타이머 돌리기
    setCurrentSets((sets) => sets - 1);
    // set 수 최신화
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

  // 타이머 포맷 함수
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // 두 자릿수로 표시하기 위해 padStart 메서드 사용
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const checkRestTime = (restTime) => {
    const reg = /^\d*$/; // "" 혹은 숫자로된 문자열만을 restTime에 저장.
    if (reg.test(restTime)) {
      setRestTime(restTime);
    } else {
      return;
    }
  };

  return (
    <S.Wrapper>
      <S.BoxTitle>Routine Timer</S.BoxTitle>
      <S.TimerWrapper>
        <S.RecentWorkArea>
          <S.WorkBox>
            <h2>세트당 횟수</h2>
            <S.SubText>{routineTimer.routine_exercise[exerciseIndex].exercise_reps}</S.SubText>
          </S.WorkBox>
          <S.WorkBox>
            <h2>남은 세트</h2>
            <S.SubText>{currentSets}</S.SubText>
          </S.WorkBox>
        </S.RecentWorkArea>

        {isStart ? (
          <S.TimerArea>
            {isExercise ? (
              <S.LoadingContainer onClick={onClickLessSets}>
                <S.LoadingText>화면을 클릭하거나 Space를 눌러 다음세트를 진행하세요!</S.LoadingText>
                <S.LoadingWave />
              </S.LoadingContainer>
            ) : (
              <div>
                <h2 style={{ fontSize: "60px" }}>{formatTime(restTime)}</h2>
              </div>
            )}
          </S.TimerArea>
        ) : (
          <S.TimerStart spacing={2}>
            <TextField
              label="쉬는시간을 입력해주세요"
              autoComplete="off"
              InputProps={{
                endAdornment: <InputAdornment position="end">Sec</InputAdornment>,
              }}
              sx={{ width: "80%" }}
              value={restTime}
              onChange={(e) => {
                checkRestTime(e.target.value);
              }}
            />

            <Button disabled={routineTimer ? false : true} sx={{ width: "80%" }} variant="contained" onClick={onClickStartTimer}>
              {routineTimer ? routineTimer.routine_title + "시작!" : "루틴을 선택해 주세요"}
            </Button>
          </S.TimerStart>
        )}
        <S.RecentWorkArea>
          <S.WorkBox>
            <h2>루틴</h2>
            <S.SubText>{routineTimer ? routineTimer.routine_title : "루틴을 선택해주세요"} </S.SubText>
          </S.WorkBox>
          <S.WorkBox>
            <h2>진행중 운동</h2>
            <S.SubText>{routineTimer && routineTimer.routine_exercise.length !== 0 ? routineTimer.routine_exercise[exerciseIndex].exercise_name : "운동을 추가해 주세요"}</S.SubText>
          </S.WorkBox>
        </S.RecentWorkArea>
      </S.TimerWrapper>
    </S.Wrapper>
  );
}
