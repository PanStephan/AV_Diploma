import * as React from 'react'

interface IPropRegularBtn {
  text: string,
  href?: string,
  className: string,
  onClick?(props: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void
}

const RegularBtn = (props : IPropRegularBtn): JSX.Element => {
  const{text, href, className, onClick} = props
  return (
    <a onClick={onClick} className={className} href={href}>{text}</a>  
  ) 
}

export default RegularBtn