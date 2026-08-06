import Layout from "@/components/Layout";
import ServicePage from "@/components/ServicePage";

const service = {
  slug: "tisax",

  code: "TISAX",

  title: "Trusted Information Security Assessment Exchange",

  short:
    "TISAX labelling for automotive suppliers handling sensitive information.",

  overviewTitle:
    "TISAX — Trusted Information Security Assessment Exchange",

  description: [
    "TISAX® stands for Trusted Information Security Assessment Exchange. TISAX® enables mutual acceptance of information security assessments in the automotive industry and provides a common assessment and exchange mechanism that ensures the secure sharing of sensitive information to partner companies, to inspire trust throughout the automotive supply chain.",

    "TISAX® was established by VDA (the German association of the automotive industry) and is operated by ENX Association, who have assessed and confirmed approved audit providers to perform the assessments.",

    "Developed by automotive industry security experts and based on international information security management system (ISMS) standards like ISO/IEC 27001, TISAX® provides a catalogue of requirements, covering virtual, physical and social aspects of information security, specific to the automotive supply chain. This catalogue is referred to as the Information Security Assessment (ISA) and forms the basis of the assessment conducted by approved TISAX® audit providers.",
  ],

  benefitsTitle: "Who does it apply to?",

  benefits: [
    "Original Equipment Manufacturers (OEMs) increasingly recognise — and in some cases mandate — that a TISAX® label demonstrates compliance with information security requirements across the automotive supply chain.",

    "There are currently more than 3,000 TISAX® participants (OEMs and TISAX® certified suppliers) across almost 6,000 registered locations worldwide.",

    "Applies to a wide range of organisations working with OEMs — from vehicle component suppliers to technology service providers and beyond.",
  ],

  points: [
    "TISAX scope definition",
    "Information security implementation",
    "Assessment preparation",
    "Label maintenance support",
  ],
};

export default function TISAX() {
  return (
    <Layout>
      <ServicePage service={service} />
    </Layout>
  );
}