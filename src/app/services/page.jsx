import Layout from "@/components/Layout";
import Link from "next/link";
import consultingServiceImage from "@/assets/services/consultingservice.webp";
import consultantImage from "@/assets/services/iso-consultancy-chennai.webp";

export const metadata = {
  title: {
    absolute: "ISO Consultants for Certification & Compliance | Hawksberg International",
  },
  description:
    "ISO certification and compliance support for businesses, covering ISO 9001, ISO 14001, ISO 27001, ISO 45001 and other international standards.",
  keywords: ["ISO certification consultant", "ISO Certification"],
  robots: { index: true, follow: true },
  alternates: { canonical: "/ISO-consulting-services" },
};

const standards = [
  {
    name: "ISO 9001",
    title: "Quality Management System",
    description:
      "Helps organisations establish consistent processes, improve quality and enhance customer satisfaction.",
    href: "/services/iso-9001",
  },
  {
    name: "ISO 14001",
    title: "Environmental Management System",
    description:
      "Helps organisations manage environmental responsibilities and improve environmental performance.",
    href: "/services/iso-14001",
  },
  {
    name: "ISO 27001",
    title: "Information Security Management System",
    description:
      "Provides a structured framework for managing information security risks and protecting organisational information.",
    href: "/services/iso-27001",
  },
  {
    name: "ISO 45001",
    title: "Occupational Health & Safety",
    description:
      "Helps organisations establish a systematic approach to improving workplace health and safety.",
    href: "/services/iso-45001",
  },
  {
    name: "ISO 50001",
    title: "Energy Management System",
    description:
      "Supports organisations in improving energy performance, efficiency and energy management practices.",
    href: "/services/iso-50001",
  },
  {
    name: "IATF 16949",
    title: "Automotive Quality Management",
    description:
      "A specialised quality management framework for organisations in the automotive supply chain.",
    href: "/services/iatf-16949",
  },
  {
    name: "TISAX",
    title: "Automotive Information Security",
    description:
      "Supports information security requirements within the automotive industry and its supply chain.",
    href: "/services/tisax",
  },
  {
    name: "DPDP",
    title: "Data Protection & Privacy Compliance",
    description:
      "Supports organisations in addressing data protection and privacy obligations under India's digital personal data framework.",
    href: "/services/dpdp",
  },
];

const standardsDo = [
  "Make the development, manufacturing and supply of products and services more efficient, safer and cleaner",
  "Facilitate trade between countries and make it fairer",
  "Provide governments with a technical base for health, safety and environmental legislation, and conformity assessment",
  "Share technological advances and good management practice",
  "Disseminate innovation",
  "Safeguard consumers, and users in general, of products and services",
  "Make life simpler by providing solutions to common problems",
];

const beneficiaries = [
  {
    name: "Businesses",
    description:
      "ISO standards help businesses develop products and services that meet internationally accepted requirements and compete across wider markets.",
  },
  {
    name: "Innovators",
    description:
      "International standards support compatibility, safety and the development and adoption of new technologies.",
  },
  {
    name: "Customers",
    description:
      "International standards provide wider choice, quality, reliability and compatibility.",
  },
  {
    name: "Governments",
    description:
      "International Standards provide technological and scientific bases supporting health, safety and environmental legislation.",
  },
  {
    name: "Consumers",
    description:
      "Conformity with International Standards provides assurance about quality, safety and reliability.",
  },
  {
    name: "The Planet",
    description:
      "International Standards relating to air, water, soil, emissions and environmental aspects can support efforts to preserve the environment.",
  },
];

const consultingServices = [
  {
    name: "ISO 27001 Consulting",
    description:
      "Information security management system implementation and certification guidance to help organisations establish a structured approach to information security.",
    href: "/services/iso-27001",
  },
  {
    name: "ISO 9001 Consulting",
    description:
      "Practical quality management system consulting to improve processes, consistency and customer satisfaction.",
    href: "/services/iso-9001",
  },
  {
    name: "ISO 14001 Consulting",
    description:
      "Support for establishing and improving environmental management practices and organisational environmental performance.",
    href: "/services/iso-14001",
  },
  {
    name: "ISO 45001 Consulting",
    description:
      "Guidance for implementing an occupational health and safety management system and strengthening workplace safety practices.",
    href: "/services/iso-45001",
  },
  {
    name: "ISO 50001 Consulting",
    description:
      "Consulting support for improving energy management, efficiency and energy performance.",
    href: "/services/iso-50001",
  },
  {
    name: "IATF 16949 Consulting",
    description:
      "Specialised consulting support for automotive organisations seeking to strengthen quality management and supply-chain processes.",
    href: "/services/iatf-16949",
  },
  {
    name: "TISAX Consulting",
    description:
      "Information security consulting designed around automotive industry information security requirements.",
    href: "/services/tisax",
  },
  {
    name: "DPDP Compliance",
    description:
      "Practical support for organisations working towards stronger personal data protection and privacy compliance.",
    href: "/services/dpdp",
  },
];

const otherServices = [
  {
    category: "COMPLIANCE SERVICES",
    items: [
      {
        name: "GDPR Managed Service",
        description:
          "Ongoing support for organisations looking to strengthen their GDPR-related privacy and data protection practices.",
        href: "/info/gdpr",
      },
      {
        name: "SOC Consulting Service",
        description:
          "Support for organisations seeking to establish and improve security operations, monitoring and incident response capabilities.",
        href: "/info/soc-consulting",
      },
    ],
  },
  {
    category: "PENETRATION TESTING SERVICES",
    items: [
      {
        name: "VAPT Testing",
        description:
          "Identify security weaknesses across applications and infrastructure through vulnerability assessment and penetration testing.",
        href: "/info/vapt",
      },
      {
        name: "Web Penetration Testing",
        description:
          "Assess web applications for security weaknesses that could affect data, users or business operations.",
        href: "/info/web-pentest",
      },
      {
        name: "Mobile App Penetration Testing",
        description:
          "Evaluate mobile applications for vulnerabilities across application logic, APIs and security controls.",
        href: "/info/mobile-pentest",
      },
      {
        name: "Network Penetration Testing",
        description:
          "Assess network infrastructure for exploitable weaknesses and security gaps.",
        href: "/info/network-pentest",
      },
    ],
  },
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`max-w-3xl ${light ? "text-white" : "text-foreground"}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl md:text-4xl">{title}</h2>
      <div className="mt-4 gold-divider" />
      {description && (
        <p className="mt-6 text-base leading-8 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

function ServiceCard({ service, dark = false }) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl border p-6 transition-transform duration-300 hover:-translate-y-1 ${
        dark
          ? "border-white/10 bg-white/5 text-white"
          : "border-border bg-card text-foreground shadow-sm"
      }`}
    >
      <h3 className="font-display text-xl">{service.name}</h3>
      <p className={`mt-4 flex-1 text-sm leading-7 ${dark ? "text-white/70" : "text-muted-foreground"}`}>
        {service.description}
      </p>
      {service.href && (
        <Link
          href={service.href}
          className="mt-6 inline-flex w-fit items-center font-semibold text-gold transition-colors hover:text-gold/80"
        >
          Know More <span className="ml-2" aria-hidden="true">-&gt;</span>
        </Link>
      )}
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <Layout>
        <main>
        <section
          className="relative overflow-hidden bg-brand bg-cover bg-center bg-no-repeat py-24 text-white md:py-32"
          style={{ backgroundImage: `url(${consultingServiceImage.src})` }}
        >
          <div className="absolute inset-0 bg-brand/65" />
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="container-x relative z-10">
            <h1 className="mt-4 max-w-5xl font-display text-4xl leading-tight md:text-6xl">
              ISO CONSULTING SERVICES
            </h1>
            <div className="mt-6 gold-divider" />
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">
              Building stronger organisations through internationally recognised standards, practical compliance solutions and professional security services.
            </p>
          </div>
        </section>

        <section className="container-x py-20 md:py-24">
          <SectionHeading title="ISO Standards & Professional Services" />
          <p className="mt-8 max-w-4xl text-base leading-8 text-muted-foreground">
            ISO India Certification makes the task of understanding the requirements of the ISO standards easier for businesses and helps them implement them in a smoother way. We provide guidance towards achieving International ISO, HACCP, GMP, CE Marking and other certification requirements.
          </p>
        </section>

        <section className="bg-secondary/40 py-20 md:py-24">
          <div className="container-x">
            <SectionHeading title="Why ISO Standards?" />
            <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="flex items-start justify-center">
                <img
                  src={consultantImage.src}
                  alt="ISO Consultancy Chennai"
                  className="h-auto max-h-80 w-auto max-w-full rounded-xl object-contain"
                />
              </div>
              <div className="space-y-5 text-base leading-8 text-muted-foreground">
                <div>
                  <h3 className="font-display text-2xl text-gold">Why Standards Matter</h3>
                  <div className="mt-3 gold-divider" />
                </div>
                <p>Standards make an enormous and positive contribution to most aspects of our lives.</p>
                <p>Standards ensure desirable characteristics of products and services such as quality, environmental friendliness, safety, reliability, efficiency and interchangeability - and at an economical cost.</p>
                <p>When products and services meet our expectations, we tend to take this for granted and be unaware of the role of standards. However, when standards are absent, we soon notice. We soon care when products turn out to be of poor quality, do not fit, are incompatible with equipment that we already have, are unreliable or dangerous.</p>
                <p>When products, systems, machinery and devices work well and safely, it is often because they meet standards. And the organization responsible for many thousands of the standards which benefit the world is ISO.</p>
                <p>When standards are absent, we soon notice.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-x py-20 md:py-24">
          <SectionHeading title="What Standards Do" description="ISO Standards:" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {standardsDo.map((item, index) => (
              <article key={item} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <span className="text-sm font-bold text-gold">0{index + 1}</span>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-brand py-20 text-white md:py-24">
          <div className="container-x">
            <SectionHeading light title="Who Benefits From International Standards?" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {beneficiaries.map((beneficiary) => (
                <article key={beneficiary.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-display text-xl text-gold">{beneficiary.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{beneficiary.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-x py-20 md:py-24">
          <SectionHeading title="Standards & Frameworks We Support" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((standard) => (
              <ServiceCard key={standard.name} service={standard} />
            ))}
          </div>
        </section>

        <section className="bg-secondary/40 py-20 md:py-24">
          <div className="container-x">
            <SectionHeading
              title="Our Services"
              description="From management system implementation to cybersecurity and compliance, our services help organisations build stronger, safer and more efficient operations."
            />
            <div className="mt-14 space-y-16">
              <div>
                <h3 className="font-display text-2xl text-gold">ISO CONSULTING</h3>
                <div className="mt-3 gold-divider" />
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {consultingServices.map((service) => (
                    <ServiceCard key={service.name} service={service} />
                  ))}
                </div>
              </div>
              {otherServices.map((group) => (
                <div key={group.category}>
                  <h3 className="font-display text-2xl text-gold">{group.category}</h3>
                  <div className="mt-3 gold-divider" />
                  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {group.items.map((service) => (
                      <ServiceCard key={service.name} service={service} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-x py-20 md:py-24">
          <div className="rounded-2xl bg-brand px-6 py-12 text-center text-white md:px-12 md:py-16">
            <h2 className="font-display text-3xl md:text-4xl">Ready to Strengthen Your Organisation?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
              Talk to our experts about ISO certification, cybersecurity, compliance and risk management solutions tailored to your organisation.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/contact" className="rounded-md border border-gold px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink">Contact Us <span className="ml-2" aria-hidden="true">-&gt;</span></Link>
            </div>
          </div>
        </section>
        </main>
      </Layout>
    </>
  );
}