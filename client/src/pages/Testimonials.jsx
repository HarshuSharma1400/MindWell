import Balancer from "react-wrap-balancer";
import { testimonials } from "../utils/testimonialsData";
import { motion } from "framer-motion";

function Testimonials() {
  const animationSettings = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { type: "spring", stiffness: 60 },
  };

  return (
    <div className="min-h-screen bg-[#F4F9F9] flex flex-col items-center justify-center px-6 py-16">

      {/* Header */}
      <div className="text-center mb-14 max-w-3xl">
        <Balancer>
          <motion.h1
            {...animationSettings}
            className="md:text-5xl text-3xl font-bold mb-4 text-[#457B9D]"
          >
            Stories of Growth & Healing
          </motion.h1>
        </Balancer>

        <Balancer>
          <motion.p
            {...animationSettings}
            transition={{ ...animationSettings.transition, delay: 0.1 }}
            className="text-base md:text-lg text-[#6C757D]"
          >
            Discover how MindWell has gently supported people in their mental wellness journey.
          </motion.p>
        </Balancer>
      </div>

      {/* Testimonial Cards */}
      <div className="flex justify-center gap-x-10 gap-y-10 flex-wrap">

        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            {...animationSettings}
            transition={{
              ...animationSettings.transition,
              delay: 0.2 + index * 0.1,
            }}
            className="w-80 bg-white rounded-2xl shadow-md border border-[#E6EFF2] p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">

              {/* Avatar Circle */}
              <div className="w-14 h-14 rounded-full bg-[#A8DADC] flex items-center justify-center text-[#2E2E2E] font-bold text-lg">
                {testimonial.shorthand}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#457B9D]">
                  {testimonial.name}
                </h2>
                <p className="text-sm text-[#6C757D]">
                  {testimonial.job}
                </p>
              </div>
            </div>

            <p className="text-[#2E2E2E] leading-relaxed text-sm mb-4">
              <Balancer>{testimonial.review}</Balancer>
            </p>

            {/* Soft Rating */}
            <div className="flex gap-1 text-[#81B29A] text-lg">
              ★ ★ ★ ★ ★
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;