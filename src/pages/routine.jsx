import { Grid } from "@mui/material";
import RoutineForm from "../component/common/routine/routineForm";
import RoutineList from "../component/common/routine/routineList";
import styled from "@emotion/styled";
import ExerciseList from "../component/common/routine/exerciseList";

const Wrapper = styled(Grid)`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function RoutinePage() {
  return (
    <Wrapper container spacing={1} padding={1}>
      {/* Left Grid */}
      <Grid item xs={4} direction={"column"}>
        <Grid item paddingBottom={1}>
          <RoutineForm />
        </Grid>
        <Grid item>
          <ExerciseList />
        </Grid>
      </Grid>
      {/* Right Grid */}
      <Grid item xs={8}>
        <Grid item>
          <RoutineList />
        </Grid>
      </Grid>
    </Wrapper>
  );
}
