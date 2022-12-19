import { useAppSelector } from '../../redux'
import { selectQuestions } from '../../redux/questions/questionSelectors'

export type AxisProps = {
  width: number
  height: number
  factor: number
  radians: number
}

const Axis = ({ factor, height, width, radians }: AxisProps) => {
  const questions = useAppSelector(selectQuestions)
  const allAxis = questions.map((el) => el.type)
  const total = questions.length

  return (
    <g className='axis'>
      {questions.map((el, i) => (
        <line
          key={i}
          className='stroke-white opacity-40'
          x1={width / 2}
          y1={height / 2}
          x2={(width / 2) * (1 - factor * Math.sin((-i * radians) / total))}
          y2={(height / 2) * (1 - factor * Math.cos((-i * radians) / total))}
        />
      ))}
    </g>
  )
}

export default Axis
