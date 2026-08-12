import EnquiryForm from "@/components/EnquiryForm";

import iso45001Img from "@/assets/45001.webp";
import Layout from "@/components/Layout";
export default function ISO45001LeadAuditor() {
  const modules = [
    "OH&S Management System Fundamentals",
    "ISO 45001 Requirements",
    "Risk & Hazard Identification",
    "Audit Planning",
    "Audit Execution",
    "Audit Reporting",
    "Corrective Actions",
    "Certification Process",
  ];

  const audience = [
    "Safety Officers",
    "Lead Auditors",
    "Internal Auditors",
    "HSE Managers",
    "Health & Safety Professionals",
    "ISO Consultants",
  ];

  return (
     <Layout>
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-24 text-brand-foreground"
        style={{
          backgroundImage: `url(${iso45001Img})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 grid-pattern opacity-15" />

        <div className="container-x relative text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            ISO Training Programs
          </p>

          <h1
            className="mt-4 text-5xl uppercase tracking-wide md:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            ISO 45001 Lead Auditor Training
          </h1>

          <div className="mx-auto mt-5 gold-divider" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
            Become a certified ISO 45001 Lead Auditor and develop the
            expertise to conduct first-, second-, and third-party
            Occupational Health & Safety Management System (OHSMS) audits
            based on ISO 45001.
          </p>
        </div>
      </section>

      {/* =========================================================
          COURSE INTRO
      ========================================================= */}
      <section className="bg-background py-20">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-3">

              <div className="md:col-span-2">
                <p className="text-lg leading-9 text-slate-700">
                  The ISO 45001 Lead Auditor Training equips participants
                  with the knowledge and practical skills required to plan,
                  conduct, report, and follow up Occupational Health &
                  Safety Management System (OHSMS) audits.
                </p>

                <p className="mt-6 text-[15px] leading-9 text-muted-foreground text-justify">
                  The course covers ISO 45001 requirements, auditing
                  principles, audit planning, audit execution, reporting
                  techniques, and the responsibilities of lead auditors.
                  Delivered through lectures, workshops, case studies, and
                  group exercises, the program prepares professionals to
                  confidently lead ISO 45001 audits and improve workplace
                  health and safety performance.
                </p>
              </div>

              {/* Course Information */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Duration
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    40 Hours
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Level
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    Advanced
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-muted/40 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-3">

          {/* LEFT CONTENT */}
          <div className="space-y-14 lg:col-span-2">

            {/* ---------------------------------------------------
                OVERVIEW
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Course Overview
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 text-[15px] leading-9 text-slate-700 text-justify">
                The ISO 45001 Lead Auditor Course is designed to equip
                participants with the essential skills and knowledge needed
                to conduct first-, second-, and third-party audits of
                Occupational Health and Safety Management Systems (OHSMS)
                against ISO 45001.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-slate-700 text-justify">
                This comprehensive program covers the intricacies of
                ISO 45001 requirements, principles, and auditing practices,
                encompassing the role of auditors, audit planning, and
                effective audit execution.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-slate-700 text-justify">
                Hawksberg International provides professional ISO 45001
                Lead Auditor Training delivered by experienced industry
                experts. The course combines lectures, workshops, case
                studies, and group exercises to prepare professionals to
                confidently lead ISO 45001 audits.
              </p>
            </div>

            {/* ---------------------------------------------------
                WHY ENROLL
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Why Enroll in ISO 45001 Lead Auditor Training?
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 text-[15px] leading-9 text-slate-700 text-justify">
                ISO 45001 Lead Auditor Training helps professionals develop
                the knowledge and practical skills required to evaluate
                Occupational Health and Safety Management Systems and
                conduct effective audits against ISO 45001 requirements.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-slate-700 text-justify">
                The training strengthens auditing capabilities, improves
                understanding of workplace health and safety requirements,
                and prepares participants to plan, conduct, report, and
                follow up OHSMS audits.
              </p>
            </div>

            {/* ---------------------------------------------------
                MODULES
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Modules Covered
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {modules.map((module, index) => (
                  <div
                    key={module}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <span className="shrink-0 font-display text-2xl text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pt-1 text-[15px] leading-7 text-slate-700">
                      {module}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------------------------------------------
                WHO SHOULD ATTEND
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Who Should Attend?
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 space-y-5">
                {audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[15px] leading-8 text-slate-700"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---------------------------------------------------
                COURSE COVERS
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                What the ISO 45001 Lead Auditor Course Covers
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 space-y-5">
                {[
                  "OH&S Management System fundamentals and ISO 45001 requirements.",
                  "Risk and hazard identification within an Occupational Health & Safety Management System.",
                  "Audit principles and responsibilities of auditors.",
                  "Audit planning and preparation.",
                  "Audit execution and objective evidence collection.",
                  "Audit reporting and documentation.",
                  "Identification and management of nonconformities.",
                  "Corrective actions and follow-up activities.",
                  "Certification process and audit responsibilities.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <p className="text-[15px] leading-8 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------------------------------------------
                BENEFITS
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Benefits of the Course
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 space-y-5">
                {[
                  "Develop a strong understanding of ISO 45001 Occupational Health & Safety Management System requirements.",
                  "Gain practical skills required to conduct first-, second-, and third-party OHSMS audits.",
                  "Understand risk and hazard identification and its role in workplace safety.",
                  "Develop confidence in audit planning and audit execution.",
                  "Learn effective audit reporting and corrective action practices.",
                  "Build the skills required to lead Occupational Health & Safety Management System audit teams.",
                  "Strengthen professional credibility in occupational health and safety auditing.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <p className="text-[15px] leading-8 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------------------------------------------
                PREREQUISITES
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Prerequisites
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-lg text-gold">
                    ✓
                  </span>

                  <p className="text-[15px] leading-8 text-slate-700">
                    Basic knowledge of Occupational Health & Safety
                    Management Systems is recommended.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-lg text-gold">
                    ✓
                  </span>

                  <p className="text-[15px] leading-8 text-slate-700">
                    Understanding of ISO 45001 fundamentals is recommended.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* =====================================================
              ENQUIRY FORM
          ===================================================== */}
          <aside className="self-start lg:sticky lg:top-28">
            <EnquiryForm compact />
          </aside>

        </div>
      </section>
    </>
     </Layout>
  );
}