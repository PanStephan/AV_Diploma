import * as React from 'react'
import './submitBtn.sass'

interface IPropSubmitBtn {
  text: string,
  disabled: boolean
}

const SubmitBtn = (props: IPropSubmitBtn): JSX.Element => {
  const{text, disabled} = props
  return (
    <button type='submit' disabled={disabled} className='submit-btn'>{text}</button>
  )
}

export default SubmitBtn
