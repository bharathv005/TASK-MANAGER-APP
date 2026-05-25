import axios from "axios";

// Fallback to localhost if the environment variable is missing
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      // Standardizes token format to 'Bearer <token>' if your backend uses it.
      // If your backend middleware checks for raw strings, use: req.headers.Authorization = token;
      req.headers.Authorization = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;