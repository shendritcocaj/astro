import Staff from "./components/Staff/Staff";
import OurPartners from "./components/OurPartners/OurPartners";
import Hero from "./components/Hero/Hero";

import { Routes, Route } from "react-router-dom";
import Donate from "./components/Donate/Donate";
// import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="staff" element={<Staff />} />
      <Route path="Partners" element={<OurPartners />} />
      <Route path="Donate" element={<Donate />} />
    </Routes>
  );
}

export default App;
