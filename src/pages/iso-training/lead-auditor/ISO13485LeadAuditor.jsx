import EnquiryForm from "@/components/EnquiryForm";

import iso13485Img from "@/assets/isotraining/iso13485.webp";
import Layout from "@/components/Layout";
export default function ISO13485LeadAuditor() {
  const modules = [
    "Introduction to ISO 13485:2016",
    "Medical Device Quality Management Systems",
    "Quality Management System Requirements (Clause 4)",
    "Management Responsibility (Clause 5)",
    "Resource Management (Clause 6)",
    "Product Realization (Clause 7)",
    "Risk Management (ISO 14971)",
    "Measurement, Analysis & Improvement (Clause 8)",
    "ISO 19011 Audit Principles",
    "Audit Planning & Preparation",
    "Evidence Collection & Nonconformity Management",
    "Audit Reporting & Follow-Up",
  ];

  const audience = [
    "Medical Device Manufacturers",
    "Quality Assurance Managers",
    "Regulatory Affairs Professionals",
    "Lead Auditors",
    "Internal Auditors",
    "Medical Device Consultants",
    "Quality Management Professionals",
  ];

  const courseCovers = [
    "The structure of ISO 13485:2016 and its alignment with global regulatory requirements for medical devices.",
    "Quality Management System requirements, documentation, and the Medical Device File (Clause 4).",
    "Management responsibility, customer focus, regulatory compliance, quality policy, and quality objectives (Clause 5).",
    "Resource Management including competence, training, infrastructure, work environment, and contamination control (Clause 6).",
    "Product realization including planning, design and development controls, purchasing, production, service provision, validation, traceability, cleanliness, and sterile-device requirements (Clause 7).",
    "Risk Management throughout the Medical Device Quality Management System in accordance with ISO 14971.",
    "Measurement, analysis, and improvement including customer feedback, complaint handling, reporting to regulatory authorities, internal audit, CAPA, and control of nonconforming products (Clause 8).",
    "Audit principles, audit planning, evidence collection, nonconformity grading, reporting, and follow-up activities based on ISO 19011.",
  ];

  const benefits = [
    "Develop a comprehensive understanding of ISO 13485:2016 Medical Device Quality Management System requirements.",
    "Understand how ISO 13485 aligns with international medical device regulatory requirements.",
    "Gain expertise in risk management, regulatory compliance, and Medical Device File documentation.",
    "Develop practical skills to plan, conduct, report, and follow up Medical Device Quality Management System audits.",
    "Understand product realization, design controls, validation, traceability, sterile-device requirements, and supplier controls.",
    "Build confidence to successfully lead first-, second-, and third-party Medical Device Quality Management System audit teams.",
    "Earn an internationally recognised CQI-IRCA ISO 13485 Lead Auditor qualification to strengthen your professional career.",
  ];

  const prerequisites = [
    "Basic knowledge of Quality Management Systems and ISO 13485 concepts.",
    "Understanding of medical device regulatory requirements is recommended.",
    "Previous auditing experience is beneficial but not mandatory.",
  ];

  const faqs = [
    {
      question: "Who should attend this course?",
      answer:
        "Medical Device Manufacturers, Quality Assurance Managers, Regulatory Affairs Professionals, Internal Auditors, Lead Auditors, ISO Consultants, and professionals responsible for Medical Device Quality Management Systems.",
    },
    {
      question: "Do I need prior knowledge of ISO 13485?",
      answer:
        "A basic understanding of ISO 13485 and Quality Management System concepts is recommended before attending the Lead Auditor course.",
    },
    {
      question: "Will I receive a certificate after completing the course?",
      answer:
        "Yes. Participants who successfully complete the course and assessment will receive an internationally recognised CQI-IRCA ISO 13485 Lead Auditor certificate.",
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
          backgroundImage: `url(${iso13485Img})`,
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
            ISO 13485 Lead Auditor Training
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
              <p className="text-[15px] leading-9 text-muted-foreground text-justify whitespace-pre-line">
                ISO 13485 Lead Auditor Training equips professionals with the
                knowledge and practical skills required to plan, conduct,
                report, and follow up Medical Device Quality Management System
                (MDQMS) audits in accordance with ISO 13485:2016 requirements.
                The course prepares participants to confidently perform
                first-, second-, and third-party audits while understanding
                regulatory expectations for the medical device industry.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-muted-foreground text-justify whitespace-pre-line">
                Hawksberg International provides professional ISO 13485 Lead
                Auditor Training delivered by experienced industry experts.
                The course combines instructor-led sessions, practical audit
                exercises, real-world medical device case studies, and
                interactive discussions to help participants develop the
                knowledge and confidence required to plan, conduct, report,
                and follow up first-, second-, and third-party Medical Device
                Quality Management System (MDQMS) audits in accordance with
                ISO 13485:2016 and ISO 19011 guidelines.
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

            {/* Why Take */}
            <div>
              <h2 className="font-display text-3xl">
                Why Take the ISO 13485 Lead Auditor Course?
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 max-w-4xl text-[15px] leading-9 text-slate-700 text-justify">
                The ISO 13485 Lead Auditor Course enables professionals to
                acquire the expertise required to audit Medical Device Quality
                Management Systems in accordance with ISO 13485:2016 and
                ISO 19011 guidelines. Participants gain a clear understanding
                of regulatory requirements, risk management, documentation,
                and auditing techniques, preparing them to confidently lead
                audit teams and ensure compliance within the medical device
                industry.
              </p>
            </div>

            {/* Course Covers */}
            <div>
              <h2 className="font-display text-3xl">
                What the ISO 13485 Lead Auditor Course Covers
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