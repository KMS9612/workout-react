import { Button, Stack, TextField } from "@mui/material";
import * as S from "../../../style/components/common/routine/routineForm.module";
import { useRef, useState } from "react";
import api from "../../../axios/axiosInstance";
import ErrorDialog from "../../util/modals/error_dialog";
import { useSetRecoilState } from "recoil";
import { isCreateRoutine } from "../../../store/routine";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../control/ITEM_TYPE";

export default function RoutineForm(props) {
  const [routineTitle, setRoutineTitle] = useState();
  const [isError, setIsError] = useState(false);
  const [err_msg, setErr_msg] = useState("");
  const setIsCreateRoutine = useSetRecoilState(isCreateRoutine);
  const noref = useRef();

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
    await api
      .post("/routine/create_routine", payLoad)
      .then(() => {
        setIsCreateRoutine((prev) => !prev);
      })
      .catch((err) => {
        setIsError((prev) => !prev);
        setErr_msg(err.response.data.message);
      });
  };

  // dnd 기능 관련 로직
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
    <S.RoutineWrapper iswidget={props.iswidget} ref={props.iswidget ? drag : noref} style={{ left, top }}>
      <ErrorDialog setIsOpen={setIsError} isOpen={isError} err_msg={err_msg} />
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
