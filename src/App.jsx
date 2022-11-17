import { useState } from "react";
import Home from "./components/Home/Home";
import Quizz from "./components/Quiz/Quiz";

export default function App() {
  let [HomePage, setHomePage] = useState(true);
  function startQuiz() {
    setHomePage((e) => false);
  }
  function TryAgain() {
    setHomePage((e) => true);
  }
  return HomePage ? <Home startQuiz={startQuiz} /> : <Quizz TryAgain={TryAgain} />;
}
