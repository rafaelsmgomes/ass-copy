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

const factor = 1
const lineLevels = 6
const w = 362,
  h = 362
const radius = factor * Math.min(w / 2, h / 2)

const SpiderGraph = (props: SpiderGraphProps) => {
  const questions = useAppSelector(selectQuestions)

  return (
    <div className='spider'>
      <svg
        viewBox={window.innerWidth <= 600 ? '0 0 475 500' : '0 0 475 465'}
        preserveAspectRatio={'xMidYMid meet'}
        className=''
      >
        <g className='' style={{ transform: 'scale(0.9) translate(80px,70px)' }}>
          <g className='all-levels'>
            {new Array(lineLevels).fill(undefined).map((_, lineIdx) => {
              let levelFactor = factor * radius * ((lineIdx + 1) / lineLevels)
              return (
                <g className={`level-${lineIdx}`} key={lineIdx}>
                  <SpiderLines factor={factor} height={h} width={w} levelFactor={levelFactor} lineIdx={lineIdx} />
                </g>
              )
            })}
          </g>
          <Axis factor={factor} height={h} width={w} radians={radians} />
          <AxisLabels factor={factor} height={h} width={w} />
          <SpiderNodes factor={factor} height={h} width={w} />
          <Polygon width={w} height={h} factor={factor} />
          <ResultsNodes factor={factor} height={h} width={w} />
        </g>
      </svg>
    </div>
  )
}

export default SpiderGraph
