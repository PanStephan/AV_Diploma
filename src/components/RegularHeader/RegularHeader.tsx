import * as React from 'react'
import Navigation from '../Navigation/Navigation'

const RegularHeader = (logoImg: string, headerBackground: string): Function => (Header): Function => {
  return(): JSX.Element => {
    return (
      <div className={headerBackground}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
                <header>
                  <ul className="header">
                    <Navigation color={'white'} img={logoImg}/>
                  </ul>
                </header>
              </div>
            </div>
          <Header/>
        </div>
      </div>
    )
  }
}
export default RegularHeader