import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Static/Header";
import Footer from "./Static/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
