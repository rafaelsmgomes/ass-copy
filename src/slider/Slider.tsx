import React, { Children, cloneElement, CSSProperties, ReactElement } from 'react'
import { ReactNode, useEffect, useState } from 'react'
import { useSlider } from './hooks/useSlider'

export type SliderProps = {
  children: ReactNode
}
type SlideProps = {
  isActive: boolean
}

const Slider = ({ children }: SliderProps) => {
  const { activeSlide } = useSlider()

  const { setSlidesCount } = useSlider()
  useEffect(() => {
    setSlidesCount(Children.count(children))
  }, [children])

  return (
    <div>
      {Children.map(children, (el, i) => {
        let child = el as ReactElement<{ style: CSSProperties }>
        let transform = 100 * (i - activeSlide)
        // console.log({ transform })
        child = cloneElement(child, {
          // key: `${i}slider`,
          style: { transform: `translateX(${transform}vw)`, transition: 'all 1s ease-in-out' },
        })
        return child
      })}
    </div>
  )
}

export default Slider
