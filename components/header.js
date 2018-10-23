import React from 'react'
import Carousel from './carousel'

const Header = () => (
  <header className="masthead">
    <div className="container d-flex h-100 align-items-center">
      <div className="header-center">
        <h1 className="emphasis">
          Make <br/>
          Your <Carousel titles={['iPhone', 'Laptop', 'Kindle', 'Macbook', 'iPad']}/> <br/>
          Work Again.
        </h1>
        <div className="ruler"></div>
        <button type="button" className="btn btn-outline-light btn-lg" style={{borderRadius: '8pt', borderWidth: '2px', fontFamily:`'Cereal', sans-serif`}}>Join a party</button>
      </div>
    </div>
  </header>
)

export default Header