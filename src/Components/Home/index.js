import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  console.log(navigate);
  const handleSubmit = () => {
    navigate("/success");
  };
  return (
    <div>
      <h4> Home </h4>
      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
}
