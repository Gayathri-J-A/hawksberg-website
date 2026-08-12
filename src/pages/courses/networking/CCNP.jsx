import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import EnquiryForm from "@/components/EnquiryForm";

import ccnpImg from "@/assets/trainings/ccnp.webp";

const training = {
  slug: "ccnp",

  title: "CCNP Certification Training",

  heroImage: ccnpImg,

  short:
    "CCNP Routing & Switching certification training delivered by industry experts in Chennai.",

  duration: "70 hours",

  level: "Intermediate to Advanced",

  description: [
    "Get trained from the leading CCNP Certification Institute in Chennai. The CCNP Certification Course validates the ability to plan, implement, verify and troubleshoot local and wide-area enterprise networks and work collaboratively with specialists on advanced security, voice, wireless and video solutions.",

    "Those who achieve CCNP Routing and Switching have demonstrated the skills required in enterprise roles such as network engineer, support engineer, systems engineer or network technician. The routing and switching protocol knowledge from this certification provides a lasting foundation — these skills are equally relevant in today's physical networks and tomorrow's virtualised network functions.",

    "This course is appropriate for those with at least one year of networking experience, ready to advance their skills and work independently on complex network solutions. It validates the ability to design, apply, authenticate and troubleshoot local and wide-area enterprise networks.",

    "CCNP Routing and Switching is a widely respected IT certification that adds value and helps networking professionals advance their careers. According to Robert Half Technology, networking professionals with Cisco networking administration skills can expect to earn a 9% premium above average industry salaries. After this course you can succeed in enterprise-level networking roles such as network administrator and network engineer.",
  ],

  modules: [
    "Advanced Routing — OSPF, EIGRP, route redistribution & policy-based routing",
    "BGP & WAN fundamentals, path attributes and WAN technologies",
    "Enterprise Design — campus, data centre and branch network architecture",
    "Network Security — ACLs, VPNs, 802.1X, firewall integration",
    "QoS — Quality of Service models, classification and queuing",
    "Automation — Python, REST APIs, Ansible, network programmability",
  ],
};

const learningAreas = [
  {
    title: "Advanced Routing",
    description:
      "Develop advanced routing knowledge covering OSPF, EIGRP, route redistribution and policy-based routing for enterprise network environments.",
  },
  {
    title: "BGP & WAN Technologies",
    description:
      "Understand BGP fundamentals, path attributes and WAN technologies used to connect and manage large enterprise networks.",
  },
  {
    title: "Enterprise Network Design",
    description:
      "Learn how campus, data centre and branch networks are designed and connected to support scalable enterprise infrastructure.",
  },
  {
    title: "Network Security",
    description:
      "Build practical knowledge of ACLs, VPNs, 802.1X and firewall integration for protecting enterprise network infrastructure.",
  },
  {
    title: "Quality of Service",
    description:
      "Understand QoS models, traffic classification and queuing concepts used to maintain reliable network performance.",
  },
  {
    title: "Network Automation",
    description:
      "Explore Python, REST APIs, Ansible and network programmability concepts for modern automated network management.",
  },
];

const careerRoles = [
  "Network Engineer",
  "Network Administrator",
  "Network Support Engineer",
  "Systems Engineer",
  "Network Security Engineer",
  "Network Technician",
];

const technologies = [
  "OSPF",
  "EIGRP",
  "BGP",
  "WAN",
  "ACL",
  "VPN",
  "802.1X",
  "QoS",
  "Python",
  "REST APIs",
  "Ansible",
  "Network Automation",
];

export default function CCNP() {
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
      backgroundImage: `url(${training.heroImage})`,
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
        Networking &amp; Cisco Certification
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
          to="/contact"
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
      <section className="bg-background py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* ===================================================
                LEFT CONTENT
            =================================================== */}
            <main className="space-y-16 lg:col-span-2">

              {/* COURSE OVERVIEW */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Course Overview
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-7">
                  {training.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="
                        text-[15px]
                        leading-9
                        text-slate-700
                        text-justify
                        md:text-base
                      "
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* =================================================
                  MODULES
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Modules Covered
                </h2>

                <div className="mt-4 gold-divider" />

                <ol className="mt-8 space-y-4">
                  {training.modules.map((module, index) => (
                    <li
                      key={module}
                      className="
                        flex
                        min-h-[100px]
                        items-center
                        gap-6
                        rounded-xl
                        border
                        border-slate-200
                        bg-card
                        px-6
                        py-5
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-md
                        md:px-7
                      "
                    >
                      <span
                        className="
                          min-w-[38px]
                          font-display
                          text-xl
                          text-gold
                          md:text-2xl
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          text-base
                          font-medium
                          leading-7
                          text-slate-900
                          md:text-lg
                        "
                      >
                        {module}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* =================================================
                  WHAT YOU WILL LEARN
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  What You Will Learn
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  {learningAreas.map((item, index) => (
                    <article
                      key={item.title}
                      className="
                        flex
                        min-h-[270px]
                        flex-col
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-8
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-md
                        md:p-9
                      "
                    >
                      <div className="flex items-start gap-5">
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

                        <h3
                          className="
                            font-display
                            text-[24px]
                            leading-tight
                            text-gold
                          "
                        >
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-7 text-[14px] leading-8 text-slate-700">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* =================================================
                  TECHNOLOGIES
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Technologies Covered
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {technologies.map((technology) => (
                    <div
                      key={technology}
                      className="
                        rounded-xl
                        border
                        border-slate-200
                        bg-card
                        px-5
                        py-5
                        text-center
                        font-medium
                        text-slate-800
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-md
                      "
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </section>

              {/* =================================================
                  CAREER OPPORTUNITIES
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Career Opportunities
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {careerRoles.map((role) => (
                    <div
                      key={role}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-xl
                        border
                        border-slate-200
                        bg-card
                        p-5
                        shadow-sm
                      "
                    >
                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-gold/10
                          text-gold
                        "
                      >
                        ✓
                      </span>

                      <span className="font-medium text-slate-800">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* =================================================
                  WHO SHOULD JOIN
              ================================================= */}
              <section>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Who Should Join This Course?
                </h2>

                <div className="mt-4 gold-divider" />

                <div className="mt-8 space-y-4">
                  {[
                    "Networking professionals with at least one year of networking experience.",
                    "Network administrators looking to advance into enterprise networking roles.",
                    "Network engineers who want to strengthen advanced routing and switching skills.",
                    "IT professionals preparing for advanced Cisco networking certification.",
                    "Professionals who want practical knowledge of enterprise network design and troubleshooting.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-xl
                        border
                        border-slate-200
                        bg-card
                        p-5
                      "
                    >
                      <span className="mt-1 text-lg text-gold">✓</span>

                      <p className="text-sm leading-7 text-slate-700 md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* =================================================
                  COURSE DETAILS
              ================================================= */}
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
                      border-slate-200
                      bg-card
                      p-6
                    "
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Course
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      CCNP Certification Training
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-slate-200
                      bg-card
                      p-6
                    "
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Duration
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      {training.duration}
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-slate-200
                      bg-card
                      p-6
                    "
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Level
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      {training.level}
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-slate-200
                      bg-card
                      p-6
                    "
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Training Focus
                    </p>

                    <p className="mt-2 text-lg font-medium text-slate-900">
                      Enterprise Networking
                    </p>
                  </div>
                </div>
              </section>

              {/* =================================================
                  FINAL CTA
              ================================================= */}
              <section
                className="
                  rounded-2xl
                  bg-slate-950
                  p-8
                  text-white
                  md:p-10
                "
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  CCNP Certification Training
                </p>

                <h2 className="mt-4 font-display text-3xl md:text-4xl">
                  Advance Your Networking Career
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">
                  Build advanced enterprise networking skills in routing,
                  switching, security, QoS and network automation through
                  structured CCNP training.
                </p>

                <div className="mt-7">
                  <Link
                    to="/contact"
                    className="
                      inline-flex
                      rounded-full
                      bg-gold
                      px-7
                      py-3.5
                      text-sm
                      font-semibold
                      text-slate-950
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                  >
                    Get in Touch →
                  </Link>
                </div>
              </section>
            </main>

            {/* ===================================================
                RIGHT SIDEBAR — ENQUIRY FORM
            =================================================== */}
            <aside
              className="
                mt-12
                w-full
                lg:sticky
                lg:top-28
                lg:mt-0
                lg:self-start
              "
            >
              <div className="w-full max-w-[400px] lg:ml-auto">
                <EnquiryForm
                  compact
                  sourcePage="ccnp"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}