import { CSSProperties, ReactNode, useEffect, useId, useInsertionEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux'
import answerSlices from '../../redux/answers/answersSlice'
import { QuestionModel } from '../../redux/questions/questionState'
import { useSlider } from '../../slider/hooks/useSlider'
import Dots from '../Dots/Dots'
import { ButtonLg } from '../UI/Button/Button'

import './Question.scss'

export type QuestionProps = {
  questionGroup: QuestionModel
  idx: number
  style: CSSProperties
}

const Question = ({ idx, questionGroup, ...props }: QuestionProps) => {
  const { type, question, answers, imgUrl } = questionGroup
  const maxScore = answers.length - 1
  const { nextStep } = useSlider()
  const dispatch = useAppDispatch()

  const [answerIdx, setAnswerIdx] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (answerIdx === undefined || idx === undefined) return
    dispatch(
      answerSlices.actions.addAnswer({
        score: (100 / maxScore) * (answerIdx ?? 0),
        idx,
        label: type,
        answerIdx,
      })
    )
  }, [answerIdx, idx, type])

  return (
    <div className='question' {...props}>
      <img src={imgUrl} alt='' className='question-img' />
      <div className='relative ml-auto h-full w-[90%] max-w-[670px] bg-white py-[30px] px-[30px] pb-0 shadow-question tb:w-full tb:max-w-none '>
        <Dots />
        <p className='mb-6 text-[25px] font-bold text-primary-blue'>{question}</p>
        <ul className='mb-6'>
          {answers.map((el, i) => {
            const id = useId()
            return (
              <li className='mb-2.5 flex cursor-pointer' onClick={() => setAnswerIdx(i)} key={id}>
                <label htmlFor={id} className='question-input'>
                  <input
                    type='radio'
                    name={type}
                    id={id}
                    className='mr-2'
                    value={i}
                    checked={answerIdx === i}
                    onChange={() => {}}
                  />
                </label>
                <p
                  className={`question-copy ${
                    answerIdx === i ? 'text-primary-blue text-opacity-100' : 'text-neutral-charcoal text-opacity-40'
                  }`}
                >
                  {el}
                </p>
              </li>
            )
          })}
        </ul>
        <ButtonLg onClick={() => nextStep()} disabled={answerIdx === undefined}>
          Next
        </ButtonLg>
      </div>
    </div>
  )
}

export default Question
