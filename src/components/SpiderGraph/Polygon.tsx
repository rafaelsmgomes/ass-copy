import { RefObject, useEffect, useRef } from 'react'
import { useAppSelector } from '../../redux'
import { selectAnswers } from '../../redux/answers/answerSelectors'
import { selectQuestionsLength } from '../../redux/questions/questionSelectors'
import { radians } from './SpiderGraph'
import * as d3 from 'd3'

export type PolygonProps = {
  width: number
  height: number
  factor: number
}

const maxValue = 100

const points = (d: [number, number][]) => {
  let str = ''
  for (let pti = 0; pti < d.length; pti++) {
    str = str + d[pti][0] + ',' + d[pti][1] + ' '
  }
  return str
}

const Polygon = ({ width, height, factor }: PolygonProps) => {
  const answers = useAppSelector(selectAnswers)
  const total = useAppSelector(selectQuestionsLength)

  const dataVal: [number, number][] = []
  const ref = useRef<SVGPolygonElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const polygon = d3
      .select(ref.current)
      .data([dataVal])
      .transition()
      .duration(1000)
      .ease((t) => {
        return d3.easeSinInOut(t)
      })
      .attr('points', (d) => {
        let str = ''
        for (let pti = 0; pti < d.length; pti++) {
          str = str + d[pti][0] + ',' + d[pti][1] + ' '
        }
        return str
      })

    return () => {}
  }, [dataVal])

  answers.answerArr.forEach((ans, i) => {
    dataVal.push([
      (width / 2) * (1 - (Math.max(ans.score, 0) / maxValue) * factor * -Math.sin((i * radians) / total)),
      (height / 2) * (1 - (Math.max(ans.score, 0) / maxValue) * factor * Math.cos((i * radians) / total)),
    ])
  })
  const point = points(dataVal)

  return (
    <g>
      <polygon ref={ref} className='fill-secondary-gold opacity-40' />
    </g>
  )
}

export default Polygon
