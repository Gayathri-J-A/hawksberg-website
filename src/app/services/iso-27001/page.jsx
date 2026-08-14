import Layout from "@/components/Layout";
import ServicePage from "@/components/ServicePage";

import iso27001Image from "@/assets/services/iso-27001.webp";
import iso27001HeroBg from "@/assets/page-hero-bg.webp";

export const service = {
  slug: "iso-27001",

  code: "ISO 27001",

  title: "Consulting — Auditing — Training",

  short:
    "Implement a robust ISMS framework to safeguard data, ensure confidentiality and earn customer trust.",

  overviewTitle:
    "ISO 27001 Consultant — Managed Information Security",

  // Service/content image
  image: iso27001Image,

  // Static hero background image
  heroImage: iso27001HeroBg,

  description: [
    "ISO 27001 requires 14 information security disciplines that correspond to 114 security controls to ensure all information means — covering people, processes and technology including suppliers and merchandisers — are secure. An ISO 27001 Consultant offers a fast, effective way to achieve certification.",

    "ISO Risk Categorization: Associations must classify their information and information systems in order of risk to ensure that sensitive information and the systems that use it are given the topmost level of security.",

    "ISO System Security Plan: ISO 27001 requires agencies to produce a security plan which is regularly maintained and kept up to date. The plan should cover items like the security controls executed within the association, security programs, and a schedule for the introduction of further controls.",

    "ISO Security Controls: ISO 27001 outlines an extensive catalogue of suggested security controls for ISO 27001 compliance. The standard does not require an agency to apply every single control; rather, they are instructed to apply the controls that are applicable to their organisation and systems. Once the applicable controls are selected and the security conditions have been satisfied, the organisation must validate the named controls in their system security plan.",

    "Information Security Management System (ISMS) certification is an international standard which helps you identify the threats that may affect your organization's confidential information or data security and implement effective measures to reduce or eliminate the identified risk factors.",

    "Similar to other management systems, ISO 27001 is based on the P-D-C-A approach towards quality improvement. ISO 27001 certification for IT companies offers a methodical and well-organized approach that will protect the confidentiality of your data, fortify the integrity of business data and intensify the availability of your business IT systems.",

    "When you are certified to ISO 27001:2013, you are demonstrating that your Information Security Management System meets the standards of the ISO model of implementation, maintenance and continual improvement. Our ISO 27001 security consulting services include ISMS implementation and an ISO 27001-ready program of an organization through a well-defined, phased approach.",
  ],

  points: [
    "Gap analysis and risk assessment",
    "ISMS documentation and policy framework",
    "Internal audit and certification readiness",
    "Continuous improvement support",
  ],
};

export const serviceMeta = {
  label: "ISO 27001",
  slug: "iso-27001",
  image: iso27001Image,
  to: "/services/iso-27001",
};

export default function ISO27001() {
  return (
    <Layout>
      <ServicePage service={service} />
    </Layout>
  );
}
