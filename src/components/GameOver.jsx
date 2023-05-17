import { useContext } from 'react';
import { QuizContext } from '../context/quiz'
import './GameOver.css';
import WellDone from '../img/welldone.svg'

function GameOver() {
  return (
    <div className='text-white'>
      <h2 className='text-3xl font-bold'>Game Over</h2>
      <p>Score: x</p>
      <p>You got y out of x Questions</p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button>Restart</button>
    </div>
  )
}

export default GameOver
