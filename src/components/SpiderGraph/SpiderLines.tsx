import { useAppSelector } from '../../redux'
import { selectQuestions } from '../../redux/questions/questionSelectors'

export type SpiderLinesProps = {
  lineIdx: number
  levelFactor: number
  width: number
  height: number
  factor: number
  lineLevels: number
}

const SpiderLines = ({ factor, lineIdx, levelFactor, width, height, lineLevels }: SpiderLinesProps) => {
  const questions = useAppSelector(selectQuestions)
  const total = questions.length
  const radians = 2 * Math.PI

  return (
    <>
      {questions.map((el, i) => (
        <line
          key={i}
          x1={levelFactor * (1 - factor * Math.sin(((1 + i) * radians) / total))}
          x2={levelFactor * (1 - factor * Math.sin((i * radians) / total))}
          y1={levelFactor * (1 - factor * Math.cos(((1 + i) * radians) / total))}
          y2={levelFactor * (1 - factor * Math.cos((i * radians) / total))}
          style={{ transform: `translate(${width / 2 - levelFactor}px,${height / 2 - levelFactor}px)` }}
          className={`stroke-white ${lineIdx === lineLevels - 1 ? 'opacity-100' : 'opacity-20'} `}
        />
      ))}
    </>
  )
}

export default SpiderLines
