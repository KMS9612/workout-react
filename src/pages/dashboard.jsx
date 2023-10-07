import * as S from "../style/page/dashboard.module";
import DashBoardBox from "../component/util/box/dashboardBox";
import { useEffect, useState } from "react";
import WelcomeDialog from "../component/util/modals/welcome_dialog";
import { Typography } from "@mui/material";

export default function DashBoard() {
  const [isFirst, setIsFirst] = useState(true);
  const Dummy = [{ exercise_name: "데드리프트" }, { exercise_name: "벤치프레스" }];
  const Routine = [{ routine_name: "등" }, { routine_name: "가슴" }];

  useEffect(() => {}, []);

  return (
    <S.DBoardWrapper>
      <WelcomeDialog isOpen={isFirst} setIsFirst={setIsFirst} />
      <Typography variant="h3" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90%", color: "#ccc", textAlign: "center" }}>
        DashBoard Page <br />
        화면 상단의 Top,Bottom,Left,Right버튼을 눌러주세요
      </Typography>
    </S.DBoardWrapper>
  );
}
