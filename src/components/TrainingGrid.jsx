// import { Link } from "react-router-dom";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";

// =====================================================
// TRAINING IMAGES
// =====================================================

import ethicalHackingImg from "@/assets/trainings/ethical-hacking.webp";
import ccnaImg from "@/assets/trainings/ccna.webp";
import pythonImg from "@/assets/trainings/python.webp";
import bugBountyImg from "@/assets/trainings/bug-bounty.webp";
import javaImg from "@/assets/trainings/java.webp";
import ccnpImg from "@/assets/trainings/ccnp.webp";
import penetrationTestingImg from "@/assets/trainings/penetration-testing.webp";

// =====================================================
// TRAINING GRID DATA
// IMPORTANT:
// This is intentionally kept here.
// No dependency on site.js.
// =====================================================

const trainingCards = [
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking Training",
    image: ethicalHackingImg,
  },
  {
    slug: "bug-bounty",
    title: "Bug Bounty Training",
    image: bugBountyImg,
  },
  {
    slug: "ccna",
    title: "CCNA - Cisco Certified Network Associate",
    image: ccnaImg,
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    image: pythonImg,
  },
  {
    slug: "ccnp",
    title: "CCNP - Cisco Certified Network Professional",
    image: ccnpImg,
  },
  {
    slug: "penetration-testing",
    title: "Penetration Testing",
    image: penetrationTestingImg,
  },
  {
    slug: "java-programming",
    title: "Java Programming",
    image: javaImg,
  },
];

// =====================================================
// TRAINING CARD
// =====================================================

function TrainingCard({ training, index }) {
  const [ref, shown] = useReveal();

  return (
    <Link
      ref={ref}
      // to={`/courses/${training.slug}`}
      href={`/courses/${training.slug}`}
      style={{
        transitionDelay: `${(index % 3) * 90}ms`,
      }}
      className={`group relative block aspect-[4/3] overflow-hidden rounded-xl shadow-elegant reveal-on-scroll ${
        shown ? "is-visible" : ""
      }`}
    >
      {/* Image */}
     <img
  src={training.image.src}
  alt={training.title}
  loading="lazy"
  decoding="async"
  width={1024}
  height={768}
  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
/>

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* Course title */}
      <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-1">
        <h3 className="text-sm font-semibold text-white drop-shadow">
          {training.title}
        </h3>
      </div>
    </Link>
  );
}

// =====================================================
// TRAINING GRID
// =====================================================

export default function TrainingGrid() {
  const [headRef, headShown] = useReveal();

  return (
    <section className="bg-muted/40 py-20">
      <div className="container-x">
        {/* Section heading */}
        <div
          ref={headRef}
          className={`mx-auto max-w-2xl text-center reveal-on-scroll ${
            headShown ? "is-visible" : ""
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl">
            Our Training
          </h2>

          <div className="mx-auto mt-4 gold-divider" />
        </div>

        {/* Training cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainingCards.map((training, index) => (
            <TrainingCard
              key={training.slug}
              training={training}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}