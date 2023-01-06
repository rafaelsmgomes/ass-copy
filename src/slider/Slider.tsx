import { CSSProperties, useLayoutEffect, useRef } from 'react'
import { ReactNode, useState } from 'react'
import Gate from '../components/Gate/Gate'
import Results from '../components/Results/Results'
import SpiderGraph from '../components/SpiderGraph/SpiderGraph'
import { QuestionModel } from '../redux/questions/questionState'
import { useSlider } from './hooks/useSlider'
import './Slider.scss'

export type SliderProps = {
  items: QuestionModel[]
  renderItem: (item: QuestionModel, idx: number, transform: number) => ReactNode
}
type SlideProps = {
  isActive: boolean
}

const Slider = ({ items, renderItem }: SliderProps) => {
  const { activeSlide, nextStep, slidesHeight } = useSlider()
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (!ref.current) return
    const childrenArr = Array.from(ref.current.children) as HTMLElement[]

    childrenArr.map((el, i) => {
      if (i === 7)
        setHeight((cur) => (el.getBoundingClientRect().height > cur ? el.getBoundingClientRect().height : cur))
    })

    return () => {}
  }, [])

  return (
    <div ref={ref} style={{ '--slidesHeight': `${height}px` } as CSSProperties} className='slider'>
      {items.map((el, i) => {
        let transform = 100 * (i - activeSlide)
        return renderItem(el, i, transform)
      })}
      <div
        style={
          { transform: `translateX(${100 * (6 - activeSlide)}%)`, transition: 'all 1s ease-in-out' } as CSSProperties
        }
        className='absolute top-0 left-0 h-full w-1/2 bg-neutral-fog bg-opacity-20 pt-[30px] pb-20 tb:w-full tb:pt-2.5'
      >
        <Gate />
      </div>
      <div
        style={
          { transform: `translateX(${100 * (7 - activeSlide)}%)`, transition: 'all 1s ease-in-out' } as CSSProperties
        }
        className='absolute top-0 left-0 w-1/2 bg-neutral-fog bg-opacity-20 pt-[30px] tb:w-full tb:pt-0'
      >
        <SpiderGraph className='hidden tb:block tb:min-h-0' />
        <Results />
      </div>
    </div>
  )
}

export default Slider
