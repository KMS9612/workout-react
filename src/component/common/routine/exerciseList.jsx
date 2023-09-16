import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, List, ListItemButton, ListItemText, ListSubheader, Skeleton, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import api from "../../../axios/axiosInstance";
import { ItemTypes } from "../control/ITEM_TYPE";
import { useDrag } from "react-dnd";
import { useRecoilValue } from "recoil";
import { isCreate } from "../../../store/exercise";

export default function ExerciseList(props) {
  const [exerciseData, setExerciseData] = useState();
  const username = JSON.parse(localStorage.getItem("user_data")).username || "";
  const isCreateValue = useRecoilValue(isCreate);
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
      sx={{ left, top, cursor: props.iswidget ? "move" : "default", border: "1px solid #ff8375", borderRadius: "5px", width: "fit-content" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{ backgroundColor: "#ff8375" }}>
          Exercise List
        </ListSubheader>
      }>
      {exerciseData ? (
        exerciseData.exercise.map((el, index) => (
          <>
            <List component="div">
              <ListItemButton>
                <ListItemText primary={`${el.exercise_name} / ${el.exercise_type}`} sx={{ minWidth: "200px", maxWidth: "400px", display: "flex", justifyContent: "flex-start", alignItems: "center" }} />
                <Button>Routine</Button>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemButton>
            </List>
          </>
        ))
      ) : (
        <Stack spacing={2}>
          <Skeleton sx={{ width: "300px" }} variant="text" />
          <Skeleton sx={{ width: "300px" }} variant="rounded" />
          <Skeleton sx={{ width: "300px" }} variant="rounded" />
        </Stack>
      )}
    </List>
  );
}
