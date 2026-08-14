import PropTypes from "prop-types";

export default function TrainingVideoPlayer({ video }) {
  if (!video) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-white/5">
        <p className="text-white/60">No video selected.</p>
      </div>
    );
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: video.title,
    description: video.description,
    provider: {
      "@type": "Organization",
      name: video.instructor || "Hawksberg International",
      sameAs: "https://www.hawksberginternational.com",
    },
    timeRequired: video.duration,
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* YouTube Video */}
      <iframe
        key={video.id}
        src={video.video}
        title={video.title}
        loading="lazy"
        className="aspect-video w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      {/* Video Details */}
      <div className="border-t border-white/10 bg-[#081B35] p-8">

        <p className="text-xs uppercase tracking-[0.35em] text-gold">
          Hawksberg International
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          {video.title}
        </h2>

        <p className="mt-6 leading-8 text-white/70">
          {video.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-6">

          <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              Duration
            </p>

            <p className="mt-2 font-semibold text-gold">
              {video.duration}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              Instructor
            </p>

            <p className="mt-2 font-semibold text-gold">
              {video.instructor}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

TrainingVideoPlayer.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.string,
    instructor: PropTypes.string,
    video: PropTypes.string,
  }),
};