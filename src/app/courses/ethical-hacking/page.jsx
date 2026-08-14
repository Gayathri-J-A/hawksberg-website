// import { Link } from "react-router-dom";
import Link from "next/link";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import ethicalHackingImg from "@/assets/trainings/ethical-hacking.webp";

const training = {
  slug: "ethical-hacking",

  title: "Ethical Hacking Training",

  heroImage: ethicalHackingImg,

  short:
    "Hands-on offensive security training covering reconnaissance, exploitation and reporting.",

  duration: "60 hours",

  level: "Beginner to Advanced",

  description: [
    "Ethical Hacking training in Chennai by Hawksberg International Certification Associate Partner with Indian Cyber Security Solutions is the most demanded training in India. The Ethical Hacking Professional certification training program aims at providing the highest level of technical skill set required to get into the field of cyber security. The course goes in-depth into the techniques used by Black Hat hackers and demonstrates them live in a lab-based, 100% practically oriented class.",

    "Ethical hacker certification provides the gateway to enter the cyber security domain. MNCs have made ethical hacker certification compulsory for security-related job opportunities, making this certification highly important for security professionals.",

    "As these hacking skills can be used in a bad way, our ethical hacking course will teach you how to use the same skills to protect the intellectual property of organisations and individuals and become a white hat hacker. During the course, you will develop the ability to measure and mitigate threats and find out where your organisation is most vulnerable to be hacked.",
  ],

  modules: [
    "Footprinting & Reconnaissance",
    "Scanning, Enumeration & Vulnerability Analysis",
    "System Hacking & Malware",
    "Web, Wireless & Cloud Attacks",
    "Cryptography & Reporting",
  ],
};

export const metadata = { title: "Ethical Hacking Course", description: "Ethical hacking training course content with practical cybersecurity and defensive security topics.", alternates: { canonical: "/courses/ethical-hacking" } };
export default function EthicalHacking() {
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
                  COURSE DETAILS
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Course Details
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  {/* Duration */}
                  <div className="rounded-xl border border-slate-200 bg-card p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Duration
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      {training.duration}
                    </p>
                  </div>

                  {/* Level */}
                  <div className="rounded-xl border border-slate-200 bg-card p-6">
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
                  WHO IS THIS COURSE FOR
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Who Should Join This Training?
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 rounded-2xl border border-slate-200 bg-card p-7 shadow-sm md:p-9">
                  <ul className="space-y-5">
                    {[
                      "Students and graduates looking to start a career in cybersecurity.",
                      "IT professionals interested in ethical hacking and offensive security.",
                      "Security professionals who want practical penetration testing knowledge.",
                      "Professionals preparing for cybersecurity and ethical hacking roles.",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-4 text-[15px] leading-8 text-slate-700"
                      >
                        <span className="mt-1 text-lg text-gold">✓</span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

            </main>

            {/* ===================================================
                RIGHT — ENQUIRY FORM
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
                  sourcePage="ethical-hacking"
                />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </Layout>
  );
}