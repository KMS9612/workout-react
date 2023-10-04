import { Collapse, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import api from "../../../axios/axiosInstance";

export default function RoutineListDetail(props) {
  const [isOpenRoutine, setIsOpenRoutine] = useState(false);

  const onClickFetchRoutine = async (el) => {
    setIsOpenRoutine((prev) => !prev);
    const payload = { routine_title: el.routine_title };
    await api.get("/routine/fetch_routine", { params: payload });
  };

  return (
    <List component="div" onClick={() => onClickFetchRoutine(props.el)}>
      <ListItemButton>
        <ListItemText primary={props.el.routine_title} sx={{ minWidth: "200px", display: "flex", justifyContent: "flex-start", alignItems: "center" }} />
        <IconButton edge="end" sx={{ marginRight: "5px" }}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" sx={{ marginRight: "5px" }} onClick={() => props.deleteRoutine(props.el)}>
          <DeleteIcon />
        </IconButton>
        <IconButton edge="end">{isOpenRoutine ? <ExpandLess /> : <ExpandMore />}</IconButton>
      </ListItemButton>
      {props.el.routine_exercise.map((routine) => (
        <Collapse key={routine._id} in={isOpenRoutine} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItemText sx={{ paddingLeft: "30px" }}>{routine.exercise_name ? routine.exercise_name : "운동을 추가하세요!"}</ListItemText>
          </List>
        </Collapse>
      ))}
    </List>
  );
}
