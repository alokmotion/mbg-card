import Contact from "./components/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AbhinavvDubeyy from "./components/AbhinavvDubeyy";
import ComparePlans from "./components/ComparePlans";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/AbhinavvDubeyy" element={<AbhinavvDubeyy />} />
        <Route path="/compare_plans" element={<ComparePlans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
