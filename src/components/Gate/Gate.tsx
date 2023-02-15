import { useEffect, useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import $ from 'jquery'
import { useSlider } from '../../slider/hooks/useSlider'
import Dots from '../Dots/Dots'
import { ButtonLg } from '../UI/Button/Button'
import { useAppSelector } from '../../redux'
import { selectAnswersArr } from '../../redux/answers/answerSelectors'
import { Input } from '../Form/Input'

import { ReactComponent as Arrow } from '../../assets/svgs/arrow-down.svg'

import './Gate.scss'
import { ScoreType } from '../../redux/answers/answersSlice'
import { campaign, channel, content, getParameterByName, medium, pageReferrer, region, source, term } from './utmParams'

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
  utm_campaign: string
  utm_source: string
  ReferringPage: string
  Organizational_Pressures: string
  Operational_Region: string
  Supply_Chain_Program_Owner: string
  Maturity_Model_Result: number[]
  Maturity_Model_Variable_Link: string

  multi_select_region: string[]
  Organizational_Pressures_capture: string[]
}

export type GateProps = {}

const Gate = (props: GateProps) => {
  const { nextStep } = useSlider()

  const { register, handleSubmit, watch, setValue } = useForm<Schema>()

  const answers = useAppSelector(selectAnswersArr)
  const [userLink, setUserLink] = useState(`${window.location.origin}/#/report?${queriesBuilder(answers)}`)

  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)

  const [organizationalString, setOrganizationalString] = useState('')
  const watchSelect = watch('Organizational_Pressures_capture')
  const watchRegion = watch('multi_select_region')
  const onSubmit = (d: FieldValues) => {
    console.log({ d })

    // axios.post('http://click.assent.com/l/955773/2022-12-13/46jzj', { ...d, Maturity_Model_Variable_Link: userLink })
    // nextStep()
  }

  useEffect(() => {
    // source = source == '' ? getParameterByName('itm_source') : source
    // medium = medium == '' ? getParameterByName('itm_medium') : medium
    // campaign = campaign == '' ? getParameterByName('itm_campaign') : campaign
    // term = term == '' ? getParameterByName('itm_term') : term
    // region = region == '' ? getParameterByName('itm_region') : region
    // channel = channel == '' ? getParameterByName('itm_channel') : channel
    // content = content == '' ? getParameterByName('itm_content') : content
  }, [])
  useEffect(() => {
    if (!watchSelect) return
    setValue('Organizational_Pressures', watchSelect.join(','))
  }, [watchSelect, setValue])
  useEffect(() => {
    if (!watchRegion) return
    setValue('Operational_Region', watchRegion.join(','))
  }, [setValue, watchRegion])

  return (
    <div className='gate'>
      <Dots />
      <p className='text-[14px] font-bold text-primary-green'>You’re almost there!</p>
      <p className='leading- mb-6 text-[25px] font-bold leading-9 text-primary-blue'>
        Tell us a bit more about you and your business to view your results.
      </p>
      <iframe src='/form.html' className='hidden' />
      <form
        method='POST'
        action='https://click.assent.com/l/955773/2022-12-13/46jzj'
        data-formtype='demo'
        onSubmit={handleSubmit((data, e) => {
          if (!e) return
          e.preventDefault()
          const form = e.target as HTMLFormElement

          // DEV> using JSONP with ajax to submit to pardot
          // $.ajax({
          //   url: '',
          //   dataType: 'jsonp',
          //   jsonpCallback: 'callback',
          // })

          nextStep()
        })}
      >
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
        <input type='hidden' {...register('utm_term')} id='pardot_utm_term' value={term} />
        <input type='hidden' {...register('utm_region')} id='pardot_utm_region' value={region} />
        <input type='hidden' {...register('utm_channel')} id='pardot_utm_channel' value={channel} />
        <input type='hidden' {...register('utm_content')} id='pardot_utm_content' value={content} />
        <input type='hidden' {...register(`utm_source`)} value={source} />
        <input type='hidden' {...register(`utm_campaign`)} value={campaign} />
        <input type='hidden' {...register('ReferringPage')} id='pardot_refering_page' value={pageReferrer} />
        <input type='text' {...register('Organizational_Pressures')} value={'Something'} className='hidden' />
        <input type='hidden' {...register('Maturity_Model_Variable_Link')} value={userLink} />
        <div className='gate-dropdown'>
          <div className='gate-dropdown-title' onClick={() => setFirst((cur) => !cur)}>
            <span>What sustainability pressures impact your organization the most?</span>
            <Arrow className={`transition-all duration-300 ease-in-out ${first ? '-rotate-90' : 'rotate-90'}`} />
          </div>
          <div className={`${first ? 'block' : 'hidden'} gate-dropdown-box`}>
            <p className='gate-intructions'>(Select all that apply)</p>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                id=''
                className=''
                {...register('Organizational_Pressures_capture')}
                value='Customer demands'
              />
              Customer demands
            </label>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                {...register('Organizational_Pressures_capture')}
                id=''
                className=''
                value='Regulatory requirements'
              />
              Regulatory requirements
            </label>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                {...register('Organizational_Pressures_capture')}
                id=''
                className=''
                value='Investor pressures'
              />
              Investor pressures
            </label>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                {...register('Organizational_Pressures_capture')}
                id=''
                className=''
                value='Leadership expectations'
              />
              Leadership expectations
            </label>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                {...register('Organizational_Pressures_capture')}
                id=''
                className=''
                value="I don't know / Doesn't exist"
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
              <input type='checkbox' id='' className='' {...register('multi_select_region')} value='EMEA' />
              EMEA
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' {...register('multi_select_region')} id='' className='' value='APAC' />
              APAC
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' {...register('multi_select_region')} id='' className='' value={'Americas'} />
              Americas
            </label>
            <label className='checkbox-label'>
              <input type='checkbox' {...register('multi_select_region')} id='' className='' value={'Africa'} />
              Africa
            </label>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                {...register('multi_select_region')}
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
