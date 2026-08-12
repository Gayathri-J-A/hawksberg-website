import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iso50001Img from "@/assets/services/iso-50001.webp";

const training = {
  slug: "iso-50001-internal-auditor",

  code: "ISO 50001",

  title: "ISO 50001 Internal Auditor Training",

  intro:
    "Become a certified ISO 50001 Internal Auditor and develop the skills to conduct effective first-party Energy Management System (EnMS) audits based on ISO 50001 and ISO 19011 guidelines.",

  detail:
    "The ISO 50001 Internal Auditor Training equips participants with the knowledge and practical skills required to perform internal audits of an Energy Management System (EnMS). The course covers ISO 50001 requirements, ISO 19011 auditing principles, energy management concepts, audit planning, execution, reporting, and continual improvement. Through interactive learning, practical case studies, and real-world audit scenarios, participants gain the confidence to evaluate EnMS performance and prepare organizations for external certification audits.",

  duration: "24 Hours",

  level: "Intermediate",

  modules: [
    "Introduction to ISO 50001",
    "Energy Management System (EnMS)",
    "Plan-Do-Check-Act (PDCA) Cycle",
    "Context of the Organization (Clause 4)",
    "Leadership & Energy Policy (Clause 5)",
    "Energy Planning (Clause 6)",
    "Energy Review",
    "Energy Baseline (EnB)",
    "Energy Performance Indicators (EnPIs)",
    "Significant Energy Uses (SEUs)",
    "Support & Operational Controls (Clauses 7–8)",
    "Performance Evaluation (Clause 9)",
    "Continual Improvement (Clause 10)",
    "ISO 19011 Internal Audit Principles",
    "Internal Audit Planning",
    "Audit Execution & Evidence Collection",
    "Nonconformity Reporting",
    "Corrective Actions & Audit Follow-Up",
  ],

  audience: [
    "Energy Managers",
    "Energy Engineers",
    "Internal Auditors",
    "Sustainability Professionals",
    "Facility Managers",
    "Compliance Officers",
    "Energy Management Teams",
    "ISO 50001 Implementation Teams",
  ],

  whyTakeTitle: "About the ISO 50001 Internal Auditor Course",

  overview: `
The ISO 50001 Internal Auditor Course equips participants with the knowledge and practical skills required to conduct internal (first-party) audits of an Energy Management System (EnMS) in accordance with ISO 50001 and ISO 19011 guidelines. The course enables organizations to evaluate energy performance, identify opportunities for improvement, ensure compliance with energy management requirements, and prepare for external certification audits.

Hawksberg International provides professional ISO 50001 Internal Auditor Training delivered by experienced industry experts. The programme combines instructor-led sessions, practical audit exercises, real-world energy management case studies, and interactive discussions to help participants develop the confidence to effectively plan, conduct, report, and follow up internal Energy Management System audits while driving continual improvement in energy performance.
`,

  courseCoversTitle: "Course Content",

  courseCovers: [
    "The structure of ISO 50001 and the Energy Management System (EnMS) framework, based on the Plan-Do-Check-Act (PDCA) cycle.",

    "Context, interested parties, and the EnMS scope (Clause 4).",

    "Leadership and the energy policy (Clause 5).",

    "Energy planning — the energy review, Energy Baseline (EnB), Energy Performance Indicators (EnPIs), Significant Energy Uses (SEUs), and energy objectives and targets (Clause 6).",

    "Support and Operation — competence, operational controls, and design and procurement affecting energy performance (Clauses 7–8).",

    "Performance evaluation — monitoring and measurement of energy performance, internal audit, and management review (Clause 9).",

    "Improvement — nonconformity, corrective action, and continual improvement of energy performance (Clause 10).",

    "The internal audit process per ISO 19011 — planning, conducting, evidence collection, nonconformity reporting, audit reporting, and follow-up.",
  ],

  faqTitle:
    "ISO 50001 Internal Auditor Training — Frequently Asked Questions",

  faq: [
    {
      question: "What is the ISO 50001 Internal Auditor course?",
      answer:
        "A training course that equips participants to plan and conduct internal (first-party) audits of an ISO 50001 Energy Management System (EnMS) within their own organisation, in accordance with ISO 19011.",
    },

    {
      question: "What does the course cover?",
      answer:
        "The course covers ISO 50001 requirements, energy review and Energy Baseline (EnB), Energy Performance Indicators (EnPIs), Significant Energy Uses (SEUs), and how to plan, conduct, report, and follow up an internal energy audit.",
    },

    {
      question: "How does internal auditing help reduce energy costs?",
      answer:
        "Regular internal audits verify that the Energy Management System is functioning effectively, identify areas where energy is being wasted, and drive corrective actions that support continual improvement in energy performance and lower energy costs.",
    },

    {
      question: "Who should attend?",
      answer:
        "Employees responsible for performing internal Energy Management System audits, Energy Managers, Facility Managers, Sustainability Professionals, and teams preparing for or maintaining ISO 50001 certification.",
    },

    {
      question: "Are there prerequisites?",
      answer:
        "A basic understanding of Energy Management Systems and ISO 50001 concepts is recommended. Previous auditing knowledge is beneficial but not mandatory.",
    },
  ],
};

export default function ISO50001InternalAuditor() {
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
          backgroundImage: `url(${iso50001Img})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-[0.10]" />

        {/* Hero content */}
        <div className="container-x relative flex h-full items-center justify-center">
          <div className="mx-auto w-full max-w-6xl text-center">

            {/* Small heading */}
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

            {/* Main heading */}
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

            {/* Gold divider */}
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

            {/* <div className="mt-16">

              <p
                className="
                  whitespace-pre-line
                  text-justify
                  text-[16px]
                  leading-[2.8]
                  text-muted-foreground
                  md:text-[17px]
                "
              >
                {training.overview}
              </p>

            </div> */}
            <div className="mt-8 md:mt-10">
  <p
    className="
      whitespace-pre-line
      text-justify
      text-[16px]
      leading-[2.0]
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
              max-w-[1500px]
              items-start
              gap-10
              lg:grid-cols-[minmax(0,1fr)_340px]
              lg:gap-12
            "
          >

            {/* =====================================================
                LEFT SIDE CONTENT
            ===================================================== */}
            <main className="min-w-0 space-y-16">

              {/* ===================================================
                  MODULES COVERED
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
                  ABOUT COURSE
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
                  {training.whyTakeTitle}
                </h2>

                <div className="mt-5 h-[3px] w-20 bg-gold" />

                <p
                  className="
                    mt-8
                    text-[16px]
                    leading-8
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

                  {training.courseCovers.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-5"
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
                RIGHT SIDE ENQUIRY FORM
            ===================================================== */}
            <aside
              className="
                w-full
                lg:sticky
                lg:top-28
                lg:self-start
              "
            >

              <div
                className="
                  mx-auto
                  w-full
                  max-w-[380px]
                  lg:ml-auto
                  lg:mr-0
                "
              >
                <EnquiryForm />
              </div>

            </aside>

          </div>
        </div>
      </section>
    </Layout>
  );
}