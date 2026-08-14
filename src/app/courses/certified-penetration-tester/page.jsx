import Layout from "@/components/Layout";
// import { Link } from "react-router-dom";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

import certifiedPentestImg from "@/assets/cybersecurity/cyber-certified-penetration.webp";

const course = {
  title: "Certified Penetration Tester",

  short: "Industry-focused Certified Penetration Tester Program.",

  duration: "75 Hours",

  level: "Advanced",

  heroImage: certifiedPentestImg,

  description: [
    "Certified Penetration Tester Training in India by Indian Cyber Security Solutions (ICSS) offers a comprehensive curriculum designed for aspiring cybersecurity professionals. The program covers essential penetration testing concepts including network penetration testing, security protocols, vulnerability assessment, exploitation techniques, Active Directory security, web application penetration testing, and professional reporting. Through hands-on practical labs and real-world attack simulations, participants gain valuable experience in identifying, analyzing, and mitigating security vulnerabilities across enterprise environments. Whether you are a beginner or an experienced IT professional, our expert instructors provide step-by-step guidance to help you master penetration testing methodologies and industry best practices.",

    "Jointly certified by the Indian Institute of Cyber Security, the Certified Penetration Tester program provides in-depth training on industry-standard penetration testing tools, techniques, and frameworks. With a strong emphasis on practical learning, students develop the expertise to assess, exploit, secure, and document vulnerabilities effectively. Upon successful completion, participants will be prepared for roles such as Penetration Tester, Ethical Hacker, Security Analyst, Vulnerability Assessment Engineer, and Cybersecurity Consultant, enabling them to build a successful career in offensive cybersecurity.",
  ],

  modules: [
    "Reconnaissance",
    "Scanning",
    "Exploitation",
    "Active Directory",
    "Web Pentesting",
    "Report Writing",
  ],

  whyJoinTitle:
    "Why Join Certified Penetration Tester Training in India?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "Gain practical expertise in Certified Penetration Tester, threat analysis, and data security, ensuring you acquire the latest knowledge and skills to effectively counter cyber threats.",
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
        "Learn from industry-recognized trainers with extensive experience in Certified Penetration Tester and cybersecurity, ensuring a high-quality educational experience.",
    },
  ],
};

export const metadata = { title: "Certified Penetration Tester Course", description: "Certified penetration tester course content with practical security assessment topics.", alternates: { canonical: "/courses/certified-penetration-tester" } };
export default function CertifiedPenetrationTester() {
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
      backgroundImage: `url(${course.heroImage?.src || course.heroImage})`,
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
        <Link href="/contact"
 className="btn-primary">
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
              WHY JOIN
          ===================================================== */}
          <section>

            <h2 className="font-display text-3xl">
              {course.whyJoinTitle}
            </h2>

            <div className="mt-3 gold-divider" />

            <div className="mt-10 grid gap-8 md:grid-cols-2">

              {course.whyJoin.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    flex-col
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-10
                    shadow-sm
                    transition-all
                    duration-300
                    hover:shadow-md
                  "
                >
                  <h3 className="font-display text-[25px] leading-tight text-gold">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[14px] leading-10 text-slate-700">
                    {item.description}
                  </p>
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
                "Live mentoring",
                "1:1 guidance from experienced penetration testing professionals.",
              ],
              [
                "Hands-on labs",
                "Real-world penetration testing and vulnerability assessment challenges.",
              ],
              [
                "Career support",
                "Resume reviews and interview preparation for cybersecurity roles.",
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