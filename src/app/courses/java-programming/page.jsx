// import { Link } from "react-router-dom";
import Link from "next/link";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import javaImg from "@/assets/trainings/java.webp";

const training = {
  slug: "java",

  title: "Java Programming",

  heroImage: javaImg,

  short:
    "Master core and advanced Java with hands-on backend and enterprise patterns.",

  duration: "60 hours",

  level: "Beginner to Intermediate",

  description: [
    "Java training in Chennai by ICSS Associate Partner with Hawksberg International Certification provides hands-on training in Java programming and focuses on security issues. With prime focus in cyber security, we provide secured coding in Java for aspiring students who want to be placed in MNCs as Java developers.",

    "Our Java training provides hands-on lab training where students not only learn Java programming but also how to avoid common mistakes which allow hackers to compromise websites developed by Java developers. Our trainers are Oracle Java certified and CEHv9 certified, working as code reviewers in different MNCs. You will learn secured coding on Java, Java basics, OOP concepts, Exception Handling and Swing. Placement assistance is provided.",

    "Students who want to learn Android Penetration Testing should know Java programming to understand Android functionality. We have successfully trained more than 300 students from different engineering colleges across Chennai with a near 5-star rating. Weekend and weekday classes are available, including summer and winter internship programs.",

    "C|JD — Certified Java Programmer (Basic & Advanced). Join our instructor-led Java training for 3 months. Both basic and advanced courses are hands-on practical sessions delivered by industry professionals with more than 7 years of development experience in MNCs. From day one you will choose a project and gradually work on it as the class progresses; at the end you will have a fully developed software/tool.",
  ],

  modules: [
    "Core Java & OOP",
    "Collections & Generics",
    "JDBC & Multithreading",
    "Spring Boot fundamentals",
    "Project work",
  ],
};

const learningAreas = [
  {
    title: "Core Java & OOP",
    description:
      "Build a strong foundation in Java programming and object-oriented programming concepts used to create reliable and maintainable applications.",
  },
  {
    title: "Collections & Generics",
    description:
      "Understand Java Collections and Generics and learn how to efficiently work with structured data in Java applications.",
  },
  {
    title: "JDBC & Multithreading",
    description:
      "Learn database connectivity using JDBC and understand multithreading concepts for developing efficient Java applications.",
  },
  {
    title: "Spring Boot Fundamentals",
    description:
      "Understand the fundamentals of Spring Boot and learn how Java applications and backend services can be developed using modern enterprise patterns.",
  },
  {
    title: "Secure Java Coding",
    description:
      "Learn secure coding practices and understand common programming mistakes that can introduce vulnerabilities into Java applications.",
  },
  {
    title: "Project Work",
    description:
      "Apply the concepts learned throughout the training by working on a practical Java project from development through implementation.",
  },
];

const technologies = [
  "Java",
  "OOP",
  "Collections",
  "Generics",
  "JDBC",
  "Multithreading",
  "Spring Boot",
  "Secure Coding",
];

const careerRoles = [
  "Java Developer",
  "Backend Developer",
  "Software Engineer",
  "Java Application Developer",
  "Spring Boot Developer",
  "Enterprise Application Developer",
];

const whoShouldJoin = [
  "Students who want to build a professional career as Java developers.",
  "Aspiring developers looking for practical Java programming experience.",
  "Students interested in secure Java coding and application security.",
  "Professionals who want to strengthen their backend development skills.",
  "Learners planning to move into Spring Boot and enterprise Java development.",
  "Students interested in Android development who want a strong Java foundation.",
];

export const metadata = { title: "Java Programming Course", description: "Java programming training course content with practical project-based learning.", alternates: { canonical: "/courses/java-programming" } };
export default function JavaProgramming() {
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
        Programming &amp; Java Development Training
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
                      className="text-[15px] leading-9 text-justify text-slate-700 md:text-base"
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
                      className="flex min-h-[90px] items-center gap-6 rounded-xl border border-slate-200 bg-card px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:px-7"
                    >
                      <span className="min-w-[38px] font-display text-xl text-gold md:text-2xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-base font-medium leading-7 text-slate-900 md:text-lg">
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
                      className="flex min-h-[270px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-9"
                    >
                      <div className="flex items-start gap-5">
                        <span className="shrink-0 font-display text-3xl leading-none text-gold">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="font-display text-[24px] leading-tight text-gold">
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
                      className="rounded-xl border border-slate-200 bg-card px-5 py-5 text-center font-medium text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
                      className="flex items-center gap-4 rounded-xl border border-slate-200 bg-card p-5 shadow-sm"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
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
                  {whoShouldJoin.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-xl border border-slate-200 bg-card p-5"
                    >
                      <span className="mt-1 text-lg text-gold">✓</span>

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
                      Java Programming
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
                      Java &amp; Backend Development
                    </p>
                  </div>
                </div>
              </section>

              {/* FINAL CTA */}
              <section className="rounded-2xl bg-slate-950 p-8 text-white md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  Java Programming Training
                </p>

                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  Build Your Career with Java
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">
                  Learn Core Java, OOP, Collections, JDBC, Multithreading,
                  Spring Boot fundamentals and secure coding through practical,
                  project-based training.
                </p>

                <div className="mt-7">
                  <Link
                     href="/contact"
                    className="inline-flex rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1"
                  >
                    Get in Touch →
                  </Link>
                </div>
              </section>
            </main>

            {/* ===================================================
                RIGHT SIDEBAR
            =================================================== */}
            <aside className="mt-12 w-full lg:sticky lg:top-28 lg:mt-0 lg:self-start">
              <div className="w-full max-w-[400px] lg:ml-auto">
                <EnquiryForm compact sourcePage="java" />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}