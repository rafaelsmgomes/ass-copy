import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux'
import { selectAnswers } from '../../redux/answers/answerSelectors'
import { selectQuestionsLength } from '../../redux/questions/questionSelectors'
import { radians } from './SpiderGraph'
import { useSlider } from '../../slider/hooks/useSlider'
import { ReactComponent as Bulb } from '../../assets/svgs/bulb-icon.svg'
import { ReactComponent as Check } from '../../assets/svgs/check-icon.svg'

export type ResultsNodesProps = {
  width: number
  height: number
  factor: number
}

const ResultsNodes = ({ factor, height, width }: ResultsNodesProps) => {
  const answers = useAppSelector(selectAnswers)
  const totalLength = useAppSelector(selectQuestionsLength)
  const { activeSlide, slidesCount } = useSlider()
  const [isResultsPage, setisResultsPage] = useState(false)
  useEffect(() => {
    if (activeSlide === slidesCount) setisResultsPage(true)
    else setisResultsPage(false)
  }, [activeSlide])

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
            className={`fill-secondary-gold  transition-all duration-1000 ease-[cubic-bezier(.35,0,.65,1)] ${
              isResultsPage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {topScore ? <Check /> : <Bulb height={19} width={19} />}
          </g>
        )
      })}
    </g>
  )
}

export default ResultsNodes
