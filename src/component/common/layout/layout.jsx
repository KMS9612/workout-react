import Navigation from "./nav";
import "../../../style/layout.css";
import { useLocation } from "react-router";

export default function Layout(props) {
  const location = useLocation();
  const hiddenLayout = ["/", "/signup", "/login"]; // nav를 숨기고 싶은 페이지를 배열에 추가
  const isHidden = hiddenLayout.includes(location.pathname);

  return (
    <div className="body_wrapper">
      {!isHidden && <Navigation />}
      {props.children}
    </div>
  );
}
