import DeleteIcon from "@mui/icons-material/Delete";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, List, ListItemButton, ListItemText, ListSubheader, Skeleton, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import api from "../../../axios/axiosInstance";
import { ItemTypes } from "../control/ITEM_TYPE";
import { useDrag } from "react-dnd";
import { useRecoilState } from "recoil";
import { clickedExercise, isCreate } from "../../../store/exercise";

export default function ExerciseList(props) {
  const [exerciseData, setExerciseData] = useState();
  const [isCreateValue, setIsCreateValue] = useRecoilState(isCreate);
  const [Exercise, setExercise] = useRecoilState(clickedExercise);
  const username = JSON.parse(localStorage.getItem("user_data")).username || "";
  const noref = useRef();

  const getExerciseData = async () => {
    try {
      let payload = { username: username };
      const res = await api.get("/exercise/fetch_exercise", {
        params: payload,
      });
      setExerciseData(res.data.exercise);
    } catch (err) {
      console.log(err, "exerciseList 요청에러");
    }
  };

  const onClickDeleteExercise = async (el) => {
    try {
      let payload = {
        username: username,
        exercise_name: el.exercise_name,
      };
      await api.delete("/exercise/delete_exercise_by_name", { params: payload });
      setExerciseData("");
      setIsCreateValue((prev) => !prev);
    } catch {
      // 모달이나 다이얼로그로 변경하기
      console.log("운동삭제에 실패했습니다.");
    }
  };

  const onClickPushToRoutine = (el) => {
    setExercise([...Exercise, { exercise_name: el.exercise_name, exercise_type: el.exercise_type, exercise_reps: 0, exercise_sets: 0 }]);
  };

  useEffect(() => {
    getExerciseData();
  }, [isCreateValue]);

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
    <List
      ref={props.iswidget ? drag : noref}
      iswidget={props.iswidget}
      sx={{ left, top, cursor: props.iswidget ? "move" : "default", border: "1px solid #ff8375", borderRadius: "5px", width: props.iswidget ? "fit-content" : "100%", height: props.iswidget ? "500px" : "100%", overflow: "auto" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{ backgroundColor: "#ff8375" }}>
          Exercise List
        </ListSubheader>
      }>
      {exerciseData ? (
        exerciseData.exercise.map((el, index) => (
          <List component="div" key={el._id}>
            <ListItemButton>
              <ListItemText primary={`${el.exercise_name} / ${el.exercise_type}`} sx={{ minWidth: "200px", display: "flex", justifyContent: "flex-start", alignItems: "center" }} />
              <IconButton edge="end" sx={{ marginRight: "5px" }}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" sx={{ marginRight: "5px" }} onClick={() => onClickPushToRoutine(el)}>
                <PlaylistAddIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => onClickDeleteExercise(el)}>
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
          </List>
        ))
      ) : (
        <Stack spacing={2}>
          <Skeleton sx={{ width: props.iswidget ? "300px" : "100%", height: "50px" }} variant="text" />
          <Skeleton sx={{ width: props.iswidget ? "300px" : "100%", height: "50px" }} variant="rounded" />
          <Skeleton sx={{ width: props.iswidget ? "300px" : "100%", height: "50px" }} variant="rounded" />
          <Skeleton sx={{ width: props.iswidget ? "300px" : "100%", height: "50px" }} variant="rounded" />
        </Stack>
      )}
    </List>
  );
}
