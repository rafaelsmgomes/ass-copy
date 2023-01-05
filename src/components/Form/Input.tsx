import { UseFormRegister, FieldValues, Path, UnPackAsyncDefaultValues } from 'react-hook-form'
import React, { useState } from 'react'

import './Input.scss'

export const Input = <T extends FieldValues>({
  label,
  register,
  required,
  labelText,
  ...props
}: {
  required?: boolean
  register: UseFormRegister<T>
  label: Path<UnPackAsyncDefaultValues<T>>
  labelText: string
} & React.HTMLProps<HTMLInputElement>) => {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <div className='input-wrapper'>
      <input
        {...register(label, { required })}
        {...props}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder=' '
      />
      <label className={`input-label ${isFocus ? 'focused' : ''}`}>{labelText}</label>
    </div>
  )
}
