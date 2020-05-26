import React from 'react'

export const FormItem = (props) => {
  const spec = props.formItemSpec
  const formClassName = props.formClassName
  const formStyle = props.formStyle

  const type = spec.type ? spec.type : 'text'
  const name = spec.name ? spec.name : spec.id
  const label = spec.label ? spec.label : spec.id

  // className or style in spec have priority than in the formClassName or formStyle
  const formGroupClassName = spec.formGroupClassName
    ? spec.formGroupClassName
    : formClassName.formGroupClassName
  const formGroupStyle = spec.formGroupStyle
    ? spec.formGroupStyle
    : formStyle.formGroupStyle

  const labelClassName = spec.labelClassName
    ? spec.labelClassName
    : formClassName.labelClassName
  const labelStyle = spec.labelStyle ? spec.labelStyle : formStyle.labelStyle

  const inputClassName = spec.inputClassName
    ? spec.inputClassName
    : formClassName.inputClassName
  const inputStyle = spec.inputStyle ? spec.inputStyle : formStyle.inputStyle

  return (
    <div className={formGroupClassName} style={formGroupStyle}>
      <label className={labelClassName} style={labelStyle} htmlFor={spec.id}>
        {label}
      </label>
      <input
        className={inputClassName}
        style={inputStyle}
        type={type}
        id={spec.id}
        name={name}
      />
    </div>
  )
}
