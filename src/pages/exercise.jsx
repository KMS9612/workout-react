import ExerciseForm from "../component/common/routine/exerciseForm";
import ExerciseList from "../component/common/routine/exerciseList";
import RoutineList from "../component/common/routine/routineList";
import RoutineForm from "../component/common/routine/routineForm";
import * as S from "../style/page/routine.module";
import { Grid } from "@mui/material";

export default function ExercisePage() {
  return (
    <S.RoutineLayout container spacing={2}>
      <S.Component_grid item md={4}>
        <Grid item md={12} paddingBottom={1}>
          <ExerciseForm iswidget={false} />
        </Grid>
        <Grid item md={12}>
          <ExerciseList />
        </Grid>
      </S.Component_grid>
      <S.Component_grid item md={8}>
        <Grid item md={12} paddingBottom={1}>
          <RoutineForm iswidget={false} />
        </Grid>
        <Grid item md={12}>
          <RoutineList />
        </Grid>
      </S.Component_grid>
    </S.RoutineLayout>
  );
}
