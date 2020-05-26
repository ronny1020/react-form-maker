import React from 'react'
import { FormItem } from './FormItem'

export const ReactFormMaker = (props) => {
  const formItems = props.formItems.map((spec, i) => (
    <FormItem key={i} formItemSpec={spec} />
  ))

  return <form>{formItems}</form>
}
