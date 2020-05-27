import React from 'react'

export const FormItem = (props) => {
  const attributes = props.formItemAttributes
  const formClassName = props.formClassName
  const formStyle = props.formStyle

  if (!attributes.type) attributes.type = 'text'
  if (!attributes.label) attributes.label = attributes.id

  // className or style in attributes have priority than in the formClassName or formStyle
  let formGroupClassName
  if (attributes.formGroupClassName) {
    formGroupClassName = attributes.formGroupClassName
  } else {
    if (formClassName)
      if (formClassName.formGroupClassName)
        formGroupClassName = formClassName.formGroupClassName
  }

  let formGroupStyle
  if (attributes.formGroupStyle) {
    formGroupStyle = attributes.formGroupStyle
  } else {
    if (formStyle)
      if (formStyle.formGroupStyle)
        formGroupStyle = formClassName.formGroupStyle
  }

  let labelClassName
  if (attributes.labelClassName) {
    labelClassName = attributes.labelClassName
  } else {
    if (formClassName)
      if (formClassName.labelClassName)
        labelClassName = formClassName.labelClassName
  }

  let labelStyle
  if (attributes.labelStyle) {
    labelStyle = attributes.labelStyle
  } else {
    if (formStyle)
      if (formStyle.labelStyle) labelStyle = formClassName.labelStyle
  }

  let inputClassName
  if (attributes.inputClassName) {
    inputClassName = attributes.inputClassName
    delete attributes.inputClassName
  } else {
    if (formClassName)
      if (formClassName.inputClassName)
        inputClassName = formClassName.inputClassName
  }

  let inputStyle
  if (attributes.inputStyle) {
    inputStyle = attributes.inputStyle
    delete attributes.inputStyle
  } else {
    if (formStyle)
      if (formStyle.inputStyle) inputStyle = formClassName.inputStyle
  }

  switch (attributes.type) {
    case 'select': {
      const optionTags = attributes.options.map((option, i) => {
        const tag = option.tag ? option.tag : option.value
        return (
          <option key={i} {...option}>
            {tag}
          </option>
        )
      })

      return (
        <div className={formGroupClassName} style={formGroupStyle}>
          <label
            className={labelClassName}
            style={labelStyle}
            htmlFor={attributes.id}
          >
            {attributes.label}
          </label>
          <select {...attributes} className={inputClassName} style={inputStyle}>
            {optionTags}
          </select>
        </div>
      )
    }

    case ('button', 'submit'): {
      return <input {...attributes} />
    }

    default:
      return (
        <div className={formGroupClassName} style={formGroupStyle}>
          <label
            className={labelClassName}
            style={labelStyle}
            htmlFor={attributes.id}
          >
            {attributes.label}
          </label>
          <input
            {...attributes}
            className={inputClassName}
            style={inputStyle}
          />
        </div>
      )
  }
}
