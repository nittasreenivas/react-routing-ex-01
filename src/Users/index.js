import { Link } from "react-router-dom";
import "./index.css";
import user from "./user";
export default function Users() {
  return (
    <div>
      <h2> Users information</h2>
      <div className="user-container">
        {user.map((info) => {
          const { id, name, username } = info;
          return (
            <div key={id} className="each-user">
              <Link to={`/user/${id}`} state={info}>
                <h3> {name} </h3>
                <h4> {username} </h4>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
