
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import "./components/register.module.css"
function App() {
  return <Router>
    <div></div>
    <Navbar />
    <Header />


    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  </Router>

}
export default App;
