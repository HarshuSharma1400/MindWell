/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { submitPHQ9 } from "../apiService";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PieChart from "../components/PieChart";

const PHQ9 = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      toast.error("Please Login or Sign Up");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [user, navigate]);

  const questions = [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
    "Trouble concentrating on things, such as reading the newspaper or watching television?",
    "Moving or speaking so slowly that other people could have noticed? Or being so fidgety or restless that you have been moving around a lot more than usual?",
    "Thoughts that you would be better off dead or of hurting yourself in some way?",
  ];

  const answerOptions = [
    { value: 0, label: "Not at all" },
    { value: 1, label: "Several days" },
    { value: 2, label: "More than half the days" },
    { value: 3, label: "Nearly every day" },
  ];

  const [responses, setResponses] = useState(
    Array(questions.length).fill(0)
  );
  const [date] = useState(new Date().toISOString().split("T")[0]);
  const [severity, setSeverity] = useState("");
  const [showModal, setShowModal] = useState(false);

  const userId = user?._id;
  const token = user?.token;

  const calculateSeverity = (score) => {
    if (score <= 4) return "Minimal or None";
    if (score <= 9) return "Mild";
    if (score <= 14) return "Moderate";
    if (score <= 19) return "Moderately Severe";
    return "Severe";
  };

  const handleSubmit = async () => {
    try {
      if (!userId || !token) {
        toast.error("Please Login or Sign Up");
        navigate("/login");
        return;
      }

      const score = responses.reduce((a, b) => a + b, 0);
      const severityLevel = calculateSeverity(score);

      await submitPHQ9(userId, date, responses, token);

      setSeverity(severityLevel);
      setShowModal(true);
      toast.success("Response saved successfully");
    } catch (err) {
      toast.error("Submission failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F9F9] px-6 py-12 flex flex-col items-center">
      <ToastContainer />

      {/* Title */}
      <h1 className="md:text-4xl text-2xl font-bold text-[#457B9D] text-center mb-10">
        PHQ-9 Assessment
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full max-w-6xl">

        {/* Questions */}
        <div className="md:col-span-8 bg-white rounded-2xl shadow-md border border-[#E6EFF2] p-8">

          <h2 className="text-xl font-semibold text-[#457B9D] mb-6">
            Over the last two weeks, how often have you been bothered by the following problems?
          </h2>

          {questions.map((question, index) => (
            <div key={index} className="mb-6">
              <p className="font-medium text-[#2E2E2E] mb-3">
                {index + 1}. {question}
              </p>

              <div className="flex flex-wrap gap-3">
                {answerOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      const newResponses = [...responses];
                      newResponses[index] = option.value;
                      setResponses(newResponses);
                    }}
                    className={`px-4 py-2 rounded-full border text-sm transition duration-200 ${responses[index] === option.value
                        ? "bg-[#A8DADC] border-[#81B29A] text-[#2E2E2E]"
                        : "bg-[#F8FBFB] border-[#DDEEEE] text-[#6C757D]"
                      }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="bg-[#A8DADC] hover:bg-[#81B29A] text-[#2E2E2E] px-8 py-3 rounded-full shadow-sm transition duration-300"
            >
              Submit Responses
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="md:col-span-4 flex items-start justify-center">
          <div className="bg-white rounded-2xl shadow-md border border-[#E6EFF2] p-6 w-full">
            <PieChart />
          </div>
        </div>
      </div>

      {/* Result Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">

            <h2 className="text-2xl font-semibold text-[#457B9D] mb-4">
              Assessment Result
            </h2>

            <p className="text-xl font-medium text-[#2E2E2E] mb-2">
              {severity}
            </p>

            <p className="text-sm text-[#6C757D]">
              Date: {date}
            </p>

            <p className="text-sm text-[#6C757D] mt-4 leading-relaxed">
              This assessment is not a diagnosis.
              If you are experiencing distress or thoughts of self-harm,
              please consider reaching out to a mental health professional
              or trusted support resource.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 bg-[#A8DADC] hover:bg-[#81B29A] px-6 py-2 rounded-full transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PHQ9;