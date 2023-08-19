import axios from "axios";
import * as S from "../../../style/components/common/loginForm/loginForm.module.js";
import LoginBtn from "../../util/buttons/loginBtn";
import SignupBtn from "../../util/buttons/signupBtn";
import FormInput from "../../util/inputs/formInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();

  const onClickLogin = async () => {
    console.log(email, password);
    await axios({
      method: "post",
      url: "http://localhost:8080/login",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res.data.message);
        localStorage.setItem("workoutToken", JSON.stringify(res.data.accessToken));
        router("/dashboard");
      })
      .catch((res) => {
        console.log(res.data.message);
      });
  };
  return (
    <S.LoginForm>
      <S.LoginFormHeader>Work Out 로그인</S.LoginFormHeader>
      {/* <LoginInput isEmail={isEmail} checkEmail={checkEmail} /> */}
      <FormInput type="email" PH="아이디를 입력해 주세요" setEmail={setEmail} />
      <FormInput type="password" PH="비밀번호를 입력해 주세요" setPassword={setPassword} />
      <LoginBtn onClickLogin={onClickLogin} />
      <SignupBtn />
      <div>아이디 찾기 자리 / 비밀번호 찾기 자리</div>
      <div>-or-</div>
      <div>Naver / Kakao 로그인 자리</div>
    </S.LoginForm>
  );
}
