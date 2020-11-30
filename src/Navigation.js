import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from './assets/logo.png'

function Navigation({ topScroll, contactScroll, serviceScroll, certScroll }) {
  return (
    <Navbar className="bColor navbar navbar-light navbar-expand-xs nav d-flex flex-column">
      <div className="py-2 d-flex flex-row align-items-center">
        <img  src={logo} alt="AMPM Remediation Services" className="logo ml-2 ml-md-0" />
        <div class>
          <h1 className='text-white' onClick={topScroll}>AMPM Remediation Services</h1>
          <div className="d-flex flex-column flex-md-row info mt-2">
            <span className=" d-block subheading">416-206-3282</span>
            <span className=" d-block subheading ml-md-3"><a className='bColor' href="#" onClick={contactScroll}>Contact Us</a> for a FREE Quote</span>
          </div>
        </div>
      </div>
      <div className='d-flex flex-row main-nav w-100 text-center justify-content-center align-items-center'>
        <Nav.Link onClick={serviceScroll}>Services</Nav.Link>
        <Nav.Link onClick={certScroll}>Qualifications</Nav.Link>
        <Nav.Link onClick={contactScroll}>Contact Us</Nav.Link>
      </div>
    </Navbar>
  )
}

export default Navigation