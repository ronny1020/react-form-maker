import React from 'react'
import { FormItem } from './FormItem'

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

  return (
    <form {...props}>
      {props.header}
      {formItems}
      {props.footer}
    </form>
  )
}
