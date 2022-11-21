import "./style.css";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <NavLink to="/">
          <li> Home </li>
        </NavLink>
        <NavLink to="/about">
          <li> About </li>
        </NavLink>
        <NavLink to="/success">
          <li> success </li>
        </NavLink>
        <NavLink to="/projects">
          <li> Projects </li>
        </NavLink>
        <NavLink to="/users">
          <li> Users </li>
        </NavLink>
        <NavLink to="/signin">
          <li> Signin </li>
        </NavLink>
      </ul>
    </div>
  );
}
