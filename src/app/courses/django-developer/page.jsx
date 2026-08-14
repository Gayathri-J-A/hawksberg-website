// import { Link } from "react-router-dom";
import Link from "next/link";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import djangoImg from "@/assets/programmingcourses/django.webp";

const training = {
  slug: "django-developer",

  title: "Django Developer",

  heroImage: djangoImg,

  short: "Professional Django Development.",

  duration: "50 Hours",

  level: "Intermediate",

  description: [
    "Best Django Training in Chennai by Indian Cyber Security Solutions (ICSS) is designed to help aspiring developers build modern, scalable, and secure web applications using Python and the Django framework. The program covers Django fundamentals, models, views, templates, REST API development, authentication, database integration, and application deployment. Through hands-on practical labs and real-world projects, participants gain valuable experience in developing enterprise-grade web applications using industry best practices.",

    "This training goes beyond theoretical learning by emphasizing practical web development, API design, secure coding, and deployment techniques. Guided by experienced industry professionals, students work on live projects while developing the skills required for careers such as Django Developer, Python Full Stack Developer, Backend Developer, API Developer, and Software Engineer.",
  ],

  whyJoinTitle: "Why Join Django Training?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "Gain hands-on experience by working in simulated cyber threat scenarios and interactive labs. Learn from experienced cybersecurity professionals with real-world expertise in incident response and threat detection.",
    },
    {
      title: "Exclusive Industry Insights",
      description:
        "Course topics are aligned with current security operations, vulnerability management, and global industry standards. Earn the prestigious Django certification, a globally respected validation of your skills.",
    },
    {
      title: "Job Placement Assistance",
      description:
        "Benefit from personalized career support, including resume building, mock interviews, job placement assistance, and guidance for advancing your cybersecurity journey. Connect with a thriving community of cybersecurity professionals, trainers, and mentors to build a strong professional network.",
    },
    {
      title: "Highly Qualified Trainers",
      description:
        "Get access to affordable cybersecurity training without compromising on quality. Network with cybersecurity experts, analysts, and peers to grow professionally.",
    },
  ],

  modules: [
    "Django Basics",
    "Models",
    "Views",
    "Templates",
    "REST API",
    "Deployment",
  ],
};

const learningAreas = [
  {
    title: "Django Basics",
    description:
      "Understand the Django framework, project structure, applications, URL routing and the fundamentals required to build modern web applications.",
  },
  {
    title: "Models",
    description:
      "Learn Django's model architecture and understand how application data is represented, managed and connected with databases.",
  },
  {
    title: "Views",
    description:
      "Develop application logic using Django views and understand how requests, responses and business logic are handled.",
  },
  {
    title: "Templates",
    description:
      "Create dynamic and reusable web pages using Django templates and template inheritance.",
  },
  {
    title: "REST API",
    description:
      "Learn to design and develop REST APIs that allow Django applications to communicate with web, mobile and other client applications.",
  },
  {
    title: "Deployment",
    description:
      "Understand the fundamentals of deploying Django applications and preparing production-ready web applications.",
  },
];

const technologies = [
  "Python",
  "Django",
  "Django REST Framework",
  "REST API",
  "SQLite",
  "PostgreSQL",
  "HTML & CSS",
  "Git",
];

const careerRoles = [
  "Django Developer",
  "Python Full Stack Developer",
  "Backend Developer",
  "API Developer",
  "Software Engineer",
];

export const metadata = { title: "Django Developer Course", description: "Django developer training course content with practical programming topics.", alternates: { canonical: "/courses/django-developer" } };
export default function DjangoDeveloper() {
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
        Programming &amp; Web Development Training
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

              {/* =================================================
                  COURSE OVERVIEW
              ================================================= */}
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
                        min-h-[290px]
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
                    "Students who want to build a career in Python and web development.",
                    "Developers interested in learning the Django framework.",
                    "Python developers who want to develop production-ready web applications.",
                    "Backend developers looking to build REST APIs using Django.",
                    "Professionals interested in Python Full Stack Development.",
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
                      Django Developer
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
                      Python &amp; Django Web Development
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
                  Django Developer Training
                </p>

                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  Build Your Career with Django
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">
                  Learn Django, Python backend development, REST API
                  development, database integration and deployment through
                  practical, project-based training.
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
                  sourcePage="django-developer"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}