import { Grid } from "@mui/material";
import TimerBox from "../component/common/timer/timerBox";
import RoutineList from "../component/common/routine/routineList";

export default function DicePage() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
      spacing={2}>
      <Grid item md={6} sm={12} xs={12}>
        <TimerBox />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <RoutineList isTimer={true} />
      </Grid>
    </Grid>
  );
}
