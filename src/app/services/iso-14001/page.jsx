import Layout from "@/components/Layout";
import ServicePage from "@/components/ServicePage";

// Services Grid image
import iso14001GridImage from "@/assets/services/iso-14001.webp";

// ISO 14001 detail page actual hero background
import iso14001HeroImage from "@/assets/14001.webp";

export const service = {
  slug: "iso-14001",

  code: "ISO 14001",

  title: "Environmental Management System",

  short:
    "Reduce environmental footprint and meet regulatory obligations with a structured EMS.",

  overviewTitle:
    "ISO 14001 — Environmental Management System",

  // --------------------------------------------------
  // GRID IMAGE
  // Used only in ServicesGrid.jsx
  // --------------------------------------------------
  image: iso14001GridImage,

  // --------------------------------------------------
  // HERO IMAGE
  // Used as the background on the ISO 14001 detail page
  // --------------------------------------------------
  heroImage: iso14001HeroImage,

  description: [
    "ISO 14001 Environmental Management System (EMS) is a systematic framework to effectively regulate the immediate as well as long-term environmental impacts of a corporation's products, services and processes.",

    "ISO 14001 designates the requirements of an environmental management system that a corporation uses to improve its environmental performance. It is ideal to implement ISO 14001 in a corporation that seeks to regulate its environmental responsibilities in a systematic way, contributing to the environmental pillar of sustainability.",

    "As an international ISO 14001 consultancy service provider, Hawksberg's expertise is known and recognized globally. We also offer foundation and internal auditor training courses for the ISO 14001 environmental management system to better equip your company for the challenges of implementation, certification and continuous improvement.",
  ],

  benefitsTitle: "Benefits of ISO 14001",

  benefits: [
    "Recognises cost savings with emphasis on resource, waste and energy management",
    "Develops corporate image and credibility",
    "Quantifies, monitors and controls the impact of operations on the environment, now and in the future",
    "Guarantees legislative awareness and compliance",
    "Enhances the environmental performance of the supply chain",
    "Protects the business, assets, shareholders and directors",
    "Potentially reduces public liability insurance costs for your organization",
    "Grows your access to business partners and potential customers",
  ],

  points: [
    "Environmental aspect & impact analysis",
    "Legal and regulatory mapping",
    "EMS documentation and training",
    "Audit and certification support",
  ],
};

export const serviceMeta = {
  label: "ISO 14001",

  slug: "iso-14001",

  // IMPORTANT:
  // This image is ONLY for ServicesGrid.jsx
  image: iso14001GridImage,

  to: "/services/iso-14001",
};

export default function ISO14001() {
  return (
    <Layout>
      <ServicePage service={service} />
    </Layout>
  );
}
