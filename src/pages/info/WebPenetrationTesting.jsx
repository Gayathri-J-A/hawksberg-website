import Layout from "@/components/Layout";
import InfoPage from "@/components/InfoPage";

import webBg from "@/assets/web.webp";
import webLeadImg from "@/assets/unsplash/web-pentest-lead.webp";

export const info = {
  slug: "web-pentest",

  backgroundImage: webBg,

  hero: "Web Penetration Testing Services",

  lead: {
    title: "Professional Web Application Penetration Testing",

    image: webLeadImg,

    paragraphs: [
      "Web applications are one of the most common targets for cyber attacks. Security vulnerabilities such as SQL Injection, Cross-Site Scripting (XSS), Broken Authentication, and Remote Code Execution can expose sensitive customer information and business-critical systems.",

      "Our Web Penetration Testing service identifies real-world vulnerabilities using industry-standard methodologies such as OWASP Top 10, PTES, and NIST. Every assessment is performed by experienced security professionals using both automated and manual testing techniques.",

      "We provide a detailed vulnerability report with risk ratings, proof of concept, business impact, and remediation recommendations to strengthen your web application's security posture.",
    ],
  },

  grid: {
    title: "Our Web Penetration Testing Covers",

    intro:
      "Our comprehensive web application security assessment helps organizations identify security flaws before attackers exploit them.",

    items: [
      {
        title: "OWASP Top 10 Assessment",
        body: "Complete testing against the latest OWASP Top 10 security risks.",
      },
      {
        title: "Authentication Testing",
        body: "Review of login mechanisms, session management and access controls.",
      },
      {
        title: "Business Logic Testing",
        body: "Identify flaws in application workflows that attackers can abuse.",
      },
      {
        title: "API Security Testing",
        body: "Security assessment of REST APIs, authentication tokens and endpoints.",
      },
      {
        title: "Source Validation",
        body: "Testing for SQL Injection, XSS, CSRF and input validation issues.",
      },
      {
        title: "Detailed Security Report",
        body: "Executive summary, technical findings, severity ratings and remediation guidance.",
      },
    ],
  },
};

export const infoMeta = {
  label: "Web Penetration Testing",
  slug: "web-pentest",
  image: webLeadImg,
  to: "/info/web-pentest",
};

export default function WebPenetrationTesting() {
  return (
    <Layout>
      <InfoPage page={info} />
    </Layout>
  );
}