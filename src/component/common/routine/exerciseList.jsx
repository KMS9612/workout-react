import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../../axios/axiosInstance";
import { ItemTypes } from "../control/ITEM_TYPE";
import { useDrag } from "react-dnd";

export default function ExerciseList(props) {
  const [open, setOpen] = useState(true);
  const [exerciseData, setExerciseData] = useState();
  const username = JSON.parse(localStorage.getItem("user_data")).username || "";

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
  }, []);

  const handleClick = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

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
      ref={drag}
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", left, top, cursor: "move" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Exercise List
        </ListSubheader>
      }>
      {exerciseData ? (
        exerciseData.exercise.map((el, index) => (
          <>
            <ListItemButton onClick={() => handleClick(index)}>
              <ListItemText primary={el.exercise_type} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={el.exercise_name} />
                </ListItemButton>
              </List>
            </Collapse>
          </>
        ))
      ) : (
        <div>loading</div>
      )}
    </List>
  );
}
