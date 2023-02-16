import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Teoria from "./components/Teoria";
import Prueba from "./components/Prueba";


function App() {
  return (
    <div>
      <NavBar />
      <div class="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Teoria" element={<Teoria />} />
          <Route path="/Prueba" element={<Prueba />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;