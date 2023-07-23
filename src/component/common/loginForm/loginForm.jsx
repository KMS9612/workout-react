import { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../util/inputs/loginInput";
import "../../../style/loginForm.css";

export default function LoginForm() {
  const [isEmail, setIsEmail] = useState(true);
  const checkEmail = (event) => {
    const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    let target = event.currentTarget.value;
    if (regEmail.test(target)) {
      console.log("Yes! finally");
      setIsEmail(true);
    } else {
      console.log("this is not email");
      setIsEmail(false);
    }
  };
  return (
    <form className="login_form">
      <h2>Work Out 로그인</h2>
      <LoginInput isEmail={isEmail} checkEmail={checkEmail} />
      <input type="password" placeholder="비밀번호를 입력해 주세요" />
      <Link className="default_link" to="/routine">
        <button type="button" className="login_btn">
          로그인
        </button>
      </Link>
      <Link className="default_link" to="/signup">
        <button type="button" className="signup_btn">
          회원가입
        </button>
      </Link>
    </form>
  );
}
