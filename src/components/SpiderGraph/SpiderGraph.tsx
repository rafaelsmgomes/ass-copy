import * as d3 from 'd3'
import { useState } from 'react'
import { useAppSelector } from '../../redux'
import { selectQuestions } from '../../redux/questions/questionSelectors'
import Axis from './Axis'
import AxisLabels from './AxisLabels/AxisLabels'
import Polygon from './Polygon'
import ResultsNodes from './ResultNodes'

import './SpiderGraph.scss'
import SpiderLines from './SpiderLines'
import SpiderNodes from './SpiderNodes'

export type SpiderGraphProps = {}

export const radians = 2 * Math.PI

const normalFactor = 1
const lastLevelFactor = 1.2
const lineLevels = 6
const w = 300,
  h = 300
const radius = normalFactor * Math.min(w / 2, h / 2)

const SpiderGraph = (props: SpiderGraphProps) => {
  return (
    <div className='spider '>
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
    </div>
  )
}

export default SpiderGraph
