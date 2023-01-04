import { CSSProperties } from 'react'
import { useAppSelector } from '../../redux'
import { selectQuestions } from '../../redux/questions/questionSelectors'
import { SlidesProvider } from '../../slider/hooks/useSlider'
import Slider from '../../slider/Slider'
import Question from '../../components/Question/Question'
import SpiderGraph from '../../components/SpiderGraph/SpiderGraph'

import './QuestionsPage.scss'

const QuestionsPage = () => {
  const questions = useAppSelector(selectQuestions)
  return (
    <div className='questions-page'>
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
