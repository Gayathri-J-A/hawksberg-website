import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// ✅ IMPORT LOGO FROM ASSETS
import secondaryLogo from "../assets/secondarylogo.png";

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

  // AUTO SLIDE
  useEffect(() => {
    const t = setInterval(() => {
      setI((v) => (v + 1) % slides.length);
    }, 6000);

    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section className="relative isolate overflow-hidden gradient-hero text-brand-foreground">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#3d2b08]/10 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#3d2b08]/10 blur-3xl" />

      {/* MAIN CONTAINER */}
      <div className="container-x relative grid min-h-[88vh] items-center gap-8 py-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div key={i} className="reveal max-w-xl">

          {/* EYEBROW */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7f5a16]/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#c18a22]">
            ★ {s.eyebrow}
          </span>

          {/* TITLE */}
          <h1 className="mt-5 font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
            {s.title}
          </h1>

          {/* SUBTEXT */}
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-brand-foreground/80 md:text-base">
            {s.sub}
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to={s.to} className="btn-primary">
              {s.cta} →
            </Link>

            <Link to="/contact" className="btn-outline">
              Enquire Now
            </Link>
          </div>

          {/* SLIDER DOTS */}
          <div className="mt-8 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === i
                    ? "w-8 bg-[#8a6118] shadow-[0_0_10px_rgba(138,97,24,0.5)]"
                    : "w-3 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE DESIGN */}
        <div className="relative hidden lg:block">

          <div className="relative mx-auto aspect-square w-[560px]">

            {/* 🔥 DARK YELLOW LINED CIRCLES */}
            <div className="absolute inset-0 rounded-full border-[2px] border-[#6e4d12]/60" />

            <div className="absolute inset-5 rounded-full border-[2px] border-[#6e4d12]/45" />

            <div className="absolute inset-10 rounded-full border border-[#6e4d12]/30" />

            {/* SOFT INNER DARK GLOW */}
            <div className="absolute inset-[18%] rounded-full bg-[#2b1d05]/10 blur-3xl" />

            {/* CENTER LOGO */}
            <div className="absolute inset-0 flex items-center justify-center z-20">

              <img
                src={secondaryLogo}
                alt="Hawksberg Logo"
                className="
                  w-[360px]
                  md:w-[430px]
                  object-contain
                  opacity-[0.76]
                  mix-blend-screen
                  saturate-[0.88]
                  contrast-[0.94]
                  brightness-[0.86]
                  transition-all
                  duration-500
                "
              />
            </div>

            {/* FLOATING LABELS */}
            {["SOC 2", "ISO 27001", "ISO 9001", "TISAX"].map((b, idx) => {

              const angle = (idx / 4) * Math.PI * 2;

              const radius = 40;

              const x = 50 + radius * Math.cos(angle);

              const y = 50 + radius * Math.sin(angle);

              return (
                <span
                  key={b}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    animationDelay: `${idx * 0.4}s`,
                  }}
                  className="
                    absolute
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#7a5615]/50
                    bg-gradient-to-br
                    from-[#0b1f2a]/95
                    via-[#0d2230]/90
                    to-[#07141f]/95
                    px-7
                    py-3
                    text-[14px]
                    font-bold
                    tracking-[0.18em]
                    text-[#c18a22]
                    backdrop-blur-md
                    shadow-[0_8px_30px_rgba(0,0,0,0.55)]
                    hover:scale-110
                    hover:border-[#c18a22]
                    hover:text-[#e8b34a]
                    hover:shadow-[0_0_20px_rgba(193,138,34,0.35)]
                    transition-all
                    duration-500
                    animate-[float_4s_ease-in-out_infinite]
                    cursor-pointer
                  "
                >
                  {/* INNER GLOW */}
                  <span className="absolute inset-0 rounded-full bg-[#6f4d12]/10 blur-md opacity-0 hover:opacity-100 transition duration-500" />

                  {/* TEXT */}
                  <span className="relative z-10">
                    {b}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}