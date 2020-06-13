import React from 'react'

export const FormItem = (props) => {
  const attributes =
    typeof props.formItemAttributes === 'string'
      ? { id: props.formItemAttributes }
      : props.formItemAttributes

  const formClassName = props.formClassName
  const formStyle = props.formStyle

  if (!attributes.type) attributes.type = 'text'
  if (!attributes.label && attributes.id) attributes.label = attributes.id
  if (!attributes.label && attributes.name) attributes.label = attributes.name

  // className or style in attributes have priority than in the formClassName or formStyle
  let formGroupClassName
  if (attributes.formGroupClassName) {
    formGroupClassName = attributes.formGroupClassName
    delete attributes.formGroupClassName
  } else {
    if (formClassName)
      if (formClassName.formGroupClassName)
        formGroupClassName = formClassName.formGroupClassName
  }

  let formGroupStyle
  if (attributes.formGroupStyle) {
    formGroupStyle = attributes.formGroupStyle
    delete attributes.formGroupStyle
  } else {
    if (formStyle)
      if (formStyle.formGroupStyle)
        formGroupStyle = formClassName.formGroupStyle
  }

  let labelClassName
  if (attributes.labelClassName) {
    labelClassName = attributes.labelClassName
    delete attributes.labelClassName
  } else {
    if (formClassName)
      if (formClassName.labelClassName)
        labelClassName = formClassName.labelClassName
  }

  let labelStyle
  if (attributes.labelStyle) {
    labelStyle = attributes.labelStyle
    delete attributes.labelStyle
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
    case 'div': {
      const child = props.formItemAttributes.child
      delete attributes.type
      delete attributes.child
      return <div {...attributes}>{child}</div>
    }

    case 'select': {
      const optionTags = attributes.options.map((option, i) => {
        if (typeof option === 'string') option = { value: option }
        const text = option.text ? option.text : option.value
        return (
          <option key={i} {...option}>
            {text}
          </option>
        )
      })
      delete attributes.options

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

    case 'radio': {
      const optionTags = attributes.options.map((option, i) => {
        if (typeof option === 'string') option = { value: option }
        const text = option.text ? option.text : option.value
        const id = option.id ? option.id : option.value
        delete option.text
        delete option.id
        return (
          <div
            className={attributes.radioGroupClassName}
            style={attributes.radioGroupStyle}
            key={i}
          >
            <input
              id={id}
              type='radio'
              className={attributes.radioClassName}
              style={attributes.radioStyle}
              name={attributes.name}
              {...option}
            />
            <label
              htmlFor={id}
              className={attributes.radioLabelClassName}
              style={attributes.radioLabelStyle}
            >
              {text}
            </label>
          </div>
        )
      })
      delete attributes.options

      delete attributes.radioClassName
      delete attributes.radioGroupClassName
      delete attributes.radioLabelClassName
      delete attributes.radioStyle
      delete attributes.radioGroupStyle
      delete attributes.radioLabelStyle

      return (
        <div className={formGroupClassName} style={formGroupStyle}>
          <label className={labelClassName} style={labelStyle}>
            {attributes.label}
          </label>
          <div
            {...attributes}
            style={inputStyle}
            className={attributes.inputClassName}
          >
            {optionTags}
          </div>
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
