import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Signin from "./Components/Signin";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Success from "./Components/Success";
import FeaturedProjects from "./Components/FeaturedProjects";
import NewProjects from "./Components/NewProjects";
import Users from "./Users";
import UserDetails from "./Components/UserDetails";
//import Success from "./Components/Succes";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="featured" element={<FeaturedProjects />} />
            <Route path="new" element={<NewProjects />} />
          </Route>
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
