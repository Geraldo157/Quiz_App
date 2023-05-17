import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'
import './App.css'
import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(()=>{
    dispatch({type:"REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="text-center pt-12 flex flex-col items-center justify-center">
      <h1 className='text-white text-4xl font-bold mb-6'>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
