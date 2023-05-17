import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Question.css';
import Options from './Options';

function Question() {
  // eslint-disable-next-line no-unused-vars
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) => {
      dispatch({
        type: "CHECK_ANSWER",
        payload: {answer: currentQuestion.answer, option},
      })
  }

  console.log(quizState)
  return (
    <div className='text-white bg-purple-700 rounded-2xl p-8 w-[500px]'>
      <p className='mb-4'>Question {quizState.currentQuestion + 1} of {quizState.questions.length}</p>
      <h2 className='mb-8 text-xl font-bold text-white mb-8'>{currentQuestion.question} </h2>
      <div>
        {currentQuestion.options.map((option)=>(
          <Options
          option={option}
          key={option}
          answer={currentQuestion.answer}
          selectOption={() => onSelectOption(option)}/>
        ))}
      </div>
      {quizState.answerSelected && <button
        onClick={() => {dispatch({type: "CHANGE_QUESTION"})}} className='border-2 border-solid border-white m-4 font-bold cursor-pointer text-lg py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full focus:outline-none hover:from-purple-700 hover:to-purple-500'>
          Continue
        </button>
      }
    </div>
  )
}

export default Question
