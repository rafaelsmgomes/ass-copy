import { CSSProperties, useLayoutEffect, useRef } from 'react'
import { ReactNode, useState } from 'react'
import Gate from '../components/Gate/Gate'
import Results from '../components/Results/Results'
import SpiderGraph from '../components/SpiderGraph/SpiderGraph'
import { useWindowWidth } from '../hooks/useWindowWidth'
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
  const { activeSlide } = useSlider()
  const [height, setHeight] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)
  const windowWidth = useWindowWidth()

  useLayoutEffect(() => {
    if (!ref.current) return
    const childrenArr = Array.from(ref.current.children) as HTMLElement[]

    let arr: number[] = []
    childrenArr.map((el, i) => {
      arr.push(el.getBoundingClientRect().height)
    })
    setHeight(arr)
    return () => {}
  }, [windowWidth])
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeSlide])

  return (
    <div style={{ '--slidesHeight': `${height[activeSlide]}px` } as CSSProperties} className='slider' ref={ref}>
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
        className='absolute top-0 left-0 h-full w-1/2 bg-neutral-fog bg-opacity-20 pt-[30px] tb:h-auto tb:w-full tb:pt-0'
      >
        <SpiderGraph className='hidden tb:block tb:min-h-0' />
        <Results />
      </div>
    </div>
  )
}

export default Slider
