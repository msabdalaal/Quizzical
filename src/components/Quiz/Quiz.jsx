import blob1 from "../../assets/blob 5.svg";
import blob2 from "../../assets/blob 5 (1).svg";
import "./Quiz.css";
import Question from "../Question/Question";
import { useEffect, useState } from "react";

export default function Quizz() {
  let [Questions, setQuestions] = useState([]);
  let [correctAnswers, setCorrectAnswers] = useState({ empty: true });
  let [correctCount, setCorrectCount] = useState(0);
  let [showAgain, setShowAgain] = useState(false);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((Data) => Data.json())
      .then((Questions) => {
        setQuestions(Questions.results);
      });
  }, []);

  let QuestionsElements = Questions.map((question) => {
    function handleClick(e) {
      Array.from(e.target.parentElement.parentElement.children).map((e) => {
        e.children[0].classList.remove("active");
      });
      e.target.classList.toggle("active");
      if (e.target.value == question.correct_answer) {
        setCorrectAnswers({
          ...correctAnswers,
          [question.question]: true,
          empty: false,
        });
      } else {
        setCorrectAnswers({
          ...correctAnswers,
          [question.question]: false,
          empty: false,
        });
      }
    }
    return (
      <>
        <img src={blob1} alt="blob1" className="blob1" />
        <img src={blob2} alt="blob2" className="blob2" />
        <Question
          key={question.question}
          question={question.question}
          correct={question.correct_answer}
          incorrect={question.incorrect_answers}
          handleClick={(event) => handleClick(event)}
        />
      </>
    );
  });
  function checkAnswers() {
    for (let i = 0; i < Object.keys(correctAnswers).length; i++) {
      if (correctAnswers[Object.keys(correctAnswers)[i]] === true) {
        setCorrectCount((e) => ++e);
      }
    }
    correctAnswers.empty
      ? alert(`Really ?
Select Some Answers, Man`)
      : setShowAgain(true);
  }
  function tryAgain() {
    window.location.href = "../../../index.html";
  }
  return (
    <>
      {" "}
      <div className="questionContainer">{QuestionsElements}</div>
      <div className="btnContainer">
        {showAgain ? (
          <>
            <h2>You scored {correctCount}/5 correct answers</h2>
            <button onClick={tryAgain} className="check">
              Try Again
            </button>
          </>
        ) : (
          <button onClick={checkAnswers} className="check">
            Check Answers
          </button>
        )}
      </div>
    </>
  );
}
