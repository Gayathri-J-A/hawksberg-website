import EnquiryForm from "@/components/EnquiryForm";

import iso14001Img from "@/assets/services/iso-14001.webp";
import Layout from "@/components/Layout";
export default function ISO14001LeadAuditor() {
  const modules = [
    "EMS Principles",
    "ISO 14001:2026 Requirements",
    "Audit Planning",
    "Audit Execution",
    "Audit Reporting",
    "Certification",
  ];

  const audience = [
    "Environmental Managers",
    "Lead Auditors",
    "Internal Auditors",
    "Environmental Consultants",
    "Compliance Professionals",
  ];

  const courseCovers = [
    "The structure of ISO 14001:2026 (Annex SL High-Level Structure) and the Environmental Management System (EMS) framework based on the Plan-Do-Check-Act (PDCA) cycle.",
    "Context of the organization, interested parties, and defining the EMS scope (Clause 4).",
    "Leadership, environmental policy, organizational roles, responsibilities, and authorities (Clause 5).",
    "Planning — environmental aspects and impacts, compliance obligations, risks and opportunities, and environmental objectives (Clause 6).",
    "Support — resources, competence, awareness, communication, and documented information (Clause 7).",
    "Operation — operational planning and control with a lifecycle perspective, operational controls, and emergency preparedness and response (Clause 8).",
    "Performance Evaluation — monitoring, measurement, evaluation of compliance, internal audit, and management review (Clause 9).",
    "Improvement — nonconformity, corrective action, and continual improvement (Clause 10).",
    "ISO 14001:2026 updates including stronger risk-based thinking, climate change considerations, and measurable environmental performance.",
    "Audit principles, audit planning, evidence collection, nonconformity classification, reporting, and audit follow-up based on ISO 19011.",
  ];

  const benefits = [
    "Develop a comprehensive understanding of Environmental Management System principles and ISO 14001:2026 requirements.",
    "Learn to conduct first-, second-, and third-party Environmental Management System audits using internationally accepted auditing practices.",
    "Gain practical experience through real-world audit scenarios, workshops, and case studies.",
    "Develop the skills required to effectively plan, conduct, report, and follow up Environmental Management System audits.",
    "Improve environmental compliance, sustainability performance, and continual improvement within organizations.",
    "Build confidence to lead Environmental Management System audit teams and communicate audit findings professionally.",
    "Earn an internationally recognised IRCA ISO 14001 Lead Auditor qualification to advance your environmental management career.",
  ];

  const prerequisites = [
    "A basic understanding of Environmental Management Systems (EMS) and ISO 14001 concepts.",
    "Knowledge of auditing principles and the Plan-Do-Check-Act (PDCA) cycle is recommended.",
    "Previous exposure to environmental management practices is beneficial but not mandatory.",
  ];

  const faqs = [
    {
      question: "Who should attend this course?",
      answer:
        "Environmental Managers, Compliance Managers, Internal Auditors, Lead Auditors, ISO Consultants, Sustainability Professionals, and individuals responsible for Environmental Management Systems.",
    },
    {
      question: "Do I need prior knowledge of ISO 14001?",
      answer:
        "A basic understanding of ISO 14001 requirements and Environmental Management System concepts is recommended before attending the Lead Auditor course.",
    },
    {
      question: "Will I receive a certificate after completing the course?",
      answer:
        "Yes. Participants who successfully complete the course and assessment will receive an internationally recognised ISO 14001 Lead Auditor certificate.",
    },
  ];

  const updateBenefits = [
    "Ensures compliance with updated environmental regulations and reduces regulatory risks.",
    "Strengthens risk-based thinking and environmental decision-making.",
    "Improves monitoring and performance evaluation through measurable environmental objectives.",
    "Enhances organizational reputation and stakeholder confidence.",
    "Supports continual improvement and sustainable business operations.",
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
          backgroundImage: `url(${iso14001Img})`,
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
            ISO 14001 Lead Auditor Training
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
                The ISO 14001:2026 Lead Auditor Training is designed to equip
                participants with the knowledge and skills required to perform
                first-, second-, and third-party audits of Environmental
                Management Systems (EMS). The course provides a structured
                understanding of EMS principles and the updated ISO 14001:2026
                requirements while focusing on auditing techniques that ensure
                effective planning, execution, and reporting of audits.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-muted-foreground text-justify">
                Participants gain practical exposure to real-world audit
                scenarios, enabling them to assess system effectiveness and
                identify opportunities for continual improvement.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-muted-foreground text-justify">
                Hawksberg International provides professional ISO 14001 Lead
                Auditor Training delivered by experienced industry experts.
                The course combines instructor-led sessions, practical audit
                exercises, real-world environmental case studies, and
                interactive discussions to help participants develop the
                knowledge and confidence required to plan, conduct, report,
                and follow up first-, second-, and third-party Environmental
                Management System (EMS) audits in accordance with ISO
                14001:2026 and ISO 19011 guidelines.
              </p>
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

            {/* Why Take */}
            <div>
              <h2 className="font-display text-3xl">
                Why Take the ISO 14001 Lead Auditor Course?
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 max-w-4xl text-[15px] leading-9 text-slate-700 text-justify">
                The ISO 14001 Lead Auditor Course equips participants with the
                expertise required to evaluate Environmental Management
                Systems against the latest ISO 14001 requirements. It
                develops practical auditing skills, strengthens environmental
                compliance knowledge, and prepares professionals to
                confidently lead first-, second-, and third-party EMS audits
                while supporting continual improvement and sustainable
                business practices.
              </p>
            </div>

            {/* Course Covers */}
            <div>
              <h2 className="font-display text-3xl">
                What the ISO 14001 Lead Auditor Course Covers
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

            {/* Prerequisites */}
            <div>
              <h2 className="font-display text-3xl">
                Prerequisites
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 max-w-4xl space-y-5">
                {prerequisites.map((item, index) => (
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

            {/* ===================================================
                ISO 14001:2026 UPDATE
            =================================================== */}
            <div>
              <h2 className="font-display text-3xl">
                About the ISO 14001:2026 Update
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 max-w-4xl text-[15px] leading-9 text-slate-700 text-justify">
                The release of ISO 14001:2026 marks a significant advancement
                in Environmental Management Systems. Organizations are
                evaluated not only on regulatory compliance but also on their
                ability to demonstrate measurable environmental performance
                and continual improvement. The revised standard introduces
                stronger risk-based thinking, climate change considerations,
                enhanced monitoring, and deeper integration of sustainability
                into business strategy.
              </p>

              <ul className="mt-8 max-w-4xl space-y-5">
                {updateBenefits.map((item, index) => (
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

            {/* FAQ */}
            <div>
              <h2 className="font-display text-3xl">
                Frequently Asked Questions
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-6 space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <summary className="cursor-pointer font-semibold text-slate-800">
                      {faq.question}
                    </summary>

                    <p className="mt-4 leading-8 text-slate-700">
                      {faq.answer}
                    </p>
                  </details>
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