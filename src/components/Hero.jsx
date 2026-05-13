import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "ISO Consultancy & Training",
    title: "Engineering Trust through World-Class Standards",
    sub: "From ISO certification to cyber security training — Hawksberg International delivers measurable, audit-ready outcomes for enterprises across the globe.",
    cta: "Explore Services",
    to: "/services/iso-27001",
  },
  {
    eyebrow: "Cyber Security",
    title: "Defend, Detect, Respond — with Confidence",
    sub: "VAPT, ISO 27001 ISMS implementation, SOC 2 readiness and TISAX labelling — secured by a team with four decades of experience.",
    cta: "Cyber Security Services",
    to: "/services/iso-27001",
  },
  {
    eyebrow: "Industry-Ready Training",
    title: "Sharpen Skills. Future-Proof Careers.",
    sub: "Hands-on programs in Ethical Hacking, Bug Bounty, CCNA, Python, Java and Penetration Testing — by industry professionals.",
    cta: "View Trainings",
    to: "/training/ethical-hacking",
  },
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  function LogoCenter() {
    return (
      <div className="absolute inset-12 grid place-items-center z-20">
        <img
          src="/images/secondarylogo.png"
          alt="Hawksberg"
          className="w-[380px] md:w-[420px] object-contain 
          drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]
          brightness-65 contrast-115 opacity-80 
          mix-blend-soft-light blur-[0.3px]"
          style={{ transform: "translateY(-2%)" }}
        />
      </div>
    );
  }

  return (
    <section className="relative isolate overflow-hidden gradient-hero text-brand-foreground">
      
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative grid min-h-[88vh] items-center gap-8 py-16 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div key={i} className="reveal max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
            ★ {s.eyebrow}
          </span>

          <h1 className="mt-5 font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
            {s.title}
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-brand-foreground/80 md:text-base">
            {s.sub}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link to={s.to} className="btn-primary">
              {s.cta} →
            </Link>
            <Link to="/contact" className="btn-outline">
              Enquire Now
            </Link>
          </div>

          <div className="mt-8 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-gold" : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT DESIGN */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-square w-[520px]">

            {/* Rings */}
            <div className="absolute inset-0 rounded-full border border-gold/20" />
            <div className="absolute inset-5 rounded-full border border-gold/10" />
            <div className="absolute inset-10 rounded-full border border-gold/5" />

            <div className="absolute inset-16 rounded-full bg-transparent" />

            {/* Logo */}
            <LogoCenter />

            {/* Labels */}
            {["SOC 2", "ISO 27001", "ISO 9001", "TISAX"].map((b, idx) => {
              const angle = (idx / 4) * Math.PI * 2;
              const radius = 40;

              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              return (
                <span
                  key={b}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 
                  rounded-full border border-gold/60 
                  bg-gradient-to-br from-[#0b1f2a]/85 to-[#0a2a3a]/65 
                  px-6 py-2.5 
                  text-[14px] font-bold tracking-[0.15em] 
                  text-gold 
                  backdrop-blur-md 
                  shadow-[0_6px_25px_rgba(0,0,0,0.6)]
                  hover:scale-110 
                  hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]
                  transition-all duration-300"
                >
                  {b}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}