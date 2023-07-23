import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [EMAIL_DATA, setEMAIL_DATA] = useState("");
  const [PASSWORD_DATA, setPASSWORD_DATA] = useState("");
  const [isMatch, setIsMatch] = useState();

  const onClickCofirmSignup = async () => {
    await axios({
      method: "post",
      url: "http://localhost:8080/CREATE_USER",
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
    } else if (status === "password") {
      setPASSWORD_DATA(targetValue);
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

  return (
    <div className="">
      <form action="">
        <input placeholder="이메일" type="email" data-status="email" onChange={onChangeSaveValue} />
        <input
          placeholder="비밀번호"
          type="password"
          data-status="password"
          onChange={onChangeSaveValue}
        />
        <input
          placeholder="비밀번호 재확인"
          type="password"
          data-status="password_match"
          onChange={checkPasswordMatch}
        />
        <button
          type="button"
          className="confirm_signup"
          onClick={onClickCofirmSignup}
          disabled={!isMatch}>
          확인
        </button>
      </form>
    </div>
  );
}
