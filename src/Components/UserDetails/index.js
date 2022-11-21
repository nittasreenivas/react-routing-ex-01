import "./style.css";
import { useParams } from "react-router-dom";
//import Users from "../../Users";
import user from "../../Users/user";
export default function UserDetails() {
  const params = useParams();
  console.log("params", params);
  //const userData = Users.find
  const userData = user.find((eachUser) => eachUser.id == params.id);
  //const {address:{}} = userData;
  return (
    <div>
      <h2> User Details </h2>
      <div className="details-container">
        <h3> {userData.name} </h3>
        <h4> {userData.username}</h4>
        <h4> {userData.email}</h4>
        <p> {userData.address.street} </p>
        <p> {userData.address.suite} </p>
        <p> {userData.address.city} </p>
        <p> {userData.address.zipcode} </p>
      </div>
    </div>
  );
}
