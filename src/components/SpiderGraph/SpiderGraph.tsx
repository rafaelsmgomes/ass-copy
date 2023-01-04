import { useSlider } from '../../slider/hooks/useSlider'
import Axis from './Axis'
import AxisLabels from './AxisLabels/AxisLabels'
import Legend from './Legend/Legend'
import Polygon from './Polygon'
import ResultsNodes from './ResultNodes'

import './SpiderGraph.scss'
import SpiderLines from './SpiderLines'
import SpiderNodes from './SpiderNodes'

export type SpiderGraphProps = {
  className?: string
}

export const radians = 2 * Math.PI

const normalFactor = 1
const lastLevelFactor = 1.2
const lineLevels = 6
const w = 300,
  h = 300
const radius = normalFactor * Math.min(w / 2, h / 2)

const SpiderGraph = ({ className }: SpiderGraphProps) => {
  const { activeSlide, slidesCount } = useSlider()

  return (
    <div className={`spider ${className ? className : ''}`}>
      <svg
        viewBox={window.innerWidth <= 600 ? '0 0 475 500' : '0 0 475 465'}
        preserveAspectRatio={'xMidYMid meet'}
        className='max-w-[670px]'
      >
        <g className='' style={{ transform: 'scale(0.9) translate(120px,80px)' }}>
          <g className='all-levels'>
            {new Array(lineLevels).fill(undefined).map((_, lineIdx) => {
              let levelFactor = lastLevelFactor * radius * ((lineIdx + 1) / lineLevels)
              return (
                <g className={`level-${lineIdx}`} key={lineIdx}>
                  <SpiderLines
                    factor={normalFactor}
                    height={h}
                    width={w}
                    levelFactor={levelFactor}
                    lineIdx={lineIdx}
                    lineLevels={lineLevels}
                  />
                </g>
              )
            })}
          </g>
          <Axis factor={lastLevelFactor} height={h} width={w} radians={radians} />
          <AxisLabels factor={lastLevelFactor} height={h} width={w} />
          <SpiderNodes factor={normalFactor} height={h} width={w} />
          <Polygon width={w} height={h} factor={normalFactor} />
          <ResultsNodes factor={normalFactor} height={h} width={w} />
        </g>
      </svg>
      <Legend visible={activeSlide === slidesCount} />
    </div>
  )
}

export default SpiderGraph
