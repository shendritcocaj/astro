import Staff from "./components/Staff/Staff";
import OurPartners from "./components/OurPartners/OurPartners";
import Hero from "./components/Hero/Hero";
import MainQuizzPage from "./components/Quiz/MainQuizzPage";

import { Routes, Route, useLocation } from "react-router-dom";
import Donate from "./components/Donate/Donate";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="staff" element={<Staff />} />
      <Route path="Partners" element={<OurPartners />} />
      <Route path="Donate" element={<Donate />} />
      <Route path="Quiz" element={<MainQuizzPage />} />
    </Routes>
  );
}

export default App;
