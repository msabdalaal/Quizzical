import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Question.css";
export default function Question({
  question,
  correct,
  incorrect,
  handleClick,
}) {
  let answers = [...incorrect, correct];
  let [answersOrder, setAnswersOrder] = useState(
    answers.sort((a, b) => 0.5 - Math.random())
  );

  let questionAnswers = answersOrder.map((answer) => {
    return (
      <div key={answer} className="answer">
        <button onClick={(event) => handleClick(event)} value={answer}>
          {answer}
        </button>
      </div>
    );
  });
  return (
    <div  className="question">
      <h1>
        <ReactMarkdown children={question} />
      </h1>
      <div className="answers">{questionAnswers}</div>
    </div>
  );
}
