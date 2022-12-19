import { useAppSelector } from '../../redux'
import { selectAnswers } from '../../redux/answers/answerSelectors'
import { selectBlurbs } from '../../redux/blurbs/blurbsSlice'
import { ButtonLg } from '../UI/Button/Button'
import { ReactComponent as RedX } from '../../assets/svgs/x-icon.svg'
import { ReactComponent as Check } from '../../assets/svgs/check-icon.svg'

export type ResultsProps = {}

const Results = (props: ResultsProps) => {
  const blurbs = useAppSelector(selectBlurbs)
  const answers = useAppSelector(selectAnswers)
  return (
    <div className='relative ml-auto h-full w-full bg-white py-[30px] px-5 shadow-question'>
      <p className='text-[14px] font-bold text-primary-green'>Your Results</p>
      <p className='leading- mb-6 text-[25px] font-bold leading-9 text-primary-blue '>
        How mature is my Supply Chain Sustainability?
      </p>
      <div className='mb-5'>
        {blurbs.map(({ label, blurb }, i) => {
          const topScore = answers.answerArr[i].score === 100
          return (
            <div className='mb-2.5 flex' key={i}>
              {topScore ? <Check className='mt-0.5 mr-3' /> : <RedX className='mt-0.5 mr-3' />}
              <div>
                <p className={`text-sm font-bold  ${topScore ? 'text-primary-green' : 'text-neutral-charcoal'} `}>
                  {label}
                </p>
                <p
                  className={`font-nunito text-sm text-opacity-60 ${
                    topScore ? 'text-primary-green' : 'text-neutral-charcoal'
                  }`}
                >
                  {blurb}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <ButtonLg>View Detailed Results</ButtonLg>
    </div>
  )
}

export default Results
