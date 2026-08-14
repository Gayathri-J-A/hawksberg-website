"use client";

import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import { redirect, useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import trainingApi from "@/services/trainingApi";
import AdminVideoForm from "@/components/AdminVideoForm";

export default function AdminTraining() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("trainingUser");
    setUser(storedUser ? JSON.parse(storedUser) : null);
    setAuthChecked(true);
  }, []);

  const portals = [
  { key: "iso9001", title: "ISO 9001" },
  { key: "iso14001", title: "ISO 14001" },
  { key: "iso27001", title: "ISO 27001" },
  { key: "riskidentification", title: "Risk Identification" },
  { key: "riskevaluation", title: "Risk Evaluation" },
  { key: "riskassessment", title: "Risk Assessment" },
  { key: "risktreatment", title: "Risk Treatment" },
];

  const [videos, setVideos] = useState([]);

  const [loading, setLoading] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [showVideoForm, setShowVideoForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    instructor: "Hawksberg International",
    video: "",
  });


  useEffect(() => {
    if (!authChecked || !user || user.role !== "admin") return;
    loadVideos();
  }, [authChecked, user]);

  if (!authChecked) return null;

  if (!user || user.role !== "admin") {
    redirect("/training-login");
  }
  const loadVideos = async () => {
  try {
    setLoading(true);

    const res = await trainingApi.getVideos();

console.log("Videos API:", res);

setVideos(res);
  } finally {
    setLoading(false);
  }
};

//   const loadVideos = async () => {
//     try {
//       setLoading(true);
//       const res = await trainingApi.getVideos();

// setVideos(res);
//     } finally {
//       setLoading(false);
//     }
//   };

// const loadVideos = async (trainingName = null) => {
//   try {
//     setLoading(true);

//     let res;

//     if (trainingName) {
//       res = await trainingApi.getVideosByTraining(trainingName);
//     } else {
//       res = await trainingApi.getVideos();
//     }

//     setVideos(res);
//   } finally {
//     setLoading(false);
//   }
// };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setEditingId(null);

    setFormData({
      title: "",
      description: "",
      duration: "",
      instructor: "Hawksberg International",
      video: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (editingId) {
    //   setVideos((prev) =>
    //     prev.map((item) =>
    //       item.id === editingId
    //         ? {
    //             ...item,
    //             ...formData,
    //           }
    //         : item
    //     )
    //   );

    //   resetForm();

    //   return;
    // }

    // const newVideo = {
    //   id: Date.now(),
    //   ...formData,
    // };

    // setVideos((prev) => [...prev, newVideo]);

    // resetForm();
//     if (editingId) {
//   await trainingApi.updateVideo(editingId, formData);
// } else {
//   await trainingApi.createVideo(formData);
// }

// await loadVideos();

// resetForm();
//   };
if (editingId) {
  await trainingApi.updateVideo(editingId, formData);
} else {
  await trainingApi.createVideo(formData);
}

await loadVideos();

resetForm();
};

const handleEdit = (video) => {
  setShowVideoForm(true);
    setEditingId(video.id);

    setFormData({
      title: video.title,
      description: video.description,
      duration: video.duration,
      instructor: video.instructor,
      video: video.video,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this training video?"
    );

    if (!confirmDelete) return;

    // setVideos((prev) => prev.filter((item) => item.id !== id));
    // await trainingApi.deleteVideo(id);

// await loadVideos();

// if (editingId === id) {
//   resetForm();
// }
await trainingApi.deleteVideo(id);

await loadVideos();

if (editingId === id) {
  resetForm();
}

    if (editingId === id) {
      resetForm();
    }
  };

  return (
    <Layout>
      <section className="relative min-h-screen overflow-hidden bg-[#071A33]">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,162,58,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_40%)]" />
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container-x relative py-16">

          <div className="mb-10 flex items-center justify-between">

            <div>

              <p className="text-sm uppercase tracking-[0.35em] text-gold">
                Hawksberg International
              </p>

              <h1 className="mt-3 text-5xl font-display text-white">
                Admin Training Dashboard
              </h1>

              <p className="mt-4 text-white/70">
                Upload, edit and manage training videos.
              </p>

            </div>

            {/* <button
              onClick={resetForm}
              className="rounded-xl border border-gold px-6 py-3 text-gold transition hover:bg-gold hover:text-black"
            >
              New Video
            </button> */}
            <button
  onClick={() => {
    resetForm();
    setShowVideoForm(true);
  }}
  className="rounded-xl border border-gold px-6 py-3 text-gold transition hover:bg-gold hover:text-black"
>
  New Video
</button>

          </div>

          {/* Upload Form */}

          {/* <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h2 className="mb-8 text-2xl font-bold text-white">

              {editingId ? "Edit Training Video" : "Upload Training Video"}

            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid gap-6"
            >

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


              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Description
                </label>

                <textarea
                  rows={5}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter description..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold"
                  required
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">

   

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

            

                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Instructor
                  </label>

                  <input
                    type="text"
                    name="instructor"
                    value={formData.instructor}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold"
                    required
                  />
                </div>

              </div>

              

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  YouTube Embed URL
                </label>

                <input
                  type="text"
                  name="video"
                  value={formData.video}
                  onChange={handleChange}
                  placeholder="https://www.youtube.com/embed/VIDEO_ID"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-gold"
                  required
                />
              </div>

              <div className="flex gap-4">

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

          </div> */}

          {/* <AdminVideoForm
  formData={formData}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  editingId={editingId}
  resetForm={resetForm}
/> */}
{showVideoForm && (
  <AdminVideoForm
    formData={formData}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    editingId={editingId}
    resetForm={() => {
      resetForm();
      setShowVideoForm(false);
    }}
  />
)}

          {/* Video List */}

          {/* <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h2 className="mb-8 text-2xl font-bold text-white">
              Training Videos
            </h2>

            {loading ? (

              <p className="text-white/60">
                Loading...
              </p>

            ) : (

              <div className="space-y-6">

                {videos.map((video) => (

                  <div
                    key={video.id}
                    className="rounded-xl border border-white/10 bg-white/5 p-6"
                  >

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                      <div>

                        <h3 className="text-xl font-bold text-white">
                          {video.title}
                        </h3>

                        <p className="mt-3 text-white/70">
                          {video.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-6 text-sm">

                          <span className="text-gold">
                            {video.duration}
                          </span>

                          <span className="text-white/70">
                            {video.instructor}
                          </span>

                        </div>

                      </div>

                      <div className="flex gap-3">

                        <button
                          onClick={() => handleEdit(video)}
                          className="rounded-lg border border-gold px-5 py-2 font-semibold text-gold hover:bg-gold hover:text-black"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(video.id)}
                          className="rounded-lg border border-red-500 px-5 py-2 font-semibold text-red-400 hover:bg-red-500 hover:text-white"
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

                     )}
          </div> */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {portals.map((portal) => (
    <div
      key={portal.key}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h2 className="text-2xl font-bold text-white">
        {portal.title}
      </h2>

      {/* <p className="mt-3 text-white/60">
        Total Videos : 0
      </p> */}
      <p className="mt-3 text-white/60">
  Total Videos : {
    videos.filter(
      (video) => video.training_name === portal.key
    ).length
  }
</p>

      {/* <button
        className="mt-6 w-full rounded-xl bg-gold py-3 font-semibold text-black hover:scale-105 transition"
      >
        Manage Videos
      </button> */}
     <button
 onClick={() => {
      router.replace(`/training?trainingName=${encodeURIComponent(portal.key)}`);
}}
  className="mt-6 w-full rounded-xl bg-gold py-3 font-semibold text-black hover:scale-105 transition"
>
  Manage Videos
</button>
    </div>
  ))}
</div>
        </div>
      </section>
    </Layout>
  );
}
