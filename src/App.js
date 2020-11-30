import React, { useRef } from 'react';
import Header from './Header'
import Service from './Service'
import { certification, services } from './helper/data'
import Qualifications from './Qualifications';
import ContactForm from './ContactForm'
import Tagline from './Tagline'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Col } from 'react-bootstrap'


function App() {

  const service = services.map((item, i) => <Col className="col-md-4 mb-4 col-sm-6" key={i}  ><Service item={item} /></Col>)
  const certs = certification.map((item, i) => <Col className="col-md-4 col-sm-6 mb-4 " key={i}  ><Qualifications item={item} /></Col>)

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 200)

  const contactRef = useRef(null)
  const serviceRef = useRef(null)
  const certRef = useRef(null)
  const topRef = useRef(null)

  const contactScroll = (e) => {
    e.preventDefault()
    scrollToRef(contactRef)
  }


  const serviceScroll = (e) => {
    e.preventDefault()
    scrollToRef(serviceRef)
  }

  const certScroll = (e) => {
    e.preventDefault()
    scrollToRef(certRef)
  }

  const topScroll = (e) => {
    e.preventDefault()
    scrollToRef(topRef)
  }




  return (
    <>
      <div className='fixed-top '>
        <Header className="" topScroll={topScroll} contactScroll={contactScroll} serviceScroll={serviceScroll} certScroll={certScroll} />
      </div>
      <div ref={topRef} className=" container mx-auto smScreen ">
        <div className='mt-5 mb-5 text-center'>
          <h3 ref={serviceRef}>Services We Offer</h3>
          <br />
          <div className=' row d-flex justify-content-center'>
            {service}
          </div>
        </div>
        <hr />
        <div>
          <h3 className='mt-5 mb-5 text-center' ref={certRef}> Qualifications & Certificates</h3>
          <br />
          <div className='row d-flex justify-content-center'>
            {certs}
          </div>
        </div>
        <hr />
        <div>
          <h3 className='mt-5 mb-5 text-center' ref={contactRef}>Contact Us</h3>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
      {/* <Tagline goToContact={contactScroll} /> */}
    </>
  );
}

export default App;
