import { useAppSelector } from '../../redux'
import { selectQuestions } from '../../redux/questions/questionSelectors'
import { useSlider } from '../../slider/hooks/useSlider'
import { radians } from '../SpiderGraph/SpiderGraph'
import '../../components/SpiderGraph/AxisLabels/AxisLabels.scss'
import { wrap } from '../../slider/utils/wrap'
import { useReportSlide } from '../../layout/ReportPage/ReportPage'

export type ReportLabelsProps = {
  width: number
  height: number
  factor: number
}

const ReportLabels = ({ factor, height, width }: ReportLabelsProps) => {
  const { setSlide, slide } = useReportSlide()
  const questions = useAppSelector(selectQuestions)
  const total = questions.length

  return (
    <g className='labels'>
      {questions.map(({ type }, i) => {
        wrap(type)
        return (
          <text
            key={i}
            y={(height / 2) * (1 - factor * 1.1 * Math.cos((-i * radians) / total))}
            x={(width / 2) * (1 - factor * Math.sin((-i * radians) / total))}
            className={`axis-labels cursor-pointer   transition-all duration-300 hover:opacity-50 ${
              slide !== i ? 'fill-white underline' : 'fill-secondary-gold'
            }`}
            onClick={() => setSlide(i)}
          >
            {wrap(type)?.map((el, spanIdx) => (
              <tspan
                key={spanIdx}
                dy={`${spanIdx * 1.3}em`}
                style={{ fontFamily: 'Roboto' }}
                y={(height / 2) * (1 - factor * 1.15 * Math.cos((-i * radians) / total))}
                className=''
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

export default ReportLabels
