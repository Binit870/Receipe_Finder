import { io } from "socket.io-client";

const token = localStorage.getItem("token");

// Automatically switch between dev & production
const BACKEND_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : import.meta.env.VITE_BACKEND_URL; // Set this in Netlify

const socket = io(BACKEND_URL, {
  withCredentials: true,
  auth: { token },
});

export default socket;
