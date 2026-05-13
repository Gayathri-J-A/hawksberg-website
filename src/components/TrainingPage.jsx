import { Link } from "react-router-dom";
import EnquiryForm from "./EnquiryForm";

export default function TrainingPage({ training }) {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero py-20 text-brand-foreground">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container-x relative">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Cyber Security & IT Training
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            {training.title}
          </h1>
          <div className="mt-4 gold-divider" />
          <p className="mt-6 max-w-2xl text-brand-foreground/80">
            {training.short}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest">
            <span className="rounded-full border border-gold/40 px-4 py-1 text-gold">
              Duration · {training.duration}
            </span>
            <span className="rounded-full border border-gold/40 px-4 py-1 text-gold">
              Level · {training.level}
            </span>
          </div>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">
              Enroll / Enquire →
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          <div>
            <h2 className="font-display text-3xl">Course overview</h2>
            <div className="mt-3 gold-divider" />
            <p className="mt-5 text-muted-foreground">
              The {training.title} program at Hawksberg International is built
              for learners who want practical, job-ready skills. Sessions are
              led by industry professionals using a mix of theory, labs and
              capstone projects.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl">Modules covered</h2>
            <div className="mt-3 gold-divider" />
            <ol className="mt-6 space-y-3">
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

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ["Live mentoring", "1:1 guidance from active practitioners."],
              ["Hands-on labs", "Real-world challenges in a sandbox."],
              ["Career support", "Resume reviews & interview prep."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-xl text-gold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          <EnquiryForm compact />
        </aside>
      </section>
    </>
  );
}
