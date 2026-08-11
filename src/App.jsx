import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
// import ServiceDetail from "./pages/ServiceDetail.jsx";
import ISO27001 from "./pages/services/ISO27001.jsx";
import TISAX from "./pages/services/TISAX.jsx";
import ISO14001 from "./pages/services/ISO14001";
import ISO9001 from "./pages/services/ISO9001";
import ISO45001 from "./pages/services/ISO45001";
import IATF16949 from "./pages/services/IATF16949";
import ISO50001 from "./pages/services/ISO50001";
import DPDP from "./pages/services/DPDP";
import SOCConsulting from "@/pages/info/SOCConsulting";
import VAPT from "@/pages/info/VAPT";
import WebPenetrationTesting from "@/pages/info/WebPenetrationTesting";
import MobileAppPenetrationTesting from "@/pages/info/MobileAppPenetrationTesting";
import NetworkPenetrationTesting from "@/pages/info/NetworkPenetrationTesting";
import TrainingDetail from "./pages/TrainingDetail.jsx";
import IsoTrainingDetail from "./pages/IsoTrainingDetail.jsx";
// import InfoPageDetail from "./pages/InfoPageDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import GDPR from "@/pages/info/GDPR";
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
        <Route path="/services/iso-14001" element={<ISO14001 />} />
        <Route path="/services/iso-9001" element={<ISO9001 />} />
        <Route path="/services/iso-45001" element={<ISO45001 />} />
        <Route path="/services/iatf-16949" element={<IATF16949 />} />
        <Route path="/services/iso-50001" element={<ISO50001 />} />
        {/* <Route path="/services/dpdpp" element={<DPDP />} /> */}
       <Route path="/services/dpdp" element={<DPDP />} />
        <Route path="/info/vapt" element={<VAPT />} />
        <Route path="/info/mobile-pentest" element={<MobileAppPenetrationTesting />}/>
        <Route path="/info/web-pentest" element={<WebPenetrationTesting />}/>
        <Route path="/info/network-pentest" element={<NetworkPenetrationTesting />}/>
        {/* <Route path="/services/:slug" element={<ServiceDetail />} /> */}
        <Route path="/training/:slug" element={<TrainingDetail />} />
        <Route path="/iso-training/:slug" element={<IsoTrainingDetail />} />
        {/* <Route path="/info/:slug" element={<InfoPageDetail />} /> */}
        <Route path="/info/gdpr" element={<GDPR />} />
        <Route path="/info/soc-consulting" element={<SOCConsulting />} />
        <Route path="/course/:slug" element={<CourseDetail />} />
        {/* <Route path="/info/gdpr" element={<GDPR />} /> */}
        {/* <Route path="/training" element={<TrainingPortal />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/training-login" element={<TrainingLogin />} />
        <Route path="/admin-training" element={<AdminTraining />} /> */}

      </Routes>
    </>
  );
}
