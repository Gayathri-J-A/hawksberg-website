import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iso27001Img from "@/assets/services/iso-27001.webp";

const training = {
  slug: "iso-27001-internal-auditor",

  code: "ISO 27001",

  title: "ISO 27001 Internal Auditor Training",

  intro:
    "Become a certified ISO 27001 Internal Auditor and develop the skills to conduct effective first-party Information Security Management System (ISMS) audits based on ISO/IEC 27001 and ISO 19011 guidelines.",

  detail:
    "The ISO 27001 Internal Auditor Training equips participants with the knowledge and practical skills required to perform internal audits of an Information Security Management System (ISMS). The course covers ISO/IEC 27001 requirements, ISO 19011 auditing principles, information security risk management, audit planning, execution, reporting, and continual improvement. Through interactive lectures, discussions, and practical exercises, participants gain the confidence to evaluate ISMS effectiveness and prepare organizations for external certification audits.",

  duration: "24 Hours",

  level: "Intermediate",

  modules: [
    "Introduction to ISO/IEC 27001",
    "Information Security Management Systems (ISMS)",
    "Context of the Organization (Clause 4)",
    "Leadership & Information Security Policy (Clause 5)",
    "Information Security Risk Assessment & Treatment",
    "Statement of Applicability (SoA)",
    "Support & Operational Controls (Clauses 7–8)",
    "Performance Evaluation & Continual Improvement (Clauses 9–10)",
    "Annex A Security Controls",
    "Organizational, People, Physical & Technological Controls",
    "ISO 19011 Internal Audit Principles",
    "Audit Planning",
    "Evidence Collection & Audit Execution",
    "Nonconformity Reporting",
    "Corrective Actions & Audit Follow-Up",
    "Audit Reporting",
  ],

  audience: [
    "Information Security Professionals",
    "ISMS Coordinators",
    "Internal Auditors",
    "IT Managers",
    "Compliance Officers",
    "Risk Management Professionals",
    "Cyber Security Professionals",
    "ISO 27001 Implementation Teams",
  ],

  overviewTitle: "ISO 27001 Internal Auditor Training – Aim",

  overview: `
ISO 27001 Internal Auditor Training equips professionals with the knowledge and practical skills required to plan, conduct, report, and follow up internal (first-party) Information Security Management System (ISMS) audits in accordance with ISO/IEC 27001 and ISO 19011 guidelines. The course helps organizations evaluate the effectiveness of their Information Security Management System, identify risks and nonconformities, support continual improvement, and prepare for external certification audits.

Hawksberg International provides professional ISO 27001 Internal Auditor Training delivered by experienced industry experts. The programme combines instructor-led sessions, practical audit exercises, real-world information security case studies, and interactive discussions to help participants develop the confidence to effectively assess Information Security Management Systems and successfully perform internal ISMS audits.
`,

  whyTake:
    "Organizations certified to ISO/IEC 27001 require competent internal auditors to regularly assess the effectiveness of their Information Security Management System (ISMS). Internal auditors play a vital role in identifying nonconformities, evaluating risks, and driving continual improvement. This training equips participants with the practical knowledge and auditing techniques needed to effectively plan, conduct, report, and follow up internal ISMS audits.",

  courseCoversTitle: "Course Content",

  courseCovers: [
    "The structure of ISO/IEC 27001 and the Information Security Management System (ISMS) framework.",

    "Context of the organization, ISMS scope, and interested parties (Clause 4).",

    "Leadership and the Information Security Policy (Clause 5).",

    "Planning — information security risk assessment and treatment, the Statement of Applicability (SoA), and ISMS objectives (Clause 6).",

    "Support and Operation — resources, competence, documented information, and operational controls (Clauses 7–8).",

    "Performance Evaluation and Improvement — monitoring, internal audit, management review, nonconformity, and corrective action (Clauses 9–10).",

    "Annex A Information Security Controls — Organizational, People, Physical, and Technological controls, and auditing their implementation.",

    "The internal audit process in accordance with ISO 19011 — audit planning, conducting audits, evidence collection, nonconformity reporting, audit reporting, and follow-up.",
  ],

  benefitsTitle: "Benefits of ISO 27001 Internal Auditor Training",

  benefits: [
    "Improve your understanding of the ISO/IEC 27001 standard.",
    "Develop the skills required to effectively perform internal Information Security Management System audits.",
    "Assess the effectiveness of an organization's ISO/IEC 27001-compliant Information Security Management System.",
    "Enhance your credibility and professional value as an Internal Auditor.",
    "Help your organization strengthen its overall information security posture.",
    "Identify opportunities for continual improvement within the Information Security Management System.",
    "Gain a better understanding of the requirements for ISO/IEC 27001 certification.",
  ],

  faqTitle:
    "ISO 27001 Internal Auditor Training — Frequently Asked Questions",

  faq: [
    {
      question: "What is the ISO 27001 Internal Auditor course?",
      answer:
        "A training course that equips participants with the skills to plan and conduct internal (first-party) audits of an ISO/IEC 27001 Information Security Management System (ISMS) within their own organisation in accordance with ISO 19011.",
    },

    {
      question: "What does the course cover?",
      answer:
        "The course covers ISO/IEC 27001 requirements, information security risk assessment and treatment, the Statement of Applicability (SoA), Annex A information security controls, and how to plan, conduct, report, and follow up an internal ISMS audit.",
    },

    {
      question: "How is this different from the Lead Auditor course?",
      answer:
        "The Internal Auditor course focuses on auditing your own organisation's Information Security Management System (first-party audits), whereas the Lead Auditor course prepares participants to perform external, third-party certification audits.",
    },
  ],
};

export default function ISO27001InternalAuditor() {
  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative h-[360px] overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${iso27001Img})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Subtle grid */}
        <div className="absolute inset-0 grid-pattern opacity-[0.10]" />

        {/* Hero content */}
        <div className="container-x relative flex h-full items-center justify-center">
          <div className="mx-auto w-full max-w-6xl text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-gold md:text-sm">
              ISO Training Programs
            </p>

            <h1
              className="
                mx-auto
                mt-5
                max-w-6xl
                text-4xl
                font-normal
                uppercase
                leading-[1.05]
                tracking-wide
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-[68px]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {training.title}
            </h1>

            <div className="mx-auto mt-7 h-[3px] w-20 bg-gold" />
          </div>
        </div>
      </section>

      {/* =========================================================
          COURSE OVERVIEW
      ========================================================= */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-[1500px]">
            <h2
              className="
                font-display
                text-4xl
                font-normal
                tracking-wide
                text-foreground
                md:text-5xl
              "
            >
              Course Overview
            </h2>

            <div className="mt-5 h-[3px] w-20 bg-gold" />

            <div className="mt-16 space-y-10">
              <p className="whitespace-pre-line text-justify text-[16px] leading-[2.8] text-muted-foreground md:text-[17px]">
                {training.overview}
              </p>

              <div>
                <h3
                  className="
                    font-display
                    text-3xl
                    font-normal
                    text-foreground
                    md:text-4xl
                  "
                >
                  Why ISO 27001 Internal Auditing is Important
                </h3>

                <div className="mt-4 h-[3px] w-20 bg-gold" />

                <p className="mt-8 text-[16px] leading-8 text-muted-foreground md:text-[17px]">
                  {training.whyTake}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN COURSE CONTENT + ENQUIRY FORM
      ========================================================= */}
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-x">
          <div
            className="
              mx-auto
              grid
              max-w-[1500px]
              items-start
              gap-10
              lg:grid-cols-[minmax(0,1fr)_340px]
              lg:gap-12
            "
          >
            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <main className="min-w-0 space-y-16">
              {/* ===================================================
                  MODULES
              =================================================== */}
              <section>
                <h2
                  className="
                    font-display
                    text-4xl
                    font-normal
                    text-foreground
                    md:text-5xl
                  "
                >
                  Modules covered
                </h2>

                <div className="mt-5 h-[3px] w-20 bg-gold" />

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
  {training.modules.map((module, index) => (
    <div
      key={module}
      className="
        box-border
        flex
        h-[90px]
        min-h-[90px]
        max-h-[90px]
        w-full
        items-center
        rounded-[14px]
        border
        border-[#d9dde3]
        bg-white
        px-[22px]
      "
    >
      {/* Module Number */}
      <span
        className="
          w-[28px]
          shrink-0
          font-display
          text-[16px]
          font-normal
          leading-none
          text-gold
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Module Name */}
      <span
        className="
          ml-[18px]
          min-w-0
          flex-1
          text-[15px]
          font-normal
          leading-[1.45]
          text-[#344a68]
        "
      >
        {module}
      </span>
    </div>
  ))}
</div>
              </section>

              {/* ===================================================
                  COURSE DETAILS
              =================================================== */}
              <section>
                <h2
                  className="
                    font-display
                    text-4xl
                    font-normal
                    text-foreground
                    md:text-5xl
                  "
                >
                  Course Details
                </h2>

                <div className="mt-5 h-[3px] w-20 bg-gold" />

                <div className="mt-8 space-y-4 text-[17px] leading-8 text-slate-700">
                  <p>
                    <strong className="font-semibold text-foreground">
                      Duration :
                    </strong>{" "}
                    {training.duration}
                  </p>

                  <p>
                    <strong className="font-semibold text-foreground">
                      Level :
                    </strong>{" "}
                    {training.level}
                  </p>
                </div>
              </section>

              {/* ===================================================
                  COURSE CONTENT
              =================================================== */}
              <section>
                <h2
                  className="
                    font-display
                    text-3xl
                    font-normal
                    text-foreground
                    md:text-4xl
                  "
                >
                  {training.courseCoversTitle}
                </h2>

                <div className="mt-5 h-[3px] w-20 bg-gold" />

                <div className="mt-10 space-y-7">
                  {training.courseCovers.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-5"
                    >
                      <span className="mt-1 shrink-0 text-xl text-gold">
                        ✓
                      </span>

                      <p className="text-[16px] leading-8 text-slate-700 md:text-[17px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===================================================
                  WHO SHOULD ATTEND
              =================================================== */}
              <section>
                <h2
                  className="
                    font-display
                    text-4xl
                    font-normal
                    text-foreground
                    md:text-5xl
                  "
                >
                  Who Should Attend
                </h2>

                <div className="mt-5 h-[3px] w-20 bg-gold" />

                <div className="mt-10 space-y-6">
                  {training.audience.map((person) => (
                    <div
                      key={person}
                      className="flex items-start gap-5"
                    >
                      <span className="mt-1 text-xl text-gold">
                        ✓
                      </span>

                      <span className="text-[17px] leading-8 text-slate-700">
                        {person}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===================================================
                  BENEFITS
              =================================================== */}
              <section>
                <h2
                  className="
                    font-display
                    text-3xl
                    font-normal
                    text-foreground
                    md:text-4xl
                  "
                >
                  {training.benefitsTitle}
                </h2>

                <div className="mt-5 h-[3px] w-20 bg-gold" />

                <div className="mt-10 space-y-6">
                  {training.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-5"
                    >
                      <span className="mt-1 text-xl text-gold">
                        ✓
                      </span>

                      <span className="text-[16px] leading-8 text-slate-700 md:text-[17px]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===================================================
                  FAQ
              =================================================== */}
              <section>
                <h2
                  className="
                    font-display
                    text-3xl
                    font-normal
                    text-foreground
                    md:text-4xl
                  "
                >
                  {training.faqTitle}
                </h2>

                <div className="mt-5 h-[3px] w-20 bg-gold" />

                <div className="mt-10 space-y-5">
                  {training.faq.map((item) => (
                    <details
                      key={item.question}
                      className="
                        group
                        rounded-2xl
                        border
                        border-border
                        bg-card
                        px-6
                        py-5
                      "
                    >
                      <summary
                        className="
                          flex
                          cursor-pointer
                          list-none
                          items-center
                          justify-between
                          gap-5
                          text-[17px]
                          font-semibold
                          text-foreground
                        "
                      >
                        <span>{item.question}</span>

                        <span
                          className="
                            shrink-0
                            text-2xl
                            font-light
                            text-gold
                            transition-transform
                            duration-300
                            group-open:rotate-45
                          "
                        >
                          +
                        </span>
                      </summary>

                      <p
                        className="
                          mt-5
                          border-t
                          border-border
                          pt-5
                          text-[15px]
                          leading-8
                          text-muted-foreground
                        "
                      >
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            </main>

            {/* =====================================================
                RIGHT ENQUIRY FORM
            ===================================================== */}
            <aside
              className="
                w-full
                lg:sticky
                lg:top-28
                lg:self-start
              "
            >
              <div className="mx-auto w-full max-w-[380px] lg:ml-auto lg:mr-0">
                <EnquiryForm />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}