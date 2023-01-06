import React, { ComponentPropsWithoutRef } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../Form/Input'

import './BookDemo.scss'
import { SelectRole } from '../Form/SelectRole'
import SelectCountry from '../Form/SelectCountry'
import { ButtonLg } from '../UI/Button/Button'

export type BookDemoProps = {}

type InputsType = {
  FirstName: string
  LastName: string
  Email: string
  Phone: string
  Company: string
  Title: string
}

const BookDemo = (props: BookDemoProps) => {
  const { register, handleSubmit } = useForm<InputsType>()

  return (
    <div className='book-demo'>
      <form
        name='demoForm'
        id='demo-form'
        action='https://click.assent.com/l/955773/2022-12-22/49rp4'
        className='form--wrap mfp-prevent-clos'
        method='post'
        data-formtype='demo'
        onSubmit={() => {}}
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
          <p className='mb-4 font-nunito text-base text-neutral-charcoal'>
            By submitting this form, I consent to be contacted by Assent, which includes receiving Assent's eNewsletter
            and other promotional messages via email, in accordance with{' '}
            <a href='' className='font-bold text-primary-blue underline hover:text-black'>
              Assent's Privacy Policy
            </a>
            .
          </p>
          <ButtonLg>Submit</ButtonLg>
        </div>
      </form>
    </div>
  )
}

export default BookDemo
