import { Link } from "react-router-dom";
import "../../../style/nav.css";
import NavButton from "../../util/buttons/navbtn";

export default function Navigation() {
  return (
    <div className="nav_wrapper">
      <Link className="button_wrapper" to="/routine">
        <NavButton buttonName="루틴관리"></NavButton>
      </Link>
      <Link className="button_wrapper" to="/dice">
        <NavButton buttonName="운동주사위"></NavButton>
      </Link>
    </div>
  );
}
