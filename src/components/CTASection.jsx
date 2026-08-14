// import { Link } from "react-router-dom";
"use client";
import ctaImage from "@/assets/cta-office.webp"; // <-- unga image name

export default function CTASection() {
  return (
    // <section className="relative px-4 md:px-8 lg:px-12 py-10 bg-white">
    // <section className="relative py-10 bg-white">
    <section className="relative pt-10 pb-0 bg-white">
      {/* <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] h-[360px] md:h-[520px]"> */}
      <div className="relative overflow-hidden w-full h-[360px] md:h-[450px]">
        {/* Background */}
        <img 
  src={ctaImage.src}
  alt="Hawksberg International"
  className="absolute inset-0 h-full w-full object-cover"
/>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h2
           className="max-w-4xl text-white font-semibold
           text-[28px] md:text-[42px] lg:text-[48px]
           leading-[1.2]"
            style={{
              fontFamily:
                "Copperplate, 'Copperplate Gothic Light', serif",
            }}
          >
            Accelerate Your Technology Journey
            <br />
            With Hawksberg International
          </h2>

          {/* <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full
                       bg-[#0F7A83]
                       hover:bg-[#0b6971]
                       px-8 py-4
                       text-white
                       font-semibold
                       transition-all duration-300
                       hover:scale-105"
          >
            CONNECT WITH US
            <span className="text-xl">→</span>
          </Link> */}
        </div>
      </div>
    </section>
  );
}