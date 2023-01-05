import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useSlider } from '../../slider/hooks/useSlider'
import Dots from '../Dots/Dots'
import { ButtonLg } from '../UI/Button/Button'
import { useAppSelector } from '../../redux'
import { selectAnswersArr } from '../../redux/answers/answerSelectors'
import { Input } from '../Form/Input'

import { ReactComponent as Arrow } from '../../assets/svgs/arrow-down.svg'

import './Gate.scss'

export type GateProps = {}

type InputsType = {
  firstName: string
  lastName: string
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

  const answers = useAppSelector(selectAnswersArr)
  const queries = () => {
    let str = ''
    answers.forEach((el, i) => {
      if (i === answers.length - 1) {
        str += `${i}=${el.score}`
      } else {
        str += `${i}=${el.score}&`
      }
    })
    return str
  }

  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)

  const onSubmit: SubmitHandler<InputsType> = (data) => {}

  return (
    <div className='gate'>
      <Dots />
      <p className='text-[14px] font-bold text-primary-green'>You’re almost there!</p>
      <p className='leading- mb-6 text-[25px] font-bold leading-9 text-primary-blue'>
        Tell us a bit more about you and your business to view your results.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4 flex justify-between gap-4'>
          <Input type='text' register={register} label='firstName' labelText='First name' />
          <Input type='text' register={register} label='lastName' labelText='Last name' />
        </div>
        <div className='mb-4 flex justify-between gap-4'>
          <Input type='email' register={register} label='email' labelText='Business email' />
          <Input type='text' register={register} label='jobTitle' labelText='Job title' />
        </div>

        <div className='gate-dropdown'>
          <div className='gate-dropdown-title' onClick={() => setFirst((cur) => !cur)}>
            <span>What pressures impact your organization the most?</span>
            <Arrow className={`transition-all duration-300 ease-in-out ${first ? '-rotate-90' : 'rotate-90'}`} />
          </div>
          <div className={`${first ? 'block' : 'hidden'} gate-dropdown-box`}>
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
              Leadership expectations
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Other / Doesn't exist
            </label>
          </div>
        </div>
        <div className='gate-dropdown'>
          <div className='gate-dropdown-title' onClick={() => setSecond((cur) => !cur)}>
            <span>Where does your business operate?</span>
            <Arrow className={`transition-all duration-300 ease-in-out ${second ? '-rotate-90' : 'rotate-90'}`} />
          </div>
          <div className={`${second ? 'block' : 'hidden'} gate-dropdown-box`}>
            <p className='gate-intructions'>
              Including where you procure your parts, assemble your products, and sell your goods. (Select all that
              apply)
            </p>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              EMEA
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              APAC
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Americas
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Africa
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Other / Doesn't exist
            </label>
          </div>
        </div>
        <div className='gate-dropdown'>
          <div className='gate-dropdown-title' onClick={() => setThird((cur) => !cur)}>
            <span>Who owns your supply chain sustainability program?</span>
            <Arrow className={`transition-all duration-300 ease-in-out ${third ? '-rotate-90' : 'rotate-90'}`} />
          </div>
          <div className={`${third ? 'block' : 'hidden'} gate-dropdown-box`}>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Procurement
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Supply Chain
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Sustainability
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Quality & Engineering
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Legal
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' name='' id='' className='' />
              Other / Doesn't exist
            </label>
          </div>
        </div>
      </form>
      <ButtonLg
        onClick={() => {
          nextStep()
          console.log(`${window.location.origin}/#/report?${queries()}`)
        }}
      >
        Submit and View My Results
      </ButtonLg>
    </div>
  )
}

export default Gate
