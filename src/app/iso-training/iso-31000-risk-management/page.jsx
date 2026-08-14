import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";
import iso31000Img from "@/assets/isotraining/iso31000.webp";

const training = {
  slug: "iso-31000-risk-management",

  title: "ISO 31000 Risk Management",

  heroImage: iso31000Img,

  short:
    "Develop practical risk management skills using the ISO 31000 international framework and strengthen organizational decision-making.",

  duration: "16 Hours",
  level: "Intermediate",

  whyTakeTitle: "About ISO 31000 Certification",

  overview: `
ISO 31000:2018 is the internationally recognized guideline for risk management that helps organizations establish a structured approach to identifying, assessing, treating, monitoring, and reviewing risks. The framework supports organizations of all sizes and industries in protecting assets, improving decision-making, enhancing business resilience, and achieving strategic objectives through effective risk management.

Hawksberg International provides expert guidance and professional training to help organizations implement ISO 31000 principles effectively. Our experienced consultants support businesses in integrating risk management practices into daily operations, strengthening governance, and building a proactive risk-aware culture.
`,

  courseCoversTitle: "Is ISO 31000 Certification Possible?",

  courseCovers: `
ISO 31000 provides guidelines, not requirements, and is therefore not intended for certification purposes. Hence, Third party ISO 31000 Certification is not possible. ISO 31000 Risk management is used only for implementation purposes.
`,

  benefitsTitle: "ISO 31000 Risk Mgt Training Courses",

  benefits: `
Hawksberg International offers comprehensive ISO 31000 Risk Management training for professionals who want to develop practical knowledge of risk management principles and their application across different industries. The course is ideal for managers, auditors, compliance professionals, and risk practitioners seeking to strengthen organizational resilience. While prior knowledge of risk assessment methods or management systems is beneficial, it is not mandatory.
`,

  trainingMethodsTitle: "ISO 31000 Certification Course",

  trainingMethods: `
Hawksberg International offers comprehensive ISO 31000 Risk Management training covering the principles, framework, and practical application of ISO 31000:2018. Participants gain a thorough understanding of risk management processes, risk-based decision-making, and internal auditing practices through instructor-led sessions, practical exercises, real-world case studies, and interactive discussions. The programme is suitable for managers, auditors, and professionals responsible for organizational risk management.
`,

  assessmentTitle: "Implementation Approach of ISO 31000 Risk Management",

  assessmentContent: `
Be aware of your organization’s key objectives – this will help you understand the goals and scope of your risk management system.

Assess your current governance structure – This will ensure you allocate the right people and procedures for your organization to properly deal with risk.

Define your level of commitment – How much time and money will you need to take responsibility for your risk management system?
`,

  aboutUpdateTitle: "How Your Organization Uses ISO 31000 Risk Management",

  aboutUpdate: `
ISO 31000 provides a comprehensive approach that helps organizations define, assess, manage and communicate their risks. It also encourages companies to focus on opportunities as well as threats.

ISO 31000 sets up a risk management system that is aligned with ISO’s fundamental principles of risk management, which emphasizes the following five steps in this process:

• Risk identification – understanding the opportunities and threats.

• Risk assessment – identifying the likelihood and impact of these opportunities or threats.

• Risk response planning – developing policies for each type of risk identified.

• Implementation.

• Monitoring and review.

ISO 31000 is also an important part of ISO’s integrated management approach, which helps organizations create a sound environmental, social, and governance structure. ISO 31000 can be implemented in conjunction with ISO’s other management standards, which can help create better leadership and decision-making processes.
`,

  updateBenefitsTitle: "ISO 31000 – Risk Identification",

  updateBenefits: `
Risk identification is the process of determining risks that could potentially prevent a program, enterprise, or investment from achieving its objectives. It includes documenting and communicating the concern.

Examples include:

• Legal risks

• Environmental risks

• Market risks

• Regulatory risks

• IT security threats such as malware and ransomware

• Accidents

• Natural disasters

• Other potentially harmful events that could disrupt business operations

The process to identify the risk:

• SWOT Analysis (Strengths, Weaknesses, Opportunities and Threats)

• ISO 31000 Policy

• ISO 31000 Business Case

• ISO 31000 System Documentation

• Implement ISO 31000

• ISO 31000 Policy Audit

• ISO 31000 Business Case Audit

• ISO 31000 Internal Audit

• ISO 31000 System Documentation Audit
`,

  faqTitle: "What are the Benefits of ISO 31000 Risk Management?",

  faq: [
    {
      question: "Benefits of ISO 31000 Risk Management",
      answer:
        "Implementing ISO 31000 helps organizations identify both opportunities and threats, enabling more informed and effective decision-making, better allocation of resources, stronger governance, improved organizational performance, and enhanced leadership through a structured risk management framework.",
    },
  ],

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
};

export const metadata = { title: "ISO 31000 Risk Management Training", description: "ISO 31000 risk management training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-31000-risk-management" } };
export default function ISO31000RiskManagement() {
  return (
    <Layout>

      {/* =========================================================
          HERO SECTION
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
          backgroundImage: `url(${training.heroImage.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />

        <div className="container-x relative flex h-full items-center justify-center">
          <div className="mx-auto w-full max-w-5xl text-center">

            <p className="text-xs uppercase tracking-[0.4em] text-gold">
              ISO Training Programs
            </p>

            <h1
              className="
                mt-5
                font-display
                text-4xl
                font-semibold
                uppercase
                tracking-wide
                sm:text-5xl
                md:text-6xl
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {training.title}
            </h1>

            <div className="mx-auto mt-6 gold-divider" />

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/90 md:text-lg">
              {training.short}
            </p>

          </div>
        </div>
      </section>


      {/* =========================================================
          COURSE OVERVIEW
      ========================================================= */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">

            <h2 className="font-display text-3xl uppercase tracking-wide text-foreground md:text-4xl">
              Course Overview
            </h2>

            <div className="mt-4 gold-divider" />

            <p className="mt-8 whitespace-pre-line text-justify text-[15px] leading-9 text-muted-foreground md:text-base">
              {training.overview}
            </p>

          </div>
        </div>
      </section>


      {/* =========================================================
          MAIN CONTENT + ENQUIRY SIDEBAR
      ========================================================= */}
      <section className="bg-muted/40 py-20 md:py-24">

        <div className="container-x">

          <div
            className="
              mx-auto
              grid
              max-w-7xl
              grid-cols-1
              items-start
              gap-12
              lg:grid-cols-[minmax(0,1fr)_430px]
              lg:gap-14
            "
          >

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}
            <div className="min-w-0 space-y-14">

              {/* COURSE DETAILS */}
              <div>

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Course Details
                </h2>

                <div className="mt-3 gold-divider" />

                <div className="mt-7 grid gap-5 sm:grid-cols-2">

                  <div className="rounded-xl border border-border bg-card p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Duration
                    </p>

                    <p className="mt-2 text-xl font-semibold text-foreground">
                      {training.duration}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Level
                    </p>

                    <p className="mt-2 text-xl font-semibold text-foreground">
                      {training.level}
                    </p>
                  </div>

                </div>
              </div>


              {/* ABOUT ISO 31000 */}
              <div>

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.whyTakeTitle}
                </h2>

                <div className="mt-3 gold-divider" />

                <p className="mt-8 whitespace-pre-line text-justify text-[15px] leading-9 text-muted-foreground md:text-base">
                  {training.overview}
                </p>

              </div>


              {/* CERTIFICATION */}
              <div>

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.courseCoversTitle}
                </h2>

                <div className="mt-3 gold-divider" />

                <p className="mt-8 whitespace-pre-line text-justify text-[15px] leading-9 text-muted-foreground md:text-base">
                  {training.courseCovers}
                </p>

              </div>


              {/* TRAINING COURSES */}
              <div>

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.benefitsTitle}
                </h2>

                <div className="mt-3 gold-divider" />

                <p className="mt-8 whitespace-pre-line text-justify text-[15px] leading-9 text-muted-foreground md:text-base">
                  {training.benefits}
                </p>

              </div>


              {/* TRAINING METHODS */}
              <div>

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.trainingMethodsTitle}
                </h2>

                <div className="mt-3 gold-divider" />

                <p className="mt-8 whitespace-pre-line text-justify text-[15px] leading-9 text-muted-foreground md:text-base">
                  {training.trainingMethods}
                </p>

              </div>


              {/* IMPLEMENTATION APPROACH */}
              <div>

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.assessmentTitle}
                </h2>

                <div className="mt-3 gold-divider" />

                <div className="mt-8 space-y-5">

                  {training.assessmentContent
                    .trim()
                    .split("\n\n")
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                      >

                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 font-display text-lg text-gold">
                          {index + 1}
                        </span>

                        <p className="whitespace-pre-line text-[15px] leading-8 text-slate-700">
                          {item}
                        </p>

                      </div>
                    ))}

                </div>
              </div>


              {/* HOW ORGANIZATION USES ISO 31000 */}
              <div>

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.aboutUpdateTitle}
                </h2>

                <div className="mt-3 gold-divider" />

                <div className="mt-8 whitespace-pre-line text-justify text-[15px] leading-9 text-muted-foreground md:text-base">
                  {training.aboutUpdate}
                </div>

              </div>


              {/* RISK IDENTIFICATION */}
              <div>

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.updateBenefitsTitle}
                </h2>

                <div className="mt-3 gold-divider" />

                <div className="mt-8 whitespace-pre-line text-justify text-[15px] leading-9 text-muted-foreground md:text-base">
                  {training.updateBenefits}
                </div>

              </div>


              {/* =====================================================
                  MODULES COVERED
              ===================================================== */}
              <div>

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Modules Covered
                </h2>

                <div className="mt-3 gold-divider" />

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
              </div>


              {/* WHO SHOULD ATTEND */}
              <div>

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Who Should Attend
                </h2>

                <div className="mt-3 gold-divider" />

                <ul className="mt-8 grid gap-3 md:grid-cols-2">

                  {training.audience.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                    >

                      <span className="mt-1 text-lg text-gold">
                        ✓
                      </span>

                      <span className="text-[15px] leading-7 text-slate-700">
                        {item}
                      </span>

                    </li>
                  ))}

                </ul>
              </div>


              {/* FAQ */}
              <div>

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.faqTitle}
                </h2>

                <div className="mt-3 gold-divider" />

                <div className="mt-8 space-y-4">

                  {training.faq.map((item, index) => (
                    <details
                      key={index}
                      className="group rounded-xl border border-border bg-card p-5"
                    >

                      <summary className="cursor-pointer list-none pr-8 font-semibold text-foreground">

                        <div className="flex items-center justify-between gap-4">

                          <span>
                            {item.question}
                          </span>

                          <span className="text-xl text-gold transition-transform group-open:rotate-45">
                            +
                          </span>

                        </div>

                      </summary>

                      <p className="mt-5 border-t border-border pt-5 text-[15px] leading-8 text-muted-foreground">
                        {item.answer}
                      </p>

                    </details>
                  ))}

                </div>

              </div>

            </div>


            {/* =====================================================
                RIGHT ENQUIRY FORM
            ===================================================== */}
          <aside
  className="
    w-full
    lg:sticky
    lg:top-8
    lg:w-[380px]
    lg:max-w-[380px]
    lg:self-start
    lg:justify-self-end
  "
>
  <div className="w-full overflow-hidden rounded-[22px]">
    <EnquiryForm />
  </div>
</aside>

          </div>

        </div>

      </section>

    </Layout>
  );
}