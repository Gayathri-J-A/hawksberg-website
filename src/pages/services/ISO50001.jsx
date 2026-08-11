import Layout from "@/components/Layout";
import ServicePage from "@/components/ServicePage";

// Services Grid image
import iso50001GridImage from "@/assets/services/iso-50001.webp";

// ISO 50001 detail page actual hero background
import iso50001HeroImage from "@/assets/50001.webp";

export const service = {
  slug: "iso-50001",

  code: "ISO 50001",

  title: "Energy Management System",

  short:
    "Optimise energy performance, reduce costs and demonstrate sustainability commitment.",

  overviewTitle:
    "ISO 50001 — Energy Management System",

  // --------------------------------------------------
  // GRID IMAGE
  // Used only in ServicesGrid.jsx
  // --------------------------------------------------
  image: iso50001GridImage,

  // --------------------------------------------------
  // HERO IMAGE
  // Used as the background on the ISO 50001 detail page
  // --------------------------------------------------
  heroImage: iso50001HeroImage,

  description: [
    "Established by the International Organization for Standardization (ISO), ISO 50001 is an international standard for energy management systems. It is specially developed for organizations committed to focusing on their impact, preserving resources and developing the essence through a powerful energy management method.",

    "Replacing the European standard EN 16001, ISO 50001 is conceived as an international certification that defines particular requirements to establish, implement, maintain and enhance an energy management system, with the objective to help a business follow a methodical approach in attaining constant improvement of energy performance — involving energy efficiency, energy use and consumption.",
  ],

  benefitsTitle: "Benefits of ISO 50001",

  benefits: [
    "Internationally recognized standard with energy reduction of up to 10% within the first 12 months",
    "Minimised greenhouse gas (GHG) emissions and carbon footprint",
    "Assists in compliance with present and future voluntary and/or mandatory energy efficiency targets",
    "Improves corporate image and credibility among clients and stakeholders",
    "Helps inform decision-making processes from system design through to operation & maintenance",
    "Enhanced energy awareness among employees at all levels",
    "Updated operational efficiencies and maintenance practices",
  ],

  points: [
    "Energy review and baseline",
    "EnMS documentation",
    "Performance indicators and targets",
    "Internal audit and certification",
  ],
};

export const serviceMeta = {
  label: "ISO 50001",

  slug: "iso-50001",

  // IMPORTANT:
  // This image is ONLY for ServicesGrid.jsx
  image: iso50001GridImage,

  to: "/services/iso-50001",
};

export default function ISO50001() {
  return (
    <Layout>
      <ServicePage service={service} />
    </Layout>
  );
}