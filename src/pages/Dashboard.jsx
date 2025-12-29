import { useEffect, useState } from "react";
import { getMyAttempts } from "../services/interviewService";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { token, logout } = useAuth();
  const [attempts, setAttempts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadAttempts = async () => {
      const res = await getMyAttempts(token);
      setAttempts(res.data);
    };
    loadAttempts();
  }, [token]);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl">Dashboard</h2>
        <button onClick={logout} className="text-red-600">
          Logout
        </button>
      </div>

      <button
        onClick={() => navigate("/interview")}
        className="bg-blue-600 text-white px-4 py-2 mb-6"
      >
        Start Interview
      </button>

      <h3 className="text-xl mb-3">Previous Attempts</h3>

      {attempts.map((a) => (
        <div key={a._id} className="border p-3 mb-2">
          <p>Role: {a.jobRole}</p>
          <p>Score: {a.score}/10</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
