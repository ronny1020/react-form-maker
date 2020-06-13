import React from 'react'

import { ReactFormMaker, getReactFormData } from 'react-form-maker'

const formClassName = {
  formGroupClassName: 'form-group',
  labelClassName: '',
  inputClassName: 'form-control'
}

const formItems = [
  { id: 'name', label: 'Name：', type: 'text', defaultValue: 'test' },
  { id: 'account' },
  { id: 'phone', type: 'number' },
  { id: 'birthday', type: 'date' },
  {
    type: 'radio',
    name: 'framework',
    radioClassName: 'form-check-input',
    radioGroupClassName: 'form-check',
    radioLabelClassName: 'form-check-label',
    options: [
      { value: 'React', defaultChecked: true },
      'Angular',
      { value: 'Vue', text: 'Vue.js' }
    ]
  },
  {
    id: 'gender',
    type: 'select',
    formGroupClassName: 'form-group mb-5',
    options: [{ value: 'male', text: 'Male' }, 'female']
  },
  'test1',
  'test2',
  { type: 'div', className: 'm-5', child: <hr /> },
  {
    value: 'Submit',
    type: 'submit',
    className: 'btn btn-primary'
  }
]

const App = () => {
  return (
    <ReactFormMaker
      className='container'
      header={<h1>react-form-maker demo</h1>}
      formItems={formItems}
      formClassName={formClassName}
      onSubmit={(event) => {
        event.preventDefault()
        const data = getReactFormData(formItems)
        console.log(data)
      }}
    />
  )
}

export default App
