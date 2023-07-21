import "../../../style/nav.css";
import NavButton from "../../util/buttons/navbtn";
export default function Navigation() {
  return (
    <div className="nav-wrapper">
      <ul className="navWrap">
        <li className="nav" data-route="/routine">
          <NavButton buttonName="Routine" />
        </li>
        <li className="nav">
          <NavButton buttonName="Dice" />
        </li>
        <li className="nav">
          <NavButton buttonName="Community" />
        </li>
        <li className="nav">
          <NavButton buttonName="Market" />
        </li>
      </ul>
    </div>
  );
}
