import { useEffect, useRef, useState } from 'react'
import { useAppSelector } from '../../redux'
import { selectAnswers } from '../../redux/answers/answerSelectors'
import { selectQuestionsLength } from '../../redux/questions/questionSelectors'
import { ReactComponent as SmallTriangle } from '../../assets/svgs/small-triangle.svg'
import { ReactComponent as BigTriangle } from '../../assets/svgs/big-triangle.svg'
import { radians } from './SpiderGraph'
import * as d3 from 'd3'
import { useSlider } from '../../slider/hooks/useSlider'

export type SpiderNodesProps = {
  width: number
  height: number
  factor: number
}

const SpiderNodes = ({ factor, height, width }: SpiderNodesProps) => {
  const answers = useAppSelector(selectAnswers)
  const totalLength = useAppSelector(selectQuestionsLength)
  const { activeSlide, slidesCount } = useSlider()
  const [isResultsPage, setisResultsPage] = useState(false)

  useEffect(() => {
    if (activeSlide === 7) setisResultsPage(true)
    else setisResultsPage(false)
  }, [activeSlide])

  return (
    <g className='nodes-group'>
      {answers.answerArr.map((el, i) => {
        const x =
          (width / 2) *
            (1 - (Math.max(answers.answerArr[i].score, 0) / 100) * factor * Math.sin((-i * radians) / totalLength)) -
          13

        const y =
          (height / 2) *
            (1 - (Math.max(answers.answerArr[i].score, 0) / 100) * factor * Math.cos((i * radians) / totalLength)) -
          20

        return (
          <g
            style={{ transform: `translate(${x}px,${y}px)` }} // this is how we position the object so we can animate it
            className={`fill-secondary-gold  transition-all duration-1000 ease-[cubic-bezier(.35,0,.65,1)] ${
              el.score === 0 ? 'opacity-0' : isResultsPage ? 'opacity-0' : 'opacity-100'
            }`}
            key={i}
          >
            <SmallTriangle
              style={{ opacity: i === activeSlide ? '0' : '1' }}
              className='transition-all duration-200 ease-in-out'
            />
            <BigTriangle
              style={{ opacity: i === activeSlide ? '1' : '0' }}
              className='transition-all duration-200 ease-in-out'
            />
          </g>
        )
      })}
    </g>
  )
}

export default SpiderNodes
