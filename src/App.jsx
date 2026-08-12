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
// import TrainingDetail from "./pages/TrainingDetail.jsx";
// import IsoTrainingDetail from "./pages/IsoTrainingDetail.jsx";
// import InfoPageDetail from "./pages/InfoPageDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import GDPR from "@/pages/info/GDPR";
// import TrainingPortal from "./pages/TrainingPortal.jsx";
// import TrainingLogin from "@/pages/TrainingLogin.jsx";
// import AdminTraining from "@/pages/AdminTraining.jsx";

// Lead Auditor
import ISO9001LeadAuditor from "./pages/iso-training/lead-auditor/ISO9001LeadAuditor.jsx";
import ISO27001LeadAuditor from "./pages/iso-training/lead-auditor/ISO27001LeadAuditor.jsx";
import ISO45001LeadAuditor from "./pages/iso-training/lead-auditor/ISO45001LeadAuditor.jsx";
import ISO22301LeadAuditor from "./pages/iso-training/lead-auditor/ISO22301LeadAuditor.jsx";
import ISO22000LeadAuditor from "./pages/iso-training/lead-auditor/ISO22000LeadAuditor.jsx";
import ISO14001LeadAuditor from "./pages/iso-training/lead-auditor/ISO14001LeadAuditor.jsx";
import ISO13485LeadAuditor from "./pages/iso-training/lead-auditor/ISO13485LeadAuditor.jsx";
import ISO50001LeadAuditor from "./pages/iso-training/lead-auditor/ISO50001LeadAuditor.jsx";
import ISO17025LeadAuditor from "./pages/iso-training/lead-auditor/ISO17025LeadAuditor.jsx";
import ISO15189LeadAuditor from "./pages/iso-training/lead-auditor/ISO15189LeadAuditor.jsx";
import FSSC22000LeadAuditor from "./pages/iso-training/lead-auditor/FSSC22000LeadAuditor.jsx";

// Internal Auditor
import ISO13485InternalAuditor from "./pages/iso-training/internal-auditor/ISO13485InternalAuditor.jsx";
import ISO14001InternalAuditor from "./pages/iso-training/internal-auditor/ISO14001InternalAuditor.jsx";
import ISO27001InternalAuditor from "./pages/iso-training/internal-auditor/ISO27001InternalAuditor.jsx";
import ISO50001InternalAuditor from "./pages/iso-training/internal-auditor/ISO50001InternalAuditor.jsx";
import ISO45001InternalAuditor from "./pages/iso-training/internal-auditor/ISO45001InternalAuditor.jsx";
import ISO9001InternalAuditor from "./pages/iso-training/internal-auditor/ISO9001InternalAuditor.jsx";
import ISO22000InternalAuditor from "./pages/iso-training/internal-auditor/ISO22000InternalAuditor.jsx";
import ISO22301InternalAuditor from "./pages/iso-training/internal-auditor/ISO22301InternalAuditor.jsx";
import ISO17025InternalAuditor from "./pages/iso-training/internal-auditor/ISO17025InternalAuditor.jsx";
import ISO15189InternalAuditor from "./pages/iso-training/internal-auditor/ISO15189InternalAuditor.jsx";
import IATF16949InternalAuditor from "./pages/iso-training/internal-auditor/IATF16949InternalAuditor.jsx";
import ISO31000InternalAuditor from "./pages/iso-training/internal-auditor/ISO31000InternalAuditor.jsx";

// Standalone pages
import ISOFoundation from "./pages/iso-training/ISOFoundation.jsx";
import ISO31000RiskManagement from "./pages/iso-training/ISO31000RiskManagement.jsx";
import ISOTrainingOnline from "./pages/iso-training/ISOTrainingOnline.jsx";

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
        {/* <Route path="/training/:slug" element={<TrainingDetail />} />
        <Route path="/iso-training/:slug" element={<IsoTrainingDetail />} /> */}

        {/* =========================
    ISO LEAD AUDITOR
========================= */}

<Route path="/iso-training/iso-9001-lead-auditor" element={<ISO9001LeadAuditor />}
/>

<Route path="/iso-training/iso-27001-lead-auditor" element={<ISO27001LeadAuditor />}/>

<Route path="/iso-training/iso-45001-lead-auditor" element={<ISO45001LeadAuditor />}/>

<Route path="/iso-training/iso-22301-lead-auditor" element={<ISO22301LeadAuditor />}/>

<Route path="/iso-training/iso-22000-lead-auditor" element={<ISO22000LeadAuditor />}/>

<Route path="/iso-training/iso-14001-lead-auditor" element={<ISO14001LeadAuditor />}/>

<Route path="/iso-training/iso-13485-lead-auditor" element={<ISO13485LeadAuditor />}/>

<Route path="/iso-training/iso-50001-lead-auditor" element={<ISO50001LeadAuditor />}/>

<Route path="/iso-training/iso-17025-lead-auditor" element={<ISO17025LeadAuditor />}/>

<Route path="/iso-training/iso-15189-lead-auditor" element={<ISO15189LeadAuditor />}/>

<Route path="/iso-training/fssc-22000-lead-auditor" element={<FSSC22000LeadAuditor />}/>


{/* =========================
    ISO INTERNAL AUDITOR
========================= */}

<Route path="/iso-training/iso-13485-internal-auditor" element={<ISO13485InternalAuditor />}/>

<Route path="/iso-training/iso-14001-internal-auditor" element={<ISO14001InternalAuditor />}/>

<Route path="/iso-training/iso-27001-internal-auditor" element={<ISO27001InternalAuditor />}/>
<Route path="/iso-training/iso-50001-internal-auditor" element={<ISO50001InternalAuditor />}/>

<Route path="/iso-training/iso-45001-internal-auditor" element={<ISO45001InternalAuditor />}/>

<Route path="/iso-training/iso-9001-internal-auditor" element={<ISO9001InternalAuditor />}/>
<Route path="/iso-training/iso-22000-internal-auditor" element={<ISO22000InternalAuditor />}/>

<Route path="/iso-training/iso-22301-internal-auditor" element={<ISO22301InternalAuditor />}/>

<Route path="/iso-training/iso-17025-internal-auditor" element={<ISO17025InternalAuditor />}/>

<Route path="/iso-training/iso-15189-internal-auditor" element={<ISO15189InternalAuditor />}/>

<Route path="/iso-training/iatf-16949-internal-auditor" element={<IATF16949InternalAuditor />}/>

<Route path="/iso-training/iso-31000-internal-auditor" element={<ISO31000InternalAuditor />}/>


{/* =========================
    STANDALONE ISO TRAINING
========================= */}

<Route path="/iso-training/iso-foundation" element={<ISOFoundation />} />

<Route path="/iso-training/iso-31000-risk-management" element={<ISO31000RiskManagement />} />

<Route path="/iso-training/online-iso-training" element={<ISOTrainingOnline />} />

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
