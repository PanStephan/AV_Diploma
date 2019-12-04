import * as React from 'react'
import './regularInput.sass'

interface IPropInput {
  type?: string,
  placeholder?: string,
  className?: string 
}

const RegularInput = (props: IPropInput): JSX.Element => {
  const{type, placeholder, className} = props
  return (
    <input type={type || 'text'} placeholder={placeholder || ''} className={className+' input' || 'input'}></input>
  )
}

export default RegularInput