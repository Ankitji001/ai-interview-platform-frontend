import { useState } from "react";
import {
  generateQuestions,
  submitAnswers,
} from "../services/interviewService";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Interview = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [jobRole, setJobRole] = useState("Frontend Developer");
  const [experienceLevel, setExperienceLevel] = useState("Beginner");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const startInterview = async () => {
    const res = await generateQuestions(
      { jobRole, experienceLevel },
      token
    );
    setQuestions(res.data.questions);
    setAnswers(Array(res.data.questions.length).fill(""));
  };

  const submitInterview = async () => {
    const res = await submitAnswers(
      { jobRole, questions, answers },
      token
    );
    navigate("/result", { state: res.data.attempt });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Interview</h2>

      {questions.length === 0 ? (
        <>
          <select
            className="border p-2 mr-2"
            onChange={(e) => setJobRole(e.target.value)}
          >
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
          </select>

          <select
            className="border p-2 mr-2"
            onChange={(e) => setExperienceLevel(e.target.value)}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
          </select>

          <button
            onClick={startInterview}
            className="bg-green-600 text-white px-4 py-2"
          >
            Generate Questions
          </button>
        </>
      ) : (
        <>
          {questions.map((q, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{q}</p>
              <textarea
                className="border w-full p-2"
                rows="3"
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[i] = e.target.value;
                  setAnswers(newAnswers);
                }}
              />
            </div>
          ))}

          <button
            onClick={submitInterview}
            className="bg-blue-600 text-white px-4 py-2"
          >
            Submit Answers
          </button>
        </>
      )}
    </div>
  );
};

export default Interview;
