import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Layout = (props) => (
  <div id="page-top">
    <Head title="REMAKE" />
    <Nav />
    {props.children}
    <footer className="bg-black small text-center text-white-50">
      <div className="container">
        <i className="fas fa-home"></i> Based in universities; Homegrown in <i className="fas fa-university"></i> Hong Kong
        <div className="row justify-content-center">
          <Link href="/privacy"><a>Privacy Policy</a></Link>
          <span style={{margin: '0 20px'}}>|</span>
          <Link href="/terms"><a>Terms & Conditions</a></Link>
        </div>
      </div>
    </footer>
  </div>
)

export default Layout
