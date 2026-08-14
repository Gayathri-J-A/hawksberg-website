import EnquiryForm from "@/components/EnquiryForm";

import iso50001Img from "@/assets/services/iso-50001.webp";
import Layout from "@/components/Layout";
export const metadata = { title: "ISO 50001 Lead Auditor Training", description: "ISO 50001 lead auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-50001-lead-auditor" } };
export default function ISO50001LeadAuditor() {
  const modules = [
    "Introduction to ISO 50001:2018",
    "Energy Management System (EnMS)",
    "Annex SL High-Level Structure",
    "Context of the Organization (Clause 4)",
    "Leadership & Energy Policy (Clause 5)",
    "Energy Review & Planning (Clause 6)",
    "Energy Baseline (EnB) & EnPIs",
    "Significant Energy Uses (SEUs)",
    "Support: Resources, Competence & Documentation (Clause 7)",
    "Operational Control & Procurement (Clause 8)",
    "Performance Evaluation & Internal Audits (Clause 9)",
    "Continual Improvement (Clause 10)",
    "ISO 19011 Audit Principles",
    "Audit Planning & Preparation",
    "Evidence Collection & Audit Reporting",
    "Audit Follow-Up & Certification",
  ];

  const audience = [
    "Energy Managers",
    "Sustainability Professionals",
    "Lead Auditors",
    "Internal Auditors",
    "Energy Consultants",
    "Compliance Managers",
    "Government Professionals",
    "Professionals from Energy-Intensive Industries",
  ];

  const courseCovers = [
    "The structure of ISO 50001:2018 (the Annex SL high-level structure) and the Energy Management System (EnMS) framework, based on the Plan-Do-Check-Act (PDCA) cycle.",
    "Context of the organization, interested parties, and the scope of the EnMS (Clause 4).",
    "Leadership, the energy policy, and roles and responsibilities (Clause 5).",
    "Planning — the energy review, Energy Baseline (EnB), Energy Performance Indicators (EnPIs), Significant Energy Uses (SEUs), legal requirements, and energy objectives and targets (Clause 6).",
    "Support — resources, competence, awareness, communication, and documented information (Clause 7).",
    "Operation — operational controls, and design and procurement of energy-using equipment, systems, processes, and energy itself (Clause 8).",
    "Performance evaluation — monitoring, measurement, analysis and evaluation of energy performance and the EnMS, evaluation of compliance, internal audit, and management review (Clause 9).",
    "Improvement — nonconformity, corrective action, and continual improvement of energy performance (Clause 10).",
    "Audit principles and the full audit lifecycle: planning, conducting, gathering evidence, grading nonconformities, reporting, and follow-up.",
  ];

  const benefits = [
    "Learn from experienced and certified Lead Auditors with real-world industry expertise.",
    "Participate in interactive discussions, workshops, and hands-on audit activities.",
    "Apply auditing techniques through practical case studies and realistic audit simulations.",
    "Gain a globally recognized ISO 50001 Lead Auditor credential to advance your career.",
  ];

  const trainingMethods = [
    "In-House Training – Customized training delivered at your organization to address your specific industry requirements.",
    "Open Classroom Training – Instructor-led classroom sessions with professionals from multiple industries.",
    "Tutor-Led Virtual Training – Live online sessions with interactive discussions, breakout rooms, and practical exercises.",
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
          backgroundImage: `url(${iso50001Img.src})`,
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
            ISO 50001 Lead Auditor Training
          </h1>

          <div className="mx-auto mt-5 gold-divider" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
            Become a certified ISO 50001 Lead Auditor and gain the expertise
            to audit Energy Management Systems (EnMS) based on ISO 50001:2018
            and ISO 19011 guidelines.
          </p>
        </div>
      </section>

      {/* =========================================================
          COURSE INTRO + DETAILS
      ========================================================= */}
      <section className="bg-background py-20">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-3">
              
              <div className="md:col-span-2">
                <p className="text-lg leading-9 text-slate-700">
                  The ISO 50001 Lead Auditor Training equips participants with
                  the knowledge and practical skills required to perform
                  first-, second-, and third-party Energy Management System
                  (EnMS) audits.
                </p>

                <p className="mt-6 text-[15px] leading-9 text-muted-foreground text-justify">
                  The course covers ISO 50001:2018 requirements, ISO 19011
                  auditing principles, energy performance evaluation, audit
                  planning, execution, reporting, and continual improvement.
                  Through interactive sessions, case studies, and practical
                  audit exercises, participants gain the confidence to lead
                  Energy Management System audits and drive organizational
                  energy performance.
                </p>
              </div>

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

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="space-y-14 lg:col-span-2">

            {/* ---------------------------------------------------
                ABOUT THE COURSE
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                About the Course
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 text-[15px] leading-9 text-slate-700 text-justify">
                ISO 50001 Lead Auditor Training equips professionals with the
                knowledge and practical skills required to plan, conduct,
                report, and follow up first-, second-, and third-party Energy
                Management System (EnMS) audits in accordance with ISO 50001:2018
                and ISO 19011 guidelines.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-slate-700 text-justify">
                Hawksberg International provides professional ISO 50001 Lead
                Auditor Training delivered by experienced industry experts.
                The course combines instructor-led sessions, practical audit
                exercises, real-world energy management case studies, and
                interactive discussions to help participants develop the
                confidence to evaluate Energy Management Systems, improve
                organizational energy performance, and successfully lead EnMS
                audit teams.
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
                COURSE CONTENT
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                What the ISO 50001 Lead Auditor Course Covers
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 space-y-5">
                {courseCovers.map((item) => (
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
                ASSESSMENT & CERTIFICATION
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Assessment & Certification
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 space-y-8">

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Continuous Assessment
                  </h3>

                  <p className="mt-3 text-[15px] leading-8 text-slate-700">
                    Candidates are evaluated throughout the course on
                    attendance, active participation, completion of individual
                    and group exercises, and professional engagement during
                    class discussions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Final Examination
                  </h3>

                  <p className="mt-3 text-[15px] leading-8 text-slate-700">
                    At the end of the course, participants complete a
                    comprehensive examination. Passing the examination
                    demonstrates auditing competence.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Certification
                  </h3>

                  <p className="mt-3 text-[15px] leading-8 text-slate-700">
                    Participants who successfully complete the training and
                    pass the examination receive a Hawksberg International
                    ISO 50001 Lead Auditor course-completion certificate.
                    Participants who do not achieve the required passing score
                    will receive a certificate of attendance.
                  </p>
                </div>

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
                {benefits.map((item) => (
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
                TRAINING METHODS
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Training Methods
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 space-y-5">
                {trainingMethods.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
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