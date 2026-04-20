/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState("");
  const [date] = useState(new Date().toISOString().split("T")[0]);

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

  useEffect(() => {
    const savedEntries =
      JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(savedEntries);
  }, []);

  const handleSave = () => {
    if (!currentEntry.trim()) {
      toast.error("Please write something before saving.");
      return;
    }

    const newEntry = { date, content: currentEntry };
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    setCurrentEntry("");

    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
    toast.success("Journal saved successfully 🌿");
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
    toast.info("Entry removed.");
  };

  return (
    <div className="min-h-screen bg-[#F4F9F9] px-6 py-12">
      <ToastContainer />

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-[#457B9D] mb-10">
        Your Personal Journal
      </h1>

      {/* Write Section */}
      <div className="bg-white md:max-w-3xl m-auto rounded-2xl p-8 mb-12 shadow-md border border-[#E6EFF2]">
        <h2 className="text-2xl font-semibold text-[#457B9D] mb-4">
          Write Your Thoughts
        </h2>

        <textarea
          className="w-full bg-[#F8FBFB] text-[#2E2E2E] h-40 p-4 rounded-xl border border-[#DDEEEE] focus:outline-none focus:ring-2 focus:ring-[#A8DADC] placeholder-[#9AA6AC]"
          placeholder="What’s on your mind today?"
          value={currentEntry}
          onChange={(e) => setCurrentEntry(e.target.value)}
        />

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className="bg-[#A8DADC] hover:bg-[#81B29A] text-[#2E2E2E] px-6 py-3 rounded-full shadow-sm transition duration-300"
          >
            Save Entry
          </button>
        </div>
      </div>

      {/* Entries Section */}
      <div className="md:max-w-3xl m-auto">
        <h2 className="text-2xl font-bold text-center text-[#457B9D] mb-6">
          Your Journal Entries
        </h2>

        {entries.length > 0 ? (
          <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
            {entries.map((entry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#E6EFF2] hover:shadow-md transition duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm text-[#6C757D]">
                      {entry.date}
                    </p>
                    <p className="text-[#2E2E2E] mt-3 leading-relaxed whitespace-pre-wrap">
                      {entry.content}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDelete(index)}
                    className="text-[#A8DADC] hover:text-[#E76F51] transition duration-300"
                  >
                    <MdDelete size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#6C757D] text-center">
            No entries yet. Start writing your first one 🌿
          </p>
        )}
      </div>
    </div>
  );
};

export default Journal;