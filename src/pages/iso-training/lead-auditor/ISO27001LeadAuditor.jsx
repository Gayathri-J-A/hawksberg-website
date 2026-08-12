import EnquiryForm from "@/components/EnquiryForm";

import iso27001Img from "@/assets/services/iso-27001.webp";
import Layout from "@/components/Layout";
export default function ISO27001LeadAuditor() {
  const modules = [
    "Introduction to ISO/IEC 27001:2022",
    "ISMS Framework & Annex SL Structure",
    "Context of the Organization (Clause 4)",
    "Leadership & Information Security Policy (Clause 5)",
    "Risk Assessment & Risk Treatment (Clause 6)",
    "Statement of Applicability (SoA)",
    "Support: Resources, Competence & Documentation (Clause 7)",
    "Operational Planning & Control (Clause 8)",
    "Performance Evaluation & Internal Audits (Clause 9)",
    "Continual Improvement & Corrective Actions (Clause 10)",
    "Annex A Controls (2022)",
    "ISO 19011 Audit Principles",
    "First-, Second- & Third-Party Audits",
    "Audit Planning & Preparation",
    "Objective Evidence Collection",
    "Nonconformity Classification",
    "Audit Reporting & Follow-Up",
  ];

  const audience = [
    "ISMS Managers",
    "Security Officers",
    "Information Security Consultants",
    "Internal Auditors",
    "Lead Auditors",
    "Cyber Security Professionals",
    "Compliance Managers",
    "Professionals responsible for Information Security Management Systems",
  ];

  const courseCovers = [
    "The structure of ISO/IEC 27001:2022 (Annex SL High-Level Structure) and the Information Security Management System (ISMS) framework.",
    "Context of the organization, interested parties, and defining the ISMS scope (Clause 4).",
    "Leadership, information security policy, organizational roles, responsibilities, and authorities (Clause 5).",
    "Planning — information security risk assessment, risk treatment, Statement of Applicability (SoA), and information security objectives (Clause 6).",
    "Support — resources, competence, awareness, communication, and documented information (Clause 7).",
    "Operation — operational planning and control, implementation of risk treatment, and ISMS operation (Clause 8).",
    "Performance Evaluation — monitoring, measurement, analysis, internal audit, and management review (Clause 9).",
    "Improvement — nonconformity, corrective action, and continual improvement (Clause 10).",
    "Annex A Controls (2022) across Organizational, People, Physical, and Technological themes, and auditing their implementation and effectiveness.",
    "Audit principles, audit types (first-, second-, and third-party), audit planning, evidence collection, nonconformity classification, reporting, and follow-up activities based on ISO 19011.",
  ];

  const benefits = [
    "Develop an in-depth understanding of ISO/IEC 27001:2022 Information Security Management System requirements.",
    "Gain the practical skills required to conduct first-, second-, and third-party ISMS audits.",
    "Understand information security risk assessment, risk treatment, and the Statement of Applicability (SoA).",
    "Learn how to audit Annex A controls effectively across Organizational, People, Physical, and Technological domains.",
    "Develop confidence to collect objective evidence, identify nonconformities, and prepare professional audit reports.",
    "Build leadership skills to successfully lead Information Security Management System audit teams.",
    "Earn an internationally recognised ISO 27001 Lead Auditor qualification to advance your information security and compliance career.",
  ];

  const prerequisites = [
    "Basic knowledge of Information Security Management Systems (ISMS).",
    "Understanding of ISO/IEC 27001 fundamentals is recommended.",
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
          backgroundImage: `url(${iso27001Img})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 grid-pattern opacity-15" />

        <div className="container-x relative text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            ISO Training Programs
          </p>

          <h1
            className="mt-4 text-5xl uppercase tracking-wide md:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            ISO 27001 Lead Auditor Training
          </h1>

          <div className="mx-auto mt-5 gold-divider" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
            Become a certified ISO 27001 Lead Auditor and master Information
            Security Management System (ISMS) auditing based on ISO/IEC
            27001:2022 and ISO 19011 guidelines.
          </p>
        </div>
      </section>

      {/* =========================================================
          COURSE INTRO + BASIC DETAILS
      ========================================================= */}
      <section className="bg-background py-20">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-3">

              {/* Intro */}
              <div className="md:col-span-2">
                <p className="text-lg leading-9 text-slate-700">
                  The ISO 27001 Lead Auditor Training provides participants
                  with the knowledge and practical skills to perform
                  first-, second-, and third-party Information Security
                  Management System (ISMS) audits.
                </p>

                <p className="mt-6 text-[15px] leading-9 text-muted-foreground text-justify">
                  The course covers ISO/IEC 27001:2022 requirements, ISO 19011
                  auditing guidelines, Annex A controls, audit planning,
                  execution, reporting, and follow-up activities. Through
                  practical exercises and case studies, participants develop
                  the confidence to lead audit teams and evaluate compliance
                  with international information security standards.
                </p>
              </div>

              {/* Course Information */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Duration
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    40 Hours
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Level
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    Advanced
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-muted/40 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-3">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="space-y-14 lg:col-span-2">

            {/* ---------------------------------------------------
                COURSE OVERVIEW
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Course Overview
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 text-[15px] leading-9 text-slate-700 text-justify">
                The ISO 27001 Lead Auditor Course is designed to provide a
                robust foundation in the knowledge and skills required for
                conducting first-, second-, and third-party audits of
                Information Security Management Systems (ISMS) as per
                ISO/IEC 27001:2022 requirements.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-slate-700 text-justify">
                This course develops the competencies necessary to effectively
                lead an audit team and provides an in-depth understanding of
                ISO/IEC 27001 standards, auditing principles, and best
                practices.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-slate-700 text-justify">
                Hawksberg International provides professional ISO 27001 Lead
                Auditor Training delivered by experienced industry experts.
                The course combines instructor-led sessions, practical audit
                exercises, real-world case studies, and interactive
                discussions to help participants develop the knowledge and
                confidence required to plan, conduct, report, and follow up
                first-, second-, and third-party ISMS audits.
              </p>
            </div>

            {/* ---------------------------------------------------
                WHY TAKE
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Why Take the ISO 27001 Lead Auditor Course?
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 text-[15px] leading-9 text-slate-700 text-justify">
                Taking the ISO 27001 Lead Auditor Course equips participants
                with the knowledge and practical skills required to assess
                the effectiveness of an Information Security Management
                System (ISMS) and evaluate compliance with ISO/IEC 27001:2022
                requirements.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-slate-700 text-justify">
                Achieving ISO 27001 Lead Auditor certification enhances
                professional credibility, enables participants to lead
                first-, second-, and third-party ISMS audits, and adds an
                internationally recognised qualification that supports
                career growth in information security, compliance, risk
                management, and auditing.
              </p>
            </div>

            {/* ---------------------------------------------------
                MODULES
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Modules Covered
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {modules.map((module, index) => (
                  <div
                    key={module}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <span className="shrink-0 font-display text-2xl text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pt-1 text-[15px] leading-7 text-slate-700">
                      {module}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------------------------------------------
                WHO SHOULD ATTEND
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Who Should Attend?
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 space-y-5">
                {audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[15px] leading-8 text-slate-700"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---------------------------------------------------
                COURSE COVERS
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                What the ISO 27001 Lead Auditor Course Covers
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 space-y-5">
                {courseCovers.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <p className="text-[15px] leading-8 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------------------------------------------
                BENEFITS
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Benefits of the Course
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 space-y-5">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <p className="text-[15px] leading-8 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------------------------------------------
                PREREQUISITES
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Prerequisites
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 space-y-5">
                {prerequisites.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <p className="text-[15px] leading-8 text-slate-700">
                      {item}
                    </p>
                  </div>
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