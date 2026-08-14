// import { Link } from "react-router-dom";
import Link from "next/link";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import pythonImg from "@/assets/python.webp";

const training = {
  slug: "python",
  title: "Python Programming",
  heroImage: pythonImg,
  short:
    "Industry-grade Python training with projects in automation, data and security scripting.",
  duration: "50 hours",
  level: "Beginner to Intermediate",

  description: [
    "Python training in Chennai from Hawksberg International Associate Partner with Indian Cyber Security Solutions is an award-winning Python training program with placement assistance. With more enhanced practical sessions, we aim to provide the best Python training in Chennai.",

    "As the need for skilled individuals increases in the IT industry, professionals and students are grabbing this opportunity with open arms. If you are willing to enhance your skills in coding, our updated and comprehensive training module — backed by practical-based classes and a 100% money-back guarantee — ensures you won't be disappointed.",

    "Python is a very easy-to-learn programming language with many libraries that make it more effective and popular. Python is extensively used in Machine Learning and Data Science, which has driven up the demand for Python training among IT professionals and students.",

    "Our Python Training is designed to develop the skill set of students with compulsory exams after each module. During these exams, students work on a project of their choice and implement the programming skills they have learned during the training.",
  ],

  modules: [
    "Core Python & OOP",
    "File I/O and Modules",
    "Web Scraping & Automation",
    "APIs and Databases",
    "Capstone Project",
  ],
};

const learningAreas = [
  {
    title: "Core Python & OOP",
    description:
      "Build a strong foundation in Python programming and understand object-oriented programming concepts used to develop structured and maintainable applications.",
  },
  {
    title: "File I/O & Modules",
    description:
      "Learn how to work with files, modules and reusable Python components for building practical applications and automation scripts.",
  },
  {
    title: "Web Scraping & Automation",
    description:
      "Understand practical automation techniques and web scraping concepts that can be used to collect information and automate repetitive tasks.",
  },
  {
    title: "APIs & Databases",
    description:
      "Learn how Python applications communicate with APIs and databases and understand the fundamentals required for backend development.",
  },
  {
    title: "Python for Data & Security",
    description:
      "Explore how Python is used in data science, machine learning and cybersecurity scripting to solve real-world technical problems.",
  },
  {
    title: "Capstone Project",
    description:
      "Apply the concepts learned throughout the course by building a practical project that demonstrates your Python programming skills.",
  },
];

const technologies = [
  "Python",
  "OOP",
  "File Handling",
  "Modules",
  "Web Scraping",
  "Automation",
  "APIs",
  "Databases",
  "Security Scripting",
];

const careerRoles = [
  "Python Developer",
  "Backend Developer",
  "Automation Engineer",
  "Software Developer",
  "Python Full Stack Developer",
  "Security Automation Developer",
];

export const metadata = { title: "Python Programming Course", description: "Python programming training course content with practical project-based learning.", alternates: { canonical: "/courses/python-programming" } };
export default function PythonProgramming() {
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
      backgroundImage: `url(${training.heroImage?.src || training.heroImage})`,
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
        Programming &amp; Python Development Training
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
           href="/contact"
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
                  Course Overview
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
                  Modules Covered
                </h2>

                <div className="mt-4 gold-divider" />

                <ol className="mt-8 space-y-4">
                  {training.modules.map((module, index) => (
                    <li
                      key={module}
                      className="
                        flex
                        min-h-[90px]
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
                          min-w-[38px]
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
                          leading-7
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

              {/* WHAT YOU WILL LEARN */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  What You Will Learn
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  {learningAreas.map((item, index) => (
                    <article
                      key={item.title}
                      className="
                        flex
                        min-h-[270px]
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
                        md:p-9
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

                      <p className="mt-7 text-[14px] leading-8 text-slate-700">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* TECHNOLOGIES */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Technologies Covered
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {technologies.map((technology) => (
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
                  {careerRoles.map((role) => (
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

              {/* WHO SHOULD JOIN */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Who Should Join This Course?
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-4">
                  {[
                    "Students who want to build a professional career in Python development.",
                    "Beginners who want to learn a modern and versatile programming language.",
                    "IT professionals looking to strengthen their programming and automation skills.",
                    "Learners interested in Machine Learning and Data Science.",
                    "Students interested in cybersecurity and security scripting.",
                    "Aspiring backend developers who want practical Python experience.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-xl
                        border
                        border-slate-200
                        bg-card
                        p-5
                      "
                    >
                      <span className="mt-1 text-lg text-gold">
                        ✓
                      </span>

                      <p className="text-sm leading-7 text-slate-700 md:text-base">
                        {item}
                      </p>
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

                  <div className="rounded-xl border border-slate-200 bg-card p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Course
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      Python Programming
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-card p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Duration
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      {training.duration}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-card p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Level
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      {training.level}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-card p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Training Focus
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      Python Programming &amp; Automation
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
                  Python Programming Training
                </p>

                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  Build Your Career with Python
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">
                  Learn Python programming, OOP, automation, web scraping,
                  APIs, databases and practical scripting through
                  project-based training.
                </p>

                <div className="mt-7">
                  <Link
                     href="/contact"
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
                RIGHT SIDEBAR — ENQUIRY FORM
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
                  sourcePage="python"
                />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </Layout>
  );
}