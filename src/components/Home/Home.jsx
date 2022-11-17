import blob1 from "../../assets/blob 5.svg";
import blob2 from "../../assets/blob 5 (1).svg";
import "./Home.css";

export default function Home({ startQuiz }) {
  return (
    <div className="home">
      <img src={blob1} alt="blob1" className="blob1" />
      <img src={blob2} alt="blob2" className="blob2" />
      <h1>Quizzical</h1>
      <p>Test Your Mind</p>
      <button onClick={startQuiz}>Start quiz</button>
    </div>
  );
}
