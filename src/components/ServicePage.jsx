import { Link } from "react-router-dom";
import EnquiryForm from "./EnquiryForm";

export default function ServicePage({ service }) {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero py-20 text-brand-foreground">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container-x relative">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            ISO Consulting Services
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            {service.code}{" "}
            <span className="text-gold">— {service.title}</span>
          </h1>
          <div className="mt-4 gold-divider" />
          <p className="mt-6 max-w-2xl text-brand-foreground/80">
            {service.short}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Get Free Evaluation →
            </Link>
            <Link to="/services/iso-27001" className="btn-outline">
              Other Services
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="font-display text-3xl">
              About {service.code} Consulting
            </h2>
            <div className="mt-3 gold-divider" />
            <p className="mt-5 text-muted-foreground">
              Hawksberg International offers complete {service.code} consulting
              — from gap analysis through certification — designed for measurable
              business value. Our consultants combine global best practice with
              local domain knowledge.
            </p>
            <p className="mt-3 text-muted-foreground">
              Whether you are pursuing certification for the first time or
              upgrading an existing system, our phase-wise approach ensures
              audit readiness with minimal business disruption.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl">What you get</h2>
            <div className="mt-3 gold-divider" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full gradient-gold text-xs font-bold text-ink">
                    ✓
                  </span>
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gold/30 bg-secondary/40 p-8">
            <h3 className="font-display text-2xl">Our 5-step methodology</h3>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Gap analysis & scoping",
                "Documentation framework",
                "Implementation & training",
                "Internal audit & review",
                "Certification & sustenance",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-display text-3xl text-gold">
                    0{i + 1}
                  </span>
                  <p className="pt-1 text-sm text-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          <EnquiryForm compact />
        </aside>
      </section>
    </>
  );
}
