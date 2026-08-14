"use client";

import { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
import { redirect } from "next/navigation";
import Layout from "@/components/Layout";
// import TrainingVideoPlayer from "@/components/TrainingVideoPlayer";
import TrainingVideoList from "@/components/TrainingVideoList";
import AdminVideoForm from "@/components/AdminVideoForm";
import trainingApi from "@/services/trainingApi";

export default function TrainingPortal() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [trainingName, setTrainingName] = useState("");

  const [showVideoForm, setShowVideoForm] = useState(false);

  const [selectedVideo, setSelectedVideo] = useState(0);

  const [editingId, setEditingId] = useState(null);

const [formData, setFormData] = useState({
  title: "",
  description: "",
  duration: "",
  instructor: "Hawksberg International",
  video: "",
});

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("trainingUser");
    setUser(storedUser ? JSON.parse(storedUser) : null);
    setTrainingName(new URLSearchParams(window.location.search).get("trainingName") || "");
    setAuthChecked(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


// const [videos, setVideos] = useState([
  // {
  //   id: 1,
  //   title: "ISO 9001 - Introduction",
  //   description:
  //     "Learn the fundamentals of ISO 9001 Quality Management System and understand its requirements.",
  //   duration: "18 mins",
  //   instructor: "Hawksberg International",
  //   video: "https://www.youtube.com/embed/otnEiom_BJM",
  // },
  // {
  //   id: 2,
  //   title: "ISO 9001 - Clause Overview",
  //   description:
  //     "Understand clauses, implementation methods and documentation process.",
  //   duration: "22 mins",
  //   instructor: "Hawksberg International",
  //   video: "https://www.youtube.com/embed/DbfA1d5R8V8",
  // },
  // {
  //   id: 3,
  //   title: "Internal Audit Process",
  //   description:
  //     "Complete explanation about audit planning, execution and reporting.",
  //   duration: "25 mins",
  //   instructor: "Hawksberg International",
  //   video: "https://www.youtube.com/embed/QoPZbdctiYE",
  // },
  // {
  //   id: 4,
  //   title: "Risk Based Thinking",
  //   description:
  //     "Learn risk identification, assessment and mitigation techniques.",
  //   duration: "20 mins",
  //   instructor: "Hawksberg International",
  //   video: "https://www.youtube.com/embed/1uOo1ZZIgoU",
  // },
// ]);

const COURSE_VIDEOS = {

  iso9001: [
      {
    id: 1,
    title: "ISO 9001 - Introduction",
    description:
      "Learn the fundamentals of ISO 9001 Quality Management System and understand its requirements.",
    duration: "18 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/otnEiom_BJM",
  },
  {
    id: 2,
    title: "ISO 9001 - Clause Overview",
    description:
      "Understand clauses, implementation methods and documentation process.",
    duration: "22 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/DbfA1d5R8V8",
  },
  {
    id: 3,
    title: "Internal Audit Process",
    description:
      "Complete explanation about audit planning, execution and reporting.",
    duration: "25 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/QoPZbdctiYE",
  },
  {
    id: 4,
    title: "Risk Based Thinking",
    description:
      "Learn risk identification, assessment and mitigation techniques.",
    duration: "20 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/1uOo1ZZIgoU",
  },
  ],
iso14001: [
  {
    id: 1,
    title: "ISO 14001 Introduction",
    description:
      "Understand the fundamentals of ISO 14001 Environmental Management Systems (EMS), its principles, key benefits, certification process, and how organizations can improve environmental performance while meeting compliance requirements.",
    duration: "20 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/gLcGvP7Er7k",
  },
  {
    id: 2,
    title: "Environmental Management System",
    description:
      "Learn how to establish, implement, maintain and continually improve an Environmental Management System (EMS), including environmental aspects, legal compliance, operational controls, performance evaluation, and continual improvement.",
    duration: "22 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/J7Fak8QI6Ww",
  },
],
iso27001: [
  {
    id: 1,
    title: "ISO 27001 Introduction",
    description:
      "Learn the fundamentals of ISO/IEC 27001 Information Security Management System (ISMS), including its objectives, core principles, certification requirements, and how organizations protect confidential information, ensure data integrity, and maintain business continuity.",
    duration: "18 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/X4MKNuV8JVI",
  },
  {
    id: 2,
    title: "ISMS Overview",
    description:
      "Gain a comprehensive understanding of the Information Security Management System (ISMS), including risk assessment, risk treatment, security controls, Annex A controls, Statement of Applicability (SoA), and the continual improvement process required for ISO 27001 compliance.",
    duration: "20 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/mJv1hdQKHT8",
  },
],

riskidentification: [
  {
    id: 1,
    title: "Introduction to Risk Identification",
    description:
      "Understand the fundamentals of risk identification, why it is important, the objectives of identifying risks, and the role of risk identification in the ISO 31000 Risk Management Framework.",
    duration: "18 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/P-uCBOkFVVM",
  },
  {
    id: 2,
    title: "Types of Risks",
    description:
      "Learn different categories of risks including Strategic, Operational, Financial, Compliance, Information Security, Cyber Security, Environmental, and Health & Safety risks.",
    duration: "20 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/rhJz6D8H6WE",
  },
  {
    id: 3,
    title: "Risk Identification Techniques",
    description:
      "Explore commonly used risk identification techniques such as Brainstorming, SWOT Analysis, PESTLE Analysis, Checklists, Interviews, Process Mapping, and Workshops.",
    duration: "24 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/8mFQ8M2A4mY",
  },
  {
    id: 4,
    title: "Risk Register Preparation",
    description:
      "Learn how to prepare a Risk Register by documenting identified risks, causes, impacts, existing controls, risk owners, and action plans.",
    duration: "22 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/oHg5SJYRHA0",
  },
  {
    id: 5,
    title: "Practical Risk Identification Exercise",
    description:
      "Understand how to identify risks in real-world business processes through practical case studies and organizational examples.",
    duration: "26 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/Nk0H9WeQqP8",
  },
],

riskevaluation: [
  {
    id: 1,
    title: "Introduction to Risk Evaluation",
    description:
      "Learn the fundamentals of risk evaluation, its objectives, importance, and how it supports decision-making within the ISO 31000 Risk Management Framework.",
    duration: "18 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/2D4v7F4X5mA",
  },
  {
    id: 2,
    title: "Risk Criteria",
    description:
      "Understand how organizations establish risk criteria by considering legal requirements, business objectives, stakeholder expectations, and organizational context.",
    duration: "20 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/xv9XlLh0D5A",
  },
  {
    id: 3,
    title: "Risk Matrix and Risk Rating",
    description:
      "Learn how to evaluate risks using likelihood, impact, consequence, and probability to determine overall risk ratings through a risk matrix.",
    duration: "22 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/Q3o7V9eT0O4",
  },
  {
    id: 4,
    title: "Risk Prioritization",
    description:
      "Understand methods for prioritizing risks based on severity, business impact, urgency, and available organizational resources.",
    duration: "21 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/M1Q2Qk2R0qM",
  },
  {
    id: 5,
    title: "Risk Evaluation Case Study",
    description:
      "Apply risk evaluation concepts through practical business scenarios, evaluate identified risks, compare them against risk criteria, and determine appropriate priorities.",
    duration: "25 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/4aN7V5V5z8Q",
  },
],

riskassessment: [
  {
    id: 1,
    title: "Introduction to Risk Assessment",
    description:
      "Understand the fundamentals of risk assessment, its objectives, importance, and how it supports informed decision-making within the ISO 31000 Risk Management Framework.",
    duration: "18 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/CJan-3R4YsM",
  },
  {
    id: 2,
    title: "Risk Analysis Process",
    description:
      "Learn the complete risk analysis process, including identifying existing controls, determining likelihood and consequences, and estimating the overall level of risk.",
    duration: "22 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/CJan-3R4YsM",
  },
  {
    id: 3,
    title: "Likelihood and Consequence Assessment",
    description:
      "Understand how to measure the likelihood of occurrence and the consequences of risks to determine their significance and business impact.",
    duration: "20 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/CJan-3R4YsM",
  },
  {
    id: 4,
    title: "Risk Matrix and Risk Rating",
    description:
      "Learn how to use a risk matrix to calculate risk ratings, classify risk levels, and prioritize risks for treatment based on organizational criteria.",
    duration: "24 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/CJan-3R4YsM",
  },
  {
    id: 5,
    title: "Risk Assessment Case Study",
    description:
      "Apply the complete risk assessment methodology through a practical business case study, from analysis to prioritization and documentation in a risk register.",
    duration: "26 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/CJan-3R4YsM",
  },
],

risktreatment: [
  {
    id: 1,
    title: "Introduction to Risk Treatment",
    description:
      "Understand the fundamentals of Risk Treatment, its objectives, importance, and how it helps organizations reduce, control, transfer, or accept risks as part of the ISO 31000 Risk Management Framework.",
    duration: "18 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/JxX9m2Q2k4Y",
  },
  {
    id: 2,
    title: "Risk Treatment Options",
    description:
      "Learn the different risk treatment strategies including Risk Avoidance, Risk Reduction, Risk Sharing (Transfer), Risk Acceptance, and Risk Retention with practical examples.",
    duration: "22 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/JxX9m2Q2k4Y",
  },
  {
    id: 3,
    title: "Risk Control Implementation",
    description:
      "Understand how to select, implement, and monitor appropriate risk controls, including administrative, technical, and physical controls to reduce identified risks.",
    duration: "20 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/JxX9m2Q2k4Y",
  },
  {
    id: 4,
    title: "Risk Treatment Plan",
    description:
      "Learn how to prepare an effective Risk Treatment Plan by assigning responsibilities, defining timelines, identifying required resources, and monitoring treatment effectiveness.",
    duration: "24 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/JxX9m2Q2k4Y",
  },
  {
    id: 5,
    title: "Risk Treatment Case Study",
    description:
      "Apply Risk Treatment concepts through practical business scenarios, implement suitable treatment strategies, evaluate residual risks, and document actions in the Risk Register.",
    duration: "26 mins",
    instructor: "Hawksberg International",
    video: "https://www.youtube.com/embed/JxX9m2Q2k4Y",
  },
],

};

// const [videos, setVideos] = useState(
//   COURSE_VIDEOS[user.portal] || []
// );
//   const currentVideo = videos[selectedVideo];
// const portalKey = (user.training_name || "").toLowerCase();
const portalKey = (
  trainingName ||
  user?.training_name ||
  ""
).toLowerCase();

useEffect(() => {
  if (authChecked && user) {
    setVideos(COURSE_VIDEOS[portalKey] || []);
  }
}, [authChecked, user, portalKey]);

const currentVideo = videos[selectedVideo];

if (!authChecked) return null;

if (!user) {
  redirect("/training-login");
}

const isAdmin = user.role === "admin";

if (!currentVideo) {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-[#071A33] text-white text-xl">
        No training videos found for this portal.
      </div>
    </Layout>
  );
}

  const nextVideo = () => {
    if (selectedVideo < videos.length - 1) {
      setSelectedVideo(selectedVideo + 1);
    }
  };

  const previousVideo = () => {
    if (selectedVideo > 0) {
      setSelectedVideo(selectedVideo - 1);
    }
  };

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

  setShowVideoForm(false);
};

  return (
    <Layout>
      <section className="relative min-h-screen overflow-hidden bg-[#071A33]">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,162,58,0.15),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.12),transparent_40%)]" />
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="container-x relative py-16">

          {/* Header */}

          <div className="mb-10 flex flex-wrap items-center justify-between gap-6">

            <div>

              <p className="text-sm uppercase tracking-[0.35em] text-gold">
                Hawksberg International
              </p>

              <h1 className="mt-3 font-display text-5xl text-white">
                Training Portal
              </h1>

              <p className="mt-4 text-white/70">
                Welcome <span className="font-semibold text-gold">
                  {user.name}
                </span>
              </p>

            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Logged in as
              </p>

              <h3 className="mt-2 text-lg font-bold text-gold">
                {isAdmin ? "Administrator" : "Training User"}
              </h3>

            </div>

          </div>

          {/* PART 2 CONTINUES BELOW */}

                    <div className="grid gap-8 lg:grid-cols-12">

            <div className="lg:col-span-3">
  <TrainingVideoList
    videos={videos}
    selectedVideo={selectedVideo}
    setSelectedVideo={setSelectedVideo}
  />
</div>

            {/* Main Content */}

            <div className="lg:col-span-9">

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
{/* YouTube Video */}

<iframe
  key={currentVideo.id}
  src={currentVideo.video}
  title={currentVideo.title}
  loading="lazy"
  className="aspect-video w-full rounded-t-2xl"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
                {/* Video */}

                {/* <video
                  key={currentVideo.id}
                  controls
                  className="aspect-video w-full bg-black"
                >
                  <source
                    src={currentVideo.video}
                    type="video/mp4"
                  />

                  Your browser does not support HTML5 video.

                </video> */}

                {/* Content */}

                <div className="p-8">

                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div>

                      <p className="text-sm uppercase tracking-[0.3em] text-gold">
                        ISO Training
                      </p>

                      <h2 className="mt-3 text-3xl font-bold text-white">
                        {currentVideo.title}
                      </h2>

                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">

                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                        Duration
                      </p>

                      <p className="mt-2 font-semibold text-gold">
                        {currentVideo.duration}
                      </p>

                    </div>

                  </div>

                  <div className="mt-8">

                    <h3 className="text-lg font-semibold text-white">
                      Description
                    </h3>

                    <p className="mt-4 leading-8 text-white/70">
                      {currentVideo.description}
                    </p>

                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">

                    <button
                      onClick={previousVideo}
                      disabled={selectedVideo === 0}
                      className="rounded-xl border border-gold px-8 py-3 font-semibold text-gold transition hover:bg-gold hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Previous Lesson
                    </button>

                    <button
                      onClick={nextVideo}
                      disabled={selectedVideo === videos.length - 1}
                      className="rounded-xl bg-gold px-8 py-3 font-semibold text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next Lesson
                    </button>

                  </div>
                                    {/* Instructor */}

                  <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">

                    <p className="text-xs uppercase tracking-[0.3em] text-gold">
                      Instructor
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {currentVideo.instructor}
                    </h3>

                  </div>

                  {/* Admin Controls */}

                  {isAdmin && (

                    <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/10 p-6">

                      <p className="text-xs uppercase tracking-[0.3em] text-gold">
                        Administrator Controls
                      </p>

                      <h3 className="mt-3 text-2xl font-bold text-white">
                        Video Management
                      </h3>

                      <p className="mt-3 text-white/70">
                        Upload, update and delete training videos.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-4">

                        {/* <button
                          className="rounded-xl bg-gold px-6 py-3 font-semibold text-black transition hover:scale-105"
                        >
                          Upload Video
                        </button> */}

                        <button
  onClick={() => setShowVideoForm(true)}
  className="rounded-xl bg-gold px-6 py-3 font-semibold text-black transition hover:scale-105"
>
  New Video
</button>

                        <button
                          className="rounded-xl border border-gold px-6 py-3 font-semibold text-gold transition hover:bg-gold hover:text-black"
                        >
                          Edit Video
                        </button>

                        <button
                          className="rounded-xl border border-red-500 px-6 py-3 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                        >
                          Delete Video
                        </button>

                      </div>

                    </div>

                  )}

                  {/* {showVideoForm && (
  <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8">
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
  </div>
)} */}

                  {/* Logout */}

                  <div className="mt-10">

                    <button
                     
//                       onClick={() => {
//   localStorage.clear();
//   window.location.replace("/training-login");
// }}
onClick={() => {
  localStorage.clear();

  window.location.href = "/training-login";
  window.location.reload();
}}
                      className="rounded-xl border border-white/20 px-8 py-3 font-semibold text-white transition hover:border-red-500 hover:bg-red-500"
                    >
                      Logout
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </Layout>

  );
}
