import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import EnquiryForm from "@/components/EnquiryForm";

import bugBountyImg from "@/assets/trainings/bug-bounty.webp";

const course = {
  title: "Bug Bounty Training",

  short:
    "Learn to find, validate and responsibly disclose vulnerabilities on real bug bounty platforms.",

  duration: "45 hours",

  level: "Intermediate",

  heroImage: bugBountyImg,

  description: [
    "Bug Bounty Training in Chennai by Hawksberg International Certification Associate Partner with Indian Cyber Security Solutions is a certification and guidance program for individuals who are willing to flourish in the field of cyber security. ICSS has established itself as a renowned institution for cyber security management by providing extraordinary services and education to its clients.",

    "Hawksberg International Certification has introduced the Bug Bounty Course in Chennai — currently one of the highest in demand by cyber security professionals. ICSS has a pool of professional certified ethical hackers working as security analysts in different organisations and is a reliable partner of HackerU and EC-Council.",

    "Bug Bounty is a program organised by multinationals and tech giants where individual cyber security professionals participate and report vulnerabilities (bugs) to an organisation in return for high rewards. Reported issues include security exploits, hardware flaws, vulnerabilities and process issues.",

    "This training is completely focused on making an individual fully capable of reporting such issues within tight time limits — so when they face the competition, they can handle the pressure and come out with flying colours. We are proud to be a highly-rated EC-Council training partner and also provide practical, in-depth offensive hacking classes from real penetration testers.",
  ],

  modules: [
    "Bug bounty platforms & methodology",
    "Recon and asset discovery",
    "OWASP Top 10 in depth",
    "Business logic & API testing",
    "Writing winning reports",
  ],
};

export default function BugBounty() {
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
      backgroundImage: `url(${course.heroImage})`,
    }}
  />

  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-blue-950/55" />

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
        {course.title}
      </h1>

      {/* Divider */}
      <div className="mt-4 gold-divider" />

      {/* Description */}
      <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 md:text-base md:leading-7">
        {course.short}
      </p>

      {/* Duration + Level */}
      <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.15em] md:text-xs md:tracking-widest">

        <span className="rounded-full border border-gold/60 px-3 py-1.5 text-gold md:px-4 md:py-1.5">
          Duration · {course.duration}
        </span>

        <span className="rounded-full border border-gold/60 px-3 py-1.5 text-gold md:px-4 md:py-1.5">
          Level · {course.level}
        </span>

      </div>

      {/* CTA */}
      <div className="mt-5">
        <Link to="/contact" className="btn-primary">
          Enroll / Enquire →
        </Link>
      </div>

    </div>
  </div>
</section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="container-x grid gap-12 py-20 lg:grid-cols-3">

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}
        <div className="space-y-10 lg:col-span-2">

          {/* =====================================================
              COURSE OVERVIEW
          ===================================================== */}
          <section>
            <h2 className="font-display text-3xl">
              Course overview
            </h2>

            <div className="mt-3 gold-divider" />

            {course.description.map((paragraph, index) => (
              <p
                key={index}
                className="mt-5 text-[15px] leading-9 text-slate-600 text-justify"
              >
                {paragraph}
              </p>
            ))}
          </section>

          {/* =====================================================
              MODULES COVERED
          ===================================================== */}
          <section>
            <h2 className="font-display text-3xl">
              Modules covered
            </h2>

            <div className="mt-3 gold-divider" />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {course.modules.map((module, index) => (
                <div
                  key={module}
                  className="
                    flex
                    min-h-[90px]
                    items-center
                    gap-4
                    rounded-lg
                    border
                    border-border
                    bg-card
                    px-4
                    py-3
                  "
                >
                  <span className="shrink-0 font-display text-2xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[14px] leading-6 text-slate-700">
                    {module}
                  </span>
                </div>
              ))}

            </div>
          </section>

          {/* =====================================================
              COURSE FEATURES
          ===================================================== */}
          <section className="grid gap-6 sm:grid-cols-3">

            {[
              [
                "Practical training",
                "Hands-on learning focused on real bug bounty methodologies.",
              ],
              [
                "Real-world testing",
                "Learn reconnaissance, vulnerability discovery and responsible reporting.",
              ],
              [
                "Career support",
                "Build practical skills for offensive security and bug bounty careers.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-display text-xl text-gold">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}

          </section>

        </div>

        {/* =======================================================
            RIGHT SIDEBAR — ENQUIRY FORM
        ======================================================= */}
        <aside className="self-start lg:sticky lg:top-28">
          <EnquiryForm compact />
        </aside>

      </section>
    </Layout>
  );
}