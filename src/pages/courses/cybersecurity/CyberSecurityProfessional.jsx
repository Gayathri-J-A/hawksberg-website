import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import cyberProfessionalImg from "@/assets/cybersecurity/oscpredtraining.webp";

const training = {
  slug: "cyber-security-professional",

  title: "Cyber Security Professional",

  heroImage: cyberProfessionalImg,

  short: "Advanced Cyber Security Training.",

  duration: "90 Hours",

  level: "Advanced",

  description: [
    "Cybersecurity training in Chennai with placement opportunities is what every tech enthusiast is looking for. Indian Cyber Security Solutions, in association with the Indian Institute of Cyber Security, provides one of the most practical hands-on cybersecurity training programs in Chennai. Earn a valuable certification recognized by leading MNCs and strengthen your career prospects in the cybersecurity industry.",

    "The Certified Cyber Security Professional (C|CSP) course is meticulously designed for students and professionals from technical backgrounds such as BCA, MCA, B.Tech, and B.Sc. Computer Science. Structured into two comprehensive levels, the program offers a progressive learning path that caters to both beginners and advanced learners while combining theoretical knowledge with extensive hands-on practical experience.",
  ],

  modules: [
    "Threat Hunting",
    "Incident Response",
    "Malware",
    "SOC",
    "SIEM",
    "Projects",
  ],

  whyJoinTitle: "Why Join Cyber Security Training?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "You'll receive in-depth training in subjects like ethical hacking, threat analysis and data security to make sure you have the most recent information and abilities needed to effectively resist cyber threats.",
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
        "Our educators are acknowledged authorities in their industries with a wealth of experience in ethical hacking and cybersecurity, ensuring that you get the best possible education.",
    },
  ],
};

export default function CyberSecurityProfessional() {
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
          MAIN COURSE CONTENT
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
                      <span className="min-w-[32px] font-display text-xl text-gold md:text-2xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-base font-medium text-slate-900 md:text-lg">
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
                  WHY JOIN
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {training.whyJoinTitle}
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-10 grid gap-7 md:grid-cols-2">
                  {training.whyJoin.map((item) => (
                    <article
                      key={item.title}
                      className="
                        flex
                        min-h-[330px]
                        flex-col
                        rounded-2xl
                        border
                        border-slate-200
                        bg-card
                        p-8
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                        md:p-10
                      "
                    >
                      <h3 className="font-display text-2xl leading-tight text-gold md:text-[26px]">
                        {item.title}
                      </h3>

                      <p className="mt-7 text-[15px] leading-9 text-slate-700">
                        {item.description}
                      </p>
                    </article>
                  ))}
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
                  sourcePage="cyber-security-professional"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}