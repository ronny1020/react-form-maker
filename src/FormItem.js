import React from 'react'

export const FormItem = (props) => {
  const attributes = props.formItemAttributes
  const formClassName = props.formClassName
  const formStyle = props.formStyle

  if (attributes.type === undefined) attributes.type = 'text'
  if (attributes.label === undefined) attributes.label = attributes.id

  // className or style in attributes have priority than in the formClassName or formStyle
  const formGroupClassName = attributes.formGroupClassName
    ? attributes.formGroupClassName
    : formClassName.formGroupClassName
  const formGroupStyle = attributes.formGroupStyle
    ? attributes.formGroupStyle
    : formStyle.formGroupStyle

  const labelClassName = attributes.labelClassName
    ? attributes.labelClassName
    : formClassName.labelClassName
  const labelStyle = attributes.labelStyle
    ? attributes.labelStyle
    : formStyle.labelStyle

  let inputClassName
  if (attributes.inputClassName === undefined) {
    inputClassName = formClassName.inputClassName
  } else {
    inputClassName = attributes.inputClassName
    delete attributes.inputClassName
  }

  let inputStyle
  if (attributes.inputStyle === undefined) {
    inputStyle = formClassName.inputStyle
  } else {
    inputStyle = attributes.inputStyle
    delete attributes.inputStyle
  }

  return (
    <div className={formGroupClassName} style={formGroupStyle}>
      <label
        className={labelClassName}
        style={labelStyle}
        htmlFor={attributes.id}
      >
        {attributes.label}
      </label>
      <input {...attributes} className={inputClassName} style={inputStyle} />
    </div>
  )
}
