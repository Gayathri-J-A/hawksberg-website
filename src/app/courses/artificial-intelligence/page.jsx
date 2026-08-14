// import { Link } from "react-router-dom";
import Link from "next/link";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import aiImg from "@/assets/machinelearningcourses/artificialinteligence.webp";

const training = {
  slug: "artificial-intelligence",

  title: "Artificial Intelligence",

  heroImage: aiImg,

  short: "Artificial Intelligence Professional Training.",

  duration: "60 Hours",

  level: "Beginner",

  description: [
    "Artificial Intelligence Training in Chennai is one of the most powerful gateways for students and professionals aiming to build a future-ready career in technology. As AI continues to transform industries such as cybersecurity, healthcare, finance, automation, analytics, and robotics, the demand for skilled AI professionals continues to grow rapidly. Indian Cyber Security Solutions (ICSS) offers a comprehensive Artificial Intelligence Training program that combines industry-relevant knowledge with hands-on practical experience, helping learners develop the skills required for modern AI-driven careers.",

    "Our Artificial Intelligence Training in Chennai goes beyond theoretical concepts by focusing on practical implementation of AI fundamentals, machine learning algorithms, neural networks, computer vision, natural language processing, and real-world AI projects. Guided by experienced AI specialists and cybersecurity professionals, students gain practical exposure through live projects, expert mentorship, and industry-focused learning. With flexible learning options and placement assistance, this program prepares participants for careers as AI Engineers, Machine Learning Engineers, Data Scientists, AI Developers, and Intelligent Automation Specialists.",
  ],

  whyJoinTitle: "Why Choose ICSS for AI Training?",

  whyJoin: [
    {
      title: "Expert-Led Training by Industry Professionals",
      description:
        "Every session of the Artificial Intelligence Training is led by AI practitioners who work on real projects. Their industry experience helps learners gain practical insight into modern AI technologies.",
    },
    {
      title: "A Strong Focus on Practical Learning",
      description:
        "Students practice live coding, build AI models, work with real datasets, and solve real-time problems, making the learning experience practical and job-ready.",
    },
    {
      title: "Comprehensive Placement Guidance",
      description:
        "ICSS supports students through interview preparation, resume and portfolio building, HR grooming, internship support, and dedicated placement drives.",
    },
    {
      title: "Flexible Learning Formats",
      description:
        "Choose the learning mode that suits you best with offline classroom batches, live online batches, and hybrid training options.",
    },
    {
      title: "Real Projects That Build Your Portfolio",
      description:
        "Work on industry-focused AI projects including AI chatbot development, image recognition systems, fraud detection models, and recommendation engines to strengthen your portfolio.",
    },
  ],

  modules: [
    "AI Fundamentals",
    "Search Algorithms",
    "Neural Networks",
    "Computer Vision",
    "Natural Language Processing",
  ],
};

export const metadata = { title: "Artificial Intelligence Course", description: "Artificial intelligence training course content with practical learning topics.", alternates: { canonical: "/courses/artificial-intelligence" } };
export default function ArtificialIntelligence() {
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

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Grid Pattern */}
  <div className="absolute inset-0 grid-pattern opacity-10" />

  {/* Hero Content */}
  <div className="container-x relative z-10 flex h-full items-start pt-[75px] md:pt-[55px]">
    <div className="max-w-3xl">

      {/* Small Heading */}
      <p className="text-[10px] uppercase tracking-[0.28em] text-gold md:text-xs">
        Artificial Intelligence Training
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
          Get in Touch →
        </Link>
      </div>

    </div>
  </div>
</section>

      {/* =========================================================
          COURSE OVERVIEW
      ========================================================= */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              Course Overview
            </h2>

            <div className="mt-4 gold-divider" />

            <div className="mt-8 max-w-5xl space-y-7">
              {training.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="
                    text-justify
                    text-[15px]
                    leading-9
                    text-muted-foreground
                    md:text-base
                  "
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MODULES + ENQUIRY
      ========================================================= */}
      <section className="bg-muted/40 py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="space-y-14 lg:col-span-2">
            {/* Modules */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Modules Covered
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {training.modules.map((module, index) => (
                  <div
                    key={module}
                    className="
                      flex
                      min-h-[118px]
                      w-full
                      items-center
                      rounded-[14px]
                      border
                      border-[#d9dee5]
                      bg-white
                      px-6
                      py-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    <div className="flex w-full items-center gap-5">
                      {/* Module number */}
                      <span
                        className="
                          w-[30px]
                          shrink-0
                          font-display
                          text-[20px]
                          font-normal
                          leading-none
                          text-gold
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Module title */}
                      <span
                        className="
                          min-w-0
                          flex-1
                          text-[16px]
                          font-normal
                          leading-[1.6]
                          text-[#344a68]
                          md:text-[17px]
                        "
                      >
                        {module}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Details */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Course Details
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    bg-card
                    p-6
                  "
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Duration
                  </p>

                  <p className="mt-3 font-display text-2xl text-foreground">
                    {training.duration}
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-border
                    bg-card
                    p-6
                  "
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Level
                  </p>

                  <p className="mt-3 font-display text-2xl text-foreground">
                    {training.level}
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose ICSS */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                {training.whyJoinTitle}
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 space-y-5">
                {training.whyJoin.map((item, index) => (
                  <article
                    key={item.title}
                    className="
                      rounded-2xl
                      border
                      border-border
                      bg-card
                      p-7
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                    "
                  >
                    <div className="flex items-start gap-5">
                      {/* Number */}
                      <span
                        className="
                          shrink-0
                          font-display
                          text-3xl
                          leading-none
                          text-gold
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="font-display text-2xl leading-tight text-foreground">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-[15px] leading-8 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* What You Will Learn */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                What You Will Learn
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 space-y-5">
                {[
                  "Understand the fundamentals of Artificial Intelligence and its applications.",
                  "Develop a practical understanding of AI algorithms and problem-solving approaches.",
                  "Learn the fundamentals of neural networks and modern AI model development.",
                  "Understand how computer vision systems process and analyze visual information.",
                  "Explore Natural Language Processing and its applications in intelligent systems.",
                  "Gain practical exposure through real-world AI projects and datasets.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 shrink-0 text-2xl text-gold">
                      ✓
                    </span>

                    <p className="text-[15px] leading-8 text-slate-700 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Career Opportunities */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Career Opportunities
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "AI Engineer",
                  "Machine Learning Engineer",
                  "Data Scientist",
                  "AI Developer",
                  "Intelligent Automation Specialist",
                ].map((role) => (
                  <div
                    key={role}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      border
                      border-border
                      bg-card
                      p-5
                    "
                  >
                    <span
                      className="
                        grid
                        h-9
                        w-9
                        shrink-0
                        place-items-center
                        rounded-full
                        bg-gold/10
                        text-gold
                      "
                    >
                      ✓
                    </span>

                    <span className="text-sm font-medium text-foreground md:text-base">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Practical Projects */}
            <section>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">
                Practical AI Projects
              </h2>

              <div className="mt-4 gold-divider" />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {[
                  {
                    title: "AI Chatbot Development",
                    text: "Build practical chatbot solutions using artificial intelligence concepts.",
                  },
                  {
                    title: "Image Recognition Systems",
                    text: "Explore AI-based approaches for identifying and classifying visual information.",
                  },
                  {
                    title: "Fraud Detection Models",
                    text: "Understand how AI can be applied to analyze patterns and identify potentially fraudulent activity.",
                  },
                  {
                    title: "Recommendation Engines",
                    text: "Learn how intelligent recommendation systems can generate personalized results.",
                  },
                ].map((project) => (
                  <article
                    key={project.title}
                    className="
                      rounded-2xl
                      border
                      border-border
                      bg-card
                      p-7
                      shadow-sm
                    "
                  >
                    <h3 className="font-display text-2xl text-gold">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-8 text-muted-foreground">
                      {project.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section
              className="
                rounded-2xl
                bg-slate-950
                p-8
                text-white
                md:p-10
              "
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                Artificial Intelligence Training
              </p>

              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Build Your Future with Artificial Intelligence
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70">
                Develop practical AI skills, work on real-world projects and
                prepare yourself for modern AI-driven technology careers.
              </p>

              <div className="mt-7">
                <Link
                   href="/contact"
                  className="
                    inline-flex
                    rounded-full
                    bg-gold
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    text-slate-950
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  Get in Touch →
                </Link>
              </div>
            </section>
          </div>

          {/* =====================================================
              ENQUIRY SIDEBAR
          ===================================================== */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <EnquiryForm compact />
          </aside>
        </div>
      </section>
    </Layout>
  );
}