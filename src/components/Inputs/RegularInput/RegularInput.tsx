import * as React from 'react'
import './regularInput.sass'

interface IPropInput {
  type?: string,
  placeholder?: string,
  className?: string ,
  value?: string,
  onChange(event: React.ChangeEvent): void
}

const RegularInput = (props: IPropInput): JSX.Element => {
  const{type, placeholder, className, onChange, value} = props
  return (
    <input value={value} onChange={onChange} type={type || 'text'} placeholder={placeholder || ''} className={className+' input' || 'input'}></input>
  )
}

export default RegularInput