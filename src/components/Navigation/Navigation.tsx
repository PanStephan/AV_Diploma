import * as React from 'react'
import './navigaton.sass'
import {NavLink} from 'react-router-dom'

interface IPropNavigation {
	img?: string,
	color?: string
}

const Navigation = (props:IPropNavigation): JSX.Element =>  {
	const{img, color} = props
	let colorClass = 'navigation-link'
	if(color === 'white') colorClass += ' navigation-link--white' 
	if(color === 'black') colorClass += ' navigation-link--black' 
  return (
	<>
		<li className="navigation__item">
			<NavLink to='/'>
				<img src={img} alt="logo"/>
			</NavLink>
		</li>
		<li className="navigation__item">
			<NavLink exact to='/about' className={colorClass}>Our coffee</NavLink>
		</li>
		<li className="navigation__item">
			<NavLink exact to='/pleasure' className={colorClass}>For your pleasure</NavLink>
		</li>
		<li className="navigation__item">
			<NavLink exact to='/contact' className={colorClass}>Contact Us</NavLink>
		</li>
	</>
  )
}

export default Navigation