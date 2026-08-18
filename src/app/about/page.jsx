"use client";

import Layout from "@/components/Layout";
import ValuesStrip from "@/components/ValuesStrip";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import aboutUsBg from "@/assets/aboutus.webp";
import aboutPageImg from "@/assets/aboutpage.webp";
import useReveal from "@/hooks/useReveal";

const aboutStats = [
  { value: " 10+", label: "Years of combined expertise" },
  { value: "500+", label: "Projects delivered" },
  { value: "20+", label: "Countries served" },
  { value: "98%", label: "Client retention" },
];

function AboutPageSection() {
  const [imgRef, imgShown] = useReveal();
  const [textRef, textShown] = useReveal();

  return (
    <section className="container-x py-20 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div
          ref={imgRef}
          className={`relative reveal-on-scroll reveal-left ${imgShown ? "is-visible" : ""}`}
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl gradient-gold opacity-20 blur-2xl float-soft" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-1 shadow-elegant">
            <div className="relative overflow-hidden rounded-xl h-[620px] lg:h-[770px]">
              <img
                src={aboutPageImg.src}
                alt="Hawksberg International ISO consultancy and training team"
                loading="eager"
                decoding="async"
                width={1024}
                height={1280}
                className="h-full w-full object-cover object-center transition-transform duration-[1200ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-brand-foreground">
                <span className="text-xs uppercase tracking-[0.3em] text-gold">
                  Professional guidance
                </span>
                <p className="mt-3 max-w-sm text-sm text-white/80">
                  Practical solutions built around global standards and local business needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={textRef}
          className={`flex flex-col justify-center reveal-on-scroll reveal-right ${
            textShown ? "is-visible" : ""
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold">About</p>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
            Hawksberg International <span className="text-gold">Certification</span>
          </h2>
          <div className="mt-4 gold-divider" />
          <p className="mt-6 text-muted-foreground">
            Hawksberg International Certification helps organizations strengthen performance through expert ISO consultancy, professional training, and practical management system guidance. We translate international standards into structured business processes that support compliance, certification readiness, and measurable operational improvement.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our experienced professionals work with leadership and teams to build lasting awareness, accountability, and confidence in the way management systems are implemented and maintained. Through clear methods and hands-on support, we help organizations develop a culture of continual improvement across their operations.
          </p>
          <p className="mt-4 text-muted-foreground">
            With global standards at the core and practical business application in focus, we tailor our consultancy and training solutions to the needs of different industries. This flexible approach enables us to address complex requirements, guide certification preparation, and deliver solutions that are relevant to each organization’s goals.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border bg-card p-4 text-center hover-lift">
                <p className="font-display text-3xl text-gold">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contact" className="btn-primary">
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <Layout>
      {/* <section className="relative overflow-hidden gradient-hero py-20 text-brand-foreground"> */}
      <section
  className="relative overflow-hidden bg-cover bg-center py-20 text-brand-foreground"
  style={{
    backgroundImage: `url(${aboutUsBg?.src || aboutUsBg})`,
  }}
>
  <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container-x relative">
          {/* <p className="text-xs uppercase tracking-[0.3em] text-gold">About Us</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Engineering trust through{" "}
            <span className="text-gold">global standards</span>
          </h1> */}
          <h1 className="mt-3 font-display text-5xl md:text-6xl text-gold">
           About Us 
          </h1>
          <div className="mt-4 gold-divider" />
          <p className="mt-6 max-w-2xl text-brand-foreground/80">
            Hawksberg International is a global ISO consultancy and cyber
            security training firm with deep expertise across regulated
            industries.
          </p>
        </div>
      </section>
      <AboutPageSection />
      <ValuesStrip />
      <section className="container-x py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Importance
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Why ISO certification matters
          </h2>
          <div className="mx-auto mt-4 gold-divider" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Standardised processes", "All processes are evaluated and standardised across the organisation."],
            ["Faster issue detection", "Issues are detected quickly and resolved with traceability."],
            ["Customer trust", "International recognition that strengthens credibility with customers."],
            ["Continuous improvement", "Embeds a culture of measurable, continual improvement."],
          ].map(([t, d]) => (
            <div key={t} className="hover-lift rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-xl text-gold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <Clients />
      <Testimonials />
    </Layout>
  );
}
