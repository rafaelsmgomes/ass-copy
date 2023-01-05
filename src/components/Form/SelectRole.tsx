import React, { ComponentPropsWithRef } from 'react'

export const SelectRole = React.forwardRef<HTMLSelectElement, ComponentPropsWithRef<'select'>>(
  ({ onChange, onBlur, ...props }, ref) => (
    <>
      <select name='Job_Level__c' id='pardot_role' ref={ref} onChange={onChange} onBlur={onBlur} {...props}>
        <option defaultValue='Role'>Role</option>
        <option value='Executive'>Executive</option>
        <option value='C-Level'>C-Level</option>
        <option value='VP-Level'>VP-Level</option>
        <option value='Director'>Director</option>
        <option value='Manager'>Manager</option>
        <option value='Individual Contributor'>Individual Contributor</option>
        <option value='Other'>Other</option>
        <option value='Non-Manager'>Non-Manager</option>
      </select>
    </>
  )
)
