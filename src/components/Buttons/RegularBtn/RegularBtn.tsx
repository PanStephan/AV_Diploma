import * as React from 'react'
import './regularBtn.sass'

interface IPropRegularBtn {
  text: string,
  href?: string,
  className: string
}

const RegularBtn = (props : IPropRegularBtn): JSX.Element => {
  const{text, href, className} = props
  return (
    <a className={className} href={href}>{text}</a>  
  ) 
}

export default RegularBtn