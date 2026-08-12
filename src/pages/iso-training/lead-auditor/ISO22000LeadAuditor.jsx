import EnquiryForm from "@/components/EnquiryForm";

import iso22000Img from "@/assets/isotraining/iso22000.webp";
import Layout from "@/components/Layout";
export default function ISO22000LeadAuditor() {
  const modules = [
    "Introduction to ISO 22000:2018",
    "Food Safety Management System (FSMS)",
    "Annex SL High-Level Structure",
    "Context of the Organization (Clause 4)",
    "Leadership & Food Safety Policy (Clause 5)",
    "Planning & FSMS Objectives (Clause 6)",
    "Support: Resources, Communication & Documentation (Clause 7)",
    "Operational Planning & HACCP (Clause 8)",
    "Prerequisite Programmes (PRPs)",
    "Critical Control Points (CCPs)",
    "Performance Evaluation & Internal Audits (Clause 9)",
    "Continual Improvement (Clause 10)",
    "ISO 19011 Audit Principles",
    "Audit Planning & Preparation",
    "Evidence Collection & Sampling Techniques",
    "Audit Reporting & Follow-Up",
  ];

  const audience = [
    "Food Safety Managers",
    "Food Technologists",
    "Process Engineers",
    "Production Managers",
    "Lead Auditors",
    "Internal Auditors",
    "Quality Assurance Managers",
    "Food Industry Professionals",
  ];

  const courseCovers = [
    "The structure of ISO 22000:2018 (Annex SL High-Level Structure) and the Food Safety Management System (FSMS) framework.",
    "Context of the organization, interested parties, and defining the scope of the FSMS (Clause 4).",
    "Leadership, food safety policy, organizational roles, responsibilities, and authorities (Clause 5).",
    "Planning — actions to address risks and opportunities, food safety objectives, and planning to achieve them (Clause 6).",
    "Support — resources, competence, awareness, internal and external communication, and documented information (Clause 7).",
    "Operation — Prerequisite Programmes (PRPs), hazard analysis, HACCP plans, traceability, emergency preparedness, monitoring, and measuring processes (Clause 8).",
    "HACCP principles including hazard analysis, Critical Control Points (CCPs), Operational PRPs (OPRPs), critical limits, validation, and verification.",
    "Performance Evaluation — monitoring, measurement, internal audit, and management review (Clause 9).",
    "Improvement — nonconformity, corrective action, continual improvement, and updating the FSMS (Clause 10).",
    "Audit principles, audit planning, evidence collection, sampling techniques, nonconformity classification, reporting, and audit follow-up based on ISO 19011.",
  ];

  const benefits = [
    "Develop a comprehensive understanding of ISO 22000:2018 Food Safety Management System requirements.",
    "Learn to conduct effective first-, second-, and third-party Food Safety Management System audits.",
    "Gain expertise in HACCP principles, hazard analysis, Prerequisite Programmes (PRPs), Operational PRPs (OPRPs), and Critical Control Points (CCPs).",
    "Understand internationally accepted auditing principles, sampling techniques, and evidence-based auditing practices.",
    "Strengthen your organization's food safety culture and improve overall Food Safety Management System performance.",
    "Develop the leadership skills required to successfully manage and lead FSMS audit teams.",
    "Earn an internationally recognised IRCA ISO 22000 Lead Auditor qualification to enhance your professional career.",
  ];

  const prerequisites = [
    "Basic knowledge of Food Safety Management Systems (FSMS) and ISO 22000 requirements.",
    "Understanding of HACCP principles is recommended.",
    "Previous auditing experience or an ISO 22000 Internal Auditor qualification is beneficial but not mandatory.",
  ];

  const faqs = [
    {
      question: "Who should attend this course?",
      answer:
        "Food Safety Managers, Quality Assurance Managers, Internal Auditors, Lead Auditors, Food Technologists, Production Managers, ISO Consultants, and professionals responsible for Food Safety Management Systems.",
    },
    {
      question: "Do I need prior knowledge of ISO 22000?",
      answer:
        "A basic understanding of ISO 22000 requirements and HACCP principles is recommended before attending the Lead Auditor course.",
    },
    {
      question: "Will I receive a certificate after completing the course?",
      answer:
        "Yes. Participants who successfully complete the course and assessment will receive an internationally recognised ISO 22000 Lead Auditor certificate.",
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
          backgroundImage: `url(${iso22000Img})`,
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
            ISO 22000 Lead Auditor Training
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
                The ISO 22000 Lead Auditor Training is designed to provide
                participants with the expertise required to conduct first-,
                second-, and third-party Food Safety Management System (FSMS)
                audits in accordance with ISO 22000:2018 requirements. The
                course establishes a strong foundation for planning,
                conducting, reporting, and managing FSMS audit programmes while
                assessing compliance with international food safety standards.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-muted-foreground text-justify">
                Hawksberg International provides professional ISO 22000 Lead
                Auditor Training delivered by experienced industry experts.
                The course combines instructor-led sessions, practical audit
                exercises, HACCP-based case studies, real-world food safety
                scenarios, and interactive discussions to help participants
                develop the knowledge and confidence required to plan, conduct,
                report, and follow up first-, second-, and third-party Food
                Safety Management System (FSMS) audits in accordance with ISO
                22000:2018 and ISO 19011 guidelines.
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
                Why Take the ISO 22000 Lead Auditor Course?
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 max-w-4xl text-[15px] leading-9 text-slate-700 text-justify">
                The ISO 22000 Lead Auditor Course provides participants with
                comprehensive knowledge of auditing Food Safety Management
                Systems against ISO 22000:2018 requirements. It covers
                auditing principles, the process approach, sampling
                techniques, statistical methods, HACCP implementation, and
                Food Safety Management best practices.
              </p>

              <p className="mt-6 max-w-4xl text-[15px] leading-9 text-slate-700 text-justify">
                On successful completion, participants will be able to
                confidently plan, conduct, report, and lead FSMS audits while
                guiding audit teams within their organizations.
              </p>
            </div>

            {/* Course Covers */}
            <div>
              <h2 className="font-display text-3xl">
                What the ISO 22000 Lead Auditor Course Covers
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