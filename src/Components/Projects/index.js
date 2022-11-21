import { Link, Outlet } from "react-router-dom";
import "./index.css";
export default function Projects() {
  return (
    <div>
      <h3> Projects </h3>
      <div>
        <ul className="each-project">
          <Link to="/projects/new">
            <li> New Projects</li>
          </Link>
          <Link to="/projects/featured">
            <li> Featured Projects</li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
