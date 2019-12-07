import * as React from 'react'
import './successSubmit.sass'
import * as img from '../../../../../img/success-submit.svg'
import RegularBtn from '../../../../Buttons/RegularBtn/RegularBtn'

const SuccessSubmit = (props) => {
  const{changeSubmit} = props
  return (
    <>
      <h2 className='success-submit__title'>Thank you so much We contact you as soon as posible</h2>
      <img src={img} alt="coffee"/>
      <RegularBtn onClick={() => !changeSubmit} text={'Another ?'} className={'success-submit__btn'}/>
    </>
  )
  
}

export default SuccessSubmit
