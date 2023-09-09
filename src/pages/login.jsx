import { useEffect } from "react";
import LoginForm from "../component/common/loginForm/loginForm";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("accessToken");
    if (isLogin) {
      navigate("/dashboard");
    }
  });
  return <LoginForm />;
}
