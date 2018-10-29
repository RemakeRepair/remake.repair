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
        <i className="fas fa-home"></i> Based in Hong Kong; Homegrown in <i className="fas fa-university"></i> HKUST
        <div className="row justify-content-center">
          <Link href="/privacy">Privacy Policy</Link>
          <span style={{margin: '0 20px'}}>|</span>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  </div>
)

export default Layout