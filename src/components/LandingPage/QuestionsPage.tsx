import { useAppSelector } from '../../redux'
import { selectQuestions } from '../../redux/questions/questionSelectors'
import { SlidesProvider } from '../../slider/hooks/useSlider'
import Slider from '../../slider/Slider'
import Question from '../Question/Question'
import SpiderGraph from '../SpiderGraph/SpiderGraph'

const QuestionsPage = () => {
  const questions = useAppSelector(selectQuestions)
  return (
    <div className='relative min-h-[calc(100vh-86px)] pt-[50px] pb-24'>
      <SlidesProvider>
        <Slider>
          {questions.map((qtn, i) => (
            <Question idx={i} questionGroup={qtn} key={i} />
          ))}
        </Slider>
        <SpiderGraph />
      </SlidesProvider>
    </div>
  )
}

export default QuestionsPage
