import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iso13485Img from "@/assets/isotraining/iso13485.webp";

const training = {
  title: "ISO 13485 Internal Auditor Training",

  intro:
    "Become a certified ISO 13485 Internal Auditor and develop the skills to perform effective first-party audits of Medical Device Quality Management Systems (MDQMS) based on ISO 13485 and ISO 19011.",

  detail:
    "The ISO 13485 Internal Auditor Training equips participants with the knowledge and practical skills required to conduct internal audits of Medical Device Quality Management Systems (MDQMS). The course covers ISO 13485 requirements, ISO 19011 internal auditing principles, risk management, audit planning, execution, reporting, and corrective actions. Through interactive case studies and practical exercises, participants gain the confidence to assess compliance and improve the effectiveness of their organization's quality management system.",

  duration: "24 Hours",
  level: "Intermediate",

  modules: [
    "Introduction to ISO 13485",
    "Medical Device Quality Management Systems",
    "Quality Management System Requirements (Clause 4)",
    "Management Responsibility (Clauses 5–6)",
    "Product Realization (Clause 7)",
    "Risk Management (ISO 14971)",
    "Measurement, Analysis & Improvement (Clause 8)",
    "Complaint Handling & CAPA",
    "ISO 19011 Internal Audit Principles",
    "Internal Audit Planning",
    "Audit Execution & Evidence Collection",
    "Nonconformity Reporting & Follow-Up",
  ],

  audience: [
    "QA Engineers",
    "Medical Device Professionals",
    "Quality Assurance Managers",
    "Internal Auditors",
    "Regulatory Affairs Professionals",
    "Medical Device Manufacturers",
  ],

  overviewTitle:
    "Introduction to the ISO 13485 Internal Auditor Course",

  overview: `
The ISO 13485 Internal Auditor Course equips participants with the knowledge and practical skills required to conduct internal (first-party) audits of a Medical Device Quality Management System (MDQMS) in accordance with ISO 13485 and ISO 19011 guidelines. The course helps organizations evaluate compliance, identify opportunities for improvement, and prepare for external certification audits.

Hawksberg International provides professional ISO 13485 Internal Auditor Training delivered by experienced industry experts. The programme combines instructor-led sessions, practical audit exercises, real-world medical device case studies, and interactive discussions to help participants develop the confidence to effectively plan, conduct, report, and follow up internal Medical Device Quality Management System audits.
`,

  courseCoversTitle: "Course Content",

  courseCovers: [
    "The structure of ISO 13485 and its alignment with medical-device regulatory requirements.",
    "Quality Management System and documentation, including the Medical Device File (Clause 4).",
    "Management responsibility and resource management (Clauses 5–6).",
    "Product realization — design and development controls, purchasing, production and service provision, cleanliness and sterile-device requirements, identification and traceability, and validation of processes (Clause 7).",
    "Risk management applied across the Quality Management System, aligned with ISO 14971.",
    "Measurement, analysis and improvement — complaint handling, reporting to regulatory authorities, internal audit, control of nonconforming product, and corrective and preventive action (CAPA) (Clause 8).",
    "The internal audit process based on ISO 19011 — planning, conducting, evidence collection, nonconformity reporting, audit reporting, and follow-up.",
  ],

  benefitsTitle: "Benefits of ISO 13485 Internal Auditor Training",

  benefits: [
    "Develops practical skills for conducting ISO 13485 internal audits.",
    "Improves understanding of Medical Device Quality Management System requirements.",
    "Helps evaluate compliance with ISO 13485 and applicable medical-device requirements.",
    "Develops skills in audit planning, evidence collection, reporting, and follow-up.",
    "Strengthens risk-based thinking and internal audit effectiveness.",
    "Supports corrective action and continual improvement activities.",
  ],

  faqTitle:
    "ISO 13485 Internal Auditor Training — Frequently Asked Questions",

  faq: [
    {
      question: "What is the ISO 13485 Internal Auditor course?",
      answer:
        "A training course that provides the skills to plan and conduct internal (first-party) audits of an ISO 13485 Medical Device Quality Management System within your own organisation in accordance with ISO 19011.",
    },
    {
      question: "What does the course cover?",
      answer:
        "The course covers ISO 13485 requirements, regulatory and customer requirements for medical devices, risk management, design and development controls, and how to plan, conduct, report, and follow up an internal Medical Device Quality Management System audit.",
    },
    {
      question: "How is this different from the Lead Auditor course?",
      answer:
        "The Internal Auditor course focuses on auditing your own organisation's Medical Device Quality Management System (first-party audits), while the Lead Auditor course prepares participants to lead external, third-party certification audits.",
    },
    {
      question: "Who should attend?",
      answer:
        "Employees responsible for conducting internal Quality Management System audits within medical-device organisations, quality professionals, regulatory staff, and teams preparing for or maintaining ISO 13485 certification.",
    },
    {
      question: "Are there prerequisites?",
      answer:
        "There are no formal prerequisites. A basic understanding of ISO 13485 or Medical Device Quality Management Systems is helpful but not mandatory.",
    },
    {
      question: "How is the course assessed, and what certificate do I get?",
      answer:
        "Assessment is based on participation, course exercises, and a short assessment where applicable. Upon successful completion, participants receive a Hawksberg International course-completion certificate.",
    },
  ],
};

export default function ISO13485InternalAuditor() {
  return (
    <Layout>
    
      <section
  className="relative flex h-[360px] items-center overflow-hidden bg-cover bg-center text-white"
  style={{ backgroundImage: `url(${iso13485Img})` }}
>
  <div className="absolute inset-0 bg-black/70" />

  <div className="absolute inset-0 grid-pattern opacity-[0.12]" />

  <div className="container-x relative">
    <div className="mx-auto max-w-6xl text-center">

      <p className="text-xs uppercase tracking-[0.4em] text-gold">
        ISO TRAINING PROGRAMS
      </p>

      <h1
        className="mt-5 font-display text-4xl uppercase tracking-wide sm:text-5xl md:text-6xl"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        {training.title}
      </h1>

      <div className="mx-auto mt-6 gold-divider" />

    </div>
  </div>
</section>

      <section className="bg-background py-20 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-4xl text-foreground md:text-5xl">
              Course Overview
            </h2>
            <div className="mt-4 gold-divider" />
            <p className="mt-10 whitespace-pre-line text-justify text-[15px] leading-9 text-muted-foreground md:text-base">
              {training.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-10 md:py-14">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="space-y-14 lg:col-span-2">

            <div>
              <h2 className="font-display text-4xl text-foreground">
                Modules covered
              </h2>
              <div className="mt-4 gold-divider" />
{/* 
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {training.modules.map((module, index) => (
                  <div
                    key={module}
                    className="flex min-h-[118px] items-start gap-4 rounded-xl border border-border bg-card p-6"
                  >
                    <span className="shrink-0 font-display text-2xl text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1 text-[15px] leading-7 text-slate-700">
                      {module}
                    </span>
                  </div>
                ))}
              </div> */}
             <div
  className="mt-7 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2"
  style={{
    alignItems: "start",
  }}
>
  {training.modules.map((module, index) => (
    <div
      key={module}
      className="w-full rounded-[14px] border border-[#d9dee5] bg-white"
      style={{
        height: "90px",
        minHeight: "90px",
        maxHeight: "90px",
        padding: "0 16px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="flex h-full items-center"
        style={{
          minHeight: "90px",
          maxHeight: "90px",
        }}
      >
        {/* Module Number */}
        <span
          className="shrink-0 font-display text-[16px] font-normal leading-none text-gold"
          style={{
            width: "28px",
            marginRight: "18px",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Module Title */}
        <span
          className="text-[15px] font-normal text-[#344a68]"
          style={{
            lineHeight: "1.45",
          }}
        >
          {module}
        </span>
      </div>
    </div>
  ))}
</div>
            </div>

            <div>
              <h2 className="font-display text-4xl text-foreground">
                Course Details
              </h2>
              <div className="mt-4 gold-divider" />
              <div className="mt-8 space-y-5 text-[17px] leading-8 text-slate-700">
                <p><strong>Duration :</strong> {training.duration}</p>
                <p><strong>Level :</strong> {training.level}</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-4xl text-foreground">
                {training.courseCoversTitle}
              </h2>
              <div className="mt-4 gold-divider" />

              <div className="mt-8 space-y-6">
                {training.courseCovers.map((item) => (
                  <div key={item} className="flex items-start gap-5">
                    <span className="mt-1 shrink-0 text-2xl text-gold">✓</span>
                    <p className="text-[17px] leading-9 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-4xl text-foreground">
                {training.benefitsTitle}
              </h2>
              <div className="mt-4 gold-divider" />

              <div className="mt-8 space-y-6">
                {training.benefits.map((item) => (
                  <div key={item} className="flex items-start gap-5">
                    <span className="mt-1 shrink-0 text-2xl text-gold">✓</span>
                    <p className="text-[17px] leading-9 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-4xl text-foreground">
                Who Should Attend
              </h2>
              <div className="mt-4 gold-divider" />

              <div className="mt-8 space-y-6">
                {training.audience.map((person) => (
                  <div key={person} className="flex items-start gap-5">
                    <span className="mt-1 shrink-0 text-2xl text-gold">✓</span>
                    <p className="text-[17px] leading-9 text-slate-700">
                      {person}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-4xl text-foreground">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 gold-divider" />

              <div className="mt-8 space-y-5">
                {training.faq.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-border bg-card px-7 py-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[17px] font-semibold text-slate-800">
                      <span>{item.question}</span>
                      <span className="shrink-0 text-2xl font-light text-slate-900 transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="mt-5 border-t border-border pt-5 text-[15px] leading-8 text-muted-foreground">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="self-start lg:sticky lg:top-28">
            <EnquiryForm compact />
          </aside>
        </div>
      </section>
    </Layout>
  );
}
