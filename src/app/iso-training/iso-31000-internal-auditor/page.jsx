import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iso31000Img from "@/assets/isotraining/iso31000.webp";

const training = {
  slug: "iso-31000-internal-auditor",

  code: "ISO 31000",

  title: "ISO 31000 Internal Auditor Training",

  intro:
    "Develop practical risk management and internal auditing skills based on the ISO 31000 international risk management framework.",

  detail:
    "The ISO 31000 Internal Auditor Training equips professionals with the knowledge and practical skills required to understand, assess, and audit organizational risk management processes based on ISO 31000 principles and guidelines. The course focuses on risk identification, risk analysis, risk evaluation, risk treatment, monitoring, communication, and internal audit practices.",

  duration: "16 Hours",

  level: "Intermediate",

  modules: [
    "Introduction to ISO 31000",
    "Risk Management Principles",
    "Risk Management Framework",
    "Leadership & Governance",
    "Establishing the Risk Context",
    "Risk Identification",
    "Risk Analysis",
    "Risk Evaluation",
    "Risk Treatment",
    "Risk Communication & Consultation",
    "Monitoring & Review",
    "Recording & Reporting",
    "Continual Improvement",
    "Practical Risk Assessment Workshop",
    "Internal Risk Management Audit",
  ],

  audience: [
    "Risk Managers",
    "Project Managers",
    "Business Managers",
    "Compliance Officers",
    "Quality Professionals",
    "Internal Auditors",
    "Business Continuity Professionals",
    "Anyone responsible for managing organizational risks",
  ],

  overviewTitle: "About ISO 31000 Internal Auditor Training",

  overview: `
ISO 31000:2018 is an internationally recognized guideline for risk management that helps organizations establish a structured approach to identifying, assessing, treating, monitoring, and reviewing risks.

The ISO 31000 Internal Auditor Training provides participants with practical knowledge of risk management principles and internal auditing techniques. The programme helps professionals understand how risk management processes are established, implemented, monitored, evaluated, and continually improved within an organization.

Hawksberg International provides professional ISO 31000 Risk Management training designed to help managers, auditors, compliance professionals, and risk practitioners strengthen organizational resilience and improve risk-based decision-making.
`,

  whyTake:
    "Organizations need effective risk management practices to identify potential threats and opportunities, support informed decision-making, protect organizational assets, and improve business resilience. This training helps participants understand how to evaluate risk management practices and conduct structured internal reviews based on ISO 31000 principles.",

  courseCoversTitle: "Course Content",

  courseCovers: [
    "Understanding ISO 31000:2018 and its purpose.",
    "Principles of effective risk management.",
    "Risk management framework and organizational governance.",
    "Establishing the context for risk management.",
    "Risk identification methods and techniques.",
    "Risk analysis and assessment.",
    "Risk evaluation and prioritization.",
    "Risk treatment and response planning.",
    "Risk communication and consultation.",
    "Monitoring and review of risks.",
    "Recording and reporting risk information.",
    "Continual improvement of risk management processes.",
    "Internal auditing of risk management practices.",
    "Practical risk assessment and audit workshop.",
  ],

  benefitsTitle: "Benefits of ISO 31000 Internal Auditor Training",

  benefits: [
    "Develop a structured understanding of ISO 31000 risk management principles.",
    "Improve risk identification and assessment capabilities.",
    "Develop practical internal auditing skills.",
    "Support informed and risk-based decision-making.",
    "Identify opportunities and threats affecting organizational objectives.",
    "Strengthen organizational governance and resilience.",
    "Improve risk communication and reporting.",
    "Support continual improvement of organizational risk management practices.",
  ],

  faqTitle:
    "ISO 31000 Internal Auditor Training — Frequently Asked Questions",

  faq: [
    {
      question: "What is ISO 31000?",
      answer:
        "ISO 31000 is an internationally recognized guideline that provides principles, a framework, and a process for managing organizational risks.",
    },

    {
      question: "Is ISO 31000 a certifiable standard?",
      answer:
        "ISO 31000 provides guidelines rather than requirements and is therefore not intended for third-party certification. It is primarily used to establish and improve risk management practices.",
    },

    {
      question: "Who should attend ISO 31000 Internal Auditor Training?",
      answer:
        "The course is suitable for risk managers, project managers, business managers, compliance officers, quality professionals, internal auditors, business continuity professionals, and anyone responsible for managing organizational risks.",
    },

    {
      question: "What does the training cover?",
      answer:
        "The training covers ISO 31000 principles, risk management framework, risk identification, analysis, evaluation, treatment, communication, monitoring, reporting, continual improvement, and practical internal risk management auditing.",
    },

    {
      question: "Is prior risk management experience required?",
      answer:
        "Prior knowledge of risk management or management system concepts can be beneficial, but the programme is designed to provide participants with the fundamental concepts and practical techniques required to understand and evaluate risk management processes.",
    },
  ],
};

export const metadata = { title: "ISO 31000 Internal Auditor Training", description: "ISO 31000 internal auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-31000-internal-auditor" } };
export default function ISO31000InternalAuditor() {
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
          backgroundImage: `url(${iso31000Img.src})`,
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


            {/* Why Take */}
            <div
              className="
                mt-10
                rounded-[14px]
                border
                border-[#d9dee5]
                bg-white
                p-7
                md:p-8
              "
            >

              <h3
                className="
                  font-display
                  text-2xl
                  font-normal
                  leading-tight
                  text-foreground
                  md:text-3xl
                "
              >
                Why Take ISO 31000 Internal Auditor Training?
              </h3>

              <div className="mt-4 h-[3px] w-[70px] bg-gold" />

              <p
                className="
                  mt-6
                  text-[16px]
                  leading-[2]
                  text-slate-700
                  md:text-[17px]
                "
              >
                {training.whyTake}
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
                  COURSE DETAILS
              =================================================== */}
              <section>

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
                    grid
                    gap-4
                    sm:grid-cols-2
                  "
                >

                  <div
                    className="
                      rounded-[14px]
                      border
                      border-[#d9dee5]
                      bg-white
                      p-6
                    "
                  >
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-muted-foreground
                      "
                    >
                      Duration
                    </p>

                    <p
                      className="
                        mt-2
                        font-display
                        text-3xl
                        text-foreground
                      "
                    >
                      {training.duration}
                    </p>
                  </div>


                  <div
                    className="
                      rounded-[14px]
                      border
                      border-[#d9dee5]
                      bg-white
                      p-6
                    "
                  >
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-muted-foreground
                      "
                    >
                      Level
                    </p>

                    <p
                      className="
                        mt-2
                        font-display
                        text-3xl
                        text-foreground
                      "
                    >
                      {training.level}
                    </p>
                  </div>

                </div>

              </section>


              {/* ===================================================
                  MODULES
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

                <div
                  className="
                    mt-9
                    grid
                    gap-x-4
                    gap-y-4
                    sm:grid-cols-2
                  "
                >

                  {training.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="
                        flex
                        min-h-[100px]
                        items-start
                        gap-4
                        rounded-[14px]
                        border
                        border-[#d9dee5]
                        bg-white
                        p-5
                      "
                    >

                      <span
                        className="
                          mt-1
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
                        {benefit}
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