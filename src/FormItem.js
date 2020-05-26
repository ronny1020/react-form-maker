import React from 'react'

export const FormItem = (props) => {
  const spec = props.formItemSpec
  const type = spec.type ? spec.type : 'text'
  const name = spec.name ? spec.name : spec.id
  const label = spec.label ? spec.label : spec.id
  return (
    <div>
      <label htmlFor={spec.id}>{label}</label>
      <input type={type} id={spec.id} name={name} />
    </div>
  )
}
