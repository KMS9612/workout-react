import { Collapse, IconButton, List, ListItemButton, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { clickedExercise } from "../../../store/exercise";

export default function RoutineListDetail(props) {
  const [isOpenRoutine, setIsOpenRoutine] = useState(false);
  const [Exercise, setExercise] = useRecoilState(clickedExercise);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    console.log(Exercise);
  });

  const onClickOpenRoutine = async (el) => {
    setIsOpenRoutine((prev) => !prev);
  };

  const onClickEditRoutine = (event) => {
    const value = event.target.value;
    setExercise([]);
    setIsOpenRoutine(true);
    setIsEditMode((prev) => !prev);
  };

  return (
    <List component="div">
      <ListItemButton>
        <ListItemText primary={props.el.routine_title} sx={{ minWidth: "200px", display: "flex", justifyContent: "flex-start", alignItems: "center" }} />
        <IconButton edge="end" sx={{ marginRight: "5px" }} onClick={onClickEditRoutine}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" sx={{ marginRight: "5px" }} onClick={() => props.deleteRoutine(props.el)}>
          <DeleteIcon />
        </IconButton>
        <IconButton edge="end" onClick={onClickOpenRoutine}>
          {isOpenRoutine ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </ListItemButton>
      {props.el.routine_exercise.map((routine) =>
        isEditMode ? (
          <Collapse key={routine._id} in={isOpenRoutine} timeout="auto" unmountOnExit>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell align="right">Reps</TableCell>
                    <TableCell align="right">Sets</TableCell>
                    <TableCell align="right">Control</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Exercise.map((el) => (
                    <TableRow>
                      <TableCell>{el.exercise_name}</TableCell>
                      <TableCell>{el.exercise_type}</TableCell>
                      <TableCell align="right">
                        <TextField size="small" label="Reps"></TextField>
                      </TableCell>
                      <TableCell align="right">
                        <TextField size="small" label="Sets"></TextField>
                      </TableCell>
                      <TableCell align="right">삭제</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Collapse>
        ) : (
          <Collapse key={routine._id} in={isOpenRoutine} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItemText sx={{ paddingLeft: "30px" }}>{routine.exercise_name ? routine.exercise_name : "운동을 추가하세요!"}</ListItemText>
            </List>
          </Collapse>
        )
      )}
    </List>
  );
}
