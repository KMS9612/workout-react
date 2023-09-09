import { Button, Stack } from "@mui/material";
import * as S from "../../../style/components/common/routine/exerciseForm.module";
import api from "../../../axios/axiosInstance";
import { useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../control/ITEM_TYPE";

export default function ExerciseForm(props) {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const userData = JSON.parse(localStorage.getItem("user_data"));
  const [isFocus, setIsFocus] = useState();
  const noref = useRef();

  const onClickSetExercise = async () => {
    const username = userData.username;
    // post 바디에 들어갈 객체
    let payload = {
      username: username,
      exercise: [{ exercise_name: exerciseName, exercise_type: exerciseType }],
    };
    try {
      const res = await api.post("/exercise/create_exercise", payload);
      setExerciseName("");
      setExerciseType("");
    } catch (err) {
      console.log(err.message);
    }
  };

  const onFocusOpacity = (status) => {
    let isFoucs = status === "focus" ? "true" : "false";
    setIsFocus(isFoucs);
    setIsFocus(isFoucs);
  };

  // drag and drop 관련 기능
  const id = props.id;
  let left = props.left;
  let top = props.top;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );
  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <S.ExerciseWrapper ref={props.iswidget ? drag : noref} isfocus={isFocus} style={{ left, top }} iswidget={props.iswidget}>
      <S.ExerciseFormBox>
        <S.ExerciseFormText>운동 등록</S.ExerciseFormText>
        <Stack spacing={2} sx={{ width: "100%", padding: "0 10px" }}>
          <S.ExerciseInput
            variant="outlined"
            label="등록할 운동을 입력 해 주세요"
            value={exerciseName}
            onChange={(event) => {
              setExerciseName(event.target.value);
            }}
            onFocus={() => onFocusOpacity("focus")}
            onBlur={() => onFocusOpacity("blur")}
          />
          <S.ExerciseInput
            variant="outlined"
            label="운동의 타입을 입력 해 주세요"
            value={exerciseType}
            onChange={(event) => {
              setExerciseType(event.target.value);
            }}
            onFocus={() => onFocusOpacity("focus")}
            onBlur={() => onFocusOpacity("blur")}
          />
          <Button variant="contained" onClick={onClickSetExercise}>
            등록하기
          </Button>
        </Stack>
      </S.ExerciseFormBox>
    </S.ExerciseWrapper>
  );
}
