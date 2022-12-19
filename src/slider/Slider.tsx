import React, { Children, cloneElement, CSSProperties, ReactElement } from 'react'
import { ReactNode, useEffect, useState } from 'react'
import Dots from '../components/Dots/Dots'
import Gate from '../components/Gate/Gate'
import Results from '../components/Results/Results'
import { ButtonLg } from '../components/UI/Button/Button'
import { QuestionModel } from '../redux/questions/questionState'
import { useSlider } from './hooks/useSlider'

export type SliderProps = {
  items: QuestionModel[]
  renderItem: (item: QuestionModel, idx: number, transform: number) => ReactNode
}
type SlideProps = {
  isActive: boolean
}

const Slider = ({ items, renderItem }: SliderProps) => {
  const { activeSlide, nextStep } = useSlider()

  return (
    <div>
      {items.map((el, i) => {
        let transform = 100 * (i - activeSlide)
        return renderItem(el, i, transform)
      })}
      <div
        style={
          { transform: `translateX(${100 * (6 - activeSlide)}%)`, transition: 'all 1s ease-in-out' } as CSSProperties
        }
        className='absolute top-0 left-0 h-full w-1/2 bg-white pt-[30px] pb-[60px]'
      >
        <Gate />
      </div>
      <div
        style={
          { transform: `translateX(${100 * (7 - activeSlide)}%)`, transition: 'all 1s ease-in-out' } as CSSProperties
        }
        className='absolute top-0 left-0 h-full w-1/2 bg-white pt-[30px] pb-[60px]'
      >
        <Results />
      </div>
    </div>
  )
}

export default Slider
