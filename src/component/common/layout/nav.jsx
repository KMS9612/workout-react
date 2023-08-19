import * as S from "../../../style/components/common/layout/nav.module.js";
import NavButton from "../../util/buttons/navbtn";
import { DefaultLink } from "../../../style/components/util/Link/defaultLink.module.js";

export default function Navigation() {
  const navItems = [
    { to: "/routine", buttonName: "루틴관리", width: "100%", pBottom: "0" },
    { to: "/dice", buttonName: "주사위", width: "100%", pBottom: "0" },
    { to: "/community", buttonName: "커뮤니티", width: "100%", pBottom: "0" },
    { to: "/dummy", buttonName: "더미데이터", width: "100%", pBottom: "0" },
    { to: "/dummy", buttonName: "더미데이터", width: "100%", pBottom: "0" },
    { to: "/dummy", buttonName: "더미데이터", width: "100%", pBottom: "0" },
    { to: "/dummy", buttonName: "더미데이터", width: "100%", pBottom: "0" },
    { to: "/dummy", buttonName: "더미데이터", width: "100%", pBottom: "0" },
  ];
  return (
    <S.NavWrapper>
      <div style={{ marginBottom: "50px" }}>
        <DefaultLink height="50px" to="/">
          <S.Header1>Workout</S.Header1>
        </DefaultLink>
      </div>
      <S.ItemWrap>
        {navItems.map((el, index) => (
          <DefaultLink
            key={`${el.buttonName}-${new Date().getTime()}-${index}`}
            width={el.width}
            pBottom={el.pBottom}
            to={el.to}
          >
            <NavButton buttonName={el.buttonName}></NavButton>
          </DefaultLink>
        ))}
      </S.ItemWrap>
    </S.NavWrapper>
  );
}
