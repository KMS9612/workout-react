import axios from "axios";
import { useState } from "react";
import * as S from "../../../style/components/common/signupForm/signupForm.module";
import { useNavigate } from "react-router";
import { TextField } from "@mui/material";

export default function SignupForm() {
  const [EMAIL_DATA, setEMAIL_DATA] = useState("");
  const [PASSWORD_DATA, setPASSWORD_DATA] = useState("");
  const [PASSWORD_CHECK, setPASSWORD_CHECK] = useState("");
  const [USER_NAME, setUSER_NAME] = useState("");
  const [isMatch, setIsMatch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useNavigate();

  const onClickRegister = async () => {
    let check = checkPasswordMatch(PASSWORD_DATA, PASSWORD_CHECK);
    if (!check || !EMAIL_DATA || !PASSWORD_DATA || !EMAIL_DATA) {
      setIsMatch(true);
      return;
    }
    await axios({
      method: "post",
      url: "https://workout-back-3e9090b4fd41.herokuapp.com/CREATE_USER",
      data: {
        email: EMAIL_DATA,
        password: PASSWORD_DATA,
        username: USER_NAME,
      },
    })
      .then((res) => {
        console.log(res.data);
        router("/");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const checkPasswordMatch = (pw, pw_check) => {
    if (pw === pw_check) {
      setIsMatch(false);
      return true;
    } else {
      setIsMatch(true);
      return false;
    }
  };

  const onClickMoveBack = () => {
    router("/");
  };
  return (
    <S.SignUpForm component="form">
      {/* 웨이브 bg 시작 */}
      <S.Left_SignUp>
        <S.LoadingContainer>
          <S.LoadingText>Workout</S.LoadingText>
          <S.LoadingWave />
        </S.LoadingContainer>
      </S.Left_SignUp>
      {/* 웨이브 bg 종료 */}

      {/* 로그인 폼 시작 */}
      <S.Right_SignUp>
        <S.SignUpFormHeader>회원가입</S.SignUpFormHeader>
        <S.InputStack spacing={2}>
          <TextField label="Name" onChange={(e) => setUSER_NAME(e.target.value)} type="text" />
          <TextField label="Email" onChange={(e) => setEMAIL_DATA(e.target.value)} type="email" />
          <TextField label="Password" error={isMatch} helperText="비밀번호가 일치하지 않습니다." onChange={(e) => setPASSWORD_DATA(e.target.value)} type="password" />
          <TextField label="Password Check" error={isMatch} helperText="비밀번호가 일치하지 않습니다." onChange={(e) => setPASSWORD_CHECK(e.target.value)} type="password" />
          <S.BtnStack spacing={2}>
            <S.SignUpBtn loading={isLoading} variant="contained" onClick={onClickRegister}>
              회원가입
            </S.SignUpBtn>
            <S.SignUpBtn type="button" variant="outlined" onClick={onClickMoveBack}>
              취소
            </S.SignUpBtn>
          </S.BtnStack>
        </S.InputStack>
      </S.Right_SignUp>
      {/* 로그인 폼 종료 */}
    </S.SignUpForm>
  );
}
