import { useAppSelector } from '../../redux'
import { selectAnswers, selectAnswersArr } from '../../redux/answers/answerSelectors'
import { selectBlurbs } from '../../redux/blurbs/blurbsSlice'
import { ButtonLg } from '../UI/Button/Button'
import { ReactComponent as Bulb } from '../../assets/svgs/bulb-icon.svg'
import { ReactComponent as Check } from '../../assets/svgs/check-icon.svg'

import './Results.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { queriesBuilder } from '../Gate/Gate'

export type ResultsProps = {}

const Results = (props: ResultsProps) => {
  const navigate = useNavigate()
  const blurbs = useAppSelector(selectBlurbs)
  const answers = useAppSelector(selectAnswersArr)
  return (
    <div className='results-page relative ml-auto h-full w-full overflow-y-scroll bg-white py-[30px] px-5 shadow-question'>
      <p className='text-[14px] font-bold text-primary-green'>Your Results</p>
      <p className='leading- mb-6 text-[25px] font-bold leading-9 text-primary-blue '>
        How mature is my Supply Chain Sustainability?
      </p>
      <div className='mb-5'>
        {blurbs.map(({ label, blurb }, i) => {
          const topScore = answers[i].score === 100
          return (
            <div className='mb-2.5 flex' key={i}>
              {topScore ? (
                <Check className='mt-0.5 mr-3' height={19} width={19} />
              ) : (
                <Bulb className='mt-0.5 mr-3' height={20} width={20} />
              )}
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
      <ButtonLg onClick={() => navigate(`/report?${queriesBuilder(answers)}`)}>View Detailed Results</ButtonLg>
    </div>
  )
}
// http://localhost:5173/#/report
export default Results
