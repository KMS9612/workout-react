import * as S from "./buttonStyle/navbtn.module.js";

export default function NavButton(props) {
  return <S.NavBtn>{props.buttonName}</S.NavBtn>;
}
