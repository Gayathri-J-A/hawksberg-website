import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import socImg from "@/assets/cybersecurity/socanalyst.webp";

const training = {
  slug: "soc-analyst-training",

  title: "SOC Analyst Training",

  heroImage: socImg,

  short: "Security Operations Center Analyst Program.",

  duration: "60 Hours",

  level: "Intermediate",

  description: [
    "SOC Analyst Training in India by Indian Cyber Security Solutions (ICSS) provides a comprehensive curriculum designed for aspiring cybersecurity professionals who want to build expertise in Security Operations Center (SOC) processes. The program covers SOC fundamentals, Security Information and Event Management (SIEM), threat intelligence, incident response, MITRE ATT&CK framework, log analysis, and real-world cyber attack investigations. Through hands-on practical labs and live case studies, participants gain valuable experience in monitoring, detecting, analyzing, and responding to modern cyber threats across enterprise environments.",

    "Jointly certified by the Indian Institute of Cyber Security, this SOC Analyst Training program combines practical learning with industry best practices to prepare students for real-world security operations. Designed by experienced cybersecurity professionals with over 15 years of industry expertise, the course equips learners with the knowledge and hands-on skills required for roles such as SOC Analyst, Security Analyst, Incident Response Analyst, Threat Intelligence Analyst, and Blue Team Engineer, helping them build a successful career in cybersecurity.",
  ],

  modules: [
    "SOC Fundamentals",
    "SIEM",
    "Threat Intelligence",
    "Incident Response",
    "MITRE ATT&CK",
    "Case Studies",
  ],
};

export default function SOCAnalystTraining() {
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

                <div className="mt-10 grid gap-8 md:grid-cols-2">

                  {/* SOC Fundamentals */}
                  <article
                    className="
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
                    "
                  >
                    <h3 className="font-display text-2xl text-gold">
                      SOC Fundamentals
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Understand Security Operations Center processes,
                      monitoring workflows, analyst responsibilities, and
                      security event handling.
                    </p>
                  </article>

                  {/* SIEM */}
                  <article
                    className="
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
                    "
                  >
                    <h3 className="font-display text-2xl text-gold">
                      SIEM
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Learn how SIEM platforms collect, correlate, monitor,
                      and analyze security events and logs across enterprise
                      environments.
                    </p>
                  </article>

                  {/* Threat Intelligence */}
                  <article
                    className="
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
                    "
                  >
                    <h3 className="font-display text-2xl text-gold">
                      Threat Intelligence
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Develop practical knowledge of threat intelligence and
                      use threat information to support detection and
                      investigation activities.
                    </p>
                  </article>

                  {/* Incident Response */}
                  <article
                    className="
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
                    "
                  >
                    <h3 className="font-display text-2xl text-gold">
                      Incident Response
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Learn the key stages of identifying, analyzing,
                      containing, and responding to cybersecurity incidents.
                    </p>
                  </article>

                  {/* MITRE ATT&CK */}
                  <article
                    className="
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
                    "
                  >
                    <h3 className="font-display text-2xl text-gold">
                      MITRE ATT&amp;CK
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Understand attacker tactics and techniques through the
                      MITRE ATT&amp;CK framework and apply them during threat
                      analysis and investigations.
                    </p>
                  </article>

                  {/* Case Studies */}
                  <article
                    className="
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
                    "
                  >
                    <h3 className="font-display text-2xl text-gold">
                      Case Studies
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Apply SOC concepts through practical investigations and
                      real-world cybersecurity case studies.
                    </p>
                  </article>

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

                  {[
                    "SOC Analyst",
                    "Security Analyst",
                    "Incident Response Analyst",
                    "Threat Intelligence Analyst",
                    "Blue Team Engineer",
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
                      Practical Labs
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Hands-on learning through practical cybersecurity
                      exercises and SOC-focused activities.
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
                      Live Case Studies
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Understand modern cyber threats through real-world
                      security investigations and case studies.
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
                      Industry Best Practices
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Build practical knowledge aligned with modern security
                      operations and cybersecurity practices.
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

                  {/* Duration */}
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

                  {/* Level */}
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
                  Build Your SOC Career
                </p>

                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  Ready to become a SOC Analyst?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">
                  Start your SOC Analyst training and develop practical
                  skills in security monitoring, threat detection, incident
                  response, and security operations.
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
                  sourcePage="soc-analyst-training"
                />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </Layout>
  );
}