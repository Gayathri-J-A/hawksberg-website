import Layout from "@/components/Layout";
import ServicePage from "@/components/ServicePage";

// Services Grid image
import iatf16949GridImage from "@/assets/services/iatf-16949.webp";

// IATF 16949 detail page actual hero background
import iatf16949HeroImage from "@/assets/16949.webp";

export const service = {
  slug: "iatf-16949",

  code: "IATF 16949",

  title: "Automotive Quality Management System",

  short:
    "Specialised QMS framework for the global automotive supply chain.",

  overviewTitle:
    "IATF 16949 — Automotive Quality Management System",

  // --------------------------------------------------
  // GRID IMAGE
  // Used in ServicesGrid.jsx
  // --------------------------------------------------
  image: iatf16949GridImage,

  // --------------------------------------------------
  // HERO IMAGE
  // Used as the background on the IATF 16949 detail page
  // --------------------------------------------------
  heroImage: iatf16949HeroImage,

  description: [
    "IATF 16949:2016 certification is a symbol of the stability and continuity of your organization's performance to reach and outshine customer expectations. Today, customers are not ready to take a chance — to reduce the risk of purchasing low-quality products they always look for best-quality certified products and services. IATF 16949:2016 certification for business is a powerful tool to increase the credibility of the organization by showing that your products or services meet the expectations of your customer.",

    "Out of the various certifications, IATF 16949:2016 is highly recommended for automotive as it is specially tailor-made for automotive industries. The certification helps to expand your business locally and in overseas markets and definitely helps impress your clients with the quality of the business and its products and services.",

    "The most significant change from ISO to IATF is the requirement for documented evidence — ensuring that suppliers conform to statutory and regulatory requirements while continuing to implement and improve their Automotive Quality Management Systems.",
  ],

  points: [
    "Automotive-specific process design",
    "Core tools (APQP, PPAP, FMEA, MSA, SPC)",
    "Customer-specific requirements",
    "Audit and certification readiness",
  ],
};

export const serviceMeta = {
  label: "IATF 16949",

  slug: "iatf-16949",

  // IMPORTANT:
  // This image is ONLY for ServicesGrid.jsx
  image: iatf16949GridImage,

  to: "/services/iatf-16949",
};

export default function IATF16949() {
  return (
    <Layout>
      <ServicePage service={service} />
    </Layout>
  );
}