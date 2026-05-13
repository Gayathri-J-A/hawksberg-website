export const company = {
  name: "Hawksberg International",
  tagline: "Business Management & Cyber Security Solutions",
  phone: "+91 90426 51581",
  altPhone: "+91 90805 83283",
  email: "info@hawksberg.com",
  address:
    "No 58, Gandhi Street, Rajaji Nagar, Tiruvottiyur, Chennai, Tamil Nadu 600019",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    whatsapp: "https://wa.me/919042651581",
  },
};

import iso27001Img from "@/assets/services/iso-27001.jpg";
import tisaxImg from "@/assets/services/tisax.jpg";
import iso14001Img from "@/assets/services/iso-14001.jpg";
import iso9001Img from "@/assets/services/iso-9001.jpg";
import iso45001Img from "@/assets/services/iso-45001.jpg";
import iatfImg from "@/assets/services/iatf-16949.jpg";
import iso50001Img from "@/assets/services/iso-50001.jpg";
import soc2Img from "@/assets/services/soc-2.jpg";

import ethicalHackingImg from "@/assets/trainings/ethical-hacking.jpg";
import ccnaImg from "@/assets/trainings/ccna.jpg";
import pythonImg from "@/assets/trainings/python.jpg";
import bugBountyImg from "@/assets/trainings/bug-bounty.jpg";
import javaImg from "@/assets/trainings/java.jpg";
import ccnpImg from "@/assets/trainings/ccnp.jpg";
import pentestImg from "@/assets/trainings/penetration-testing.jpg";

import companyExperienceImg from "@/assets/company-experience.jpg";
export { companyExperienceImg };

export const serviceImages = {
  "iso-27001": iso27001Img,
  "tisax": tisaxImg,
  "iso-14001": iso14001Img,
  "iso-9001": iso9001Img,
  "iso-45001": iso45001Img,
  "iatf-16949": iatfImg,
  "iso-50001": iso50001Img,
  "soc-2": soc2Img,
};

export const trainingImages = {
  "ethical-hacking": ethicalHackingImg,
  "ccna": ccnaImg,
  "python": pythonImg,
  "bug-bounty": bugBountyImg,
  "java": javaImg,
  "ccnp": ccnpImg,
  "penetration-testing": pentestImg,
};

export const isoServices = [
  {
    slug: "iso-27001",
    code: "ISO 27001",
    title: "Information Security Management System",
    short:
      "Implement a robust ISMS framework to safeguard data, ensure confidentiality and earn customer trust.",
    points: [
      "Gap analysis and risk assessment",
      "ISMS documentation and policy framework",
      "Internal audit and certification readiness",
      "Continuous improvement support",
    ],
  },
  {
    slug: "iso-9001",
    code: "ISO 9001",
    title: "Quality Management System",
    short:
      "Build a customer-centric QMS that drives operational excellence and consistent product quality.",
    points: [
      "Process mapping and standardization",
      "Quality manual and SOPs",
      "Internal audits and management review",
      "Pre-certification readiness",
    ],
  },
  {
    slug: "iso-14001",
    code: "ISO 14001",
    title: "Environmental Management System",
    short:
      "Reduce environmental footprint and meet regulatory obligations with a structured EMS.",
    points: [
      "Environmental aspect & impact analysis",
      "Legal and regulatory mapping",
      "EMS documentation and training",
      "Audit and certification support",
    ],
  },
  {
    slug: "iso-45001",
    code: "ISO 45001",
    title: "Occupational Health & Safety",
    short:
      "Protect your workforce with internationally recognised OH&S management practices.",
    points: [
      "Hazard identification and risk control",
      "OH&S policy and procedures",
      "Employee training and awareness",
      "Audit readiness and certification",
    ],
  },
  {
    slug: "iso-50001",
    code: "ISO 50001",
    title: "Energy Management System",
    short:
      "Optimise energy performance, reduce costs and demonstrate sustainability commitment.",
    points: [
      "Energy review and baseline",
      "EnMS documentation",
      "Performance indicators and targets",
      "Internal audit and certification",
    ],
  },
  {
    slug: "iatf-16949",
    code: "IATF 16949",
    title: "Automotive Quality Management System",
    short:
      "Specialised QMS framework for the global automotive supply chain.",
    points: [
      "Automotive-specific process design",
      "Core tools (APQP, PPAP, FMEA, MSA, SPC)",
      "Customer-specific requirements",
      "Audit and certification readiness",
    ],
  },
  {
    slug: "tisax",
    code: "TISAX",
    title: "Trusted Information Security Assessment Exchange",
    short:
      "TISAX labelling for automotive suppliers handling sensitive information.",
    points: [
      "TISAX scope definition",
      "Information security implementation",
      "Assessment preparation",
      "Label maintenance support",
    ],
  },
  {
    slug: "soc-2",
    code: "SOC 2",
    title: "SOC 2 Compliance",
    short:
      "Demonstrate trust to your customers with a SOC 2 attestation aligned to your service commitments.",
    points: [
      "Readiness assessment",
      "Control design and remediation",
      "Policy and evidence framework",
      "Auditor coordination",
    ],
  },
];

export const serviceMenu = [
  {
    key: "iso",
    label: "ISO Consulting",
    items: [
      { label: "ISO 27001", to: "/services/iso-27001" },
      { label: "TISAX", to: "/services/tisax" },
      { label: "ISO 14001", to: "/services/iso-14001" },
      { label: "ISO 9001", to: "/services/iso-9001" },
      { label: "ISO 45001", to: "/services/iso-45001" },
      { label: "IATF 16949", to: "/services/iatf-16949" },
      { label: "ISO 50001", to: "/services/iso-50001" },
      { label: "SOC 2", to: "/services/soc-2" },
    ],
  },
  {
    key: "compliance",
    label: "Compliance Service",
    items: [
      { label: "GDPR Managed Service", to: "/info/gdpr" },
      { label: "SOC Consulting Service", to: "/info/soc-consulting" },
    ],
  },
  {
    key: "pentest",
    label: "Penetration Testing Services",
    items: [
      { label: "VAPT Testing", to: "/info/vapt" },
      { label: "Web Penetration Testing", to: "/info/web-pentest" },
      { label: "Mobile App Penetration Testing", to: "/info/mobile-pentest" },
      { label: "Network Penetration Testing", to: "/info/network-pentest" },
    ],
  },
];

export const infoPages = [
  {
    slug: "gdpr",
    hero: "GDPR Managed Service Providers in Chennai",
    lead: {
      title: "GDPR Managed Service Providers in India",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
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
        image:
          "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    slug: "soc-consulting",
    hero: "Expert SOC Consulting Services",
    lead: {
      title: "Expert SOC Consulting Services",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
      paragraphs: [
        "Being driven close to at least one customer to have a SOC review performed is frequently the impetus that makes an organisation start investigating their choices concerning the different reports and their information. It is advantageous for associations to use professional SOC consulting services and they can definitely acquire it on account of a thorough report being directed.",
        "Numerous associations before they need to start the SOC cost, yet they don't have the foggiest idea how to kick things off. This is the place where our 'SOC Readiness' or 'SOC Consulting' services come into play.",
      ],
    },
    panels: [
      {
        title: "What is SOC 2?",
        body: [
          "SOC 2 is a voluntary certification report certified by an accredited CPA firm that requires the documentation of leading controls against a rigorous management arrangement of data security controls covering trust service criteria (security, availability, processing integrity, confidentiality, and privacy).",
          "SOC 2 Type I — A SOC Type 1 report relates to the design and documentation of a system provided to control for the operation at a specific date. It does not provide assurance on the design or effectiveness of those controls over a period of time.",
          "SOC 2 Type II — A SOC 2 Type 2 report (also known as SOC 2 Type II) covers the design and documentation of controls in SOC 2 Type 2 and also provides additional assurance on how the organisation systems process data in real terms and how the documentation provides certainty as to how this data is managed.",
        ],
      },
      {
        title: "Why SOC Security Operation Center?",
        body: [
          "A SOC 2 Type 2 report relates to the design and documentation of controls. In SOC 2 Type 2, it also provides additional assurance on how the organisation systems process data in real terms and is managed.",
          "Generally speaking, when a SOC 2 report is requested, the expectation is for a SOC 2 Type II report, covering a minimum observation period.",
        ],
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    grid: {
      title: "Get Certified in 5 Steps",
      items: [
        {
          title: "Pre-Assessment & Gap Analysis",
          body: "Our team will provide the support needed to understand current security controls and identify gaps against the relevant SOC framework, ensuring each step is understood.",
        },
        {
          title: "Training and Competence",
          body: "Your organisation's people will be trained with the required competence and will support implementing the recommendations needed for a successful SOC audit.",
        },
        {
          title: "Implementation and Review",
          body: "We help organisations implement and improve the required controls in your organisation to meet all the requirements specified by the relevant SOC framework.",
        },
        {
          title: "Final Audit & Certification Readiness",
          body: "We will work with your organisation to get it ready for its certification audit with a full review before the official audit with the assessors.",
        },
        {
          title: "Achieve Certificate",
          body: "We work with assessors and organisations to help organisations achieve and maintain their certificates and ongoing compliance requirements.",
        },
      ],
    },
  },
  {
    slug: "vapt",
    hero: "VAPT Service in Chennai",
    lead: {
      title: "VAPT Companies in Chennai",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
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
  },
  {
    slug: "web-pentest",
    hero: "Web Penetration Testing Service in Chennai",
    lead: {
      title: "Web Security Company in India & Penetration Testing as a Service",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
      paragraphs: [
        "Web Security Company in Chennai — Hawksberg International is a global web application penetration testing service provider. With the ever-growing threat of cyber crime and data loss from SMEs to MNCs, Cyber security is not only a concern for the top management of the enterprise but should also be a high priority for the professionals working in the organisation dealing with critical information and intellectual assets of the company.",
        "Hawksberg is proud to be the highest-rated web application penetration testing and audit company in India providing in-depth VAPT (Vulnerability Assessment & Penetration Testing) using both tools-based as well as manual testing which brings out zero false-positive reports for the clients.",
      ],
    },
    panels: [
      {
        title: "Industries we serve",
        body: [
          "We are proud to have served clients from varied domains like the hospital industry, government agencies, financial institutions to large e-commerce portals. Experienced penetration testers carry out the VAPT process with all the modern technologies which are used in the penetration testing industry. Web Application penetration testing is carried out with a precision by the team of ethical hackers and penetration testers where we follow the OWASP top 10 vulnerabilities.",
        ],
      },
    ],
    grid: {
      title: "What We Test",
      items: [
        { title: "OWASP Top 10 Vulnerabilities", body: "Comprehensive coverage of the latest OWASP Top 10 risks." },
        { title: "SQL Injection & XSS", body: "Detect and remediate injection and cross-site scripting flaws." },
        { title: "Authentication & Session Management", body: "Validate authentication, session and access control flows." },
        { title: "Business Logic Flaws", body: "Manual testing for logic flaws unique to your application." },
        { title: "API Security Testing", body: "REST/GraphQL API endpoint and authorisation testing." },
        { title: "Sensitive Data Exposure", body: "Identify exposure of confidential data in storage and transit." },
      ],
    },
  },
  {
    slug: "mobile-pentest",
    hero: "Mobile App Penetration Testing",
    lead: {
      title: "Mobile App Penetration Testing as a Service in Chennai",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      paragraphs: [
        "Mobile App Penetration Testing has become the need of the hour as the latest technologies of Android & iOS in mobile smartphones are concerned. As technologies have advanced by leaps and bounds over the past few years, mobile technology to the invention of the Android & iOS app has ushered in a whole new dimension. But, what it has also done is that it has made mobile security vulnerable to potential attacks that were not even in the picture during the classical mode of application.",
        "When enterprises are searching for a mobile app testing company in India, we will help enterprises secure their android applications from being tested. When it comes to mobile app security testing company in Chennai, enterprises in our friendly on our technical competencies.",
      ],
    },
    panels: [
      {
        title: "Why Mobile App Pentest matters",
        body: [
          "Mobile is the new standard platform for Android & iOS application development — from banking applications to healthcare platforms. However, managing risk on these new devices is also a growing challenge with new app vulnerabilities found every day.",
          "Organised cyber-attacks on Android & iOS applications have increased in numbers. These actors are increasingly targeting unsecured android apps which has resulted in huge data leaks. Critical data like consumer personal information, credit/debit card details are sold on the dark web. Hawksberg International aims at finding out the gaps and providing threat mitigation plans to enterprises.",
        ],
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    grid: {
      title: "Penetration Testing for Mobile Applications (Android & iOS Apps)",
      intro:
        "Nowadays business uses mobile applications to deliver their services to the end customer and this has created a lot of security challenges in front of organisations. We offer a holistic risk assessment for your mobile application. The simplest way to identify and avoid cyber risk is to perform android app vulnerability assessment and penetration testing.",
      items: [
        { title: "Static Analysis", body: "Reverse engineering and static code analysis for the mobile binary." },
        { title: "Dynamic Analysis", body: "Runtime testing of the application on real devices and emulators." },
        { title: "API & Backend Testing", body: "Inspect server-side APIs supporting the mobile application." },
        { title: "Insecure Storage", body: "Detect insecure local storage of credentials, tokens and PII." },
        { title: "Authentication & Authorisation", body: "Verify session, biometrics and access control logic." },
        { title: "Reporting & Remediation", body: "Detailed reports with severity, evidence and fix guidance." },
      ],
    },
  },
  {
    slug: "network-pentest",
    hero: "Network Penetration Testing Service in Chennai",
    lead: {
      title:
        "Network Security Service Providers in Chennai — We Offer a Wide Range of Network Security Services",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
      paragraphs: [
        "Network security service providers in Chennai are many in number. But among all, Hawksberg International is one of the best companies which provides the best network security services of all. Our network security consultants perform a vulnerability scan against other organisations' networks. The primary objective for network penetration testing services by Hawksberg is to identify exploitable vulnerabilities in networks, systems, hosts, and network devices.",
        "We provide Network Penetration Testing Services to identify assets, links, and its high-risk security gaps and flaws as they are known as the best Network Security Company in Chennai. Our Network Security Audit Company methodology includes an attack simulation carried out by our experienced reputed security consultants. Enhance your security posture, reduce risk, facilitate compliance, and improve operational efficiency with our expertise.",
      ],
    },
    panels: [
      {
        title: "Network Penetration Testing Company in Chennai",
        body: [
          "Network Penetration Testing Company in Chennai are many in number. But among all, Hawksberg International is one of the best companies which provides the best network security services of all.",
          "Our network security consultants perform a vulnerability scan against other organisations' networks. The primary objective for network penetration testing services by Hawksberg is to identify exploitable vulnerabilities in networks, systems, hosts, and network devices.",
          "We provide Network Penetration Testing Services to identify assets, links, and its high-risk security gaps and flaws as they are known as the best Network Security Company in Chennai.",
        ],
      },
    ],
    grid: {
      title: "Our Network Security Methodology",
      items: [
        { title: "Asset Discovery", body: "Comprehensive mapping of network assets, devices and open ports." },
        { title: "Vulnerability Scanning", body: "Automated and manual scanning to identify security weaknesses." },
        { title: "Exploitation Testing", body: "Controlled exploitation to validate the severity of vulnerabilities." },
        { title: "Lateral Movement", body: "Testing for potential internal movement after initial compromise." },
        { title: "Privilege Escalation", body: "Assessing the ability to gain elevated access within the network." },
        { title: "Detailed Reporting", body: "Clear, actionable reports with risk ratings and remediation steps." },
      ],
    },
  },
];

export const trainings = [
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking Training",
    short:
      "Hands-on offensive security training covering reconnaissance, exploitation and reporting.",
    duration: "60 hours",
    level: "Beginner to Advanced",
    modules: [
      "Footprinting & Reconnaissance",
      "Scanning, Enumeration & Vulnerability Analysis",
      "System Hacking & Malware",
      "Web, Wireless & Cloud Attacks",
      "Cryptography & Reporting",
    ],
  },
  {
    slug: "bug-bounty",
    title: "Bug Bounty Training",
    short:
      "Learn to find, validate and responsibly disclose vulnerabilities on real bug bounty platforms.",
    duration: "45 hours",
    level: "Intermediate",
    modules: [
      "Bug bounty platforms & methodology",
      "Recon and asset discovery",
      "OWASP Top 10 in depth",
      "Business logic & API testing",
      "Writing winning reports",
    ],
  },
  {
    slug: "ccna",
    title: "CCNA - Cisco Certified Network Associate",
    short:
      "Foundational networking skills aligned with the latest Cisco CCNA blueprint.",
    duration: "80 hours",
    level: "Beginner",
    modules: [
      "Network Fundamentals",
      "Network Access & VLANs",
      "IP Connectivity & Routing",
      "IP Services (DHCP, NAT, QoS)",
      "Security Fundamentals & Automation",
    ],
  },
  {
    slug: "python",
    title: "Python Programming",
    short:
      "Industry-grade Python training with projects in automation, data and security scripting.",
    duration: "50 hours",
    level: "Beginner to Intermediate",
    modules: [
      "Core Python & OOP",
      "File I/O and Modules",
      "Web scraping & Automation",
      "APIs and Databases",
      "Capstone project",
    ],
  },
  {
    slug: "java",
    title: "Java Programming",
    short:
      "Master core and advanced Java with hands-on backend and enterprise patterns.",
    duration: "60 hours",
    level: "Beginner to Intermediate",
    modules: [
      "Core Java & OOP",
      "Collections & Generics",
      "JDBC & Multithreading",
      "Spring Boot fundamentals",
      "Project work",
    ],
  },
  {
    slug: "penetration-testing",
    title: "Penetration Testing (VAPT)",
    short:
      "Professional VAPT methodology covering web, mobile, network and API attack surfaces.",
    duration: "55 hours",
    level: "Intermediate to Advanced",
    modules: [
      "VAPT methodology & standards",
      "Web application pentest",
      "Mobile application pentest",
      "Network pentest",
      "Reporting & remediation",
    ],
  },
  {
    slug: "ccnp",
    title: "CCNP Certification Training",
    short:
      "CCNP Routing & Switching certification training delivered by industry experts in Chennai.",
    duration: "70 hours",
    level: "Intermediate to Advanced",
    modules: [
      "Advanced Routing — OSPF, EIGRP, route redistribution & policy-based routing",
      "BGP & WAN fundamentals, path attributes and WAN technologies",
      "Enterprise Design — campus, data centre and branch network architecture",
      "Network Security — ACLs, VPNs, 802.1X, firewall integration",
      "QoS — Quality of Service models, classification and queuing",
      "Automation — Python, REST APIs, Ansible, network programmability",
    ],
  },
];

export const isoTrainings = [
  {
    slug: "iso-9001",
    code: "ISO 9001",
    title: "ISO 9001 Training",
    short:
      "In-depth ISO 9001 Quality Management System training delivered by certified lead auditors and seasoned industry practitioners.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    intro:
      "At Hawksberg International, we believe that in order for an organization to adapt to the quality management system procedures, there should be an individual within the company who has the full capability to implement the international business protocols, allowing the company to expand without sacrificing the workplace and customer safety.",
    detail:
      "With our in-house instructors and experts, we can support your company by providing ISO training courses that offer in-depth knowledge required for specific business types, and ISO standards to equip your team with the knowledge and skills to deliver sustainable quality.",
    modules: [
      "Introduction to ISO 9001 & QMS principles",
      "Process approach and risk-based thinking",
      "Documentation, records & control of information",
      "Internal auditing techniques (ISO 19011)",
      "Management review & continual improvement",
    ],
    audience: [
      "Quality managers and QMS coordinators",
      "Internal auditors and process owners",
      "Operations & production leadership",
      "Consultants and certification candidates",
    ],
  },
  {
    slug: "iso-27001",
    code: "ISO 27001",
    title: "ISO 27001 Training",
    short:
      "Information Security Management System (ISMS) training aligned to the latest ISO/IEC 27001 framework.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    intro:
      "Empower your team to design, implement and audit a robust Information Security Management System aligned to ISO/IEC 27001.",
    detail:
      "Our ISO 27001 training combines theory with case studies, walking through risk assessments, Annex A controls and audit techniques used by certified professionals.",
    modules: [
      "ISMS fundamentals & ISO 27001 structure",
      "Risk assessment and treatment",
      "Annex A controls walkthrough",
      "Internal audit and management review",
      "Certification and surveillance audits",
    ],
    audience: [
      "Information security officers",
      "IT managers and compliance leads",
      "Internal auditors",
      "Risk and governance professionals",
    ],
  },
  {
    slug: "iso-14001",
    code: "ISO 14001",
    title: "ISO 14001 Training",
    short:
      "Environmental Management System training to meet sustainability commitments and regulatory obligations.",
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1200&q=80",
    intro:
      "Equip your team with the skills to identify environmental aspects, set objectives and operate an effective EMS aligned to ISO 14001.",
    detail:
      "Our facilitators bring hands-on field experience across manufacturing, energy and services sectors to make EMS practical and audit-ready.",
    modules: [
      "EMS fundamentals & ISO 14001 clauses",
      "Aspects, impacts and legal compliance",
      "Operational planning and control",
      "Performance evaluation and reporting",
      "Internal audit and improvement",
    ],
    audience: [
      "EHS and sustainability managers",
      "Plant heads and operations leads",
      "Auditors and consultants",
      "Compliance and regulatory teams",
    ],
  },
  {
    slug: "iso-45001",
    code: "ISO 45001",
    title: "ISO 45001 Training",
    short:
      "Occupational Health & Safety Management System training built around real workplace scenarios.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    intro:
      "Build a culture of safety with structured ISO 45001 training covering hazard identification, controls and audit readiness.",
    detail:
      "Sessions blend regulatory context with practical drills, role-plays and incident-investigation case studies.",
    modules: [
      "OH&S management principles",
      "Hazard identification & risk control",
      "Worker participation and consultation",
      "Emergency preparedness",
      "Audit and continual improvement",
    ],
    audience: [
      "Safety officers and EHS leads",
      "Site supervisors and managers",
      "Internal auditors",
      "HR and compliance teams",
    ],
  },
];

export const stats = [
  { value: "40+", label: "Years of combined expertise" },
  { value: "500+", label: "Projects delivered" },
  { value: "20+", label: "Countries served" },
  { value: "98%", label: "Client retention" },
];
