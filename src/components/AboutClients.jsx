"use client";

import iit from "@/assets/clients/iit.webp";
import vit from "@/assets/clients/vit.webp";
import amritha from "@/assets/clients/amritha.webp";
import jmi from "@/assets/clients/jmi.webp";
import accumed from "@/assets/clients/accumed.webp";
import aloft from "@/assets/clients/aloft.webp";
import aperta from "@/assets/clients/aperta.webp";
import apptivo from "@/assets/clients/apptivo.webp";
import asiaeo from "@/assets/clients/asia-e-o.webp";
import barani from "@/assets/clients/barani.webp";
import courtyard from "@/assets/clients/courtyard.webp";
import deccan from "@/assets/clients/deccan.webp";
import electraev from "@/assets/clients/electraev.webp";
import epc from "@/assets/clients/epc.webp";
import gighz from "@/assets/clients/gighz.webp";
import indo from "@/assets/clients/INDO.webp";
import janatics from "@/assets/clients/janatics.webp";
import jwmarriott from "@/assets/clients/jwmarriott.webp";
import kalyani from "@/assets/clients/kalyani.webp";
import kurinji from "@/assets/clients/kurinji.webp";
import logicvalley from "@/assets/clients/logicvalley.webp";
import mercedes from "@/assets/clients/mercedes.webp";
import messer from "@/assets/clients/messer.webp";
import minuscule from "@/assets/clients/minuscule.webp";
import mobility from "@/assets/clients/mobility.webp";
import ppts from "@/assets/clients/ppts.webp";
import profit from "@/assets/clients/profit.webp";
import qikink from "@/assets/clients/qikink.webp";
import rabwin from "@/assets/clients/rabwin.webp";
import resolute from "@/assets/clients/resolute.webp";
import revx from "@/assets/clients/revx.webp";
import rikun from "@/assets/clients/rikun.webp";
import royal from "@/assets/clients/royal.webp";
import salzer from "@/assets/clients/salzer.webp";
import search from "@/assets/clients/search.webp";
import space from "@/assets/clients/space.webp";
import state from "@/assets/clients/state.webp";
import steam from "@/assets/clients/steam.webp";
import westin from "@/assets/clients/westin.webp";

const clients = [
  { image: iit, name: "IIT Madras" },
  { image: vit, name: "VIT University" },
  { image: amritha, name: "Amrita Vishwa Vidyapeetham" },
  { image: jmi, name: "Jamia Millia Islamia" },
  { image: accumed, name: "AccuMed" },
  { image: aloft, name: "Aloft Hotels" },
  { image: aperta, name: "Aperta" },
  { image: apptivo, name: "Apptivo" },
  { image: asiaeo, name: "Asia E & O" },
  { image: barani, name: "Barani Hydraulics India Pvt. Ltd." },
  { image: courtyard, name: "Courtyard by Marriott" },
  { image: deccan, name: "Deccan Logistics" },
  { image: electraev, name: "Electra EV" },
  { image: epc, name: "EPC" },
  { image: gighz, name: "GigHz" },
  { image: indo, name: "INDO Tech Transformers" },
  { image: janatics, name: "Janatics Pneumatics" },
  { image: jwmarriott, name: "JW Marriott" },
  { image: kalyani, name: "Kalyani" },
  { image: kurinji, name: "Kurinji" },
  { image: logicvalley, name: "LogicValley" },
  { image: mercedes, name: "Mercedes-Benz" },
  { image: messer, name: "Messer Cutting Systems" },
  { image: minuscule, name: "Minuscule Technologies" },
  { image: mobility, name: "Mobility" },
  { image: ppts, name: "PPTS" },
  { image: profit, name: "Profit.co" },
  { image: qikink, name: "Qikink" },
  { image: rabwin, name: "Rabwin" },
  { image: resolute, name: "Resolute Group" },
  { image: revx, name: "REVX" },
  { image: rikun, name: "Rikun" },
  { image: royal, name: "Royal Security Services" },
  { image: salzer, name: "Salzer Technologies" },
  { image: search, name: "Search & Scroll" },
  { image: space, name: "SpaceEquation" },
  { image: state, name: "State of Qatar" },
  { image: steam, name: "Steam" },
  { image: westin, name: "Westin Hotels & Resorts" },
];

function ClientCard({ image, name }) {
  return (
    <div
      className="
        group
        relative
        h-[220px]
        w-full
        overflow-hidden
        border
        border-[#d9dee5]
        bg-white
        transition-all
        duration-300
        hover:border-[#d99a2b]
        hover:shadow-[0_10px_28px_rgba(11,31,51,0.12)]
      "
    >
      {/* LOGO */}
      <div
        className="
          flex
          h-full
          w-full
          items-center
          justify-center
          px-5
          pb-2
          transition-all
          duration-300
          group-hover:pb-[50px]
        "
      >
        <img
          src={image.src}
          alt={name}
          loading="lazy"
          decoding="async"
         className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
    image === asiaeo
      ? "max-h-[55px] max-w-[45%]"
      : "max-h-[120px] max-w-[80%]"
  }`}
  loading="lazy"
  decoding="async"
        />
      </div>

      {/* COMPANY NAME ON HOVER */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          flex
          min-h-[50px]
          translate-y-full
          items-center
          justify-center
          bg-[#0b1f33]
          px-2
          text-center
          opacity-0
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <span
          className="
            text-[13px]
            font-semibold
            leading-[1.25]
            text-white
          "
        >
          {name}
        </span>
      </div>
    </div>
  );
}

export default function AboutClients() {
  return (
    <section
      id="about-clients"
      className="
        w-full
        overflow-hidden
        bg-[#faf9f6]
        py-20
        md:py-24
      "
    >
      {/* MAIN CONTENT WIDTH */}
      <div
        className="
          mx-auto
          w-[calc(100%-32px)]
          max-w-[1450px]
          sm:w-[calc(100%-60px)]
          lg:w-[calc(100%-90px)]
        "
      >
        {/* HEADING */}
        <div className="mb-14 text-center md:mb-16">
          <h2
            className="
              text-[46px]
              font-extrabold
              leading-[0.95]
              tracking-[-2px]
              text-[#0b1f33]
              sm:text-[56px]
              md:text-[64px]
              lg:text-[70px]
            "
          >
            Our Trusted
            <span className="block text-[#d99a2b]">
              Clients
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-6
              h-[3px]
              w-[70px]
              bg-[#d99a2b]
            "
          />

          <p
            className="
              mx-auto
              mt-6
              max-w-[850px]
              text-[16px]
              leading-[1.7]
              text-[#42566b]
              sm:text-[18px]
            "
          >
            Trusted by leading organisations and institutions
            across industries for professional consulting,
            certification and training excellence.
          </p>
        </div>

        {/* ==================================================
            CLIENT GRID
            Desktop  : 8 columns
            Laptop   : 6 columns
            Tablet   : 4 columns
            Mobile   : 2 columns
        ================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-5
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            xl:grid-cols-8
            xl:gap-x-5
            xl:gap-y-6
          "
        >
          {clients.map((client, index) => (
            <ClientCard
              key={`${client.name}-${index}`}
              image={client.image}
              name={client.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}