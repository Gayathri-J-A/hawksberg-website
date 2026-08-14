import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iso14001Img from "@/assets/services/iso-14001.webp";

const training = {
  title: "ISO 14001 Internal Auditor Training",

  intro:
    "Become a certified ISO 14001 Internal Auditor and gain the skills to perform effective first-party Environmental Management System (EMS) audits based on ISO 14001 and ISO 19011 guidelines.",

  detail:
    "The ISO 14001 Internal Auditor Training equips participants with the knowledge and practical skills required to plan, conduct, and manage internal Environmental Management System (EMS) audits. The course covers ISO 14001 requirements, ISO 19011 auditing principles, environmental aspects and impacts, audit planning, execution, reporting, and continual improvement. Through practical exercises and real-world audit scenarios, participants gain the confidence to evaluate EMS performance, identify nonconformities, and prepare organizations for external certification.",

  duration: "16 Hours",
  level: "Intermediate",

  modules: [
    "Introduction to Environmental Management Systems (EMS)",
    "ISO 14001:2026 Requirements (Clauses 4–10)",
    "Plan-Do-Check-Act (PDCA) Cycle",
    "Environmental Aspects & Impacts",
    "Compliance Obligations",
    "Operational Planning & Control",
    "Lifecycle Perspective",
    "Emergency Preparedness & Response",
    "Performance Evaluation",
    "Monitoring & Measurement",
    "Evaluation of Compliance",
    "ISO 19011 Internal Audit Principles",
    "Audit Planning",
    "Audit Checklists",
    "Audit Execution",
    "Identifying & Recording Nonconformities",
    "Corrective Actions & Audit Follow-Up",
    "Audit Reporting",
  ],

  audience: [
    "Environmental Managers",
    "EMS Coordinators",
    "Internal Auditors",
    "Environmental Compliance Officers",
    "HSE Professionals",
    "ISO 14001 Implementation Teams",
  ],

  overviewTitle: "About ISO 14001 Internal Auditor Training",

  overview: `
ISO 14001 Internal Auditor Training equips professionals with the knowledge and practical skills required to plan, conduct, report, and follow up internal (first-party) Environmental Management System (EMS) audits in accordance with ISO 14001:2026 and ISO 19011 guidelines. The course helps organizations evaluate EMS performance, identify nonconformities, drive continual improvement, and prepare for external certification audits.

Hawksberg International provides professional ISO 14001 Internal Auditor Training delivered by experienced industry experts. The programme combines instructor-led sessions, practical audit exercises, real-world environmental case studies, and interactive discussions to help participants develop the confidence to effectively assess Environmental Management Systems and contribute to sustainable environmental performance.

Hawksberg International follows a practical, hands-on training approach that enables participants to confidently evaluate Environmental Management Systems, identify opportunities for continual improvement, and apply effective internal auditing techniques in real-world environmental management scenarios. The course also introduces participants to the latest ISO 14001:2026 updates, ensuring their auditing knowledge and skills remain current and aligned with industry best practices.
`,

  courseCoversTitle: "Course Structure and Topics Covered",

  courseCovers: [
    "The Environmental Management System (EMS) framework and the Plan-Do-Check-Act (PDCA) cycle.",
    "Interpreting ISO 14001:2026 requirements for auditing (Clauses 4–10).",
    "Environmental aspects and impacts, and compliance obligations (Clause 6).",
    "Operational planning and control with a lifecycle perspective, and emergency preparedness and response (Clause 8).",
    "Performance evaluation — monitoring, measurement, and evaluation of compliance (Clause 9).",
    "Audit methodologies, identification and recording of non-conformities, and follow-up actions for effective closure.",
  ],

  benefitsTitle: "Why Internal Auditing is Important in ISO 14001",

  benefits: [
    "Internal auditing plays a critical role in ensuring an Environmental Management System remains effective and compliant.",
    "Helps organizations build internal capability to assess environmental performance and identify opportunities for improvement.",
    "Regular audits detect issues early, reduce environmental risks, and maintain compliance with ISO requirements.",
    "Supports performance evaluation and strategic decision-making, not just compliance verification.",
  ],

  faqTitle:
    "ISO 14001 Internal Auditor Training in India — Frequently Asked Questions",

  faq: [
    {
      question: "What is the ISO 14001 Internal Auditor course?",
      answer:
        "A training course that equips participants to plan and conduct internal (first-party) audits of an ISO 14001 Environmental Management System (EMS) within their own organisation, in accordance with ISO 19011.",
    },
    {
      question: "What does the course cover?",
      answer:
        "The course covers ISO 14001:2026 requirements, identifying and evaluating environmental aspects and impacts, the lifecycle perspective, compliance obligations, and how to plan, conduct, report, and follow up an internal EMS audit.",
    },
    {
      question: "Does this course cover the ISO 14001:2026 version?",
      answer:
        "Yes. The course is aligned with ISO 14001:2026, the current edition of the standard.",
    },
  ],
};

export const metadata = { title: "ISO 14001 Internal Auditor Training", description: "ISO 14001 internal auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-14001-internal-auditor" } };
export default function ISO14001InternalAuditor() {
  return (
    <Layout>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="
          relative
          flex
          h-[360px]
          items-center
          overflow-hidden
          bg-cover
          bg-center
          text-white
        "
        style={{
          backgroundImage: `url(${iso14001Img.src})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Subtle grid */}
        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />

        {/* Hero content */}
        <div className="container-x relative z-10">
          <div className="mx-auto max-w-7xl text-center">

            <p className="text-xs uppercase tracking-[0.42em] text-gold sm:text-sm">
              ISO TRAINING PROGRAMS
            </p>

            <h1
              className="
                mt-5
                font-display
                text-4xl
                uppercase
                leading-[0.95]
                tracking-wide
                sm:text-5xl
                md:text-6xl
                lg:text-[64px]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {training.title}
            </h1>

            <div className="mx-auto mt-7 gold-divider" />

          </div>
        </div>
      </section>


      {/* =========================================================
          COURSE OVERVIEW
          
          IMPORTANT:
          This is intentionally OUTSIDE the two-column layout.
          Reference screenshot shows overview as full-width.
      ========================================================= */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-x">

          <div className="max-w-none">

            <h2 className="font-display text-3xl text-foreground md:text-4xl lg:text-[46px]">
              {training.overviewTitle}
            </h2>

            <div className="mt-4 gold-divider" />

            <div
              className="
                mt-10
                max-w-none
                whitespace-pre-line
                text-justify
                text-[15px]
                leading-9
                text-muted-foreground
                md:text-base
                md:leading-9
              "
            >
              {training.overview}
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          MAIN CONTENT + ENQUIRY FORM
          
          THIS STARTS FROM MODULES.
          This is the exact structure visible in the reference.
      ========================================================= */}
      <section className="bg-[#f7f6f2] py-14 md:py-16">
        <div className="container-x">

          <div
            className="
              grid
              items-start
              gap-10
              lg:grid-cols-[minmax(0,1fr)_330px]
              lg:gap-12
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
  <h2 className="font-display text-3xl text-foreground md:text-4xl">
    Modules Covered
  </h2>

  <div className="mt-4 gold-divider" />

  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
    {training.modules.map((module, index) => (
      <div
        key={module}
        className="
          flex
          h-[90px]
          min-h-[90px]
          max-h-[90px]
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
            text-[15px]
            font-normal
            leading-[1.45]
            text-[#344766]
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

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Course Details
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-5">

                  <p className="text-lg text-foreground">
                    <strong>Duration :</strong>{" "}
                    {training.duration}
                  </p>

                  <p className="text-lg text-foreground">
                    <strong>Level :</strong>{" "}
                    {training.level}
                  </p>

                </div>

              </section>


              {/* ===================================================
                  COURSE STRUCTURE
              =================================================== */}
              <section className="mt-16">

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.courseCoversTitle}
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-6">

                  {training.courseCovers.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-5"
                    >
                      <span className="mt-1 shrink-0 text-xl text-gold">
                        ✓
                      </span>

                      <p className="text-[15px] leading-8 text-[#344766] md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>

              </section>


              {/* ===================================================
                  WHY INTERNAL AUDITING
              =================================================== */}
              <section className="mt-16">

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.benefitsTitle}
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-6">

                  {training.benefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-5"
                    >
                      <span className="mt-1 shrink-0 text-xl text-gold">
                        ✓
                      </span>

                      <p className="text-[15px] leading-8 text-[#344766] md:text-base">
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

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Who Should Attend
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-6">

                  {training.audience.map((person) => (
                    <div
                      key={person}
                      className="flex items-start gap-5"
                    >
                      <span className="mt-1 shrink-0 text-xl text-gold">
                        ✓
                      </span>

                      <p className="text-[15px] leading-8 text-[#344766] md:text-base">
                        {person}
                      </p>
                    </div>
                  ))}

                </div>

              </section>


              {/* ===================================================
                  FAQ
              =================================================== */}
              <section className="mt-16">

                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.faqTitle}
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-5">

                  {training.faq.map((item) => (
                    <details
                      key={item.question}
                      className="
                        group
                        rounded-2xl
                        border
                        border-[#d9dde3]
                        bg-transparent
                        px-6
                        py-6
                      "
                    >

                      <summary
                        className="
                          flex
                          cursor-pointer
                          list-none
                          items-center
                          justify-between
                          gap-6
                          text-[17px]
                          font-semibold
                          text-slate-900
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
                            text-slate-900
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
                          border-[#d9dde3]
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
                RIGHT ENQUIRY FORM

                Starts beside MODULES, not OVERVIEW.
                Sticky while scrolling.
            ===================================================== */}
            <aside
              className="
                w-full
                lg:sticky
                lg:top-28
                lg:self-start
              "
            >
              <EnquiryForm />
            </aside>

          </div>

        </div>
      </section>

    </Layout>
  );
}