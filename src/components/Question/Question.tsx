import { ReactNode, useId, useInsertionEffect, useState } from 'react'
import { useAppSelector } from '../../redux'
import { selectQuestion } from '../../redux/questions/questionSelectors'
import { QuestionModel } from '../../redux/questions/questionState'
import { ButtonLg } from '../UI/Button/Button'

export type QuestionProps = {
  questionGroup: QuestionModel
  idx: number
}

const Question = ({ idx, questionGroup, ...props }: QuestionProps) => {
  const { type, question, answers } = questionGroup

  const [questionIdx, setQuestionIdx] = useState<number | undefined>(undefined)

  return (
    <div className='absolute top-0 left-0 h-full w-1/2 bg-neutral-fog pt-[30px] pb-[100px]' {...props}>
      <img src='' alt='' />
      <div className='relative ml-auto h-full w-[90%] bg-white py-[30px] px-5 shadow-question'>
        <div className='mb-6 flex items-center justify-center'>
          {new Array(6).fill(0).map((el, i) => (
            <div className='mr-2.5 h-[11px] w-[11px] rounded-full bg-primary-green last:mr-0' />
          ))}
        </div>
        <p className='text-[25px] font-bold text-primary-blue'>{question}</p>
        <ul>
          {answers.map((el, i) => {
            const id = useId()
            return (
              <li className='flex cursor-pointer' onClick={() => setQuestionIdx(i)} key={id}>
                <input
                  type='radio'
                  name={type}
                  id={id}
                  className='mr-2'
                  value={i}
                  checked={questionIdx === i}
                  onChange={() => {}}
                />
                <label htmlFor={id} className='question-copy'>
                  {el}
                </label>
              </li>
            )
          })}
        </ul>
        <ButtonLg>Next</ButtonLg>
      </div>
    </div>
  )
}

export default Question
