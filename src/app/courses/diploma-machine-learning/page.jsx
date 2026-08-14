import Layout from "@/components/Layout";
// import { Link } from "react-router-dom";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

import diplomaMLImg from "@/assets/Diploma/machinelearning.webp";
import mlToolsImg from "@/assets/network-tools.webp";

const course = {
  title: "Diploma in Machine Learning",

  short: "Professional Diploma in Machine Learning.",

  duration: "12 Months",

  level: "Beginner",

  heroImage: diplomaMLImg,

  description: [
    "Diploma in Machine Learning and AI in India by ICSS offers an extensive curriculum tailored for aspiring cybersecurity professionals. Our program delves into crucial topics such as network penetration, security protocols, and vulnerability management. Through hands-on practical labs and real-world scenarios, participants gain invaluable experience in identifying and mitigating network vulnerabilities. Whether you are a beginner or an IT expert, our experienced instructors will guide you every step of the way. Join our Diploma in Machine Learning and AI in India to acquire the skills necessary to safeguard networks and excel in the ever-evolving field of cybersecurity.",

    "The Diploma in Machine Learning and AI in India by Indian Cyber Security Solutions, jointly certified by the Indian Institute of Cyber Security, is the perfect course for those aiming to excel in cybersecurity. This program provides comprehensive training in penetration testing tools and techniques, empowering participants to stay ahead of emerging cyber threats. With a focus on practical learning, students will gain the expertise to identify, analyze, and secure vulnerable networks effectively. Enroll in our Diploma in Machine Learning and AI in India today to embark on a rewarding career in cybersecurity and become a sought-after expert in network security.",
  ],

  programOverview: [
    "AWS training in India, crafted by seasoned penetration testers with over 15 years of industry experience, serves as a gateway to a thriving career in cybersecurity.",

    "This all-encompassing training reflects a profound understanding of network vulnerabilities and showcases your dedication to excellence, helping you stand out to potential employers.",

    "Indian Cyber Security Solutions provides a strong foundational framework, equipping you with the skills needed to excel as a penetration tester or cybersecurity specialist.",
  ],

  toolsImage: mlToolsImg,

  modules: [
    "Python",
    "Statistics",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "Projects",
  ],

  whyJoinTitle: "Why Join Diploma in Machine Learning Training?",

  whyJoin: [
    {
      title: "Hands-On Experience",
      description:
        "Gain practical expertise in AWS, threat analysis, and data security, ensuring you acquire the latest knowledge and skills to effectively counter cyber threats.",
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
        "Learn from industry-recognized trainers with extensive experience in NPT and cybersecurity, ensuring a high-quality educational experience.",
    },
  ],
};

export const metadata = { title: "Diploma in Machine Learning", description: "Machine learning diploma course content with practical learning topics.", alternates: { canonical: "/courses/diploma-machine-learning" } };
export default function DiplomaMachineLearning() {
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
            {/* <Link href="/contact" className="btn-primary"> */}
            <Link href="/contact" className="btn-primary">
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
              PROGRAM OVERVIEW
          ===================================================== */}
          <section>
            <h2 className="font-display text-3xl">
              Program Overview
            </h2>

            <div className="mt-3 gold-divider" />

            <div className="mt-6 space-y-4">
              {course.programOverview.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-lg
                    border
                    border-border
                    bg-card
                    p-5
                  "
                >
                  <span className="shrink-0 font-display text-2xl text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[14px] leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* =====================================================
              TOOLS IMAGE
          ===================================================== */}
          <section>
            <h2 className="font-display text-3xl">
              Machine Learning Tools
            </h2>

            <div className="mt-3 gold-divider" />

            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-white">
              <img
                src={course.toolsImage?.src || course.toolsImage}
                alt="Machine Learning Tools"
                loading="lazy"
                width={1200}
                height={700}
                className="h-auto w-full object-cover"
              />
            </div>
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
                "Real-world challenges in a practical learning environment.",
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