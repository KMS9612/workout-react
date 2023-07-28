import * as S from "../../../style/components/common/loginForm/loginForm.module.js";
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
      <S.DefaultLink to="/routine">
        <LoginBtn />
      </S.DefaultLink>
      <S.DefaultLink to="/signup">
        <SignupBtn />
      </S.DefaultLink>
    </S.LoginForm>
  );
}
