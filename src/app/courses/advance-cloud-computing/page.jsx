import Layout from "@/components/Layout";
// import { Link } from "react-router-dom";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

import advanceCloudImg from "@/assets/cloudcomputing/AdvanceCloud.webp";

const course = {
  title: "Advance Cloud Computing Course",

  short: "Advanced Cloud Computing Program.",

  duration: "70 Hours",

  level: "Advanced",

  heroImage: advanceCloudImg,

  description: [
    "Best Cloud Computing Course in India by Indian Cyber Security Solutions (ICSS) provides an industry-focused curriculum designed to prepare learners for modern cloud technologies and enterprise infrastructure management. The program covers Amazon Web Services (AWS), Microsoft Azure, Docker, Kubernetes, DevSecOps, cloud architecture, automation, and multi-cloud deployment strategies. Through extensive hands-on practical labs and real-world cloud projects, participants develop the technical expertise required to design, deploy, and secure enterprise cloud environments.",

    "This Advanced Cloud Computing program combines theoretical knowledge with practical implementation using industry-standard cloud platforms and DevOps tools. Guided by experienced cloud and cybersecurity professionals, students work on enterprise-grade cloud projects while building the skills required for careers such as Cloud Engineer, Cloud Solutions Architect, DevOps Engineer, Site Reliability Engineer (SRE), Cloud Security Engineer, and Infrastructure Engineer.",
  ],

  modules: [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "DevSecOps",
    "Projects",
  ],

  whyJoinTitle: "Why Join Cloud Computing Course in India?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "Gain hands-on experience by working in simulated cyber threat scenarios and interactive labs. Learn from experienced cybersecurity professionals with real-world expertise in incident response and threat detection.",
    },

    {
      title: "Exclusive Industry Insights",
      description:
        "Course topics are aligned with current security operations, vulnerability management, and global industry standards. Earn the prestigious Cloud Computing certification, a globally respected validation of your skills.",
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

export const metadata = { title: "Advance Cloud Computing Course", description: "Advance cloud computing course content covering cloud technologies and enterprise infrastructure topics.", alternates: { canonical: "/courses/advance-cloud-computing" } };
export default function AdvanceCloudComputing() {
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
        <Link href="/contact" className="btn-primary">
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
            <h2 className="font-display text-3xl">Course overview</h2>

            <div className="mt-3 gold-divider" />

            {course.description.map((paragraph, index) => (
              <p
                key={index}
                className="mt-5 text-justify text-[15px] leading-9 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </section>

          {/* =====================================================
              MODULES COVERED
          ===================================================== */}
          <section>
            <h2 className="font-display text-3xl">Modules covered</h2>

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
                "1:1 guidance from experienced cloud and cybersecurity professionals.",
              ],
              [
                "Hands-on labs",
                "Real-world cloud, DevOps and infrastructure challenges.",
              ],
              [
                "Career support",
                "Resume reviews and interview preparation.",
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