import Navigation from "./nav";
import * as S from "../../../style/components/common/layout/layout.module.js";
import { useLocation } from "react-router";
import { useState } from "react";

export default function Layout(props) {
  const [isOver, setIsOver] = useState(false);

  const location = useLocation();
  const hiddenLayout = ["/", "/signup", "/login"]; // nav를 숨기고 싶은 페이지를 배열에 추가
  const bgcLayout = ["/"]; // 흰 배경 페이지를 배열에 추가
  const isHidden = hiddenLayout.includes(location.pathname);
  const isWhite = bgcLayout.includes(location.pathname);
  const onMouseEnter = () => {
    setIsOver(true);
  };
  const onMouseLeave = () => {
    setIsOver(false);
  };
  return (
    <S.BodyWrapper isWhite={isWhite}>
      {!isHidden && (
        <S.NavWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Navigation isOver={isOver} onMouseLeave={onMouseLeave} />
        </S.NavWrapper>
      )}
      {props.children}
    </S.BodyWrapper>
  );
}
