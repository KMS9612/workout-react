import * as S from "../style/page/dashboard.module";
import DashBoardBox from "../component/util/box/dashboardBox";

export default function DashBoard() {
  const Dummy = [
    { exercise_name: "데드리프트" },
    { exercise_name: "벤치프레스" },
  ];
  const Routine = [{ routine_name: "등" }, { routine_name: "가슴" }];
  return (
    <S.DBoardWrapper>
      <DashBoardBox title={"운동"} contents_map={Dummy}></DashBoardBox>
      <DashBoardBox title={"루틴"} contents_map={Dummy}></DashBoardBox>
    </S.DBoardWrapper>
  );
}
