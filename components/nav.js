import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'

const links = [
  { href: '#about', label: 'What we do' },
  { href: '#support', label: 'Support' },
  { href: '/recruitment', label: 'Recruitment' },
  { href: '#team', label: 'Team' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

export default class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isNavbarOpaque: false
    }
    this.navigationBar = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navbarCollapse)
    this.navbarCollapse();
  }

  scrollTo() {
    $('.navbar-collapse').collapse('hide');
  }

  navbarCollapse() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/">
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img src="/static/assets/images/logo.png" style={{height: '36px'}}/>
              <img src="/static/assets/images/brand.png" style={{height: '96px'}}/>
            </div>
          </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {
                links.map(link => (
                  <li key={link.key} className="nav-item">
                    <a className="nav-link js-scroll-trigger" href={link.href}>{link.label}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
