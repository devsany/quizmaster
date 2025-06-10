import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quizData = [
  {
    question: "Which animal is known as the king of the jungle?",
    options: ["Tiger", "Elephant", "Lion", "Cheetah"],
    correct: 2,
  },
  {
    question: "Identify this animal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
    options: [
      { text: "Tiger" },
      { text: "Lion" },
      { text: "Jaguar" },
      { text: "Leopard" },
    ],
    correct: 1,
  },
  {
    question: "Which of the following is a flightless bird?",
    options: ["Sparrow", "Penguin", "Eagle", "Parrot"],
    correct: 1,
  },
  {
    question: "What is the fastest land animal?",
    options: ["Horse", "Cheetah", "Leopard", "Lion"],
    correct: 1,
  },
  {
    question: "Identify this aquatic mammal",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Dolphin1.jpg",
    options: [
      { text: "Whale" },
      { text: "Dolphin" },
      { text: "Seal" },
      { text: "Shark" },
    ],
    correct: 1,
  },
  {
    question: "Which animal is known for its black and white stripes?",
    options: ["Giraffe", "Zebra", "Tiger", "Cow"],
    correct: 1,
  },
  {
    question: "Select the image of a panda",
    options: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5f/Koala_climbing_tree.jpg",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e5/Brown_bear_in_Alaska.jpg",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/12/Polar_Bear_-_Alaska.jpg",
      },
    ],
    correct: 0,
  },
  {
    question: "Which animal has the longest neck?",
    options: ["Elephant", "Giraffe", "Camel", "Kangaroo"],
    correct: 1,
  },
  {
    question: "Which animal is known to build dams?",
    options: ["Otter", "Beaver", "Badger", "Mole"],
    correct: 1,
  },
  {
    question: "What is a baby frog called?",
    options: ["Tadpole", "Chick", "Cub", "Calf"],
    correct: 0,
  },
];

const RecentPublishedAnimal = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [timer, setTimer] = useState(60);
  const [totalTime, setTotalTime] = useState(0);

  const [questionTimes, setQuestionTimes] = useState([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  useEffect(() => {
    if (!showResult && timer > 0) {
      const countdown = setTimeout(() => {
        setTimer((prev) => prev - 1);
        setTotalTime((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0 && !showResult) {
      setAnswers((prev) => [...prev, null]);
      if (current + 1 < quizData.length) {
        setCurrent((prev) => prev + 1);
        setTimer(60);
      } else {
        setShowResult(true);
      }
    } else if (timer === 0 && !showResult) {
      const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
      setQuestionTimes((prev) => [...prev, timeSpent]);

      setAnswers((prev) => [...prev, null]);
      if (current + 1 < quizData.length) {
        setCurrent((prev) => prev + 1);
        setTimer(60);
        setQuestionStartTime(Date.now());
      } else {
        setShowResult(true);
      }
    }
  }, [timer, showResult, current]);

  const handleAnswer = (index) => {
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000); // in seconds
    setQuestionTimes((prev) => [...prev, timeSpent]);

    setAnswers((prev) => [...prev, index]);
    if (current + 1 < quizData.length) {
      setCurrent((prev) => prev + 1);
      setTimer(60);
      setQuestionStartTime(Date.now()); // reset start time for next question
    } else {
      setShowResult(true);
    }
  };

  const correctCount = answers.filter(
    (a, i) => a === quizData[i].correct
  ).length;
  const attemptedCount = answers.filter(
    (a) => a !== null && a !== undefined
  ).length;
  const totalPoints = correctCount * 4;

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const s = sec % 60;
    return `${min.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-indigo-700 to-purple-700 text-white font-sans">
      <div className="max-w-4xl mx-auto">
        {!showResult ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                Question {current + 1} of {quizData.length}
              </h2>
              <div className="text-lg font-bold bg-black/20 px-3 py-1 rounded-full">
                ⏱ {timer}s
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">
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
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
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
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg text-white"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-green-300">
              Quiz Summary
            </h2>
            <div className="max-w-xl mx-auto mb-6">
              <div className="bg-white/10 backdrop-blur-md text-white rounded-xl p-6 shadow-md grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">Total</span>
                  <span className="text-xl font-bold">{quizData.length}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">Attempted</span>
                  <span className="text-xl font-bold">{attemptedCount}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">Correct</span>
                  <span className="text-xl font-bold">{correctCount}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">Points</span>
                  <span className="text-xl font-bold">{totalPoints}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">Time</span>
                  <span className="text-xl font-bold">
                    {formatTime(totalTime)}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowSummary(!showSummary)}
                className="px-4 py-2 mt-4 bg-green-600 hover:bg-green-700 rounded-lg"
              >
                {showSummary ? "Hide Summary" : "View Summary"}
              </button>
            </div>

            {showSummary && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {quizData.map((q, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
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
                      {answers[idx] === null || answers[idx] === undefined
                        ? "Not Answered"
                        : typeof q.options[answers[idx]] === "object"
                        ? q.options[answers[idx]]?.text || "[Image Option]"
                        : q.options[answers[idx]]}
                    </p>
                    <p>
                      Correct answer:{" "}
                      {typeof q.options[q.correct] === "object"
                        ? q.options[q.correct].text || "[Image Option]"
                        : q.options[q.correct]}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RecentPublishedAnimal;
