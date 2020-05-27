import React from 'react'

import { ReactFormMaker } from 'react-form-maker'
import 'react-form-maker/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
    id: 'gender',
    type: 'select',
    formGroupClassName: 'form-group mb-5',
    options: [{ value: 'male', text: 'Male' }, { value: 'female' }]
  },
  {
    value: 'Submit',
    type: 'submit',
    className: 'btn btn-primary'
  }
]

const App = () => {
  return (
    <>
      <ReactFormMaker
        className='container'
        header={<h1>react-form-maker demo</h1>}
        formItems={formItems}
        formClassName={formClassName}
      />
    </>
  )
}

export default App
