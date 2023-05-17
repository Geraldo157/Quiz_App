/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import './Options.css';

const Options = ({option, selectOption, answer}) => {
    const[quizState, dispatch] = useContext(QuizContext)
  return (
    <div onClick={()=>selectOption()} className={`${quizState.answerSelected && option === answer ? "font-bold": ""} ${quizState.answerSelected && option !== answer ? "font-bold opacity-50": ""}`}>
      <p className="bg-violet-900 rounded-md p-4 mb-4 cursor-pointer opacity-80 transition duration-400 hover:opacity-100">{option}</p>
    </div>
  )
}

export default Options
