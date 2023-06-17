import "./FlashCards.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    id: 3457,
    question: "How many planets are there in the Solar System?",
    answer: "There are nine planets",
  },
  {
    id: 7336,
    question: "What is the largest planet in the Solar System?",
    answer: "Jupiter",
  },
  {
    id: 8832,
    question: "What is the smallest planet in the Solar System?",
    answer: "Pluto",
  },
  {
    id: 1297,
    question: "How old is the Solar System?",
    answer: "4.6 billion years old",
  },
  {
    id: 9103,
    question: "How far away is the closest star?",
    answer: "149 million km",
  },
  {
    id: 2002,
    question: "How many stars are there in the universe?",
    answer: "300 sextillion",
  },
];

export default function FlashCards() {
  const [select, setSelect] = useState(null);

  const handleSelect = (id) => {
    setSelect(id !== select ? id : null);
  };

  return (
    <div className="flashcards-section">
      <p>Astronomy Quiz 😜</p>
      <div className="flashcards on-tablet">
        {questions.map((item) => (
          <div
            onClick={() => handleSelect(item.id)}
            className={item.id === select ? "selected" : ""}
            key={item.id}
          >
            {item.id === select ? item.answer : item.question}
          </div>
        ))}
      </div>

      <button className="button-63">
        <Link to="/quiz">Take a quiz🚀 </Link>
      </button>
    </div>
  );
}
