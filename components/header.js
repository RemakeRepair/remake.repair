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
        <a target="_blank" href="https://goo.gl/forms/sgYwROmjZnoiSOck2" className="btn btn-outline-light btn-lg bold-outline-btn">Join a party</a>
      </div>
      <style jsx>{`
        .bold-outline-btn {
          border-radius: 8pt;
          border-width: 2px;
          font-family: 'Cereal', sans-serif;
        }
        `}</style>
    </div>
  </header>
)

export default Header