import * as S from "../../../style/components/util/buttons/loginBtn.module";

export default function LoginBtn(props) {
  return (
    <S.LoginBtn type="button" onClick={props.onClickLogin}>
      로그인
    </S.LoginBtn>
  );
}
