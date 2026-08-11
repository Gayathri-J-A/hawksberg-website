import Layout from "@/components/Layout";
import InfoPage from "@/components/InfoPage";

import gdprBg from "@/assets/gdpr.webp";
import gdprLeadImg from "@/assets/unsplash/gdpr-lead.webp";
import gdprPanelImg from "@/assets/unsplash/gdpr-panel.webp";

export const info = {
  slug: "gdpr",

  backgroundImage: gdprBg,

  hero: "GDPR Managed Service Providers in Chennai",

  lead: {
    title: "GDPR Managed Service Providers in India",

    image: gdprLeadImg,

    paragraphs: [
      "GDPR Managed Service Providers in Chennai are many, but the problem faced by organisations who want to be GDPR compliant in India is being informed of all the processes and requirements as per GDPR. We have launched GDPR as a Service to make the compliance procedures much less challenging by reducing complexity, time and cost involved.",

      "We will help you with a variety of best practice solutions, evaluating your GDPR compliance position and developing a remediation roadmap to implement a suitable GDPR compliance framework based on your GDPR Compliance Requirement.",
    ],
  },

  panels: [
    {
      title: "GDPR Compliance Checklist",

      body: [
        "Hawksberg has considerable experience in making enterprises GDPR Compliant through a GDPR compliance Checklist in India. Below is the list of all the GDPR Compliance checklist items that you need to be aware of. These include all the necessary steps to ensure that you are fully compliant with the GDPR.",

        "If your organisation is dealing with EU citizens, getting your organisation GDPR-compliant is highly important. Our unmatched format helps companies avoid unnecessary regulatory penalties and compliance violations and helps them understand the best way to deal with personal data.",
      ],
    },

    {
      title: "General Data Protection Regulation",

      body: [
        "GDPR Managed Service Providers in Chennai have been working on offering complete Data Protection procedures, GDPR reviews and gap assessments to help companies adopt and implement the new GDPR agreement. All content provided is used only for informational purposes — we are the most trusted GDPR Managed Service Providers in Chennai.",
      ],

      image: gdprPanelImg,
    },
  ],
};

export const infoMeta = {
  label: "GDPR Managed Service",
  slug: "gdpr",
  image: gdprLeadImg,
  to: "/info/gdpr",
};

export default function GDPR() {
  return (
    <Layout>
      <InfoPage page={info} />
    </Layout>
  );
}