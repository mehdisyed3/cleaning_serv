import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function Navigation({ topScroll, contactScroll, serviceScroll, certScroll }) {
  return (
    <Navbar className="bColor navbar navbar-light navbar-expand-xs nav d-flex flex-column text-center">
      <div className="py-2">
        <h1 className='text-center h2 text-white' onClick={topScroll}>AMPM Remediation Services</h1>
        <span className="h3 d-block mt-1 subheading">416-206-3282</span>
        <span className="h3 d-block mt-1 subheading"><a className='bColor' href="#" onClick={contactScroll}>Contact Us</a> for a FREE Quote</span>
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