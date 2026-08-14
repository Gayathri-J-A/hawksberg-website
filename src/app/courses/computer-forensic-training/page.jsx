// import { Link } from "react-router-dom";
import Link from "next/link";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import forensicImg from "@/assets/cybersecurity/forensics.webp";

const training = {
  slug: "computer-forensic-training",

  title: "Computer Forensic Training",

  heroImage: forensicImg,

  short: "Digital Forensics & Incident Investigation.",

  duration: "45 Hours",

  level: "Intermediate",

  description: [
    "Computer Forensic Training in Chennai by Indian Cyber Security Solutions (ICSS) offers a comprehensive curriculum for aspiring cybersecurity and digital forensic professionals. The program covers essential topics including digital evidence collection, disk forensics, memory forensics, data recovery, malware analysis, incident response, and forensic reporting. Through hands-on practical labs and real-world case studies, participants gain valuable experience in investigating cybercrimes, analyzing digital evidence, and protecting organizations against cyber incidents. Whether you are a beginner or an experienced IT professional, our expert instructors provide step-by-step guidance throughout the program.",

    "Jointly certified by the Indian Institute of Cyber Security, this Computer Forensic Training program provides in-depth practical knowledge of digital investigation techniques, forensic tools, and cybersecurity best practices. Students learn to identify, preserve, analyze, and report digital evidence while responding effectively to cyber incidents. Upon successful completion, participants will be prepared for roles such as Digital Forensic Analyst, Incident Response Analyst, Cybersecurity Investigator, Malware Analyst, and Cybersecurity Consultant, helping them build a successful career in digital forensics and cybersecurity.",
  ],

  whyJoinTitle: "Why Join Computer Forensic Training in India?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "You'll receive in-depth training in subjects like digital evidence collection, data recovery, malware analysis, and incident response to ensure you have the most recent knowledge and skills needed to effectively investigate cybercrimes and safeguard digital assets.",
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
        "Our educators are acknowledged authorities in their industries with a wealth of experience in digital forensics and cybercrime investigation, ensuring that you receive the best possible education in computer forensics.",
    },
  ],

  modules: [
    "Digital Evidence",
    "Disk Forensics",
    "Memory Forensics",
    "Log Analysis",
    "Reporting",
  ],
};

export const metadata = { title: "Computer Forensic Training", description: "Computer forensics training course content with practical digital investigation topics.", alternates: { canonical: "/courses/computer-forensic-training" } };
export default function ComputerForensicTraining() {
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

  {/* Dark Blue Overlay */}
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
                  sourcePage="computer-forensic-training"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}