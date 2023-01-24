import { useState } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import { useSlider } from '../../slider/hooks/useSlider'
import Dots from '../Dots/Dots'
import { ButtonLg } from '../UI/Button/Button'
import { useAppSelector } from '../../redux'
import { selectAnswersArr } from '../../redux/answers/answerSelectors'
import { Input } from '../Form/Input'

import { ReactComponent as Arrow } from '../../assets/svgs/arrow-down.svg'

import './Gate.scss'
import axios from 'axios'
import { ScoreType } from '../../redux/answers/answersSlice'
export const queriesBuilder = (arr: ScoreType[]) => {
  let str = ''
  arr.forEach((el, i) => {
    if (i === arr.length - 1) {
      str += `${i}=${el.score}`
    } else {
      str += `${i}=${el.score}&`
    }
  })
  return str
}
type Schema = {
  FirstName: string
  LastName: string
  Email: string
  Title: string
  utm_term: string
  utm_region: string
  utm_channel: string
  utm_content: string
  ReferringPage: string
  Organizational_Pressures: string[]
  Operational_Region: string
  Supply_Chain_Program_Owner: string
  Maturity_Model_Result: number[]
  Maturity_Model_Variable_Link: string
}

export type GateProps = {}

const Gate = (props: GateProps) => {
  const { nextStep } = useSlider()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Schema>()

  const answers = useAppSelector(selectAnswersArr)

  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)

  const onSubmit = (d: FieldValues) => {
    const userLink = `${window.location.origin}/#/report?${queriesBuilder(answers)}`
    console.log({ d })
    console.log(userLink)
    axios.post('http://click.assent.com/l/955773/2022-12-13/46jzj', { ...d, Maturity_Model_Variable_Link: userLink })
    nextStep()
  }

  return (
    <div className='gate'>
      <Dots />
      <p className='text-[14px] font-bold text-primary-green'>You’re almost there!</p>
      <p className='leading- mb-6 text-[25px] font-bold leading-9 text-primary-blue'>
        Tell us a bit more about you and your business to view your results.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 justify-between gap-4'>
          <Input
            type='text'
            {...register('FirstName', { required: true })}
            labelText='First name'
            id='pardot_firstname'
          />
          <Input type='text' {...register('LastName', { required: true })} labelText='Last name' id='pardot_lastname' />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <Input type='email' {...register('Email', { required: true })} labelText='Business email' id='pardot_email' />
          <Input type='text' {...register('Title')} labelText='Job title' id='pardot_job_title' />
        </div>
        {/* REF - hidden inputs */}
        <input type='hidden' {...register('utm_term')} id='pardot_utm_term' value='' />
        <input type='hidden' {...register('utm_region')} id='pardot_utm_region' value='' />
        <input type='hidden' {...register('utm_channel')} id='pardot_utm_channel' value='' />
        <input type='hidden' {...register('utm_content')} id='pardot_utm_content' value='' />
        <input type='hidden' {...register('ReferringPage')} id='pardot_refering_page' value='' />
        <div className='gate-dropdown'>
          <div className='gate-dropdown-title' onClick={() => setFirst((cur) => !cur)}>
            <span>What pressures impact your organization the most?</span>
            <Arrow className={`transition-all duration-300 ease-in-out ${first ? '-rotate-90' : 'rotate-90'}`} />
          </div>
          <div className={`${first ? 'block' : 'hidden'} gate-dropdown-box`}>
            <p className='gate-intructions'>(Select all that apply)</p>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                id=''
                className=''
                {...register('Organizational_Pressures')}
                value='Customer demands'
              />
              Customer demands
            </label>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                {...register('Organizational_Pressures')}
                id=''
                className=''
                value='Regulatory requirements'
              />
              Regulatory requirements
            </label>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                {...register('Organizational_Pressures')}
                id=''
                className=''
                value='Investor pressures'
              />
              Investor pressures
            </label>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                {...register('Organizational_Pressures')}
                id=''
                className=''
                value='Leadership expectations'
              />
              Leadership expectations
            </label>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                {...register('Organizational_Pressures')}
                id=''
                className=''
                value="Other / Doesn't exist"
              />
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
              <input type='checkbox' id='' className='' {...register('Operational_Region')} value='EMEA' />
              EMEA
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' {...register('Operational_Region')} id='' className='' value='APAC' />
              APAC
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' {...register('Operational_Region')} id='' className='' value={'Americas'} />
              Americas
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' {...register('Operational_Region')} id='' className='' value={'Africa'} />
              Africa
            </label>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                {...register('Operational_Region')}
                id=''
                className=''
                value={`Other / Doesn't exist`}
              />
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
              <input type='radio' {...register('Supply_Chain_Program_Owner')} className='' value={`Procurement`} />
              Procurement
            </label>
            <label className='checkbox-label'>
              <input type='radio' {...register('Supply_Chain_Program_Owner')} className='' value={`Supply Chain`} />
              Supply Chain
            </label>
            <label className='checkbox-label'>
              <input type='radio' {...register('Supply_Chain_Program_Owner')} className='' value={`Sustainability`} />
              Sustainability
            </label>
            <label className='checkbox-label'>
              <input
                type='radio'
                {...register('Supply_Chain_Program_Owner')}
                className=''
                value={`Quality & Engineering`}
              />
              Quality & Engineering
            </label>
            <label className='checkbox-label'>
              <input type='radio' {...register('Supply_Chain_Program_Owner')} className='' value={`Legal`} />
              Legal
            </label>
            <label className='checkbox-label'>
              <input
                type='radio'
                {...register('Supply_Chain_Program_Owner')}
                className=''
                value={`Other / Doesn't exist`}
              />
              Other / Doesn't exist
            </label>
          </div>
        </div>
        <ButtonLg type='submit' as='input' className='bg-bruise'>
          Submit and View My Results
        </ButtonLg>
      </form>
    </div>
  )
}

export default Gate
