import { Link } from "react-router-dom";
import EnquiryForm from "./EnquiryForm";

export default function IsoTrainingPage({ training }) {
  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden gradient-hero py-24 text-brand-foreground">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091215367-9b6c00b3039c?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="container-x relative text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            ISO Training Programs
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase tracking-wide md:text-6xl">
            {training.code} Training
          </h1>
          <div className="mx-auto mt-5 gold-divider" />
        </div>
      </section>

      {/* Intro section with image + copy */}
      <section className="bg-background py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal overflow-hidden rounded-xl shadow-elegant">
            <img
              src={training.image}
              alt={`${training.code} training`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl uppercase tracking-wide text-foreground md:text-4xl">
              Training Courses
            </h2>
            <div className="mt-4 gold-divider" />
            <p className="mt-6 text-muted-foreground">{training.intro}</p>
            <p className="mt-4 text-muted-foreground">
              {training.detail.split("ISO training").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="font-semibold text-gold">ISO training</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
            <Link to="/contact" className="btn-primary mt-8 inline-block">
              Get Free Evaluation & Get Started Today!
            </Link>
          </div>
        </div>
      </section>

      {/* Modules + Audience + Enquiry */}
      <section className="bg-muted/40 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-3xl">Modules covered</h2>
              <div className="mt-3 gold-divider" />
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {training.modules.map((m, i) => (
                  <li
                    key={m}
                    className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <span className="font-display text-2xl text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1 text-foreground">{m}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-3xl">Who should attend</h2>
              <div className="mt-3 gold-divider" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {training.audience.map((a) => (
                  <li
                    key={a}
                    className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground"
                  >
                    <span className="mr-2 text-gold">◆</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <EnquiryForm compact />
          </aside>
        </div>
      </section>
    </>
  );
}
