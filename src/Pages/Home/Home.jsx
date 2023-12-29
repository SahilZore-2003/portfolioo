import React from 'react'
import "./Home.scss"

import { About, Contact, Header, Services, Work } from '../../Components'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Services />
      <Work />
      <About />
      <Contact />
    </div>
  )
}

export default Home
