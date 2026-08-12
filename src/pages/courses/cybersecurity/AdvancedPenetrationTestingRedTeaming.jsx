import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import EnquiryForm from "@/components/EnquiryForm";

import cyberProfessionalImg from "@/assets/cybersecurity/oscpredtraining.webp";

const course = {
  title: "Advanced Penetration Testing & Red Teaming",

  short: "OSCP Skill Level Advanced Red Team Program.",

  duration: "90 Hours",

  level: "Expert",

  heroImage: cyberProfessionalImg,

  description: [
    "Advanced Penetration Testing & Red Teaming Course (OSCP Skill Level) in India by Indian Cyber Security Solutions (ICSS) offers a comprehensive curriculum designed for aspiring cybersecurity professionals and penetration testers who want to master advanced offensive security techniques. The program covers enterprise network penetration testing, Active Directory exploitation, privilege escalation, lateral movement, pivoting, red team operations, vulnerability assessment, and advanced attack methodologies. Through intensive hands-on labs and real-world attack simulations, participants develop the practical skills required to assess and secure enterprise environments against sophisticated cyber threats.",

    "Jointly certified by the Indian Institute of Cyber Security, this Advanced Penetration Testing & Red Teaming program is designed by experienced penetration testers with over 15 years of industry expertise. The course emphasizes practical learning using industry-standard tools, realistic lab environments, and advanced offensive security techniques that align with OSCP-level skills. Upon successful completion, participants will be prepared for roles such as Penetration Tester, Red Team Operator, Offensive Security Consultant, Ethical Hacker, and Cybersecurity Specialist, providing a strong foundation for a successful career in offensive cybersecurity.",
  ],

  modules: [
    "Advanced Exploitation",
    "Privilege Escalation",
    "Pivoting",
    "Active Directory",
    "Red Team Operations",
    "Final Lab",
  ],

  whyJoinTitle:
    "Why Join Advanced Penetration Testing & Red Teaming Course (OSCP Skill Level) in India?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "You'll receive in-depth training in subjects like Advanced Penetration Testing & Red Teaming Course (OSCP Skill Level), threat analysis and data security to make sure you have the most recent information and abilities needed to effectively resist cyber threats.",
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
        "Our educators are acknowledged authorities in their industries with a wealth of experience in Advanced Penetration Testing & Red Teaming Course (OSCP Skill Level) and cybersecurity, ensuring that you get the best possible education.",
    },
  ],
};

export default function AdvancedPenetrationTestingRedTeaming() {
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
                "1:1 guidance from experienced cybersecurity professionals.",
              ],
              [
                "Hands-on labs",
                "Real-world offensive security and red team challenges.",
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