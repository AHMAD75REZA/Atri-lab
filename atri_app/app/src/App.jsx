import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import HomeHtml from "./pages/Home.html.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/home.html" element={<HomeHtml />} />
    </Routes>
  );
}
