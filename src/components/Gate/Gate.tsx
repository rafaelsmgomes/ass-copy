import { useSlider } from '../../slider/hooks/useSlider'
import { useForm, SubmitHandler } from 'react-hook-form'
import Dots from '../Dots/Dots'
import { ButtonLg } from '../UI/Button/Button'
import { ReactComponent as Arrow } from '../../assets/svgs/arrow-down.svg'

import './Gate.scss'

export type GateProps = {}

type InputsType = {
  name: string
  email: string
  jobTitle: string
}

const Gate = (props: GateProps) => {
  const { nextStep } = useSlider()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsType>()

  const onSubmit: SubmitHandler<InputsType> = (data) => {}
  return (
    <div className='gate'>
      <Dots />
      <p className='text-[14px] font-bold text-primary-green'>You’re almost there!</p>
      <p className='leading- mb-6 text-[25px] font-bold leading-9 text-primary-blue'>
        Tell us a bit more about you and your business to view your results.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('name')} placeholder='Name' className='gate-input' />
        <div className='mb-4 flex justify-between gap-4'>
          <input type='email' {...register('email')} placeholder='Business Email' className='gate-input' />
          <input type='text' {...register('email')} placeholder='Job Title' className='gate-input' />
        </div>

        <div className='gate-dropdown'>
          <div className='gate-dropdown-title'>
            <span>What pressures impact your organization the most?</span>
            <Arrow />
          </div>
        </div>
        <div className='gate-dropdown'>
          <div className='gate-dropdown-title'>
            <span>Where does your business operate?</span> <Arrow />
          </div>
          <div>
            <p className='gate-intructions'>(Select all that apply)</p>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Customer demands
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Regulatory requirements
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Investor pressures
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Customer demands
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Customer demands
            </label>
          </div>
        </div>
        <div className='gate-dropdown'>
          <div className='gate-dropdown-title'>
            <span>Who owns your supply chain sustainability program?</span> <Arrow />
          </div>
        </div>
      </form>
      <ButtonLg onClick={() => nextStep()}>Submit and View My Results</ButtonLg>
    </div>
  )
}

export default Gate
