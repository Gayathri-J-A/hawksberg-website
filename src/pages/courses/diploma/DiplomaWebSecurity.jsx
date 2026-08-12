import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import EnquiryForm from "@/components/EnquiryForm";

import diplomaWebImg from "@/assets/Diploma/websecurity.webp";

const course = {
  title: "Diploma in Web Security",

  short: "Professional Diploma in Web Security.",

  duration: "12 Months",

  level: "Beginner",

  heroImage: diplomaWebImg,

  description: [
    "Diploma in Web Application Security in India at Indian Cyber Security Solutions (ICSS) provides you with industry-ready expertise to tackle the dynamic challenges of the cybersecurity world. ICSS is renowned for safeguarding India's cyber safety and securing critical digital platforms through advanced cybersecurity practices. This comprehensive diploma covers secure coding practices, encryption, ethical hacking, network security, Web Application Penetration Testing (WAPT), Network Penetration Testing (NPT), and real-world cybersecurity projects, ensuring a strong foundation in both theoretical and practical aspects of web application security.",

    "The program is delivered by experienced cybersecurity professionals and ethical hackers with extensive industry expertise. Students gain hands-on experience through practical labs, live projects, and real-world scenarios while learning to identify, assess, and mitigate modern web application vulnerabilities. With industry-focused training and career guidance, this diploma prepares you for roles such as Web Application Security Analyst, Penetration Tester, Security Consultant, and Cybersecurity Engineer.",
  ],

  modules: [
    "HTML",
    "JavaScript",
    "OWASP",
    "XSS",
    "SQL Injection",
    "Authentication",
  ],

  whyJoinTitle: "Why Join Diploma in Web Application Security?",

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

export default function DiplomaWebSecurity() {
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
            backgroundImage: `url(${course.heroImage})`,
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
            <Link to="/contact" className="btn-primary">
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
                "Real-world web security challenges in a practical environment.",
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