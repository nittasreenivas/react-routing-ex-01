import { useNavigate } from "react-router-dom";
export default function Success() {
  const navigate = useNavigate();
  console.log(navigate);
  const backToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h3> Succesfully completed </h3>
      <button onClick={backToHome}> home </button>
    </div>
  );
}
