import { Link } from "react-router-dom";
import { trainings, trainingImages } from "@/data/site";
import useReveal from "@/hooks/useReveal";

function TrainingCard({ t, index }) {
  const [ref, shown] = useReveal();
  return (
    <Link
      ref={ref}
      to={`/training/${t.slug}`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      className={`group relative block aspect-[4/3] overflow-hidden rounded-xl shadow-elegant reveal-on-scroll ${
        shown ? "is-visible" : ""
      }`}
    >
      <img
        src={trainingImages[t.slug]}
        alt={t.title}
        loading="lazy"
        width={1024}
        height={768}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-1">
        <h3 className="text-sm font-semibold text-white drop-shadow">
          {t.title}
        </h3>
      </div>
    </Link>
  );
}

export default function TrainingGrid() {
  const [headRef, headShown] = useReveal();
  return (
    <section className="bg-muted/40 py-20">
      <div className="container-x">
        <div
          ref={headRef}
          className={`mx-auto max-w-2xl text-center reveal-on-scroll ${
            headShown ? "is-visible" : ""
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl">Our Training</h2>
          <div className="mx-auto mt-4 gold-divider" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainings.map((t, i) => (
            <TrainingCard key={t.slug} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
