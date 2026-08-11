import Layout from "@/components/Layout";
import InfoPage from "@/components/InfoPage";

import networkBg from "@/assets/network.webp";
import networkLeadImg from "@/assets/unsplash/soc-network.webp";

export const info = {
  slug: "network-pentest",

  backgroundImage: networkBg,

  hero: "Network Penetration Testing Service in Chennai",

  lead: {
    title:
      "Network Security Service Providers in Chennai — We Offer a Wide Range of Network Security Services",

    image: networkLeadImg,

    paragraphs: [
      "Network security service providers in Chennai are many in number. But among all, Hawksberg International is one of the best companies which provides the best network security services of all. Our network security consultants perform a vulnerability scan against organisations' networks. The primary objective of our network penetration testing services is to identify exploitable vulnerabilities in networks, systems, hosts, and network devices.",

      "We provide Network Penetration Testing Services to identify assets, links, and high-risk security gaps before attackers exploit them. Our Network Security Audit methodology includes controlled attack simulations performed by experienced security consultants to improve security posture, reduce business risk, and support compliance requirements.",
    ],
  },

  panels: [
    {
      title: "Network Penetration Testing Company in Chennai",

      body: [
        "Hawksberg International delivers comprehensive network penetration testing services designed to identify vulnerabilities across enterprise infrastructure, servers, firewalls, switches, routers and critical network devices.",

        "Our consultants perform vulnerability assessments, controlled exploitation, validation and remediation guidance to help organisations strengthen their overall cyber security posture.",

        "Detailed reports include executive summaries, technical findings, business impact, risk ratings and practical remediation recommendations.",
      ],
    },
  ],

  grid: {
    title: "Our Network Penetration Testing Methodology",

    items: [
      {
        title: "Asset Discovery",
        body: "Identify network devices, hosts, servers and exposed services.",
      },
      {
        title: "Vulnerability Assessment",
        body: "Automated and manual identification of network vulnerabilities.",
      },
      {
        title: "Penetration Testing",
        body: "Controlled exploitation to validate security weaknesses.",
      },
      {
        title: "Privilege Escalation",
        body: "Assess opportunities for privilege escalation and lateral movement.",
      },
      {
        title: "Configuration Review",
        body: "Review firewalls, routers, switches and security configurations.",
      },
      {
        title: "Reporting & Remediation",
        body: "Comprehensive report with risk ratings and remediation recommendations.",
      },
    ],
  },
};

export const infoMeta = {
  label: "Network Penetration Testing",
  slug: "network-pentest",
  image: networkLeadImg,
  to: "/info/network-pentest",
};

export default function NetworkPenetrationTesting() {
  return (
    <Layout>
      <InfoPage page={info} />
    </Layout>
  );
}