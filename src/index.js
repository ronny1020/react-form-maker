import React from 'react'
import { FormItem } from './FormItem'
import { getReactFormData } from './actions/getReactFormData'

export { getReactFormData }

export const ReactFormMaker = (props) => {
  const formClassName = props.formClassName
  const formStyle = props.formStyle
  const formItems = props.formItems.map((attributes, i) => (
    <FormItem
      key={i}
      formItemAttributes={attributes}
      formClassName={formClassName}
      formStyle={formStyle}
    />
  ))
  const propsCopy = { ...props }
  delete propsCopy.formClassName
  delete propsCopy.formStyle
  delete propsCopy.formItems
  delete propsCopy.header
  delete propsCopy.footer

  return (
    <form {...propsCopy}>
      {props.header}
      {formItems}
      {props.footer}
    </form>
  )
}
