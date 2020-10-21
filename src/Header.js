import React from 'react'
import Navigation from './Navigation'

function Header({ topScroll, contactScroll, serviceScroll, certScroll }) {
  return (
    <header>
      <>
      <Navigation topScroll={topScroll} contactScroll={contactScroll} serviceScroll={serviceScroll} certScroll={certScroll} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
      </>
    </header>

  )
}

export default Header