import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import ISO27001 from "./pages/services/ISO27001.jsx";
import TISAX from "./pages/services/TISAX.jsx";
import TrainingDetail from "./pages/TrainingDetail.jsx";
import IsoTrainingDetail from "./pages/IsoTrainingDetail.jsx";
import InfoPageDetail from "./pages/InfoPageDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
// import TrainingPortal from "./pages/TrainingPortal.jsx";
// import TrainingLogin from "@/pages/TrainingLogin.jsx";
// import AdminTraining from "@/pages/AdminTraining.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/iso-27001" element={<ISO27001 />}/>
        <Route path="/services/tisax" element={<TISAX />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/training/:slug" element={<TrainingDetail />} />
        <Route path="/iso-training/:slug" element={<IsoTrainingDetail />} />
        <Route path="/info/:slug" element={<InfoPageDetail />} />
        <Route path="/course/:slug" element={<CourseDetail />} />
        {/* <Route path="/training" element={<TrainingPortal />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/training-login" element={<TrainingLogin />} />
        <Route path="/admin-training" element={<AdminTraining />} /> */}

      </Routes>
    </>
  );
}
