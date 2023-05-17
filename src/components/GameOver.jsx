import { useContext } from 'react';
import { QuizContext } from '../context/quiz'
import './GameOver.css';
import WellDone from '../img/welldone.svg'

function GameOver() {
  const [quizState, dispatch] = useContext(QuizContext)
    
  return (
    <div className='text-white flex flex-col items-center w-[500px]'>
      <h2 className='mb-2 text-2xl font-bold mb-8'>Game Over</h2>
      <p className='mb-2'>Score: {quizState.score}</p>
      <p className='mb-2'>You got {quizState.score} out of {quizState.questions.length} Questions</p>
      <img src={WellDone} alt="Fim do Quiz" className='max-h-[250px] mt-4 m-8'/>
      <button onClick={() => {dispatch({type: "NEW_GAME"})}} className='border-2 border-solid border-white m-4 font-bold cursor-pointer text-lg py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full focus:outline-none hover:from-purple-700 hover:to-purple-500'>Restart</button>
    </div>
  )
}

export default GameOver
