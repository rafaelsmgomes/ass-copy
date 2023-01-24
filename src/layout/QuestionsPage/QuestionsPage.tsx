import { CSSProperties, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

import { useAppSelector } from '../../redux'
import { selectQuestions } from '../../redux/questions/questionSelectors'
import { SlidesProvider } from '../../slider/hooks/useSlider'
import Slider from '../../slider/Slider'
import Question from '../../components/Question/Question'
import SpiderGraph from '../../components/SpiderGraph/SpiderGraph'

import './QuestionsPage.scss'

const QuestionsPage = () => {
  const questions = useAppSelector(selectQuestions)
  const ref = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => gsap.from(ref.current, { left: '100%', duration: 0.6 }))
    return () => ctx.revert()
  }, [])
  return (
    <div className='questions-page' ref={ref}>
      <SlidesProvider>
        <Slider
          items={questions}
          renderItem={(item, idx, transform) => (
            <Question
              idx={idx}
              questionGroup={item}
              key={idx}
              style={{ transform: `translateX(${transform}%)`, transition: 'all 1s ease-in-out' } as CSSProperties}
            />
          )}
        ></Slider>
        <SpiderGraph className='tb:hidden' />
      </SlidesProvider>
    </div>
  )
}

export default QuestionsPage
