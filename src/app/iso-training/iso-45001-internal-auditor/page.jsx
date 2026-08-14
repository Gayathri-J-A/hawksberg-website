import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iso45001Img from "@/assets/services/iso-45001.webp";

const training = {
  slug: "iso-45001-internal-auditor",

  code: "ISO 45001",

  title: "ISO 45001 Internal Auditor Training",

  intro:
    "Become a certified ISO 45001 Internal Auditor and develop the skills to conduct effective first-party Occupational Health & Safety Management System (OH&SMS) audits based on ISO 45001:2018 and ISO 19011 guidelines.",

  detail:
    "The ISO 45001 Internal Auditor Training equips participants with the knowledge and practical skills required to perform internal audits of Occupational Health & Safety Management Systems (OH&SMS). The course covers ISO 45001:2018 requirements, ISO 19011 auditing principles, hazard identification, risk assessment, audit planning, execution, reporting, and continual improvement. Through practical examples and interactive learning, participants gain the confidence to assess OH&SMS effectiveness and prepare organizations for external certification audits.",

  duration: "24 Hours",

  level: "Intermediate",

  modules: [
    "Introduction to ISO 45001:2018",
    "Occupational Health & Safety Management Systems (OH&SMS)",
    "Context of the Organization (Clauses 4–5)",
    "Worker Consultation & Participation",
    "Hazard Identification",
    "OH&S Risk & Opportunity Assessment",
    "Legal & Other Compliance Requirements",
    "Operational Planning & Control",
    "Management of Change",
    "Emergency Preparedness & Response",
    "Performance Evaluation",
    "Incident Investigation",
    "Nonconformity & Corrective Actions",
    "ISO 19011 Internal Audit Principles",
    "Internal Audit Planning",
    "Audit Execution & Evidence Collection",
    "Nonconformity Reporting",
    "Audit Reporting & Follow-Up",
  ],

  audience: [
    "Safety Managers",
    "Safety Officers",
    "OH&SMS Representatives",
    "Internal Auditors",
    "Health & Safety Consultants",
    "HSE Professionals",
    "Compliance Officers",
    "ISO 45001 Implementation Teams",
  ],

  whyTakeTitle: "About ISO 45001 Internal Auditor Training",

  overview: `
ISO 45001 Internal Auditor Training equips professionals with the knowledge and practical skills required to plan, conduct, report, and follow up internal (first-party) Occupational Health & Safety Management System (OH&SMS) audits in accordance with ISO 45001:2018 and ISO 19011 guidelines. The course enables organizations to evaluate the effectiveness of their OH&SMS, identify workplace hazards and nonconformities, support continual improvement, and prepare for external certification audits.

Hawksberg International provides professional ISO 45001 Internal Auditor Training delivered by experienced industry experts. The programme combines instructor-led sessions, practical audit exercises, real-world occupational health and safety case studies, and interactive discussions to help participants develop the confidence to effectively assess Occupational Health & Safety Management Systems and successfully perform internal OH&SMS audits.
`,

  courseCoversTitle: "Course Content",

  courseCovers: [
    "Overview of ISO 45001:2018 and the Occupational Health & Safety (OH&S) Management System (Clauses 4–10).",
    "Worker consultation and participation, and the context of the organization (Clauses 4–5).",
    "Hazard identification, assessment of OH&S risks and opportunities, and legal and other requirements (Clause 6).",
    "Operational planning and control, management of change, and emergency preparedness and response (Clause 8).",
    "Performance evaluation, incident investigation, nonconformity, and corrective action (Clauses 9–10).",
    "Audit methodologies, and identifying and reporting nonconformities.",
  ],

  faqTitle:
    "ISO 45001 Internal Auditor Training in India — Frequently Asked Questions",

  faq: [
    {
      question: "What is the ISO 45001 Internal Auditor course?",
      answer:
        "A training course that equips participants to plan and conduct internal (first-party) audits of an ISO 45001 Occupational Health & Safety (OH&S) Management System within their own organisation, in accordance with ISO 19011.",
    },

    {
      question: "What does the course cover?",
      answer:
        "The course covers ISO 45001:2018 requirements, hazard identification and risk assessment, worker participation and consultation, legal and other requirements, and how to plan, conduct, report, and follow up an internal OH&S audit.",
    },

    {
      question: "How is this different from the Lead Auditor course?",
      answer:
        "The Internal Auditor course focuses on auditing your own organisation's Occupational Health & Safety Management System (first-party audits), whereas the Lead Auditor course prepares participants to lead external, third-party certification audits.",
    },
  ],
};

export const metadata = { title: "ISO 45001 Internal Auditor Training", description: "ISO 45001 internal auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-45001-internal-auditor" } };
export default function ISO45001InternalAuditor() {
  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="
          relative
          h-[360px]
          overflow-hidden
          bg-cover
          bg-center
          text-white
        "
        style={{
          backgroundImage: `url(${iso45001Img.src})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Subtle pattern */}
        <div className="absolute inset-0 grid-pattern opacity-[0.10]" />

        {/* Hero content */}
        <div className="container-x relative h-full">
          <div className="flex h-full items-center justify-center">
            <div className="w-full max-w-7xl text-center">

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.45em]
                  text-gold
                  md:text-sm
                "
              >
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
                  leading-[1.02]
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
                leading-tight
                tracking-wide
                text-foreground
                md:text-[52px]
              "
            >
              Course Overview
            </h2>

            <div className="mt-5 h-[3px] w-[90px] bg-gold" />

            <div className="mt-8 md:mt-10">
              <p
                className="
                  whitespace-pre-line
                  text-justify
                  text-[16px]
                  leading-[2.2]
                  text-muted-foreground
                  md:text-[17px]
                "
              >
                {training.overview}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT + ENQUIRY FORM
      ========================================================= */}
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container-x">

          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1540px]
              items-start
              gap-x-[60px]
              lg:grid-cols-[minmax(0,995px)_340px]
            "
          >

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <main className="min-w-0">

              {/* ===================================================
                  MODULES COVERED
              =================================================== */}
              <section className="w-full">

                <h2
                  className="
                    font-display
                    text-4xl
                    font-normal
                    leading-tight
                    tracking-wide
                    text-foreground
                    md:text-[42px]
                  "
                >
                  Modules covered
                </h2>

                <div className="mt-5 h-[3px] w-[90px] bg-gold" />

                {/* MODULE GRID */}
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
              <section className="mt-16">

                <h2
                  className="
                    font-display
                    text-4xl
                    font-normal
                    leading-tight
                    tracking-wide
                    text-foreground
                    md:text-[42px]
                  "
                >
                  Course Details
                </h2>

                <div className="mt-5 h-[3px] w-[90px] bg-gold" />

                <div
                  className="
                    mt-8
                    space-y-4
                    text-[17px]
                    leading-8
                    text-slate-700
                  "
                >
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
                  ABOUT TRAINING
              =================================================== */}
              <section className="mt-16">

                <h2
                  className="
                    font-display
                    text-3xl
                    font-normal
                    leading-tight
                    tracking-wide
                    text-foreground
                    md:text-[40px]
                  "
                >
                  {training.whyTakeTitle}
                </h2>

                <div className="mt-5 h-[3px] w-[90px] bg-gold" />

                <p
                  className="
                    mt-8
                    text-[16px]
                    leading-[2]
                    text-slate-700
                    md:text-[17px]
                  "
                >
                  {training.detail}
                </p>

              </section>

              {/* ===================================================
                  COURSE CONTENT
              =================================================== */}
              <section className="mt-16">

                <h2
                  className="
                    font-display
                    text-3xl
                    font-normal
                    leading-tight
                    tracking-wide
                    text-foreground
                    md:text-[40px]
                  "
                >
                  {training.courseCoversTitle}
                </h2>

                <div className="mt-5 h-[3px] w-[90px] bg-gold" />

                <div className="mt-9 space-y-7">

                  {training.courseCovers.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-5
                      "
                    >
                      <span
                        className="
                          mt-1
                          shrink-0
                          text-xl
                          text-gold
                        "
                      >
                        ✓
                      </span>

                      <p
                        className="
                          text-[16px]
                          leading-8
                          text-slate-700
                          md:text-[17px]
                        "
                      >
                        {item}
                      </p>
                    </div>
                  ))}

                </div>

              </section>

              {/* ===================================================
                  WHO SHOULD ATTEND
              =================================================== */}
              <section className="mt-16">

                <h2
                  className="
                    font-display
                    text-4xl
                    font-normal
                    leading-tight
                    tracking-wide
                    text-foreground
                    md:text-[42px]
                  "
                >
                  Who Should Attend?
                </h2>

                <div className="mt-5 h-[3px] w-[90px] bg-gold" />

                <div className="mt-9 space-y-6">

                  {training.audience.map((person) => (
                    <div
                      key={person}
                      className="
                        flex
                        items-start
                        gap-5
                      "
                    >
                      <span
                        className="
                          mt-1
                          shrink-0
                          text-xl
                          text-gold
                        "
                      >
                        ✓
                      </span>

                      <span
                        className="
                          text-[17px]
                          leading-8
                          text-slate-700
                        "
                      >
                        {person}
                      </span>
                    </div>
                  ))}

                </div>

              </section>

              {/* ===================================================
                  FAQ
              =================================================== */}
              <section className="mt-16">

                <h2
                  className="
                    font-display
                    text-3xl
                    font-normal
                    leading-tight
                    tracking-wide
                    text-foreground
                    md:text-[40px]
                  "
                >
                  {training.faqTitle}
                </h2>

                <div className="mt-5 h-[3px] w-[90px] bg-gold" />

                <div className="mt-9 space-y-5">

                  {training.faq.map((item) => (
                    <details
                      key={item.question}
                      className="
                        group
                        rounded-[14px]
                        border
                        border-[#d9dee5]
                        bg-white
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
                        <span>
                          {item.question}
                        </span>

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
                          border-[#e2e5e9]
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
                RIGHT — ENQUIRY FORM
            ===================================================== */}
            <aside
              className="
                mt-12
                w-full
                lg:sticky
                lg:top-28
                lg:mt-0
                lg:self-start
              "
            >
              <div className="w-full max-w-[460px]">
                <EnquiryForm />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </Layout>
  );
}