import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, IconButton, List, ListItemButton, ListItemText, ListSubheader, Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../../axios/axiosInstance";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isCreateRoutine } from "../../../store/routine";
import ErrorDialog from "../../util/modals/error_dialog";

export default function RoutineList() {
  const [routineList, setRoutineList] = useState([]);
  const [isUpdate, setIsUpdateRoutine] = useRecoilState(isCreateRoutine);
  const [isError, setIsError] = useState(false);
  const [err_msg, setErr_msg] = useState("");

  const getRoutineData = async () => {
    await api
      .get("/routine/fetch_routines")
      .then((res) => {
        setRoutineList(res.data.user_routine.routine);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRoutineData();
  }, [isUpdate]);

  const onClickFetchRoutine = async (el) => {
    const payload = { routine_title: el.routine_title };
    await api.get("/routine/fetch_routine", { params: payload });
  };

  const deleteAllRoutine = async () => {
    await api
      .delete("/routine/delete_routines")
      .then(() => {
        setIsUpdateRoutine((prev) => !prev);
      })
      .catch((err) => {
        setIsError(true);
        setErr_msg(err.response.data.message);
      });
  };

  const deleteRoutine = async (el) => {
    const payload = {
      routine_title: el.routine_title,
    };
    await api
      .delete("/routine/delete_routine_by_name", { params: payload })
      .then((res) => {
        setIsUpdateRoutine((prev) => !prev);
      })
      .catch((err) => {
        setIsError(true);
        setErr_msg(err.response.data.message);
      });
  };

  return (
    <List
      sx={{ border: "1px solid #ff8375", borderRadius: "5px", width: "100%", height: "100%", overflow: "auto" }}
      subheader={
        <ListSubheader component="div" sx={{ backgroundColor: "#ff8375" }}>
          Routine List
          <DeleteIcon onClick={deleteAllRoutine} />
        </ListSubheader>
      }>
      <ErrorDialog setIsOpen={setIsError} isOpen={isError} err_msg={err_msg} />
      {routineList.length > 0 ? (
        routineList.map((el) => (
          <List component="div" onClick={() => onClickFetchRoutine(el)}>
            <ListItemButton>
              <ListItemText primary={el.routine_title} sx={{ minWidth: "200px", display: "flex", justifyContent: "flex-start", alignItems: "center" }} />
              <IconButton edge="end" sx={{ marginRight: "5px" }}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={() => deleteRoutine(el)} />
              </IconButton>
            </ListItemButton>
          </List>
        ))
      ) : (
        <Stack spacing={2}>
          <Skeleton sx={{ width: "100%", height: "50px" }} variant="text" />
          <Skeleton sx={{ width: "100%", height: "50px" }} variant="rounded" />
          <Skeleton sx={{ width: "100%", height: "50px" }} variant="rounded" />
          <Skeleton sx={{ width: "100%", height: "50px" }} variant="rounded" />
        </Stack>
      )}
    </List>
  );
}
