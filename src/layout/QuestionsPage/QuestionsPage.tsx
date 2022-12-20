import { CSSProperties } from 'react'
import { useAppSelector } from '../../redux'
import { selectQuestions } from '../../redux/questions/questionSelectors'
import { SlidesProvider } from '../../slider/hooks/useSlider'
import Slider from '../../slider/Slider'
import Question from '../../components/Question/Question'
import SpiderGraph from '../../components/SpiderGraph/SpiderGraph'

const QuestionsPage = () => {
  const questions = useAppSelector(selectQuestions)
  return (
    <div className='relative min-h-[calc(100vh-86px)] overflow-x-hidden pt-[50px] pb-24'>
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
        <SpiderGraph />
      </SlidesProvider>
    </div>
  )
}

export default QuestionsPage
