import React, { useRef, useState } from "react";
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

  const handleAnswer = (index) => {
    setAnswers([...answers, index]);
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const totalPoints = answers.reduce((total, answer, idx) => {
    return answer === quizData[idx].correct ? total + 4 : total;
  }, 0);

  if (showResult) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-white">
        <h2 className="text-2xl font-bold mb-6">Quiz Results</h2>
        {quizData.map((q, idx) => (
          <div
            key={idx}
            className={`p-4 mb-4 rounded-lg ${
              answers[idx] === q.correct ? "bg-green-600" : "bg-red-600"
            }`}
          >
            <h3 className="font-semibold">
              Q{idx + 1}: {q.question}
            </h3>
            <p>
              Your answer:{" "}
              {typeof q.options[answers[idx]] === "object"
                ? q.options[answers[idx]].text || "[Image Option]"
                : q.options[answers[idx]]}{" "}
              <br />
              Correct answer:{" "}
              {typeof q.options[q.correct] === "object"
                ? q.options[q.correct].text || "[Image Option]"
                : q.options[q.correct]}
            </p>
          </div>
        ))}
        <h3 className="text-xl font-bold mt-6">Total Points: {totalPoints}</h3>
      </div>
    );
  }

  const q = quizData[current];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-indigo-700 to-purple-700 text-white">
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl max-w-xl w-full shadow-lg">
        <h2 className="text-lg font-semibold mb-2">
          Question {current + 1} of {quizData.length}
        </h2>
        <h3 className="text-xl font-bold mb-4">{q.question}</h3>
        {q.image && (
          <img
            src={q.image}
            alt="question"
            className="mb-4 rounded-lg w-full h-48 object-cover"
          />
        )}
        <div className="grid gap-4">
          {q.options.map((opt, idx) => (
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
              <span>{opt.text || (typeof opt === "string" ? opt : "")}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPublishedAnimal;
