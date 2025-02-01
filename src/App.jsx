import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<Landing />} />
        <Route path="/contact" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
