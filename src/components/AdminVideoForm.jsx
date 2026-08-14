import PropTypes from "prop-types";

export default function AdminVideoForm({
  formData,
  handleChange,
  handleSubmit,
  editingId,
  resetForm,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="mb-8 text-2xl font-bold text-white">
        {editingId ? "Edit Training Video" : "Upload Training Video"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6"
      >

        {/* Title */}

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Video Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter training title"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold"
            required
          />
        </div>

        {/* Description */}

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Description
          </label>

          <textarea
            rows={5}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter video description"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold"
            required
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Duration */}

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Duration
            </label>

            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="20 mins"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold"
              required
            />
          </div>

          {/* Instructor */}

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Instructor
            </label>

            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              placeholder="Hawksberg International"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold"
              required
            />
          </div>

        </div>

        {/* YouTube URL */}

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            YouTube Embed URL
          </label>

          <input
            type="url"
            name="video"
            value={formData.video}
            onChange={handleChange}
            placeholder="https://www.youtube.com/embed/VIDEO_ID"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold"
            required
          />
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4">

          <button
            type="submit"
            className="rounded-xl bg-gold px-8 py-3 font-semibold text-black transition hover:scale-105"
          >
            {editingId ? "Update Video" : "Upload Video"}
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="rounded-xl border border-white/20 px-8 py-3 font-semibold text-white transition hover:border-gold"
          >
            Clear
          </button>

        </div>

      </form>

    </div>
  );
}

AdminVideoForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  editingId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  resetForm: PropTypes.func.isRequired,
};