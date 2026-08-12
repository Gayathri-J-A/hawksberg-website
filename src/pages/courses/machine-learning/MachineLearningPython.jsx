import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import mlPythonImg from "@/assets/machinelearningcourses/machinelearning.webp";

const training = {
  slug: "machine-learning-python",

  title: "Machine Learning using Python",

  heroImage: mlPythonImg,

  short: "Machine Learning using Python.",

  duration: "60 Hours",

  level: "Intermediate",

  description: [
    "Machine Learning Training in India by Indian Cyber Security Solutions (ICSS) offers a comprehensive curriculum designed for students, developers, and technology professionals who want to build expertise in Machine Learning using Python. The program covers Python programming, NumPy, Pandas, Scikit-Learn, regression, classification, data preprocessing, model evaluation, and real-world machine learning workflows. Through hands-on practical labs and industry-focused projects, participants gain valuable experience in developing intelligent predictive models and solving real-world business problems.",

    "Jointly certified by the Indian Institute of Cyber Security, this Machine Learning Training program combines theoretical concepts with practical implementation to help learners master modern machine learning techniques. Guided by experienced instructors, students work on real datasets and end-to-end machine learning projects, preparing them for careers as Machine Learning Engineers, AI Developers, Data Analysts, Data Scientists, and Python Developers.",
  ],

  whyJoinTitle: "Why Join Machine Learning Training in India?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "Gain practical expertise in Machine Learning, threat analysis, and data security, ensuring you acquire the latest knowledge and skills to effectively counter cyber threats.",
    },
    {
      title: "Exclusive Industry Insights",
      description:
        "Attend guest lectures and workshops led by top cybersecurity professionals and industry leaders to stay updated and learn from the best in the field.",
    },
    {
      title: "Job Placement Assistance",
      description:
        "Achieve your ultimate goal of securing a rewarding career in cybersecurity with our comprehensive job placement support and employer connections.",
    },
    {
      title: "Highly Qualified Trainers",
      description:
        "Learn from industry-recognized trainers with extensive experience in Machine Learning and cybersecurity, ensuring a high-quality educational experience.",
    },
  ],

  modules: [
    "Python",
    "NumPy",
    "Pandas",
    "Scikit-Learn",
    "Regression",
    "Classification",
    "Projects",
  ],
};

export default function MachineLearningPython() {
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
        Machine Learning &amp; Python Training
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
          Enroll / Enquire →
        </Link>
      </div>

    </div>
  </div>
</section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* ===================================================
                LEFT CONTENT
            =================================================== */}
            <main className="space-y-16 lg:col-span-2">

              {/* COURSE OVERVIEW */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Course overview
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-7">
                  {training.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="
                        text-[15px]
                        leading-9
                        text-slate-700
                        text-justify
                        md:text-base
                      "
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* MODULES */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Modules covered
                </h2>

                <div className="mt-4 gold-divider" />

                <ol className="mt-8 space-y-4">
                  {training.modules.map((module, index) => (
                    <li
                      key={module}
                      className="
                        flex
                        min-h-[92px]
                        items-center
                        gap-6
                        rounded-xl
                        border
                        border-slate-200
                        bg-card
                        px-6
                        py-5
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-md
                        md:px-7
                      "
                    >
                      <span
                        className="
                          min-w-[32px]
                          font-display
                          text-xl
                          text-gold
                          md:text-2xl
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          text-base
                          font-medium
                          text-slate-900
                          md:text-lg
                        "
                      >
                        {module}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* WHY JOIN */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.whyJoinTitle}
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  {training.whyJoin.map((item, index) => (
                    <article
                      key={item.title}
                      className="
                        flex
                        min-h-[300px]
                        flex-col
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-8
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-md
                        md:p-10
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

                        <h3
                          className="
                            font-display
                            text-[24px]
                            leading-tight
                            text-gold
                          "
                        >
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-7 text-[14px] leading-9 text-slate-700">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* WHAT YOU WILL LEARN */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  What You Will Learn
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {[
                    {
                      title: "Python for Machine Learning",
                      text:
                        "Build a strong Python foundation and learn how Python is used throughout practical machine learning workflows.",
                    },
                    {
                      title: "Data Processing",
                      text:
                        "Learn how to prepare, clean and transform datasets before using them for machine learning models.",
                    },
                    {
                      title: "NumPy & Pandas",
                      text:
                        "Work with NumPy and Pandas for numerical computing, data manipulation and practical dataset analysis.",
                    },
                    {
                      title: "Scikit-Learn",
                      text:
                        "Learn to use Scikit-Learn for building, training and evaluating practical machine learning models.",
                    },
                    {
                      title: "Regression & Classification",
                      text:
                        "Understand important supervised learning techniques including regression and classification.",
                    },
                    {
                      title: "Real-World Projects",
                      text:
                        "Apply your knowledge through practical machine learning projects using real datasets and end-to-end workflows.",
                    },
                  ].map((item) => (
                    <article
                      key={item.title}
                      className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-7
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-md
                      "
                    >
                      <h3 className="font-display text-2xl text-gold">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-[14px] leading-8 text-slate-700">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* TECHNOLOGIES */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Technologies &amp; Tools
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {[
                    "Python",
                    "NumPy",
                    "Pandas",
                    "Scikit-Learn",
                    "Regression",
                    "Classification",
                  ].map((technology) => (
                    <div
                      key={technology}
                      className="
                        rounded-xl
                        border
                        border-slate-200
                        bg-card
                        px-5
                        py-5
                        text-center
                        font-medium
                        text-slate-800
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-md
                      "
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </section>

              {/* CAREER OPPORTUNITIES */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Career Opportunities
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {[
                    "Machine Learning Engineer",
                    "AI Developer",
                    "Data Analyst",
                    "Data Scientist",
                    "Python Developer",
                  ].map((role) => (
                    <div
                      key={role}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-xl
                        border
                        border-slate-200
                        bg-card
                        p-5
                        shadow-sm
                      "
                    >
                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-gold/10
                          text-gold
                        "
                      >
                        ✓
                      </span>

                      <span className="font-medium text-slate-800">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* COURSE DETAILS */}
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
                      border-slate-200
                      bg-card
                      p-6
                    "
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Duration
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      {training.duration}
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-slate-200
                      bg-card
                      p-6
                    "
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Level
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      {training.level}
                    </p>
                  </div>
                </div>
              </section>

              {/* FINAL CTA */}
              <section
                className="
                  rounded-2xl
                  bg-slate-950
                  p-8
                  text-white
                  md:p-10
                "
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  Machine Learning Training
                </p>

                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  Build Your Career in Machine Learning
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">
                  Develop practical machine learning skills using Python,
                  industry-standard libraries, real datasets and hands-on
                  projects.
                </p>

                <div className="mt-7">
                  <Link
                    to="/contact"
                    className="
                      inline-flex
                      rounded-full
                      bg-gold
                      px-7
                      py-3.5
                      text-sm
                      font-semibold
                      text-slate-950
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                  >
                    Get in Touch →
                  </Link>
                </div>
              </section>
            </main>

            {/* ===================================================
                RIGHT SIDEBAR
            =================================================== */}
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
              <div className="w-full max-w-[400px] lg:ml-auto">
                <EnquiryForm
                  compact
                  sourcePage="machine-learning-python"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}