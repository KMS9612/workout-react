import { Collapse, IconButton, List, ListItemButton, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { clickedExercise } from "../../../store/exercise";
import CheckIcon from "@mui/icons-material/Check";
import RoutineTable from "./routineDetailTable";
import CheckDeleteRoutine from "../../util/modals/check_delete";
import api from "../../../axios/axiosInstance";
import { isCreateRoutine, selectedRoutine } from "../../../store/routine";

export default function RoutineListDetail(props) {
  const [isDelete, setIsDelete] = useState(false);
  const [Exercise, setExercise] = useRecoilState(clickedExercise);
  const [isEditMode, setIsEditMode] = useState(false);
  const [mergeRoutine, setMergeRoutine] = useRecoilState(selectedRoutine);
  const setIsUpdateRoutine = useSetRecoilState(isCreateRoutine);

  const onClickOpen = async () => {
    props.onOpen(); // 부모로부터 전달받은 onOpen 콜백 함수 호출

    setIsEditMode(false);
  };
  const onClickEditRoutine = (event) => {
    setExercise([]);
    setIsEditMode((prev) => !prev);
  };
  const onClickSaveRoutine = async (routine_uid) => {
    // 변경점이 없을땐 post요청이 들어가지 않도록 조건문 걸기(예정)

    const checkReps = mergeRoutine.filter((el) => el.exercise_reps === 0 || el.exercise_reps === undefined);
    const checkSets = mergeRoutine.filter((el) => el.exercise_sets === 0 || el.exercise_sets === undefined);

    if (checkReps.length > 0 || checkSets.length > 0) {
      alert("Reps와 Sets를 모두 입력해주세요");
      return;
    }

    const payload = {
      routine_uid: routine_uid,
      routine_exercise: mergeRoutine,
    };
    await api.post("/routine/update_routine", payload).then(() => {
      setMergeRoutine([]); // merge초기화
      setExercise([]);
      setIsEditMode((prev) => !prev);
      setIsUpdateRoutine((prev) => !prev);
    });
  };

  return (
    <List component="div">
      <CheckDeleteRoutine setIsOpen={setIsDelete} isOpen={isDelete} deleteRoutine={props.deleteRoutine} el={props.el} />
      <ListItemButton>
        <ListItemText primary={props.el.routine_title} sx={{ minWidth: "200px", display: "flex", justifyContent: "flex-start", alignItems: "center" }} />
        {props.isOpen ? (
          isEditMode ? (
            <IconButton edge="end" sx={{ marginRight: "5px" }} onClick={() => onClickSaveRoutine(props.el._id)}>
              <CheckIcon />
            </IconButton>
          ) : (
            <IconButton edge="end" sx={{ marginRight: "5px" }} onClick={onClickEditRoutine}>
              <EditIcon />
            </IconButton>
          )
        ) : (
          <div></div>
        )}
        <IconButton edge="end" sx={{ marginRight: "5px" }} onClick={() => setIsDelete(true)}>
          <DeleteIcon />
        </IconButton>
        <IconButton edge="end" onClick={onClickOpen}>
          {props.isOpen ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </ListItemButton>
      <Collapse key={props.el._id} in={props.isOpen} timeout="auto" unmountOnExit>
        <RoutineTable Exercise={Exercise} isEditMode={isEditMode} routine={props.el}></RoutineTable>
      </Collapse>
    </List>
  );
}
