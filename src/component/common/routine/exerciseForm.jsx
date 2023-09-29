import { Button, Stack } from "@mui/material";
import * as S from "../../../style/components/common/routine/exerciseForm.module";
import api from "../../../axios/axiosInstance";
import { useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../control/ITEM_TYPE";
import { useSetRecoilState } from "recoil";
import { isCreate } from "../../../store/exercise";
import ErrorDialog from "../../util/modals/error_dialog";

export default function ExerciseForm(props) {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [isOpenErr, setIsOpenErr] = useState(false);
  const [err_msg, setErrMsg] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user_data"));
  const [isFocus, setIsFocus] = useState();
  const setIsCreate = useSetRecoilState(isCreate);
  const noref = useRef();

  const onClickSetExercise = async () => {
    const username = userData.username;
    if (!exerciseName || !exerciseType) {
      setIsOpenErr(true);
      setErrMsg("운동이름, 운동타입을 모두 입력해주세요");
      return;
    }
    // post 바디에 들어갈 객체
    let payload = {
      username: username,
      exercise: [{ exercise_name: exerciseName, exercise_type: exerciseType }],
    };
    try {
      const res = await api.post("/exercise/create_exercise", payload);
      setExerciseName("");
      setExerciseType("");
      setIsCreate((prev) => !prev); // recoilState로 list렌더링 발생시키기.
    } catch (err) {
      setIsOpenErr(true);
      setErrMsg("운동등록에 실패했습니다.");
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
      <ErrorDialog setIsOpen={setIsOpenErr} isOpen={isOpenErr} err_msg={err_msg} />
      <S.ExerciseFormBox>
        <S.ExerciseFormText>Create Exercise</S.ExerciseFormText>
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
