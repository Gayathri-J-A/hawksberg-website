import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";
import iso9001Img from "@/assets/services/iso-9001.webp";

const foundationCourse = {
  title: "ISO Foundation Training",
  heroImage: iso9001Img,

  short:
    "Build a strong foundation in ISO standards and understand how internationally recognized management systems can support business improvement.",

  duration: "16 Hours",
  level: "Beginner",

  overview: `
ISO Foundation Training is an entry-level training programme designed to help participants understand the fundamentals of the International Organization for Standardization (ISO). The course introduces the history of ISO, the benefits of ISO standards, and how organisations can implement them effectively.

By the end of the programme, participants will have a solid understanding of ISO standards and how they can support business improvement.
`,

  foundationCourses: [
    "ISO 9001:2015 — Quality Management Systems",
    "ISO 14001:2015 — Environmental Management Systems",
    "ISO 27001 — Information Security Management Systems",
    "ISO 22000:2018 — Food Safety Management Systems",
    "ISO 45001:2018 — Occupational Health & Safety Management Systems",
    "ISO 20000 — IT Service Management System",
    "ISO 22301:2019 — Business Continuity Management Systems",
  ],

  learning: [
    "The history of ISO and its role in the global economy.",
    "The benefits of implementing ISO standards.",
    "How to get involved with ISO.",
    "The different types of ISO standards.",
    "How to apply ISO standards within your business.",
    "Develop a solid understanding of ISO standards and how to begin implementing them within your organisation.",
  ],

  delivery: [
    "Available as a self-learning programme with 30 days of online access.",
    "Choose your preferred ISO Foundation course and purchase it online.",
    "Access learning materials anytime and study at your own pace.",
    "Interactive exercises and quizzes reinforce key concepts throughout the course.",
    "Course schedules and fees are provided according to the published training calendar.",
  ],

  modules: [
    "Introduction to ISO 9001:2015",
    "Quality Management Principles",
    "Process Approach",
    "Risk-Based Thinking",
    "Context of the Organization",
    "Leadership & Quality Policy",
    "Planning & Quality Objectives",
    "Support & Documented Information",
    "Operational Planning & Control",
    "Performance Evaluation",
    "Continual Improvement",
    "ISO 9001 Implementation Basics",
  ],

  audience: [
    "Students",
    "Quality Professionals",
    "Beginners",
    "Process Owners",
    "Management Representatives",
    "Quality Coordinators",
    "Engineers",
    "Anyone interested in Quality Management Systems",
  ],
};

export const metadata = { title: "ISO Foundation Training", description: "ISO foundation training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-foundation" } };
export default function ISOFoundation() {
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
          backgroundImage: `url(${foundationCourse.heroImage.src})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Grid texture */}
        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />

        {/* Hero content */}
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
              {foundationCourse.title}
            </h1>

            <div className="mx-auto mt-6 gold-divider" />

            <p className="mx-auto mt-7 hidden max-w-3xl text-base leading-8 text-white/90 md:block">
              {foundationCourse.short}
            </p>

       
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN PAGE CONTENT + RIGHT ENQUIRY FORM
      ========================================================= */}
      <section className="bg-background">
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
                LEFT CONTENT
            ===================================================== */}
            <main className="min-w-0 space-y-16 md:space-y-20">
              {/* ===================================================
                  COURSE OVERVIEW
              =================================================== */}
              <section>
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
                  Course Overview
                </h2>

                <div className="mt-4 gold-divider" />

                <p className="mt-10 whitespace-pre-line text-justify text-[15px] leading-9 text-muted-foreground md:text-base">
                  {foundationCourse.overview}
                </p>
              </section>

              {/* ===================================================
                  COURSE DETAILS
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Course Details
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div
                    className="
                      rounded-xl
                      border
                      border-border
                      bg-card
                      p-6
                    "
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Duration
                    </p>

                    <p className="mt-3 text-xl font-semibold text-foreground">
                      {foundationCourse.duration}
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-border
                      bg-card
                      p-6
                    "
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Level
                    </p>

                    <p className="mt-3 text-xl font-semibold text-foreground">
                      {foundationCourse.level}
                    </p>
                  </div>
                </div>
              </section>

              {/* ===================================================
                  FOUNDATION COURSES
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Foundation Courses
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {foundationCourse.foundationCourses.map((course, index) => (
                    <div
                      key={course}
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
                        py-5
                        transition
                        hover:-translate-y-0.5
                        hover:shadow-md
                      "
                    >
                      <span className="shrink-0 font-display text-2xl text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[15px] leading-7 text-slate-700">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===================================================
                  WHAT YOU WILL LEARN
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  What You Will Learn
                </h2>

                <div className="mt-4 gold-divider" />

                <ul className="mt-8 space-y-4">
                  {foundationCourse.learning.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-xl
                        border
                        border-border
                        bg-card
                        p-5
                      "
                    >
                      <span className="mt-1 shrink-0 text-lg text-gold">
                        ✓
                      </span>

                      <span className="text-[15px] leading-7 text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* ===================================================
                  MODULES COVERED
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Modules Covered
                </h2>

                <div className="mt-4 gold-divider" />

                <div
                  className="
                    mt-8
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {foundationCourse.modules.map((module, index) => (
                    <div
                      key={module}
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
                      "
                    >
                      {/* Number */}
                      <span
                        className="
                          w-[34px]
                          shrink-0
                          font-display
                          text-xl
                          leading-none
                          text-gold
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Module text */}
                      <span
                        className="
                          min-w-0
                          text-[15px]
                          leading-7
                          text-slate-700
                        "
                      >
                        {module}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===================================================
                  DELIVERY
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Delivery — Self-Learning Format
                </h2>

                <div className="mt-4 gold-divider" />

                <ul className="mt-8 space-y-4">
                  {foundationCourse.delivery.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-xl
                        border
                        border-border
                        bg-card
                        p-5
                      "
                    >
                      <span className="mt-1 shrink-0 text-lg text-gold">
                        ✓
                      </span>

                      <span className="text-[15px] leading-7 text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* ===================================================
                  WHO SHOULD ATTEND
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Who Should Attend
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  {foundationCourse.audience.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-xl
                        border
                        border-border
                        bg-card
                        p-5
                      "
                    >
                      <span className="mt-1 shrink-0 text-lg text-gold">
                        ✓
                      </span>

                      <span className="text-[15px] leading-7 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===================================================
                  WHY CHOOSE FOUNDATION TRAINING
              =================================================== */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Why Choose ISO Foundation Training?
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="font-display text-3xl text-gold">
                      01
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold">
                      Build ISO Knowledge
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Develop a clear understanding of ISO standards and their
                      role in modern organizations.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="font-display text-3xl text-gold">
                      02
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold">
                      Learn at Your Own Pace
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Access the learning programme online and study according
                      to your preferred schedule.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="font-display text-3xl text-gold">
                      03
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold">
                      Understand Implementation
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Understand how ISO standards can be applied within an
                      organization to support business improvement.
                    </p>
                  </div>
                </div>
              </section>
            </main>

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
                lg:justify-self-end
                lg:self-start
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