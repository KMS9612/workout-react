import ExerciseForm from "../component/common/routine/exerciseForm";
import ExerciseList from "../component/common/routine/exerciseList";
import * as S from "../style/page/routine.module";

export default function ExercisePage() {
  return (
    <S.RoutineLayout container spacing={4}>
      <S.Component_grid item xs={4}>
        <ExerciseForm iswidget={false} />
      </S.Component_grid>
      <S.Component_grid item xs={8}>
        <ExerciseList />
      </S.Component_grid>
    </S.RoutineLayout>
  );
}
