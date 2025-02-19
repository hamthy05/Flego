import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import FuturePlans from "./pages/FuturePlans";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <StrictMode>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/future-plans" element={<FuturePlans />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </StrictMode>
    </div>
  );
}

export default App;

// This Ui template
// but give the modify and animation and visual and correct color and responsive website and other pages are modified and used tailwind css
