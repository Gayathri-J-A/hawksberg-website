import Layout from "@/components/Layout";
import ServicePage from "@/components/ServicePage";

// Services Grid image
import dpdpGridImage from "@/assets/services/dpdp.webp";

// DPDP detail page actual hero background
import dpdpHeroImage from "@/assets/soc consulting.webp";

export const service = {
  slug: "dpdp",

  code: "DPDP",

  title: "Act Compliance",

  short:
    "Expert legal guidance to assess applicability, close compliance gaps, and prepare your business for India’s Digital Personal Data Protection law.",

  overviewTitle:
    "DPDP Act Compliance for Indian Businesses",

  // Services Grid image
  // This image is used by ServicesGrid.jsx
  image: dpdpGridImage,

  // Actual hero background image
  // This image is used on the DPDP detail page
  heroImage: dpdpHeroImage,

  description: [
    "The Digital Personal Data Protection Act, 2023 establishes mandatory obligations for businesses that collect, store, or process personal data in India.",

    "From customer information to employee records, organizations must ensure lawful consent, secure data handling, and clear governance structures to remain compliant.",

    "With enforcement expected, businesses should proactively assess DPDP readiness to avoid penalties of up to ₹250 crores, operational and reputational risks.",
  ],

  benefitsTitle: "Who Must Comply With the DPDP Act?",

  benefits: [
    "MSMEs and startups",
    "IT and SaaS companies",
    "Pharma and healthcare organizations",
    "FMCG brands and distributors",
    "E-commerce platforms",
    "Businesses using websites, apps, CRMs, or digital marketing tools",
    "Organizations handling customer, employee, or vendor personal data",
  ],

  points: [
    "Applicability assessment and risk mapping",
    "Data audit and compliance gap analysis",
    "Consent management and privacy framework design",
    "Data principal rights management",
    "Data security and breach response planning",
    "Vendor, employee, and third-party compliance",
    "Training, awareness, and governance",
    "Regulatory advisory and ongoing support",
  ],
};

export const serviceMeta = {
  label: "DPDP",

  slug: "dpdp",

  // Services Grid image
  image: dpdpGridImage,

  to: "/services/dpdp",
};

export default function DPDP() {
  return (
    <Layout>
      <ServicePage service={service} />
    </Layout>
  );
}