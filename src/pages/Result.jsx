import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return null;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Interview Result</h2>

      <p className="mb-2">
        <strong>Score:</strong> {state.score}/10
      </p>

      <pre className="bg-gray-100 p-4 whitespace-pre-wrap">
        {state.aiFeedback}
      </pre>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-4 bg-blue-600 text-white px-4 py-2"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Result;
