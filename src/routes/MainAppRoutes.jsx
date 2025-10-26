import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "../Pages/Front";
import About from "../Pages/About";

export default function MainAppRoutes () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/whoami" element={<About />} />
      </Routes>
    </Router>
  );
}
