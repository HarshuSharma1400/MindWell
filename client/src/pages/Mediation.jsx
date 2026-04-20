import { useState } from "react";
import { mediation } from "../utils/mediationData";

function Meditation() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardClick = (index) => {
    setHoveredIndex(hoveredIndex === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="min-h-screen bg-[#F4F9F9] px-6 py-12">

      {/* Heading */}
      <h1 className="text-center md:text-4xl text-2xl font-bold mb-12 text-[#457B9D]">
        Your Guide to Mental Clarity
      </h1>

      {/* Cards */}
      <div className="flex justify-center flex-wrap gap-x-8 gap-y-10">
        {mediation.map((data, index) => (
          <div
            key={index}
            className="w-80 bg-white rounded-2xl shadow-md border border-[#E6EFF2] hover:shadow-lg transition duration-300 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick(index)}
          >
            <figure className="rounded-t-2xl overflow-hidden">
              {hoveredIndex === index ? (
                <iframe
                  title="Meditation Video"
                  width="100%"
                  height="200"
                  src={data.preview}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="transition-all duration-500 ease-in-out"
                />
              ) : (
                <img
                  src={data.image}
                  alt="Meditation Video Thumbnail"
                  className="w-full h-48 object-cover"
                />
              )}
            </figure>

            <div className="p-5 text-center">
              <h2 className="text-lg font-semibold text-[#457B9D] mb-2">
                {data.title}
              </h2>

              <p className="text-[#6C757D] text-sm mb-4">
                {data.author}
              </p>

              <a
                href={data.video}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#A8DADC] hover:bg-[#81B29A] text-[#2E2E2E] px-5 py-2 rounded-full transition duration-300 shadow-sm">
                  Watch Session
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meditation;