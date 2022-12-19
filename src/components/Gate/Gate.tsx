import { useSlider } from '../../slider/hooks/useSlider'
import Dots from '../Dots/Dots'
import { ButtonLg } from '../UI/Button/Button'

export type GateProps = {}

const Gate = (props: GateProps) => {
  const { nextStep } = useSlider()
  return (
    <div className='relative ml-auto h-full w-full bg-white py-[30px] px-5 shadow-question'>
      <Dots />
      <p className='text-[14px] font-bold text-primary-green'>You’re almost there!</p>
      <p className='leading- text-[25px] font-bold leading-9 text-primary-blue'>
        Tell us a bit more about you and your business to view your results.
      </p>
      <ButtonLg onClick={() => nextStep()}>Submit and View My Results</ButtonLg>
    </div>
  )
}

export default Gate
