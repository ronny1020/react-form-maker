import React from 'react'

import { ReactFormMaker } from 'react-form-maker'
import 'react-form-maker/dist/index.css'

const formItems = [
  { id: 'name', type: 'text' },
  { id: 'account' },
  { id: 'phone', type: 'number' }
]

const App = () => {
  return (
    <>
      <h1>react-form-maker demo</h1>
      <ReactFormMaker formItems={formItems} />
    </>
  )
}

export default App
