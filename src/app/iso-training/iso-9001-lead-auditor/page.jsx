import EnquiryForm from "@/components/EnquiryForm";

import iso9001Img from "@/assets/Training.webp";
import Layout from "@/components/Layout";

export const metadata = { title: "ISO 9001 Lead Auditor Training", description: "ISO 9001 lead auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-9001-lead-auditor" } };
export default function ISO9001LeadAuditor() {
  const modules = [
    "Introduction to ISO 9001:2015",
    "Quality Management Principles",
    "Annex SL High-Level Structure",
    "Context of the Organization (Clause 4)",
    "Leadership & Quality Policy (Clause 5)",
    "Planning & Risk-Based Thinking (Clause 6)",
    "Support: Resources, Competence & Documentation (Clause 7)",
    "Operational Planning & Control (Clause 8)",
    "Performance Evaluation & Internal Audits (Clause 9)",
    "Continual Improvement & Corrective Actions (Clause 10)",
    "ISO 19011 Audit Principles",
    "First-, Second- & Third-Party Audits",
    "Audit Planning & Preparation",
    "Audit Checklists & Objective Evidence",
    "Nonconformity Classification",
    "Audit Reporting & Follow-Up",
  ];

  const audience = [
    "Quality Managers",
    "Quality Assurance Managers",
    "Quality Control Managers",
    "Lead Auditors",
    "Internal Auditors",
    "Management Representatives",
    "ISO Consultants",
    "Professionals involved in Quality Management Systems",
  ];

  const courseCovers = [
    "The structure of ISO 9001:2015 (the Annex SL high-level structure) and the seven quality management principles.",
    "Context of the organization and the needs of interested parties (Clause 4).",
    "Leadership, the quality policy, and organizational roles and responsibilities (Clause 5).",
    "Planning — quality objectives and risk-based thinking (Clause 6).",
    "Support — resources, competence, awareness, and documented information (Clause 7).",
    "Operation — operational planning and control of products and services (Clause 8).",
    "Performance evaluation — monitoring, measurement, internal audit, and management review (Clause 9).",
    "Improvement — nonconformity, corrective action, and continual improvement (Clause 10).",
    "Audit principles, audit types (first-, second-, third-party), and the full audit lifecycle: planning, preparing checklists, conducting the audit, gathering objective evidence, grading nonconformities, reporting, and follow-up.",
  ];

  const benefits = [
    "Understand ISO 9001:2015 requirements in detail.",
    "Develop professional auditing skills.",
    "Plan and lead Quality Management System audits.",
    "Identify nonconformities effectively.",
    "Improve organisational compliance.",
    "Gain an internationally recognised qualification.",
  ];

  const faqs = [
    {
      question: "Who should attend this course?",
      answer:
        "Quality Managers, Internal Auditors, Lead Auditors, Consultants and professionals responsible for Quality Management Systems.",
    },
    {
      question: "Is this course suitable for beginners?",
      answer:
        "Basic knowledge of ISO 9001 is recommended before attending the Lead Auditor course.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes. Participants who successfully complete the course and assessment will receive a recognised certificate.",
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
          backgroundImage: `url(${iso9001Img.src})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Grid Pattern */}
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
            ISO 9001 Lead Auditor Training
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
                The ISO 9001 Lead Auditor course intends to provide
                participants with the necessary expertise to perform first-,
                second- and third-party audits of a Quality Management System
                and report on the compliance and effectiveness of the system.
                The course covers ISO 9001 Quality Management Systems
                requirements and provides guidance on how to plan and conduct
                an audit in accordance with ISO 19011 Guidelines for Auditing
                Management Systems.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-muted-foreground whitespace-pre-line text-justify">
                Hawksberg International provides professional ISO 9001 Lead
                Auditor Training delivered by experienced industry experts.
                The course combines instructor-led sessions, real-world case
                studies, practical audit exercises, and interactive
                discussions to help participants develop the knowledge and
                confidence required to perform first-, second-, and
                third-party Quality Management System (QMS) audits in
                accordance with ISO 9001:2015 and ISO 19011 guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT + ENQUIRY FORM
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

            {/* Why Take */}
            <div>
              <h2 className="font-display text-3xl">
                Why Take the ISO 9001 Lead Auditor Course?
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 max-w-4xl text-[15px] leading-9 text-slate-700 whitespace-pre-line">
                The most important reason is that it will allow you to
                effectively audit an organization's Quality Management System
                (QMS). This is beneficial for businesses, as it helps ensure
                their QMS meets all of the requirements necessary for ISO 9001
                certification. In addition, the course helps you develop a
                better understanding of how to effectively manage and monitor a
                QMS, and how to assess an organization's compliance with
                ISO 9001 requirements.
              </p>
            </div>

            {/* Course Covers */}
            <div>
              <h2 className="font-display text-3xl">
                What the ISO 9001 Lead Auditor Course Covers
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

            {/* Benefits */}
            <div>
              <h2 className="font-display text-3xl">
                Benefits of the Course
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 max-w-4xl space-y-5">
                {benefits.map((item, index) => (
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
                    Basic knowledge of Quality Management Systems.
                  </span>
                </li>

                <li className="flex items-start gap-4 text-[15px] leading-8 text-slate-700">
                  <span className="mt-1 text-lg text-gold">
                    ✓
                  </span>

                  <span className="flex-1">
                    Understanding of ISO 9001 fundamentals is recommended.
                  </span>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-3xl">
                Frequently Asked Questions
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