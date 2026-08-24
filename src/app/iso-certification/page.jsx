import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const standards = [
  {
    title: "ISO 9001",
    subtitle: "Quality Management System",
    description:
      "Build consistent processes, improve quality performance, strengthen customer satisfaction, and establish a culture of continual improvement.",
  },
  {
    title: "ISO 27001",
    subtitle: "Information Security Management System",
    description:
      "Create a structured framework for protecting information, managing security risks, and strengthening organizational information security.",
  },
  {
    title: "ISO 14001",
    subtitle: "Environmental Management System",
    description:
      "Develop systematic environmental practices, manage environmental impacts, and improve environmental performance across your organization.",
  },
  {
    title: "ISO 45001",
    subtitle: "Occupational Health & Safety",
    description:
      "Establish a practical framework for identifying workplace hazards, controlling occupational risks, and improving employee safety.",
  },
  {
    title: "ISO 22000",
    subtitle: "Food Safety Management System",
    description:
      "Strengthen food safety controls and establish systematic processes for managing food safety risks across relevant operations.",
  },
  {
    title: "IATF 16949",
    subtitle: "Automotive Quality Management",
    description:
      "Support automotive organizations in developing quality systems aligned with industry-specific requirements and customer expectations.",
  },
  {
    title: "ISO 50001",
    subtitle: "Energy Management System",
    description:
      "Improve energy performance through structured monitoring, management, measurement, and continual improvement.",
  },
  {
    title: "ISO 13485",
    subtitle: "Medical Devices Quality Management",
    description:
      "Establish a quality management framework suited to organizations involved in the design, production, and servicing of medical devices.",
  },
];

const industries = [
  {
    icon: "▦",
    title: "Manufacturing Companies",
    description:
      "Improve process consistency, quality control, supplier management, and operational performance through a structured management system.",
  },
  {
    icon: "⌘",
    title: "IT & Technology Companies",
    description:
      "Strengthen information security, service quality, process control, and customer confidence when working with sensitive or international business data.",
  },
  {
    icon: "◎",
    title: "Export-Oriented Businesses",
    description:
      "Build credibility with international customers and support supplier qualification, procurement, and export-related business requirements.",
  },
  {
    icon: "✚",
    title: "Healthcare & Pharmaceutical",
    description:
      "Develop appropriate quality, safety, information security, and sector-specific management practices for healthcare-related operations.",
  },
  {
    icon: "⌂",
    title: "Construction & Infrastructure",
    description:
      "Strengthen quality, safety, documentation, risk management, and operational controls while supporting tender and project requirements.",
  },
  {
    icon: "◈",
    title: "Food & Beverage Businesses",
    description:
      "Establish systematic food safety controls and improve operational processes throughout applicable food-related activities.",
  },
  {
    icon: "◆",
    title: "Startups & MSMEs",
    description:
      "Create reliable business processes, improve organizational credibility, and establish a stronger foundation for sustainable growth.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Greater Business Credibility",
    description:
      "Demonstrate your organization's commitment to structured processes and internationally recognized management practices.",
  },
  {
    number: "02",
    title: "Improved Business Processes",
    description:
      "Document, monitor, measure, and continually improve important processes throughout the organization.",
  },
  {
    number: "03",
    title: "Higher Customer Confidence",
    description:
      "Give customers and business partners greater confidence through a management system assessed against an applicable standard.",
  },
  {
    number: "04",
    title: "Tender & Supplier Opportunities",
    description:
      "Support certification requirements that may form part of government tenders, supplier qualification programs, and corporate contracts.",
  },
  {
    number: "05",
    title: "Stronger Risk Management",
    description:
      "Introduce systematic methods for identifying relevant risks, implementing controls, and reviewing their effectiveness.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "Create a structured cycle for reviewing performance, addressing problems, and improving the management system over time.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Initial Assessment",
    description:
      "We understand your organization, business activities, existing processes, certification objectives, and applicable requirements.",
  },
  {
    number: "02",
    title: "Gap Assessment",
    description:
      "Your current practices are reviewed against the selected ISO standard to identify missing controls, documentation, processes, and improvement areas.",
  },
  {
    number: "03",
    title: "Documentation Development",
    description:
      "We help establish or improve policies, procedures, records, process documents, and other management-system documentation relevant to your organization.",
  },
  {
    number: "04",
    title: "Implementation Support",
    description:
      "The management system is introduced into day-to-day operations, with relevant teams guided on responsibilities, controls, procedures, and records.",
  },
  {
    number: "05",
    title: "Internal Audit",
    description:
      "An internal audit evaluates whether the implemented system is functioning effectively and identifies remaining non-conformities or improvement opportunities.",
  },
  {
    number: "06",
    title: "Management Review",
    description:
      "Management reviews system performance, objectives, risks, audit findings, corrective actions, and improvement priorities before external assessment.",
  },
  {
    number: "07",
    title: "Certification Audit",
    description:
      "An independent certification body evaluates the organization's management system against the applicable ISO requirements.",
  },
  {
    number: "08",
    title: "Certification",
    description:
      "After successful completion of the certification process and resolution of applicable findings, the certification body proceeds with certification.",
  },
];

const approach = [
  {
    title: "Business-Focused Assessment",
    description:
      "We consider your organization, industry, existing practices, certification scope, and business objectives before planning implementation.",
  },
  {
    title: "Practical Documentation",
    description:
      "Documentation is developed around the way your organization actually operates rather than creating unnecessary paperwork.",
  },
  {
    title: "Team-Level Implementation",
    description:
      "Relevant employees are guided on their responsibilities so the management system becomes part of everyday business operations.",
  },
  {
    title: "Audit Readiness",
    description:
      "Before the external assessment, we help identify remaining gaps and prepare your organization to approach the certification audit with confidence.",
  },
];

const faqs = [
  {
    question: "How long does ISO certification take?",
    answer:
      "The timeframe depends on the organization's size, scope, existing processes, selected standard, and level of readiness. Organizations with established processes may progress faster, while businesses developing a management system from the beginning generally require more implementation time.",
  },
  {
    question: "Does an ISO consultant issue the certificate?",
    answer:
      "No. An ISO consultant supports the organization with assessment, implementation, documentation, and audit readiness. The actual certification assessment and certification decision are handled by an independent certification body.",
  },
  {
    question: "Which ISO standard is suitable for my organization?",
    answer:
      "The appropriate standard depends on your industry, business activities, customer expectations, regulatory environment, and business objectives. A preliminary assessment can help identify the standard that best fits your organization.",
  },
  {
    question: "Is ISO certification useful for small businesses?",
    answer:
      "Yes. ISO management systems can help smaller organizations establish consistent processes, improve credibility, manage operational risks, and prepare for customer, supplier, or tender requirements.",
  },
  {
    question: "What happens during an ISO certification audit?",
    answer:
      "The certification body evaluates relevant documented information, processes, implementation evidence, records, controls, and other applicable requirements to determine whether the management system conforms to the selected standard.",
  },
  {
    question: "Do we need to change all our existing processes?",
    answer:
      "Not necessarily. The objective is to identify where existing processes already satisfy the applicable requirements and where improvements are necessary. Implementation should be practical and appropriate to your organization's actual operations.",
  },
  {
    question: "Can you help us prepare for the certification audit?",
    answer:
      "Yes. Consulting support can include gap assessment, documentation, implementation guidance, internal audit support, corrective-action guidance, and overall certification-readiness preparation.",
  },
  {
    question: "Which ISO certification is suitable for a manufacturing company?",
    answer:
      "The answer depends on the organization's products, customers, industry, and objectives. ISO 9001 is commonly relevant to quality management, while automotive organizations may require additional industry-specific requirements such as IATF 16949.",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c98b2e]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-[#0b2341] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        // <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
         <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 10h11" />
      <path d="m11 5 5 5-5 5" />
    </svg>
  );
}

export default function ISOCertificationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* GLOBAL HEADER / NAVBAR */}
      <Header />

      {/* PAGE CONTENT */}
      <main>
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#0b2341] pt-9">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white blur-3xl" />
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#c98b2e] blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              {/* <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#f0b544]">
                ISO Certification Services
              </p> */}

              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
                ISO Certification Services
              </h1>

              <div className="mt-5 h-1 w-20 rounded-full bg-[#d99a2b]" />

              {/* <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50 sm:text-xl"> */}
              <p className="mt-6 max-w-3xl text-base leading-7 text-blue-50 sm:text-lg">
                Build stronger systems. Meet international standards. Earn
                customer confidence.
              </p>

              {/* <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg"> */}
              <p className="mt-4 max-w-3xl text-sm leading-6 text-blue-100 sm:text-base">
                Get end-to-end support for implementing and achieving ISO
                certification for your organization. Our consultants help you
                identify gaps, establish the required management system,
                prepare documentation, support implementation, and get your
                organization ready for certification audits.
              </p>

              {/* <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg"> */}
              <p className="mt-4 max-w-3xl text-sm leading-6 text-blue-100 sm:text-base">
                From quality and information security to environmental,
                occupational health and safety, food safety, and
                industry-specific requirements, we help you identify the right
                ISO standard for your business.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d99a2b] px-7 py-3.5 font-bold text-[#10243d] transition hover:bg-[#e7ad3d]"
                >
                  Get Free Consultation
                  <ArrowIcon />
                </a>

              </div>
            </div>

            <div
              id="consultation"
            //   className="rounded-2xl bg-white p-5 shadow-2xl sm:p-6"
            className="w-full max-w-[430px] justify-self-end bg-white p-5 shadow-none sm:p-6"
            >
              <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#c98b2e]">
                ISO Certification Support
              </p>

              <h2 className="mt-3 text-center text-2xl font-bold text-[#10243d] sm:text-3xl">
                Talk to an ISO Consultant
              </h2>

              <p className="mt-4 text-center leading-7 text-slate-600">
                Discuss your business requirements and find the right
                certification path for your organization.
              </p>

              <div className="mt-7 space-y-4">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-lg bg-[#c98b2e] px-6 py-4 font-bold text-white transition hover:bg-[#8f641f]"
                >
                  Request a Consultation
                </Link>

                <a
                  href="tel:+919080583283"
                  className="flex w-full items-center justify-center rounded-lg border-2 border-[#c98b2e] px-6 py-4 font-bold text-[#c98b2e] transition hover:bg-blue-50"
                >
                  Call +91 90805 83283
                </a>
              </div>

              <div className="mt-7 border-t border-slate-200 pt-6">
                <p className="text-center text-sm leading-6 text-slate-500">
                  Suitable for startups, MSMEs, manufacturing, IT, healthcare,
                  construction, food, export, and other business sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHAT IS ISO CERTIFICATION
        ========================================================= */}
        <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="International Standards & Management Systems"
              title="Understanding ISO Certification"
            />

            {/* <div className="mx-auto max-w-5xl space-y-6 text-lg leading-9 text-slate-600"> */}
            <div className="mx-auto max-w-5xl space-y-5 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              <p>
                ISO certification demonstrates that an organization's
                management system, processes, or operational practices have
                been assessed against the requirements of a recognized
                international standard.
              </p>

              <p>
                ISO certification does not represent one universal certificate.
                Different standards address different business requirements.
                Organizations may pursue standards such as ISO 9001 for
                quality management, ISO 27001 for information security, ISO
                14001 for environmental management, ISO 45001 for occupational
                health and safety, and ISO 22000 for food safety.
              </p>

              <p>
                The certification journey generally involves understanding the
                applicable requirements, assessing the organization's existing
                practices, addressing identified gaps, implementing the
                required controls and processes, and preparing for an
                independent certification audit.
              </p>

              <p>
                An important distinction is that a consultant supports the
                organization through preparation and implementation, while the
                final certificate is issued by an independent certification
                body following its certification assessment process.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY ISO
        ========================================================= */}
        <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Business Value"
              title="Why ISO Certification Matters for Your Business"
              description="A suitable ISO management system can help organizations strengthen internal processes, manage risks, demonstrate consistency, and build confidence with customers and business partners."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Operational Discipline",
                  text: "Create documented and repeatable processes that help teams work consistently across the organization.",
                },
                {
                  title: "Customer Confidence",
                  text: "Demonstrate a structured approach to managing processes against recognized international requirements.",
                },
                {
                  title: "Business Opportunities",
                  text: "Support customer, tender, supplier qualification, and procurement requirements where certification is relevant.",
                },
                {
                  title: "Risk Awareness",
                  text: "Establish systematic approaches for identifying, evaluating, controlling, and reviewing business risks.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-[#c98b2e]">
                    ✓
                  </div>

                  <h3 className="text-xl font-bold text-[#0b2341]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            WHO NEEDS IT
        ========================================================= */}
        <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Across Industries"
              title="Which Businesses Can Benefit From ISO Certification?"
              description="ISO certification can be valuable for organizations of different sizes and industries. The right standard depends on your activities, customer expectations, regulatory environment, and business objectives."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <div
                  key={industry.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-[#c98b2e]">
                    {industry.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#0b2341]">
                    {industry.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            STANDARDS
        ========================================================= */}
        <section className="bg-[#f7fafc] px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Certification Standards"
              title="ISO Standards for Different Business Needs"
              description="Different organizations require different management standards. We help you identify the standard that best fits your business objectives and operational requirements."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {standards.map((standard) => (
                <div
                  key={standard.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c98b2e] text-sm font-bold text-white">
                    ISO
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-[#0b2341]">
                    {standard.title}
                  </h3>

                  <p className="mt-1 font-semibold text-[#c98b2e]">
                    {standard.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            BENEFITS
        ========================================================= */}
        <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Business Benefits"
              title="Benefits of ISO Certification"
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="rounded-2xl border border-slate-200 p-7"
                >
                  <span className="text-sm font-black tracking-widest text-[#c98b2e]">
                    {benefit.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-[#0b2341]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROCESS
        ========================================================= */}
        <section
          id="process"
          className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Certification Journey"
              title="Our ISO Certification Process"
              description="We guide your organization through a structured journey from understanding your requirements to preparing for the independent certification assessment."
            />

            <div className="space-y-0">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex gap-5 border-b border-slate-200 py-7 md:gap-8"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c98b2e] text-sm font-bold text-white shadow-sm">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0b2341]">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-4xl leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="absolute left-[23px] top-[76px] hidden h-[calc(100%-48px)] w-px bg-blue-200 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            APPROACH
        ========================================================= */}
        <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Our Approach"
              title="Practical ISO Consulting From Gap Assessment to Audit Readiness"
              description="Our approach focuses on building management systems that work within your organization's actual operations rather than creating documentation that exists only for an audit."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {approach.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl bg-[#f7fafc] p-7"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c98b2e] font-bold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0b2341]">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

     

        {/* =========================================================
            CONSULTING VS CERTIFICATION
        ========================================================= */}
        <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c98b2e]">
                Important Distinction
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0b2341] sm:text-4xl">
                Consulting and Certification Are Different Roles
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-slate-600">
              <p>
                An ISO consultant helps an organization understand
                requirements, identify gaps, develop its management system,
                implement necessary processes, and prepare for certification.
              </p>

              <p>
                The final certification assessment is performed by an
                independent certification body. The certification body
                evaluates whether the organization's management system meets
                the applicable standard and makes the certification decision
                according to its own certification process.
              </p>

              <p>
                This separation helps maintain the independence of the
                certification assessment.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            CHENNAI
        ========================================================= */}
        <section className="bg-[#f7fafc] px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c98b2e]">
              
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0b2341] sm:text-4xl">
              ISO Certification Support for Businesses
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Whether you operate a manufacturing facility, technology company,
              healthcare organization, construction business, food-processing
              unit, export business, or growing MSME, the right ISO management
              system can help create a stronger operational foundation.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-600">
              We provide certification consulting support for organizations
              across different industrial and business regions,
              helping businesses prepare according to their industry, scope,
              and customer requirements.
            </p>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}
        <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="Frequently Asked Questions"
              title="ISO Certification FAQs"
              description="Answers to common questions businesses ask before beginning their ISO certification journey."
            />

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-[#0b2341]">
                    <span>{faq.question}</span>

                    <span className="shrink-0 text-2xl font-normal text-[#c98b2e] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-5 max-w-5xl border-t border-slate-100 pt-5 leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0b2341] px-7 py-14 text-center shadow-xl sm:px-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#f0b544]">
              Start Your Certification Journey
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Start Your ISO Certification Journey?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
              Tell us about your organization, industry, current processes,
              and certification objective. Our team can help you understand the
              applicable standard and plan the next steps.
            </p>

         <div className="mt-8 flex justify-center">
  <Link
    href="/contact"
    className="inline-flex items-center gap-2 rounded-full bg-[#d99a2b] px-8 py-4 font-bold text-[#10243d] transition hover:bg-[#e7ad3d]"
  >
    Get Free Consultation
    <ArrowIcon />
  </Link>
</div>
          </div>
        </section>
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />

      {/* EXISTING WHATSAPP FLOAT */}
      <WhatsAppFloat />
    </div>
  );
}