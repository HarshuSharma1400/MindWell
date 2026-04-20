import { features } from "../utils/featureData";
import { useNavigate } from "react-router-dom";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

function Features() {
  const navigate = useNavigate();

  const animationSettings = {
    initial: { x: -80, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { type: "spring", stiffness: 50 },
  };

  return (
    <div className="min-h-screen bg-[#F4F9F9] px-6 py-16">

      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <Balancer>
          <motion.h1
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: 0.2 }}
            className="md:text-4xl text-3xl font-bold text-[#457B9D]"
          >
            Features That Transform Your Mental Wellness Journey
          </motion.h1>

          <motion.p
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: 0.3 }}
            className="md:text-lg text-base mt-4 text-[#6C757D]"
          >
            Discover tools designed to gently support your mental health
            and emotional well-being.
          </motion.p>
        </Balancer>
      </div>

      {/* Feature Cards */}
      <div className="flex justify-center gap-x-8 flex-wrap gap-y-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(feature.url)}
            aria-label={`Navigate to ${feature.title}`}
            {...animationSettings}
            transition={{
              ...animationSettings.transition,
              delay: 0.4 + index * 0.1,
            }}
            className="w-80 bg-white rounded-2xl p-6 shadow-md border border-[#E6EFF2] hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <div className="mb-4 text-[#81B29A]">
              <feature.icon size={30} />
            </div>

            <h2 className="text-xl font-semibold text-[#457B9D] mb-2">
              {feature.title}
            </h2>

            <p className="text-[#6C757D] leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features;