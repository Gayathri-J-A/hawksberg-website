import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import iso15189Img from "@/assets/isotraining/iso15189.webp";

const training = {
  slug: "iso-15189-internal-auditor",

  code: "ISO 15189",

  title: "ISO 15189 Internal Auditor Training",

  intro:
    "Become a certified ISO 15189 Internal Auditor and develop the skills to conduct effective first-party audits of Medical Laboratory Quality Management Systems based on ISO 15189:2022 and ISO 19011 guidelines.",

  detail:
    "The ISO 15189 Internal Auditor Training equips participants with the knowledge and practical skills required to perform internal audits of Medical Laboratory Quality Management Systems. The course covers ISO 15189:2022 requirements, ISO 19011 auditing principles, laboratory quality management, audit planning, execution, reporting, and continual improvement. Through practical case studies and expert guidance, participants gain the confidence to evaluate laboratory quality systems and prepare organizations for external assessments.",

  duration: "24 Hours",

  level: "Intermediate",

  modules: [
    "Introduction to ISO 15189:2022",
    "Medical Laboratory Quality Management Systems",
    "General Requirements: Impartiality & Confidentiality",
    "Structural & Governance Requirements",
    "Personnel, Facilities & Equipment",
    "Reagents & Consumables Management",
    "Pre-Examination Processes",
    "Examination Methods & Measurement Uncertainty",
    "Post-Examination Processes",
    "Point-of-Care Testing (POCT)",
    "Risk Management",
    "Management Review",
    "ISO 19011 Internal Audit Principles",
    "Audit Planning & Preparation",
    "Audit Checklists",
    "Audit Execution & Evidence Collection",
    "Nonconformity Reporting",
    "Audit Reporting & Follow-Up",
  ],

  audience: [
    "Medical Laboratory Professionals",
    "Quality Managers",
    "Management Representatives",
    "Medical Laboratory Pathologists",
    "Microbiologists",
    "Biochemists",
    "Laboratory Technicians",
    "Internal Auditors",
    "Laboratory Consultants",
  ],

  overviewTitle: "Course Objective",

  overview: `
The ISO 15189 Internal Auditor Training course equips participants with the knowledge and practical skills required to plan, conduct, report, and follow up internal (first-party) audits of Medical Laboratory Quality Management Systems in accordance with ISO 15189:2022 and ISO 19011 guidelines. The course helps laboratories evaluate quality and competence, identify opportunities for improvement, ensure compliance with international laboratory requirements, and prepare for external accreditation assessments.

Hawksberg International provides professional ISO 15189 Internal Auditor Training delivered by experienced industry experts. The programme combines instructor-led sessions, practical laboratory audit exercises, real-world medical laboratory case studies, and interactive discussions to help participants develop the confidence to effectively assess Medical Laboratory Quality Management Systems and successfully perform internal laboratory audits.
`,

  benefitsTitle: "Benefits of Learning ISO 15189 Internal Auditor Training",

  benefits: [
    "Improve your knowledge and understanding of the requirements of ISO 15189.",
    "Understand how to apply the requirements of ISO 15189 within your organisation.",
    "Carry out effective internal audits of your laboratory's Quality Management System.",
    "Gain the skills and confidence to challenge management on key quality issues.",
    "Understand the importance of continual improvement and how to implement it in your laboratory.",
    "Improve your communication and audit report-writing skills.",
    "Enhance your career prospects and professional earning potential.",
  ],

  trainingMethodsTitle: "Training Formats",

  trainingMethods: [
    "In-House Training — A 2-day (16-hour) programme delivered at your facility and customised to your organisational requirements.",
    "Classroom Training — A 2-day (16-hour) programme conducted at our training facility for classroom-based learning and interaction.",
    "Tutor-Led Virtual Sessions — A 2-day (16-hour) live online programme delivered through Zoom with an expert instructor.",
    "Self-Paced eLearning — 30 days of online access to the ISO 15189 Internal Auditor Course for self-paced learning.",
  ],

  assessmentTitle: "Certification",

  assessmentContent:
    "Participants who successfully complete the course and assessment will receive a Hawksberg International course-completion certificate. A participation certificate is provided to all attendees. For online participants, certificates are issued electronically and sent to the registered email address. The training is delivered by experienced industry experts with extensive practical auditing experience.",

  faqTitle:
    "ISO 15189 Internal Auditor Training — Frequently Asked Questions",

  faq: [
    {
      question: "What is the ISO 15189 Internal Auditor course?",
      answer:
        "A training course that equips participants to plan and conduct internal (first-party) audits of a Medical (Clinical) Laboratory against ISO 15189:2022 in accordance with ISO 19011.",
    },

    {
      question: "What does the course cover?",
      answer:
        "The course covers ISO 15189:2022 requirements for quality and competence in medical laboratories, pre-examination, examination and post-examination processes, risk management, and how to plan, conduct, report, and follow up an internal medical laboratory audit.",
    },

    {
      question: "What's the difference between ISO 15189 and ISO 17025 auditing?",
      answer:
        "Both standards address laboratory competence. ISO 15189 is specifically designed for medical and clinical laboratories with a focus on patient care, while ISO/IEC 17025 applies to general testing and calibration laboratories.",
    },

    {
      question: "Who should attend?",
      answer:
        "Medical laboratory professionals responsible for internal audits, Quality Managers, Pathologists, Laboratory Technologists, and teams preparing medical laboratories for ISO 15189 accreditation.",
    },

    {
      question: "Are there prerequisites?",
      answer:
        "There are no formal prerequisites. Previous experience in the medical laboratory sector is helpful but not mandatory.",
    },
  ],
};

export const metadata = { title: "ISO 15189 Internal Auditor Training", description: "ISO 15189 internal auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-15189-internal-auditor" } };
export default function ISO15189InternalAuditor() {
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
          backgroundImage: `url(${iso15189Img.src})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Background Grid */}
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

            {/* Small gap between heading and paragraph */}
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
                LEFT SIDE
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

                {/* Reference-style module cards */}
                <div
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
                  {/* {training.modules.map((module, index) => (
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
                  ))} */}
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
      border-[#d9dee5]
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
                  ISO 15189 Internal Auditor Training – Aim
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
                  TRAINING FORMATS
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
                  {training.trainingMethodsTitle}
                </h2>

                <div className="mt-5 h-[3px] w-[90px] bg-gold" />

                <div className="mt-9 space-y-4">
                  {training.trainingMethods.map((method, index) => (
                    <div
                      key={method}
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
                        {method}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===================================================
                  CERTIFICATION
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