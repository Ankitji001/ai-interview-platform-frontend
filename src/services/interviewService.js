import axios from "axios";

const API = "http://localhost:5000/api/interview";

export const generateQuestions = (data, token) =>
  axios.post(`${API}/generate`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const submitAnswers = (data, token) =>
  axios.post(`${API}/submit`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getMyAttempts = (token) =>
  axios.get(`${API}/my-attempts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
