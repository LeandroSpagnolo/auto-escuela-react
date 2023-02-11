import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Teoria from "./pages/Teoria";
import Prueba from "./pages/Prueba";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Teoria" element={<Teoria />} />
        <Route path="/Prueba" element={<Prueba />} />
      </Routes>
    </div>
  );
}

export default App;