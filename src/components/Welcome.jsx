import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Quiz from "../img/quiz.svg";
import "./Welcome.css"

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  console.log(quizState)

  return (
    <div className="text-center max-w-lg">
      <h2 className="mb-8 text-4xl font-bold text-white">Welcome</h2>
      <p className="mb-8 text-purple-500">Click on the start button</p>
      <button onClick={() => {dispatch({type: "CHANGE_STATE"})}} className="font-bold cursor-pointer text-lg py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full focus:outline-none hover:from-purple-700 hover:to-purple-500">Start</button>
      <img src={Quiz} alt="Quiz start" className="w-full mt-8"/>
    </div>
  )
}

export default Welcome
