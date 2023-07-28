import { Link } from "react-router-dom";
import * as S from "../../../style/components/common/layout/nav.module.js";
import NavButton from "../../util/buttons/navbtn";

export default function Navigation() {
  return (
    <S.NavWrapper>
      <h1>Workout</h1>
      <Link className="button_wrapper" to="/routine">
        <NavButton buttonName="루틴관리"></NavButton>
      </Link>
      <Link className="button_wrapper" to="/dice">
        <NavButton buttonName="운동주사위"></NavButton>
      </Link>
    </S.NavWrapper>
  );
}
