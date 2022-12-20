import { useReportSlide } from '../../layout/ReportPage/ReportPage'
import Axis from '../SpiderGraph/Axis'
import Polygon from '../SpiderGraph/Polygon'
import ResultsNodes from '../SpiderGraph/ResultNodes'
import { radians } from '../SpiderGraph/SpiderGraph'
import SpiderLines from '../SpiderGraph/SpiderLines'
import ReportLabels from './ReportLabels'
import ReportNodes from './ReportNodes'

export type ReportGraphProps = {}

const normalFactor = 1
const lastLevelFactor = 1.2
const lineLevels = 6
const w = 300,
  h = 300
const radius = normalFactor * Math.min(w / 2, h / 2)

const ReportGraph = (props: ReportGraphProps) => {
  return (
    <svg
      viewBox={window.innerWidth <= 600 ? '0 0 475 500' : '0 0 475 465'}
      preserveAspectRatio={'xMidYMid meet'}
      className=''
    >
      <g className='' style={{ transform: 'scale(0.9) translate(120px,90px)' }}>
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
        <Polygon width={w} height={h} factor={normalFactor} />
        <ReportNodes width={w} height={h} factor={normalFactor} />
        <ReportLabels width={w} height={h} factor={lastLevelFactor} />
      </g>
    </svg>
  )
}

export default ReportGraph
