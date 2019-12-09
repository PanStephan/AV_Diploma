import * as React from 'react'
import './errorBoundry.sass'
import * as img from '../../img/error-pic.png'

interface IStateErrorBoundry {
  error: boolean
}

class ErrorBoundry extends React.Component<any, IStateErrorBoundry> {

  state = {
    error: false  
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {
    const{error} = this.state
    return (
      error ? <Error/> : this.props.children
    )
  }
}

const Error = (): JSX.Element => (
  <div className='error-boundry'>
    <img src={img} alt="error"/>
  </div>
)

export default ErrorBoundry

