import Layout from "@/components/Layout";
import InfoPage from "@/components/InfoPage";

import vaptBg from "@/assets/vapt.webp";
import vaptLeadImg from "@/assets/unsplash/vapt-lead.webp";

export const info = {
  slug: "vapt",

  backgroundImage: vaptBg,

  hero: "VAPT Service in Chennai",

  lead: {
    title: "VAPT Companies in Chennai",

    image: vaptLeadImg,

    paragraphs: [
      "VAPT Companies in Chennai is what all enterprises are looking for as the surge in cyber crime is evident. VAPT companies in India have seen a huge rise in demand as the attack on critical infrastructure of enterprises has increased. More than 2000+ companies have seen direct impact on their business revenue generation due to lack of cyber security measures and negligence in conducting a periodic VAPT audit.",

      "We are not just the best VAPT Testing Company. We not only use VAPT but implement it organically into the client's systems to make sure that the process is thoroughly effective and prevents the client with an opportunity to revamp its cyber security ideals for the betterment of the company.",

      "The online domain is infested with malwares and viruses everywhere and because of machine learning these are evolving at an alarming rate. Every corner of a digital entity must be shielded with advanced & impregnable fortification. Hence, when you opt for the service of our best VAPT Testing Company, you make a significant effort in making your digital entity vulnerability-free.",
    ],
  },

  grid: {
    title: "Vulnerability Assessment and Penetration Testing (VAPT)",

    intro:
      "VAPT is a term often used to describe security testing that is designed to identify and help address cyber security vulnerabilities. This includes automated vulnerability assessments to human-led penetration testing and full-scale red team simulated cyber attacks. VAPT services offer wide-ranging services to perform security audits and provide recommendations for security disruption, maintaining security for risk analysis, business and permission testing.",

    items: [
      {
        title: "Vulnerability Assessment",
        body: "Systematic review of security weaknesses in your IT infrastructure.",
      },
      {
        title: "Penetration Testing",
        body: "Simulated cyber attacks to evaluate the security of your systems.",
      },
      {
        title: "Risk Analysis",
        body: "Comprehensive analysis and reporting of identified vulnerabilities.",
      },
      {
        title: "Remediation Support",
        body: "Expert guidance on fixing vulnerabilities and improving security posture.",
      },
    ],
  },
};

export const infoMeta = {
  label: "VAPT Testing",
  slug: "vapt",
  image: vaptLeadImg,
  to: "/info/vapt",
};

export const metadata = { title: "VAPT Services", description: "Vulnerability assessment and penetration testing information from Hawksberg International.", alternates: { canonical: "/info/vapt" } };

export default function VAPT() {
  return (
    <Layout>
      <InfoPage page={info} />
    </Layout>
  );
}
