import React from 'react'
import Navigation from './Navigation'

function Header({ topScroll, contactScroll, serviceScroll, certScroll }) {
  return (
    <header className=''>
      <Navigation topScroll={topScroll} contactScroll={contactScroll} serviceScroll={serviceScroll} certScroll={certScroll} />
    </header>

  )
}

export default Header