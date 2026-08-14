import Layout from "@/components/Layout";
// import { Link } from "react-router-dom";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

import azureImg from "@/assets/cloudcomputing/azure.webp";

const course = {
  title: "Microsoft Azure Training",

  short: "Microsoft Azure Cloud Training.",

  duration: "40 Hours",

  level: "Beginner",

  heroImage: azureImg,

  description: [
    "Best Microsoft Azure Training in Chennai by Indian Cyber Security Solutions (ICSS) provides a comprehensive curriculum designed to help students and professionals master Microsoft Azure cloud technologies. The program covers Azure fundamentals, Virtual Machines, Azure Storage, Networking, Identity & Access Management, Azure Security, and cloud infrastructure management. Through practical hands-on labs and real-world projects, learners gain the expertise required to deploy, manage, and secure cloud-based enterprise solutions.",

    "This training goes beyond theoretical learning by focusing on practical cloud implementation, infrastructure deployment, Azure security, and enterprise cloud administration using industry best practices. Guided by experienced cloud professionals, students work on real-world cloud projects while preparing for careers such as Azure Cloud Engineer, Cloud Administrator, Cloud Support Engineer, DevOps Engineer, and Solutions Architect.",
  ],

  modules: [
    "Azure Portal",
    "Virtual Machines",
    "Storage",
    "Networking",
    "Azure Security",
    "Projects",
  ],

  whyJoinTitle: "Why Join Azure Training?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "Gain hands-on experience by working in simulated cyber threat scenarios and interactive labs. Learn from experienced cybersecurity professionals with real-world expertise in incident response and threat detection.",
    },

    {
      title: "Exclusive Industry Insights",
      description:
        "Course topics are aligned with current security operations, vulnerability management, and global industry standards. Earn the prestigious Azure certification, a globally respected validation of your skills.",
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

export const metadata = { title: "Microsoft Azure Training", description: "Microsoft Azure training course content covering foundational cloud learning topics.", alternates: { canonical: "/courses/microsoft-azure-training" } };
export default function MicrosoftAzureTraining() {
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
        <Link href="/contact"className="btn-primary">
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
                "1:1 guidance from experienced cloud and cybersecurity professionals.",
              ],
              [
                "Hands-on labs",
                "Real-world Azure cloud deployment and infrastructure challenges.",
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