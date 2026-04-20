import { IoPlayCircleOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import Balancer from "react-wrap-balancer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { benefits } from "../utils/benefitsData";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const cardAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div
        className="relative flex h-screen justify-center items-center bg-[#F4F9F9]"
        style={{
          backgroundImage: `url('/tree.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "70%",
          backgroundPosition: "center",
        }}
      >
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="md:text-6xl text-4xl font-bold text-[#2E2E2E]">
            Find Inner Peace with{" "}
            <span className="text-[#457B9D]">MindWell</span>
          </h1>

          <p className="md:text-xl text-md font-medium mt-6 text-[#6C757D] max-w-2xl mx-auto">
            <Balancer>
              Grow a Healthier Mind – Mindfulness, Meditation & Support in One
              Gentle Space. Not Just an App. A Friend Who Listens. A Space That
              Heals.
            </Balancer>
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-x-4 mt-12 flex-wrap gap-y-4">
            {!user && (
              <button
                onClick={() => navigate("/signup")}
                className="bg-[#A8DADC] hover:bg-[#81B29A] text-[#2E2E2E] px-6 py-3 rounded-full shadow-md transition duration-300 flex items-center gap-2"
              >
                Get Started Free
                <GoArrowRight size={20} />
              </button>
            )}

            <button
              className="bg-white hover:bg-[#F1F7F7] text-[#457B9D] border border-[#A8DADC] px-6 py-3 rounded-full shadow-sm transition duration-300 flex items-center gap-2"
              onClick={() => navigate("/features")}
            >
              Learn More
              <IoPlayCircleOutline size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= BENEFITS SECTION ================= */}
      <div className="flex flex-col justify-center items-center bg-[#F4F9F9] text-[#2E2E2E] p-6">

        <div className="text-center mb-12 mt-16">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardAnimation}
            transition={{ type: "spring", stiffness: 50 }}
            className="md:text-5xl text-3xl font-bold text-[#457B9D] mb-4"
          >
            Transform Your Life with MindWell
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardAnimation}
            transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
            className="text-lg text-[#6C757D] max-w-xl mx-auto"
          >
            <Balancer>
              Experience the powerful benefits of regular mental wellness practice
            </Balancer>
          </motion.p>
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-x-8 flex-wrap gap-y-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardAnimation}
              transition={{
                type: "spring",
                stiffness: 50,
                delay: 0.3 + index * 0.1,
              }}
              className="w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-[#E6EFF2]"
            >
              <div className="mb-4 text-[#81B29A]">
                <benefit.icon size={34} />
              </div>

              <h2 className="text-xl font-semibold text-[#457B9D] mb-2">
                {benefit.title}
              </h2>

              <p className="text-[#6C757D] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;