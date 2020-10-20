import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function Navigation({ topScroll,contactScroll, serviceScroll, certScroll }) {
  return ( 

    <Navbar className=" navbar navbar-light navbar-expand-xs bg-light nav row">
      <a className='navbar-brand col'onClick={topScroll}  href="">Phils Webpage</a>
      <div className='row  align-items-right ml-auto col ' >

        <Nav.Link onClick={serviceScroll} className='col' >Services</Nav.Link>
        <Nav.Link onClick={certScroll} className='col' >Qualifications</Nav.Link>
        <Nav.Link onClick={contactScroll} className='col' >Contact-Us</Nav.Link>

      </div>

    </Navbar>
    
  )
}

export default Navigation