import EnquiryForm from "@/components/EnquiryForm";

import iso22301Img from "@/assets/isotraining/iso22301.webp";
import Layout from "@/components/Layout";
export const metadata = { title: "ISO 22301 Lead Auditor Training", description: "ISO 22301 lead auditor training course content from Hawksberg International.", alternates: { canonical: "/iso-training/iso-22301-lead-auditor" } };
export default function ISO22301LeadAuditor() {
  const modules = [
    "BCMS",
    "ISO 22301 Requirements",
    "Audit Planning",
    "Audit Execution",
    "Reporting",
    "Certification",
  ];

  const audience = [
    "Business Continuity Managers",
    "Lead Auditors",
    "Consultants",
  ];

  return (
    <Layout>
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-cover bg-center py-24 text-brand-foreground"
        style={{
          backgroundImage: `url(${iso22301Img.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 grid-pattern opacity-15" />

        <div className="container-x relative text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            ISO Training Programs
          </p>

          <h1
            className="mt-4 font-display text-5xl uppercase tracking-wide md:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            ISO 22301 Lead Auditor Training
          </h1>

          <div className="mx-auto mt-5 gold-divider" />
        </div>
      </section>

      {/* =========================================================
          INTRO / COURSE DETAILS
      ========================================================= */}
      <section className="bg-background py-20">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-3">
              {/* Intro */}
              <div className="md:col-span-2">
                <p className="text-lg leading-9 text-slate-700">
                  Business Continuity Management System auditing.
                </p>

                <p className="mt-6 text-[15px] leading-9 text-muted-foreground text-justify">
                  This ISO training teaches ISO 22301 auditing techniques and
                  business continuity best practices.
                </p>
              </div>

              {/* Course Info */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Duration
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    40 Hours
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Level
                  </p>

                  <p className="mt-2 font-semibold text-slate-900">
                    Advanced
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-muted/40 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-3">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="space-y-12 lg:col-span-2">

            {/* ---------------------------------------------------
                COURSE OVERVIEW
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Course Overview
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 text-[15px] leading-9 text-slate-700 text-justify">
                ISO 22301 Lead Auditor Training is aimed at providing delegates
                with the necessary expertise to perform first-, second-, and
                third-party audits of a Business Continuity Management System
                (BCMS) based on ISO 22301, to determine whether it is suitable
                for certification and/or registration purposes.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-slate-700 text-justify">
                The course covers the requirements of ISO 22301 and provides
                guidance on how to conduct audits to assess compliance with the
                standard.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-slate-700 text-justify">
                Hawksberg International provides professional ISO 22301 Lead
                Auditor Training delivered by experienced industry experts.
              </p>
            </div>

            {/* ---------------------------------------------------
                MODULES
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Modules Covered
              </h2>

              <div className="mt-3 gold-divider" />

              <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                {modules.map((module, index) => (
                  <li
                    key={module}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <span className="font-display text-2xl text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pt-1 text-[15px] leading-7 text-slate-700">
                      {module}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* ---------------------------------------------------
                WHO SHOULD ATTEND
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Who Should Attend
              </h2>

              <div className="mt-3 gold-divider" />

              <ul className="mt-8 space-y-5">
                {audience.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-[15px] leading-8 text-slate-700"
                  >
                    <span className="mt-1 text-lg text-gold">
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---------------------------------------------------
                WHY TAKE
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                Why Take ISO 22301 Lead Auditor Training?
              </h2>

              <div className="mt-3 gold-divider" />

              <p className="mt-8 text-[15px] leading-9 text-slate-700 text-justify">
                ISO 22301 Lead Auditor Training provides delegates with the
                necessary expertise to perform first-, second-, and third-party
                audits of a Business Continuity Management System (BCMS) based
                on ISO 22301.
              </p>

              <p className="mt-6 text-[15px] leading-9 text-slate-700 text-justify">
                The training helps participants understand ISO 22301
                requirements and provides guidance on conducting audits to
                assess compliance with the standard.
              </p>
            </div>

            {/* ---------------------------------------------------
                WHAT THE COURSE COVERS
            --------------------------------------------------- */}
            <div>
              <h2 className="font-display text-3xl">
                What the ISO 22301 Lead Auditor Course Covers
              </h2>

              <div className="mt-3 gold-divider" />

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-lg text-gold">✓</span>

                  <p className="text-[15px] leading-8 text-slate-700">
                    ISO 22301 Business Continuity Management System
                    requirements.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-lg text-gold">✓</span>

                  <p className="text-[15px] leading-8 text-slate-700">
                    Planning and conducting first-, second-, and third-party
                    BCMS audits.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-lg text-gold">✓</span>

                  <p className="text-[15px] leading-8 text-slate-700">
                    Audit planning, execution, reporting, and certification
                    readiness.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-lg text-gold">✓</span>

                  <p className="text-[15px] leading-8 text-slate-700">
                    Business continuity auditing techniques and best
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              ENQUIRY FORM
          ===================================================== */}
          <aside className="self-start lg:sticky lg:top-28">
            <EnquiryForm compact />
          </aside>
        </div>
      </section>
    </>
    </Layout>
  );
}