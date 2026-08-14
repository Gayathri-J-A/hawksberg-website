import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iatf16949Img from "@/assets/services/iatf-16949.webp";

const training = {
  title: "IATF 16949 Internal Auditor Training",

  intro:
    "Become a certified IATF 16949 Internal Auditor and develop the skills to conduct effective first-party Automotive Quality Management System (AQMS) audits based on IATF 16949:2016, ISO 9001:2015, and ISO 19011 guidelines.",

  detail:
    "The IATF 16949 Internal Auditor Training equips participants with the knowledge and practical skills required to perform internal audits of Automotive Quality Management Systems (AQMS). The course covers IATF 16949:2016 requirements, ISO 9001:2015 quality management principles, automotive core tools, ISO 19011 auditing guidelines, audit planning, execution, reporting, and continual improvement. Through practical exercises and real-world audit scenarios, participants gain the confidence to evaluate automotive quality systems and prepare organizations for external certification audits.",

  duration: "24 Hours",

  level: "Intermediate",

  modules: [
    "Introduction to IATF 16949:2016",
    "Automotive Quality Management Systems (AQMS)",
    "ISO 9001:2015 Foundation",
    "Automotive Process Approach",
    "Customer-Specific Requirements",
    "Advanced Product Quality Planning (APQP)",
    "Production Part Approval Process (PPAP)",
    "Failure Mode & Effects Analysis (FMEA)",
    "Measurement Systems Analysis (MSA)",
    "Statistical Process Control (SPC)",
    "ISO 19011 Internal Audit Principles",
    "Internal Audit Planning",
    "Audit Execution & Evidence Collection",
    "Audit Documentation",
    "Nonconformity Reporting",
    "Corrective Actions & Audit Follow-Up",
  ],

  audience: [
    "Automotive Industry Managers",
    "Quality Managers",
    "Quality Assurance Engineers",
    "QMS Officials",
    "Internal Auditors",
    "IATF 16949 Compliance Officers",
    "Automotive Quality Consultants",
    "Professionals working in Automotive Manufacturing",
  ],

  overviewTitle: "What is IATF 16949 Training?",

  overview: `
IATF 16949 Internal Auditor Training equips professionals with the knowledge and practical skills required to plan, conduct, report, and follow up internal (first-party) Automotive Quality Management System (AQMS) audits in accordance with IATF 16949:2016, ISO 9001:2015, and ISO 19011 guidelines. The course enables organizations to evaluate the effectiveness of their Automotive Quality Management System, identify nonconformities, support continual improvement, and prepare for external certification audits.

Hawksberg International provides professional IATF 16949 Internal Auditor Training delivered by experienced industry experts. The programme combines instructor-led sessions, practical audit exercises, real-world automotive manufacturing case studies, and interactive discussions to help participants develop the confidence to effectively assess Automotive Quality Management Systems and successfully perform internal AQMS audits.
`,

  courseCoversTitle:
    "What Will You Learn in the IATF 16949 Training Course?",

  courseCovers: [
    "The IATF 16949:2016 structure and automotive-sector requirements built on ISO 9001:2015.",
    "The five automotive core tools — Advanced Product Quality Planning (APQP), Production Part Approval Process (PPAP), Failure Mode and Effects Analysis (FMEA), Measurement Systems Analysis (MSA), and Statistical Process Control (SPC).",
    "Customer-specific requirements and the automotive process approach.",
    "Management System auditing guidelines in accordance with ISO 19011.",
    "How to plan, conduct, and manage internal audits in compliance with ISO 19011 and the requirements of IATF 16949.",
  ],

  benefitsTitle: "Benefits of IATF 16949 Training",

  benefits: [
    "Helps you prepare, conduct, and manage IATF 16949:2016 internal audit activities.",
    "Teaches you how to evaluate an organisation's capability to manage its Automotive Quality Management System.",
    "Develops the skills to prepare accurate audit reports and support corrective action activities.",
    "Helps you understand and apply the benefits and requirements of an IATF 16949:2016 internal audit.",
  ],

  faqTitle: "IATF 16949 Training — Frequently Asked Questions",

  faq: [
    {
      question: "What is the IATF 16949 Internal Auditor course?",
      answer:
        "A training course that equips participants with the skills to plan and conduct internal (first-party) audits of an IATF 16949 Automotive Quality Management System within their own organisation, in accordance with ISO 19011.",
    },
    {
      question: "What does the course cover?",
      answer:
        "The course covers IATF 16949 requirements built on ISO 9001, the automotive core tools — APQP, PPAP, FMEA, MSA, and SPC — together with planning, conducting, reporting, and following up internal Automotive Quality Management System audits.",
    },
    {
      question: "How does IATF 16949 relate to ISO 9001?",
      answer:
        "IATF 16949 is the automotive industry's Quality Management System standard built upon ISO 9001, with additional automotive-specific requirements focused on defect prevention, continual improvement, and supply chain consistency.",
    },
  ],
};

export const metadata = { title: "IATF 16949 Internal Auditor Training", description: "IATF 16949 internal auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iatf-16949-internal-auditor" } };
export default function IATF16949InternalAuditor() {
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
          backgroundImage: `url(${iatf16949Img.src})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Grid Pattern */}
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

            {/* Controlled gap between heading and content */}
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
          MAIN CONTENT + RIGHT ENQUIRY FORM
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

                {/* =================================================
                    REFERENCE-STYLE MODULE CARD GRID
                ================================================= */}
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
        items-center
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
                  IATF 16949 Internal Auditor Training – Aim
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
              {/* IMPORTANT:
                  Reference width = narrower enquiry panel */}
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