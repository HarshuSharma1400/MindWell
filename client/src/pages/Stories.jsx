import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { stories } from "../utils/storiesData";

function Stories() {
  return (
    <div className="min-h-screen bg-[#F4F9F9] px-6 py-12">

      {/* Page Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#457B9D] mb-12">
        Healing Stories & Calm Audio
      </h1>

      {/* Story Cards */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">

        {stories.map((story, index) => (
          <div
            key={index}
            className="w-80 bg-white rounded-2xl shadow-md border border-[#E6EFF2] hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <figure className="rounded-t-2xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dmdlgpurh/image/upload/v1736843317/music-bg_wpizsb.jpg"
                alt="Story"
                className="w-full h-40 object-cover"
              />
            </figure>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#457B9D] mb-4">
                {story.title}
              </h2>

              <AudioPlayer
                src={story.music}
                volume={0.5}
                showJumpControls={false}
                layout="stacked"
                style={{
                  backgroundColor: "#F8FBFB",
                  borderRadius: "12px",
                  boxShadow: "none",
                }}
              />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Stories;