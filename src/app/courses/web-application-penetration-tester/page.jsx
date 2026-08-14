// import { Link } from "react-router-dom";
import Link from "next/link";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import webPentestImg from "@/assets/cybersecurity/webappenetrationtester.webp";

const training = {
  slug: "web-application-penetration-tester",

  title: "Web Application Penetration Tester",

  heroImage: webPentestImg,

  short: "Professional Web Application Pentesting.",

  duration: "70 Hours",

  level: "Advanced",

  description: [
    "Web Penetration Testing Training in Chennai from Indian Cyber Security Solutions (ICSS) is designed to equip learners with the practical skills required to identify, assess, and secure modern web applications. Guided by experienced cybersecurity professionals, this course covers industry-standard web application security concepts, OWASP Top 10 vulnerabilities, authentication mechanisms, exploitation techniques, and security testing methodologies through extensive hands-on labs and real-world scenarios. Whether you are a beginner or an IT professional, this program provides a structured learning path to help you become a skilled Web Application Penetration Tester.",

    "The course focuses on practical penetration testing techniques, vulnerability assessment, secure reporting, and enterprise security best practices. Students gain hands-on experience with industry-leading tools and methodologies while learning to identify, exploit, and remediate web application vulnerabilities. Upon successful completion, participants will be prepared for roles such as Web Application Penetration Tester, Security Analyst, Vulnerability Assessment Engineer, and Cybersecurity Consultant, with the skills required to secure modern enterprise applications.",
  ],

  modules: [
    "HTTP",
    "Authentication",
    "XSS",
    "SQLi",
    "RCE",
    "Reporting",
  ],

  whyJoinTitle: "Why Join Web Penetration Testing Training?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "You'll receive in-depth training in subjects like Web Penetration Testing, threat analysis and data security to make sure you have the most recent information and abilities needed to effectively resist cyber threats.",
    },
    {
      title: "Exclusive Industry Insights",
      description:
        "We frequently organize guest talks and workshops led by cybersecurity professionals and industry experts. It's a great opportunity to learn from leading authorities and stay current.",
    },
    {
      title: "Job Placement Assistance",
      description:
        "We are aware that securing a lucrative profession in cybersecurity is your ultimate objective. We provide extensive job placement support and help you to navigate the job market and connect with possible employers.",
    },
    {
      title: "Highly Qualified Trainers",
      description:
        "Our educators are acknowledged authorities in their industries with a wealth of experience in Web Penetration Testing Training and cybersecurity, ensuring that you get the best possible education.",
    },
  ],
};

export const metadata = { title: "Web Application Penetration Tester Course", description: "Web application penetration testing course content with practical application security topics.", alternates: { canonical: "/courses/web-application-penetration-tester" } };
export default function WebApplicationPenetrationTester() {
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
                  MODULES
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
                      key={index}
                      className="
                        flex
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
                      "
                    >
                      <h3 className="font-display text-2xl leading-tight text-gold">
                        {item.title}
                      </h3>

                      <p className="mt-6 text-[14px] leading-9 text-slate-700">
                        {item.description}
                      </p>
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

                <div className="mt-10 grid gap-8 md:grid-cols-2">

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
                      Web Application Security
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Build a strong understanding of modern web application
                      security concepts and common application attack surfaces.
                    </p>
                  </article>

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
                      OWASP Top 10
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Understand major web application vulnerabilities and
                      learn practical approaches for identifying and assessing
                      security weaknesses.
                    </p>
                  </article>

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
                      Authentication Testing
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Learn how authentication mechanisms are assessed during
                      professional web application security testing.
                    </p>
                  </article>

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
                      Vulnerability Assessment
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Develop practical skills for identifying, assessing and
                      documenting vulnerabilities in web applications.
                    </p>
                  </article>

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
                      Exploitation Techniques
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Gain practical exposure to penetration testing
                      methodologies and vulnerability exploitation in controlled
                      security-testing environments.
                    </p>
                  </article>

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
                      Professional Reporting
                    </h3>

                    <p className="mt-5 text-[14px] leading-8 text-slate-700">
                      Learn how to document security findings clearly and
                      communicate vulnerabilities using professional reporting
                      practices.
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
                    "Web Application Penetration Tester",
                    "Security Analyst",
                    "Vulnerability Assessment Engineer",
                    "Cybersecurity Consultant",
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
                      Hands-On Labs
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Practice web application security concepts through
                      hands-on labs and controlled testing environments.
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
                      Real-World Scenarios
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Learn through practical scenarios designed around modern
                      web application security challenges.
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
                      Develop skills aligned with professional penetration
                      testing methodologies and enterprise security practices.
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
                  Web Application Security
                </p>

                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  Ready to become a Web Application Penetration Tester?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">
                  Build practical skills in web application security,
                  vulnerability assessment, penetration testing and
                  professional security reporting.
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
                  sourcePage="web-application-penetration-tester"
                />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </Layout>
  );
}