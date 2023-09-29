import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, List, ListItemButton, ListItemText, ListSubheader, Skeleton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../../axios/axiosInstance";

export default function RoutineList() {
  const [routineList, setRoutineList] = useState([]);

  const getRoutineData = async () => {
    try {
      const res = await api.get("/routine/fetch_routine");
      setRoutineList(res.data.user_routine.routine);
    } catch (err) {
      console.log(err, "exerciseList 요청에러");
    }
  };

  useEffect(() => {
    getRoutineData();
  }, []);
  console.log(routineList);

  return (
    <List
      sx={{ border: "1px solid #ff8375", borderRadius: "5px", width: "100%", height: "100%", overflow: "auto" }}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{ backgroundColor: "#ff8375" }}>
          Routine List
        </ListSubheader>
      }>
      {routineList ? (
        routineList.map((el) => (
          <List component="div">
            <ListItemButton>
              <ListItemText primary={el.routine_title} sx={{ minWidth: "200px", display: "flex", justifyContent: "flex-start", alignItems: "center" }} />
              <IconButton edge="end" sx={{ marginRight: "5px" }}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
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
