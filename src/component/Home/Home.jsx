import React, { useRef } from "react";
import { motion } from "framer-motion";

const Card = ({ title, content, button }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transition = "transform 0.5s ease-out";
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 md:p-8 shadow-xl text-white transition-transform duration-300 cursor-pointer will-change-transform"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-yellow-300">
        {title}
      </h2>
      <p className="mb-6 text-sm md:text-base leading-relaxed">{content}</p>
      <button className="px-4 py-2 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
        {button}
      </button>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="ml-[-40px] lg:ml-[-155px] relative  ">
      <div className=" min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Animated Background SVGs */}
        <div className="absolute ml-5 inset-0 z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              d="M0 200 Q 300 100 600 200 T 1200 200"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
                  M0 200 Q 300 100 600 200 T 1200 200;
                  M0 200 Q 300 300 600 200 T 1200 200;
                  M0 200 Q 300 100 600 200 T 1200 200;
                "
              />
            </path>
          </svg>
          <svg
            className="w-full h-full absolute top-0 left-0 opacity-30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50%"
              cy="50%"
              r="300"
              stroke="url(#gradient)"
              strokeWidth="1"
              fill="none"
            >
              <animate
                attributeName="r"
                values="300;350;300"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
          <svg
            className="w-full h-full absolute bottom-0 right-0 opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1"
              d="M0 300 Q 400 100 800 300 T 1600 300"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                M0 300 Q 400 100 800 300 T 1600 300;
                M0 300 Q 400 200 800 300 T 1600 300;
                M0 300 Q 400 100 800 300 T 1600 300;
              "
              />
            </path>
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-4xl lg:max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Create Quiz"
            content="Create interactive quizzes in minutes with our online quiz maker."
            button="Create Quiz"
          />
          <Card
            title="Quizard AI"
            content="Create quizzes instantly with AI — just enter a topic and get engaging questions in seconds!"
            button="Generate Quiz"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
