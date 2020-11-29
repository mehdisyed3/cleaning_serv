import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function Navigation({ topScroll,contactScroll, serviceScroll, certScroll }) {
  return ( 
    
    <Navbar className="bColor navbar navbar-light navbar-expand-xs nav d-flex flex-column">
    

      <h1 className='text-center h2'>
        <a className='bColor' href="#" onClick={topScroll}>AMPM Remediation Services</a>
      </h1>
      <span className="h3 text-muted d-block mt-1 subheading">Call 416-206-3282 | <a className='bColor' href="#" onClick={contactScroll}>Free Quote</a></span>
      
      <div className='d-flex flex-row'>
        <Nav.Link onClick={serviceScroll} className='bColor'>Services</Nav.Link>
        <Nav.Link onClick={certScroll} className='bColor'>Qualifications</Nav.Link>
        <Nav.Link onClick={contactScroll} className='bColor'>Contact Us</Nav.Link>
      </div>

    </Navbar>

  )
}

export default Navigation