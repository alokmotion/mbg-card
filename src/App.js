import Contact from './components/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ContactUs from './components/ContactUs';
import AbhinavvDubeyy from './components/AbhinavvDubeyy';
import ComparePlans from './components/ComparePlans';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/AbhinavvDubeyy" element={<AbhinavvDubeyy/>} />
        <Route path="/compare_plans" element={<ComparePlans/>} />
        

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
