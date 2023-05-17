import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Question.css';

function Question() {
  // eslint-disable-next-line no-unused-vars
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  console.log(quizState)
  return (
    <div className='text-white'>
      <p className='mb-8 text-purple-500'>Question {quizState.currentQuestion + 1} of {quizState.questions.length}</p>
      <h2 className='mb-8 text-xl font-bold text-white'>{currentQuestion.question} </h2>
      <div>
        <p>Alternatives</p>
      </div>
      <button className='font-bold cursor-pointer text-lg py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full focus:outline-none hover:from-purple-700 hover:to-purple-500'>Continue</button>
    </div>
  )
}

export default Question
