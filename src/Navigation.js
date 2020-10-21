import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function Navigation({ topScroll,contactScroll, serviceScroll, certScroll }) {
  return ( 
    
    <Navbar className=" navbar navbar-light navbar-expand-xs bg-light nav ">
      <title onClick={topScroll} className='navbar-brand  col-sm-7'>
          Phils Webpage
      </title>
      
      <div className='  ml-auto row col-sm-7  ' >

        <Nav.Link onClick={serviceScroll} className='col-sm-8 col-md-3 ' >Services</Nav.Link>
        <Nav.Link onClick={certScroll} className='col-sm-8 col-md-3' >Qualifications</Nav.Link>
        <Nav.Link onClick={contactScroll} className='col-sm-8 col-md-3 ' >Contact-Us</Nav.Link>

      </div>

    </Navbar>

  )
}

export default Navigation