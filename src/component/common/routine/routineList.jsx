import DeleteIcon from "@mui/icons-material/Delete";
import { List, ListSubheader, Skeleton, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import api from "../../../axios/axiosInstance";
import { useRecoilState } from "recoil";
import { isCreateRoutine } from "../../../store/routine";
import ErrorDialog from "../../util/modals/error_dialog";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../control/ITEM_TYPE";
import RoutineListDetail from "./routineListDetail";

export default function RoutineList(props) {
  const [routineList, setRoutineList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [err_msg, setErr_msg] = useState("");
  const [isUpdate, setIsUpdateRoutine] = useRecoilState(isCreateRoutine);
  const [openRoutineId, setOpenRoutineId] = useState(null);
  const noref = useRef();

  const handleOpenTable = (id) => {
    if (openRoutineId === id) {
      setOpenRoutineId(null);
    } else {
      setOpenRoutineId(id);
    }
  };

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
    <List
      ref={props.iswidget ? drag : noref}
      sx={{
        border: "1px solid #ff8375",
        borderRadius: "5px",
        width: props.iswidget ? 400 : "100%",
        height: props.iswidget ? 300 : "100%",
        overflowX: "hidden",
        position: props.iswidget ? "absolute" : "block",
        left,
        top,
        cursor: props.iswidget ? "move" : "default",
      }}
      subheader={
        <ListSubheader component="div" sx={{ backgroundColor: "#ff8375", display: "flex", alignItems: "center" }}>
          Routine List
          <DeleteIcon onClick={deleteAllRoutine} sx={{ cursor: "pointer" }} />
        </ListSubheader>
      }>
      {/* Dialog 시작 */}
      <ErrorDialog setIsOpen={setIsError} isOpen={isError} err_msg={err_msg} />
      {/* Dialog 종료 */}

      {routineList.length > 0 ? (
        routineList.map((el) => <RoutineListDetail key={el._id} el={el} deleteRoutine={deleteRoutine} isOpen={el._id === openRoutineId} onOpen={() => handleOpenTable(el._id)} isTimer={props.isTimer} />)
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
