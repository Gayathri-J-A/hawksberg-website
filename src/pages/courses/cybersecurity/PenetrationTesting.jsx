import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import pentestImg from "@/assets/trainings/penetration-testing.webp";

const training = {
  slug: "penetration-testing",

  title: "Penetration Testing (VAPT)",

  heroImage: pentestImg,

  short:
    "Professional VAPT methodology covering web, mobile, network and API attack surfaces.",

  duration: "55 hours",

  level: "Intermediate to Advanced",

  modules: [
    "VAPT methodology & standards",
    "Web application pentest",
    "Mobile application pentest",
    "Network pentest",
    "Reporting & remediation",
  ],
};

export default function PenetrationTesting() {
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

              {/* =================================================
                  COURSE OVERVIEW
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Course overview
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-7">
                  <p className="text-[15px] leading-9 text-slate-700 text-justify md:text-base">
                    Penetration Testing (VAPT) is a professional cybersecurity
                    training program designed to provide practical knowledge
                    of vulnerability assessment and penetration testing
                    methodologies across modern attack surfaces.
                  </p>

                  <p className="text-[15px] leading-9 text-slate-700 text-justify md:text-base">
                    The program focuses on structured VAPT methodologies,
                    web application security, mobile application testing,
                    network penetration testing, vulnerability identification,
                    reporting, and remediation. Participants gain practical
                    exposure to the processes used by security professionals
                    to identify and assess weaknesses in IT environments.
                  </p>

                  <p className="text-[15px] leading-9 text-slate-700 text-justify md:text-base">
                    Through practical exercises and security-focused
                    scenarios, learners develop the ability to assess
                    vulnerabilities, understand attack surfaces, document
                    findings, and communicate remediation recommendations
                    effectively.
                  </p>
                </div>
              </section>

              {/* =================================================
                  MODULES COVERED
              ================================================= */}
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

              {/* =================================================
                  WHAT YOU WILL LEARN
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  What You Will Learn
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div
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
                    <h3 className="font-display text-xl text-gold">
                      VAPT Methodology
                    </h3>

                    <p className="mt-4 text-sm leading-8 text-slate-700">
                      Understand structured vulnerability assessment and
                      penetration testing methodologies used in professional
                      security engagements.
                    </p>
                  </div>

                  <div
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
                    <h3 className="font-display text-xl text-gold">
                      Web Application Security
                    </h3>

                    <p className="mt-4 text-sm leading-8 text-slate-700">
                      Learn how security professionals assess web application
                      attack surfaces and identify common security weaknesses.
                    </p>
                  </div>

                  <div
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
                    <h3 className="font-display text-xl text-gold">
                      Mobile &amp; Network Testing
                    </h3>

                    <p className="mt-4 text-sm leading-8 text-slate-700">
                      Develop an understanding of mobile and network
                      penetration testing techniques and security assessment
                      practices.
                    </p>
                  </div>

                  <div
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
                    <h3 className="font-display text-xl text-gold">
                      Reporting &amp; Remediation
                    </h3>

                    <p className="mt-4 text-sm leading-8 text-slate-700">
                      Learn how to document vulnerabilities, communicate
                      security findings, and provide meaningful remediation
                      recommendations.
                    </p>
                  </div>

                </div>
              </section>

              {/* =================================================
                  COURSE FEATURES
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Course Features
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-6 sm:grid-cols-3">

                  <div
                    className="
                      rounded-xl
                      border
                      border-slate-200
                      bg-card
                      p-6
                    "
                  >
                    <h3 className="font-display text-xl text-gold">
                      Practical Learning
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Hands-on security assessment and penetration testing
                      focused learning.
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
                    <h3 className="font-display text-xl text-gold">
                      Industry Methodology
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Learn structured methodologies used in professional
                      VAPT engagements.
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
                    <h3 className="font-display text-xl text-gold">
                      Security Reporting
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Develop professional skills for documenting findings and
                      remediation recommendations.
                    </p>
                  </div>

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

              {/* =================================================
                  CTA
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
                  Start Your Cybersecurity Journey
                </p>

                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  Ready to learn Penetration Testing?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">
                  Enquire about the Penetration Testing (VAPT) training
                  program and get more information about the course.
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
                  sourcePage="penetration-testing"
                />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </Layout>
  );
}