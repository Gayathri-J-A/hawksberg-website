import Layout from "@/components/Layout";
import ServicePage from "@/components/ServicePage";

// Services Grid image
import iso9001GridImage from "@/assets/services/iso-9001.webp";

// ISO 9001 detail page actual hero background
import iso9001HeroImage from "@/assets/9001.webp";

export const service = {
  slug: "iso-9001",

  code: "ISO 9001",

  title: "Quality Management System",

  short:
    "Build a customer-centric QMS that drives operational excellence and consistent product quality.",

  overviewTitle:
    "ISO 9001 — Quality Management System",

  // --------------------------------------------------
  // GRID IMAGE
  // Used only in ServicesGrid.jsx
  // --------------------------------------------------
  image: iso9001GridImage,

  // --------------------------------------------------
  // HERO IMAGE
  // Used as the background on the ISO 9001 detail page
  // --------------------------------------------------
  heroImage: iso9001HeroImage,

  description: [
    "ISO 9001 is the international standard that designates provisions for a quality management system (QMS). It was published in 1987 by the International Organization for Standardization (ISO), a worldwide agency that includes the national standards bodies of over 160 countries.",

    "ISO 9001:2015 is the most prestigious standard in the ISO 9001 series and the only standard in the series to which businesses can certify the value of their management system.",

    "ISO 9001 designates provisions for a quality management system when a corporation requires to showcase its capability to constantly offer products and services that meet customer and applicable statutory and regulatory requirements, and intends to improve customer satisfaction by effectively applying the system, comprising processes for enhancing the system and the affirmation of compliance with customer and applicable statutory as well as regulatory concerns.",
  ],

  benefitsTitle: "Benefits of ISO 9001",

  benefits: [
    "Puts great importance on leadership engagement",
    "Helps address organizational risks and opportunities in a structured way",
    "Uses a common structure and terminology, helpful to organizations using multiple management systems (environment, health & safety, business continuity)",
    "Addresses supply chain management more efficiently",
    "More user-friendly for service and knowledge-based organizations",
  ],

  points: [
    "Process mapping and standardization",
    "Quality manual and SOPs",
    "Internal audits and management review",
    "Pre-certification readiness",
  ],
};

export const serviceMeta = {
  label: "ISO 9001",

  slug: "iso-9001",

  // IMPORTANT:
  // This image is ONLY for ServicesGrid.jsx
  image: iso9001GridImage,

  to: "/services/iso-9001",
};

export default function ISO9001() {
  return (
    <Layout>
      <ServicePage service={service} />
    </Layout>
  );
}