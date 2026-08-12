import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";
import onlineTrainingImg from "@/assets/isotraining/isoimg.webp";

const trainingData = {
  title: "Online ISO Training",

  short:
    "Learn ISO standards from anywhere through interactive online training delivered by certified industry experts.",

  duration: "Flexible",
  level: "All Levels",

  overview: `
ISO Training Online is a professional learning programme designed to help individuals and organizations understand, implement, and maintain management systems in accordance with internationally recognized ISO standards.

Hawksberg International provides comprehensive online ISO training that equips participants with the knowledge and practical skills required to establish, manage, audit, and continually improve ISO-compliant management systems across a wide range of industries.
`,

  programs: [
    "IRCA-Accredited ISO Lead Auditor Training",
    "ISO Internal Auditor Training – Self-Paced Learning",
    "ISO Internal Auditor Training – Live Virtual Sessions",
    "ISO Foundation & Awareness Training",
  ],

  features: [
    {
      title: "24/7 Accessibility",
      content:
        "Access your training anytime, anywhere using any internet-connected computer or device.",
    },
    {
      title: "Expert Instructors",
      content:
        "Learn from experienced industry professionals with extensive practical knowledge of ISO standards and auditing.",
    },
    {
      title: "Flexible Learning Options",
      content:
        "Choose from Self-Paced Learning, Live Virtual Sessions, and Instructor-Led Online Training.",
    },
    {
      title: "Comprehensive Learning Resources",
      content:
        "Receive presentation materials, reference documents, case studies, and self-study resources.",
    },
    {
      title: "Affordable Training",
      content:
        "Cost-effective programmes that provide high-quality learning without the expense of classroom travel.",
    },
    {
      title: "Online Assessment & Certification",
      content:
        "Complete the course assessment online and receive a Hawksberg International course-completion certificate upon successful completion.",
    },
  ],

  deliveryModes: [
    {
      title: "IRCA Lead Auditor Training",
      mode: "Tutor Led Virtual Mode",
      duration: "5 Days / 40 Hours",
      content:
        "The ISO Lead Auditor Training is delivered completely online over 5 days (40 hours) through Zoom. Expert instructors conduct live sessions and prepare participants for the Lead Auditor examination.",
    },
    {
      title: "ISO Internal Auditor Training",
      mode: "Self Learning Mode",
      duration: "30 Days Access",
      content:
        "Participants receive 30 days of access to course materials and can learn at their own pace before completing the Internal Auditor examination.",
    },
    {
      title: "ISO Internal Auditor Training",
      mode: "Virtual Mode",
      duration: "2 Days / 16 Hours",
      content:
        "A two-day (16-hour) instructor-led virtual program delivered through Zoom with interactive lectures and an examination conducted on the final day.",
    },
    {
      title: "ISO Foundation / Awareness Training",
      mode: "Self-Learning",
      duration: "30 Days Online Access",
      content:
        "A self-paced learning program providing the fundamentals of ISO standards with 30 days of online course access.",
    },
  ],

  whyChoose: `
Hawksberg International delivers high-quality online ISO training programmes designed to meet the learning needs of individuals and organizations across various industries.

We offer Lead Auditor, Internal Auditor, Foundation, and Awareness courses covering a wide range of internationally recognized ISO standards.

Training programmes can be customized to suit organizational requirements, helping teams build competence and achieve compliance objectives.

Our interactive online learning platform, experienced instructors, practical case studies, and continuous learner support ensure an engaging and effective training experience.

Affordable pricing and flexible learning schedules make our online ISO training accessible without compromising on quality.
`,

  audience: [
    "Students",
    "Working Professionals",
    "Quality Managers",
    "Internal Auditors",
    "Lead Auditors",
    "Compliance Officers",
    "Business Owners",
    "Anyone interested in ISO standards",
  ],
};

export default function ISOTrainingOnline() {
  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="
          relative
          min-h-[430px]
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
          text-white
          md:min-h-[440px]
        "
        style={{
          backgroundImage: `url(${onlineTrainingImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />

        <div className="container-x relative flex min-h-[430px] items-center justify-center md:min-h-[440px]">
          <div className="mx-auto w-full max-w-7xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold md:text-sm">
              ISO Training Programs
            </p>

            <h1
              className="
                mx-auto
                mt-5
                max-w-7xl
                font-display
                text-4xl
                font-medium
                uppercase
                leading-tight
                tracking-wide
                sm:text-5xl
                md:text-6xl
                lg:text-[64px]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {trainingData.title}
            </h1>

            <div className="mx-auto mt-6 gold-divider" />

            <p className="mx-auto mt-7 hidden max-w-3xl text-base leading-8 text-white/90 md:block">
              {trainingData.short}
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT ISO TRAINING ONLINE
          FULL WIDTH - SAME AS REFERENCE
      ========================================================= */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <h2
              className="
                font-display
                text-3xl
                uppercase
                tracking-wide
                text-foreground
                md:text-4xl
              "
            >
              About ISO Training Online
            </h2>

            <div className="mt-4 gold-divider" />

            <p className="mt-10 whitespace-pre-line text-justify text-[15px] leading-9 text-muted-foreground md:text-base">
              {trainingData.overview}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT + RIGHT ENQUIRY FORM
      ========================================================= */}
      <section className="bg-muted/40">
        <div className="container-x py-16 md:py-20">
          <div
            className="
              grid
              grid-cols-1
              items-start
              gap-10
              lg:grid-cols-[minmax(0,1fr)_380px]
              lg:gap-12
            "
          >
            {/* =====================================================
                LEFT SIDE CONTENT
            ===================================================== */}
            <main className="min-w-0 space-y-16 md:space-y-20">
              {/* ===================================================
                  COURSE DETAILS
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Course Details
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-5">
                  <p className="text-[17px] leading-8 text-foreground">
                    <span className="font-bold">Duration :</span>{" "}
                    {trainingData.duration}
                  </p>

                  <p className="text-[17px] leading-8 text-foreground">
                    <span className="font-bold">Level :</span>{" "}
                    {trainingData.level}
                  </p>
                </div>
              </section>

              {/* ===================================================
                  PROGRAMS AVAILABLE
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  ISO Training Programs Available Online
                </h2>

                <div className="mt-4 gold-divider" />

                <p className="mt-10 text-[15px] leading-8 text-muted-foreground md:text-base">
                  Hawksberg International offers a wide range of professional
                  online ISO training programmes, including:
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {trainingData.programs.map((program, index) => (
                    <div
                      key={program}
                      className="
                        flex
                        min-h-[90px]
                        items-center
                        gap-4
                        rounded-xl
                        border
                        border-border
                        bg-card
                        px-5
                        py-4
                        transition
                        hover:-translate-y-0.5
                        hover:shadow-md
                      "
                    >
                      <span className="shrink-0 font-display text-2xl text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-[15px] leading-7 text-slate-700">
                        {program}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-[15px] leading-8 text-muted-foreground">
                  Participants who successfully complete their chosen online
                  training programme and assessment will receive a Hawksberg
                  International course-completion certificate.
                </p>
              </section>

              {/* ===================================================
                  FEATURES
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Features of Our ISO Training Online
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {trainingData.features.map((feature, index) => (
                    <div
                      key={feature.title}
                      className="
                        rounded-2xl
                        border
                        border-border
                        bg-card
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                      "
                    >
                      <div className="font-display text-3xl text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {feature.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===================================================
                  COURSE DELIVERY MODES
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  ISO Training Online – Course Delivery Modes
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-10 space-y-5">
                  {trainingData.deliveryModes.map((course, index) => (
                    <div
                      key={`${course.title}-${course.mode}`}
                      className="
                        rounded-2xl
                        border
                        border-border
                        bg-card
                        p-6
                        md:p-8
                      "
                    >
                      <div className="flex flex-col gap-5 md:flex-row md:items-start">
                        <div
                          className="
                            flex
                            h-12
                            w-12
                            flex-none
                            items-center
                            justify-center
                            rounded-full
                            bg-gold/10
                            font-display
                            text-xl
                            font-semibold
                            text-gold
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground">
                            {course.title}
                          </h3>

                          <div className="mt-3 flex flex-wrap gap-3">
                            <span className="rounded-full bg-muted px-4 py-2 text-xs font-medium text-muted-foreground">
                              {course.mode}
                            </span>

                            <span className="rounded-full bg-muted px-4 py-2 text-xs font-medium text-muted-foreground">
                              {course.duration}
                            </span>
                          </div>

                          <p className="mt-5 text-[15px] leading-8 text-muted-foreground">
                            {course.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===================================================
                  WHY CHOOSE HAWKSBERG
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Why Choose Hawksberg International for Online ISO Training?
                </h2>

                <div className="mt-4 gold-divider" />

                <p className="mt-10 whitespace-pre-line text-justify text-[15px] leading-9 text-muted-foreground md:text-base">
                  {trainingData.whyChoose}
                </p>
              </section>

              {/* ===================================================
                  WHO SHOULD ATTEND
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Who Should Attend?
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {trainingData.audience.map((person) => (
                    <div
                      key={person}
                      className="
                        rounded-xl
                        border
                        border-border
                        bg-card
                        p-5
                      "
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 text-gold">✓</span>

                        <span className="text-sm leading-6 text-slate-700">
                          {person}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>

            {/* =====================================================
                RIGHT SIDE ENQUIRY FORM
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