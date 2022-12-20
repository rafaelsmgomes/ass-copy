import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../redux'
import { selectAnswers } from '../../redux/answers/answerSelectors'
import { selectQuestionsLength } from '../../redux/questions/questionSelectors'
import { useSlider } from '../../slider/hooks/useSlider'
import { ReactComponent as Wrong } from '../../assets/svgs/x-icon.svg'
import { ReactComponent as Check } from '../../assets/svgs/check-icon.svg'
import { radians } from '../SpiderGraph/SpiderGraph'

export type ReportNodesProps = {
  width: number
  height: number
  factor: number
}

const ReportNodes = ({ factor, height, width }: ReportNodesProps) => {
  const answers = useAppSelector(selectAnswers)
  const totalLength = useAppSelector(selectQuestionsLength)

  return (
    <g className='nodes-group'>
      {answers.answerArr.map((el, i) => {
        const topScore = el.score === 100
        const x =
          (width / 2) *
            (1 - (Math.max(answers.answerArr[i].score, 0) / 100) * factor * Math.sin((-i * radians) / totalLength)) -
          9.5

        const y =
          (height / 2) *
            (1 - (Math.max(answers.answerArr[i].score, 0) / 100) * factor * Math.cos((i * radians) / totalLength)) -
          9.5

        return (
          <g
            key={i}
            style={{ transform: `translate(${x}px,${y}px)` }} // this is how we position the object so we can animate it
            className={`}  fill-secondary-gold transition-all duration-1000 
            ease-[cubic-bezier(.35,0,.65,1)]`}
          >
            {topScore ? <Check /> : <Wrong />}
          </g>
        )
      })}
    </g>
  )
}

export default ReportNodes
