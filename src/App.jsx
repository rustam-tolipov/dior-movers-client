import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Moving from "./pages/services/Moving";
import Cleaning from "./pages/services/Cleaning";
import Handyman from "./pages/services/Handyman";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />}>
          <Route path="moving" element={<Moving />} />
          <Route path="cleaning" element={<Cleaning />} />
          <Route path="handyman" element={<Handyman />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
