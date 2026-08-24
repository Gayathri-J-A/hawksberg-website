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

  // =========================================================
  // VIDEO SOURCE
  // =========================================================

  const youtubeUrl = video.youtube_url?.trim() || "";
  const mp4Url = video.video_url?.trim() || "";

  // =========================================================
  // YOUTUBE EMBED URL
  // =========================================================

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return "";

    try {
      const parsedUrl = new URL(url);

      // Already an embed URL
      if (parsedUrl.pathname.startsWith("/embed/")) {
        return url;
      }

      // youtube.com/watch?v=VIDEO_ID
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // youtu.be/VIDEO_ID
      if (parsedUrl.hostname === "youtu.be") {
        const id = parsedUrl.pathname.replace("/", "");

        if (id) {
          return `https://www.youtube.com/embed/${id}`;
        }
      }

      return url;
    } catch {
      return url;
    }
  };

  const youtubeEmbedUrl = getYoutubeEmbedUrl(youtubeUrl);

  // =========================================================
  // DETERMINE VIDEO TYPE
  // =========================================================

  const hasYoutubeVideo = Boolean(youtubeEmbedUrl);
  const hasMp4Video = Boolean(mp4Url);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
      {/* =====================================================
          COURSE STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      {/* =====================================================
          VIDEO PLAYER
      ===================================================== */}

      {hasYoutubeVideo ? (
        /* ===================================================
           YOUTUBE VIDEO
        =================================================== */

        <iframe
          key={`youtube-${video.id}`}
          src={youtubeEmbedUrl}
          title={video.title}
          loading="lazy"
          className="aspect-video w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : hasMp4Video ? (
        /* ===================================================
           SUPABASE MP4 VIDEO
        =================================================== */

        <video
          key={`mp4-${video.id}`}
          controls
          preload="metadata"
          playsInline
          className="aspect-video w-full bg-black object-contain"
          title={video.title}
        >
          <source
            src={mp4Url}
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>
      ) : (
        /* ===================================================
           NO VIDEO
        =================================================== */

        <div className="flex aspect-video items-center justify-center bg-[#081B35]">
          <p className="px-6 text-center text-white/60">
            Video is currently unavailable.
          </p>
        </div>
      )}

      {/* =====================================================
          VIDEO DETAILS
      ===================================================== */}

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

        {/* ===================================================
            VIDEO INFORMATION
        =================================================== */}

        <div className="mt-8 flex flex-wrap gap-6">
          {/* =================================================
              DURATION
          ================================================= */}

          <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              Duration
            </p>

            <p className="mt-2 font-semibold text-gold">
              {video.duration}
            </p>
          </div>

          {/* =================================================
              INSTRUCTOR
          ================================================= */}

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
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    title: PropTypes.string,

    description: PropTypes.string,

    duration: PropTypes.string,

    instructor: PropTypes.string,

    // YouTube source
    youtube_url: PropTypes.string,

    // Supabase Storage MP4 source
    video_url: PropTypes.string,

    // Training portal
    training_name: PropTypes.string,
  }),
};