import { useState } from "react";

// Simple Quiz Questions
const questions = [
  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: 1,
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: 1,
  },
  {
    question: "Which is a frontend library?",
    options: ["React", "Node", "MongoDB", "SQL"],
    answer: 0,
  },
];

export default function QuizApp() {
  const [index, setIndex] = useState(0); // Current question
  const [selected, setSelected] = useState(null); // Selected option
  const [score, setScore] = useState(0); // Score
  const [finished, setFinished] = useState(false); // Quiz end

  const handleNext = () => {
    // If answer is correct
    if (selected === questions[index].answer) {
      setScore(score + 1);
    }

    // Go to next question or finish
    if (index === questions.length - 1) {
      setFinished(true);
    } else {
      setIndex(index + 1);
    }

    setSelected(null); // Reset selection
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  // If quiz finished
  if (finished) {
    return (
      <div className="flex flex-col items-center p-6 text-center">
        <h1 className="text-2xl font-bold mb-3">Quiz Complete!</h1>
        <p className="text-lg mb-5">Score: {score} / {questions.length}</p>
        <button
          onClick={restart}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          Restart
        </button>
      </div>
    );
  }

  // Main quiz UI
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">{questions[index].question}</h2>

      {questions[index].options.map((option, i) => (
        <button
          key={i}
          onClick={() => setSelected(i)}
          className={`w-full p-3 mb-2 border rounded-lg 
            ${selected === i ? "bg-blue-500 text-white" : "bg-gray-100"}`}
        >
          {option}
        </button>
      ))}

      <button
        disabled={selected === null}
        onClick={handleNext}
        className="w-full mt-4 p-3 bg-green-600 text-white rounded-lg disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
}