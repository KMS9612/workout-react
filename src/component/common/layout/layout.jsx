import Navigation from "./nav";
import * as S from "../../../style/components/common/layout/layout.module.js";
import { useLocation } from "react-router";

export default function Layout(props) {
  const location = useLocation();
  const hiddenLayout = ["/", "/signup", "/login"]; // nav를 숨기고 싶은 페이지를 배열에 추가
  const isHidden = hiddenLayout.includes(location.pathname);

  return (
    <S.BodyWrapper>
      {!isHidden && <Navigation />}
      {props.children}
    </S.BodyWrapper>
  );
}
