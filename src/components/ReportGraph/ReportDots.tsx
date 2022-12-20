import { useReportSlide } from '../../layout/ReportPage/ReportPage'
import { useAppSelector } from '../../redux'
import { selectQuestions } from '../../redux/questions/questionSelectors'
import { useSlider } from '../../slider/hooks/useSlider'

const ReportDots = () => {
  const { setSlide, slide } = useReportSlide()
  const questions = useAppSelector(selectQuestions)

  return (
    <div className='mb-6 flex'>
      {questions.map((_, i) => {
        return (
          <button
            className={`mr-2.5 h-[11px] w-[11px] cursor-pointer rounded-full  transition-all duration-200 ease-out last:mr-0 disabled:cursor-not-allowed disabled:bg-neutral-fog ${
              i === slide ? 'bg-secondary-gold' : 'bg-[#a7d7d4]'
            }`}
            key={i}
            onClick={() => setSlide(i)}
          />
        )
      })}
    </div>
  )
}

export default ReportDots
