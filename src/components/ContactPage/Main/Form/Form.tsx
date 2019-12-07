import * as React from 'react'
import RegularInput from '../../../Inputs/RegularInput/RegularInput'
import './form.sass'
import SubmitBtn from '../../../Buttons/SubmitBtn/SubmitBtn'
import axios from 'axios'
import SuccessSubmit from './SuccessSubmit/SuccessSubmit'

interface IPropState {
  name: {
    validation: boolean,
    readySubmit: boolean,
    value: string
  },
  phone: {
    validation: boolean,
    value: string
  },
  mail: {
    validation: boolean,
    readySubmit: boolean,
    value: string
  },
  textarea: {
    validation: boolean,
    readySubmit: boolean,
    value: string
  }
  submit: boolean,
}

const Form: React.FC = () => {  
  
  const [formState, setFormState] = React.useState<IPropState>({
    name: {
      validation: true,
      readySubmit: false,
      value: ''
    }, 
    mail: {
      validation: true,
      readySubmit: false,
      value: ''
    },
    phone: {
      validation: true,
      value: ''
    },
    textarea: {
      validation: true,
      readySubmit: false,
      value: ''
    }, 
    submit: false
  })

  const onSubmitForm = (e) => {
    e.preventDefault()
    const{mail, name, textarea, phone} = formState
    const data = [
      {mail: mail.value},
      {name: name.value},
      {textarea: textarea.value},
      {phone: phone.value}
    ]
    axios.post('/api/db', data)
    .then(res => console.log(res))
    .catch((error) => {
      console.log(error);
    });
    setFormState({...formState,
      name: {
        validation: true,
        readySubmit: false,
        value: ''
      },
      phone: {
        validation: true,
        value: ''
      },
      textarea: {
        validation: true,
        readySubmit: false,
        value: ''
      },
      mail: {
        validation: true,
        readySubmit: false,
        value: ''
      },
      submit: true})
  }

  const onInputChange = (e, type = 'name') => {
    const value = e.target.value
    const mailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    switch(type){
      case 'name':
        if(value.length > 2 && value.length < 20) {
          setFormState({...formState, name: {
            validation: true,
            readySubmit: true,
            value 
          }})
        }
        else setFormState({...formState, name: {
          validation: false,
          readySubmit: false,
          value 
        }})
        break
      case 'mail':
        if(mailRegExp.test(value)) {
          setFormState({...formState, mail: {
            validation: true,
            readySubmit: true,
            value
          }})
        }
        else setFormState({...formState, mail: {
          validation: false,
          readySubmit: false,
          value 
        }})  
        break
      case 'phone':
        if(phoneRegExp.test(value)) {
          setFormState({...formState, phone: {
            validation: true,
            value
          }})
        }
        else setFormState({...formState, phone: {
          validation: false,
          value 
        }})  
        break
      case 'textarea':
        if(value.length > 1) {
          setFormState({...formState, textarea: {
            validation: true,
            readySubmit: true,
            value
          }})
        }
        else setFormState({...formState, textarea: {
          validation: false,
          readySubmit: false,
          value 
        }})  
        break
    }
  }

  const{mail, name, textarea, phone, submit} = formState

  let disabled = true
  if(mail.readySubmit && name.readySubmit && textarea.readySubmit) disabled = false

  const warningActive = 'pleasure-form__warning pleasure-form__warning--active'

  return submit ? <SuccessSubmit onClick={() => setFormState({...formState, submit: false})}/> :
    <form className='pleasure-form' onSubmit={onSubmitForm}>
      <div className={name.validation ? 'pleasure-form__warning' : warningActive}>check correctness name field</div>
      <div className="pleasure-form__wrapper">
        <label className='pleasure-form__label'>Name</label>
        <RegularInput onChange={onInputChange.bind(this)} value={name.value} />
      </div>
      <div className={mail.validation ? 'pleasure-form__warning' : warningActive}>check correctness email field</div>
      <div className="pleasure-form__wrapper">
        <label className='pleasure-form__label'>E-mail</label>
        <RegularInput onChange={(e) => onInputChange.bind(this, e, 'mail')()} value={mail.value}/>
      </div>
      <div className={phone.validation ? 'pleasure-form__warning' : warningActive}>check correctness phone field</div>
      <div className="pleasure-form__wrapper">
        <label className='pleasure-form__label--non-require'>Phone</label>
        <RegularInput type='tel' onChange={(e) => onInputChange.bind(this, e, 'phone')()} placeholder='+7 (___) ___ - ____' value={phone.value} />
      </div>
      <label className='pleasure-form__label pleasure-form__label--block'>Your message</label>
      <div className={textarea.validation ? 'pleasure-form__warning' : warningActive}>check correctness message field</div>
      <textarea onChange={(e) => onInputChange.bind(this, e, 'textarea')()} className='pleasure-form__textarea' placeholder='Tell us...' value={textarea.value}></textarea>
      <SubmitBtn disabled={disabled} text={'Send us'}/>
    </form>
}

export default Form
