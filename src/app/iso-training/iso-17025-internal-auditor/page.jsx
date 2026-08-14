import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iso17025Img from "@/assets/isotraining/iso17025.webp";

const training = {
  slug: "iso-17025-internal-auditor",

  code: "ISO 17025",

  title: "ISO 17025 Internal Auditor Training",

  intro:
    "Become a certified ISO/IEC 17025 Internal Auditor and develop the skills to conduct effective first-party audits of Testing and Calibration Laboratory Management Systems based on ISO/IEC 17025:2017 and ISO 19011 guidelines.",

  detail:
    "The ISO/IEC 17025 Internal Auditor Training equips participants with the knowledge and practical skills required to perform internal audits of Testing and Calibration Laboratory Management Systems. The course covers ISO/IEC 17025:2017 requirements, ISO 19011 auditing principles, laboratory quality management, audit planning, execution, reporting, and continual improvement. Through practical case studies and interactive learning, participants gain the confidence to evaluate laboratory management systems and prepare organizations for external assessments.",

  duration: "24 Hours",

  level: "Intermediate",

  modules: [
    "Introduction to ISO/IEC 17025:2017",
    "Testing & Calibration Laboratory Management Systems",
    "General Requirements: Impartiality & Confidentiality",
    "Laboratory Structure & Management",
    "Personnel Competence",
    "Facilities & Environmental Conditions",
    "Equipment & Metrological Traceability",
    "Method Selection, Verification & Validation",
    "Sampling & Handling of Test Items",
    "Measurement Uncertainty",
    "Ensuring Validity of Results",
    "Management System Requirements",
    "Risk-Based Thinking & Corrective Actions",
    "ISO 19011 Internal Audit Principles",
    "Internal Audit Planning",
    "Audit Execution & Evidence Collection",
    "Nonconformity Reporting",
    "Audit Reporting & Follow-Up",
  ],

  audience: [
    "Laboratory Professionals",
    "Laboratory Managers",
    "Quality Assurance Managers",
    "Testing Laboratory Staff",
    "Calibration Laboratory Staff",
    "Internal Auditors",
    "Laboratory Quality Coordinators",
    "ISO/IEC 17025 Implementation Teams",
  ],

  overviewTitle: "Introduction to the ISO 17025 Internal Auditor Course",

  overview: `
The ISO/IEC 17025 Internal Auditor Course equips participants with the knowledge and practical skills required to conduct internal (first-party) audits of Testing and Calibration Laboratory Management Systems in accordance with ISO/IEC 17025:2017 and ISO 19011 guidelines. The course enables laboratories to evaluate competence, identify nonconformities, support continual improvement, and prepare for external accreditation assessments.

Hawksberg International provides professional ISO/IEC 17025 Internal Auditor Training delivered by experienced industry experts. The programme combines instructor-led sessions, practical laboratory audit exercises, real-world testing and calibration case studies, and interactive discussions to help participants develop the confidence to effectively plan, conduct, report, and follow up internal laboratory audits.
`,

  courseCoversTitle: "Course Content",

  courseCovers: [
    "The structure of ISO/IEC 17025:2017 — competence, impartiality, and consistent operation of laboratories.",
    "General requirements — impartiality and confidentiality.",
    "Structural requirements — laboratory organisation and management.",
    "Resource requirements — personnel, facilities and environmental conditions, equipment, and metrological traceability.",
    "Process requirements — method selection, verification and validation, sampling, handling of items, evaluation of measurement uncertainty, ensuring the validity of results, and reporting.",
    "Management System requirements — documents and records, actions to address risks and opportunities, corrective action, and internal audit.",
    "The internal audit process in accordance with ISO 19011 — planning, conducting audits, gathering evidence, recording nonconformities, audit reporting, and follow-up.",
  ],

  assessmentTitle: "Assessment and Certification",

  assessmentContent:
    "Upon completion, participants take a comprehensive assessment to evaluate their understanding of ISO/IEC 17025:2017 requirements and internal auditing principles. A minimum passing score of 70% is required to successfully complete the course and receive a Hawksberg International ISO/IEC 17025 Internal Auditor course-completion certificate.",

  faqTitle: "ISO 17025 Training — Frequently Asked Questions",

  faq: [
    {
      question: "What is the ISO 17025 Internal Auditor course?",
      answer:
        "A training course that equips participants with the skills to plan and conduct internal (first-party) audits of a Testing or Calibration Laboratory Management System against ISO/IEC 17025:2017 in accordance with ISO 19011.",
    },

    {
      question: "What does the course cover?",
      answer:
        "The course covers ISO/IEC 17025:2017 requirements, including impartiality and confidentiality, structural and resource requirements, process requirements, measurement traceability, the management system, and how to plan, conduct, report, and follow up an internal laboratory audit.",
    },

    {
      question: "Is ISO 17025 accreditation or certification?",
      answer:
        "Laboratory competence to ISO/IEC 17025 is recognised through accreditation by an accreditation body. This Internal Auditor course helps laboratories establish and maintain an effective internal audit programme to prepare for and sustain accreditation.",
    },

    {
      question: "Who should attend?",
      answer:
        "Laboratory professionals responsible for internal audits, Technical Managers, Quality Managers, Testing and Calibration Laboratory personnel, and teams preparing laboratories for ISO/IEC 17025 accreditation.",
    },

    {
      question: "Are there prerequisites?",
      answer:
        "There are no formal prerequisites. A basic understanding of laboratory quality management is helpful but not required.",
    },

    {
      question: "How is the course assessed, and what certificate do I get?",
      answer:
        "Assessment is based on participation, course exercises, and a short assessment where applicable. Upon successful completion, participants receive a Hawksberg International ISO/IEC 17025 Internal Auditor course-completion certificate.",
    },
  ],
};

export const metadata = { title: "ISO 17025 Internal Auditor Training", description: "ISO 17025 internal auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-17025-internal-auditor" } };
export default function ISO17025InternalAuditor() {
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
          backgroundImage: `url(${iso17025Img.src})`,
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


                {/* MODULE CARD GRID */}
               <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
  {training.modules.map((module, index) => (
    <div
      key={module}
      className="
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
        box-border
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
                  ISO 17025 Internal Auditor Training – Aim
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
                  ASSESSMENT & CERTIFICATION
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
                  {training.assessmentTitle}
                </h2>

                <div className="mt-5 h-[3px] w-[90px] bg-gold" />

                <div
                  className="
                    mt-8
                    rounded-[14px]
                    border
                    border-[#d9dee5]
                    bg-white
                    p-7
                  "
                >

                  <p
                    className="
                      text-[15px]
                      leading-8
                      text-slate-700
                      md:text-[16px]
                    "
                  >
                    {training.assessmentContent}
                  </p>

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