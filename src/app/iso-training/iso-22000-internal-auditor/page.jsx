import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iso22000Img from "@/assets/isotraining/iso22000.webp";

const training = {
  slug: "iso-22000-internal-auditor",

  code: "ISO 22000",

  title: "ISO 22000 Internal Auditor Training",

  intro:
    "Become a certified ISO 22000 Internal Auditor and develop the skills to conduct effective first-party Food Safety Management System (FSMS) audits based on ISO 22000 and ISO 19011 guidelines.",

  detail:
    "The ISO 22000 Internal Auditor Training equips participants with the knowledge and practical skills required to perform internal audits of Food Safety Management Systems (FSMS). The course covers ISO 22000 requirements, ISO 19011 auditing principles, HACCP methodology, audit planning, execution, reporting, and continual improvement. Through interactive learning, practical exercises, and real-world audit scenarios, participants gain the confidence to evaluate FSMS effectiveness and prepare organizations for external certification audits.",

  duration: "24 Hours",

  level: "Intermediate",

  modules: [
    "Introduction to ISO 22000",
    "Food Safety Management Systems (FSMS)",
    "Process Approach & PDCA Cycle",
    "Context of the Organization (Clause 4)",
    "Leadership & Food Safety Policy (Clause 5)",
    "Planning: Risks, Opportunities & FSMS Objectives (Clause 6)",
    "Prerequisite Programmes (PRPs)",
    "Hazard Analysis & HACCP Principles",
    "Critical Control Points (CCPs)",
    "Operational PRPs",
    "Traceability & Emergency Preparedness",
    "Performance Evaluation (Clauses 9–10)",
    "Nonconformity & Corrective Actions",
    "ISO 19011 Internal Audit Principles",
    "Internal Audit Planning",
    "Audit Execution & Evidence Collection",
    "Audit Reporting & Follow-Up",
  ],

  audience: [
    "Food Industry Professionals",
    "Food Safety Managers",
    "Quality Assurance Professionals",
    "Internal Auditors",
    "Production Managers",
    "HACCP Team Members",
    "FSMS Coordinators",
    "ISO 22000 Implementation Teams",
  ],

  overviewTitle: "ISO 22000 Internal Auditor Training – Course Aim",

  overview: `
ISO 22000 Internal Auditor Training equips professionals with the knowledge and practical skills required to plan, conduct, report, and follow up internal (first-party) Food Safety Management System (FSMS) audits in accordance with ISO 22000 and ISO 19011 guidelines. The course enables organizations to evaluate the effectiveness of their Food Safety Management System, identify food safety risks and nonconformities, support continual improvement, and prepare for external certification audits.

Hawksberg International provides professional ISO 22000 Internal Auditor Training delivered by experienced industry experts. The programme combines instructor-led sessions, practical audit exercises, HACCP-based case studies, real-world food safety scenarios, and interactive discussions to help participants develop the confidence to effectively assess Food Safety Management Systems and successfully perform internal FSMS audits.
`,

  whyTakeTitle: "Why ISO 22000 Internal Auditing is Important",

  whyTake: `
Organizations that implement ISO 22000 benefit from improved food safety, reduced food waste, and greater customer satisfaction. An effective internal audit programme is essential to ensure the Food Safety Management System functions properly.

Internal auditors provide independent assurance that the system works as intended and that any nonconformities are identified and corrected. This training equips participants with the knowledge and practical skills required to perform that role.
`,

  courseCoversTitle: "Course Content",

  courseCovers: [
    "The structure of ISO 22000 and the Food Safety Management System (FSMS) framework, including the process approach and the Plan-Do-Check-Act (PDCA) cycle at two levels.",

    "Context of the organization, interested parties, and the Food Safety Management System scope (Clause 4).",

    "Leadership and the Food Safety Policy (Clause 5).",

    "Planning — risks and opportunities, and Food Safety Management System objectives (Clause 6).",

    "Support and Operation — Prerequisite Programmes (PRPs), hazard analysis, HACCP plan, Critical Control Points (CCPs), Operational PRPs, traceability, and emergency preparedness (Clauses 7–8).",

    "HACCP principles and hazard analysis.",

    "Performance Evaluation and Improvement — monitoring, internal audit, nonconformity, corrective action, and continual improvement (Clauses 9–10).",

    "The internal audit process in accordance with ISO 19011 — audit planning, conducting audits, evidence collection, nonconformity reporting, audit reporting, and follow-up.",
  ],

  faqTitle:
    "ISO 22000 Internal Auditor Training — Frequently Asked Questions",

  faq: [
    {
      question: "What is the ISO 22000 Internal Auditor course?",
      answer:
        "A training course that equips participants with the skills to plan and conduct internal (first-party) audits of an ISO 22000 Food Safety Management System (FSMS) within their own organisation, in accordance with ISO 19011.",
    },

    {
      question: "What does the course cover?",
      answer:
        "The course covers ISO 22000 requirements, HACCP principles, Prerequisite Programmes (PRPs), Operational PRPs, hazard analysis, and how to plan, conduct, report, and follow up an internal Food Safety Management System audit.",
    },

    {
      question: "How is this different from the Lead Auditor course?",
      answer:
        "The Internal Auditor course focuses on auditing your own organisation's Food Safety Management System (first-party audits), whereas the Lead Auditor course prepares participants to lead external, third-party certification audits.",
    },
  ],
};

export const metadata = { title: "ISO 22000 Internal Auditor Training", description: "ISO 22000 internal auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-22000-internal-auditor" } };
export default function ISO22000InternalAuditor() {
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
          backgroundImage: `url(${iso22000Img.src})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Background grid */}
        <div className="absolute inset-0 grid-pattern opacity-[0.10]" />

        <div className="container-x relative h-full">
          <div className="flex h-full items-center justify-center">

            <div className="w-full max-w-7xl px-4 text-center">

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
          OVERVIEW
      ========================================================= */}
      <section className="bg-background py-14 md:py-16">

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
              {training.overviewTitle}
            </h2>

            <div className="mt-5 h-[3px] w-[90px] bg-gold" />

            {/* Reduced heading/content gap */}
            <div className="mt-7 md:mt-8">

              <p
                className="
                  whitespace-pre-line
                  text-justify
                  text-[16px]
                  leading-[2.05]
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
          MAIN CONTENT + ENQUIRY
      ========================================================= */}
      <section className="bg-muted/40 py-14 md:py-16">

        <div className="container-x">

          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1445px]
              items-start
              gap-x-[50px]
              lg:grid-cols-[minmax(0,995px)_340px]
            "
          >

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <main className="min-w-0">


              {/* ===================================================
                  MODULES
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


                {/* Reference-style module cards */}
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
                  WHY ISO 22000 INTERNAL AUDITING
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
                    whitespace-pre-line
                    text-justify
                    text-[16px]
                    leading-[2]
                    text-slate-700
                    md:text-[17px]
                  "
                >
                  {training.whyTake}
                </p>

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

                <div
                  className="
                    mt-9
                    grid
                    gap-x-4
                    gap-y-4
                    sm:grid-cols-2
                  "
                >

                  {training.audience.map((person) => (
                    <div
                      key={person}
                      className="
                        flex
                        min-h-[75px]
                        items-center
                        gap-4
                        rounded-[14px]
                        border
                        border-[#d9dee5]
                        bg-white
                        px-5
                        py-4
                      "
                    >

                      <span
                        className="
                          shrink-0
                          text-lg
                          text-gold
                        "
                      >
                        ✓
                      </span>

                      <span
                        className="
                          text-[15px]
                          leading-7
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
                  COURSE CONTENT
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
                  {training.courseCoversTitle}
                </h2>

                <div className="mt-5 h-[3px] w-[90px] bg-gold" />

                <div className="mt-9 space-y-4">

                  {training.courseCovers.map((item, index) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-5
                        rounded-[14px]
                        border
                        border-[#d9dee5]
                        bg-white
                        p-5
                      "
                    >

                      <span
                        className="
                          shrink-0
                          font-display
                          text-xl
                          text-gold
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p
                        className="
                          text-[15px]
                          leading-8
                          text-slate-700
                          md:text-[16px]
                        "
                      >
                        {item}
                      </p>

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

              <div className="w-full max-w-[400px]">
                <EnquiryForm />
              </div>

            </aside>

          </div>

        </div>
      </section>

    </Layout>
  );
}