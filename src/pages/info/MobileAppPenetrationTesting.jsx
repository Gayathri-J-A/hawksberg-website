import Layout from "@/components/Layout";
import InfoPage from "@/components/InfoPage";

import mobileBg from "@/assets/mobile.webp";
import mobileLeadImg from "@/assets/unsplash/mobile-pentest-lead.webp";
import mobilePanelImg from "@/assets/unsplash/mobile-pentest-panel.webp";

export const info = {
  slug: "mobile-pentest",

  backgroundImage: mobileBg,

  hero: "Mobile Application Penetration Testing",

  lead: {
    title: "Comprehensive Mobile App Security Testing",

    image: mobileLeadImg,

    paragraphs: [
      "Mobile applications handle sensitive business and customer data, making them attractive targets for cyber attackers. Security weaknesses in Android and iOS applications can result in data leakage, account compromise, financial fraud, and compliance violations.",

      "Our Mobile Application Penetration Testing service evaluates Android and iOS applications against OWASP Mobile Top 10, MASVS, and industry best practices to identify security vulnerabilities before attackers do.",

      "Our consultants provide a detailed technical report with vulnerability severity, proof of concept, business impact, and remediation guidance to help organizations build secure mobile applications.",
    ],
  },

  content: {
    title: "Why Mobile App Pentest matters",

    paragraphs: [
      "Mobile is the new standard platform for Android & iOS application development — from banking applications to healthcare platforms. However, managing risk on these new devices is also a growing challenge with new app vulnerabilities found every day.",

      "Organised cyber-attacks on Android & iOS applications have increased in numbers. These actors are increasingly targeting unsecured android apps which has resulted in huge data leaks. Critical data like consumer personal information, credit/debit card details are sold on the dark web. Hawksberg International aims at finding out the gaps and providing threat mitigation plans to enterprises.",
    ],

    image: mobilePanelImg,
  },

  grid: {
    title: "Our Mobile App Security Assessment Includes",

    intro:
      "We perform comprehensive security testing covering application logic, APIs, data storage, authentication, and communication security.",

    items: [
      {
        title: "Android & iOS Testing",
        body: "Comprehensive security assessment for native, hybrid and cross-platform applications.",
      },
      {
        title: "OWASP Mobile Top 10",
        body: "Testing against the latest OWASP Mobile security risks.",
      },
      {
        title: "Authentication & Authorization",
        body: "Review login flows, session handling, privilege escalation and access controls.",
      },
      {
        title: "API Security",
        body: "Testing backend APIs used by the mobile application.",
      },
      {
        title: "Secure Storage Review",
        body: "Identify insecure local storage, encryption weaknesses and sensitive data exposure.",
      },
      {
        title: "Detailed Security Report",
        body: "Executive summary, technical findings, risk ratings and remediation recommendations.",
      },
    ],
  },
};

export const infoMeta = {
  label: "Mobile App Penetration Testing",
  slug: "mobile-pentest",
  image: mobileLeadImg,
  to: "/info/mobile-pentest",
};

export default function MobileAppPenetrationTesting() {
  return (
    <Layout>
      <InfoPage page={info} />
    </Layout>
  );
}