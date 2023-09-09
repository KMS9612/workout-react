import ExerciseForm from "../component/common/routine/exerciseForm";
import ExerciseList from "../component/common/routine/exerciseList";
import RoutineForm from "../component/common/routine/routineForm";
import * as S from "../style/page/routine.module";

export default function ExercisePage() {
  return (
    <S.RoutineLayout>
      <S.Component_grid container>
        <S.Exercise_grid item xs={6}>
          <ExerciseForm iswidget={false} />
        </S.Exercise_grid>
        <S.Routine_grid item xs={6}>
          <RoutineForm />
        </S.Routine_grid>
      </S.Component_grid>
      <S.Component_grid>
        <ExerciseList />
      </S.Component_grid>
    </S.RoutineLayout>
  );
}
