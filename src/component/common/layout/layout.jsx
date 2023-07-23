import Navigation from "./nav";
import "../../../style/layout.css";

export default function Layout(props) {
  // 현재 path정보를 저장하는 변수
  const currentUrl = window.location.pathname;
  // path정보에 따라 layout을 숨겨주는 배열
  const hiddenLayout = ["/"];
  return (
    <div className="body_wrapper">
      {!hiddenLayout.includes(currentUrl) ? <Navigation /> : <span></span>}
      {props.children}
    </div>
  );
}
