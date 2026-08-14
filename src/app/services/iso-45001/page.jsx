import Layout from "@/components/Layout";
import ServicePage from "@/components/ServicePage";

// Services Grid image
import iso45001GridImage from "@/assets/services/iso-45001.webp";

// ISO 45001 detail page actual hero background
import iso45001HeroImage from "@/assets/45001.webp";

export const service = {
  slug: "iso-45001",

  code: "ISO 45001",

  title: "Occupational Health & Safety Management Systems",

  short:
    "Protect your workforce with internationally recognised OH&S management practices.",

  overviewTitle:
    "ISO 45001 — Occupational Health and Safety Management Systems",

  // --------------------------------------------------
  // GRID IMAGE
  // Used only in ServicesGrid.jsx
  // --------------------------------------------------
  image: iso45001GridImage,

  // --------------------------------------------------
  // HERO IMAGE
  // Used as the background on the ISO 45001 detail page
  // --------------------------------------------------
  heroImage: iso45001HeroImage,

  description: [
    "First published in March 2018, ISO 45001 is a standard designed for the management systems of occupational health and safety (OH&S). The main objective of the ISO 45001 standard is to reduce occupational injuries and diseases by promoting and protecting physical as well as mental health.",

    "The ISO 45001 certification defines the diverse concerns required for an occupational health & safety management system that enables businesses to provide safe and healthy workplaces by avoiding work-related injury and ill health, and by proactively enhancing their occupational health and safety performance.",
  ],

  benefitsTitle: "Benefits of ISO 45001",

  benefits: [
    "Shows commitment to occupational health and safety with an internationally recognized certificate",
    "Boosts safety awareness and engagement among employees",
    "Mitigates occupational hazard incidents systematically",
    "Restrains business disruptions and unnecessary downtime",
    "Enhances brand image among clients, authorities, and investors",
    "Improves confidence in the fulfillment of legal and other compliance requirements",
    "Aligns with other ISO standards & business systems, streamlining inter- and intra-organization communication",
  ],

  points: [
    "Hazard identification and risk control",
    "OH&S policy and procedures",
    "Employee training and awareness",
    "Audit readiness and certification",
  ],
};

export const serviceMeta = {
  label: "ISO 45001",

  slug: "iso-45001",

  // IMPORTANT:
  // This image is ONLY for ServicesGrid.jsx
  image: iso45001GridImage,

  to: "/services/iso-45001",
};

export default function ISO45001() {
  return (
    <Layout>
      <ServicePage service={service} />
    </Layout>
  );
}
