import axios from "axios";

const API = "https://ai-interview-platform-backend-1.onrender.com";

export const loginUser = (data) =>
  axios.post(`${API}/login`, data);

export const registerUser = (data) =>
  axios.post(`${API}/register`, data);
