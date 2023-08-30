import ExerciseForm from "../component/common/routine/exerciseForm";
import RoutineForm from "../component/common/routine/routineForm";
import * as S from "../style/page/routine.module";

export default function RoutinePage() {
  return (
    <S.RoutineLayout>
      <S.Component_grid container>
        <S.Exercise_grid item xs={6}>
          <ExerciseForm />
        </S.Exercise_grid>
        <S.Routine_grid item xs={6}>
          <RoutineForm />
        </S.Routine_grid>
      </S.Component_grid>
    </S.RoutineLayout>
  );
}
