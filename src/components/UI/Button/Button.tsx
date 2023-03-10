import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { ReactComponent as Arrow } from '../../../assets/svgs/arrow-next.svg'

import './Button.scss'
interface ButtonProps<T extends React.ElementType> {
  as?: T
  children?: ReactNode
}

export function ButtonSml<T extends React.ElementType = 'button'>({
  className,
  children,
  ...props
}: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  return (
    <button className={`btn btn-sml ${className ? className : ''}`} {...props}>
      <span>{children}</span>
      <div className='ml-2 w-2'>
        <Arrow className='h-2 w-2' />
      </div>
    </button>
  )
}

export function ButtonLg<T extends React.ElementType = 'button'>({
  className,
  children,
  ...props
}: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  return (
    <button className={`btn btn-lg ${className ? className : ''}`} {...props}>
      <span>{children}</span>
      <div className='ml-2 w-4'>
        <Arrow className='h-3 w-2' />
      </div>
    </button>
  )
}

export const ArrowLink = <T extends React.ElementType = 'a'>({
  className,
  children,
  ...props
}: ButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  return (
    <a
      className={`arrow-link mt-auto flex items-center text-[17px] font-bold text-dark-grey-blue ${
        className ? className : ''
      }`}
      target={'_blank'}
      {...props}
    >
      <span>{children}</span>
      <div className='ml-2 w-4'>
        <Arrow className='h-3 w-2 stroke-dark-grey-blue' />
      </div>
    </a>
  )
}
