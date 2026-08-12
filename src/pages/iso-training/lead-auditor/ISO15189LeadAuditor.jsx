import EnquiryForm from "@/components/EnquiryForm";

import iso15189Img from "@/assets/isotraining/iso15189.webp";
import Layout from "@/components/Layout";
export default function ISO15189LeadAuditor() {
  const modules = [
    "Introduction to ISO 15189:2022",
    "Medical Laboratory Quality Management Systems",
    "General Requirements: Impartiality & Confidentiality",
    "Structural & Governance Requirements",
    "Personnel & Competency Management",
    "Facilities, Equipment & Metrological Traceability",
    "Reagents & Consumables Management",
    "Pre-Examination Processes",
    "Examination Methods & Validation",
    "Measurement Uncertainty & Result Validation",
    "Post-Examination Processes & Reporting",
    "Point-of-Care Testing (POCT)",
    "Management System Requirements",
    "Risk Management & Corrective Actions",
    "Internal Audits & Management Reviews",
    "ISO 19011 Audit Principles",
    "Audit Planning & Preparation",
    "Evidence Collection & Audit Reporting",
  ];

  const audience = [
    "Medical Laboratory Professionals",
    "Laboratory Managers",
    "Quality Assurance Managers",
    "Medical Laboratory Staff",
    "Lead Auditors",
    "Internal Auditors",
    "Laboratory Consultants",
    "Healthcare Quality Professionals",
  ];

  const courseCovers = [
    "The structure of ISO 15189:2022 — requirements for quality and competence in medical laboratories, aligned with ISO/IEC 17025.",
    "General requirements — impartiality, confidentiality, and requirements regarding patients.",
    "Structural and governance requirements — legal entity, the laboratory director, and organizational structure.",
    "Resource requirements — personnel, facilities and environmental conditions, equipment, equipment calibration and metrological traceability, reagents and consumables, and externally provided products and services.",
    "Process requirements across the total testing process — pre-examination (request, primary sample collection and handling), examination (selection, verification and validation of methods, measurement uncertainty, ensuring the validity of results), and post-examination (reporting, release and storage of results), plus Point-of-Care Testing (POCT).",
    "Management system requirements — documentation and records, risk management, improvement, corrective action, internal audit, and management review.",
    "Audit principles and the full audit lifecycle: planning, conducting, gathering evidence, grading nonconformities, reporting, and follow-up.",
  ];

  const prerequisites = [
    "A basic understanding of Quality Management Systems.",
    "Some experience in the medical laboratory sector is helpful.",
    "Previous auditing knowledge is beneficial but not mandatory.",
  ];

  const faqs = [
    {
      question: "What is the ISO 15189 Lead Auditor course?",
      answer:
        "A professional Lead Auditor course delivered by Hawksberg International that equips participants with the knowledge and practical skills to plan, conduct, report, and lead audits of medical (clinical) laboratories against ISO 15189:2022 in accordance with ISO 19011 guidelines.",
    },
    {
      question: "What does the course cover?",
      answer:
        "The course covers the ISO 15189:2022 structure, requirements for quality and competence in medical laboratories aligned with ISO/IEC 17025, the pre-examination, examination, and post-examination processes, risk management, and the complete audit lifecycle.",
    },
    {
      question: "What's the difference between auditing ISO 15189 and ISO/IEC 17025?",
      answer:
        "Both standards address laboratory competence, but ISO 15189 is specifically designed for medical and clinical laboratories with a focus on patient testing, while ISO/IEC 17025 applies to general testing and calibration laboratories.",
    },
    {
      question: "What are the prerequisites?",
      answer:
        "A basic understanding of Quality Management Systems and some experience in the medical laboratory sector is helpful. Previous auditing knowledge is beneficial but not mandatory.",
    },
    {
      question: "How is the course assessed, and how long is it?",
      answer:
        "Participants are evaluated through continuous assessment and a final examination. Successful candidates receive a certificate of successful course completion. The course duration is 5 days (40 hours) and is available as Open Classroom, In-House, or Virtual Training.",
    },
  ];

  return (
    <Layout>
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-24 text-brand-foreground"
        style={{
          backgroundImage: `url(${iso15189Img})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 grid-pattern opacity-15" />

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
            ISO 15189 Lead Auditor Training
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
              <p className="text-[15px] leading-9 text-muted-foreground text-justify">
                ISO 15189 Lead Auditor Training equips professionals with the
                knowledge and practical skills required to plan, conduct,
                report, and follow up first-, second-, and third-party audits
                of Medical Laboratory Quality Management Systems in accordance
                with ISO 15189:2022 and ISO 19011 guidelines.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-muted-foreground text-justify">
                Hawksberg International provides professional ISO 15189 Lead
                Auditor Training delivered by experienced industry experts.
                The course combines instructor-led sessions, practical
                laboratory audit exercises, real-world medical laboratory case
                studies, and interactive discussions to help participants
                develop the confidence to evaluate laboratory quality systems,
                ensure compliance with ISO 15189:2022 requirements, and
                successfully lead medical laboratory audit teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT + ENQUIRY
      ========================================================= */}
      <section className="bg-muted/40 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-3">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
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

              <p className="mt-8 max-w-4xl text-[15px] leading-9 text-slate-700 text-justify">
                ISO 15189 Lead Auditor Training equips professionals with the
                knowledge and practical skills required to plan, conduct,
                report, and follow up first-, second-, and third-party audits
                of Medical Laboratory Quality Management Systems in accordance
                with ISO 15189:2022 and ISO 19011 guidelines.
              </p>

              <p className="mt-6 max-w-4xl text-[15px] leading-9 text-slate-700 text-justify">
                Hawksberg International provides professional ISO 15189 Lead
                Auditor Training delivered by experienced industry experts.
                The course combines instructor-led sessions, practical
                laboratory audit exercises, real-world medical laboratory case
                studies, and interactive discussions to help participants
                develop the confidence to evaluate laboratory quality systems,
                ensure compliance with ISO 15189:2022 requirements, and
                successfully lead medical laboratory audit teams.
              </p>
            </div>

            {/* Course Covers */}
            <div>
              <h2 className="font-display text-3xl">
                What the ISO 15189 Lead Auditor Course Covers
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
                {prerequisites.map((item, index) => (
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

            {/* FAQ */}
            <div>
              <h2 className="font-display text-3xl">
                ISO 15189 Training — Frequently Asked Questions
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