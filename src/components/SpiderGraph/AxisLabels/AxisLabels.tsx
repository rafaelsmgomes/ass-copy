import { ReactElement } from 'react'
import { useAppSelector } from '../../../redux'
import { selectAnswersLength } from '../../../redux/answers/answerSelectors'
import { selectQuestions } from '../../../redux/questions/questionSelectors'
import { useSlider } from '../../../slider/hooks/useSlider'
import { radians } from '../SpiderGraph'

import './AxisLabels.scss'

export type AxisLabelsProps = {
  width: number
  height: number
  factor: number
}

const factorLegend = 0.85

function wrap(text: string, width: number = 5) {
  let words = text.split(/\s+/).reverse()
  let lines: string[] = []
  let curLineArr: string[] = []
  let word: string | undefined

  let i = 0
  while ((word = words.pop())) {
    if (word === undefined) return
    curLineArr.push(word)
    let curLine = curLineArr.join(' ')
    lines[i] = curLine
    if (curLine.length > width) {
      i++
      curLineArr = []
    }
  }
  return lines
}

const AxisLabels = ({ factor, height, width }: AxisLabelsProps) => {
  const questions = useAppSelector(selectQuestions)
  const total = questions.length
  const { activeSlide, visitedSlides } = useSlider()
  const ansLength = useAppSelector(selectAnswersLength)

  return (
    <g className='labels'>
      {questions.map(({ type }, i) => {
        wrap(type)
        return (
          <text
            key={i}
            y={(height / 2) * (1 - factor * 1.1 * Math.cos((-i * radians) / total))}
            x={(width / 2) * (1 - factor * Math.sin((-i * radians) / total))}
            className={`axis-labels transition-all duration-300  ${
              activeSlide === i ? 'fill-secondary-gold' : 'fill-white'
            } ${i <= visitedSlides ? 'opacity-100' : 'opacity-20'}`}
          >
            {wrap(type)?.map((el, spanIdx) => (
              <tspan
                key={spanIdx}
                dy={`${spanIdx * 1.3}em`}
                style={{ fontFamily: 'Roboto' }}
                y={(height / 2) * (1 - factor * 1.15 * Math.cos((-i * radians) / total))}
                className='axis-labels fill-whites'
                x={(width / 2) * (1 - factor * 1.3 * Math.sin((-i * radians) / total))}
              >
                {el}
              </tspan>
            ))}
          </text>
        )
      })}
    </g>
  )
}

export default AxisLabels
