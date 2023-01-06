import React, { ComponentPropsWithRef, useState } from 'react'

import './Input.scss'

export const Input = React.forwardRef<HTMLInputElement, { labelText: string } & ComponentPropsWithRef<'input'>>(
  ({ labelText, ...props }, ref) => {
    const [isFocus, setIsFocus] = useState(false)
    return (
      <div className='input-wrapper'>
        <input onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} placeholder=' ' {...props} ref={ref} />
        <label className={`input-label ${isFocus ? 'focused' : ''}`}>{labelText}</label>
      </div>
    )
  }
)
