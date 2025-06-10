import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quizData = [
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    correct: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1,
  },
  {
    question: "What part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Flower", "Leaf"],
    correct: 3,
  },
  {
    question: "Which gas do humans need to breathe in to survive?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    correct: 1,
  },
  {
    question: "Identify this famous scientist",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    options: [
      { text: "Isaac Newton" },
      { text: "Albert Einstein" },
      { text: "Nikola Tesla" },
      { text: "Galileo Galilei" },
    ],
    correct: 1,
  },
  {
    question: "What force keeps us on the ground?",
    options: ["Magnetism", "Friction", "Gravity", "Inertia"],
    correct: 2,
  },
  {
    question: "Which part of the human body contains the brain?",
    options: ["Chest", "Skull", "Abdomen", "Spine"],
    correct: 1,
  },
  {
    question: "Select the image of a microscope",
    options: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/09/Compound_Microscope.png",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5c/Telescope_3.jpg",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/38/Magnifying_glass_4.jpg",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/86/Binoculars07.jpg",
      },
    ],
    correct: 0,
  },
  {
    question: "Which of these is a renewable energy source?",
    options: ["Coal", "Natural Gas", "Wind", "Petrol"],
    correct: 2,
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["50\u00b0C", "100\u00b0C", "150\u00b0C", "200\u00b0C"],
    correct: 1,
  },
];

const RecentPublishedScience = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleAnswer = (index) => {
    setAnswers([...answers, index]);
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const correctCount = answers.filter(
    (a, i) => a === quizData[i].correct
  ).length;
  const totalPoints = correctCount * 4;

  const attemptedCount = answers.length;

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-indigo-700 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto">
        {!showResult ? (
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-2">
              Question {current + 1} of {quizData.length}
            </h2>
            <h3 className="text-xl font-bold mb-4">
              {quizData[current].question}
            </h3>
            {quizData[current].image && (
              <img
                src={quizData[current].image}
                alt="question"
                className="mb-4 rounded-lg w-full h-48 object-cover"
              />
            )}
            <div className="grid gap-4">
              {quizData[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="flex items-center gap-3 p-3 bg-white/20 hover:bg-white/30 rounded-lg transition"
                >
                  {opt.image && (
                    <img
                      src={opt.image}
                      alt="option"
                      className="w-10 h-10 object-contain"
                    />
                  )}
                  <span>
                    {opt.text || (typeof opt === "string" ? opt : "")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6">Quiz Summary</h2>
            <div className="max-w-xl mx-auto mb-6">
              <div className="bg-white/10 backdrop-blur-md text-white rounded-xl p-6 shadow-md grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">Total Questions</span>
                  <span className="text-xl font-bold">{quizData.length}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">Attempted</span>
                  <span className="text-xl font-bold">{answers.length}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">Correct</span>
                  <span className="text-xl font-bold">{correctCount}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">Points</span>
                  <span className="text-xl font-bold">{totalPoints}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowSummary(!showSummary)}
              className="px-4 py-2 mt-4 bg-green-600 hover:bg-green-700 rounded-lg"
            >
              {showSummary ? "Hide Summary" : "View Summary"}
            </button>

            {showSummary && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {quizData.map((q, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border-4 text-white/90 ${
                      answers[idx] === q.correct
                        ? "border-green-500 bg-green-100/10"
                        : "border-red-500 bg-red-100/10"
                    }`}
                  >
                    <h3 className="font-semibold mb-1">
                      Q{idx + 1}: {q.question}
                    </h3>
                    <p className="mb-1">
                      Your answer:{" "}
                      {typeof q.options[answers[idx]] === "object"
                        ? q.options[answers[idx]]?.text || "[Image Option]"
                        : q.options[answers[idx]] || "Not Answered"}
                    </p>
                    <p>
                      Correct answer:{" "}
                      {typeof q.options[q.correct] === "object"
                        ? q.options[q.correct].text || "[Image Option]"
                        : q.options[q.correct]}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentPublishedScience;
