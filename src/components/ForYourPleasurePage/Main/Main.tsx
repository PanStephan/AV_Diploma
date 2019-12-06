import * as React from 'react'
import About from './About /About'
import './main.sass'
import List from './List/List'

const Main = (): JSX.Element => (
  <section className="pleasure">
    <div className="container">
      <About/>
      <List/>
    </div>
  </section>
)

export default Main