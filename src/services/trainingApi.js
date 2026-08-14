const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const headers = {
  "Content-Type": "application/json",
};

const trainingApi = {
  // ============================
  // Login
  // ============================
  async login(data) {

     console.log("API URL:", `${API_URL}/training/login`);
  console.log("Request:", data);
    const res = await fetch(`${API_URL}/training/login`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    // if (!res.ok) {
    //   throw new Error("Login failed");
    // }

    if (!res.ok) {
  const error = await res.json();

  throw new Error(
    error.detail || "Login failed"
  );
}

    return await res.json();
  },

  // ============================
  // Get All Videos
  // ============================
  async getVideos() {
    const res = await fetch(`${API_URL}/training/videos`);

    if (!res.ok) {
      throw new Error("Unable to load videos");
    }

    return await res.json();
  },

  // ============================
  // Get Single Video
  // ============================
  async getVideo(id) {
    const res = await fetch(
      `${API_URL}/training/videos/${id}`
    );

    if (!res.ok) {
      throw new Error("Video not found");
    }

    return await res.json();
  },

  // ============================
// Get Videos By Training
// ============================
async getVideosByTraining(trainingName) {
  const res = await fetch(
    `${API_URL}/training/videos/training/${trainingName}`
  );

  if (!res.ok) {
    throw new Error("Unable to load videos");
  }

  return await res.json();
},

  // ============================
  // Add Video
  // ============================
  async createVideo(data) {
    const res = await fetch(
      `${API_URL}/training/videos`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error("Unable to upload video");
    }

    return await res.json();
  },

  // ============================
  // Update Video
  // ============================
  async updateVideo(id, data) {
    const res = await fetch(
      `${API_URL}/training/videos/${id}`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error("Unable to update video");
    }

    return await res.json();
  },

  // ============================
  // Delete Video
  // ============================
  async deleteVideo(id) {
    const res = await fetch(
      `${API_URL}/training/videos/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error("Unable to delete video");
    }

    return await res.json();
  },
};

export default trainingApi;