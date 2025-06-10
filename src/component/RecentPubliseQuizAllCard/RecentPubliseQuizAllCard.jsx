import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const RecentPubliseQuizAllCard = () => {
  const nav = useNavigate();
  const quizAnimals = () => {
    nav("/recent-published/animals");
  };
  return (
    <div>
      <h2>
        {" "}
        <div className="text-2xl font-bold ml-[30px] mt-[10px]">
          Recent Published
        </div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Animal Quiz</h3>
          <p className="text-gray-600 mb-4">
            Test your knowledge about various animals and their habitats.
          </p>
          <button
            onClick={quizAnimals}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Take Quiz
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Science Quiz</h3>
          <p className="text-gray-600 mb-4">
            Explore the wonders of science with this engaging quiz.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Take Quiz
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">History Quiz</h3>
          <p className="text-gray-600 mb-4">
            Challenge your knowledge of historical events and figures.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Take Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentPubliseQuizAllCard;
