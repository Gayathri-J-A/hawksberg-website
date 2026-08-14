// import { Link } from "react-router-dom";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import cisspImg from "@/assets/cybersecurity/cissp.webp";

export const metadata = { title: "CISSP Training", description: "CISSP training course content covering cybersecurity knowledge and professional roles.", alternates: { canonical: "/courses/cissp-training" } };
export default function CISSPTraining() {
  const training = {
    slug: "cissp-training",

    title: "CISSP Training",

    heroImage: cisspImg,

    short: "CISSP Certification Preparation.",

    duration: "50 Hours",

    level: "Advanced",

    description: [
      "CISSP Training in India by Indian Cyber Security Solutions (ICSS) offers a comprehensive curriculum designed for aspiring cybersecurity professionals and experienced IT practitioners seeking to advance their careers. The program covers the eight CISSP security domains, including Security & Risk Management, Asset Security, Network Security, Identity and Access Management (IAM), Security Operations, Software Development Security, and other core concepts required for the CISSP certification. Through practical exercises, real-world scenarios, and expert guidance, participants gain the knowledge needed to design, implement, and manage enterprise security programs effectively.",

      "Jointly certified by the Indian Institute of Cyber Security, this CISSP Training program combines theoretical concepts with practical cybersecurity knowledge to prepare candidates for the CISSP certification examination. Designed by experienced cybersecurity professionals with over 15 years of industry expertise, the course equips learners with the skills required for leadership roles such as Information Security Manager, Security Consultant, Cybersecurity Architect, Governance Risk & Compliance (GRC) Specialist, and Chief Information Security Officer (CISO).",
    ],

    whyJoinTitle: "Why Join CISSP Training in India?",

    whyJoin: [
      {
        title: "Hands-On Experience",
        description:
          "Gain practical expertise in CISSP, threat analysis, and data security, ensuring you acquire the latest knowledge and skills to effectively counter cyber threats.",
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
          "Learn from industry-recognized trainers with extensive experience in CISSP and cybersecurity, ensuring a high-quality educational experience.",
      },
    ],

    modules: [
      "Security & Risk",
      "Asset Security",
      "Network Security",
      "IAM",
      "Software Security",
      "Exam Practice",
    ],
  };

  return (
    <main className="bg-background text-foreground">
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

  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-blue-950/60" />

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
      <section className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-3">
        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}
        <div className="space-y-16 lg:col-span-2">
          {/* =====================================================
              COURSE OVERVIEW
          ===================================================== */}
          <div>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Course overview
            </h2>

            <div className="mt-4 gold-divider" />

            <div className="mt-8 space-y-7">
              {training.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[15px] leading-9 text-slate-600 text-justify md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* =====================================================
              MODULES COVERED
          ===================================================== */}
          <div>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Modules covered
            </h2>

            <div className="mt-4 gold-divider" />

            <ol className="mt-8 space-y-4">
              {training.modules.map((module, index) => (
                <li
                  key={module}
                  className="flex min-h-[92px] items-center gap-6 rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:px-7"
                >
                  <span className="min-w-[28px] font-display text-xl text-gold md:text-2xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-base font-medium text-slate-900 md:text-lg">
                    {module}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* =====================================================
              WHY JOIN
          ===================================================== */}
          <div>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              {training.whyJoinTitle}
            </h2>

            <div className="mt-4 gold-divider" />

            <div className="mt-10 grid gap-7 md:grid-cols-2">
              {training.whyJoin.map((item, index) => (
                <div
                  key={index}
                  className="flex min-h-[330px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-10"
                >
                  <h3 className="font-display text-2xl leading-tight text-gold md:text-[26px]">
                    {item.title}
                  </h3>

                  <p className="mt-7 text-[15px] leading-9 text-slate-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              FEATURES
          ===================================================== */}
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              [
                "Live mentoring",
                "1:1 guidance from active cybersecurity practitioners.",
              ],
              [
                "Hands-on learning",
                "Practical cybersecurity scenarios and exercises.",
              ],
              [
                "Career support",
                "Guidance for cybersecurity roles and certification preparation.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-xl text-gold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =======================================================
            RIGHT ENQUIRY SIDEBAR
        ======================================================= */}
        <aside className="self-start lg:sticky lg:top-28">
          <EnquiryForm compact />
        </aside>
      </section>
    </main>
  );
}