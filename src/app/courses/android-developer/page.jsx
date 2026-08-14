// import { Link } from "react-router-dom";
import Link from "next/link";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import androidImg from "@/assets/programmingcourses/android.webp";

const training = {
  slug: "android-developer",

  title: "Android Developer",

  heroImage: androidImg,

  short: "Android Application Development.",

  duration: "60 Hours",

  level: "Intermediate",

  description: [
    "Android Training in Chennai by Indian Cyber Security Solutions (ICSS) offers a comprehensive curriculum designed for students and software professionals who want to build modern Android applications. The program covers Android Studio, Kotlin, Material Design, SQLite, Firebase integration, UI development, and application publishing. Through hands-on practical labs and real-world projects, participants gain valuable experience in designing, developing, testing, and deploying Android applications.",

    "Jointly certified by the Indian Institute of Cyber Security, this Android Training program combines theoretical concepts with practical mobile application development. Students gain expertise in building secure, high-performance Android applications while preparing for careers such as Android Developer, Mobile Application Developer, Kotlin Developer, Software Engineer, and Mobile App Consultant.",
  ],

  whyJoinTitle: "Why Join Android Training?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "Gain practical expertise in Android, threat analysis, and data security, ensuring you acquire the latest knowledge and skills to effectively counter cyber threats.",
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
        "Learn from industry-recognized trainers with extensive experience in Android and cybersecurity, ensuring a high-quality educational experience.",
    },
  ],

  modules: [
    "Android Studio",
    "Kotlin",
    "UI Design",
    "SQLite",
    "Firebase",
    "Publishing",
  ],
};

const learningAreas = [
  {
    title: "Android Studio",
    description:
      "Learn to use Android Studio as the primary development environment for creating, testing, debugging and managing Android applications.",
  },
  {
    title: "Kotlin",
    description:
      "Build a strong foundation in Kotlin programming and use modern Kotlin concepts to create efficient and maintainable Android applications.",
  },
  {
    title: "UI Design",
    description:
      "Design responsive and user-friendly Android interfaces using modern UI development principles and Material Design concepts.",
  },
  {
    title: "SQLite",
    description:
      "Understand local data storage and database operations using SQLite to build Android applications that can efficiently manage application data.",
  },
  {
    title: "Firebase",
    description:
      "Work with Firebase services and learn how cloud-based services can be integrated into Android applications.",
  },
  {
    title: "Publishing",
    description:
      "Understand the process of preparing, testing and publishing Android applications for real-world users.",
  },
];

const careerRoles = [
  "Android Developer",
  "Mobile Application Developer",
  "Kotlin Developer",
  "Software Engineer",
  "Mobile App Consultant",
];

const technologies = [
  "Android Studio",
  "Kotlin",
  "Material Design",
  "SQLite",
  "Firebase",
  "Android UI",
  "Mobile Application Development",
  "Application Publishing",
];

export const metadata = { title: "Android Developer Course", description: "Android developer training course content with practical programming topics.", alternates: { canonical: "/courses/android-developer" } };
export default function AndroidDeveloper() {
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
        Programming &amp; Mobile Application Training
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

              {/* =================================================
                  WHY JOIN
              ================================================= */}
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

              {/* =================================================
                  MODULES
              ================================================= */}
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

              {/* =================================================
                  WHAT YOU WILL LEARN
              ================================================= */}
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

              {/* =================================================
                  TECHNOLOGIES
              ================================================= */}
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

              {/* =================================================
                  CAREER OPPORTUNITIES
              ================================================= */}
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

              {/* =================================================
                  WHO SHOULD JOIN
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Who Should Join This Course?
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-4">
                  {[
                    "Students who want to build a career in Android application development.",
                    "Software professionals looking to move into mobile application development.",
                    "Developers who want to learn Kotlin and modern Android development.",
                    "Students interested in building real-world Android applications.",
                    "Professionals looking to strengthen their mobile development skills.",
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
                      <span className="mt-1 text-lg text-gold">✓</span>

                      <p className="text-sm leading-7 text-slate-700 md:text-base">
                        {item}
                      </p>
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
                      border-slate-200
                      bg-card
                      p-6
                    "
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Course
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      Android Developer
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
                      Training Focus
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      Android Application Development
                    </p>
                  </div>
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
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  Android Developer Training
                </p>

                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  Start Your Android Development Career
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">
                  Learn modern Android application development with Kotlin,
                  Android Studio, UI design, SQLite, Firebase and application
                  publishing through practical training.
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
                  sourcePage="android-developer"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}