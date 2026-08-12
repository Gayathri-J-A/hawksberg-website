import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iso22301Img from "@/assets/isotraining/iso22301.webp";

const training = {
  slug: "iso-22301-internal-auditor",

  code: "ISO 22301",

  title: "ISO 22301 Internal Auditor Training",

  intro:
    "Become a certified ISO 22301 Internal Auditor and develop the skills to conduct effective first-party Business Continuity Management System (BCMS) audits based on ISO 22301 and ISO 19011 guidelines.",

  detail:
    "The ISO 22301 Internal Auditor Training equips participants with the knowledge and practical skills required to perform internal audits of Business Continuity Management Systems (BCMS). The course covers ISO 22301 requirements, ISO 19011 auditing principles, business impact analysis, risk assessment, audit planning, execution, reporting, and continual improvement. Through practical exercises and real-world audit scenarios, participants gain the confidence to evaluate BCMS effectiveness and prepare organizations for external certification audits.",

  duration: "24 Hours",

  level: "Intermediate",

  modules: [
    "Introduction to ISO 22301",
    "Business Continuity Management Systems (BCMS)",
    "Business Impact Analysis (BIA)",
    "Risk Assessment",
    "Business Continuity Strategies",
    "Business Continuity Plans & Procedures",
    "Business Continuity Testing & Exercises",
    "ISO 19011 Internal Audit Principles",
    "Audit Types & Audit Concepts",
    "Roles & Responsibilities of Internal Auditors",
    "Audit Objectives, Criteria & Scope",
    "Audit Planning & Preparation",
    "Audit Checklists",
    "Evidence Collection & Audit Execution",
    "Nonconformity Reporting",
    "Audit Reporting & Follow-Up",
  ],

  audience: [
    "Business Continuity Managers",
    "Management Representatives",
    "Quality Assurance Managers",
    "Quality Assurance Engineers",
    "Internal Auditors",
    "BCMS Consultants",
    "ISO 22301 Implementation Teams",
    "Professionals responsible for Business Continuity Management",
  ],

  overviewTitle: "About ISO 22301 Internal Auditor Training",

  overview: `
ISO 22301 Internal Auditor Training equips professionals with the knowledge and practical skills required to plan, conduct, report, and follow up internal (first-party) Business Continuity Management System (BCMS) audits in accordance with ISO 22301 and ISO 19011 guidelines. The course enables organizations to evaluate the effectiveness of their Business Continuity Management System, identify risks and nonconformities, strengthen organizational resilience, and prepare for external certification audits.

Hawksberg International provides professional ISO 22301 Internal Auditor Training delivered by experienced industry experts. The programme combines instructor-led sessions, practical audit exercises, real-world business continuity case studies, and interactive discussions to help participants develop the confidence to effectively assess Business Continuity Management Systems and successfully perform internal BCMS audits.
`,

  benefitsTitle: "Benefits of ISO 22301 Internal Auditor Training",

  benefits: [
    "Provides the skills required to conduct internal audits against every requirement of ISO 22301.",
    "Enables participants to develop and manage customized internal audit checklists, ISO documentation, and implementation activities.",
    "Builds the confidence and competence required to successfully face external certification audits.",
    "Equips participants to guide and train colleagues on Business Continuity Management System requirements.",
    "Develops the capability to drive continual improvement activities within the Business Continuity Management System.",
    "Supports professional growth and career advancement in Business Continuity Management and internal auditing.",
    "Helps internal auditors identify risks that could affect the effectiveness of the Business Continuity Management System.",
  ],

  faqTitle:
    "ISO 22301 Internal Auditor Training in India — Frequently Asked Questions",

  faq: [
    {
      question: "What is the ISO 22301 Internal Auditor course?",
      answer:
        "A training course that equips participants with the skills to plan and conduct internal (first-party) audits of an ISO 22301 Business Continuity Management System (BCMS) within their own organisation, in accordance with ISO 19011.",
    },
    {
      question: "What does the course cover?",
      answer:
        "The course covers ISO 22301 requirements, Business Impact Analysis (BIA), risk assessment, business continuity strategies and plans, exercising and testing, and how to plan, conduct, report, and follow up an internal Business Continuity Management System audit.",
    },
    {
      question: "How is this different from the Lead Auditor course?",
      answer:
        "The Internal Auditor course focuses on auditing your own organisation's Business Continuity Management System (first-party audits), whereas the Lead Auditor course prepares participants to perform external, third-party certification audits.",
    },
    {
      question: "Who should attend?",
      answer:
        "Employees responsible for conducting internal Business Continuity Management System audits, Business Continuity Managers, Risk Managers, Internal Auditors, and teams preparing for or maintaining ISO 22301 certification.",
    },
    {
      question: "Are there prerequisites?",
      answer:
        "There are no formal prerequisites. A basic understanding of Business Continuity Management concepts is helpful but not required.",
    },
  ],
};

export default function ISO22301InternalAuditor() {
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
          backgroundImage: `url(${iso22301Img})`,
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

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
          MAIN CONTENT + ENQUIRY FORM
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
                  TRAINING AIM
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
                  ISO 22301 Internal Auditor Training – Aim
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

                      <span className="shrink-0 text-lg text-gold">
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
                  BENEFITS
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
                  {training.benefitsTitle}
                </h2>

                <div className="mt-5 h-[3px] w-[90px] bg-gold" />

                <div className="mt-9 space-y-6">

                  {training.benefits.map((benefit) => (
                    <div
                      key={benefit}
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
                        {benefit}
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
                RIGHT SIDE — ENQUIRY FORM
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