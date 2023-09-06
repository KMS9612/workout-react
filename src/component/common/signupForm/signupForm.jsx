import axios from "axios";
import { useState } from "react";
import * as S from "../../../style/components/common/signupForm/signupForm.module";
import FormInput from "../../util/inputs/formInput";
import { useNavigate } from "react-router";

export default function SignupForm() {
  const [EMAIL_DATA, setEMAIL_DATA] = useState("");
  const [PASSWORD_DATA, setPASSWORD_DATA] = useState("");
  const [USER_NAME, setUSER_NAME] = useState("");
  const [isMatch, setIsMatch] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const router = useNavigate();

  const onClickCofirmSignup = async () => {
    await axios({
      method: "post",
      url: "https://workout-back-3e9090b4fd41.herokuapp.com/CREATE_USER",
      data: {
        email: EMAIL_DATA,
        password: PASSWORD_DATA,
      },
    }).then((res) => {
      console.log(res.data);
    });
  };

  const onChangeSaveValue = (event) => {
    let status = event.currentTarget.dataset.status; // data-status 정보를 담는 변수
    let targetValue = event.currentTarget.value;

    if (status === "email") {
      setEMAIL_DATA(targetValue);
    }
    if (status === "password") {
      setPASSWORD_DATA(targetValue);
    }
    if (status === "name") {
      setUSER_NAME(targetValue);
    }
  };

  const checkPasswordMatch = (event) => {
    let password_match = event.currentTarget.value;
    if (!PASSWORD_DATA || PASSWORD_DATA !== password_match) {
      setIsMatch(false);
      return;
    } else if (PASSWORD_DATA === password_match) {
      setIsMatch(true);
    }
  };

  const onClickMoveBack = () => {
    router(-1);
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
        {/* <LoginInput isEmail={isEmail} checkEmail={checkEmail} /> */}
        <S.InputStack spacing={4}>
          <FormInput
            type="text"
            PH="Name"
            data-status="name"
            setPassword={setPASSWORD_DATA}
          />
          <FormInput
            type="email"
            PH="Email"
            data-status="email"
            setEmail={setEMAIL_DATA}
          />
          <FormInput
            type="password"
            PH="Password"
            data-status="password"
            setPassword={setPASSWORD_DATA}
          />
        </S.InputStack>
        <S.BtnStack spacing={2}>
          <S.SignUpBtn loading={isLoading} variant="contained">
            회원가입
          </S.SignUpBtn>
          <S.SignUpBtn
            type="button"
            variant="outlined"
            onClick={onClickMoveBack}
          >
            취소
          </S.SignUpBtn>
        </S.BtnStack>
      </S.Right_SignUp>
      {/* 로그인 폼 종료 */}
    </S.SignUpForm>
  );
}
