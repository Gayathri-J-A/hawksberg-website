import { Link } from "react-router-dom";
// import { company, isoServices } from "@/data/site";
import { company } from "@/data/site";
import logo from "@/assets/shieldlogo.jpg";
// import {
//   FaFacebook,
//   FaLinkedin,
//   FaInstagram,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
import facebookIcon from "@/assets/social/facebook.svg";
import linkedinIcon from "@/assets/social/linkedin.svg";
import instagramIcon from "@/assets/social/instagram.svg";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-brand text-brand-foreground">
      <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
      {/* <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4"> */}
      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        {/* <div> */}
        <div className="max-w-[310px] border-r border-white/10 pr-10">
          <div className="flex items-center gap-3">
            {/* <span className="grid h-11 w-11 place-items-center rounded-md gradient-gold font-display text-xl text-ink">
              H
            </span> */}
            <img
src={logo}
alt="Hawksberg"
className="h-20 w-auto shrink-0"
/>
            <span className="font-display text-3xl leading-tight">
              Hawksberg <span className="text-gold">International</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-foreground/75">
            Trusted partner for ISO consultancy, cyber security and corporate
            training. Helping enterprises meet international standards with
            measurable business outcomes.
          </p>
          {/* <div className="mt-6 flex gap-3">
            {[
              { l: "f", h: company.social.facebook },
              { l: "in", h: company.social.linkedin },
              { l: "ig", h: company.social.instagram },
            ].map((s) => (
              <a
                key={s.l}
                href={s.h}
                className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-xs text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                {s.l}
              </a>
            ))}
          </div> */}
         <div className="mt-8 flex gap-5">
  <a
    href={company.social.facebook}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 hover:scale-110"
  >
   <img
  src={facebookIcon}
  alt="Facebook"
  className="h-8 w-8 transition-transform duration-300 hover:scale-110"
/>
  </a>

  <a
    href={company.social.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 hover:scale-110"
  >
   <img
  src={linkedinIcon}
  alt="LinkedIn"
  className="h-8 w-8 transition-transform duration-300 hover:scale-110"
/>
  </a>

  <a
    href={company.social.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 hover:scale-110"
  >
    <img
  src={instagramIcon}
  alt="Instagram"
  className="h-8 w-8 transition-transform duration-300 hover:scale-110"
/>
  </a>
</div>
        </div>

        {/* <div> */}
        <div className="lg:border-r lg:border-white/10 lg:pr-8">
          <h4 className="font-display text-xl text-gold">Quick Links</h4>
          <div className="mt-3 gold-divider" />
          <ul className="mt-5 space-y-2 text-sm text-brand-foreground/80">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Contact Us", "/contact"],
              ["Ethical Hacking", "/training/ethical-hacking"],
              ["CCNA Training", "/training/ccna"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-gold">
                  → {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div> */}
        <div className="lg:border-r lg:border-white/10 lg:pr-8">
          <h4 className="font-display text-lg text-gold">ISO Consulting</h4>
          <div className="mt-3 gold-divider" />
          {/* <ul className="mt-5 space-y-2 text-sm text-brand-foreground/80"> */}
          {/* <ul className="mt-6 space-y-4 text-sm text-brand-foreground/80">
            {isoServices.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  // className="transition-colors hover:text-gold"
                  className="inline-flex items-center transition-all duration-300 hover:text-gold hover:translate-x-1"
                >
                  → {s.code} Consulting
                </Link>
              </li>
            ))}
          </ul> */}

          <ul className="mt-6 space-y-4 text-sm text-brand-foreground/80">
  <li>
    <Link
      to="/services/iso-9001"
      className="inline-flex items-center transition-all duration-300 hover:text-gold hover:translate-x-1"
    >
      → ISO 9001 Consulting
    </Link>
  </li>

  <li>
    <Link
      to="/services/iso-14001"
      className="inline-flex items-center transition-all duration-300 hover:text-gold hover:translate-x-1"
    >
      → ISO 14001 Consulting
    </Link>
  </li>

  <li>
    <Link
      to="/services/iso-45001"
      className="inline-flex items-center transition-all duration-300 hover:text-gold hover:translate-x-1"
    >
      → ISO 45001 Consulting
    </Link>
  </li>

  <li>
    <Link
      to="/services/iso-50001"
      className="inline-flex items-center transition-all duration-300 hover:text-gold hover:translate-x-1"
    >
      → ISO 50001 Consulting
    </Link>
  </li>

  <li>
    <Link
      to="/services/iatf-16949"
      className="inline-flex items-center transition-all duration-300 hover:text-gold hover:translate-x-1"
    >
      → IATF 16949 Consulting
    </Link>
  </li>

  <li>
    <Link
      to="/services/tisax"
      className="inline-flex items-center transition-all duration-300 hover:text-gold hover:translate-x-1"
    >
      → TISAX Consulting
    </Link>
  </li>

  <li>
    <Link
      to="/services/dpdp"
      className="inline-flex items-center transition-all duration-300 hover:text-gold hover:translate-x-1"
    >
      → DPDP Consulting
    </Link>
  </li>
</ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Reach Us</h4>
          <div className="mt-3 gold-divider" />
          {/* <address className="mt-5 space-y-3 text-sm not-italic text-brand-foreground/80"> */}
          <address className="mt-6 space-y-5 text-sm leading-7 not-italic text-brand-foreground/80">
            {/* <p>{company.address}</p> */}
            <p className="max-w-xs">
{company.address}
</p>
            <p>
              {/* <span className="text-gold">Phone: +91 90805 83283</span>{" "} */}
              <span className="font-semibold text-gold">
Phone:
</span>
              <a href={`tel:${company.altPhone}`} className="hover:text-gold">
                {company.altPhone}
              </a>
            </p>
            <p>
              {/* <span className="text-gold">Email:</span> */}
              <span className="font-semibold text-gold">
Email:
</span>{" "}
              <a href={`mailto:${company.email}`} className="hover:text-gold">
                {company.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        {/* <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-foreground/60 md:flex-row"> */}
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm text-brand-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Hawksberg International. All rights reserved.</p>
          <p>Crafted with precision · Chennai, India</p>
        </div>
      </div>
    </footer>
  );
}
