import React from 'react'
import { FormItem } from './FormItem'

export const ReactFormMaker = (props) => {
  const formClassName = props.formClassName
  const formStyle = props.formStyle
  const formItems = props.formItems.map((spec, i) => (
    <FormItem
      key={i}
      formItemSpec={spec}
      formClassName={formClassName}
      formStyle={formStyle}
    />
  ))

  return <form>{formItems}</form>
}
