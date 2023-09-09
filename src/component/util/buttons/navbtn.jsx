import * as S from "../../../style/components/util/buttons/navbtn.module.js";

export default function NavButton(props) {
  return <S.NavBtn onClick={props.onClick}>{props.buttonName}</S.NavBtn>;
}
