import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Static/Header";
import Footer from "./Static/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Signup from "./pages/Signup";
import Scrolltotop from "./Components/Reusable/Scrolltotop";
import Login from "./pages/Login";

const AppContent = () => {
  const location = useLocation();

  const hideHeaderAndFooterPaths = ["/login", "/signup"];

  const shouldHide = hideHeaderAndFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <div>
      {!shouldHide && <Header />}
      <Scrolltotop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!shouldHide && <Footer />}
    </div>
  );
};
const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
