import * as S from "../style/page/dashboard.module";
import DashBoardBox from "../component/util/box/dashboardBox";
import { useEffect, useState } from "react";
import WelcomeDialog from "../component/util/modals/welcome_dialog";

export default function DashBoard() {
  const [isFirst, setIsFirst] = useState(true);
  const Dummy = [{ exercise_name: "데드리프트" }, { exercise_name: "벤치프레스" }];
  const Routine = [{ routine_name: "등" }, { routine_name: "가슴" }];

  useEffect(() => {}, []);

  return (
    <S.DBoardWrapper>
      <WelcomeDialog isOpen={isFirst} setIsFirst={setIsFirst} />
      <DashBoardBox title={"운동"} contents_map={Dummy}></DashBoardBox>
      <DashBoardBox title={"루틴"} contents_map={Dummy}></DashBoardBox>
    </S.DBoardWrapper>
  );
}
