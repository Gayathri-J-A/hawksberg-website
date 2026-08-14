// import { Link } from "react-router-dom";
import Link from "next/link";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import secureFullStackImg from "@/assets/programmingcourses/SecureFullStack.webp";

const training = {
  slug: "secure-full-stack-developer",
  title: "Secure Full Stack Developer",
  heroImage: secureFullStackImg,

  category: "Cyber Security & IT Training",

  short: "Secure Full Stack Web Development.",

  duration: "80 hours",
  level: "Advanced",

  description: [
    "Best Secure Full Stack Developer Course & Certification in India by Indian Cyber Security Solutions (ICSS) offers a comprehensive industry-focused curriculum designed to help learners build secure, scalable, and modern web applications.",

    "The program covers HTML, CSS, JavaScript, React, Node.js, databases, authentication, cloud deployment, and secure software development practices based on OWASP guidelines.",

    "Through practical labs and real-world projects, students gain hands-on experience in developing enterprise-grade full stack applications with security integrated at every stage.",

    "Certified by the Indian Institute of Cyber Security, this Secure Full Stack Developer program emphasizes secure coding practices, JWT authentication, role-based access control, API security, DevSecOps concepts, cloud deployment, and application security testing.",

    "Guided by experienced instructors, participants complete real-world capstone projects and develop the expertise required to build modern, secure and scalable applications.",
  ],

  modules: [
    "HTML/CSS",
    "React",
    "Node.js",
    "Database",
    "Authentication",
    "Deployment",
  ],
};

const learningAreas = [
  {
    title: "Hands-On Experience",
    description:
      "Through a combination of hands-on training, project-based learning, and real-world application, you'll master full stack technologies while implementing security measures at every layer—from frontend to backend and database.",
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
      "Learn from industry-recognized trainers with extensive experience in Web Development and Designing, ensuring a high-quality educational experience.",
  },
];

const benefits = [
  {
    title: "Live mentoring",
    description: "1:1 guidance from active practitioners.",
  },
  {
    title: "Hands-on labs",
    description: "Real-world challenges in a sandbox.",
  },
  {
    title: "Career support",
    description: "Resume reviews & interview prep.",
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Database",
  "JWT",
  "REST APIs",
  "OWASP",
  "DevSecOps",
  "Cloud Deployment",
  "Application Security",
];

const careerRoles = [
  "Full Stack Developer",
  "Secure Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Application Developer",
  "Application Security Developer",
];

const whoShouldJoin = [
  "Students who want to build a professional career in full stack development.",
  "Developers who want to strengthen their secure coding skills.",
  "IT professionals interested in cybersecurity and application security.",
  "Learners who want practical experience with React and Node.js.",
  "Developers interested in DevSecOps and secure application development.",
  "Anyone looking to build secure, scalable and modern web applications.",
];

export const metadata = { title: "Secure Full Stack Developer Course", description: "Secure full stack developer course content for building modern web applications.", alternates: { canonical: "/courses/secure-full-stack-developer" } };
export default function SecureFullStackDeveloper() {
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
        Cyber Security &amp; IT Training
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

              {/* WHY JOIN */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Why Join Secured Full Stack Developer Courses in India?
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  {learningAreas.map((item) => (
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
                      <h3
                        className="
                          font-display
                          text-[27px]
                          leading-tight
                          text-gold
                        "
                      >
                        {item.title}
                      </h3>

                      <p className="mt-8 text-[15px] leading-8 text-slate-700 md:text-base">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* BENEFITS */}
              <section>
                <div className="grid gap-6 md:grid-cols-3">
                  {benefits.map((item) => (
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

                      <p className="mt-4 text-sm leading-7 text-slate-700">
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
                  {whoShouldJoin.map((item) => (
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
                      Secure Full Stack Developer
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
                      Secure Full Stack Web Development
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
                  Secure Full Stack Developer Training
                </p>

                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  Build Secure Full Stack Applications
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">
                  Learn frontend development, backend development, databases,
                  authentication, APIs, cloud deployment and application
                  security through practical project-based training.
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
                  sourcePage="secure-full-stack-developer"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}