import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { clickedExercise } from "../../../store/exercise";
import { useEffect } from "react";
import { selectedRoutine } from "../../../store/routine";

export default function RoutineTable(props) {
  const Exercise = useRecoilValue(clickedExercise);
  const [mergeExercise, setMergeExercise] = useRecoilState(selectedRoutine);

  useEffect(() => {
    // Exercise와 props.el.routine.routine_exercise를 머지한 배열을 만들어야함
    setMergeExercise([...Exercise, ...props.routine.routine_exercise]);
  }, [Exercise]);

  const onChangeRepsSets = (el, type, event, index) => {
    let copiedState = [...mergeExercise];
    if (type === "Reps") {
      copiedState[index] = { ...copiedState[index], exercise_reps: Number(event.target.value) };
      setMergeExercise(copiedState);
    }
    if (type === "Sets") {
      copiedState[index] = { ...copiedState[index], exercise_sets: Number(event.target.value) };
      setMergeExercise(copiedState);
    }
    console.log(mergeExercise);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Reps</TableCell>
            <TableCell align="right">Sets</TableCell>
            {props.isEditMode ?? <TableCell align="right">Control</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.isEditMode
            ? mergeExercise.map((el, index) => (
                <TableRow key={el._id}>
                  <TableCell>{el.exercise_name}</TableCell>
                  <TableCell>{el.exercise_type}</TableCell>
                  <TableCell align="right">
                    <TextField size="small" label="Reps" onChange={(ev) => onChangeRepsSets(el, "Reps", ev, index)}></TextField>
                  </TableCell>
                  <TableCell align="right">
                    <TextField size="small" label="Sets" onChange={(ev) => onChangeRepsSets(el, "Sets", ev, index)}></TextField>
                  </TableCell>
                  <TableCell align="right">삭제</TableCell>
                </TableRow>
              ))
            : props.routine.routine_exercise.map((el) => (
                <TableRow key={el._id}>
                  <TableCell>{el.exercise_name}</TableCell>
                  <TableCell>{el.exercise_type}</TableCell>
                  <TableCell align="right">{el.exercise_reps}</TableCell>
                  <TableCell align="right">{el.exercise_sets}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
