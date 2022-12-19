import { useAppSelector } from '../../redux'
import { selectAnswersLength } from '../../redux/answers/answerSelectors'
import { selectQuestions } from '../../redux/questions/questionSelectors'
import { useSlider } from '../../slider/hooks/useSlider'

export type DotsProps = {}

const Dots = (props: DotsProps) => {
  const { goToStep, activeSlide, visitedSlides } = useSlider()
  const questions = useAppSelector(selectQuestions)
  const answersedNum = useAppSelector((s) => s.answers.answered)

  return (
    <div className='mb-6 flex items-center justify-center'>
      {questions.map((_, i) => {
        return (
          <button
            className={`mr-2.5 h-[11px] w-[11px] cursor-pointer rounded-full  transition-all duration-200 ease-out last:mr-0 disabled:cursor-not-allowed disabled:bg-neutral-fog ${
              i === activeSlide ? 'bg-primary-blue' : 'bg-primary-green'
            }`}
            key={i}
            onClick={() => goToStep(i)}
            disabled={i > visitedSlides}
          />
        )
      })}
      <button
        className={`mr-2.5 h-[11px] w-[11px] cursor-pointer rounded-full  transition-all duration-200 ease-out last:mr-0 disabled:cursor-not-allowed disabled:bg-neutral-fog ${
          6 === activeSlide ? 'bg-primary-blue' : 'bg-primary-green'
        }`}
        key={6}
        onClick={() => goToStep(7)}
        disabled={6 > visitedSlides}
      />
    </div>
  )
}

export default Dots
