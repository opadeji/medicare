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
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import DrDashboardLayout from "./pages/DrDashboardLayout";
import Overview from "./pages/Overview";
import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import Results from "./pages/Results";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./Components/Reusable/ThemeContext";

const AppContent = () => {
  const location = useLocation();

  const hideHeaderAndFooterPaths = [
    "/login",
    "/signup",
    "/forgotpassword",
    "/resetpassword",
    "/dashboard",
  ];

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
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/dashboard" element={<DrDashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="appointment" element={<Appointments />} />
          <Route path="patients" element={<Patients />} />
          <Route path="results" element={<Results />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      {!shouldHide && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
