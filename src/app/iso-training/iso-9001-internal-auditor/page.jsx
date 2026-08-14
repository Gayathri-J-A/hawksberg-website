import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iso9001Img from "@/assets/services/iso-9001.webp";

const training = {
  title: "ISO 9001 Internal Auditor Training",

  intro:
    "Develop the knowledge and practical skills required to plan, conduct, report, and follow up internal Quality Management System audits based on ISO 9001:2015 and ISO 19011 guidelines.",

  detail:
    "ISO 9001 Internal Auditor Training equips professionals with the knowledge and practical skills required to conduct effective first-party audits of Quality Management Systems. The programme covers ISO 9001:2015 requirements, quality management principles, audit planning, audit techniques, evidence collection, reporting, corrective actions, and continual improvement. Through practical exercises, case studies, and interactive sessions, participants gain the confidence required to perform effective internal QMS audits.",

  duration: "16 Hours",

  level: "Intermediate",

  modules: [
    "Introduction to ISO 9001:2015",
    "Quality Management Principles",
    "Process Approach",
    "Risk-Based Thinking",
    "ISO 9001:2015 Requirements",
    "Context of the Organization",
    "Leadership & Commitment",
    "Planning & Risk Management",
    "Support & Competence",
    "Operational Planning and Control",
    "Performance Evaluation",
    "Improvement",
    "ISO 19011 Audit Principles",
    "Internal Audit Planning",
    "Audit Execution & Evidence Collection",
    "Audit Reporting & Corrective Actions",
  ],

  audience: [
    "Quality Managers",
    "Quality Assurance Professionals",
    "QMS Officials",
    "Internal Auditors",
    "Management Representatives",
    "Compliance Professionals",
    "ISO Consultants",
    "Professionals involved in ISO 9001 implementation",
  ],

  overviewTitle: "What is ISO 9001 Internal Auditor Training?",

  overview: `
ISO 9001 Internal Auditor Training is designed to provide participants with the knowledge and practical skills required to plan, conduct, report, and follow up internal audits of a Quality Management System based on ISO 9001:2015 and ISO 19011 auditing guidelines.

The training helps professionals understand the requirements of ISO 9001, evaluate the effectiveness of quality management processes, identify nonconformities, collect objective audit evidence, prepare audit reports, and support corrective and continual improvement activities.

Hawksberg International provides professional ISO 9001 Internal Auditor Training through experienced industry professionals, practical audit exercises, real-world case studies, and interactive discussions.
`,

  courseCoversTitle:
    "What Will You Learn in the ISO 9001 Internal Auditor Course?",

  courseCovers: [
    "Understanding the structure and requirements of ISO 9001:2015.",
    "Understanding the principles of Quality Management Systems.",
    "Applying the process approach and risk-based thinking.",
    "Planning and preparing an effective internal audit.",
    "Conducting audit interviews and collecting objective evidence.",
    "Identifying and documenting audit findings and nonconformities.",
    "Preparing clear and effective internal audit reports.",
    "Understanding corrective actions, follow-up audits, and continual improvement.",
  ],

  benefitsTitle: "Benefits of ISO 9001 Internal Auditor Training",

  benefits: [
    "Develops practical skills for conducting ISO 9001 internal audits.",
    "Improves understanding of ISO 9001:2015 requirements.",
    "Helps identify process weaknesses and nonconformities.",
    "Improves audit planning, evidence collection, and reporting skills.",
    "Supports effective corrective action and continual improvement.",
    "Helps organizations maintain readiness for external certification audits.",
    "Strengthens internal quality management and compliance capabilities.",
  ],

  faqTitle:
    "ISO 9001 Internal Auditor Training — Frequently Asked Questions",

  faq: [
    {
      question: "What is ISO 9001 Internal Auditor Training?",
      answer:
        "It is a professional training programme that develops the knowledge and practical skills required to plan and conduct first-party internal audits of an ISO 9001:2015 Quality Management System.",
    },
    {
      question: "What does the ISO 9001 Internal Auditor course cover?",
      answer:
        "The course covers ISO 9001:2015 requirements, Quality Management principles, process approach, risk-based thinking, audit planning, audit execution, evidence collection, reporting, corrective actions, and continual improvement.",
    },
    {
      question: "Who should attend ISO 9001 Internal Auditor Training?",
      answer:
        "The course is suitable for Quality Managers, Quality Assurance professionals, QMS officials, Internal Auditors, Management Representatives, Compliance professionals, consultants, and professionals involved in ISO 9001 implementation.",
    },
    {
      question: "Do I need previous ISO 9001 audit experience?",
      answer:
        "Previous internal auditing experience is not mandatory. A basic understanding of Quality Management Systems and ISO 9001 concepts is beneficial.",
    },
  ],
};

export const metadata = { title: "ISO 9001 Internal Auditor Training", description: "ISO 9001 internal auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-9001-internal-auditor" } };
export default function ISO9001InternalAuditor() {
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
          backgroundImage: `url(${iso9001Img.src})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Grid pattern */}
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
          COURSE OVERVIEW
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

            {/* Reduced title → content gap */}
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
          MODULES + CONTENT + ENQUIRY FORM
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
              lg:grid-cols-[minmax(0,995px)_400px]
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

                {/* Reference-style two-column cards */}
                {/* <div
                  className="
                    mt-8
                    grid
                    w-full
                    grid-cols-1
                    gap-x-4
                    gap-y-4
                    sm:grid-cols-2
                  "
                >
                  {training.modules.map((module, index) => (
                    <div
                      key={module}
                      className="
                        flex
                        min-h-[118px]
                        w-full
                        items-center
                        rounded-[14px]
                        border
                        border-[#d9dee5]
                        bg-white
                        px-6
                        py-5
                        transition-all
                        duration-300
                        hover:-translate-y-[2px]
                        hover:shadow-[0_8px_24px_rgba(15,35,60,0.07)]
                      "
                    >
                      <div
                        className="
                          flex
                          w-full
                          items-center
                          gap-5
                        "
                      >
                  
                        <span
                          className="
                            w-[30px]
                            shrink-0
                            font-display
                            text-[20px]
                            font-normal
                            leading-none
                            text-gold
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                       
                        <span
                          className="
                            min-w-0
                            flex-1
                            text-[16px]
                            font-normal
                            leading-[1.6]
                            text-[#344a68]
                            md:text-[17px]
                          "
                        >
                          {module}
                        </span>
                      </div>
                    </div>
                  ))}
                </div> */}
      

  <div className="mt-6 grid gap-3 sm:grid-cols-2">
    {training.modules.map((module, index) => (
      <div
        key={module}
        className="
          flex
          items-start
          gap-4
          rounded-lg
          border
          border-border
          bg-card
          p-4
        "
      >
        <span className="shrink-0 font-display text-2xl text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="pt-1 text-[14px] leading-6 text-slate-700">
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
                  TRAINING DETAIL
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
                  ISO 9001 Internal Auditor Training – Aim
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
                  WHAT WILL YOU LEARN
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

                <div className="mt-9 space-y-6">
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
                  {training.benefits.map((item) => (
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
                RIGHT SIDE ENQUIRY FORM
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
              {/* Fixed reference width */}
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