import React from "react";
import Card from "../Card/Card";

import "./FinalPage.css";

const FinalPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  setTopScore,
  setScore,
  username,
  setUsername,
}) => {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setUsername("");
  };

  return (
    <Card>
      <h1 className="heading">You reached the end of the game, {username}!</h1>

      <h3 className="final_score">{` You answered ${score} correct answers`}</h3>

      <button className="play_again_btn" onClick={handleClick}>
        Play Again
      </button>
    </Card>
  );
};

export default FinalPage;
