# react-form-maker

> make a react form faster by Object

[![NPM](https://img.shields.io/npm/v/react-form-maker.svg)](https://www.npmjs.com/package/react-form-maker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Why this?

In my opinion, It takes a lot of time on dealing with make pairs with <label> & <input> when creating a form setting the id & htmlFor.
Moreover, usually, the pairs would share the same className or style.
so, why not use a tool to deal with them.
And you still can set className, style and so on for any pairs.

## Install

```bash
npm install --save react-form-maker
```

## Usage

```jsx
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
    options: [{ value: 'male', tag: 'Male' }, { value: 'female' }]
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
```

Bootstrap is used for demo, however, this module don't dependency on Bootstrap.
It's Not necessary to use Bootstrap.

## Basic knowledge

for most of the <label> & <input> pair of formItem would be like:

```jsx
<div>
  <label></label>
  <input />
</div>
```

the div tag would be called "formGroup"

if you use button or submit, there would be no div of formGroup.

## Attributes

- formClassName : Object
  formGroupClassName: string (className of the formGroup)
  labelClassName:string (className of the label)
  inputClassName:string (className of the input)

- formStyle : Object
  formGroupStyle: Object (style of the formGroup)
  labelStyle: Object (style of the label)
  inputStyle: Object (style of the input)

  Ps.The way to write the ClassName and style is the way you write in JSX

- formItems : Object
  For more detail, please read the next section.

- header : JSX
  Add any content before the formItems by JSX.

- footer : JSX
  Add any content after the formItems by JSX.

- other attributes
  Those Would be the attributes of <form>

## formItems

- id : string
  This is the id of the <input> and the htmlFor of the <label>

- label : string
  The text in the <label></label>
  The default is the defined "id"

- formGroupClassName: string (className of the formGroup)
- labelClassName:string (className of the label)
- inputClassName:string (className of the input)
- formGroupStyle: Object (style of the formGroup)
- labelStyle: Object (style of the label)
- inputStyle: Object (style of the input)

  Ps.The way to write the ClassName and style is the way you write in JSX
  "className" or "style" in formItems have priority than in the formClassName or formStyle

- other attributes
  Those Would be the attributes of <input>

- {type:selection}
  Use (options : array) to create list of <option>
  In options use Object to create each <option>, which contain key value & text.
  Key of 'text' would be the text in <option></option>, the default is the defined "value"

- {type:button}
  If you use button or submit, there would be no div of formGroup.
  Simply use "className" or "style" to change the style.

## License

MIT © [ronny1020](https://github.com/ronny1020)
