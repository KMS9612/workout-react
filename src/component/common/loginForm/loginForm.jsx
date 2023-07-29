import * as S from "../../../style/components/common/loginForm/loginForm.module.js";
import { DefaultLink } from "../../../style/components/util/Link/defaultLink.module.js";
import LoginBtn from "../../util/buttons/loginBtn";
import SignupBtn from "../../util/buttons/signupBtn";
import FormInput from "../../util/inputs/formInput";

export default function LoginForm() {
  return (
    <S.LoginForm>
      <S.LoginFormHeader>Work Out 로그인</S.LoginFormHeader>
      {/* <LoginInput isEmail={isEmail} checkEmail={checkEmail} /> */}
      <FormInput type="email" PH="아이디를 입력해 주세요" />
      <FormInput type="password" PH="비밀번호를 입력해 주세요" />
      <DefaultLink width="100%" to="/routine">
        <LoginBtn />
      </DefaultLink>
      <DefaultLink width="100%" to="/signup">
        <SignupBtn />
      </DefaultLink>
      <div>아이디 찾기 자리 / 비밀번호 찾기 자리</div>
      <div>-or-</div>
      <div>Naver / Kakao 로그인 자리</div>
    </S.LoginForm>
  );
}
