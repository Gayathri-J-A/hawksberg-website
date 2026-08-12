import { Link } from "react-router-dom";
import EnquiryForm from "@/components/EnquiryForm";
import Layout from "@/components/Layout";

import fssc22000Img from "@/assets/isotraining/fssc22000.webp";

export default function FSSC22000LeadAuditor() {
  const modules = [
    "Introduction to FSSC 22000",
    "ISO 22000 Food Safety Management System",
    "HACCP Principles & Hazard Analysis",
    "Critical Control Points (CCPs)",
    "Operational PRPs",
    "Sector-Specific PRPs (ISO/TS 22002-x)",
    "Food Fraud Mitigation",
    "Food Defense",
    "Allergen Management",
    "Environmental Monitoring",
    "Management of Services & Purchased Materials",
    "Audit Planning",
    "Audit Execution",
    "Evidence Collection & Reporting",
    "Audit Follow-Up & Certification",
  ];

  const audience = [
    "Food Industry Professionals",
    "Food Safety Managers",
    "Quality Assurance Managers",
    "Lead Auditors",
    "Internal Auditors",
    "Food Safety Consultants",
    "Production Managers",
    "FSMS Professionals",
  ];

  const courseCovers = [
    "FSSC 22000 is a GFSI-recognized certification scheme built on three components, all of which the course addresses.",
    "ISO 22000 — the Food Safety Management System (FSMS) requirements, including HACCP principles, hazard analysis, Critical Control Points (CCPs), and Operational Prerequisite Programmes (OPRPs).",
    "Sector-specific Prerequisite Programmes (PRPs) — the relevant ISO/TS 22002-x technical specification for your food sector.",
    "Additional FSSC 22000 requirements — including food fraud mitigation, food defense, allergen management, environmental monitoring, and management of services and purchased materials.",
  ];

  const faqs = [
    {
      question: "What is the FSSC 22000 Lead Auditor course?",
      answer:
        "An IRCA-certified course that qualifies participants to lead audits against the FSSC 22000 Food Safety System Certification Scheme in line with ISO 19011 and ISO/IEC 17021.",
    },
    {
      question: "What's the difference between FSSC 22000 and ISO 22000?",
      answer:
        "FSSC 22000 is a GFSI-recognised certification scheme built on three components — ISO 22000, sector-specific Prerequisite Programmes (PRPs, such as the ISO/TS 22002 series), and additional FSSC requirements. ISO 22000 is the underlying Food Safety Management System standard.",
    },
    {
      question: "What does the course cover?",
      answer:
        "The course covers the three components of FSSC 22000, HACCP principles, prerequisite programmes, hazard analysis, food safety culture, additional FSSC requirements, and auditing the certification scheme across the complete audit lifecycle.",
    },
    {
      question: "What are the prerequisites?",
      answer:
        "A working knowledge of ISO 22000, Food Safety Management Systems, and HACCP concepts is recommended.",
    },
    {
      question: "How is the course assessed, and how long is it?",
      answer:
        "Participants are evaluated through continuous assessment and a written examination. Both must be successfully completed to receive the certificate. The course typically runs for 5 days (approximately 40 hours) and is available through virtual classroom or in-house delivery.",
    },
  ];

  return (
    <Layout>
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-24 text-brand-foreground"
        style={{
          backgroundImage: `url(${fssc22000Img})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-15" />

        {/* Overlay Image */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091215367-9b6c00b3039c?auto=format&fit=crop&w=1920&q=80')",
          }}
        />

        <div className="container-x relative text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            ISO Training Programs
          </p>

          <h1
            className="mt-4 font-display text-5xl uppercase tracking-wide md:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            FSSC 22000 Lead Auditor Training
          </h1>

          <div className="mx-auto mt-5 gold-divider" />
        </div>
      </section>

      {/* =========================================================
          COURSE OVERVIEW
      ========================================================= */}
      <section className="bg-background py-20">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl uppercase tracking-wide text-foreground md:text-4xl">
              Course Overview
            </h2>

            <div className="mt-4 gold-divider" />

            <div className="mt-8 max-w-5xl">
              <p className="text-[15px] leading-9 text-muted-foreground whitespace-pre-line text-justify">
                FSSC 22000 Lead Auditor Training equips professionals with the
                knowledge and practical skills required to plan, conduct,
                report, and follow up first-, second-, and third-party audits
                of Food Safety Management Systems (FSMS) in accordance with
                the FSSC 22000 certification scheme, ISO 22000, and ISO 19011
                guidelines.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-muted-foreground whitespace-pre-line text-justify">
                Hawksberg International provides professional FSSC 22000 Lead
                Auditor Training delivered by experienced industry experts.
                The course combines instructor-led sessions, practical audit
                exercises, HACCP-based case studies, real-world food safety
                scenarios, and interactive discussions to help participants
                develop the confidence to evaluate Food Safety Management
                Systems, ensure compliance with FSSC 22000 requirements, and
                successfully lead food safety audit teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MODULES + ENQUIRY
      ========================================================= */}
      <section className="bg-muted/40 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">

            {/* Modules */}
            <div>
              <h2 className="font-display text-3xl">
                Modules Covered
              </h2>

              <div className="mt-3 gold-divider" />

              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {modules.map((module, index) => (
                  <li
                    key={module}
                    className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <span className="font-display text-2xl text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pt-1 text-[14px] leading-6 text-slate-700">
                      {module}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Course Details */}
            <div>
              <h2 className="font-display text-3xl">
                Course Details
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-6 space-y-3 text-slate-700">
                <p>
                  <strong>Duration :</strong> 40 Hours
                </p>

                <p>
                  <strong>Level :</strong> Advanced
                </p>
              </div>
            </div>

            {/* About the Course */}
            <div>
              <h2 className="font-display text-3xl">
                About the Course
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 max-w-4xl text-[15px] leading-9 text-slate-700 whitespace-pre-line">
                FSSC 22000 Lead Auditor Training equips professionals with the
                knowledge and practical skills required to plan, conduct,
                report, and follow up first-, second-, and third-party audits
                of Food Safety Management Systems (FSMS) in accordance with
                the FSSC 22000 certification scheme, ISO 22000, and ISO 19011
                guidelines.
              </p>

              <p className="mt-6 max-w-4xl text-[15px] leading-9 text-slate-700 whitespace-pre-line">
                Hawksberg International provides professional FSSC 22000 Lead
                Auditor Training delivered by experienced industry experts.
                The course combines instructor-led sessions, practical audit
                exercises, HACCP-based case studies, real-world food safety
                scenarios, and interactive discussions to help participants
                develop the confidence to evaluate Food Safety Management
                Systems, ensure compliance with FSSC 22000 requirements, and
                successfully lead food safety audit teams.
              </p>
            </div>

            {/* Course Covers */}
            <div>
              <h2 className="font-display text-3xl">
                What the FSSC 22000 Lead Auditor Course Covers
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 max-w-4xl space-y-5">
                {courseCovers.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-[15px] leading-8 text-slate-700"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <span className="flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Should Attend */}
            <div>
              <h2 className="font-display text-3xl">
                Who Should Attend
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 max-w-4xl space-y-5">
                {audience.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-[15px] leading-8 text-slate-700"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <span className="flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div>
              <h2 className="font-display text-3xl">
                Prerequisites
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 max-w-4xl space-y-5">
                <li className="flex items-start gap-4 text-[15px] leading-8 text-slate-700">
                  <span className="mt-1 text-lg text-gold">
                    ✓
                  </span>

                  <span className="flex-1">
                    A working knowledge of ISO 22000, Food Safety Management
                    Systems, and HACCP concepts is recommended.
                  </span>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-3xl">
                FSSC 22000 Lead Auditor Training — Frequently Asked Questions
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-6 space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <summary className="cursor-pointer font-semibold text-slate-800">
                      {faq.question}
                    </summary>

                    <p className="mt-4 leading-8 text-slate-700">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              ENQUIRY FORM
          ===================================================== */}
          <aside className="self-start lg:sticky lg:top-28">
            <EnquiryForm compact />
          </aside>
        </div>
      </section>
    </>
    </Layout>
  );
}