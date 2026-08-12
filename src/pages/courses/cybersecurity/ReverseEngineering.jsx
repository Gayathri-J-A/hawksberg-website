import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import reverseEngineeringImg from "@/assets/cybersecurity/cyberreverseengineering.webp";

const training = {
  slug: "reverse-engineering",

  title: "Reverse Engineering",

  heroImage: reverseEngineeringImg,

  short: "Reverse Engineering & Malware Analysis.",

  duration: "50 Hours",

  level: "Advanced",

  description: [
    "Best Reverse Engineering and Malware Analysis Training in India by Indian Cyber Security Solutions (ICSS) is designed to provide learners with real-world skills, industry-relevant knowledge, and hands-on expertise in reverse engineering and malware analysis. The program covers binary analysis, x86 architecture, debugging, malware analysis, reverse engineering techniques using tools such as IDA Pro and Ghidra, and practical threat analysis. Through extensive hands-on labs and real-world malware samples, participants gain the expertise required to analyze, understand, and defend against sophisticated cyber threats.",

    "This training goes beyond theory by focusing on practical malware reverse engineering, binary analysis, debugging techniques, threat detection, and incident response using industry-standard tools and methodologies. Guided by experienced cybersecurity professionals, students develop the skills required for careers such as Reverse Engineer, Malware Analyst, Threat Researcher, Incident Response Analyst, and Cybersecurity Consultant. If you're looking to advance your cybersecurity career, the Best Reverse Engineering and Malware Analysis Training in India provides the knowledge and practical experience needed to excel in modern offensive and defensive cybersecurity.",
  ],

  modules: [
    "Binary Analysis",
    "x86 Architecture",
    "Debugging",
    "Malware Analysis",
    "IDA Pro",
    "Ghidra",
  ],

  whyJoinTitle:
    "Why Join Reverse Engineering and Malware Analysis Training in India?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "Gain hands-on experience by working in simulated cyber threat scenarios and interactive labs. Learn from experienced cybersecurity professionals with real-world expertise in incident response and threat detection.",
    },
    {
      title: "Exclusive Industry Insights",
      description:
        "Course topics are aligned with current security operations, vulnerability management, and global industry standards. Earn the prestigious Reverse Engineering and Malware Analysis certification, a globally respected validation of your skills.",
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
};

export default function ReverseEngineering() {
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
                        min-h-[330px]
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

                      <p
                        className="
                          mt-6
                          text-[14px]
                          leading-9
                          text-slate-700
                        "
                      >
                        {item.description}
                      </p>
                    </article>
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
                  sourcePage="reverse-engineering"
                />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </Layout>
  );
}