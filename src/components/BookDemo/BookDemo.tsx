import React, { ComponentPropsWithoutRef, Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../Form/Input'

import './BookDemo.scss'
import { SelectRole } from '../Form/SelectRole'
import SelectCountry from '../Form/SelectCountry'
import { ButtonLg } from '../UI/Button/Button'
import { campaign, channel, content, pageReferrer, region, source, term } from '../Gate/utmParams'

export type BookDemoProps = {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>
}

type InputsType = {
  FirstName: string
  LastName: string
  Email: string
  Phone: string
  Company: string
  Title: string
  utm_term: string
  utm_region: string
  utm_source: string
  utm_campaign: string
  utm_channel: string
  utm_content: string
  ReferringPage: string
}

const BookDemo = ({ setModalIsOpen }: BookDemoProps) => {
  const { register, handleSubmit } = useForm<InputsType>()

  return (
    <div className='book-demo'>
      <button onClick={() => void setModalIsOpen(false)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1'
          viewBox='0 0 24 24'
          className='absolute top-5 right-6 h-6 w-6 fill-gray-400'
        >
          <path d='M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z'></path>
        </svg>
      </button>
      <form
        name='demoForm'
        id='demo-form'
        action='https://click.assent.com/l/955773/2022-12-22/49rp4'
        className='form--wrap mfp-prevent-clos'
        method='post'
        data-formtype='demo'
      >
        <div className='book-row'>
          <div className='mt-8 w-full text-center'>
            <p className='mb-5 text-xl font-bold text-primary-blue'>See Deeper, Be Smarter, Grow Better</p>
            <p className='mb-4 font-nunito text-base text-neutral-charcoal'>
              Get in touch to arrange your personalized supply chain sustainability platform demo. Speak with an expert
              about Assent’s Product compliance, ESG and Trade Compliance solutions and services.
            </p>
          </div>
          <div className='flex gap-4'>
            <Input labelText='First Name*' {...register('FirstName', { required: true })} />
            <Input {...register('LastName', { required: true })} labelText='Lirst Name*' />
          </div>
          <Input {...register('Email', { required: true })} type='email' labelText='Business email*' />
          <div className='flex gap-4'>
            <Input {...register('Company', { required: true })} labelText='Company*' />
            <Input {...register('Phone', { required: true })} labelText='Phone' />
          </div>
          <SelectRole className='w-full' />
          <Input {...register('Title', { required: true })} labelText='Job title' />
          <SelectCountry />
          {/* REF - hidden inputs */}
          <input type='hidden' {...register('utm_term')} id='pardot_utm_term' value={term} />
          <input type='hidden' {...register('utm_region')} id='pardot_utm_region' value={region} />
          <input type='hidden' {...register('utm_channel')} id='pardot_utm_channel' value={channel} />
          <input type='hidden' {...register('utm_content')} id='pardot_utm_content' value={content} />
          <input type='hidden' {...register(`utm_source`)} value={source} />
          <input type='hidden' {...register(`utm_campaign`)} value={campaign} />
          <input type='hidden' {...register('ReferringPage')} id='pardot_refering_page' value={pageReferrer} />

          <p className='mb-4 font-nunito text-base text-neutral-charcoal'>
            By submitting this form, I consent to be contacted by Assent, which includes receiving Assent's eNewsletter
            and other promotional messages via email, in accordance with{' '}
            <a href='' className='font-bold text-primary-blue underline hover:text-black'>
              Assent's Privacy Policy
            </a>
            .
          </p>
          <ButtonLg type='submit' className='bg-bruise'>
            Submit
          </ButtonLg>
        </div>
      </form>
    </div>
  )
}

export default BookDemo
