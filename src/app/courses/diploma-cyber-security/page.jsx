import Layout from "@/components/Layout";
// import { Link } from "react-router-dom";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

import diplomaCyberSecurityImg from "@/assets/Diploma/cybersecuritycourse.webp";

const course = {
  title: "Diploma in Cyber Security",

  short: "Professional Diploma in Cyber Security.",

  duration: "12 Months",

  level: "Beginner",

  heroImage: diplomaCyberSecurityImg,

  description: [
    "Diploma in Cyber Security Training in Chennai by Indian Cyber Security Solutions offers a comprehensive curriculum designed to equip students with essential cybersecurity skills. This program covers critical areas such as network security, ethical hacking, incident response, cryptography, and much more. The training combines theoretical knowledge with practical, hands-on experience, ensuring students are well-prepared to tackle real-world cyber threats. With access to industry-leading tools and expert mentorship, students can confidently advance their careers in cybersecurity. Whether you are a beginner or looking to enhance your existing skills, the Diploma in Cyber Security Training in Chennai is designed to meet your needs and help you achieve your professional goals in the cybersecurity domain. This course not only enhances your technical abilities but also boosts your confidence to face cybersecurity challenges effectively. Enroll today to take the next step in your cybersecurity career and become a proficient cybersecurity professional. The program ensures you are industry-ready with the skills that employers demand.",

    "Diploma in Cyber Security Training in Chennai focuses on core issues of cloud and network security. Beginning with the basics and advancing to complex security problems faced by industry professionals, this training addresses the crucial aspects of cybersecurity. Cybersecurity involves protecting access to files and directories in a computer network against hacking, misuse, and unauthorized changes. With the employment of information security analysts projected to grow by 18 percent from 2016 to 2024, this training will provide you with in-depth knowledge on how to protect networks, websites, and critical IT assets of an organization. This training will equip you to safeguard directories in a computer network against unauthorized access and alterations. Join us for the course and build your career in this dynamic field. ICSS's Diploma in Cyber Security Training in Chennai is in high demand as it imparts best practices against various cyber attacks. The program is designed to provide students with the essential knowledge and skills to protect computer systems and networks from cyber threats.",
  ],

  modules: [
    "Cyber Security Fundamentals",
    "Operating Systems",
    "Networking Basics",
    "Linux Administration",
    "Web Security",
    "Network Security",
    "Cloud Security",
    "Final Project",
  ],

  whyJoinTitle: "Why Join Diploma in Cyber Security Training?",

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

export const metadata = { title: "Diploma in Cyber Security", description: "Cyber security diploma course content covering practical security skills and concepts.", alternates: { canonical: "/courses/diploma-cyber-security" } };
export default function DiplomaCyberSecurity() {
  return (
    <Layout>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden py-20 text-white">

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
        <div className="container-x relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Cyber Security & IT Training
          </p>

          <h1
            className="mt-3 text-5xl md:text-6xl"
            style={{
              fontFamily: "Calibri, sans-serif",
            }}
          >
            {course.title}
          </h1>

          <div className="mt-4 gold-divider" />

          <p className="mt-6 max-w-2xl text-white/80">
            {course.short}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest">
            <span className="rounded-full border border-gold/40 px-4 py-1 text-gold">
              Duration · {course.duration}
            </span>

            <span className="rounded-full border border-gold/40 px-4 py-1 text-gold">
              Level · {course.level}
            </span>
          </div>

          <div className="mt-8">
            <Link
  href="/contact"
  className="btn-primary"
>
              Enroll / Enquire →
            </Link>
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
                "1:1 guidance from active practitioners.",
              ],
              [
                "Hands-on labs",
                "Real-world cybersecurity challenges in a sandbox.",
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