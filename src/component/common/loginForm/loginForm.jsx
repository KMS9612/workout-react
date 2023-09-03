import axios from "axios";
import * as S from "../../../style/components/common/loginForm/loginForm.module.js";
import FormInput from "../../util/inputs/formInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAlert from "../../util/modals/login_alert.jsx";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const loginFailMessage = "로그인에 실패했습니다.";

  const handleModal = (isOpen, title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setButtonLoading(false);

    if (isOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };
  const router = useNavigate();

  const onClickLogin = async () => {
    if (!email || !password) {
      handleModal(true, loginFailMessage, "이메일, 비밀번호를 입력해주세요.");
      return;
    }
    setButtonLoading(true);
    await axios({
      method: "post",
      url: "http://localhost:8080/login",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        handleModal(true, "로그인에 성공했습니다", "Workout!");
        const userData = res.data;
        localStorage.setItem(
          "workoutToken",
          JSON.stringify(res.data.accessToken)
        );
        localStorage.setItem(
          "workoutRefreshToken",
          JSON.stringify(res.data.refreshToken)
        );
        localStorage.setItem("user_data", JSON.stringify(userData));
        router("/dashboard");
      })
      .catch((res) => {
        handleModal(true, loginFailMessage, res.response.data.message);
      });
  };

  const onClickRoute = () => {
    router("/signup");
  };

  return (
    <S.LoginForm>
      {/* Modal */}
      <LoginAlert
        modalOpen={modalOpen}
        handleModal={handleModal}
        modalTitle={modalTitle}
        modalMessage={modalMessage}
      />
      {/* Modal 종료 */}
      {/* 웨이브 bg 시작 */}
      <S.Left_login>
        <S.LoadingContainer>
          <S.LoadingText>Workout</S.LoadingText>
          <S.LoadingWave />
        </S.LoadingContainer>
      </S.Left_login>
      {/* 웨이브 bg 종료 */}

      {/* 로그인 폼 시작 */}
      <S.Right_login>
        <S.LoginFormHeader>로그인</S.LoginFormHeader>
        {/* <LoginInput isEmail={isEmail} checkEmail={checkEmail} /> */}
        <S.InputStack spacing={4}>
          <FormInput type="email" PH="Email" setEmail={setEmail} />
          <FormInput
            type="password"
            PH="Password"
            setPassword={setPassword}
            onClickLogin={onClickLogin}
          />
        </S.InputStack>
        <S.BtnStack spacing={2}>
          <S.LoginBtn
            loading={buttonLoading}
            variant="contained"
            onClick={onClickLogin}
          >
            로그인
          </S.LoginBtn>
          <S.SignUpBtn variant="outlined" onClick={onClickRoute}>
            회원가입
          </S.SignUpBtn>
        </S.BtnStack>
      </S.Right_login>
      {/* 로그인 폼 종료 */}
    </S.LoginForm>
  );
}
