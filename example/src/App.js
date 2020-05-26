import React from 'react'

import { ReactFormMaker } from 'react-form-maker'
import 'react-form-maker/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const formClassName = {
  formGroupClassName: 'form-group',
  labelClassName: '',
  inputClassName: 'form-control'
}

const formStyle = {
  formGroupStyle: {},
  labelStyle: {},
  inputStyle: {}
}

const formItems = [
  { id: 'name', label: 'Name：', type: 'text' },
  { id: 'account' },
  { id: 'phone', type: 'number' }
]

const App = () => {
  return (
    <>
      <div className='container'>
        <h1>react-form-maker demo</h1>
        <ReactFormMaker
          formItems={formItems}
          formClassName={formClassName}
          formStyle={formStyle}
        />
      </div>
    </>
  )
}

export default App
