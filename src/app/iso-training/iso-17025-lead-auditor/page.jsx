import EnquiryForm from "@/components/EnquiryForm";

import iso17025Img from "@/assets/isotraining/iso17025.webp";
import Layout from "@/components/Layout";
export const metadata = { title: "ISO 17025 Lead Auditor Training", description: "ISO 17025 lead auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-17025-lead-auditor" } };
export default function ISO17025LeadAuditor() {
  const modules = [
    "Introduction to ISO/IEC 17025:2017",
    "Laboratory Quality Management Systems",
    "General Requirements: Impartiality & Confidentiality",
    "Structural Requirements",
    "Resource Requirements",
    "Personnel & Competency",
    "Equipment & Metrological Traceability",
    "Process Requirements",
    "Sampling & Method Validation",
    "Measurement Uncertainty",
    "Reporting Test & Calibration Results",
    "Management System Requirements",
    "Risk-Based Thinking & Corrective Actions",
    "Internal Audits & Management Reviews",
    "ISO 19011 Audit Principles",
    "Audit Planning & Preparation",
    "Evidence Collection & Audit Reporting",
    "Audit Follow-Up & Certification",
  ];

  const audience = [
    "Laboratory Managers",
    "Quality Assurance Managers",
    "Testing Laboratory Professionals",
    "Calibration Laboratory Professionals",
    "Lead Auditors",
    "Internal Auditors",
    "Laboratory Consultants",
    "Research Institution Professionals",
  ];

  const courseCovers = [
    "The structure of ISO/IEC 17025:2017 — competence, impartiality, and consistent operation of laboratories.",
    "General requirements — impartiality and confidentiality.",
    "Structural requirements — the organization and management structure of the laboratory.",
    "Resource requirements — personnel, facilities and environmental conditions, equipment, metrological traceability, and externally provided products and services.",
    "Process requirements — review of requests, tenders and contracts; selection, verification and validation of methods; sampling; handling of test and calibration items; technical records; evaluation of measurement uncertainty; ensuring the validity of results; reporting results; complaints; nonconforming work; and control of data and information management.",
    "Management system requirements — Options A and B, documentation and control of records, actions to address risks and opportunities, improvement, corrective action, and internal audits and management reviews.",
    "Audit principles and the full audit lifecycle: planning, conducting, gathering evidence, grading nonconformities, reporting, and follow-up.",
  ];

  const benefits = [
    "Learn from experienced and certified Lead Auditors with practical laboratory auditing expertise.",
    "Participate in interactive workshops, discussions, and hands-on audit activities.",
    "Apply auditing techniques through realistic laboratory case studies and simulations.",
    "Earn a globally recognized ISO/IEC 17025 Lead Auditor credential to enhance your professional career.",
  ];

  const trainingMethods = [
    "In-House Training – Customized training delivered at your organization based on laboratory operations and industry requirements.",
    "Open Classroom Training – Instructor-led classroom sessions with professionals from testing, calibration, and research laboratories.",
    "Tutor-Led Virtual Training – Live online sessions featuring interactive discussions, breakout activities, and practical audit exercises.",
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
          backgroundImage: `url(${iso17025Img.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 grid-pattern opacity-15" />

        <div className="container-x relative text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            ISO Training Programs
          </p>

          <h1
            className="mt-4 font-display text-5xl uppercase tracking-wide md:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            ISO 17025 Lead Auditor Training
          </h1>

          <div className="mx-auto mt-5 gold-divider" />
        </div>
      </section>

      {/* =========================================================
          COURSE OVERVIEW
      ========================================================= */}
      <section className="bg-background py-20">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl uppercase tracking-wide text-foreground md:text-4xl">
              Course Overview
            </h2>

            <div className="mt-4 gold-divider" />

            <div className="mt-8 max-w-5xl">
              <p className="text-[15px] leading-9 text-muted-foreground text-justify">
                ISO/IEC 17025 Lead Auditor Training equips professionals with
                the knowledge and practical skills required to perform first-,
                second-, and third-party audits of Testing and Calibration
                Laboratories. The course covers ISO/IEC 17025:2017
                requirements, ISO 19011 auditing principles, laboratory quality
                management, audit planning, execution, reporting, and
                continual improvement.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-muted-foreground text-justify">
                Through practical case studies, simulations, and interactive
                sessions, participants develop the confidence to lead
                laboratory audits and ensure compliance with international
                laboratory standards.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-muted-foreground text-justify">
                Hawksberg International provides professional ISO/IEC 17025
                Lead Auditor Training delivered by experienced industry
                experts. The course combines instructor-led sessions,
                practical laboratory audit exercises, real-world case studies,
                and interactive discussions to help participants develop the
                confidence to evaluate laboratory competence, ensure compliance
                with ISO/IEC 17025 requirements, and successfully lead
                laboratory audit teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT + ENQUIRY
      ========================================================= */}
      <section className="bg-muted/40 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-3">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="space-y-10 lg:col-span-2">

            {/* Modules */}
            <div>
              <h2 className="font-display text-3xl">
                Modules Covered
              </h2>

              <div className="mt-3 gold-divider" />

              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {modules.map((module, index) => (
                  <li
                    key={module}
                    className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <span className="font-display text-2xl text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pt-1 text-[14px] leading-6 text-slate-700">
                      {module}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Course Details */}
            <div>
              <h2 className="font-display text-3xl">
                Course Details
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-6 space-y-3 text-slate-700">
                <p>
                  <strong>Duration :</strong> 40 Hours
                </p>

                <p>
                  <strong>Level :</strong> Advanced
                </p>
              </div>
            </div>

            {/* About the Course */}
            <div>
              <h2 className="font-display text-3xl">
                About the Course
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 max-w-4xl text-[15px] leading-9 text-slate-700 text-justify">
                ISO/IEC 17025 Lead Auditor Training equips professionals with
                the knowledge and practical skills required to plan, conduct,
                report, and follow up first-, second-, and third-party audits
                of Testing and Calibration Laboratories in accordance with
                ISO/IEC 17025:2017 and ISO 19011 guidelines.
              </p>

              <p className="mt-6 max-w-4xl text-[15px] leading-9 text-slate-700 text-justify">
                Hawksberg International provides professional ISO/IEC 17025
                Lead Auditor Training delivered by experienced industry
                experts. The course combines instructor-led sessions,
                practical laboratory audit exercises, real-world case studies,
                and interactive discussions to help participants develop the
                confidence to evaluate laboratory competence, ensure compliance
                with ISO/IEC 17025 requirements, and successfully lead
                laboratory audit teams.
              </p>
            </div>

            {/* Course Covers */}
            <div>
              <h2 className="font-display text-3xl">
                What the ISO 17025 Lead Auditor Course Covers
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 max-w-4xl space-y-5">
                {courseCovers.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-[15px] leading-8 text-slate-700"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <span className="flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-display text-3xl">
                Benefits of the Course
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 max-w-4xl space-y-5">
                {benefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-[15px] leading-8 text-slate-700"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <span className="flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Should Attend */}
            <div>
              <h2 className="font-display text-3xl">
                Who Should Attend
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 max-w-4xl space-y-5">
                {audience.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-[15px] leading-8 text-slate-700"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <span className="flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training Methods */}
            <div>
              <h2 className="font-display text-3xl">
                Training Methods
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 max-w-4xl space-y-5">
                {trainingMethods.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-[15px] leading-8 text-slate-700"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <span className="flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
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