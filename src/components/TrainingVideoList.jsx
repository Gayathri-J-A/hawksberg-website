import PropTypes from "prop-types";

export default function TrainingVideoList({
  videos,
  selectedVideo,
  setSelectedVideo,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <h2 className="mb-6 text-xl font-bold text-white">
        Course Lessons
      </h2>

      <div className="space-y-3">

        {videos.length === 0 ? (
          <p className="text-sm text-white/60">
            No training videos available.
          </p>
        ) : (
          videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(index)}
              className={`w-full rounded-xl border p-4 text-left transition-all duration-300 ${
                selectedVideo === index
                  ? "border-gold bg-gold/15"
                  : "border-white/10 bg-white/5 hover:border-gold/40 hover:bg-white/10"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-gold">
                Lesson {index + 1}
              </p>

              <h3 className="mt-2 font-semibold text-white">
                {video.title}
              </h3>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-sm text-white/60">
                  {video.duration}
                </span>

                {selectedVideo === index && (
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-black">
                    Playing
                  </span>
                )}

              </div>

            </button>
          ))
        )}

      </div>
    </div>
  );
}

TrainingVideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  selectedVideo: PropTypes.number.isRequired,
  setSelectedVideo: PropTypes.func.isRequired,
};