import { Button, Stack, TextField } from "@mui/material";
import * as S from "../../../style/components/common/routine/routineForm.module";
import { useState } from "react";
import api from "../../../axios/axiosInstance";

export default function RoutineForm() {
  const [routineTitle, setRoutineTitle] = useState();
  const onClickCreateRoutine = async () => {
    const username = JSON.parse(localStorage.getItem("user_data")).username;
    const routine = [
      {
        routine_title: routineTitle,
        routine_exercise: [
          {
            exercise_name: "",
            exercise_type: "",
            exercise_reps: 0,
            exercise_sets: 0,
          },
        ],
      },
    ];

    let payLoad = {
      username: username,
      routine: routine,
    };
    const res = await api.post("/routine/create_routine", payLoad);
    console.log(res);
  };

  return (
    <S.RoutineWrapper>
      <S.RoutineTitle>Routine Form</S.RoutineTitle>
      <Stack padding={2} spacing={3} sx={{ width: "100%" }}>
        <TextField fullWidth label="루틴 타이틀" onChange={(e) => setRoutineTitle(e.target.value)}></TextField>
        <Button variant="contained" onClick={onClickCreateRoutine}>
          생성하기
        </Button>
      </Stack>
    </S.RoutineWrapper>
  );
}
