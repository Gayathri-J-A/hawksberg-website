import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import dataScienceImg from "@/assets/machinelearningcourses/datascience.webp";

const training = {
  slug: "data-science-python",

  title: "Data Science with Python",

  heroImage: dataScienceImg,

  short: "Data Science with Python Professional Training.",

  duration: "60 Hours",

  level: "Beginner",

  description: [
    "Data Science with Python Training is designed for students, graduates, working professionals, and technology enthusiasts who want to build a strong career in data science and analytics. Python has become one of the most widely used programming languages for data analysis, machine learning, automation, and artificial intelligence. This program provides learners with a structured pathway to understand Python programming, data analysis, visualization, statistics, and machine learning concepts.",

    "The training focuses on practical learning through coding exercises, real-world datasets, data visualization, statistical analysis, and machine learning projects. Participants gain hands-on experience with popular Python libraries and learn how to transform raw data into meaningful insights. The program also helps learners develop the practical and analytical skills required for roles such as Data Analyst, Data Scientist, Python Developer, Machine Learning Engineer, and Business Intelligence Analyst.",
  ],

  modules: [
    "Python Programming Fundamentals",
    "NumPy and Pandas",
    "Data Cleaning and Preprocessing",
    "Data Visualization",
    "Statistics for Data Science",
    "Exploratory Data Analysis",
    "Machine Learning Fundamentals",
    "Supervised Learning",
    "Unsupervised Learning",
    "Real-World Data Science Project",
  ],

  whyJoin: [
    {
      title: "Industry-Focused Python Training",
      description:
        "Learn Python programming with a strong focus on data science, analytics, automation, and real-world problem solving.",
    },
    {
      title: "Hands-On Data Analysis",
      description:
        "Work with real datasets and learn how to clean, transform, analyze, visualize, and interpret data using Python.",
    },
    {
      title: "Practical Machine Learning",
      description:
        "Understand the fundamentals of machine learning and implement practical algorithms using Python.",
    },
    {
      title: "Real-World Projects",
      description:
        "Build practical projects that help you understand the complete data science workflow from raw data to actionable insights.",
    },
    {
      title: "Career & Placement Guidance",
      description:
        "Get support with interview preparation, resume development, portfolio building, and career preparation for data-driven technology roles.",
    },
  ],
};

export default function DataSciencePython() {
  return (
    <Layout>
     {/* =========================================================
    HERO SECTION
========================================================= */}
<section className="relative h-[620px] overflow-hidden text-white md:h-[420px]">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${training.heroImage})`,
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Grid Pattern */}
  <div className="absolute inset-0 grid-pattern opacity-10" />

  {/* Hero Content */}
  <div className="container-x relative z-10 flex h-full items-start pt-[75px] md:pt-[55px]">
    <div className="max-w-3xl">

      {/* Small Heading */}
      <p className="text-[10px] uppercase tracking-[0.28em] text-gold md:text-xs">
        Data Science Training
      </p>

      {/* Main Title */}
      <h1
        className="mt-2 text-3xl leading-tight md:text-5xl"
        style={{
          fontFamily: "Calibri, sans-serif",
        }}
      >
        {training.title}
      </h1>

      {/* Divider */}
      <div className="mt-4 gold-divider" />

      {/* Description */}
      <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 md:text-base md:leading-7">
        {training.short}
      </p>

      {/* Duration + Level */}
      <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.15em] md:text-xs md:tracking-widest">

        <span className="rounded-full border border-gold/60 px-3 py-1.5 text-gold md:px-4 md:py-1.5">
          Duration · {training.duration}
        </span>

        <span className="rounded-full border border-gold/60 px-3 py-1.5 text-gold md:px-4 md:py-1.5">
          Level · {training.level}
        </span>

      </div>

      {/* CTA */}
      <div className="mt-5">
        <Link
          to="/contact"
          className="
            inline-flex
            items-center
            rounded-full
            bg-gold
            px-7
            py-3.5
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-slate-950
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          Get in Touch →
        </Link>
      </div>

    </div>
  </div>
</section>
      {/* =========================================================
          COURSE OVERVIEW
      ========================================================= */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              Course Overview
            </h2>

            <div className="mt-4 gold-divider" />

            <div className="mt-8 max-w-5xl space-y-7">
              {training.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="
                    text-justify
                    text-[15px]
                    leading-9
                    text-muted-foreground
                    md:text-base
                  "
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT + ENQUIRY
      ========================================================= */}
      <section className="bg-muted/40 py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="space-y-14 lg:col-span-2">
            {/* =================================================
                MODULES
            ================================================= */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Modules Covered
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {training.modules.map((module, index) => (
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
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    <div className="flex w-full items-center gap-5">
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
                ))}
              </div>
            </section>

            {/* =================================================
                COURSE DETAILS
            ================================================= */}
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
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Duration
                  </p>

                  <p className="mt-3 font-display text-2xl text-foreground">
                    {training.duration}
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
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Level
                  </p>

                  <p className="mt-3 font-display text-2xl text-foreground">
                    {training.level}
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                WHY CHOOSE
            ================================================= */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Why Choose Our Data Science with Python Training?
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 space-y-5">
                {training.whyJoin.map((item, index) => (
                  <article
                    key={item.title}
                    className="
                      rounded-2xl
                      border
                      border-border
                      bg-card
                      p-7
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className="
                          shrink-0
                          font-display
                          text-3xl
                          leading-none
                          text-gold
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="font-display text-2xl leading-tight text-foreground">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-[15px] leading-8 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* =================================================
                WHAT YOU WILL LEARN
            ================================================= */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                What You Will Learn
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 space-y-5">
                {[
                  "Build a strong foundation in Python programming for data science.",
                  "Work with NumPy and Pandas for efficient data manipulation and analysis.",
                  "Clean, transform, and preprocess real-world datasets.",
                  "Create meaningful charts and visualizations from complex datasets.",
                  "Understand statistical concepts used in data science.",
                  "Perform exploratory data analysis to discover patterns and trends.",
                  "Understand machine learning concepts and practical algorithms.",
                  "Build and evaluate basic predictive models using Python.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 shrink-0 text-2xl text-gold">
                      ✓
                    </span>

                    <p className="text-[15px] leading-8 text-slate-700 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* =================================================
                TOOLS & TECHNOLOGIES
            ================================================= */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Tools & Technologies
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[
                  "Python",
                  "NumPy",
                  "Pandas",
                  "Matplotlib",
                  "Seaborn",
                  "Scikit-learn",
                ].map((tool) => (
                  <div
                    key={tool}
                    className="
                      rounded-xl
                      border
                      border-border
                      bg-card
                      px-5
                      py-5
                      text-center
                      text-sm
                      font-medium
                      text-foreground
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </section>

            {/* =================================================
                PROJECTS
            ================================================= */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Practical Projects
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {[
                  {
                    title: "Sales Data Analysis",
                    text:
                      "Analyze business sales datasets to identify trends, patterns, performance indicators, and useful business insights.",
                  },
                  {
                    title: "Customer Analytics",
                    text:
                      "Explore customer data to understand behavior, segmentation, and important patterns using Python.",
                  },
                  {
                    title: "Data Visualization Dashboard",
                    text:
                      "Transform raw datasets into meaningful visualizations that make complex information easier to understand.",
                  },
                  {
                    title: "Machine Learning Prediction",
                    text:
                      "Build a basic predictive model using Python and machine learning techniques to solve a real-world problem.",
                  },
                ].map((project) => (
                  <article
                    key={project.title}
                    className="
                      rounded-2xl
                      border
                      border-border
                      bg-card
                      p-7
                      shadow-sm
                    "
                  >
                    <h3 className="font-display text-2xl text-gold">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-8 text-muted-foreground">
                      {project.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* =================================================
                CAREER OPPORTUNITIES
            ================================================= */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Career Opportunities
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Data Scientist",
                  "Data Analyst",
                  "Python Developer",
                  "Machine Learning Engineer",
                  "Business Intelligence Analyst",
                  "Junior Data Engineer",
                ].map((role) => (
                  <div
                    key={role}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      border
                      border-border
                      bg-card
                      p-5
                    "
                  >
                    <span
                      className="
                        grid
                        h-9
                        w-9
                        shrink-0
                        place-items-center
                        rounded-full
                        bg-gold/10
                        text-gold
                      "
                    >
                      ✓
                    </span>

                    <span className="text-sm font-medium text-foreground md:text-base">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* =================================================
                WHO SHOULD ATTEND
            ================================================= */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Who Should Attend?
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 space-y-5">
                {[
                  "Students who want to start a career in Data Science.",
                  "Graduates looking to enter data-driven technology roles.",
                  "Working professionals interested in transitioning into Data Science.",
                  "Python developers who want to expand into Data Analytics and Machine Learning.",
                  "Professionals interested in Artificial Intelligence and Machine Learning.",
                  "Anyone interested in learning practical data analysis using Python.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 shrink-0 text-2xl text-gold">
                      ✓
                    </span>

                    <p className="text-[15px] leading-8 text-slate-700 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* =================================================
                FINAL CTA
            ================================================= */}
            <section
              className="
                rounded-2xl
                bg-slate-950
                p-8
                text-white
                md:p-10
              "
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Data Science with Python
              </p>

              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Start Your Data Science Career
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70">
                Learn Python, data analysis, visualization, statistics and
                machine learning through practical, project-based training.
              </p>

              <div className="mt-7">
                <Link
                  to="/contact"
                  className="
                    inline-flex
                    rounded-full
                    bg-gold
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    text-slate-950
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  Get in Touch →
                </Link>
              </div>
            </section>
          </div>

          {/* =====================================================
              ENQUIRY SIDEBAR
          ===================================================== */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <EnquiryForm compact />
          </aside>
        </div>
      </section>
    </Layout>
  );
}